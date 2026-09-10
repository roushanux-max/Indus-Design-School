import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const facilities = [
  {
    num: '01',
    name: 'Hands-on Design & Model Making Studio',
    category: 'STUDIO CULTURE',
    desc: 'Dedicated creative studio equipped with custom model tables, 3D geometric construction projects, drafting stations, and collaborative student workspaces.',
    image: '/images/campus-design-studio.jpg',
  },
  {
    num: '02',
    name: '16+ Acre Green University Campus & Complex',
    category: 'CAMPUS LIFE',
    desc: 'Sprawling lush green campus architecture at Rancharda, Shilaj, featuring modern multi-storey faculty blocks, open lawns, and tranquil creative atmosphere.',
    image: '/images/campus-building-real.jpg',
  },
  {
    num: '03',
    name: 'Central University Library & Design Archives',
    category: 'LEARNING RESOURCES',
    desc: 'Vast collection of over 36,000 reference volumes, international design monographs, architectural journals, and quiet reading stacks.',
    image: '/images/campus-library.jpg',
  },
  {
    num: '04',
    name: 'Textile, Handloom & Print Workshop',
    category: 'MATERIAL LAB',
    desc: 'Block printing, screen printing, and textile fabrication tables where students engage in live craft documentation and fabric experimentation.',
    image: '/images/campus-textile-workshop.jpg',
  },
  {
    num: '05',
    name: 'Grand University Auditorium & Convention Hall',
    category: 'EVENTS & CONVOCATION',
    desc: 'Air-conditioned acoustic auditorium with 500+ seating capacity, stage lighting, and sound rigs for annual design exhibitions, Aikyam, and guest lectures.',
    image: '/images/campus-auditorium.jpg',
  },
  {
    num: '06',
    name: 'CAD & Digital Design Computing Lab',
    category: 'DIGITAL MEDIA',
    desc: 'High-performance computer labs with dual-display workstations running Adobe Creative Cloud, 3D modeling tools, and digital UI/UX prototyping suites.',
    image: '/images/campus-computer-lab.jpg',
  },
];

export const Facilities: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const current = facilities[currentIdx];

  // Auto-advance facility studio images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((i) => (i === facilities.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const prev = () => setCurrentIdx((i) => (i === 0 ? facilities.length - 1 : i - 1));
  const next = () => setCurrentIdx((i) => (i === facilities.length - 1 ? 0 : i + 1));

  return (
    <section id="facilities" className="py-10 sm:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Full-width rounded card matching Oxford reference Section 3 */}
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden min-h-[540px] lg:min-h-[640px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-2xl">
          
          {/* Background Image: Interactive Studio Preview */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Top Row: Label & Headline + Right Action Link */}
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
                CAMPUS INFRASTRUCTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
                Exceptional Facilities Designed to Support Learning, Research, and Discovery
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>View All Studios &amp; Labs</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Bottom Row: Giant Title + Controls + Progress Timeline */}
          <div className="relative z-10 pt-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#c88732] block mb-2 font-semibold">
                  STUDIO {current.num} / 0{facilities.length} • {current.category}
                </span>
                <div className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-none mb-3">
                  {current.name}
                </div>
                <p className="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {current.desc}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={prev}
                  aria-label="Previous facility"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next facility"
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Progress bar timeline across the bottom */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                key={current.num}
                initial={{ width: '0%' }}
                animate={{ width: `${((currentIdx + 1) / facilities.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="h-full bg-[#e3461a] rounded-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
