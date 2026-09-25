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
    <div className={`relative w-full ${bgColor} py-16 sm:py-24 border-b border-gray-200/80`}>
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

      {/* Vertical Stacking Cards Container: Cards scroll from top to bottom and stop stacked on top of each other */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative">
          {courses.map((course, index) => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="sticky top-[80px] sm:top-[84px] lg:top-[88px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-200 bg-white flex flex-col md:flex-row"
              style={{
                zIndex: 10 + index,
                marginBottom: index === courses.length - 1 ? '48px' : '45vh',
                /* Desktop: fixed height. Mobile: auto height so content isn't squashed */
                height: undefined,
              }}
            >
              {/* === MOBILE LAYOUT: Image on top, content below === */}
              {/* Image - shown first on mobile only */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-gray-100 flex-shrink-0 md:hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Course counter badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="text-xs font-mono text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    0{index + 1} / 0{courses.length}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-20 bg-white p-5 sm:p-7 lg:p-10 border-r-0 md:border-r border-gray-100 flex flex-col justify-between w-full md:w-[55%] lg:w-[60%] flex-shrink-0 md:h-[520px]">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-mono uppercase tracking-[0.2em] font-bold block mb-1.5"
                      style={{ color: themeColor }}
                    >
                      {course.degree} • {course.duration}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0e1726] tracking-tight leading-tight">
                      {course.name}
                    </h3>
                  </div>
                  {/* Counter - desktop only */}
                  <div className="hidden md:flex flex-col items-end gap-2 flex-shrink-0">
                    <span className="text-xs font-mono tracking-widest text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                      0{index + 1} / 0{courses.length}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-mono tracking-wider">
                      {course.code}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {course.tagline}
                </p>

                {/* Highlights tags — hidden on small phones to save space */}
                <div className="hidden xs:flex flex-wrap gap-2 mb-5">
                  {course.highlights.slice(0, 4).map((h) => (
                    <span
                      key={h}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-auto">
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

              {/* === DESKTOP LAYOUT: Image on the right === */}
              <div className="relative hidden md:block md:w-[45%] lg:w-[40%] overflow-hidden bg-gray-100 md:h-[520px]">
                <img
                  src={course.image}
                  alt={course.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
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
