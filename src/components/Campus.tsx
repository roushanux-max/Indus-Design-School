import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText, FadeIn } from './AnimationHelpers';

const CAMPUS_IMG = 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format';
const STUDIO_IMG = 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80&auto=format';
const LIFE_IMG = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format';

export const Campus: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: bgRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="campus" className="py-28 lg:py-40 bg-[#f7f3ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-brand-orange/25 bg-brand-orange/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Campus Life</span>
            </FadeIn>
            <RevealText
              text="A Space Designed for Creativity"
              tag="h2"
              className="font-bold leading-[1.05] max-w-lg"
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0a0a0a' } as React.CSSProperties}
              delay={0.1}
            />
          </div>
          <FadeIn direction="left" delay={0.2}>
            <p className="text-gray-500 max-w-xs leading-relaxed text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our campus is more than a building — it's a living, breathing design laboratory open 24/7.
            </p>
          </FadeIn>
        </div>

        {/* Hero parallax image */}
        <FadeIn direction="none" delay={0.1}>
          <div ref={bgRef} className="relative rounded-3xl overflow-hidden mb-6" style={{ height: '58vh' }}>
            <motion.img
              src={CAMPUS_IMG}
              alt="Campus"
              style={{ y }}
              className="absolute inset-0 w-full h-[118%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent" />

            {/* Quote */}
            <div className="absolute inset-0 flex items-end p-10 lg:p-14">
              <FadeIn delay={0.35}>
                <blockquote>
                  <p className="text-white text-2xl lg:text-3xl font-semibold leading-snug max-w-md mb-4"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    "Our campus is where bold ideas come to life every single day."
                  </p>
                  <footer className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    — Founder, Indus Design School
                  </footer>
                </blockquote>
              </FadeIn>
            </div>
          </div>
        </FadeIn>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: STUDIO_IMG, title: 'State-of-the-Art Studios', desc: 'Fully equipped design studios open 24/7 to fuel your creative process.' },
            { img: LIFE_IMG, title: 'Vibrant Student Community', desc: 'Events, exhibitions, and collaborations that build lifelong connections.' },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.15 + i * 0.12} direction="up">
              <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 hover:shadow-lg transition-shadow duration-500">
                <div className="overflow-hidden" style={{ height: '260px' }}>
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0a0a0a] text-lg mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
