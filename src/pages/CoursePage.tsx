import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Phone, Clock, Award, ChevronLeft } from 'lucide-react';
import { bdesCourses, mdesCourses, minorCourses } from '../data/courses';

export const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const allCourses = [...bdesCourses, ...mdesCourses, ...minorCourses];
  const course = allCourses.find((c) => c.id === id);

  // Determine theme color based on degree type
  const themeColor = course?.id.startsWith('mdes')
    ? '#0e1726'
    : course?.id.startsWith('minor')
    ? '#c88732'
    : '#e3461a';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-6 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Course Not Found</h1>
          <p className="text-gray-500 mb-8">The course you are looking for does not exist or may have moved.</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3.5 rounded-full bg-[#e3461a] text-white font-semibold text-sm hover:bg-[#c73016] transition-colors"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-[55vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0e1726]">
        <img
          src={course.image}
          alt={course.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] via-[#0e1726]/60 to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 sm:left-10 lg:left-16 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white text-sm font-semibold transition-all z-10"
        >
          <ChevronLeft size={16} />
          Back to Programs
        </button>

        {/* Course Title */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className="px-4 py-1.5 rounded-full text-white text-xs font-mono tracking-wider font-bold"
                style={{ backgroundColor: themeColor }}
              >
                {course.code}
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <Clock size={12} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                <Award size={12} />
                {course.eligibility}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-3">
              {course.name}
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
              {course.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Program Overview */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0e1726] mb-5">Program Overview</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {course.description}
              </p>
            </div>

            {/* Core Highlights */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0e1726] mb-6">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: `${themeColor}20` }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Prospects */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0e1726] mb-6">Career Prospects</h2>
              <div className="flex flex-wrap gap-3">
                {course.careers.map((career, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-800 bg-gray-50"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>

            {/* Campus Infrastructure */}
            <div className="bg-[#FAF7F2] rounded-2xl p-8 sm:p-10 border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="font-bold text-[#0e1726] block text-lg">Studio Infrastructure at IDS</span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated 10+ workshops, wood and metal fabrication, CNC prototyping, textile draping lab, and digital workstations at the Rancharda campus.
                </p>
              </div>
              <a
                href="tel:+917600016987"
                className="flex-shrink-0 flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-colors"
              >
                <Phone size={14} className="text-[#e3461a]" />
                +91 76000 16987
              </a>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">

            {/* Program Details Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#0e1726] uppercase tracking-widest mb-5">Program Details</h3>
              <div className="space-y-5 divide-y divide-gray-100">
                <div className="pb-4">
                  <div className="text-xs text-gray-400 font-mono uppercase mb-1">Degree</div>
                  <div className="text-sm font-semibold text-gray-900">{course.degree}</div>
                </div>
                <div className="py-4">
                  <div className="text-xs text-gray-400 font-mono uppercase mb-1">Duration</div>
                  <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                </div>
                <div className="py-4">
                  <div className="text-xs text-gray-400 font-mono uppercase mb-1">Eligibility</div>
                  <div className="text-sm font-semibold text-gray-900">{course.eligibility}</div>
                </div>
                <div className="pt-4">
                  <div className="text-xs text-gray-400 font-mono uppercase mb-1">Program Code</div>
                  <div className="text-sm font-semibold text-gray-900">{course.code}</div>
                </div>
              </div>
            </div>

            {/* Apply CTA */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ backgroundColor: themeColor }}
            >
              <h3 className="text-lg font-bold mb-2">Ready to Apply?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Join India&apos;s leading design school and shape your creative career at Indus.
              </p>
              <Link
                to="/admissions"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-sm font-bold transition-all hover:bg-gray-100"
                style={{ color: themeColor }}
              >
                Apply for Admissions 2026
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Enquiry CTA */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-base font-bold text-[#0e1726] mb-2">Have Questions?</h3>
              <p className="text-gray-500 text-sm mb-5">
                Talk to our admissions advisor about this program.
              </p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
              >
                Schedule a Studio Visit
              </Link>
            </div>

            {/* Explore Other Courses */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-[#0e1726] uppercase tracking-widest mb-4">
                Explore Other Programs
              </h3>
              <div className="space-y-2">
                {allCourses
                  .filter((c) => c.id !== course.id)
                  .slice(0, 4)
                  .map((c) => (
                    <Link
                      key={c.id}
                      to={`/course/${c.id}`}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-[#e3461a] transition-colors">
                          {c.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{c.degree}</div>
                      </div>
                      <ArrowUpRight size={14} className="text-gray-400 group-hover:text-[#e3461a] flex-shrink-0 transition-colors" />
                    </Link>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
