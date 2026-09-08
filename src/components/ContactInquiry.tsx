import { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock } from 'lucide-react';

const courses = [
  'B.Design in Interior Design (4 Years)',
  'B.Design in Fashion Design (4 Years)',
  'B.Design in Communication Design (4 Years)',
  'B.Design in Product Design (4 Years)',
  'M.Design in UI-UX Design (2 Years)',
  'M.Design in Interior Design (2 Years)',
  'M.Design in Fashion Design (2 Years)',
  'Minor Degree in Design',
  'Other / General Admission Inquiry',
];

export const ContactInquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: courses[0],
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Authentic Contact Details */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e3461a] block mb-3">
              ADMISSIONS &amp; INQUIRY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0e1726] leading-tight mb-6">
              Have Questions? We’d Love to Hear From You
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are exploring undergraduate B.Des disciplines, postgraduate research, or scheduling a studio campus walkthrough, our admissions advisors in Ahmedabad are ready to assist.
            </p>

            <div className="space-y-5 text-sm text-gray-700 bg-gray-50/80 p-6 sm:p-8 rounded-3xl border border-gray-100">
              <div className="flex items-start gap-3.5">
                <MapPin size={18} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Campus Address</strong>
                  <span>Rancharda, Via: Shilaj, Ahmedabad – 382 115. Gujarat, India.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone size={18} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Admissions Hotline</strong>
                  <span>+91 76000 16987 / +91 76220 07501</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail size={18} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Official Email</strong>
                  <span>ids@indusuni.ac.in</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock size={18} className="text-[#e3461a] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-semibold mb-0.5">Studio Visiting Hours</strong>
                  <span>Monday – Saturday: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form matching Oxford reference */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] border border-[#f0e9df] rounded-3xl p-8 sm:p-10 shadow-xs">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0e1726] mb-2">
                    Inquiry Successfully Received
                  </h3>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
                    Thank you for contacting Indus Design School, Ahmedabad. An admissions counselor will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#0e1726] text-white text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="e.g. Aarav"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="e.g. Patel"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="aarav@example.com"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Course Interested In *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors"
                    >
                      {courses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Your Message / Portfolio Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your background, portfolio, or queries about Admissions 2026..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0e1726] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#0e1726] text-white text-sm font-semibold hover:bg-black hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      <span>Send Quick Admission Inquiry</span>
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
