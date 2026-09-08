import { RevealText, FadeIn } from './AnimationHelpers';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    program: 'B.Des Interior Design, 2024',
    quote:
      'Indus Design School didn\'t just teach me to design spaces — it taught me to think like a designer. The studio environment here is unlike anything else.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    company: 'Studio Morphogenesis',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    program: 'B.Des UI/UX Design, 2023',
    quote:
      'The curriculum is incredibly relevant. By the time I graduated, I already had a portfolio strong enough to land my dream job at a top product studio.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    company: 'Google India',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    program: 'B.Des Fashion Design, 2024',
    quote:
      'The faculty here are practicing professionals who bring real-world experience into the classroom every single day. That is invaluable.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    company: 'Masaba Gupta Studio',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="admissions" className="py-28 lg:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <FadeIn className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
              Student Voices
            </span>
            <div className="w-8 h-0.5 bg-brand-orange" />
          </FadeIn>
          <RevealText
            text="What Our Graduates Say"
            tag="h2"
            className="font-heading font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight text-brand-dark"
            delay={0.1}
          />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={0.1 + i * 0.12} direction="up">
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-400 group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Quote mark */}
                <div className="text-brand-orange text-5xl font-serif leading-none mb-4 opacity-40">"</div>

                <p className="text-gray-700 leading-relaxed mb-8 text-base">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                    <div className="text-brand-gray text-xs">{t.program}</div>
                    <div className="text-brand-orange text-xs font-semibold mt-0.5">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Admissions CTA Banner */}
        <FadeIn delay={0.3} direction="up" className="mt-20">
          <div className="bg-brand-orange rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-white leading-tight mb-3">
                Ready to Start Your Design Journey?
              </h3>
              <p className="text-white/80 max-w-lg text-lg">
                Applications for 2025–26 are now open. Join 500+ students who chose Indus Design School.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 transition-colors"
              >
                Download Prospectus
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
