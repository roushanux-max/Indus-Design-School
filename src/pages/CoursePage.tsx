import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { bdesCourses, mdesCourses, minorCourses } from '../data/courses';

export const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const allCourses = [...bdesCourses, ...mdesCourses, ...minorCourses];
  const course = allCourses.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Course Not Found</h1>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-[#e3461a] text-white rounded-full">Go Back</button>
      </div>
    );
  }

  const themeColor = '#e3461a';

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 inline-flex items-center gap-2"
        >
          &larr; Back to Programs
        </button>

        {/* Main Content Card */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
          
          {/* Top Hero Banner */}
          <div className="relative aspect-[21/9] sm:aspect-[21/8] min-h-[300px] w-full overflow-hidden bg-[#0e1726]">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1726] to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-white/80 block mb-3">
                {course.degree} • {course.duration}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                {course.name}
              </h1>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12 space-y-12">
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Program Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {course.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Core Highlights</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {course.highlights.map((h, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Eligibility</div>
                      <div className="text-sm font-semibold text-gray-900">{course.eligibility}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Duration</div>
                      <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-mono uppercase">Program Code</div>
                      <div className="text-sm font-semibold text-gray-900">{course.code}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Career Prospects</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.careers.map((career, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Campus & Studio Environment Note */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="text-gray-700 space-y-2 max-w-2xl">
                <span className="font-bold text-gray-900 block text-lg">Indus Design School Studio Infrastructure</span>
                <p className="text-sm leading-relaxed">Dedicated 10+ workshops, wood & metal fabrication, CNC prototyping, textile draping lab, and digital workstations at the Rancharda campus.</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-mono text-sm flex-shrink-0 bg-white px-4 py-2 rounded-full border border-gray-200">
                <Phone size={14} className="text-[#e3461a]" />
                <a href="tel:+917600016987" className="hover:text-gray-900">+91 76000 16987</a>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="p-6 sm:p-8 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-end gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-gray-300 hover:border-gray-400 text-gray-800 text-sm font-semibold transition-all hover:bg-white"
            >
              Schedule Studio Visit
            </Link>
            <Link
              to="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: themeColor }}
            >
              <span>Apply for Admissions</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
