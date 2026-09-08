import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RevealText, FadeIn } from './AnimationHelpers';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = '', prefix = '', duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled', desc: 'Passionate designers from across India' },
  { value: 95, suffix: '%', label: 'Placement Rate', desc: 'Industry placement within 6 months of graduation' },
  { value: 20, suffix: '+', label: 'Expert Faculty', desc: 'Industry veterans and practicing designers' },
  { value: 10, suffix: '+', label: 'Studio Partners', desc: 'Top design studios and brands we work with' },
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-28 lg:py-36 bg-brand-dark overflow-hidden relative">
      {/* Decorative orange vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
        className="absolute left-0 top-0 w-1 h-full bg-brand-orange/30"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <div>
            <FadeIn className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-brand-orange" />
              <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
                By The Numbers
              </span>
            </FadeIn>
            <RevealText
              text="Our Impact in Numbers"
              tag="h2"
              className="font-heading font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight text-white mb-6"
              delay={0.1}
            />
            <FadeIn delay={0.3} direction="up">
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                We measure our success not just in awards, but in the careers we launch, the ideas we nurture,
                and the lives we change.
              </p>
            </FadeIn>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.15 + i * 0.1} direction="up">
                <div className="border-l-2 border-brand-orange/30 pl-5">
                  <div className="font-heading font-bold text-[clamp(2.5rem,5vw,4rem)] text-white leading-none mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.2} />
                  </div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-sm leading-snug">{stat.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
