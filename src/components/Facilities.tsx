import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const facilities = [
  {
    num: '01',
    name: 'Ceramic, Pottery & Claymation Studio',
    category: 'TACTILE FABRICATION',
    desc: 'Equipped with electric pottery wheels, kilns, and stop-motion claymation capture rigs for hands-on material exploration and animation.',
    image: '/images/claymation-banner.jpg',
  },
  {
    num: '02',
    name: 'Fashion Draping & Textile Atelier',
    category: 'APPAREL DESIGN',
    desc: 'Industrial sewing machines, professional mannequin dress forms, pattern-making drafting tables, and handloom textile study swatches.',
    image: '/images/fashion-design.jpg',
  },
  {
    num: '03',
    name: 'Spatial & Interior Materials Library',
    category: 'SPATIAL LAB',
    desc: 'Comprehensive architectural material index featuring sustainable timber samples, acoustic composites, lighting fixtures, and tile finishes.',
    image: '/images/interior-design.jpg',
  },
  {
    num: '04',
    name: 'UI/UX & Digital Prototyping Lab',
    category: 'DIGITAL MEDIA',
    desc: 'High-performance workstations equipped with Figma, Adobe Creative Cloud, Blender, 3D printing equipment, and usability testing apparatus.',
    image: '/images/ui-ux-design.jpg',
  },
  {
    num: '05',
    name: 'Wood & Metal Prototyping Workshop',
    category: 'INDUSTRIAL DESIGN',
    desc: 'Precision CNC routing, band saws, lathe machines, and finishing booths for ergonomic physical product development.',
    image: '/images/product-design.jpg',
  },
];

export const Facilities: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const current = facilities[currentIdx];

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
