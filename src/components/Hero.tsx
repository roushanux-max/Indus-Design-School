import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HERO_BG =
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80';

const TAGLINE_WORDS = ['Design', 'Your', 'Future'];

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src={HERO_BG}
          alt="Indus Design School Campus"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative orange line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="absolute top-28 left-0 w-40 h-0.5 bg-brand-orange"
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20"
      >
        {/* Category Tag */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
            Est. 2024 · Pune, India
          </span>
        </motion.div>

        {/* Main Headline - Word-by-word reveal */}
        <div className="mb-4">
          <h1 className="font-heading font-bold text-[clamp(4rem,10vw,9rem)] leading-[0.9] text-white overflow-hidden">
            {TAGLINE_WORDS.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block mr-[0.2em]"
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.9 + i * 0.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Accent headline */}
        <div className="mb-10 overflow-hidden">
          <motion.h2
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] text-brand-orange"
          >
            Here.
          </motion.h2>
        </div>

        {/* Subtitle */}
        <div className="max-w-xl mb-12 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
            className="text-white/75 text-lg leading-relaxed"
          >
            Indus Design School is a premier institution for aspiring designers.
            We cultivate creative thinkers who shape the visual culture of tomorrow.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#programs"
            className="group flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-orange-700 transition-all duration-300 hover:gap-4"
          >
            Explore Programs
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 text-white border border-white/40 px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.7 }}
          className="mt-16 flex flex-wrap gap-10 border-t border-white/20 pt-8"
        >
          {[
            { number: '500+', label: 'Students Enrolled' },
            { number: '20+', label: 'Expert Faculty' },
            { number: '6', label: 'Design Programs' },
            { number: '95%', label: 'Placement Rate' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white font-heading">{stat.number}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
