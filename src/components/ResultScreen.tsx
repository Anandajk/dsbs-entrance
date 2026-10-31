import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Clock,
  RotateCcw,
  Printer,
  Calendar,
  Phone,
  Mail,
  User,
  ShieldCheck,
  GraduationCap,
  FileCheck2,
  ListChecks,
  AlertCircle,
  HelpCircle,
  Hash
} from 'lucide-react';

interface ResultScreenProps {
  submission: {
    id?: string;
    submissionId?: string;
    totalQuestions?: number;
    attemptedCount?: number;
    unansweredCount?: number;
    timeTakenSeconds?: number;
    candidate: {
      name: string;
      email: string;
      phone: string;
      rollNumber?: string;
      assignedSet?: string;
    };
    submittedAt?: string;
    paperSet?: string;
    sectionAttempts?: Record<string, { total: number; attempted: number }>;
    tabSwitches?: number;
  };
  onRetake: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ submission, onRetake }) => {
  useEffect(() => {
    // Celebrate student test completion
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#10b981', '#3b82f6', '#d97706'],
      });
    } catch {}
  }, []);

  const totalQuestions = submission.totalQuestions || 100;
  const attemptedCount = submission.attemptedCount ?? 0;
  const unansweredCount = submission.unansweredCount ?? Math.max(0, totalQuestions - attemptedCount);
  const timeTakenSeconds = submission.timeTakenSeconds ?? 0;

  // Format date and time
  const formattedDate = submission.submittedAt
    ? new Date(submission.submittedAt).toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : new Date().toLocaleDateString('en-IN');

  const formattedTime = submission.submittedAt
    ? new Date(submission.submittedAt).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : new Date().toLocaleTimeString('en-IN');

  // Format time taken cleanly
  const formatTimeTaken = (secs: number) => {
    if (secs <= 0) return '0 min 0 sec';
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    if (mins === 0) return `${remainingSecs} sec`;
    if (remainingSecs === 0) return `${mins} min`;
    return `${mins} min ${remainingSecs} sec`;
  };

  const attemptPercent = totalQuestions > 0 ? Math.round((attemptedCount / totalQuestions) * 100) : 0;
  const timePercent = Math.min(100, Math.round((timeTakenSeconds / 3600) * 100));
  const submissionId = submission.submissionId || submission.id || `DSBS-2027-${Date.now().toString().slice(-6)}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Official Printable Submission Slip */}
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-6">
        
        {/* Institutional Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white border-b border-amber-500/40 relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 flex items-center justify-center font-black shadow-lg">
                <GraduationCap className="w-7 h-7 stroke-[2.2]" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Dayananda Sagar Business School
                </h1>
                <p className="text-amber-400 text-xs sm:text-sm font-bold flex items-center gap-1.5 mt-0.5">
                  <span>Entrance Examination &bull; Admission Cycle 2027–28</span>
                </p>
                <p className="text-slate-400 text-[11px]">
                  Autonomous Management Institution &bull; Bengaluru
                </p>
              </div>
            </div>

            {/* Submission Status Stamp */}
            <div className="flex items-center space-x-2">
              <div className="px-4 py-2 rounded-2xl border text-xs sm:text-sm font-extrabold tracking-wide flex items-center space-x-2 shadow-sm bg-emerald-500/15 border-emerald-400/40 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Examination Submitted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Information Card */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-start space-x-2.5">
              <User className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Candidate Name</span>
                <span className="font-bold text-slate-800 text-sm">{submission.candidate.name}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Hash className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Application / Roll No.</span>
                <span className="font-mono font-bold text-amber-700 text-xs">
                  {submission.candidate.rollNumber || 'DSBS-2027-PENDING'}
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Mail className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Email Address</span>
                <span className="font-medium text-slate-700 truncate block max-w-[170px]" title={submission.candidate.email}>
                  {submission.candidate.email}
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Calendar className="w-4 h-4 text-slate-400 mt-0.5" />
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Submission Timestamp</span>
                <span className="font-medium text-slate-700">{formattedDate}, {formattedTime}</span>
              </div>
            </div>
          </div>

          {/* Core Examination Stats - Questions Answered & Time Taken */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Card 1: Questions Answered */}
            <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white rounded-3xl p-6 border border-emerald-500/30 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <ListChecks className="w-4 h-4 text-emerald-600" />
                  <span>Questions Answered</span>
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {attemptPercent}% Completed
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono-numbers">
                  {attemptedCount}
                </span>
                <span className="text-lg text-slate-500 font-semibold font-mono-numbers">
                  / {totalQuestions} questions
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-200/80 rounded-full h-3 overflow-hidden mb-3.5">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${attemptPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-emerald-100">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold text-slate-800">{attemptedCount} Attempted</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  <span className="text-slate-500">{unansweredCount} Left Unattempted</span>
                </div>
              </div>
            </div>

            {/* Card 2: Time Consumed */}
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white rounded-3xl p-6 border border-amber-500/30 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-700" />
                  <span>Time Taken</span>
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  Allocated: 60 Minutes
                </span>
              </div>

              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono-numbers">
                  {formatTimeTaken(timeTakenSeconds)}
                </span>
              </div>

              {/* Progress bar representing time spent out of 60 mins */}
              <div className="w-full bg-slate-200/80 rounded-full h-3 overflow-hidden mb-3.5">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-700"
                  style={{ width: `${timePercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-amber-100">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="font-semibold text-slate-800">{timeTakenSeconds} Seconds Total</span>
                </div>
                <span className="text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Within 60m Window</span>
                </span>
              </div>
            </div>

          </div>

          {/* Sectional Attempt Breakdown (Attempts ONLY, NO scores or marks) */}
          {submission.sectionAttempts && Object.keys(submission.sectionAttempts).length > 0 && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center space-x-2">
                <FileCheck2 className="w-4 h-4 text-amber-600" />
                <span>Category-Wise Question Attempts</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(submission.sectionAttempts).map(([secName, stat]) => {
                  const secPct = stat.total > 0 ? Math.round((stat.attempted / stat.total) * 100) : 0;
                  return (
                    <div key={secName} className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-slate-800">
                        <span className="font-bold">{secName}</span>
                        <span className="font-mono text-slate-700 font-semibold">
                          {stat.attempted} / {stat.total} Attempted
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${secPct}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[11px] text-slate-500">
                        <span>Attempt Rate</span>
                        <span>{secPct}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Official Admissions Committee Notice */}
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200 text-xs text-amber-900 space-y-2">
            <div className="flex items-center space-x-2 text-amber-950 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Admission Cycle 2027–28 Evaluation Notice</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Your test responses have been encrypted and submitted directly to the <strong>Dayananda Sagar Business School (DSBS) Central Admissions Committee</strong>.
              In accordance with institutional entrance examination guidelines for the 2027–28 academic cycle, individual scoring rubrics and merit percentiles are compiled confidentially for interview shortlisting.
            </p>
            <div className="pt-2 border-t border-amber-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] text-amber-900 font-medium gap-1">
              <span>Next Stage: Shortlisted applicants will be notified for Group Discussion & Personal Interview (GD/PI).</span>
              <span className="text-slate-500">Admissions Cell: admissions@dsbs.edu.in</span>
            </div>
          </div>

          {/* Electronic Verification Receipt */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Electronic Verification ID: <strong className="font-mono text-slate-700">{submissionId}</strong>
              </span>
            </div>
            <div>
              {submission.tabSwitches !== undefined && (
                <span className="text-[11px] text-slate-400">
                  Proctoring Audit: Session integrity logged ({submission.tabSwitches} window events)
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print / Save Slip</span>
          </button>

          <button
            type="button"
            onClick={onRetake}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
            <span>Finish & Return to Home</span>
          </button>
        </div>

      </div>

    </div>
  );
};
