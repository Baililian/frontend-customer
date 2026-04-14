interface ContactProps {
  onBookingOpen?: () => void;
}

export default function Contact({ onBookingOpen }: ContactProps) {
  return (
    <section className="relative overflow-hidden" id="contact">
      {/* ── Contact Info + Form Grid ── */}
      <div className="bg-linear-to-b from-sky-50 to-white py-28 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sky-500 font-semibold tracking-widest uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="text-5xl font-bold text-sky-800 mb-6">
              We'd Love to Hear From You
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello?
              Drop us a message and we'll get back to you as soon as we can.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* ── Left: Contact Info Cards ── */}
            <div className="md:col-span-2 space-y-6">
              {[
                {
                  icon: "📍",
                  title: "Visit Us",
                  lines: [
                    "Brgy. Osias, Kabacan",
                    "North Cotabato, Philippines 9407",
                  ],
                },
                {
                  icon: "📞",
                  title: "Call Us",
                  lines: ["+63 (123) 456-7890", "+63 (987) 654-3210"],
                },
                {
                  icon: "✉️",
                  title: "Email Us",
                  lines: ["hello@waterlandresort.com", "bookings@waterlandresort.com"],
                },
                {
                  icon: "🕐",
                  title: "Operating Hours",
                  lines: [
                    "Mon – Fri: 8:00 AM – 9:00 PM",
                    "Sat – Sun: 7:00 AM – 10:00 PM",
                  ],
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-sky-100/60 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-sky-800 text-lg mb-1">
                        {card.title}
                      </h4>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-gray-500 text-sm leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                {[
                  {
                    label: "Facebook",
                    href: "https://www.facebook.com/profile.php?id=100063975132336&mibextid=ZbWKwL",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    label: "TikTok",
                    href: "#",
                    svg: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0011.14 4.17V12.8a8.22 8.22 0 005.3 1.93V11.3a4.85 4.85 0 01-3.77-1.85V6.69h3.77z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="md:col-span-3">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-sky-100/60 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Juan Dela Cruz"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="juan@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-sky-50/40 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.01] text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="bg-gradient-to-r from-sky-800 to-sky-600 py-24 text-center text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Experience Waterland?
          </h2>
          <p className="text-lg text-sky-200 mb-10 max-w-xl mx-auto leading-relaxed">
            Come and see why thousands of guests choose us for their perfect
            tropical getaway. Book your stay today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button
              onClick={onBookingOpen}
              className="bg-white text-sky-700 px-10 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Stay
            </button>
            <a
              href="tel:+631234567890"
              className="border-2 border-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-sky-700 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}