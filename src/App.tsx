import React, { useState, useEffect } from 'react';
import { Lock, LogIn, ShieldCheck } from 'lucide-react';
import { Header } from './components/Header';
import { StudentRegistration } from './components/StudentRegistration';
import { ExamEngine } from './components/ExamEngine';
import { ResultScreen } from './components/ResultScreen';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminLoginModal } from './components/AdminLoginModal';
import { CandidateInfo, ExamSettings, Question, PaperSetCode } from './types';
import { DEFAULT_QUESTIONS, DEFAULT_SETTINGS } from './data/defaultQuestions';

export default function App() {
  const [currentView, setCurrentView] = useState<'register' | 'exam' | 'result' | 'admin'>('register');
  const [candidate, setCandidate] = useState<CandidateInfo | null>(null);
  const [assignedPaperSet, setAssignedPaperSet] = useState<string>('Set A');
  const [questions, setQuestions] = useState<Omit<Question, 'correctAnswer' | 'explanation'>[]>([]);
  const [settings, setSettings] = useState<ExamSettings>(DEFAULT_SETTINGS);
  const [lastSubmission, setLastSubmission] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Admin authentication state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('dsbs_admin_auth') === 'true';
    } catch {
      return false;
    }
  });
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Fetch initial config
  const fetchExamConfig = async () => {
    try {
      const configRes = await fetch('/api/config');
      if (configRes.ok) {
        const configData = await configRes.json();
        setSettings(configData);
      }
    } catch (err) {
      console.warn('Backend offline, using default settings:', err);
      setSettings(DEFAULT_SETTINGS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExamConfig();

    // Check if an active exam session was in progress (preserves state on accidental refresh)
    try {
      const savedSessionStr = sessionStorage.getItem('dsbs_active_exam_session');
      if (savedSessionStr) {
        const savedSession = JSON.parse(savedSessionStr);
        if (savedSession.candidate && savedSession.paperSet) {
          setCandidate(savedSession.candidate);
          setAssignedPaperSet(savedSession.paperSet);
          const setCode = savedSession.paperSet.replace(/Set\s*/i, '').trim();
          fetch(`/api/questions?set=${setCode}`)
            .then(res => res.json())
            .then(data => {
              if (Array.isArray(data.questions) && data.questions.length > 0) {
                setQuestions(data.questions);
              } else {
                const setQs = DEFAULT_QUESTIONS.filter(q => q.set === setCode);
                setQuestions(setQs.length > 0 ? setQs : DEFAULT_QUESTIONS.slice(0, 100));
              }
              setCurrentView('exam');
            })
            .catch(() => {
              const setQs = DEFAULT_QUESTIONS.filter(q => q.set === setCode);
              setQuestions(setQs.length > 0 ? setQs : DEFAULT_QUESTIONS.slice(0, 100));
              setCurrentView('exam');
            });
        }
      }
    } catch (err) {
      console.warn('Could not restore exam session:', err);
    }

    // Check if admin requested via URL parameter or hash e.g. /?admin=true or #admin
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('admin') === 'true' || window.location.hash === '#admin') {
        if (sessionStorage.getItem('dsbs_admin_auth') === 'true') {
          setCurrentView('admin');
        } else {
          setShowLoginModal(true);
        }
      }
    }
  }, []);

  // When candidate clicks "START TEST NOW":
  // 1. Silently & randomly assign one of the 4 paper sets: Set A, B, C, or D
  // 2. Fetch the 100 questions corresponding to that assigned set
  // 3. Start test timer immediately
  const handleStartTest = async (candidateData: CandidateInfo) => {
    const paperCodes: PaperSetCode[] = ['A', 'B', 'C', 'D'];
    const chosenSet = paperCodes[Math.floor(Math.random() * paperCodes.length)];
    const chosenSetName = `Set ${chosenSet}`;
    setAssignedPaperSet(chosenSetName);

    const updatedCandidate = {
      ...candidateData,
      assignedSet: chosenSet
    };
    setCandidate(updatedCandidate);

    // Save active session for instant accidental refresh recovery
    try {
      sessionStorage.setItem('dsbs_active_exam_session', JSON.stringify({
        candidate: updatedCandidate,
        paperSet: chosenSetName
      }));
    } catch (err) {}

    try {
      const res = await fetch(`/api/questions?set=${chosenSet}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.questions) && data.questions.length > 0) {
          setQuestions(data.questions);
        } else {
          const setQs = DEFAULT_QUESTIONS.filter(q => q.set === chosenSet);
          setQuestions(setQs.length > 0 ? setQs : DEFAULT_QUESTIONS.slice(0, 100));
        }
      } else {
        const setQs = DEFAULT_QUESTIONS.filter(q => q.set === chosenSet);
        setQuestions(setQs.length > 0 ? setQs : DEFAULT_QUESTIONS.slice(0, 100));
      }
    } catch (err) {
      console.warn('Falling back to local questions for set:', chosenSet, err);
      const setQs = DEFAULT_QUESTIONS.filter(q => q.set === chosenSet);
      setQuestions(setQs.length > 0 ? setQs : DEFAULT_QUESTIONS.slice(0, 100));
    }

    // Immediately start exam view and timers
    setCurrentView('exam');
  };

  // Student completes / auto-submits test
  const handleSubmitExam = async (payload: {
    candidate: CandidateInfo;
    paperSet: string;
    answers: Record<number, number>;
    timeTakenSeconds: number;
    tabSwitches: number;
    startedAt: string;
    submittedAt: string;
  }) => {
    try {
      sessionStorage.removeItem('dsbs_active_exam_session');
    } catch (err) {}
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const resultData = await res.json();
        setLastSubmission(resultData);
      } else {
        throw new Error('Failed to submit to server');
      }
    } catch (err) {
      console.error('Submission fallback:', err);
      const setLetter = payload.paperSet.replace(/Set\s*/i, '').trim().toUpperCase() as PaperSetCode;
      const setQuestions = DEFAULT_QUESTIONS.filter(q => q.set === setLetter);
      const evalQuestions = setQuestions.length > 0 ? setQuestions : DEFAULT_QUESTIONS.slice(0, 100);

      const attempted = Object.keys(payload.answers || {}).length;
      setLastSubmission({
        id: `DSBS-SUB-${Date.now()}`,
        paperSet: payload.paperSet,
        totalQuestions: evalQuestions.length,
        attemptedCount: attempted,
        unansweredCount: evalQuestions.length - attempted,
        timeTakenSeconds: payload.timeTakenSeconds,
        candidate: payload.candidate,
        submittedAt: payload.submittedAt,
        tabSwitches: payload.tabSwitches,
      });
    }

    setCurrentView('result');
  };

  const handleRetake = () => {
    setCandidate(null);
    setLastSubmission(null);
    fetchExamConfig();
    setCurrentView('register');
  };

  // Admin login success
  const handleAdminLoginSuccess = () => {
    sessionStorage.setItem('dsbs_admin_auth', 'true');
    setIsAdminAuthenticated(true);
    setShowLoginModal(false);
    setCurrentView('admin');
  };

  // Admin sign out
  const handleAdminSignOut = () => {
    sessionStorage.removeItem('dsbs_admin_auth');
    setIsAdminAuthenticated(false);
    setCurrentView('register');
  };

  const handleNavigate = (view: 'register' | 'admin') => {
    if (view === 'admin') {
      if (isAdminAuthenticated) {
        setCurrentView('admin');
      } else {
        setShowLoginModal(true);
      }
    } else {
      setCurrentView('register');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navigation - Strictly student-focused, no admin buttons */}
      {currentView !== 'exam' && (
        <Header
          currentView={currentView}
          onNavigate={handleNavigate}
          candidateName={candidate?.name}
          isExamActive={false}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1 flex flex-col">
        {loading ? (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center space-y-3">
              <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase">
                Loading Dayananda Sagar Business School Examination Engine...
              </p>
            </div>
          </div>
        ) : (
          <>
            {currentView === 'register' && (
              <StudentRegistration
                settings={settings}
                totalQuestions={100}
                onStartTest={handleStartTest}
              />
            )}

            {currentView === 'exam' && candidate && (
              <ExamEngine
                candidate={candidate}
                questions={questions}
                settings={settings}
                paperSet={assignedPaperSet}
                onSubmitExam={handleSubmitExam}
              />
            )}

            {currentView === 'result' && lastSubmission && (
              <ResultScreen submission={lastSubmission} onRetake={handleRetake} />
            )}

            {currentView === 'admin' && (
              isAdminAuthenticated ? (
                <AdminDashboard onBackToPortal={handleAdminSignOut} />
              ) : (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center max-w-sm">
                    <p className="text-sm font-bold text-slate-800 mb-3">Authentication Required</p>
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Sign In as Admin
                    </button>
                  </div>
                </div>
              )
            )}
          </>
        )}
      </main>

      {/* Admin Login Modal with partners@dsbs.edu.in / Success@123## */}
      <AdminLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleAdminLoginSuccess}
      />

      {/* Clean Academic Footer - No public admin dashboard or paper set mentions */}
      {currentView !== 'exam' && (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-6 px-4 text-center text-xs no-print">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} <strong>Dayananda Sagar Business School (DSBS)</strong>. All Rights Reserved.
            </p>
            
            {/* Dedicated Login Symbol for Administrator */}
            <div className="flex items-center space-x-3 text-[11px] text-slate-400">
              <span className="hidden sm:inline">Examination Cell &bull; Bengaluru</span>
              <button
                type="button"
                onClick={() => {
                  if (isAdminAuthenticated) {
                    setCurrentView('admin');
                  } else {
                    setShowLoginModal(true);
                  }
                }}
                title="Administrator / Controller Login"
                aria-label="Admin Login"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 border border-slate-700 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm group"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-xs tracking-wide">Admin Login</span>
              </button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
