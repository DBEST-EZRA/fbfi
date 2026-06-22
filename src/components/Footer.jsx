const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Events", href: "#events" },
    { label: "Partners", href: "#partners" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const quickLinks = [
    { label: "Donate Now", href: "#donate" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Our Programs", href: "#programs" },
    { label: "Upcoming Events", href: "#events" },
    { label: "Partner With Us", href: "#partners" },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top CTA Banner */}
      <div className="bg-red-700 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg uppercase tracking-wide">
              Support the Movement
            </p>
            <p className="text-red-200 text-sm mt-0.5">
              Help us transform lives through boxing & mentorship
            </p>
          </div>
          <a
            href="#donate"
            className="shrink-0 bg-white text-red-700 font-bold uppercase tracking-widest text-sm px-6 py-3 rounded hover:bg-yellow-500 hover:text-black transition-all duration-200"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-700 rounded flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2L9.5 8.5H3L8.5 12.5L6 19L12 15L18 19L15.5 12.5L21 8.5H14.5L12 2Z" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="text-white">FBFI</span>
              </span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500 mb-2">
              Fight for a Better Future
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Using boxing as a tool to engage, mentor, and empower vulnerable
              youth through training, life skills, education, and pathways to
              employment.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  label: "Facebook",
                  icon: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                },
                {
                  label: "Twitter/X",
                  icon: (
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  ),
                },
                {
                  label: "Instagram",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="3" fill="black" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
                    </>
                  ),
                },
                {
                  label: "YouTube",
                  icon: (
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  ),
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-200 group"
                >
                  <svg
                    className="w-4 h-4 stroke-white fill-none group-hover:stroke-black transition-colors duration-200"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-700 group-hover:bg-yellow-500 transition-colors duration-200 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Get Involved
            </h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-700 group-hover:bg-yellow-500 transition-colors duration-200 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Upcoming Event */}
            <div className="border border-yellow-600/40 rounded p-3 bg-white/5">
              <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">
                Next Event
              </p>
              <p className="text-white text-sm font-semibold">
                Youth Empowerment Boxing Exhibition
              </p>
              <p className="text-gray-400 text-xs mt-1">
                27th June 2026 · Maasai Mall – Tumaini, Ongata Rongai
              </p>
            </div>
          </div>

          {/* Column 4 — Donate / Contact */}
          <div>
            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
              Donate via M-Pesa
            </h4>
            <div className="bg-white/5 border border-white/10 rounded p-4 mb-5 space-y-2">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Paybill
                </p>
                <p className="text-white font-bold text-lg tracking-widest">
                  522533
                </p>
              </div>
              <div className="border-t border-white/10 pt-2">
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Account No.
                </p>
                <p className="text-white font-bold text-lg tracking-widest">
                  7868187
                </p>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed pt-1">
                Currently using Ongata Rongai Talent Boxing Club account.
                Official details shared after CBO registration.
              </p>
            </div>

            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Ongata Rongai, Kenya</p>
              <a
                href="mailto:info@fbfi.org"
                className="block hover:text-white transition-colors"
              >
                ✉️ info@fbfi.org
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Fight For A Better Future Initiative
            (FBFI). All rights reserved.
          </p>
          <p className="text-gray-600 text-xs italic text-center">
            "Fight for a Better Future"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
