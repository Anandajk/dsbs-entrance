import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Flag,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Send,
  Maximize2,
  Minimize2,
  ShieldAlert,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FolderOpen
} from 'lucide-react';
import { CandidateInfo, ExamSettings, Question } from '../types';

interface ExamEngineProps {
  candidate: CandidateInfo;
  questions: Omit<Question, 'correctAnswer' | 'explanation'>[];
  settings: ExamSettings;
  paperSet: string;
  onSubmitExam: (submissionData: {
    candidate: CandidateInfo;
    paperSet: string;
    answers: Record<number, number>;
    timeTakenSeconds: number;
    tabSwitches: number;
    startedAt: string;
    submittedAt: string;
  }) => void;
}

export const ExamEngine: React.FC<ExamEngineProps> = ({
  candidate,
  questions,
  settings,
  paperSet,
  onSubmitExam,
}) => {
  const candidateIdentifier = candidate.rollNumber || candidate.email || 'active';
  const storageKey = `dsbs_exam_answers_${candidateIdentifier}`;
  const reviewKey = `dsbs_exam_review_${candidateIdentifier}`;
  const timerStartKey = `dsbs_exam_started_${candidateIdentifier}`;

  // Unique categories
  const categories = Array.from(new Set(questions.map((q) => q.section || 'General')));
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Auto-restore previously selected answers on mount/refresh
  const [answers, setAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed === 'object' && parsed !== null) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Failed to restore answers from sessionStorage:', err);
    }
    return {};
  });

  // Auto-restore marked for review questions
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(() => {
    try {
      const saved = sessionStorage.getItem(reviewKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return new Set(parsed);
        }
      }
    } catch (err) {}
    return new Set();
  });

  // Auto-restore time left based on recorded start timestamp
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    try {
      const savedStart = sessionStorage.getItem(timerStartKey);
      if (savedStart) {
        const elapsed = Math.floor((Date.now() - parseInt(savedStart, 10)) / 1000);
        const remaining = settings.durationSeconds - elapsed;
        if (remaining > 0) return remaining;
        return 1;
      } else {
        sessionStorage.setItem(timerStartKey, String(Date.now()));
      }
    } catch (err) {}
    return settings.durationSeconds || 3600;
  });

  const [tabSwitches, setTabSwitches] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const startTimeRef = useRef<number>(Date.now());
  const startedAtISO = useRef<string>(new Date().toISOString());
  const timerRef = useRef<any>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(timerStartKey);
      if (saved) {
        startTimeRef.current = parseInt(saved, 10);
      } else {
        startTimeRef.current = Date.now();
        sessionStorage.setItem(timerStartKey, String(startTimeRef.current));
      }
    } catch (e) {}
  }, [timerStartKey]);

  // AUTO-SAVE ANSWERS: Persists answers to sessionStorage immediately on change
  useEffect(() => {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(answers));
    } catch (err) {
      console.error('Failed to auto-save answers to sessionStorage:', err);
    }
  }, [answers, storageKey]);

  // AUTO-SAVE REVIEW FLAGS: Persists marked questions to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(reviewKey, JSON.stringify(Array.from(markedForReview)));
    } catch (err) {}
  }, [markedForReview, reviewKey]);

  // Finish exam handler and session cleanup
  const handleFinalSubmit = useCallback(
    (forced = false) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      if (timerRef.current) clearInterval(timerRef.current);

      try {
        sessionStorage.removeItem(storageKey);
        sessionStorage.removeItem(reviewKey);
        sessionStorage.removeItem(timerStartKey);
        sessionStorage.removeItem('dsbs_active_exam_session');
      } catch (err) {
        console.warn('Could not clear sessionStorage:', err);
      }

      const endTime = Date.now();
      const elapsedSeconds = Math.min(
        settings.durationSeconds,
        Math.max(1, Math.round((endTime - (startTimeRef.current || endTime)) / 1000))
      );

      onSubmitExam({
        candidate,
        paperSet,
        answers,
        timeTakenSeconds: forced ? settings.durationSeconds : elapsedSeconds,
        tabSwitches,
        startedAt: startedAtISO.current,
        submittedAt: new Date().toISOString(),
      });
    },
    [answers, candidate, isSubmitting, onSubmitExam, paperSet, reviewKey, settings.durationSeconds, storageKey, tabSwitches, timerStartKey]
  );

  // Timer countdown
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleFinalSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleFinalSubmit]);

  // Proctoring tab switch detector
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitches((prev) => prev + 1);
        setShowWarning(true);
      }
    };

    const handleWindowBlur = () => {
      setTabSwitches((prev) => prev + 1);
      setShowWarning(true);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Select an option directly on any question
  const handleSelectOption = (qId: number, optionIndex: number) => {
    setAnswers((prev) => {
      if (prev[qId] === optionIndex) {
        const next = { ...prev };
        delete next[qId];
        return next;
      }
      return { ...prev, [qId]: optionIndex };
    });
  };

  const handleClearResponse = (qId: number) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
  };

  const handleToggleReview = (qId: number) => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) {
        next.delete(qId);
      } else {
        next.add(qId);
      }
      return next;
    });
  };

  // Jump to next or specific category
  const goToCategory = (categoryIdx: number) => {
    setCurrentCategoryIndex(categoryIdx);
    setShowAllCategories(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Jump directly to a question from the palette
  const scrollToQuestion = (qId: number) => {
    const targetQ = questions.find((q) => q.id === qId);
    if (!targetQ) return;

    if (!showAllCategories) {
      const catIdx = categories.indexOf(targetQ.section || 'General');
      if (catIdx !== -1 && catIdx !== currentCategoryIndex) {
        setCurrentCategoryIndex(catIdx);
      }
    }

    setTimeout(() => {
      const el = document.getElementById(`question-card-${qId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Statistics
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const reviewCount = markedForReview.size;
  const unansweredCount = totalQuestions - answeredCount;
  const attemptedPercentage = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  const progressRadius = 16;
  const progressCircumference = 2 * Math.PI * progressRadius;
  const progressStrokeDashoffset = progressCircumference - (attemptedPercentage / 100) * progressCircumference;

  // Active questions for current view
  const currentCategoryName = categories[currentCategoryIndex] || categories[0];
  const displayedQuestions = showAllCategories
    ? questions
    : questions.filter((q) => (q.section || 'General') === currentCategoryName);

  // Time format
  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.max(0, Math.min(100, (timeLeft / (settings.durationSeconds || 3600)) * 100));
  const isUrgent = timeLeft <= 300; // 5 minutes warning for 60-min exam

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col select-none">
      
      {/* Tab Switch Warning Toast */}
      {showWarning && (
        <div className="fixed top-20 right-4 z-50 bg-rose-600 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border border-rose-400 animate-bounce">
          <ShieldAlert className="w-5 h-5 shrink-0" />
          <div className="text-xs">
            <p className="font-bold">Proctoring Alert: Tab Switch Detected</p>
            <p className="opacity-90">Switching windows has been logged on your DSBS candidate sheet ({tabSwitches} violation{tabSwitches > 1 ? 's' : ''}).</p>
          </div>
          <button
            onClick={() => setShowWarning(false)}
            className="ml-2 text-xs bg-rose-700 hover:bg-rose-800 px-2.5 py-1 rounded-lg font-bold cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      )}

      {/* FIXED TOP EXAM CONTROL BAR */}
      <header className="sticky top-0 z-30 bg-slate-900 text-white border-b border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Candidate Info */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-amber-400 font-extrabold text-sm sm:text-base tracking-wide">DSBS ENTRANCE 2027–28</span>
                <span className="hidden sm:inline-block text-slate-500">|</span>
                <span className="text-xs text-slate-300 hidden sm:inline font-mono">Roll: {candidate.rollNumber}</span>
              </div>
              <p className="text-xs text-slate-400 truncate max-w-[130px] sm:max-w-xs">
                Candidate: <span className="text-white font-medium">{candidate.name}</span>
              </p>
            </div>
          </div>

          {/* Center: Dynamic Circular Progress Ring + Live Digital Countdown Timer */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Dynamic Circular Progress Ring: % Questions Attempted */}
            <div
              className="flex items-center space-x-2 sm:space-x-2.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-xs"
              title={`Attempted: ${answeredCount} of ${totalQuestions} questions (${attemptedPercentage}%)`}
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                <svg className="w-9 h-9 sm:w-10 sm:h-10 -rotate-90 transform" viewBox="0 0 40 40">
                  {/* Background Track Ring */}
                  <circle
                    cx="20"
                    cy="20"
                    r={progressRadius}
                    className="text-slate-700/60"
                    strokeWidth="3.2"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  {/* Dynamic Progress Indicator Ring */}
                  <circle
                    cx="20"
                    cy="20"
                    r={progressRadius}
                    className={`transition-all duration-500 ease-out ${
                      attemptedPercentage >= 80
                        ? 'text-emerald-400'
                        : attemptedPercentage >= 40
                        ? 'text-amber-400'
                        : attemptedPercentage > 0
                        ? 'text-sky-400'
                        : 'text-slate-600'
                    }`}
                    strokeWidth="3.2"
                    strokeDasharray={progressCircumference}
                    strokeDashoffset={progressStrokeDashoffset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                {/* Center Percentage Display */}
                <span className="absolute text-[10px] sm:text-[11px] font-extrabold font-mono text-white tracking-tighter">
                  {attemptedPercentage}%
                </span>
              </div>

              {/* Metric Label on Medium/Large Screens */}
              <div className="hidden sm:block text-left leading-tight pr-1">
                <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                  Attempted
                </div>
                <div className="text-xs font-bold text-white font-mono">
                  <span className="text-amber-400">{answeredCount}</span>
                  <span className="text-slate-400 font-normal text-[11px]">/{totalQuestions}</span>
                </div>
              </div>
            </div>

            {/* Live Digital Countdown Timer */}
            <div
              className={`flex items-center space-x-2 sm:space-x-2.5 px-3 sm:px-4 py-1.5 rounded-2xl border transition-all ${
                isUrgent
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-slate-800/90 border-slate-700 text-amber-300'
              }`}
            >
              <Clock className={`w-4 h-4 ${isUrgent ? 'text-rose-400' : 'text-amber-400'}`} />
              <div className="text-right">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 leading-none">Time Left</div>
                <div className="text-sm sm:text-lg font-extrabold font-mono tracking-wider">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>

            {/* Fullscreen Button */}
            <button
              type="button"
              onClick={toggleFullscreen}
              title="Toggle Fullscreen"
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 text-xs hidden sm:flex items-center cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Right: Auto-Save Status & Submit Button */}
          <div className="flex items-center space-x-2.5">
            <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-emerald-400 font-medium select-none">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Answers Auto-Saved</span>
            </div>

            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Test</span>
            </button>
          </div>

        </div>

        {/* Dynamic Timer Shrink Bar */}
        <div className="w-full bg-slate-800 h-1.5">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${
              isUrgent ? 'bg-rose-500' : timeLeft <= 30 ? 'bg-amber-500' : 'bg-emerald-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* CATEGORY TABS BAR - Instant navigation between the 5 Categories */}
      <div className="sticky top-[61px] z-20 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 overflow-x-auto">
          
          <div className="flex items-center space-x-2 min-w-max">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center space-x-1">
              <FolderOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Categories:</span>
            </span>

            {categories.map((cat, idx) => {
              const catQs = questions.filter((q) => (q.section || 'General') === cat);
              const answeredInCat = catQs.filter((q) => answers[q.id] !== undefined).length;
              const isActive = !showAllCategories && currentCategoryIndex === idx;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => goToCategory(idx)}
                  className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm ring-1 ring-amber-400'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{idx + 1}. {cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-slate-950 text-white' : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    {answeredInCat}/{catQs.length}
                  </span>
                </button>
              );
            })}

            {/* View All Questions in One Page Toggle */}
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                showAllCategories
                  ? 'bg-slate-900 text-white font-bold border-slate-900'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {showAllCategories ? 'Viewing All 100 Qs' : 'View All 100 on 1 Page'}
            </button>
          </div>

          <div className="text-right text-xs shrink-0 hidden sm:block">
            <span className="text-slate-500 font-medium">Total Solved: </span>
            <strong className="text-emerald-600 font-mono font-bold">{answeredCount} / {totalQuestions}</strong>
          </div>

        </div>
      </div>

      {/* MAIN EXAM WORKSPACE */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT / CENTER: ALL QUESTIONS IN THE CURRENT CATEGORY (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-5">
          
          {/* Active Category Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 sm:p-5 text-white flex items-center justify-between shadow-sm">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                  {showAllCategories ? 'All Categories' : `Category ${currentCategoryIndex + 1} of ${categories.length}`}
                </span>
                <span className="text-xs text-slate-300">
                  {displayedQuestions.length} Questions in this section
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                {showAllCategories ? 'Comprehensive 100-Question Test' : currentCategoryName}
              </h2>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 block">Section Progress</span>
              <span className="text-sm font-bold text-amber-400 font-mono">
                {displayedQuestions.filter((q) => answers[q.id] !== undefined).length} / {displayedQuestions.length} Answered
              </span>
            </div>
          </div>

          {/* QUESTIONS LIST IN THIS CATEGORY */}
          <div className="space-y-4">
            {displayedQuestions.map((q, qIndex) => {
              const globalIndex = questions.findIndex((item) => item.id === q.id);
              const selectedOption = answers[q.id];
              const isMarked = markedForReview.has(q.id);

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all shadow-xs ${
                    selectedOption !== undefined
                      ? 'border-emerald-300/80 ring-1 ring-emerald-400/20 bg-white'
                      : 'border-slate-200'
                  }`}
                >
                  {/* Question Number & Status Header */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="w-7 h-7 rounded-lg bg-slate-900 text-amber-400 font-black font-mono flex items-center justify-center text-xs shadow-xs">
                        {globalIndex + 1}
                      </span>
                      <span className="font-bold text-slate-800">
                        Question {globalIndex + 1} of {totalQuestions}
                      </span>
                      {showAllCategories && (
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                          {q.section}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleToggleReview(q.id)}
                        className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer ${
                          isMarked
                            ? 'bg-amber-400 text-slate-950 border-amber-500 font-bold'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Flag className="w-3 h-3" />
                        <span>{isMarked ? 'Flagged' : 'Flag'}</span>
                      </button>

                      {selectedOption !== undefined && (
                        <button
                          type="button"
                          onClick={() => handleClearResponse(q.id)}
                          className="px-2 py-1 rounded-lg text-[11px] font-medium text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed mb-3">
                    {q.question}
                  </p>

                  {/* 4 Clickable Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((option, optIdx) => {
                      const isChecked = selectedOption === optIdx;
                      const letter = ['A', 'B', 'C', 'D'][optIdx];

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full text-left p-3 rounded-xl border transition-all flex items-start space-x-2.5 cursor-pointer ${
                            isChecked
                              ? 'bg-amber-500/10 border-amber-500 shadow-sm ring-1 ring-amber-500/40 text-slate-950 font-semibold'
                              : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-md shrink-0 flex items-center justify-center font-bold text-xs transition-all ${
                              isChecked
                                ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                                : 'bg-white text-slate-500 border border-slate-300'
                            }`}
                          >
                            {letter}
                          </div>
                          <span className="text-xs sm:text-sm font-medium pt-0.5 leading-snug">
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>

          {/* BOTTOM CATEGORY NAVIGATION BUTTONS */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-500">
                Completed this category? Proceed to the next section or submit your test.
              </p>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto">
              {/* Previous Category button */}
              {currentCategoryIndex > 0 && !showAllCategories && (
                <button
                  type="button"
                  onClick={() => goToCategory(currentCategoryIndex - 1)}
                  className="flex-1 sm:flex-none flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Prev Category</span>
                </button>
              )}

              {/* Next Category button */}
              {currentCategoryIndex < categories.length - 1 && !showAllCategories ? (
                <button
                  type="button"
                  onClick={() => goToCategory(currentCategoryIndex + 1)}
                  className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black shadow-md transition-all cursor-pointer"
                >
                  <span>Next Category: {categories[currentCategoryIndex + 1]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(true)}
                  className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-md transition-all cursor-pointer"
                >
                  <span>Review & Submit Final Exam</span>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT: QUESTION PALETTE MATRIX (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 sticky top-36">
            
            {/* Palette Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>Question Matrix ({totalQuestions})</span>
              </h3>
              <span className="text-[11px] text-slate-500 font-mono">
                {answeredCount}/{totalQuestions} Done
              </span>
            </div>

            {/* Quick Status Legend */}
            <div className="grid grid-cols-2 gap-2 my-3 text-[11px] text-slate-600">
              <div className="flex items-center space-x-1.5">
                <div className="w-3.5 h-3.5 rounded bg-emerald-500 text-white text-[9px] flex items-center justify-center font-bold">✓</div>
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-3.5 h-3.5 rounded bg-slate-200 border border-slate-300"></div>
                <span>Unattempted ({unansweredCount})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-3.5 h-3.5 rounded bg-amber-400 text-slate-950 text-[9px] flex items-center justify-center font-bold">⚑</div>
                <span>Flagged ({reviewCount})</span>
              </div>
            </div>

            {/* 100 QUESTION BUTTONS GRID */}
            <p className="text-[11px] text-slate-400 mb-1.5 font-medium">Click any number to scroll directly to question:</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 lg:grid-cols-5 gap-1.5 max-h-72 overflow-y-auto p-1.5 bg-slate-50/70 rounded-xl border border-slate-200">
              {questions.map((q, idx) => {
                const isSelected = answers[q.id] !== undefined;
                const isFlagged = markedForReview.has(q.id);

                let btnClass = 'bg-white text-slate-700 border-slate-200 hover:border-slate-300';
                if (isSelected && isFlagged) {
                  btnClass = 'bg-purple-600 text-white border-purple-700 font-bold';
                } else if (isFlagged) {
                  btnClass = 'bg-amber-400 text-slate-950 border-amber-500 font-bold';
                } else if (isSelected) {
                  btnClass = 'bg-emerald-600 text-white border-emerald-700 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => scrollToQuestion(q.id)}
                    className={`h-8 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center border cursor-pointer ${btnClass}`}
                    title={`Q${idx + 1}: ${isSelected ? 'Answered' : 'Unanswered'}${isFlagged ? ' (Flagged)' : ''}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Final Exam Submit CTA */}
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Final Exam Submission</span>
                <Send className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

          </div>

        </div>

      </main>

      {/* CONFIRMATION SUBMIT MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center space-x-3 text-amber-600 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Confirm Exam Submission</h3>
                <p className="text-xs text-slate-500">Dayananda Sagar Business School Entrance</p>
              </div>
            </div>

            {/* Summary statistics */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2.5 mb-5 text-xs text-slate-700">
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500">Total Questions:</span>
                <span className="font-bold text-slate-900">{totalQuestions}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500">Answered / Attempted:</span>
                <span className="font-bold text-emerald-600">{answeredCount}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-200">
                <span className="text-slate-500">Unanswered / Left:</span>
                <span className="font-bold text-rose-500">{unansweredCount}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500">Time Remaining:</span>
                <span className="font-mono font-bold text-amber-600">{formatTime(timeLeft)}</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 mb-5 leading-relaxed">
                Notice: You have <strong>{unansweredCount} questions</strong> left unanswered. Once submitted, your answers cannot be altered.
              </p>
            )}

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all cursor-pointer"
              >
                Return to Exam
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  setShowSubmitModal(false);
                  handleFinalSubmit(false);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Yes, Submit Final'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auto-Submit Overlay when timer reaches 0 */}
      {timeLeft === 0 && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 mx-auto flex items-center justify-center mb-3 animate-spin">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Time Elapsed!</h3>
            <p className="text-xs text-slate-500">
              Exam time has expired. Submitting all your responses automatically to Dayananda Sagar Business School portal...
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
