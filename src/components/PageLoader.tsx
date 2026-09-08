import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PageLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-3 mb-12"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-12 h-12 bg-brand-orange rounded-sm flex items-center justify-center"
        >
          <span className="text-white font-bold text-xl font-heading">I</span>
        </motion.div>
        <div>
          <div className="font-heading font-bold text-xl text-white">Indus Design School</div>
          <div className="text-white/40 text-xs tracking-widest uppercase">Pune, India</div>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-orange rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-white/30 text-xs"
      >
        {progress}%
      </motion.div>
    </motion.div>
  );
};
