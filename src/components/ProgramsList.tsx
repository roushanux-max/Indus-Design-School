import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programCategories = [
  {
    num: '01',
    title: 'Bachelor in Design',
    duration: '4-Year Undergraduate Degree',
    desc: 'Comprehensive studio education combining creative intuition, technical mastery, and professional industry apprenticeships.',
    specializations: [
      'B.Des in Interior Design',
      'B.Des in Fashion Design',
      'B.Des in Communication Design',
      'B.Des in Product Design',
    ],
    image: '/images/b-design.jpg',
    eligibility: '10+2 with minimum 50% aggregate (Any Stream)',
  },
  {
    num: '02',
    title: 'Masters in Design',
    duration: '2-Year Postgraduate Degree',
    desc: 'Advanced research, digital systems architecture, and specialized design leadership for graduates aiming for senior creative roles.',
    specializations: [
      'M.Des in UI/UX Design',
      'M.Des in Interior Design',
      'M.Des in Fashion Design',
    ],
    image: '/images/master-banner.jpg',
    eligibility: 'Bachelor’s Degree in any discipline / Design',
  },
  {
    num: '03',
    title: 'Minor Degree in Design',
    duration: 'Interdisciplinary Minor Track',
    desc: 'Cross-functional specializations designed for university scholars across engineering, management, and arts to build high-demand creative skills.',
    specializations: [
      'Minor in UI/UX Design',
      'Minor in Sustainability Studies',
      'Minor in Indic Design',
    ],
    image: '/images/minor-design.jpg',
    eligibility: 'Open to enrolled Indus University scholars',
  },
];

export const ProgramsList: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  // Auto-advance preview program image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHoveredIdx((prev) => (prev === programCategories.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [hoveredIdx]);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header matching Section 4 of reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-gray-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
              ACADEMIC DEGREE PATHWAYS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0e1726] leading-tight">
              A World-Class Range of <span className="italic text-[#c88732] font-normal">Academic Programs</span> for Every Ambition and Passion
            </h2>
          </div>

          {/* Dynamic Image Preview on Right matching Oxford layout */}
          <div className="hidden lg:block w-64 h-32 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border border-gray-100">
            <img
              src={programCategories[hoveredIdx].image}
              alt={programCategories[hoveredIdx].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Program Rows matching horizontal row layout from reference */}
        <div className="divide-y divide-gray-200">
          {programCategories.map((item, idx) => (
            <motion.div
              key={item.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`group py-10 transition-all duration-300 px-4 sm:px-8 rounded-3xl ${
                hoveredIdx === idx ? 'bg-[#FAF7F2]' : 'bg-transparent'
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Number & Degree Title */}
                <div className="lg:col-span-5 flex items-start gap-5">
                  <span className="text-sm font-mono font-bold text-[#c88732] mt-1">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0e1726] group-hover:text-[#e3461a] transition-colors mb-1.5">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-white text-xs font-semibold text-gray-600 border border-gray-200">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Description & Course Chips */}
                <div className="lg:col-span-5 space-y-3">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-medium bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200/80"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Action Button */}
                <div className="lg:col-span-2 flex justify-end">
                  <Link
                    to="/academics"
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 group-hover:bg-[#0e1726] group-hover:text-white group-hover:border-[#0e1726] transition-all duration-300 shadow-xs"
                    aria-label={`View ${item.title} curriculum`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Programs CTA */}
        <div className="pt-12 text-center">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-lg transition-all duration-300"
          >
            <span>Explore All 10 Academic Programs & Syllabi</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};
