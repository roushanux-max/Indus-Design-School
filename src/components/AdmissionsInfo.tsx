import { motion } from 'framer-motion';
import { useState } from 'react';
import { RevealText, FadeIn } from './AnimationHelpers';

// Marquee strip of partner logos (text-based)
const partners = [
  'Godrej & Boyce', 'Titan', 'Myntra', 'Designit', 'IDEO', 'HUL', 
  'Google India', 'Tata Elxsi', 'Godrej & Boyce', 'Titan',
];

const MarqueeStrip: React.FC = () => (
  <div className="relative overflow-hidden w-full py-6 bg-brand-cream border-y border-gray-200">
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      className="flex gap-16 whitespace-nowrap"
    >
      {[...partners, ...partners].map((p, i) => (
        <span key={i} className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex-shrink-0">
          {p}
        </span>
      ))}
    </motion.div>
  </div>
);

// Accordion FAQ item
interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.07} direction="up">
      <div className="border-b border-gray-200 last:border-0">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="font-semibold text-brand-dark group-hover:text-brand-orange transition-colors pr-4">
            {question}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-brand-orange text-2xl flex-shrink-0"
          >
            +
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-gray-500 leading-relaxed pb-5 text-sm">{answer}</p>
        </motion.div>
      </div>
    </FadeIn>
  );
};

const faqs = [
  {
    q: 'What are the eligibility criteria for admission?',
    a: 'Students who have completed 10+2 from a recognized board with at least 50% marks are eligible. Admission is based on our entrance test and portfolio review.',
  },
  {
    q: 'Does Indus Design School offer scholarships?',
    a: 'Yes, we offer merit-based and need-based scholarships. Up to 25% of students in each batch receive some form of financial support.',
  },
  {
    q: 'What is the campus placement record?',
    a: 'We maintain a 95% placement rate. Our graduates work at leading studios, agencies, and corporations in India and internationally.',
  },
  {
    q: 'Are there any industry internship opportunities?',
    a: 'Absolutely. Our curriculum includes mandatory internships in your second and third year, backed by partnerships with 50+ design firms.',
  },
  {
    q: 'Is a portfolio required for application?',
    a: 'A portfolio is required for shortlisted candidates called for the second round. First-time applicants without a portfolio can submit their creative works — drawings, photos, craft work, etc.',
  },
];

export const AdmissionsInfo: React.FC = () => {
  return (
    <>
      <MarqueeStrip />
      <section className="py-28 lg:py-36 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <FadeIn className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
                  Admissions 2025
                </span>
              </FadeIn>
              <RevealText
                text="Your Journey Starts Here"
                tag="h2"
                className="font-heading font-bold text-[clamp(2rem,4vw,3.2rem)] leading-tight text-brand-dark mb-6"
                delay={0.1}
              />
              <FadeIn delay={0.3} direction="up">
                <p className="text-gray-500 leading-relaxed mb-10">
                  Our admissions process is designed to identify creative potential, passion, and purpose.
                  We welcome students from all backgrounds who have the curiosity to learn and the drive to create.
                </p>
              </FadeIn>

              {/* Process Steps */}
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Fill Online Application', desc: 'Complete the application form with your details and academic record.' },
                  { step: '02', title: 'Entrance Test / Interview', desc: 'Shortlisted candidates appear for the design aptitude test.' },
                  { step: '03', title: 'Portfolio Review', desc: 'Submit creative work samples for faculty evaluation.' },
                  { step: '04', title: 'Offer & Enrollment', desc: 'Receive your offer letter and secure your seat.' },
                ].map((item, i) => (
                  <FadeIn key={item.step} delay={0.35 + i * 0.1} direction="up">
                    <div className="flex gap-5 items-start">
                      <span className="font-heading font-bold text-brand-orange text-2xl flex-shrink-0 w-10">
                        {item.step}
                      </span>
                      <div>
                        <div className="font-semibold text-brand-dark mb-1">{item.title}</div>
                        <div className="text-gray-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right - FAQ */}
            <div>
              <FadeIn className="flex items-center gap-3 mb-8" delay={0.15}>
                <div className="w-8 h-0.5 bg-brand-orange" />
                <span className="text-brand-orange text-sm font-semibold tracking-[0.2em] uppercase">
                  FAQs
                </span>
              </FadeIn>
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
