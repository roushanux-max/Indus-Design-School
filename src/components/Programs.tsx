import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText, FadeIn } from './AnimationHelpers';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Interior Design',
    degree: 'B.Des',
    duration: '4 Yrs',
    tags: ['Spatial', 'AutoCAD', 'Revit'],
    desc: 'Transform spaces into experiences. Learn spatial design, material science, and sustainable architecture.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format',
    num: '01',
  },
  {
    id: 2,
    title: 'Fashion Design',
    degree: 'B.Des',
    duration: '4 Yrs',
    tags: ['Draping', 'Pattern Making', 'Textiles'],
    desc: 'From sketch to runway. Explore fashion as art — deeply cultural, wildly creative.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format',
    num: '02',
  },
  {
    id: 3,
    title: 'Graphic Design',
    degree: 'B.Des',
    duration: '4 Yrs',
    tags: ['Typography', 'Branding', 'Motion'],
    desc: 'Master typography, brand identity, digital design, and motion graphics.',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80&auto=format',
    num: '03',
  },
  {
    id: 4,
    title: 'Product Design',
    degree: 'B.Des',
    duration: '4 Yrs',
    tags: ['3D Modeling', 'CAD', 'Ergonomics'],
    desc: 'Design objects that define everyday life. Blend engineering thinking with artistic sensibility.',
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80&auto=format',
    num: '04',
  },
  {
    id: 5,
    title: 'UI/UX Design',
    degree: 'B.Des',
    duration: '3 Yrs',
    tags: ['Figma', 'Research', 'Prototyping'],
    desc: 'Shape digital experiences for web, mobile and emerging interfaces.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80&auto=format',
    num: '05',
  },
  {
    id: 6,
    title: 'Design Studies',
    degree: 'M.Des',
    duration: '2 Yrs',
    tags: ['Research', 'Theory', 'Studio'],
    desc: 'Deepen your practice with research-led investigation into contemporary design challenges.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format',
    num: '06',
  },
];

export const Programs: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="programs" className="py-28 lg:py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-brand-orange/25 bg-brand-orange/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Programs</span>
            </FadeIn>
            <RevealText
              text="Six Programs. Infinite Possibilities."
              tag="h2"
              className="font-bold text-white leading-[1.05] max-w-lg"
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' } as React.CSSProperties}
              delay={0.1}
            />
          </div>
          <FadeIn direction="left" delay={0.2}>
            <p className="text-gray-500 max-w-xs leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Industry-aligned programs designed to take you from curious beginner to confident design professional.
            </p>
          </FadeIn>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((prog, i) => (
            <FadeIn key={prog.id} delay={i * 0.07} direction="up">
              <motion.div
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/5' }}
                onMouseEnter={() => setHovered(prog.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* BG Image */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hovered === prog.id ? 1.08 : 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img src={prog.img} alt={prog.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Hover tint */}
                <motion.div
                  className="absolute inset-0 bg-brand-orange/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === prog.id ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Number (top left) */}
                <div className="absolute top-5 left-5">
                  <span className="text-white/25 text-xs font-mono tracking-widest">{prog.num}</span>
                </div>

                {/* Degree badge (top right) */}
                <motion.div
                  className="absolute top-5 right-5"
                  animate={{
                    opacity: hovered === prog.id ? 1 : 0,
                    scale: hovered === prog.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <ArrowUpRight size={14} className="text-[#0a0a0a]" />
                  </div>
                </motion.div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-orange text-xs font-semibold tracking-wider"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{prog.degree}</span>
                    <span className="text-white/30 text-xs">·</span>
                    <span className="text-white/50 text-xs"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{prog.duration}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {prog.title}
                  </h3>

                  <AnimatePresence>
                    {hovered === prog.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="text-white/70 text-sm leading-relaxed mb-4"
                          style={{ fontFamily: 'Inter, sans-serif' }}>{prog.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {prog.tags.map((tag) => (
                            <span key={tag} className="text-[11px] bg-white/12 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full border border-white/10"
                              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn className="mt-12 flex justify-center" delay={0.3}>
          <motion.a
            href="#admissions"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 border border-white/15 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            View All Programs
            <span className="w-7 h-7 rounded-full border border-white/20 group-hover:border-black/15 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-transparent transition-all duration-300">
              <ArrowUpRight size={13} className="group-hover:text-white transition-colors duration-300" />
            </span>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
};
