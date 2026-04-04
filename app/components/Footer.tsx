import photo from "~/images/Waterland logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Location", href: "#location" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-sky-950 text-sky-200" id="footer">
      <div className="max-w-6xl mx-auto px-6 md:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={photo}
                alt="Waterland Resort logo"
                className="w-10 h-10 rounded-full shadow-md"
              />
              <span className="text-white font-bold text-xl tracking-wide">
                Waterland Resort
              </span>
            </div>
            <p className="text-sky-300/70 text-sm leading-relaxed mb-6 max-w-xs">
              Your premier tropical getaway in Kabacan, North Cotabato. Relax,
              swim, and celebrate life's best moments with us.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=100063975132336&mibextid=ZbWKwL",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0011.14 4.17V12.8a8.22 8.22 0 005.3 1.93V11.3a4.85 4.85 0 01-3.77-1.85V6.69h3.77z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-sky-900 text-sky-300 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sky-300/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-4 text-sm text-sky-300/70">
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📍</span>
                <span>
                  Brgy. Osias, Kabacan,
                  <br />
                  North Cotabato, Philippines 9407
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">📞</span>
                <span>+63 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">✉️</span>
                <span>hello@waterlandresort.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5">🕐</span>
                <span>
                  Mon–Fri: 8AM–9PM
                  <br />
                  Sat–Sun: 7AM–10PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-800/50">
        <div className="max-w-6xl mx-auto px-6 md:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sky-400/60 text-sm tracking-wide">
            © {currentYear} Waterland Resort. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-sky-400/50">
            <a href="#" className="hover:text-sky-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-300 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
