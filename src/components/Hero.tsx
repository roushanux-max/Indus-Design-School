import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const SLIDE_DURATION = 6; // 6 seconds

const slides = [
  {
    id: 1,
    image: '/images/campus-main.png',
    title: 'Indus',
    subtitle: 'Where Design Meets Innovation & Heritage',
    description: 'Indus Design School (IDS) nurtures creative thinkers, visualizers, and innovators shaping global design across architecture, fashion, communication, and digital media.',
    tag: 'CAMPUS LIFE • STUDIO CULTURE',
  },
  {
    id: 2,
    image: '/images/campus-building.webp',
    title: 'Design',
    subtitle: '10+ Specialized Studios & Fabrication Labs',
    description: 'Immerse yourself in world-class wood & metal prototyping, clay & ceramic labs, garment draping ateliers, and cutting-edge UI/UX digital workstations.',
    tag: 'STUDIOS & RESEARCH',
  },
  {
    id: 3,
    image: '/images/b-design.jpg',
    title: 'Future',
    subtitle: '100% Industry Placement & Global Mentorship',
    description: 'Our industry-aligned B.Des, M.Des, and Minor programs blend traditional craftsmanship with sustainable thinking and modern digital tooling.',
    tag: 'ADMISSIONS OPEN 2026–27',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel image every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, SLIDE_DURATION * 1000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-72px)] min-h-[640px] max-h-[1080px] overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Image Carousel with Fade Transition - Edge-to-Edge Viewport */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlays for optimal readability and depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/35" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container inside Viewport */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 flex flex-col justify-between h-full">

        {/* TOP AREA: WhatsApp / Instagram Story Style Status Progress Lines */}
        <div className="w-full space-y-3 pt-1">
          {/* Status Indicator Line (Instagram / WhatsApp stories style) */}
          <div className="flex items-center gap-2 sm:gap-3 w-full max-w-2xl mx-auto">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${s.title}`}
                className="flex-1 h-1 sm:h-1.5 rounded-full bg-white/25 overflow-hidden cursor-pointer group py-2 -my-2 transition-all"
              >
                <div className="w-full h-full rounded-full bg-white/25 overflow-hidden relative">
                  {idx < currentSlide && (
                    <div className="w-full h-full bg-white rounded-full" />
                  )}
                  {idx === currentSlide && (
                    <motion.div
                      key={`progress-${currentSlide}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION, ease: "linear" }}
                      className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                    />
                  )}
                  {idx > currentSlide && (
                    <div className="w-0 h-full bg-white" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Tag & Slide Counter Row */}
          <div className="flex items-center justify-between pt-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-wider uppercase shadow-sm">
              <img src="/ids-icon-white.png" alt="IDS" className="h-3.5 w-auto object-contain" />
              <span>{slide.tag}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[11px] text-white/60 tracking-wider font-mono uppercase">
                Auto-switches in 6s
              </span>
              <div className="text-white/90 text-xs font-mono tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                0{slide.id} / 0{slides.length}
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE AREA: Giant Typographic Watermark */}
        <div className="my-auto text-center pointer-events-none select-none py-4 sm:py-6">
          <motion.h1
            key={slide.title}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-white tracking-tight text-[clamp(4.5rem,15vw,13rem)] leading-none"
            style={{
              textShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          >
            {slide.title}
          </motion.h1>
        </div>

        {/* BOTTOM AREA: Description Text, CTAs, and Prev/Next Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-2 pt-6 border-t border-white/20">
          {/* Left Description text */}
          <div className="max-w-xl">
            <p className="text-[#c88732] text-xs uppercase tracking-widest font-semibold mb-2">
              {slide.subtitle}
            </p>
            <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-6">
              {slide.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#e3461a] hover:bg-[#c83c14] text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Apply for 2026 Admissions</span>
                <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Explore 10 Programs</span>
              </Link>
            </div>
          </div>

          {/* Right Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-md"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
