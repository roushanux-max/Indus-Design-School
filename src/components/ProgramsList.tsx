import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import type { CourseItem } from '../data/courses';

import { bdesCourses, mdesCourses, minorCourses } from '../data/courses';


interface StackedSectionProps {
  categoryTitle: string;
  badgeText: string;
  categorySubtitle: string;
  courses: CourseItem[];
  themeColor: string;
  bgColor: string;
  
}

const StackedSection: React.FC<StackedSectionProps> = ({
  categoryTitle,
  badgeText,
  categorySubtitle,
  courses,
  themeColor,
  bgColor,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`relative w-full ${bgColor} pt-16 sm:pt-24 pb-8 sm:pb-12 border-b border-gray-200/80`}>
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200/80">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span
                className="text-[11px] font-mono uppercase tracking-[0.25em] font-bold px-3.5 py-1 rounded-full text-white shadow-xs"
                style={{ backgroundColor: themeColor }}
              >
                {badgeText}
              </span>
              <span className="text-xs font-mono text-gray-500">
                • {courses.length} Specializations
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e1726] tracking-tight">
              {categoryTitle}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
              {categorySubtitle}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-wider">
            <span>Scroll down to view specializations</span>
            <ChevronRight size={14} className="rotate-90 text-[#e3461a] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Vertical Stacking Cards Container
          ─────────────────────────────────────────────────────────────────
          HOW IT WORKS:
          • Each card (except the last) has marginBottom: 45vh — this is its
            personal scroll "slot" that pulls the next card up into its
            sticky position.
          • The last card has marginBottom: 0 so the section exits immediately
            once all cards are fully stacked — no blank space left behind.
          ─────────────────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative">
          {courses.map((course, index) => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="sticky top-[80px] sm:top-[84px] lg:top-[88px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 bg-white flex flex-col md:flex-row"
              style={{
                zIndex: 10 + index,
                marginBottom: 0,
              }}
              >
              {/* === MOBILE LAYOUT: Image on top, content below === */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-gray-100 flex-shrink-0 md:hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Tagline over image — mobile */}
                <div className="absolute bottom-4 left-4 right-12">
                  <p className="text-white/90 text-xs font-medium leading-snug line-clamp-2">{course.tagline}</p>
                </div>
                {/* Course counter badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-xs font-mono text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    0{index + 1} / 0{courses.length}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-20 bg-white p-5 sm:p-7 lg:p-10 border-r-0 md:border-r border-gray-100 flex flex-col justify-between w-full md:w-[55%] lg:w-[60%] flex-shrink-0 md:h-[520px]">

                {/* Top: degree badge + counter */}
                <div className="flex justify-between items-start gap-3 mb-4">
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[11px] font-mono uppercase tracking-[0.22em] font-bold block mb-2"
                      style={{ color: themeColor }}
                    >
                      {course.degree} • {course.duration}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-bold text-[#0e1726] tracking-tight leading-tight">
                      {course.name}
                    </h3>
                  </div>
                  {/* Counter + code — desktop only */}
                  <div className="hidden md:flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="text-xs font-mono tracking-widest text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                      0{index + 1} / 0{courses.length}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-mono tracking-wider">
                      {course.code}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3 md:line-clamp-none">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[11px] font-mono px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Eligibility */}
                <div className="flex items-start gap-2.5 mb-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${themeColor}18` }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke={themeColor} strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 12c0 6.075-4.925 11-11 11S1 18.075 1 12c0-1.01.136-1.99.388-2.92L12 14z" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block leading-none mb-0.5">Eligibility</span>
                    <span className="text-xs text-gray-700 font-medium">{course.eligibility}</span>
                  </div>
                </div>

                {/* Career paths */}
                <div className="flex items-start gap-2.5 mb-5">
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${themeColor}18` }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke={themeColor} strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block leading-none mb-0.5">Career Paths</span>
                    <span className="text-xs text-gray-700 font-medium">{course.careers.join(' · ')}</span>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/course/${course.id}`);
                    }}
                    className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: themeColor }}
                  >
                    <span>Explore Course Details</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <Link
                    to="/admissions"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#0e1726] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <span>Enquiry Now</span>
                  </Link>
                </div>
              </div>

              {/* === DESKTOP LAYOUT: Image on the right with tagline overlay === */}
              <div className="relative hidden md:block md:w-[45%] lg:w-[40%] overflow-hidden bg-gray-100 md:h-[520px]">
                <img
                  src={course.image}
                  alt={course.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Always-visible gradient + tagline at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/90 text-sm font-medium leading-snug mb-3">{course.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.careers.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] font-mono text-white/80 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30">
                    <span>View Details & Syllabus</span>
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      
    </div>
  );
};

export const ProgramsList: React.FC = () => {
  return (
    <section id="programs" className="relative w-full bg-white">
      {/* Intro Editorial Header */}
      <div className="py-16 sm:py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 border-b border-gray-200">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
            COMPREHENSIVE ACADEMIC DISCIPLINES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1726] leading-tight mb-6">
            All Specialized Design Programs at Indus Design School
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explore every undergraduate, postgraduate, and interdisciplinary minor course taught on campus. Each program offers dedicated studio spaces, industry mentor masterclasses, and hands-on fabrication facilities.
          </p>
        </div>
      </div>

      {/* 1. BACHELOR IN DESIGN (B.DES) - Top-to-Bottom Sticky Stacking */}
      <StackedSection
        categoryTitle="Bachelor in Design (B.Des)"
        badgeText="BACHELOR DEGREE"
        categorySubtitle="4-Year comprehensive undergraduate studio education blending creative intuition and technical craftsmanship."
        courses={bdesCourses}
        themeColor="#e3461a"
        bgColor="bg-white"
      />

      {/* 2. MASTER IN DESIGN (M.DES) - Top-to-Bottom Sticky Stacking */}
      <StackedSection
        categoryTitle="Master in Design (M.Des)"
        badgeText="MASTER DEGREE"
        categorySubtitle="2-Year advanced postgraduate inquiry, digital UX systems architecture, and creative industry leadership."
        courses={mdesCourses}
        themeColor="#0e1726"
        bgColor="bg-[#F8F6F0]"
      />

      {/* 3. MINOR DEGREE IN DESIGN - Top-to-Bottom Sticky Stacking */}
      <StackedSection
        categoryTitle="Minor Degree in Design"
        badgeText="MINOR DEGREE"
        categorySubtitle="Interdisciplinary tracks enabling university scholars across all faculties to acquire professional creative competencies."
        courses={minorCourses}
        themeColor="#c88732"
        bgColor="bg-white"
      />

      {/* Bottom Conversion Banner */}
      <div className="py-16 sm:py-20 bg-[#0e1726] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#e3461a] block mb-2 font-semibold">
              ADMISSIONS 2026–27
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Ready to pursue your design journey?
            </h3>
            <p className="text-white/70 text-xs sm:text-sm max-w-xl">
              Register for Design Hunt entrance evaluation, portfolio reviews, and campus studio tours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-4 rounded-full bg-[#e3461a] hover:bg-[#c83c14] text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Apply Online Today
            </Link>
            <Link
              to="/academics"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Curriculum Overview &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
