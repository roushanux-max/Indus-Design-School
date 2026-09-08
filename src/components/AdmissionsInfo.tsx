import { motion } from 'framer-motion';
import { useState } from 'react';
import { RevealText, FadeIn } from './AnimationHelpers';

const partners = [
  'Godrej & Boyce', 'Titan', 'Myntra', 'Designit', 'IDEO',
  'HUL', 'Google India', 'Tata Elxsi', 'Studio Lotus', 'Wunderman',
];

const MarqueeStrip: React.FC = () => (
  <div className="relative overflow-hidden w-full py-5 border-y border-black/8 bg-white">
    <div className="flex gap-0">
      {[...Array(2)].map((_, cloneIdx) => (
        <motion.div
          key={cloneIdx}
          animate={{ x: ['0%', '-100%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: cloneIdx === 1 ? 15 : 0 }}
          className="flex gap-10 whitespace-nowrap flex-shrink-0 will-change-transform"
        >
          {partners.map((p, i) => (
            <span key={i} className="text-xs font-semibold text-gray-300 uppercase tracking-[0.22em] flex items-center gap-10 flex-shrink-0"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {p}
              <span className="w-1 h-1 rounded-full bg-brand-orange/40 inline-block" />
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  </div>
);

interface FAQItemProps { question: string; answer: string; index: number; }

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.06} direction="up">
      <motion.div
        className="border-b border-black/8 last:border-0"
        animate={{ backgroundColor: open ? 'transparent' : 'transparent' }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="font-medium text-[#0a0a0a] group-hover:text-brand-orange transition-colors duration-200 pr-4 text-base"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {question}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${
              open ? 'border-brand-orange bg-brand-orange text-white' : 'border-black/15 text-gray-400'
            }`}
          >
            <span className="text-lg leading-none mb-0.5">+</span>
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-500 leading-relaxed pb-5 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            {answer}
          </p>
        </motion.div>
      </motion.div>
    </FadeIn>
  );
};

const faqs = [
  { q: 'What are the eligibility criteria for admission?', a: 'Students who have completed 10+2 from a recognized board with at least 50% marks are eligible. Admission is based on our entrance test and portfolio review.' },
  { q: 'Does Indus Design School offer scholarships?', a: 'Yes, we offer merit-based and need-based scholarships. Up to 25% of students in each batch receive some form of financial support.' },
  { q: 'What is the campus placement record?', a: 'We maintain a 95% placement rate. Our graduates work at leading studios, agencies, and corporations in India and internationally.' },
  { q: 'Are there any industry internship opportunities?', a: 'Absolutely. Our curriculum includes mandatory internships in your second and third year, backed by partnerships with 50+ design firms.' },
  { q: 'Is a portfolio required for application?', a: 'A portfolio is required for shortlisted candidates. First-time applicants can submit creative works — drawings, photos, craft work, etc.' },
];

export const AdmissionsInfo: React.FC = () => {
  return (
    <>
      <MarqueeStrip />
      <section className="py-28 lg:py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Process */}
            <div>
              <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-brand-orange/25 bg-brand-orange/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-brand-orange text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Admissions 2025</span>
              </FadeIn>
              <RevealText
                text="Your Journey Starts Here"
                tag="h2"
                className="font-bold leading-[1.05] mb-5"
                style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0a0a0a' } as React.CSSProperties}
                delay={0.1}
              />
              <FadeIn delay={0.25} direction="up">
                <p className="text-gray-400 leading-relaxed mb-12 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Our admissions process identifies creative potential, passion, and purpose.
                  We welcome students from all backgrounds.
                </p>
              </FadeIn>

              {/* Steps */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 top-2 bottom-2 w-px bg-black/8" />
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Fill Online Application', desc: 'Complete the form with your details and academic record.' },
                    { step: '02', title: 'Entrance Test / Interview', desc: 'Shortlisted candidates appear for our design aptitude test.' },
                    { step: '03', title: 'Portfolio Review', desc: 'Submit creative work samples for faculty evaluation.' },
                    { step: '04', title: 'Offer & Enrollment', desc: 'Receive your offer letter and secure your seat.' },
                  ].map((item, i) => (
                    <FadeIn key={item.step} delay={0.3 + i * 0.1} direction="up">
                      <div className="flex gap-6 items-start">
                        <div className="w-10 h-10 rounded-full border-2 border-brand-orange bg-white flex items-center justify-center flex-shrink-0 relative z-10">
                          <span className="text-brand-orange text-xs font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{item.step}</span>
                        </div>
                        <div className="pt-1.5">
                          <div className="font-semibold text-[#0a0a0a] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</div>
                          <div className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <FadeIn className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-black/10 bg-gray-50">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="text-gray-500 text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>FAQs</span>
              </FadeIn>
              <RevealText
                text="Frequently Asked Questions"
                tag="h2"
                className="font-bold leading-[1.05] mb-10"
                style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0a0a0a' } as React.CSSProperties}
                delay={0.1}
              />
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
