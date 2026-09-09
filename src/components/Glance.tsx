import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Award, ShieldCheck, Building2, Users } from 'lucide-react';

const statsPages = [
  [
    {
      category: 'CAREER & PLACEMENT',
      value: '100%',
      label: 'Placement assistance & industry internship tie-ups with leading design houses.',
      icon: Award,
    },
    {
      category: 'CAMPUS INFRASTRUCTURE',
      value: '16+ Acres',
      label: 'Sprawling green university campus with dedicated studio facilities.',
      icon: Building2,
    },
  ],
  [
    {
      category: 'ACADEMIC PROGRAMS',
      value: '10 Programs',
      label: 'Specialized 4-year B.Des, 2-year M.Des, and minor degrees in modern design tracks.',
      icon: ShieldCheck,
    },
    {
      category: 'STUDENT COMMUNITY',
      value: '500+',
      label: 'Active creative innovators, designers, and thinkers collaborating across studios.',
      icon: Users,
    },
  ],
];

export const Glance: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  // Auto-advance stats pages every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePage((prev) => (prev === statsPages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [activePage]);

  const prevPage = () => {
    setActivePage((prev) => (prev === 0 ? statsPages.length - 1 : prev - 1));
  };

  const nextPage = () => {
    setActivePage((prev) => (prev === statsPages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Editorial Statement */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a]">
              ABOUT INDUS
            </span>
          </div>
          <div className="lg:col-span-9 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-medium text-[#0e1726] leading-snug">
              <strong className="font-bold">Our institutions reflect a tradition of excellence and forward-thinking impact</strong> where artistic heritage merges seamlessly with modern design practices, hands-on studios, and industry leadership.
            </h2>
          </div>
        </div>

        {/* Bottom Section: "Indus at a Glance" on Left + Two Stat Cards on Right */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726] leading-tight mb-5">
                Indus at a<br />Glance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">
                Indus Design School equips students with hands-on studio experience, critical thinking skills, and direct industry exposure across modern creative disciplines.
              </p>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0e1726] text-white text-xs sm:text-sm font-semibold tracking-wider hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Read more about IDS</span>
                <ArrowRight size={15} className="text-white/80" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {statsPages[activePage].map((stat) => (
                  <motion.div
                    key={stat.category}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#FAF7F2] border border-[#f1ebd7] rounded-3xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px] shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c88732]">
                        {stat.category}
                      </span>
                      <stat.icon size={18} className="text-[#c88732]" />
                    </div>
                    <div className="my-4">
                      <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0e1726] tracking-tight mb-2">
                        {stat.value}
                      </div>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Navigation */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={prevPage}
                aria-label="Previous stat"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="text-xs font-mono text-gray-600 font-semibold px-2">
                Page 0{activePage + 1} / 0{statsPages.length}
              </div>
              <button
                onClick={nextPage}
                aria-label="Next stat"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-black transition-colors cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
