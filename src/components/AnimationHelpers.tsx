import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  stagger?: number;
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className = '',
  delay = 0,
  tag: Tag = 'h2',
  stagger = 0.04,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
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
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'inline-block', marginRight: '0.35em' }}
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const directionMap = {
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
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};
