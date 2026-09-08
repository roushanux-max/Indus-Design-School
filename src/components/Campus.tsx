import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText, FadeIn } from './AnimationHelpers';

const CAMPUS_IMG = 'https://images.unsplash.com/photo-1562774053-701939374585?w=1400&q=80';
const STUDIO_IMG = 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80';
const LIFE_IMG = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80';

export const Campus: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section id="campus" className="py-28 lg:py-36 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <FadeIn className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
              Campus Life
            </span>
          </FadeIn>
          <RevealText
            text="A Space Designed for Creativity"
            tag="h2"
            className="font-heading font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight text-brand-dark"
            delay={0.1}
          />
        </div>

        {/* Full-width parallax image */}
        <FadeIn className="rounded-3xl overflow-hidden mb-8" direction="none" delay={0.2}>
          <div style={{ height: '60vh' }} className="w-full">
            <div ref={ref} className="w-full h-full relative overflow-hidden rounded-3xl">
            <motion.img
              src={CAMPUS_IMG}
              alt="Indus Design School Campus"
              style={{ y }}
              className="w-full h-[120%] object-cover scale-110 absolute inset-0"
            />
            {/* Overlay text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-end p-12">
              <FadeIn delay={0.4}>
                <blockquote className="text-white max-w-lg">
                  <p className="text-2xl font-heading font-semibold leading-snug mb-4">
                    "Our campus is more than a building — it's a living, breathing design laboratory."
                  </p>
                  <footer className="text-white/70 text-sm">— The Founder, Indus Design School</footer>
                </blockquote>
              </FadeIn>
            </div>
            </div>
          </div>
        </FadeIn>

        {/* Two smaller images side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.2} direction="up">
            <div className="rounded-2xl overflow-hidden group" style={{ height: '340px' }}>
              <motion.img
                src={STUDIO_IMG}
                alt="Design Studio"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mt-4">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">State-of-the-Art Studios</h3>
              <p className="text-gray-600">Fully equipped design studios open 24/7 to fuel your creative process.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} direction="up">
            <div className="rounded-2xl overflow-hidden group" style={{ height: '340px' }}>
              <motion.img
                src={LIFE_IMG}
                alt="Student Life"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="mt-4">
              <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">Vibrant Student Community</h3>
              <p className="text-gray-600">Events, exhibitions, and collaborations that build lifelong connections.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
