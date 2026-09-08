import { RevealText, FadeIn } from './AnimationHelpers';
import { motion } from 'framer-motion';

const IMAGE1 = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80';
const IMAGE2 = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <FadeIn className="flex items-center gap-3 mb-12">
          <div className="w-8 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
            About Us
          </span>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Images */}
          <div className="relative">
            <FadeIn direction="left" delay={0.1}>
              <div className="relative z-10">
                <img
                  src={IMAGE1}
                  alt="Students at Indus Design School"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </FadeIn>

            {/* Overlapping smaller image */}
            <FadeIn direction="right" delay={0.35}>
              <div className="absolute -bottom-12 -right-6 lg:-right-10 z-20 w-56 lg:w-64">
                <img
                  src={IMAGE2}
                  alt="Design studio"
                  className="w-full h-48 object-cover rounded-xl shadow-xl border-4 border-white"
                />
              </div>
            </FadeIn>

            {/* Orange accent box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-6 -left-6 w-20 h-20 bg-brand-orange rounded-2xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-4 left-10 w-32 h-32 bg-brand-cream rounded-2xl -z-10"
            />
          </div>

          {/* Right - Text */}
          <div className="lg:pt-8 pb-12">
            <RevealText
              text="Where Creativity Meets Craft"
              tag="h2"
              className="font-heading font-bold text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-brand-dark mb-6"
              delay={0.1}
            />

            <FadeIn delay={0.3} direction="up">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At <strong className="text-brand-dark">Indus Design School</strong>, we believe that design is not
                just about aesthetics — it's about solving problems, communicating ideas, and changing
                the world. Founded by industry veterans with a passion for nurturing talent, we offer
                a transformative education unlike any other.
              </p>
            </FadeIn>

            <FadeIn delay={0.45} direction="up">
              <p className="text-gray-500 leading-relaxed mb-10">
                Our state-of-the-art studios, world-class faculty, and strong industry connections
                ensure that every student graduates ready to lead in the rapidly evolving design landscape.
              </p>
            </FadeIn>

            {/* Feature list */}
            <FadeIn delay={0.55} direction="up">
              <ul className="space-y-4">
                {[
                  'Industry-integrated curriculum',
                  'International exchange programs',
                  'Dedicated placement support',
                  'Award-winning design studio facility',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-brand-orange block" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.7} direction="up">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 mt-10 text-brand-orange font-semibold border-b-2 border-brand-orange pb-1 hover:gap-4 transition-all duration-300"
              >
                Explore our programs →
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
