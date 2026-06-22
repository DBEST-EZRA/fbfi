import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Programs",
    "Impact",
    "Events",
    "Partners",
    "Blog",
    "Contact",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-yellow-600 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-red-700 rounded flex items-center justify-center">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2L9.5 8.5H3L8.5 12.5L6 19L12 15L18 19L15.5 12.5L21 8.5H14.5L12 2Z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-black tracking-tight">
                Our<span className="text-red-700">Org</span>
              </span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
              {navLinks
                .filter((l) => l !== "Donate")
                .map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-xs font-medium uppercase tracking-widest text-black px-3 py-2 rounded hover:text-red-700 hover:bg-red-50 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              <li>
                <a
                  href="#donate"
                  className="ml-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 bg-red-700 text-white rounded border-2 border-red-700 hover:bg-black hover:border-black hover:text-yellow-500 transition-all duration-200"
                >
                  Donate
                </a>
              </li>
            </ul>

            {/* Hamburger Button */}
            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 p-2 rounded focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-black rounded transition-transform duration-300 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-black rounded transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-black rounded transition-transform duration-300 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 flex flex-col gap-1 bg-white">
            {navLinks
              .filter((l) => l !== "Donate")
              .map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-black py-3 px-2 border-b border-gray-100 hover:text-red-700 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            <a
              href="#donate"
              onClick={() => setIsOpen(false)}
              className="mt-3 text-center text-sm font-semibold uppercase tracking-widest py-3 px-4 bg-red-700 text-white rounded border-2 border-red-700 hover:bg-black hover:border-black hover:text-yellow-500 transition-all duration-200"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer so content isn't hidden behind fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
