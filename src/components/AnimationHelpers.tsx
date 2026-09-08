import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  stagger?: number;
  once?: boolean;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  style,
  delay = 0,
  tag: Tag = 'h2',
  stagger = 0.05,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
    else if (!once) controls.start('hidden');
  }, [isInView, controls, once]);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} style={style}>
      <motion.span
        style={{ display: 'block' }}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
          hidden: {},
        }}
      >
        {words.map((word, i) => (
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
            <motion.span
              style={{ display: 'inline-block', marginRight: '0.3em' }}
              variants={{
                hidden: { y: '105%', opacity: 0, skewY: 4 },
                visible: {
                  y: 0,
                  opacity: 1,
                  skewY: 0,
                  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.75,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const dirMap: Record<string, object> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1, x: 0, y: 0,
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic button wrapper
export const MagneticBtn: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children, className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
