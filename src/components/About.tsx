import { RevealText, FadeIn } from './AnimationHelpers';
import { motion } from 'framer-motion';

const IMAGE1 = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=85&auto=format';
const IMAGE2 = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=85&auto=format';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-28 items-center">

          {/* Left — Images */}
          <div className="relative pb-14">
            <FadeIn direction="left" delay={0.05}>
              <div className="relative z-10 rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <motion.img
                  src={IMAGE1}
                  alt="Students"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </FadeIn>

            {/* Floating second image */}
            <FadeIn direction="up" delay={0.3}>
              <div className="absolute -bottom-2 -right-4 lg:-right-10 z-20 w-[48%] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <motion.img
                  src={IMAGE2}
                  alt="Design studio"
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </FadeIn>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-5 -left-5 w-24 h-24 bg-brand-orange/10 rounded-full -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-12 -left-3 w-3 h-3 rounded-full bg-brand-orange"
            />

            {/* Floating badge */}
            <FadeIn delay={0.5} direction="right">
              <div className="absolute bottom-16 -left-6 z-30 bg-[#0a0a0a] text-white rounded-2xl px-5 py-4 shadow-xl">
                <div className="text-3xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>2024</div>
                <div className="text-white/50 text-xs tracking-wider mt-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ESTABLISHED</div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Text */}
          <div>
            <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-brand-orange/25 bg-brand-orange/5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>About Us</span>
            </FadeIn>

            <RevealText
              text="Where Creativity Meets Craft"
              tag="h2"
              className="mb-6 font-bold leading-[1.05]"
              style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', color: '#0a0a0a' } as React.CSSProperties}
              delay={0.1}
            />

            <FadeIn delay={0.25} direction="up">
              <p className="text-gray-500 text-lg leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                At <strong className="text-[#0a0a0a] font-semibold">Indus Design School</strong>, we believe design is not just about aesthetics —
                it's about solving problems, communicating ideas, and changing the world.
              </p>
            </FadeIn>

            <FadeIn delay={0.35} direction="up">
              <p className="text-gray-400 leading-relaxed mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our state-of-the-art studios, world-class faculty, and strong industry connections
                ensure every student graduates ready to lead in the rapidly evolving design landscape.
              </p>
            </FadeIn>

            {/* Feature chips */}
            <FadeIn delay={0.45} direction="up">
              <div className="flex flex-wrap gap-2.5 mb-10">
                {[
                  'Industry-integrated curriculum',
                  'International exchange',
                  'Dedicated placement',
                  'Award-winning studio',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-brand-orange/10 hover:text-brand-orange transition-colors duration-200 cursor-default"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.55} direction="up">
              <motion.a
                href="#programs"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-orange transition-colors duration-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Explore Programs
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block transition-transform duration-200">↗</span>
                </span>
              </motion.a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
