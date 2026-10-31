import React, { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  Download,
  Search,
  Filter,
  Trash2,
  RefreshCw,
  Eye,
  Sliders,
  HelpCircle,
  FileText,
  Upload,
  CheckCircle,
  AlertTriangle,
  X,
  Plus,
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
  Clock,
  Save,
  Check,
  Layers,
  Sparkles
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { ExamSettings, Question, SubmissionRecord, PaperSetCode } from '../types';

interface AdminDashboardProps {
  onBackToPortal: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToPortal }) => {
  const [activeTab, setActiveTab] = useState<'submissions' | 'questions' | 'settings'>('submissions');
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [settings, setSettings] = useState<ExamSettings | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'Pass' | 'Fail'>('all');
  const [filterPaperSet, setFilterPaperSet] = useState<'all' | 'Set A' | 'Set B' | 'Set C' | 'Set D'>('all');
  
  // Question bank tab filters
  const [selectedQuestionSet, setSelectedQuestionSet] = useState<'ALL' | 'A' | 'B' | 'C' | 'D'>('ALL');
  const [questionSearch, setQuestionSearch] = useState('');

  // Modals & Inspection
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionRecord | null>(null);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [targetImportSet, setTargetImportSet] = useState<'A' | 'B' | 'C' | 'D' | 'ALL'>('A');
  const [bulkImportText, setBulkImportText] = useState('');
  const [bulkImportError, setBulkImportError] = useState('');
  const [bulkImportSuccess, setBulkImportSuccess] = useState('');
  
  const [isExporting, setIsExporting] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState(false);

  // In-app confirmations & toasts (replacing window.confirm and alert)
  const [confirmDialog, setConfirmDialog] = useState<{
    title: string;
    message: string;
    confirmLabel?: string;
    danger?: boolean;
    onConfirm: () => void;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((cur) => (cur === msg ? null : cur));
    }, 3500);
  };

  // Load submissions and questions from server
  const loadData = async () => {
    setLoading(true);
    try {
      const [subsRes, qRes, setRes] = await Promise.all([
        fetch('/api/admin/submissions'),
        fetch('/api/admin/questions'),
        fetch('/api/admin/settings'),
      ]);

      if (subsRes.ok) {
        const subsData = await subsRes.json();
        setSubmissions(subsData);
      }
      if (qRes.ok) {
        const qData = await qRes.json();
        setQuestions(qData);
      }
      if (setRes.ok) {
        const setData = await setRes.json();
        setSettings(setData);
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  // EXCEL DOWNLOAD (.XLSX)
  const handleDownloadExcel = () => {
    setIsExporting(true);
    try {
      generateClientExcel();
    } catch (e) {
      console.error('Excel export error, falling back to server endpoint:', e);
      const link = document.createElement('a');
      link.href = '/api/admin/export-excel';
      link.download = `DSBS_Entrance_Results_${Date.now()}.xlsx`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setTimeout(() => setIsExporting(false), 800);
    }
  };

  const generateClientExcel = () => {
    const summaryData = submissions.map((s, idx) => {
      const dateObj = new Date(s.submittedAt);
      const startObj = new Date(s.startedAt);
      const dStr = !isNaN(dateObj.getTime())
        ? dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
        : s.submittedAt;
      const sTime = !isNaN(startObj.getTime())
        ? startObj.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        : s.startedAt;
      const eTime = !isNaN(dateObj.getTime())
        ? dateObj.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        : s.submittedAt;

      return {
        'S.No': idx + 1,
        'Roll / Application No': s.candidate.rollNumber || s.id,
        'Candidate Name': s.candidate.name,
        'Email Address': s.candidate.email,
        'Phone Number': s.candidate.phone,
        'Assigned Paper Set': s.paperSet || 'Set A',
        'Exam Date': dStr,
        'Start Time': sTime,
        'Submit Time': eTime,
        'Duration (Seconds)': s.timeTakenSeconds,
        'Total Questions': s.totalQuestions || 100,
        'Attempted': s.attemptedCount,
        'Correct': s.correctCount,
        'Score': s.score,
        'Percentage': `${s.percentage}%`,
        'Result Status': s.status,
        'Proctoring Tab Violations': s.tabSwitches || 0,
      };
    });

    const ws = XLSX.utils.json_to_sheet(summaryData.length > 0 ? summaryData : [{ Status: 'No submissions yet' }]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'DSBS Candidate Results');
    XLSX.writeFile(wb, `DSBS_Exam_Results_${Date.now()}.xlsx`);
  };

  // CSV DOWNLOAD FALLBACK
  const handleDownloadCSV = () => {
    const link = document.createElement('a');
    link.href = '/api/admin/export-csv';
    link.download = `DSBS_Exam_Results_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Delete submission
  const handleDeleteSubmission = (id: string) => {
    setConfirmDialog({
      title: 'Delete Candidate Record',
      message: 'Are you sure you want to delete this candidate record?',
      danger: true,
      confirmLabel: 'Delete Record',
      onConfirm: async () => {
        setConfirmDialog(null);
        try {
          const res = await fetch(`/api/admin/submissions/${id}`, { method: 'DELETE' });
          if (res.ok) {
            setSubmissions((prev) => prev.filter((s) => s.id !== id));
            if (selectedSubmission?.id === id) setSelectedSubmission(null);
            showToast('Candidate record deleted successfully');
          }
        } catch (err) {
          console.error(err);
        }
      },
    });
  };

  // Clear all submissions
  const handleClearAll = () => {
    setConfirmDialog({
      title: 'Clear All Candidate Submissions',
      message: 'CAUTION: This will delete ALL student exam submissions from the database. Are you sure you wish to proceed?',
      danger: true,
      confirmLabel: 'Delete All Submissions',
      onConfirm: async () => {
        setConfirmDialog(null);
        try {
          const res = await fetch('/api/admin/submissions', { method: 'DELETE' });
          if (res.ok) {
            setSubmissions([]);
            setSelectedSubmission(null);
            showToast('All candidate submissions have been cleared.');
          }
        } catch (err) {
          console.error(err);
        }
      },
    });
  };

  // Save single question edit
  const handleSaveQuestion = async (updatedQ: Question) => {
    const updatedList = questions.map((q) => (q.id === updatedQ.id ? updatedQ : q));
    try {
      const res = await fetch('/api/admin/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questions: updatedList }),
      });
      if (res.ok) {
        setQuestions(updatedList);
        setEditingQuestion(null);
        showToast('Question updated successfully');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Reset questions to default 400 questions (100 per set)
  const handleResetQuestions = () => {
    setConfirmDialog({
      title: 'Reset Question Bank',
      message: 'Reset question bank to default 400 DSBS Entrance Exam questions (100 per Set A, B, C, D)?',
      danger: false,
      confirmLabel: 'Reset Question Bank',
      onConfirm: async () => {
        setConfirmDialog(null);
        try {
          const res = await fetch('/api/admin/questions/reset', { method: 'POST' });
          if (res.ok) {
            await loadData();
            showToast('Question bank reset to default 400 questions (Sets A, B, C, D) successfully!');
          }
        } catch (err) {
          console.error(err);
        }
      },
    });
  };

  // Bulk Import Parser for "i will share the questions and answers later"
  const handleBulkImport = async () => {
    setBulkImportError('');
    setBulkImportSuccess('');

    if (!bulkImportText.trim()) {
      setBulkImportError('Please paste question content or upload a file.');
      return;
    }

    try {
      let parsed: Question[] = [];

      // Try JSON first
      if (bulkImportText.trim().startsWith('[') || bulkImportText.trim().startsWith('{')) {
        const json = JSON.parse(bulkImportText);
        parsed = Array.isArray(json) ? json : [json];
      } else {
        // Plaintext parser
        const rawBlocks = bulkImportText.split(/(?=\n\s*\d+[\.\)])/g).filter((b) => b.trim().length > 0);
        
        parsed = rawBlocks.map((block, idx) => {
          const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
          const firstLine = lines[0] || `Question ${idx + 1}`;
          const qText = firstLine.replace(/^\d+[\.\)]\s*/, '').trim();

          const options: [string, string, string, string] = [
            'Option A',
            'Option B',
            'Option C',
            'Option D',
          ];

          let ansIdx = 0;
          let section = 'General';
          let setVal: PaperSetCode = targetImportSet !== 'ALL' ? targetImportSet : 'A';

          lines.slice(1).forEach((line) => {
            if (/^[A|a][\)\.]\s*(.*)/.test(line)) {
              options[0] = line.replace(/^[A|a][\)\.]\s*/, '');
            } else if (/^[B|b][\)\.]\s*(.*)/.test(line)) {
              options[1] = line.replace(/^[B|b][\)\.]\s*/, '');
            } else if (/^[C|c][\)\.]\s*(.*)/.test(line)) {
              options[2] = line.replace(/^[C|c][\)\.]\s*/, '');
            } else if (/^[D|d][\)\.]\s*(.*)/.test(line)) {
              options[3] = line.replace(/^[D|d][\)\.]\s*/, '');
            } else if (/(?:Ans|Answer)[\s*:]*\s*([A-Da-d0-3])/i.test(line)) {
              const match = line.match(/(?:Ans|Answer)[\s*:]*\s*([A-Da-d0-3])/i);
              if (match) {
                const char = match[1].toUpperCase();
                if (char === 'A' || char === '0') ansIdx = 0;
                else if (char === 'B' || char === '1') ansIdx = 1;
                else if (char === 'C' || char === '2') ansIdx = 2;
                else if (char === 'D' || char === '3') ansIdx = 3;
              }
            } else if (/^Section[\s*:]*\s*(.*)/i.test(line)) {
              const secMatch = line.match(/^Section[\s*:]*\s*(.*)/i);
              if (secMatch) section = secMatch[1].trim();
            } else if (/^Set[\s*:]*\s*([A-D])/i.test(line)) {
              const setMatch = line.match(/^Set[\s*:]*\s*([A-D])/i);
              if (setMatch) setVal = setMatch[1].toUpperCase() as PaperSetCode;
            }
          });

          return {
            id: idx + 1,
            set: setVal,
            section,
            question: qText,
            options,
            correctAnswer: ansIdx,
            marks: 1,
          };
        });
      }

      if (parsed.length === 0) {
        setBulkImportError('Could not parse any questions. Please check the format or paste JSON.');
        return;
      }

      const res = await fetch('/api/admin/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questions: parsed,
          targetSet: targetImportSet !== 'ALL' ? targetImportSet : undefined
        }),
      });

      if (res.ok) {
        await loadData();
        const setLabel = targetImportSet !== 'ALL' ? `for Set ${targetImportSet}` : 'across all sets';
        setBulkImportSuccess(`Successfully imported ${parsed.length} questions ${setLabel} into the DSBS examination bank!`);
        setTimeout(() => {
          setShowBulkModal(false);
          setBulkImportSuccess('');
          setBulkImportText('');
        }, 1800);
      } else {
        const err = await res.json();
        setBulkImportError(err.error || 'Server rejected question list.');
      }
    } catch (e: any) {
      setBulkImportError('Failed to parse questions: ' + e.message);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSavingSettings(true);
    setSettingsSuccess(false);

    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        const updated = await res.json();
        setSettings(updated);
        setSettingsSuccess(true);
        setTimeout(() => setSettingsSuccess(false), 2500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingSettings(false);
    }
  };

  // Filtered submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      sub.candidate.name.toLowerCase().includes(term) ||
      sub.candidate.email.toLowerCase().includes(term) ||
      sub.candidate.phone.includes(term) ||
      (sub.candidate.rollNumber && sub.candidate.rollNumber.toLowerCase().includes(term));

    const matchesStatus = filterStatus === 'all' || sub.status === filterStatus;
    const matchesPaperSet = filterPaperSet === 'all' || sub.paperSet === filterPaperSet;
    return matchesSearch && matchesStatus && matchesPaperSet;
  });

  // Filtered questions for Question Bank viewer
  const filteredQuestions = questions.filter((q) => {
    const matchesSet = selectedQuestionSet === 'ALL' || q.set === selectedQuestionSet;
    const matchesText =
      !questionSearch.trim() ||
      q.question.toLowerCase().includes(questionSearch.toLowerCase()) ||
      q.section.toLowerCase().includes(questionSearch.toLowerCase());
    return matchesSet && matchesText;
  });

  // Calculate high level metrics
  const totalSubmissions = submissions.length;
  const avgScore =
    totalSubmissions > 0
      ? Math.round((submissions.reduce((acc, curr) => acc + curr.score, 0) / totalSubmissions) * 10) / 10
      : 0;
  const highestScore = totalSubmissions > 0 ? Math.max(...submissions.map((s) => s.score)) : 0;
  const passedCount = submissions.filter((s) => s.status === 'Pass').length;
  const passRate = totalSubmissions > 0 ? Math.round((passedCount / totalSubmissions) * 100) : 0;

  // Counts by set
  const setACount = questions.filter(q => q.set === 'A').length;
  const setBCount = questions.filter(q => q.set === 'B').length;
  const setCCount = questions.filter(q => q.set === 'C').length;
  const setDCount = questions.filter(q => q.set === 'D').length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      
      {/* ADMIN TOP BAR */}
      <div className="bg-slate-900 border-b border-slate-800 text-white py-4 px-4 sm:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-extrabold text-white">
                  DSBS Controller of Examinations &bull; Admission Cycle 2027–28
                </h1>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  4 Sets &bull; 60 Min Exam
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Dayananda Sagar Business School &bull; Entrance Assessment Results, Set Allocation & Grade Analytics
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2.5">
            <button
              type="button"
              onClick={loadData}
              title="Refresh Records"
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-xs flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              type="button"
              onClick={onBackToPortal}
              className="px-3.5 py-1.5 rounded-xl bg-rose-900/60 hover:bg-rose-800 text-rose-200 text-xs font-semibold border border-rose-700/60 transition-all cursor-pointer flex items-center space-x-1"
            >
              <span>Sign Out</span>
              <span className="text-[10px] text-rose-400 font-mono hidden sm:inline">(partners@dsbs.edu.in)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('submissions')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'submissions'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Student Results & Excel Export ({submissions.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('questions')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'questions'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>400-Question Bank (Sets A, B, C, D)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Exam Settings & Timings</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: SUBMISSIONS & EXCEL DOWNLOAD */}
        {/* ============================================================== */}
        {activeTab === 'submissions' && (
          <div className="space-y-6">
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Total Candidates
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono-numbers">
                  {totalSubmissions}
                </div>
                <span className="text-[11px] text-slate-500">Across 4 random sets</span>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Average Score
                </span>
                <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono-numbers">
                  {avgScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                </div>
                <span className="text-[11px] text-slate-500">Cohort mean mark</span>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Highest Score
                </span>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono-numbers">
                  {highestScore} <span className="text-xs text-slate-400 font-normal">/ 100</span>
                </div>
                <span className="text-[11px] text-slate-500">Top entrance rank</span>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Pass Rate
                </span>
                <div className="text-2xl sm:text-3xl font-black text-sky-600 font-mono-numbers">
                  {passRate}%
                </div>
                <span className="text-[11px] text-slate-500">{passedCount} qualified</span>
              </div>
            </div>

            {/* ACTION & DOWNLOAD TOOLBAR */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Search, Status & Paper Set Filter */}
              <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search candidate name, email, phone, or roll no..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs font-medium focus:bg-white focus:outline-none focus:border-amber-500 text-slate-800"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Filter by Paper Set */}
                <div className="flex items-center space-x-1.5">
                  <select
                    value={filterPaperSet}
                    onChange={(e) => setFilterPaperSet(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none"
                  >
                    <option value="all">All Paper Sets (A, B, C, D)</option>
                    <option value="Set A">Set A Only</option>
                    <option value="Set B">Set B Only</option>
                    <option value="Set C">Set C Only</option>
                    <option value="Set D">Set D Only</option>
                  </select>
                </div>

                {/* Filter by Status */}
                <div className="flex items-center space-x-1.5">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as any)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="all">All Status</option>
                    <option value="Pass">Pass Only</option>
                    <option value="Fail">Needs Review</option>
                  </select>
                </div>
              </div>

              {/* DOWNLOAD EXCEL & CSV BUTTONS */}
              <div className="flex items-center space-x-2 shrink-0">
                <button
                  type="button"
                  onClick={handleDownloadExcel}
                  disabled={isExporting}
                  className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
                  <span>Download in Excel (.xlsx)</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadCSV}
                  title="Download CSV format"
                  className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                </button>

                {submissions.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    title="Clear all submissions"
                    className="p-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-all border border-rose-200 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

            {/* RESULTS TABLE */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="py-3.5 px-4">#</th>
                      <th className="py-3.5 px-4">Candidate Details</th>
                      <th className="py-3.5 px-4">Paper Set</th>
                      <th className="py-3.5 px-4">Contact Info</th>
                      <th className="py-3.5 px-4">Date & Time Taken</th>
                      <th className="py-3.5 px-4">Duration</th>
                      <th className="py-3.5 px-4">Score</th>
                      <th className="py-3.5 px-4">Result</th>
                      <th className="py-3.5 px-4">Integrity</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan={10} className="py-12 text-center text-slate-400">
                          <Users className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                          <p className="font-semibold text-slate-600 text-sm">No exam submissions found</p>
                          <p className="text-xs text-slate-400 mt-1">
                            {searchTerm || filterPaperSet !== 'all' || filterStatus !== 'all'
                              ? 'Try adjusting your search or set filter criteria'
                              : 'When students take the DSBS entrance test, their details, assigned paper set, and scores appear here automatically.'}
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions.map((sub, idx) => {
                        const dateObj = new Date(sub.submittedAt);
                        const formattedDate = !isNaN(dateObj.getTime())
                          ? dateObj.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
                          : sub.submittedAt;
                        const formattedTime = !isNaN(dateObj.getTime())
                          ? dateObj.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
                          : '';

                        const setBadgeStyle =
                          sub.paperSet === 'Set A'
                            ? 'bg-purple-100 text-purple-900 border-purple-300'
                            : sub.paperSet === 'Set B'
                            ? 'bg-sky-100 text-sky-900 border-sky-300'
                            : sub.paperSet === 'Set C'
                            ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                            : 'bg-amber-100 text-amber-900 border-amber-300';

                        return (
                          <tr key={sub.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3.5 px-4 font-mono text-slate-400">{idx + 1}</td>
                            
                            {/* Candidate Details */}
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-slate-900">{sub.candidate.name}</div>
                              <div className="text-[11px] font-mono text-slate-400">
                                {sub.candidate.rollNumber || sub.id}
                              </div>
                            </td>

                            {/* Assigned Paper Set */}
                            <td className="py-3.5 px-4">
                              <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-black font-mono border ${setBadgeStyle}`}>
                                {sub.paperSet || 'Set A'}
                              </span>
                            </td>

                            {/* Contact Info */}
                            <td className="py-3.5 px-4">
                              <div className="text-slate-700 font-medium">{sub.candidate.email}</div>
                              <div className="text-[11px] text-slate-500 font-mono">{sub.candidate.phone}</div>
                            </td>

                            {/* Date & Time Taken */}
                            <td className="py-3.5 px-4">
                              <div className="font-medium text-slate-800">{formattedDate}</div>
                              <div className="text-[11px] text-slate-400 font-mono">{formattedTime}</div>
                            </td>

                            {/* Time Taken */}
                            <td className="py-3.5 px-4 font-mono text-slate-600">
                              {sub.timeTakenSeconds}s
                            </td>

                            {/* Score & Percentage */}
                            <td className="py-3.5 px-4">
                              <div className="font-extrabold text-slate-900 font-mono-numbers">
                                {sub.score} / {sub.totalQuestions || 100}
                              </div>
                              <div className="text-[11px] text-emerald-600 font-semibold">
                                {sub.percentage}%
                              </div>
                            </td>

                            {/* Pass / Fail */}
                            <td className="py-3.5 px-4">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                                  sub.status === 'Pass'
                                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                    : 'bg-rose-100 text-rose-800 border border-rose-200'
                                }`}
                              >
                                {sub.status}
                              </span>
                            </td>

                            {/* Proctoring Flags */}
                            <td className="py-3.5 px-4">
                              {sub.tabSwitches > 0 ? (
                                <span className="inline-flex items-center space-x-1 text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                                  <AlertTriangle className="w-3 h-3" />
                                  <span>{sub.tabSwitches}</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center space-x-1 text-emerald-600 font-medium">
                                  <CheckCircle className="w-3 h-3" />
                                  <span>Clean</span>
                                </span>
                              )}
                            </td>

                            {/* Action Buttons */}
                            <td className="py-3.5 px-4 text-right">
                              <div className="flex items-center justify-end space-x-2">
                                <button
                                  type="button"
                                  onClick={() => setSelectedSubmission(sub)}
                                  title="View detailed scorecard"
                                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteSubmission(sub.id)}
                                  title="Delete record"
                                  className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: 400-QUESTION BANK & SETS MANAGER */}
        {/* ============================================================== */}
        {activeTab === 'questions' && (
          <div className="space-y-6">
            
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                  <span>DSBS 400-Question Master Pool</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">
                    4 Sets &bull; 100 Questions Each
                  </span>
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Students are randomly assigned Set A, B, C, or D upon starting their examination.
                </p>
              </div>

              <div className="flex items-center space-x-2.5">
                <button
                  type="button"
                  onClick={() => setShowBulkModal(true)}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Upload className="w-4 h-4" />
                  <span>Bulk Import Questions / Set</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetQuestions}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all cursor-pointer"
                >
                  Reset to Default 400
                </button>
              </div>
            </div>

            {/* Set Selection Filter Tabs & Search */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2 overflow-x-auto text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedQuestionSet('ALL')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    selectedQuestionSet === 'ALL'
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All 400 Questions ({questions.length})
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedQuestionSet('A')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    selectedQuestionSet === 'A'
                      ? 'bg-purple-600 text-white shadow'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  Set A ({setACount})
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedQuestionSet('B')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    selectedQuestionSet === 'B'
                      ? 'bg-sky-600 text-white shadow'
                      : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
                  }`}
                >
                  Set B ({setBCount})
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedQuestionSet('C')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    selectedQuestionSet === 'C'
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                  }`}
                >
                  Set C ({setCCount})
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedQuestionSet('D')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    selectedQuestionSet === 'D'
                      ? 'bg-amber-600 text-white shadow'
                      : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                  }`}
                >
                  Set D ({setDCount})
                </button>
              </div>

              {/* Search input for questions */}
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={questionSearch}
                  onChange={(e) => setQuestionSearch(e.target.value)}
                  placeholder="Filter question text or topic..."
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-3">
              {filteredQuestions.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center text-slate-400 border border-slate-200">
                  <p className="font-semibold text-slate-600">No questions match this filter</p>
                </div>
              ) : (
                filteredQuestions.map((q, idx) => {
                  const setBadgeStyle =
                    q.set === 'A'
                      ? 'bg-purple-100 text-purple-900 border-purple-300'
                      : q.set === 'B'
                      ? 'bg-sky-100 text-sky-900 border-sky-300'
                      : q.set === 'C'
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                      : 'bg-amber-100 text-amber-900 border-amber-300';

                  return (
                    <div key={q.id} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-0.5 rounded-md font-mono font-extrabold text-[11px] border ${setBadgeStyle}`}>
                              Set {q.set}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                              {q.section || 'General'}
                            </span>
                            <span className="text-xs font-bold text-slate-400 font-mono">Q#{q.id}</span>
                          </div>
                          <p className="text-sm font-semibold text-slate-800">{q.question}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                            {q.options.map((opt, oIdx) => {
                              const isCorrect = q.correctAnswer === oIdx;
                              return (
                                <div
                                  key={oIdx}
                                  className={`p-2 rounded-xl text-xs flex items-center space-x-2 border ${
                                    isCorrect
                                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                                      : 'bg-slate-50 border-slate-200 text-slate-600'
                                  }`}
                                >
                                  <span className="w-5 h-5 rounded flex items-center justify-center font-bold text-[10px] bg-white border border-slate-200">
                                    {['A', 'B', 'C', 'D'][oIdx]}
                                  </span>
                                  <span>{opt}</span>
                                  {isCorrect && <span className="ml-auto text-[10px] uppercase font-bold text-emerald-600">Correct Ans</span>}
                                </div>
                              );
                            })}
                          </div>

                          {q.explanation && (
                            <p className="text-[11px] text-slate-500 pt-1">
                              <strong className="text-slate-700">Explanation:</strong> {q.explanation}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setEditingQuestion(q)}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs shrink-0 cursor-pointer"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: EXAM SETTINGS & TIME LIMIT */}
        {/* ============================================================== */}
        {activeTab === 'settings' && settings && (
          <div className="max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-1">Entrance Exam Timings & Policies</h2>
            <p className="text-xs text-slate-500 mb-6">
              Configure time limits, passing scores, and examination conduct rules.
            </p>

            {settingsSuccess && (
              <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-semibold flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Settings updated successfully! Changes apply to all future candidate tests.</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-5">
              
              {/* Institution Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Institution Name
                </label>
                <input
                  type="text"
                  value={settings.institutionName}
                  onChange={(e) => setSettings({ ...settings, institutionName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              {/* Exam Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Examination Name
                </label>
                <input
                  type="text"
                  value={settings.examTitle}
                  onChange={(e) => setSettings({ ...settings, examTitle: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:bg-white focus:outline-none"
                />
              </div>

              {/* DURATION CONFIGURATION */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Time Limit (in Seconds)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    min="10"
                    max="14400"
                    value={settings.durationSeconds}
                    onChange={(e) => setSettings({ ...settings, durationSeconds: parseInt(e.target.value, 10) || 60 })}
                    className="w-32 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 font-mono-numbers focus:bg-white focus:outline-none"
                  />
                  <span className="text-xs text-slate-500">
                    ({Math.round(settings.durationSeconds / 60)} minutes {settings.durationSeconds % 60} seconds)
                  </span>
                </div>
                
                {/* Fast presets */}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-[11px] text-slate-400">Quick Presets:</span>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, durationSeconds: 60 })}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                      settings.durationSeconds === 60 ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    60 Seconds (Rapid Demo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, durationSeconds: 3600 })}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                      settings.durationSeconds === 3600 ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    60 Minutes (Standard Exam)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSettings({ ...settings, durationSeconds: 5400 })}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${
                      settings.durationSeconds === 5400 ? 'bg-amber-500 text-slate-950 border-amber-500' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    90 Minutes
                  </button>
                </div>
              </div>

              {/* Passing Percentage */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Passing Threshold (% Marks)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={settings.passingPercentage}
                  onChange={(e) => setSettings({ ...settings, passingPercentage: parseInt(e.target.value, 10) || 50 })}
                  className="w-32 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 font-mono-numbers focus:bg-white focus:outline-none"
                />
              </div>

              {/* Negative marking toggle */}
              <div className="pt-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableNegativeMarking}
                    onChange={(e) => setSettings({ ...settings, enableNegativeMarking: e.target.checked })}
                    className="h-4 w-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300"
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    Enable Negative Marking for Incorrect Answers (-0.25 mark)
                  </span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  disabled={savingSettings}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  <Save className="w-4 h-4 text-amber-400" />
                  <span>{savingSettings ? 'Saving...' : 'Save Settings'}</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>

      {/* MODAL: CANDIDATE DETAIL SCORECARD INSPECTION */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                  <span>{selectedSubmission.candidate.name}</span>
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-mono font-bold border border-amber-300">
                    {selectedSubmission.paperSet || 'Set A'}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Roll: {selectedSubmission.candidate.rollNumber} &bull; ID: {selectedSubmission.id}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Candidate Metadata Grid */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-5">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Email</span>
                <span className="font-semibold text-slate-800 truncate block">{selectedSubmission.candidate.email}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Phone</span>
                <span className="font-semibold text-slate-800">{selectedSubmission.candidate.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Exam Date & Time</span>
                <span className="font-semibold text-slate-800">
                  {new Date(selectedSubmission.submittedAt).toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Time Taken</span>
                <span className="font-semibold text-slate-800 font-mono">{selectedSubmission.timeTakenSeconds}s</span>
              </div>
            </div>

            {/* Scorecard Summary */}
            <div className="grid grid-cols-3 gap-3 text-center mb-5">
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                <span className="text-[10px] uppercase font-bold text-amber-800 block">Final Score</span>
                <span className="text-2xl font-black text-amber-900 font-mono-numbers">
                  {selectedSubmission.score} / {selectedSubmission.totalQuestions || 100}
                </span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                <span className="text-[10px] uppercase font-bold text-emerald-800 block">Percentage</span>
                <span className="text-2xl font-black text-emerald-900 font-mono-numbers">
                  {selectedSubmission.percentage}%
                </span>
              </div>
              <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                <span className="text-[10px] uppercase font-bold text-slate-600 block">Integrity Violations</span>
                <span className="text-2xl font-black text-slate-800 font-mono-numbers">
                  {selectedSubmission.tabSwitches || 0}
                </span>
              </div>
            </div>

            {/* Section Breakdown */}
            {selectedSubmission.sectionScores && (
              <div className="mb-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Section Scores</h4>
                <div className="space-y-1.5 text-xs">
                  {Object.entries(selectedSubmission.sectionScores).map(([sec, stat]) => (
                    <div key={sec} className="flex justify-between items-center p-2 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-700">{sec}</span>
                      <span className="font-mono text-slate-800 font-bold">
                        {stat.correct} / {stat.total} ({stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: BULK IMPORT FOR FUTURE 400 QUESTIONS & ANSWERS */}
      {showBulkModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Import Questions & Answers
                </h3>
                <p className="text-xs text-slate-500">
                  Import questions for an individual set (Set A, B, C, D) or all 400 questions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowBulkModal(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {bulkImportSuccess && (
              <div className="mb-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-bold flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>{bulkImportSuccess}</span>
              </div>
            )}

            {bulkImportError && (
              <div className="mb-3 p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 font-bold flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>{bulkImportError}</span>
              </div>
            )}

            <div className="space-y-3">
              {/* Target Set Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Target Question Set to Update:
                </label>
                <div className="flex flex-wrap gap-2 text-xs">
                  {(['A', 'B', 'C', 'D', 'ALL'] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setTargetImportSet(s)}
                      className={`px-3 py-1.5 rounded-xl font-bold border transition-all cursor-pointer ${
                        targetImportSet === s
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s === 'ALL' ? 'All 400 Questions (Combined)' : `Set ${s} (100 Questions)`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-200 text-xs text-amber-900">
                <p className="font-bold mb-1">Supported Format Example:</p>
                <pre className="font-mono text-[11px] bg-white/80 p-2 rounded-lg border border-amber-200/60 overflow-x-auto">
{`1. What is the full form of EBITDA?
A) Earnings Before Income Tax
B) Earnings Before Interest, Taxes, Depreciation, and Amortization
C) Equity Balance in Trade
D) Estimated Budget for Investments
Ans: B
Section: Business & Economy
Set: A`}
                </pre>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Paste Questions & Answers:
                </label>
                <textarea
                  rows={8}
                  value={bulkImportText}
                  onChange={(e) => setBulkImportText(e.target.value)}
                  placeholder="Paste your questions here, or JSON array format..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const sample = `1. Which city is known as the Silicon Valley of India?
A) Mumbai
B) Bengaluru
C) Hyderabad
D) Pune
Ans: B
Section: General Knowledge
Set: ${targetImportSet !== 'ALL' ? targetImportSet : 'A'}

2. What is the derivative of x^2?
A) x
B) 2x
C) 2
D) x^3
Ans: B
Section: Quantitative Aptitude
Set: ${targetImportSet !== 'ALL' ? targetImportSet : 'A'}`;
                    setBulkImportText(sample);
                  }}
                  className="text-xs text-amber-700 hover:underline font-semibold"
                >
                  Load Sample Format
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowBulkModal(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleBulkImport}
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md cursor-pointer"
                  >
                    Save & Update Set
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: SINGLE QUESTION EDITOR */}
      {editingQuestion && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <h3 className="text-base font-bold text-slate-900">
                Edit Question #{editingQuestion.id} (Set {editingQuestion.set})
              </h3>
              <button
                type="button"
                onClick={() => setEditingQuestion(null)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Set (A, B, C, D)</label>
                  <select
                    value={editingQuestion.set}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, set: e.target.value as PaperSetCode })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="A">Set A</option>
                    <option value="B">Set B</option>
                    <option value="C">Set C</option>
                    <option value="D">Set D</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Section</label>
                  <input
                    type="text"
                    value={editingQuestion.section}
                    onChange={(e) => setEditingQuestion({ ...editingQuestion, section: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Question Text</label>
                <textarea
                  rows={3}
                  value={editingQuestion.question}
                  onChange={(e) => setEditingQuestion({ ...editingQuestion, question: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Options (4 Choices)</label>
                <div className="space-y-2">
                  {editingQuestion.options.map((opt, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center font-bold text-[10px] shrink-0">
                        {['A', 'B', 'C', 'D'][i]}
                      </span>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => {
                          const newOpts = [...editingQuestion.options] as [string, string, string, string];
                          newOpts[i] = e.target.value;
                          setEditingQuestion({ ...editingQuestion, options: newOpts });
                        }}
                        className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                      <label className="flex items-center space-x-1 cursor-pointer shrink-0">
                        <input
                          type="radio"
                          name="correctOption"
                          checked={editingQuestion.correctAnswer === i}
                          onChange={() => setEditingQuestion({ ...editingQuestion, correctAnswer: i })}
                          className="text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-[11px] font-semibold text-emerald-700">Correct</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex justify-end space-x-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingQuestion(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveQuestion(editingQuestion)}
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl cursor-pointer"
                >
                  Save Question
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* In-app Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
          <span className="text-xs font-semibold">{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white text-xs ml-2 cursor-pointer"
          >
            &times;
          </button>
        </div>
      )}

      {/* In-app Confirmation Dialog Modal */}
      {confirmDialog && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-2">{confirmDialog.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">{confirmDialog.message}</p>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setConfirmDialog(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDialog.onConfirm}
                className={`px-4 py-2 text-xs font-bold rounded-xl cursor-pointer ${
                  confirmDialog.danger
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                }`}
              >
                {confirmDialog.confirmLabel || 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
