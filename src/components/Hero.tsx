import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=85&auto=format',
    title: 'Indus',
    description: 'Our campuses reflect a rich tradition of creative excellence, visionary research, and forward-thinking design education.',
    tag: 'CAMPUS LIFE',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=85&auto=format',
    title: 'Design',
    description: 'State-of-the-art studios, advanced fabrication labs, and immersive design thinking across multidisciplinary domains.',
    tag: 'STUDIOS & LABS',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=85&auto=format',
    title: 'Future',
    description: 'Empowering students to solve pressing global challenges through sustainable materials, spatial computing, and creative craft.',
    tag: 'INNOVATION',
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        
        {/* Rounded Hero Card Frame matching the reference image */}
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 shadow-xl">
          
          {/* Background Image Carousel with Fade Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Gradient Overlay matching reference */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>

          {/* Top Tag or Subtext */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span>{slide.tag}</span>
            </div>
            <div className="text-white/80 text-xs font-mono tracking-widest">
              0{slide.id} / 0{slides.length}
            </div>
          </div>

          {/* Huge Typographic Watermark across the building ("Indus" / "Design") */}
          <div className="relative z-10 my-auto text-center pointer-events-none select-none">
            <motion.h1
              key={slide.title}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white tracking-tight text-[clamp(4.5rem,16vw,13rem)] leading-none text-shadow-sm"
              style={{
                textShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              {slide.title}
            </motion.h1>
          </div>

          {/* Bottom Row: Left Description Text + Right Navigation Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-white/20">
            {/* Left Description text */}
            <div className="max-w-xl">
              <motion.p
                key={slide.description}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 text-sm sm:text-base font-normal leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </div>

            {/* Right Navigation Arrow Buttons matching the reference image */}
            <div className="flex items-center gap-3 self-end sm:self-auto flex-shrink-0">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
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
