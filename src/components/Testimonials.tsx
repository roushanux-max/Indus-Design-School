import { RevealText, FadeIn } from './AnimationHelpers';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    program: 'B.Des Interior Design, 2024',
    quote: 'Indus Design School didn\'t just teach me to design spaces — it taught me to think like a designer. The studio environment here is unlike anything else.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format',
    company: 'Studio Morphogenesis',
    role: 'Junior Designer',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    program: 'B.Des UI/UX Design, 2023',
    quote: 'The curriculum is incredibly relevant. By graduation, I already had a portfolio strong enough to land my dream job at a top product studio.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format',
    company: 'Google India',
    role: 'UX Designer',
  },
  {
    id: 3,
    name: 'Sneha Patil',
    program: 'B.Des Fashion Design, 2024',
    quote: 'The faculty are practicing professionals who bring real-world experience into the classroom every single day. That is truly invaluable.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format',
    company: 'Masaba Gupta',
    role: 'Design Associate',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="admissions" className="py-28 lg:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-brand-orange/25 bg-brand-orange/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-orange text-xs font-semibold tracking-[0.18em] uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Student Voices</span>
          </FadeIn>
          <RevealText
            text="What Our Graduates Say"
            tag="h2"
            className="font-bold leading-[1.05]"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0a0a0a' } as React.CSSProperties}
            delay={0.1}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={0.1 + i * 0.1} direction="up">
              <motion.div
                className="group relative flex flex-col h-full bg-[#f7f3ee] rounded-2xl p-7 hover:bg-[#0a0a0a] transition-colors duration-500 cursor-default overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Quote icon */}
                <div className="text-5xl leading-none font-serif text-brand-orange/30 group-hover:text-brand-orange/50 transition-colors mb-4 select-none">"</div>

                <p className="text-gray-700 group-hover:text-white/75 leading-relaxed text-base flex-1 transition-colors duration-500 mb-7"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-black/8 group-hover:border-white/10 transition-colors duration-500">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#0a0a0a] group-hover:text-white text-sm transition-colors duration-500"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.name}</div>
                    <div className="text-gray-400 group-hover:text-white/40 text-xs transition-colors duration-500">{t.program}</div>
                    <div className="text-brand-orange text-xs font-semibold mt-0.5">{t.company} · {t.role}</div>
                  </div>
                </div>

                {/* Decorative corner */}
                <motion.div
                  className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
                    <ArrowUpRight size={12} className="text-white/50" />
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Banner */}
        <FadeIn delay={0.3} direction="up">
          <div className="relative bg-[#0a0a0a] rounded-3xl p-10 lg:p-16 overflow-hidden">
            {/* Orange accent blob */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-orange/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="text-brand-orange text-xs font-semibold tracking-wider uppercase"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Applications Open</span>
                </div>
                <h3 className="text-white text-3xl lg:text-4xl font-bold leading-tight mb-3"
                  style={{ fontFamily: 'Syne, sans-serif' }}>
                  Ready to Start Your<br />Design Journey?
                </h3>
                <p className="text-white/50 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Join 500+ students who chose Indus Design School. Applications for 2025–26 are now open.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2.5 bg-brand-orange text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Apply Now
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 border border-white/15 text-white/80 hover:text-white hover:border-white/30 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Download Prospectus
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
