import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Clock, Award, CheckCircle2, ArrowUpRight, Phone, Sparkles, Compass } from 'lucide-react';

export interface CourseData {
  id: string;
  code?: string;
  name: string;
  tagline?: string;
  degree: string;
  duration: string;
  eligibility: string;
  description: string;
  image: string;
  highlights: string[];
  careers: string[];
}

interface CourseModalProps {
  course: CourseData | null;
  onClose: () => void;
  themeColor?: string;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  themeColor = '#e3461a',
}) => {
  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!course) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl z-10 my-auto border border-gray-100 flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Hero Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[21/8] min-h-[220px] w-full overflow-hidden bg-[#0e1726] flex-shrink-0">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/60 to-black/30" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer border border-white/30 z-20"
              aria-label="Close details"
            >
              <X size={18} />
            </button>

            {/* Banner Content */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-8 sm:right-8 z-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {course.code && (
                  <span
                    className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-xs"
                    style={{ backgroundColor: themeColor }}
                  >
                    {course.code}
                  </span>
                )}
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {course.degree}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-white/80 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                  <Clock size={11} className="text-[#e3461a]" />
                  <span>{course.duration}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                {course.name}
              </h2>
              {course.tagline && (
                <p className="text-white/80 text-xs sm:text-sm font-light mt-1 max-w-2xl line-clamp-1">
                  {course.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto space-y-8 flex-1">
            {/* Overview / Philosophy */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e3461a] font-bold block mb-2">
                PROGRAM OVERVIEW & PHILOSOPHY
              </span>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
                  <Clock size={14} className="text-[#e3461a]" />
                  <span>Duration & Structure</span>
                </div>
                <p className="text-sm font-bold text-[#0e1726]">{course.duration}</p>
                <p className="text-xs text-gray-500 mt-0.5">Full-Time Studio & Labs</p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
                  <Award size={14} className="text-[#e3461a]" />
                  <span>Degree Conferred</span>
                </div>
                <p className="text-sm font-bold text-[#0e1726]">{course.degree}</p>
                <p className="text-xs text-gray-500 mt-0.5">Indus University Approved</p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-200/80 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1">
                  <CheckCircle2 size={14} className="text-[#e3461a]" />
                  <span>Eligibility Requirement</span>
                </div>
                <p className="text-xs font-semibold text-[#0e1726] leading-snug">{course.eligibility}</p>
              </div>
            </div>

            {/* Core Curriculum Modules */}
            {course.highlights && course.highlights.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={14} className="text-[#e3461a]" />
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-gray-500">
                    CORE CURRICULUM MODULES & STUDIO WORKSHOPS
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/80 text-xs text-gray-800 font-medium hover:bg-orange-50/40 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-white border border-gray-300 text-gray-600 font-mono text-[10px] flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Opportunities */}
            {course.careers && course.careers.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass size={14} className="text-[#c88732]" />
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-gray-500">
                    CAREER PATHWAYS & PROFESSIONAL DESTINATIONS
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {course.careers.map((career, index) => (
                    <span
                      key={index}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-2xs"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Campus & Studio Environment Note */}
            <div className="bg-[#FAF7F2] rounded-2xl p-4 sm:p-5 border border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="text-gray-600 space-y-1">
                <span className="font-bold text-gray-900 block">Indus Design School Studio Infrastructure:</span>
                <span>Dedicated 10+ workshops, wood & metal fabrication, CNC prototyping, textile draping lab, and digital workstations at the Rancharda campus.</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-mono text-[11px] flex-shrink-0">
                <Phone size={12} className="text-[#e3461a]" />
                <a href="tel:+917600016987" className="hover:text-gray-900">+91 76000 16987</a>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
            <button
              onClick={onClose}
              className="text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer order-2 sm:order-1"
            >
              &larr; Back to Programs
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-initial text-center px-5 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-semibold transition-all hover:bg-white"
              >
                Schedule Studio Visit
              </Link>
              <Link
                to="/admissions"
                onClick={onClose}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white text-xs font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                style={{ backgroundColor: themeColor }}
              >
                <span>Apply for Admissions</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
