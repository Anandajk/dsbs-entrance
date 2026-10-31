import React, { useState } from 'react';
import { User, Mail, Phone, Hash, Clock, FileText, CheckCircle2, AlertCircle, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import { CandidateInfo, ExamSettings } from '../types';

interface StudentRegistrationProps {
  settings: ExamSettings;
  totalQuestions: number;
  onStartTest: (candidate: CandidateInfo) => void;
}

export const StudentRegistration: React.FC<StudentRegistrationProps> = ({
  settings,
  totalQuestions,
  onStartTest,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [rollNumber, setRollNumber] = useState(() => `DSBS-2027-${Math.floor(1000 + Math.random() * 9000)}`);
  const [acknowledged, setAcknowledged] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = 'Full name is required as per official records';
    } else if (name.trim().length < 3) {
      errs.name = 'Please enter a valid full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email address is required for sending score reports';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      errs.phone = '10-digit phone number is required';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (!acknowledged) {
      errs.acknowledged = 'You must acknowledge the examination instructions to begin';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const candidate: CandidateInfo = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      rollNumber: rollNumber.trim()
    };

    // Immediate start as requested
    onStartTest(candidate);
  };

  const formatDuration = (seconds: number) => {
    if (seconds <= 60) {
      return `${seconds} Seconds`;
    }
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (mins === 1 && secs === 0) return '1 Minute';
    return secs > 0 ? `${mins}m ${secs}s` : `${mins} Minutes`;
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Institution Banner Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-700/60 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Admission Cycle 2027-28</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Dayananda Sagar Business School
          </h1>
          <p className="text-amber-400 font-semibold text-base sm:text-lg mb-3">
            {settings.examTitle || 'Management Aptitude Online Entrance Examination'}
          </p>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Welcome candidate. Please enter your authentic details below to initiate your online assessment.
            The official countdown timer will commence immediately upon clicking <strong>Start Test</strong>.
          </p>

          {/* Quick Metrics Bar - Clean Student Information */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-700/80">
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700">
              <span className="text-xs text-slate-400 font-medium block">Total Questions</span>
              <span className="text-lg font-bold text-white">100 MCQs</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700">
              <span className="text-xs text-slate-400 font-medium block">Time Limit</span>
              <span className="text-lg font-bold text-amber-400">{formatDuration(settings.durationSeconds)}</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700">
              <span className="text-xs text-slate-400 font-medium block">Marking Scheme</span>
              <span className="text-lg font-bold text-emerald-400">+1.0 Mark / 0</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700">
              <span className="text-xs text-slate-400 font-medium block">Exam Format</span>
              <span className="text-lg font-bold text-sky-400">Objective CBT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Registration Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
          <div className="flex items-center space-x-2.5 pb-4 mb-6 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Candidate Details</h2>
              <p className="text-xs text-slate-500">All fields are mandatory for result verification</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Candidate Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                    errors.name ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200 focus:border-amber-500'
                  } focus:outline-none focus:bg-white text-slate-900 transition-all font-medium`}
                />
              </div>
              {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="rahul.sharma@example.com"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                    errors.email ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200 focus:border-amber-500'
                  } focus:outline-none focus:bg-white text-slate-900 transition-all font-medium`}
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number (Mobile) *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="10-digit mobile number e.g. 9876543210"
                  className={`w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 rounded-xl border ${
                    errors.phone ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-200 focus:border-amber-500'
                  } focus:outline-none focus:bg-white text-slate-900 transition-all font-medium`}
                />
              </div>
              {errors.phone && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>}
            </div>

            {/* Roll / Application ID (Pre-generated for convenience) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Assigned Application / Roll No.
                </label>
                <span className="text-[11px] text-slate-400">Generated for session</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Hash className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-100/80 rounded-xl border border-slate-200 focus:outline-none focus:bg-white text-slate-800 font-mono-numbers text-xs font-semibold"
                />
              </div>
            </div>

            {/* Acknowledgment Checkbox */}
            <div className="pt-2">
              <label className="flex items-start space-x-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => {
                    setAcknowledged(e.target.checked);
                    if (errors.acknowledged) setErrors({ ...errors, acknowledged: '' });
                  }}
                  className="mt-1 h-4 w-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300"
                />
                <span className="text-xs text-slate-600 leading-normal">
                  I certify that I am the registered candidate taking this entrance test. I understand that the test is timed, anti-cheating monitoring is enabled, and timer starts immediately.
                </span>
              </label>
              {errors.acknowledged && (
                <p className="mt-1.5 text-xs text-rose-500 font-medium">{errors.acknowledged}</p>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 font-extrabold text-sm sm:text-base hover:from-amber-400 hover:to-amber-600 shadow-lg shadow-amber-500/25 transition-all transform active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                <span>START TEST NOW</span>
                <ArrowRight className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Clicking will lock the browser session and start your {formatDuration(settings.durationSeconds)} test.
              </p>
            </div>

          </form>
        </div>

        {/* Instructions & Regulations (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Exam Rules & Guidelines</span>
            </h3>

            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Strict Time Limit:</strong> You have exactly <strong>{formatDuration(settings.durationSeconds)}</strong> to attempt {totalQuestions} questions. Unsubmitted tests will be auto-saved at 00:00.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Category-Wise Navigation:</strong> Questions are organized by category so you can answer all questions in a section quickly and navigate between categories seamlessly.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Proctoring & Integrity:</strong> Switching tabs or windows will be logged by the system and recorded on your entrance examination sheet.
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Award className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Assessment & Scoring:</strong> Upon test submission, your total questions answered and time taken will be provided on your submission slip. Confidential evaluation results are submitted directly to the Admissions Committee for the 2027–28 admission cycle.
                </span>
              </li>
            </ul>
          </div>

          {/* Institutional Contact Support */}
          <div className="bg-amber-50/60 rounded-3xl p-5 border border-amber-200/70 text-xs text-amber-900">
            <h4 className="font-bold text-amber-950 mb-1">Admissions Help Desk</h4>
            <p className="text-amber-800 mb-2">
              Dayananda Sagar Business School (DSBS), Kumaraswamy Layout, Bengaluru, Karnataka 560078.
            </p>
            <p className="font-medium text-amber-900">
              Helpline: admissions@dsbs.edu.in | +91 80 4216 1700
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
