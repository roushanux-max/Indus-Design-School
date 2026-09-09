import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Award, BookOpen, Star } from "lucide-react";

const steps = [
  { num: "01", title: "Register Online", desc: "Fill the application form on the IDS Admissions Portal. Provide your 10+2 / Graduation details and course preference." },
  { num: "02", title: "Design Hunt / AIDAT Exam", desc: "Appear for the national level Design Aptitude Test evaluating spatial visualization, creative observation, and material thinking." },
  { num: "03", title: "Studio Interview & Portfolio Review", desc: "Shortlisted candidates are invited to the campus for a creative portfolio presentation and personal interview." },
  { num: "04", title: "Admission Confirmation", desc: "Merit list, scholarship awards, and seat confirmation communicated within 7 working days after interview rounds." },
];

const programs = [
  { title: "B.Des in Interior Design", duration: "4 Years", eligibility: "10+2 Any Stream, 50%" },
  { title: "B.Des in Fashion Design", duration: "4 Years", eligibility: "10+2 Any Stream, 50%" },
  { title: "B.Des in Communication Design", duration: "4 Years", eligibility: "10+2 Any Stream, 50%" },
  { title: "B.Des in Product Design", duration: "4 Years", eligibility: "10+2 Any Stream, 50%" },
  { title: "M.Des in UI-UX Design", duration: "2 Years", eligibility: "Any Bachelor's Degree, 50%" },
  { title: "M.Des in Interior Design", duration: "2 Years", eligibility: "B.Des/B.Arch or equivalent" },
  { title: "M.Des in Fashion Design", duration: "2 Years", eligibility: "B.Des or related degree" },
  { title: "Minor in UI-UX Design", duration: "Minor Track", eligibility: "Enrolled Indus University Student" },
  { title: "Minor in Sustainability Studies", duration: "Minor Track", eligibility: "Enrolled Indus University Student" },
  { title: "Minor in Indic Design", duration: "Minor Track", eligibility: "Enrolled Indus University Student" },
];

const entranceExams = [
  {
    icon: Star,
    title: "Design Hunt",
    subtitle: "National Design Aptitude Exam",
    desc: "A national-level creative aptitude examination assessing spatial visualization, creative observation, material understanding, and design sensibility. Conducted across multiple centers.",
    color: "#e3461a",
  },
  {
    icon: BookOpen,
    title: "AIDAT",
    subtitle: "All India Design Aptitude Test",
    desc: "A recognized aptitude screening for undergraduate B.Des admissions with syllabus covering observation, sketching, design thinking, and analytical thinking.",
    color: "#c88732",
  },
  {
    icon: Award,
    title: "Vidvata Scholarship",
    subtitle: "Merit Excellence Award",
    desc: "Outstanding portfolios and top scorers in Design Hunt are eligible for the Vidvata Merit Scholarship offering up to 50% tuition fee waivers for 2026–27.",
    color: "#0e1726",
  },
];

export const AdmissionsPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="py-12 sm:py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">ADMISSIONS 2026–27</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0e1726] leading-tight mb-4">
                Admissions Open for B.Des &amp; M.Des Programs
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                Begin your creative journey at Indus Design School. Apply for 2026–27 UGC-recognized B.Des (4-Year) or M.Des (2-Year) programs across Interior, Fashion, Communication, Product, and UI/UX Design.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <a href="#apply" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#e3461a] text-white text-sm font-semibold hover:bg-[#c83c14] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <span>Apply Online Now</span>
                  <ArrowUpRight size={16} />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-gray-300 text-sm font-semibold text-[#0e1726] hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                  <span>Speak to Counselor</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F2] rounded-3xl p-8 border border-[#f1ebd7] shadow-sm">
                <h3 className="text-lg font-serif font-bold text-[#0e1726] mb-5">Key Admission Dates 2026–27</h3>
                <div className="space-y-4">
                  {[
                    { date: "Jan – Mar 2026", event: "Application Window Opens" },
                    { date: "April 2026", event: "Design Hunt Aptitude Test" },
                    { date: "May 2026", event: "Portfolio Review & Interviews" },
                    { date: "June 2026", event: "Merit List & Scholarships Announced" },
                    { date: "July 2026", event: "Semester 1 Orientation & Commencement" },
                  ].map((item) => (
                    <div key={item.event} className="flex items-start gap-4 py-2 border-b border-gray-200/60 last:border-none">
                      <div className="w-28 text-[#c88732] text-xs font-mono font-semibold flex-shrink-0">{item.date}</div>
                      <div className="text-sm text-gray-800">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entrance Exams */}
      <div className="py-20 lg:py-24 bg-[#FAF7F2] border-y border-[#f1ebd7]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">ADMISSION PATHWAYS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726] leading-tight">
              Entrance Exams &amp; Scholarship Opportunities
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {entranceExams.map((exam) => {
              const Icon = exam.icon;
              return (
                <motion.div key={exam.title} whileHover={{ y: -6 }} className="bg-white rounded-3xl p-8 sm:p-9 border border-gray-200/80 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white" style={{ background: exam.color }}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-gray-400 uppercase mb-1 block">{exam.subtitle}</span>
                    <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-3">{exam.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{exam.desc}</p>
                  </div>
                  <div className="pt-6">
                    <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-[#0e1726] hover:bg-[#0e1726] hover:text-white hover:border-[#0e1726] transition-all cursor-pointer">
                      <span>Exam Details &amp; Syllabi</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Eligibility Table */}
      <div className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">PROGRAM ELIGIBILITY</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726]">
              Eligibility Criteria at a Glance
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500">Program</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500">Duration</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500">Minimum Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((prog, i) => (
                  <tr key={prog.title} className={`border-b border-gray-100 hover:bg-[#FAF7F2] transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                    <td className="py-4 px-6 font-medium text-[#0e1726]">{prog.title}</td>
                    <td className="py-4 px-6 font-mono text-xs text-[#c88732] font-semibold">{prog.duration}</td>
                    <td className="py-4 px-6 text-gray-600">{prog.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4-Step Application Process */}
      <div className="py-10 sm:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-[32px] bg-[#0c0f14] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="mb-12">
              <img src="/ids-logo-white.png" alt="Indus Design School" className="h-8 sm:h-9 w-auto object-contain mb-5 opacity-95" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c88732] block mb-3">HOW TO APPLY</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">4-Step Application Process</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col">
                  <div className="text-5xl font-serif font-black text-white/15 mb-3">{step.num}</div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-gray-400 text-sm max-w-md">Questions about the process? Our admissions counselors are available Monday–Saturday, 9 AM–5 PM.</p>
              <div className="flex flex-wrap gap-4 flex-shrink-0">
                <a href="#apply" className="px-8 py-3.5 rounded-full bg-[#e3461a] hover:bg-[#c83c14] text-white text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
                  Start Your Application
                </a>
                <Link to="/contact" className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all hover:-translate-y-0.5 cursor-pointer">
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Application Form */}
      <div id="apply" className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#f1ebd7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">QUICK ADMISSION FORM</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0e1726]">Apply Now to Begin Your Creative Journey</h2>
          </div>
          {submitted ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-2">Application Received!</h3>
              <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">Thank you for applying to Indus Design School. Our admissions team will contact you within 24 hours to schedule your aptitude test and portfolio review.</p>
              <button onClick={() => setSubmitted(false)} className="px-8 py-3.5 rounded-full bg-[#0e1726] hover:bg-black text-white text-xs font-semibold cursor-pointer transition-all shadow-md">
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Full Name *</label>
                  <input type="text" required placeholder="e.g. Aarav Mehta" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Phone / WhatsApp *</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Email Address *</label>
                <input type="email" required placeholder="aarav@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">Program Applying For *</label>
                <select required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors">
                  {programs.map((p) => <option key={p.title}>{p.title}</option>)}
                </select>
              </div>
              <div className="pt-3">
                <button type="submit" className="w-full py-4 px-8 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2">
                  <span>Submit Admission Application</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};
