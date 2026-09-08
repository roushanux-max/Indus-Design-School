import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=85&auto=format';
const TAGLINE = ['Design', 'Your', 'Future', 'Here.'];

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 1.0 } },
  };

  const wordVariants = {
    hidden: { y: '115%', opacity: 0, skewY: 5 },
    visible: {
      y: 0, opacity: 1, skewY: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">

      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.08]">
        <img src={HERO_BG} alt="Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-transparent" />
      </motion.div>

      {/* Noise grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '150px' }} />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 my-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-white/90 text-xs tracking-[0.2em] uppercase font-semibold"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Est. 2024 &nbsp;·&nbsp; Pune, India
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-baseline gap-x-5 gap-y-2"
            >
              {TAGLINE.map((word, i) => (
                <div key={i} className="overflow-hidden inline-block">
                  <motion.span
                    variants={wordVariants}
                    style={{
                      display: 'inline-block',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: 800,
                      fontSize: 'clamp(3rem, 7.5vw, 6.8rem)',
                      lineHeight: 1.0,
                      letterSpacing: '-0.03em',
                      color: i === TAGLINE.length - 1 ? '#e3461a' : 'white',
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Sub-copy + CTA buttons in editorial stack */}
          <div className="max-w-2xl mt-4 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/80 text-lg sm:text-xl font-light leading-relaxed mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Premier institution for aspiring designers. We cultivate creative thinkers
              who shape the visual culture of tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary button */}
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:bg-orange-600 transition-all duration-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span>Explore Programs</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowDownRight size={14} className="text-white" />
                </span>
              </motion.a>

              {/* Ghost button */}
              <motion.a
                href="#about"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 text-white px-7 py-4 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-md text-sm font-semibold tracking-wide transition-all duration-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Our Story
              </motion.a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
            className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { num: '500+', label: 'Students Enrolled' },
              { num: '20+', label: 'Expert Faculty' },
              { num: '6', label: 'Design Programs' },
              { num: '95%', label: 'Placement Rate' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-white text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{s.num}</span>
                <span className="text-white/60 text-xs tracking-wider uppercase mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2 text-white/30"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-transparent to-white/30"
        />
        <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Scroll</span>
      </motion.div>
    </section>
  );
};
