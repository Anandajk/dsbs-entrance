import React from 'react';
import { GraduationCap, ShieldCheck, UserCheck, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentView: 'register' | 'exam' | 'result' | 'admin';
  onNavigate: (view: 'register' | 'admin') => void;
  candidateName?: string;
  isExamActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  candidateName,
  isExamActive = false,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          
          {/* Logo & Institution Branding */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-white font-bold text-lg ring-2 ring-amber-400/30">
              <GraduationCap className="w-6 h-6 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                  DAYANANDA SAGAR
                </span>
                <span className="text-amber-400 font-bold text-xs sm:text-sm px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  BUSINESS SCHOOL
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                Autonomous Entrance Examination &bull; Admission Cycle 2027–28 &bull; Bengaluru
              </p>
            </div>
          </div>

          {/* Right Action / Navigation Controls */}
          <div className="flex items-center space-x-3">
            {/* If in live exam, show candidate pill */}
            {isExamActive && candidateName && (
              <div className="flex items-center space-x-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-xs text-slate-300 font-medium">Candidate:</span>
                <span className="text-xs font-semibold text-white truncate max-w-[140px] sm:max-w-none">
                  {candidateName}
                </span>
              </div>
            )}

            {/* Session info or admin indicator only if authenticated in admin view */}
            {currentView === 'admin' && (
              <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-slate-300 font-medium">Faculty Session:</span>
                <span className="text-amber-300 font-mono text-[11px]">partners@dsbs.edu.in</span>
                <button
                  type="button"
                  onClick={() => onNavigate('register')}
                  className="ml-2 px-2 py-0.5 rounded bg-slate-700 hover:bg-slate-600 text-white font-medium text-[11px] cursor-pointer"
                >
                  Exit Admin
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
