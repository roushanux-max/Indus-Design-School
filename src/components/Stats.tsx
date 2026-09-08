import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RevealText, FadeIn } from './AnimationHelpers';

const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({
  end, suffix = '', duration = 2.2
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - prog, 4);
      setCount(Math.floor(eased * end));
      if (prog < 1) requestAnimationFrame(raf);
      else setCount(end);
    };
    requestAnimationFrame(raf);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled', detail: 'From across India & beyond' },
  { value: 95, suffix: '%', label: 'Placement Rate', detail: 'Within 6 months of graduation' },
  { value: 20, suffix: '+', label: 'Expert Faculty', detail: 'Industry veterans & practitioners' },
  { value: 50, suffix: '+', label: 'Studio Partners', detail: 'Top design firms globally' },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-28 lg:py-40 bg-[#0a0a0a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-20 items-center">
          {/* Left */}
          <div>
            <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-brand-orange/25 bg-brand-orange/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>By The Numbers</span>
            </FadeIn>
            <RevealText
              text="Our Impact Speaks for Itself"
              tag="h2"
              className="font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' } as React.CSSProperties}
              delay={0.1}
            />
            <FadeIn delay={0.3} direction="up">
              <p className="text-gray-500 leading-relaxed text-base max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                We measure success in careers launched, ideas nurtured, and lives changed — not just awards won.
              </p>
            </FadeIn>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.1 + i * 0.1} direction="none">
                <motion.div
                  className="bg-[#111] p-8 hover:bg-[#161616] transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-[3.5rem] font-bold text-white mb-1 leading-none group-hover:text-brand-orange transition-colors duration-300"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/80 font-semibold text-sm mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{stat.label}</div>
                  <div className="text-gray-600 text-xs leading-snug"
                    style={{ fontFamily: 'Inter, sans-serif' }}>{stat.detail}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
