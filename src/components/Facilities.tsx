import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const facilities = [
  {
    num: '01',
    shortName: 'Design Studio',
    category: 'Studio Culture',
    title: 'Hands-on Design & Model Making Studio',
    desc: 'Dedicated creative studio equipped with custom model tables, 3D geometric construction projects, drafting stations, and collaborative student workspaces.',
    image: '/images/campus-design-studio.jpg',
  },
  {
    num: '02',
    shortName: 'Campus',
    category: 'Campus Life',
    title: '16+ Acre Green University Campus',
    desc: 'Sprawling lush green campus at Rancharda, Shilaj, featuring modern faculty blocks, open lawns, and a tranquil creative atmosphere.',
    image: '/images/campus-building-real.jpg',
  },
  {
    num: '03',
    shortName: 'Library',
    category: 'Learning Resources',
    title: 'Central University Library & Design Archives',
    desc: 'Vast collection of over 36,000 reference volumes, international design monographs, architectural journals, and quiet reading stacks.',
    image: '/images/campus-library.jpg',
  },
  {
    num: '04',
    shortName: 'Workshop',
    category: 'Material Lab',
    title: 'Textile, Handloom & Print Workshop',
    desc: 'Block printing, screen printing, and textile fabrication tables where students engage in live craft documentation and fabric experimentation.',
    image: '/images/campus-textile-workshop.jpg',
  },
  {
    num: '05',
    shortName: 'Auditorium',
    category: 'Events & Convocation',
    title: 'Grand University Auditorium & Convention Hall',
    desc: 'Air-conditioned acoustic auditorium with 500+ seating capacity, stage lighting, and sound rigs for design exhibitions and guest lectures.',
    image: '/images/campus-auditorium.jpg',
  },
  {
    num: '06',
    shortName: 'Digital Lab',
    category: 'Digital Media',
    title: 'CAD & Digital Design Computing Lab',
    desc: 'High-performance workstations running Adobe Creative Cloud, 3D modeling tools, and digital UI/UX prototyping suites.',
    image: '/images/campus-computer-lab.jpg',
  },
];

const TOTAL = facilities.length;
const AUTO_INTERVAL = 4000;

// Direction: 1 = forward (next), -1 = backward (prev)
type Direction = 1 | -1;

export const Facilities: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = facilities[currentIdx];

  const goTo = useCallback((nextIdx: number, dir: Direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setCurrentIdx(nextIdx);
    setTimeout(() => setIsTransitioning(false), 750);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo(currentIdx === TOTAL - 1 ? 0 : currentIdx + 1, 1);
  }, [currentIdx, goTo]);

  const prev = useCallback(() => {
    goTo(currentIdx === 0 ? TOTAL - 1 : currentIdx - 1, -1);
  }, [currentIdx, goTo]);

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  // Restart timer on manual navigation
  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    next();
    timerRef.current = setInterval(next, AUTO_INTERVAL);
  };
  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    prev();
    timerRef.current = setInterval(next, AUTO_INTERVAL);
  };

  // Slide-in variants: new image slides in from the side, old slides out
  const slideVariants = {
    enter: (dir: Direction) => ({
      x: dir === 1 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] as number[] },
    },
    exit: (dir: Direction) => ({
      x: dir === 1 ? '-20%' : '20%',
      opacity: 0.5,
      transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] as number[] },
    }),
  };

  // Text fade variants
  const textVariants = {
    enter: { y: 24, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' } },
    exit: { y: -16, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  // Giant name variants (slides up from below)
  const giantVariants = {
    enter: (dir: Direction) => ({
      x: dir === 1 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.65, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as number[] },
    },
    exit: (dir: Direction) => ({
      x: dir === 1 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.4, ease: 'easeIn' },
    }),
  };

  return (
    <section id="facilities" className="py-10 sm:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Main card */}
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden select-none"
          style={{ height: 'clamp(480px, 62vw, 680px)' }}>

          {/* ── Sliding background images ── */}
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={currentIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 z-0"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* ── TOP ROW ── */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-7 sm:px-10 lg:px-12 pt-7 sm:pt-9">
            {/* Label + heading */}
            <div className="max-w-[55%]">
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/60 block mb-2 sm:mb-3">
                Our Facilities
              </span>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.h2
                  key={`title-${currentIdx}`}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="text-base sm:text-xl lg:text-2xl font-semibold text-white leading-snug"
                >
                  {current.title}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Top-right: AVAILABLE FACILITY + View All */}
            <div className="flex flex-col items-end gap-3">
              <div className="text-right">
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 leading-tight">
                  AVAILABLE
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 leading-tight">
                  FACILITY
                </span>
              </div>
              <Link
                to="/academics"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-xs font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>View All</span>
                <ArrowUpRight size={11} />
              </Link>
            </div>
          </div>

          {/* ── BOTTOM-RIGHT info card ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${currentIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.3 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
              className="absolute right-7 sm:right-10 lg:right-12 bottom-24 sm:bottom-28 z-20 max-w-[220px] sm:max-w-[260px]"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/10">
                <p className="text-white font-semibold text-xs sm:text-sm mb-1.5 leading-tight">
                  {current.title}
                </p>
                <p className="text-white/65 text-[10px] sm:text-xs leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── BOTTOM ROW ── */}
          <div className="absolute bottom-0 left-0 right-0 z-20 px-7 sm:px-10 lg:px-12 pb-6 sm:pb-8">

            {/* Counter + Giant Name */}
            <div className="mb-4 sm:mb-5 overflow-hidden">
              {/* Counter */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`counter-${currentIdx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  className="flex items-baseline gap-1.5 mb-1"
                >
                  <span className="text-white font-bold text-sm sm:text-base tabular-nums">
                    {current.num}
                  </span>
                  <span className="text-white/45 text-xs sm:text-sm font-medium tabular-nums">
                    /{String(TOTAL).padStart(2, '0')}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Giant clipped facility short name */}
              <div className="overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={`giant-${currentIdx}`}
                    custom={direction}
                    variants={giantVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="font-extrabold text-white tracking-tight leading-none whitespace-nowrap"
                    style={{
                      fontSize: 'clamp(56px, 11vw, 130px)',
                      lineHeight: 0.9,
                      // Clip bottom 20% so text bleeds out
                      clipPath: 'inset(0 0 0 0)',
                    }}
                  >
                    {current.shortName}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress bar + nav dots */}
            <div className="flex items-center gap-4">
              {/* Segmented progress bar */}
              <div className="flex-1 flex gap-1.5">
                {facilities.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > currentIdx ? 1 : -1)}
                    className="relative flex-1 h-[3px] rounded-full overflow-hidden cursor-pointer group"
                    aria-label={`Go to facility ${i + 1}`}
                  >
                    <div className="absolute inset-0 bg-white/25 group-hover:bg-white/40 transition-colors" />
                    {i === currentIdx && (
                      <motion.div
                        key={`prog-${currentIdx}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_INTERVAL / 1000, ease: 'linear' }}
                        className="absolute inset-0 bg-white origin-left"
                      />
                    )}
                    {i < currentIdx && (
                      <div className="absolute inset-0 bg-white" />
                    )}
                  </button>
                ))}
              </div>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous facility"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next facility"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/25 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>{/* end card */}

      </div>
    </section>
  );
};
