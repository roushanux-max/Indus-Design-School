import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    num: '01',
    title: 'Undergraduate Programs',
    degree: 'B.Des (4 Years)',
    desc: 'Four-year specialized bachelor degrees in Interior Design, Fashion Design, Graphic Design, Product Design, and UI/UX Design with mandatory industry internships.',
    tags: ['Interior Design', 'Fashion', 'Graphic', 'Product', 'UI/UX'],
    link: '#contact',
  },
  {
    num: '02',
    title: 'Graduate & Postgraduate',
    degree: 'M.Des (2 Years)',
    desc: 'Two-year research and studio-led master degrees investigating design theory, spatial innovation, speculative futures, and creative leadership.',
    tags: ['Design Studies', 'Design Innovation', 'Research Labs'],
    link: '#contact',
  },
  {
    num: '03',
    title: 'Continuing Education',
    degree: 'Executive Diplomas (1 Year)',
    desc: 'Advanced professional diplomas and industry-backed certificates for practicing designers looking to master emerging AI tools and leadership strategy.',
    tags: ['Creative Direction', 'Digital Product', 'Design Strategy'],
    link: '#contact',
  },
  {
    num: '04',
    title: 'Short Courses & Studios',
    degree: 'Modular (4–12 Weeks)',
    desc: 'Intensive summer bootcamps, foundational creative residencies, and specialized portfolio preparation workshops for aspiring students.',
    tags: ['Summer Studio', 'Portfolio Prep', 'Foundations'],
    link: '#contact',
  },
];

export const ProgramsList: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header matching Section 4 of reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-gray-200">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 block mb-3">
              CURRICULUM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0e1726] leading-tight">
              A World-Class Range of <span className="italic text-[#c88732] font-normal">Academic Programs</span> for Every Ambition and Passion
            </h2>
          </div>

          {/* Small architectural thumbnail preview on the right */}
          <div className="hidden lg:block w-48 h-24 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&q=80&auto=format"
              alt="Indus Design Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Program Rows matching horizontal row layout from reference */}
        <div className="divide-y divide-gray-200">
          {programs.map((item, idx) => (
            <motion.div
              key={item.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group py-8 sm:py-10 transition-all duration-300 px-4 sm:px-6 rounded-2xl ${
                hoveredIdx === idx ? 'bg-[#FAF7F2]' : 'bg-transparent'
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Index Number in Gold */}
                <div className="lg:col-span-1">
                  <span className="text-sm font-mono font-bold text-[#c88732] tracking-wider">
                    {item.num}
                  </span>
                </div>

                {/* Title & Degree Badge */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0e1726] group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1 inline-block">
                    {item.degree}
                  </span>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Arrow Button */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end">
                  <a
                    href={item.link}
                    className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 group-hover:bg-[#0e1726] group-hover:text-white group-hover:border-[#0e1726] transition-all duration-300 shadow-xs group-hover:scale-105"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
