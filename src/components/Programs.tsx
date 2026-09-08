import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealText, FadeIn } from './AnimationHelpers';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'B.Des Interior Design',
    shortTitle: 'Interior Design',
    duration: '4 Years',
    level: 'Undergraduate',
    desc: 'Transform spaces into experiences. Learn spatial design, material science, and sustainable architecture principles.',
    skills: ['Spatial Planning', 'Material Science', 'AutoCAD', 'Revit'],
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    color: '#e3461a',
  },
  {
    id: 2,
    title: 'B.Des Fashion Design',
    shortTitle: 'Fashion Design',
    duration: '4 Years',
    level: 'Undergraduate',
    desc: 'From sketch to runway. Explore fashion as an art form — deeply cultural, wildly creative.',
    skills: ['Pattern Making', 'Fashion Illustration', 'Draping', 'Textile Studies'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: '#1a1a2e',
  },
  {
    id: 3,
    title: 'B.Des Graphic Design',
    shortTitle: 'Graphic Design',
    duration: '4 Years',
    level: 'Undergraduate',
    desc: 'Communicate ideas visually. Master typography, brand identity, digital design, and motion graphics.',
    skills: ['Typography', 'Branding', 'Illustrator', 'Motion'],
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    color: '#2d4a22',
  },
  {
    id: 4,
    title: 'B.Des Product Design',
    shortTitle: 'Product Design',
    duration: '4 Years',
    level: 'Undergraduate',
    desc: 'Design the objects that define everyday life. Blend engineering thinking with artistic sensibility.',
    skills: ['3D Modeling', 'Prototyping', 'Ergonomics', 'CAD/CAM'],
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    color: '#1a2a4a',
  },
  {
    id: 5,
    title: 'B.Des UI/UX Design',
    shortTitle: 'UI/UX Design',
    duration: '3 Years',
    level: 'Undergraduate',
    desc: 'Shape digital experiences. Build user-centered products for web, mobile and emerging interfaces.',
    skills: ['Figma', 'User Research', 'Prototyping', 'React'],
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    color: '#2c1654',
  },
  {
    id: 6,
    title: 'M.Des Design Studies',
    shortTitle: 'Design Studies',
    duration: '2 Years',
    level: 'Postgraduate',
    desc: 'Deepen your design practice with research-led investigation into contemporary design challenges.',
    skills: ['Research Methods', 'Design Theory', 'Studio Practice', 'Publication'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    color: '#3d2c1e',
  },
];

export const Programs: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="programs" className="py-28 lg:py-36 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <FadeIn className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
                Our Programs
              </span>
            </FadeIn>
            <RevealText
              text="Design Programs That Shape Careers"
              tag="h2"
              className="font-heading font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight text-white max-w-xl"
              delay={0.1}
            />
          </div>
          <FadeIn direction="left" delay={0.2}>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Six industry-aligned programs designed to take you from curious beginner to confident design professional.
            </p>
          </FadeIn>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <FadeIn key={program.id} delay={i * 0.08} direction="up">
              <motion.div
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                style={{ height: '380px' }}
                onMouseEnter={() => setHovered(program.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background Image */}
                <motion.img
                  src={program.img}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ scale: hovered === program.id ? 1.08 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Level badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-brand-orange/90 text-white px-3 py-1 rounded-full font-semibold tracking-wide">
                    {program.level}
                  </span>
                </div>

                {/* Arrow */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    opacity: hovered === program.id ? 1 : 0,
                    rotate: hovered === program.id ? 0 : -30,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-brand-dark" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white/60 text-xs mb-1">{program.duration}</div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {program.title}
                  </h3>

                  {/* Revealed on hover */}
                  <AnimatePresence>
                    {hovered === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="text-white/75 text-sm leading-relaxed mb-4">
                          {program.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-white/15 text-white px-3 py-1 rounded-full"
                            >
                              {skill}
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
        <FadeIn className="mt-14 text-center" delay={0.3}>
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:bg-orange-700 transition-colors duration-300"
          >
            View All Programs
            <ArrowUpRight size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
