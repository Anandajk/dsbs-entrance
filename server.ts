import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import * as XLSX from 'xlsx';
import { DEFAULT_QUESTIONS, DEFAULT_SETTINGS } from './src/data/defaultQuestions.ts';
import { Question, SubmissionRecord, ExamSettings, PaperSetCode } from './src/types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');
const QUESTIONS_FILE = path.join(DATA_DIR, 'questions.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helpers for data persistence
function getStoredQuestions(): Question[] {
  try {
    if (fs.existsSync(QUESTIONS_FILE)) {
      const data = fs.readFileSync(QUESTIONS_FILE, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading questions file, falling back to default:', err);
  }
  return DEFAULT_QUESTIONS;
}

function saveStoredQuestions(questions: Question[]): void {
  fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(questions, null, 2), 'utf-8');
}

function getStoredSettings(): ExamSettings {
  try {
    if (fs.existsSync(SETTINGS_FILE)) {
      const data = fs.readFileSync(SETTINGS_FILE, 'utf-8');
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    }
  } catch (err) {
    console.error('Error reading settings file:', err);
  }
  return DEFAULT_SETTINGS;
}

function saveStoredSettings(settings: ExamSettings): void {
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2), 'utf-8');
}

function getSubmissions(): SubmissionRecord[] {
  try {
    if (fs.existsSync(SUBMISSIONS_FILE)) {
      const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading submissions file:', err);
  }
  return [];
}

function saveSubmissions(submissions: SubmissionRecord[]): void {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // --- API ROUTES ---

  // Health check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', serverTime: new Date().toISOString() });
  });

  // Public Exam Configuration & Set Details
  app.get('/api/config', (req: Request, res: Response) => {
    const settings = getStoredSettings();
    const questions = getStoredQuestions();
    const sections = Array.from(new Set(questions.map(q => q.section || 'General')));
    
    // Counts per set
    const setCounts: Record<string, number> = {
      'Set A': questions.filter(q => q.set === 'A').length,
      'Set B': questions.filter(q => q.set === 'B').length,
      'Set C': questions.filter(q => q.set === 'C').length,
      'Set D': questions.filter(q => q.set === 'D').length,
    };

    res.json({
      ...settings,
      totalPoolQuestions: questions.length,
      questionsPerSet: 100,
      paperSets: ['A', 'B', 'C', 'D'],
      setCounts,
      sections
    });
  });

  // Questions for Test-Takers:
  // Randomly assigns Set A, B, C, or D if no set specified, or serves requested set
  app.get('/api/questions', (req: Request, res: Response) => {
    const questions = getStoredQuestions();
    const availableSets: PaperSetCode[] = ['A', 'B', 'C', 'D'];
    
    let requestedSet = (req.query.set as string)?.toUpperCase() as PaperSetCode;
    if (!availableSets.includes(requestedSet)) {
      // Pick random paper set
      requestedSet = availableSets[Math.floor(Math.random() * availableSets.length)];
    }

    const setQuestions = questions.filter(q => q.set === requestedSet);
    
    // Strip answers and explanations
    const safeQuestions = setQuestions.map((q, idx) => ({
      id: q.id,
      set: q.set,
      setQuestionNumber: idx + 1,
      section: q.section,
      question: q.question,
      options: q.options,
      marks: q.marks || 1
    }));

    res.json({
      assignedSet: requestedSet,
      paperSetName: `Set ${requestedSet}`,
      totalQuestions: safeQuestions.length,
      questions: safeQuestions
    });
  });

  // Submit Test & Calculate Results based on the student's assigned Paper Set
  app.post('/api/submit', (req: Request, res: Response) => {
    try {
      const { candidate, paperSet, answers, timeTakenSeconds, tabSwitches, startedAt, submittedAt } = req.body;

      if (!candidate || !candidate.name || !candidate.email || !candidate.phone) {
        return res.status(400).json({ error: 'Candidate name, email, and phone number are required.' });
      }

      // Determine Set letter: 'A', 'B', 'C', or 'D'
      let setLetter: PaperSetCode = 'A';
      if (typeof paperSet === 'string') {
        const cleaned = paperSet.replace(/Set\s*/i, '').trim().toUpperCase();
        if (['A', 'B', 'C', 'D'].includes(cleaned)) {
          setLetter = cleaned as PaperSetCode;
        }
      }

      const allQuestions = getStoredQuestions();
      const settings = getStoredSettings();

      // Only evaluate against the questions belonging to this student's set!
      let targetQuestions = allQuestions.filter(q => q.set === setLetter);
      if (targetQuestions.length === 0) {
        targetQuestions = allQuestions.slice(0, 100);
      }

      let correctCount = 0;
      let incorrectCount = 0;
      let attemptedCount = 0;
      let rawScore = 0;

      const sectionScores: Record<string, { total: number; correct: number; attempted: number }> = {};

      targetQuestions.forEach((q) => {
        const sec = q.section || 'General';
        if (!sectionScores[sec]) {
          sectionScores[sec] = { total: 0, correct: 0, attempted: 0 };
        }
        sectionScores[sec].total += 1;

        const candidateAnswer = answers ? answers[q.id] : undefined;

        if (candidateAnswer !== undefined && candidateAnswer !== null && candidateAnswer !== -1) {
          attemptedCount += 1;
          sectionScores[sec].attempted += 1;

          if (candidateAnswer === q.correctAnswer) {
            correctCount += 1;
            rawScore += 1;
            sectionScores[sec].correct += 1;
          } else {
            incorrectCount += 1;
            if (settings.enableNegativeMarking) {
              rawScore -= settings.negativeMarkPenalty || 0.25;
            }
          }
        }
      });

      const totalQuestions = targetQuestions.length;
      const unansweredCount = totalQuestions - attemptedCount;
      const finalScore = Math.max(0, Math.round(rawScore * 100) / 100);
      const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 1000) / 10 : 0;
      const status: 'Pass' | 'Fail' = percentage >= settings.passingPercentage ? 'Pass' : 'Fail';

      const submission: SubmissionRecord = {
        id: `SUB-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`,
        candidate: {
          name: candidate.name.trim(),
          email: candidate.email.trim(),
          phone: candidate.phone.trim(),
          rollNumber: candidate.rollNumber || `DSBS-${Date.now().toString().slice(-6)}`,
          assignedSet: setLetter
        },
        paperSet: `Set ${setLetter}`,
        startedAt: startedAt || new Date().toISOString(),
        submittedAt: submittedAt || new Date().toISOString(),
        timeTakenSeconds: Number(timeTakenSeconds) || 0,
        totalQuestions,
        attemptedCount,
        correctCount,
        incorrectCount,
        unansweredCount,
        score: finalScore,
        percentage,
        status,
        tabSwitches: Number(tabSwitches) || 0,
        sectionScores,
        answers: answers || {}
      };

      const existingSubmissions = getSubmissions();
      existingSubmissions.unshift(submission);
      saveSubmissions(existingSubmissions);

      res.status(201).json({
        success: true,
        submissionId: submission.id,
        paperSet: submission.paperSet,
        totalQuestions,
        attemptedCount,
        unansweredCount,
        timeTakenSeconds: submission.timeTakenSeconds,
        candidate: submission.candidate,
        submittedAt: submission.submittedAt,
        sectionAttempts: Object.fromEntries(
          Object.entries(sectionScores).map(([sec, val]) => [sec, { total: val.total, attempted: val.attempted }])
        )
      });
    } catch (err: any) {
      console.error('Error in /api/submit:', err);
      res.status(500).json({ error: 'Failed to process submission. ' + err.message });
    }
  });

  // Admin Authentication Endpoint (partners@dsbs.edu.in / Success@123##)
  app.post('/api/admin/login', (req: Request, res: Response) => {
    try {
      const { email, password } = req.body || {};
      const cleanEmail = String(email || '').trim().toLowerCase();
      const cleanPassword = String(password || '').trim();

      if (cleanEmail === 'partners@dsbs.edu.in' && cleanPassword === 'Success@123##') {
        return res.json({
          success: true,
          user: {
            email: 'partners@dsbs.edu.in',
            role: 'Examination Controller',
            institution: 'Dayananda Sagar Business School'
          },
          token: `dsbs-admin-session-${Date.now()}`
        });
      }

      return res.status(401).json({
        success: false,
        error: 'Invalid Examination Controller credentials. Access restricted to authorized personnel.'
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: 'Server authentication error' });
    }
  });

  // Admin: Get all candidate submissions
  app.get('/api/admin/submissions', (req: Request, res: Response) => {
    const submissions = getSubmissions();
    res.json(submissions);
  });

  // Admin: Delete a submission
  app.delete('/api/admin/submissions/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    let submissions = getSubmissions();
    const initialLen = submissions.length;
    submissions = submissions.filter(s => s.id !== id);
    if (submissions.length === initialLen) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    saveSubmissions(submissions);
    res.json({ success: true, count: submissions.length });
  });

  // Admin: Clear all submissions
  app.delete('/api/admin/submissions', (req: Request, res: Response) => {
    saveSubmissions([]);
    res.json({ success: true, message: 'All submissions cleared.' });
  });

  // Admin: Get questions with answer keys (can filter by ?set=A|B|C|D)
  app.get('/api/admin/questions', (req: Request, res: Response) => {
    const questions = getStoredQuestions();
    const setFilter = (req.query.set as string)?.toUpperCase();
    if (setFilter && ['A', 'B', 'C', 'D'].includes(setFilter)) {
      return res.json(questions.filter(q => q.set === setFilter));
    }
    res.json(questions);
  });

  // Admin: Update / replace questions (Supports updating single set or all 400)
  app.post('/api/admin/questions', (req: Request, res: Response) => {
    try {
      const { questions, targetSet } = req.body;
      if (!Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ error: 'Questions array is required.' });
      }

      const currentAll = getStoredQuestions();

      // Clean questions
      const cleanedQuestions: Question[] = questions.map((q, idx) => ({
        id: Number(q.id) || idx + 1,
        set: (q.set && ['A', 'B', 'C', 'D'].includes(q.set.toUpperCase())) ? q.set.toUpperCase() as PaperSetCode : (targetSet || 'A'),
        section: q.section ? String(q.section).trim() : 'General',
        question: String(q.question || '').trim(),
        options: [
          String(q.options?.[0] || 'Option A'),
          String(q.options?.[1] || 'Option B'),
          String(q.options?.[2] || 'Option C'),
          String(q.options?.[3] || 'Option D')
        ] as [string, string, string, string],
        correctAnswer: typeof q.correctAnswer === 'number' && q.correctAnswer >= 0 && q.correctAnswer <= 3 ? q.correctAnswer : 0,
        explanation: q.explanation ? String(q.explanation) : undefined,
        marks: Number(q.marks) || 1
      }));

      let finalBank: Question[];

      if (targetSet && ['A', 'B', 'C', 'D'].includes(targetSet)) {
        // Replace only the target set
        const others = currentAll.filter(q => q.set !== targetSet);
        finalBank = [...others, ...cleanedQuestions].sort((a, b) => a.id - b.id);
      } else {
        finalBank = cleanedQuestions;
      }

      saveStoredQuestions(finalBank);
      res.json({ success: true, total: finalBank.length });
    } catch (err: any) {
      console.error('Error updating questions:', err);
      res.status(500).json({ error: 'Failed to update questions: ' + err.message });
    }
  });

  // Admin: Reset to default 400 questions
  app.post('/api/admin/questions/reset', (req: Request, res: Response) => {
    saveStoredQuestions(DEFAULT_QUESTIONS);
    res.json({ success: true, total: DEFAULT_QUESTIONS.length });
  });

  // Admin: Get Settings
  app.get('/api/admin/settings', (req: Request, res: Response) => {
    res.json(getStoredSettings());
  });

  // Admin: Update Settings
  app.post('/api/admin/settings', (req: Request, res: Response) => {
    try {
      const current = getStoredSettings();
      const updated: ExamSettings = {
        ...current,
        ...req.body,
        durationSeconds: Number(req.body.durationSeconds) > 0 ? Number(req.body.durationSeconds) : current.durationSeconds
      };
      saveStoredSettings(updated);
      res.json(updated);
    } catch (err: any) {
      res.status(500).json({ error: 'Failed to update settings: ' + err.message });
    }
  });

  // Admin: EXCEL EXPORT (.xlsx) with Paper Set details
  app.get('/api/admin/export-excel', (req: Request, res: Response) => {
    try {
      const submissions = getSubmissions();
      const questions = getStoredQuestions();

      // Sheet 1: Master Candidate Results
      const summaryData = submissions.map((s, idx) => {
        const startDate = new Date(s.startedAt);
        const submitDate = new Date(s.submittedAt);
        const formattedDate = !isNaN(submitDate.getTime())
          ? submitDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
          : s.submittedAt;
        const formattedStartTime = !isNaN(startDate.getTime())
          ? startDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          : s.startedAt;
        const formattedSubmitTime = !isNaN(submitDate.getTime())
          ? submitDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          : s.submittedAt;

        const durationMinutes = (s.timeTakenSeconds / 60).toFixed(1);

        return {
          'S.No': idx + 1,
          'Roll / Application No': s.candidate.rollNumber || s.id,
          'Candidate Name': s.candidate.name,
          'Email Address': s.candidate.email,
          'Phone Number': s.candidate.phone,
          'Assigned Paper Set': s.paperSet || 'Set A',
          'Exam Date': formattedDate,
          'Test Start Time': formattedStartTime,
          'Test Submit Time': formattedSubmitTime,
          'Duration (Seconds)': s.timeTakenSeconds,
          'Duration (Minutes)': durationMinutes,
          'Total Questions': s.totalQuestions || 100,
          'Attempted': s.attemptedCount,
          'Correct Answers': s.correctCount,
          'Incorrect Answers': s.incorrectCount,
          'Unanswered': s.unansweredCount,
          'Score (out of 100)': s.score,
          'Percentage (%)': `${s.percentage}%`,
          'Result Status': s.status,
          'Proctoring Tab Violations': s.tabSwitches || 0,
          'Submission ID': s.id
        };
      });

      // Sheet 2: Section Breakdown
      const sectionData = submissions.map((s, idx) => {
        const row: Record<string, any> = {
          'S.No': idx + 1,
          'Roll Number': s.candidate.rollNumber,
          'Candidate Name': s.candidate.name,
          'Paper Set': s.paperSet || 'Set A',
          'Total Score': s.score
        };

        if (s.sectionScores) {
          Object.entries(s.sectionScores).forEach(([section, stat]) => {
            row[`${section} (Correct/Total)`] = `${stat.correct} / ${stat.total}`;
            row[`${section} (%)`] = stat.total > 0 ? `${Math.round((stat.correct / stat.total) * 100)}%` : '0%';
          });
        }
        return row;
      });

      // Sheet 3: Item Response Matrix
      const matrixData = submissions.map((s, idx) => {
        const setCode = (s.paperSet || 'Set A').replace(/Set\s*/i, '').trim().toUpperCase();
        const setQuestions = questions.filter(q => q.set === setCode);
        const questionsList = setQuestions.length > 0 ? setQuestions : questions.slice(0, 100);

        const row: Record<string, any> = {
          'S.No': idx + 1,
          'Roll Number': s.candidate.rollNumber,
          'Candidate Name': s.candidate.name,
          'Paper Set': s.paperSet || 'Set A'
        };

        questionsList.forEach((q, qIndex) => {
          const ansIdx = s.answers ? s.answers[q.id] : undefined;
          const letter = ansIdx !== undefined && ansIdx !== null && ansIdx !== -1
            ? ['A', 'B', 'C', 'D'][ansIdx] || '-'
            : 'Unanswered';
          const isCorrect = ansIdx === q.correctAnswer ? '✓' : ansIdx === undefined || ansIdx === -1 ? '-' : '✗';
          row[`Q${qIndex + 1} (Set ${setCode})`] = `${letter} (${isCorrect})`;
        });

        return row;
      });

      const workbook = XLSX.utils.book_new();

      const wsSummary = XLSX.utils.json_to_sheet(summaryData.length > 0 ? summaryData : [{ Status: 'No submissions recorded yet' }]);
      XLSX.utils.book_append_sheet(workbook, wsSummary, 'Candidate Results');

      if (sectionData.length > 0) {
        const wsSection = XLSX.utils.json_to_sheet(sectionData);
        XLSX.utils.book_append_sheet(workbook, wsSection, 'Section Breakdown');
      }

      if (matrixData.length > 0) {
        const wsMatrix = XLSX.utils.json_to_sheet(matrixData);
        XLSX.utils.book_append_sheet(workbook, wsMatrix, 'Response Matrix');
      }

      const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
      const nowStr = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const filename = `DSBS_Entrance_Exam_Results_${nowStr}.xlsx`;

      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.send(buffer);
    } catch (err: any) {
      console.error('Error generating Excel file:', err);
      res.status(500).json({ error: 'Excel generation failed: ' + err.message });
    }
  });

  // Admin: CSV Export with Paper Set
  app.get('/api/admin/export-csv', (req: Request, res: Response) => {
    try {
      const submissions = getSubmissions();
      const headers = [
        'S.No',
        'Roll No',
        'Candidate Name',
        'Email Address',
        'Phone Number',
        'Paper Set',
        'Exam Date',
        'Start Time',
        'Submit Time',
        'Duration (Sec)',
        'Total Qs',
        'Attempted',
        'Correct',
        'Score',
        'Percentage',
        'Status',
        'Tab Violations'
      ];

      const csvRows = [headers.join(',')];

      submissions.forEach((s, idx) => {
        const dateObj = new Date(s.submittedAt);
        const startObj = new Date(s.startedAt);
        const dStr = !isNaN(dateObj.getTime()) ? dateObj.toLocaleDateString('en-IN') : s.submittedAt;
        const sTime = !isNaN(startObj.getTime()) ? startObj.toLocaleTimeString('en-IN') : s.startedAt;
        const eTime = !isNaN(dateObj.getTime()) ? dateObj.toLocaleTimeString('en-IN') : s.submittedAt;

        const row = [
          idx + 1,
          `"${s.candidate.rollNumber || s.id}"`,
          `"${s.candidate.name.replace(/"/g, '""')}"`,
          `"${s.candidate.email.replace(/"/g, '""')}"`,
          `"${s.candidate.phone.replace(/"/g, '""')}"`,
          `"${s.paperSet || 'Set A'}"`,
          `"${dStr}"`,
          `"${sTime}"`,
          `"${eTime}"`,
          s.timeTakenSeconds,
          s.totalQuestions || 100,
          s.attemptedCount,
          s.correctCount,
          s.score,
          `"${s.percentage}%"`,
          `"${s.status}"`,
          s.tabSwitches || 0
        ];
        csvRows.push(row.join(','));
      });

      const csvContent = csvRows.join('\n');
      const filename = `DSBS_Exam_Submissions_${Date.now()}.csv`;

      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.send(csvContent);
    } catch (err: any) {
      res.status(500).json({ error: 'CSV export failed: ' + err.message });
    }
  });

  // --- CLIENT SERVING ---
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`[DSBS Exam Engine] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
