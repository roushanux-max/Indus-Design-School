import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/campus-main.png',
    title: 'Indus',
    subtitle: 'Where Design Meets Innovation & Heritage',
    description: 'Indus Design School (IDS) nurtures creative thinkers, visualizers, and innovators shaping global design across architecture, fashion, communication, and digital media.',
    tag: 'CAMPUS LIFE • AHMEDABAD',
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

  // Auto-advance carousel image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
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
    <section className="bg-white py-4 sm:py-6 lg:py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Rounded Hero Card Frame */}
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[680px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 shadow-2xl">
          
          {/* Background Image Carousel with Fade Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Top Tag & Slide Counter */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#e3461a] animate-pulse" />
              <span>{slide.tag}</span>
            </div>
            <div className="text-white/80 text-xs font-mono tracking-widest bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              0{slide.id} / 0{slides.length}
            </div>
          </div>

          {/* Huge Typographic Watermark */}
          <div className="relative z-10 my-auto text-center pointer-events-none select-none py-6">
            <motion.h1
              key={slide.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white tracking-tight text-[clamp(4.5rem,15vw,12rem)] leading-none"
              style={{
                textShadow: '0 8px 36px rgba(0,0,0,0.5)',
              }}
            >
              {slide.title}
            </motion.h1>
          </div>

          {/* Bottom Row: Left Description Text + Right Navigation Buttons */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-6 border-t border-white/20">
            {/* Left Description text */}
            <div className="max-w-xl">
              <p className="text-white/70 text-xs uppercase tracking-widest font-semibold mb-2">
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

      </div>
    </section>
  );
};
