import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, 
        rootMargin: "-100px 0px -20% 0px" 
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: "HOME", id: "hero" },
    { name: "SERVICES", id: "services" },
    { name: "PROJECTS", id: "work" }, 
    { name: "ABOUT", id: "about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Mobile Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 -ml-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none md:hidden transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            {!isMobileMenuOpen ? (
              // Hamburger Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              // Close (X) Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-2 transition hover:opacity-80"
          >
            <img 
              src="/logo.png" 
              alt="Almeda Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)} 
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === link.id 
                  ? "text-blue-500 scale-105" 
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: CTA Button */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-md">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block rounded-md px-3 py-3 text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-gray-800 text-blue-500"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}