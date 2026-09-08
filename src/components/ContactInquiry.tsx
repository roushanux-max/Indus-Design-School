import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactInquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Subtext matching Section 8 */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 block mb-3">
              ADMISSIONS & INQUIRY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight mb-6">
              Have Questions? We'd Love to Hear From You
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our academic advisors, studio faculty, and admissions team are ready to guide you through portfolio evaluations, entrance exam schedules, and scholarship opportunities.
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Campus Visits & Guided Studio Tours: Monday – Saturday</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Admissions Hotline: +91 20 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>Email: admissions@indusdesignschool.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form matching Section 8 */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] border border-[#f0e9df] rounded-3xl p-8 sm:p-10 shadow-xs">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
                    Thank you for reaching out to Indus Design School. An admissions advisor will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#0e1726] text-white text-xs font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Program of Interest
                    </label>
                    <select
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                    >
                      <option value="">Select a Program</option>
                      <option value="bdes-interior">B.Des Interior Design</option>
                      <option value="bdes-fashion">B.Des Fashion Design</option>
                      <option value="bdes-graphic">B.Des Graphic Design</option>
                      <option value="bdes-product">B.Des Product Design</option>
                      <option value="bdes-uiux">B.Des UI/UX Design</option>
                      <option value="mdes-studies">M.Des Design Studies</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your background, creative interests, and questions..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0e1726] text-white text-sm font-semibold tracking-wide hover:bg-black hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
