import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'done'>('loading');

  useEffect(() => {
    const total = 1800; // ms
    const step = 16;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += step;
      const raw = elapsed / total;
      const eased = 1 - Math.pow(1 - Math.min(raw, 1), 3);
      setProgress(Math.round(eased * 100));
      if (elapsed >= total) {
        clearInterval(interval);
        setPhase('done');
        setTimeout(onComplete, 500);
      }
    }, step);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
      animate={phase === 'done' ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex flex-col items-center"
      >
        <motion.div
          animate={{ rotate: phase === 'done' ? 0 : [0, 0, 90, 90, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center mb-5"
        >
          <span className="text-white font-bold text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>IDS</span>
        </motion.div>
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Indus Design School
        </span>
      </motion.div>

      {/* Progress */}
      <div className="flex flex-col items-center gap-4 w-48">
        <div className="w-full h-px bg-white/8 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-orange rounded-full origin-left"
            style={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <motion.span
          className="text-white/20 text-xs tabular-nums"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          key={progress}
        >
          {String(progress).padStart(3, '0')}
        </motion.span>
      </div>
    </motion.div>
  );
};
