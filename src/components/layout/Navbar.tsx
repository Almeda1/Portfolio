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
    const sections = document.querySelectorAll("section[id], #hero");
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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-xl font-sans">
      {/* Top thin line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Mobile Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 -ml-2 text-slate-400 hover:bg-slate-800 hover:text-blue-400 border border-transparent hover:border-slate-700/50 focus:outline-none md:hidden transition-all"
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
            className="hidden md:flex items-center gap-2 transition hover:opacity-80"
          >
            <img 
              src="/logo.png" 
              alt="Almeda Logo" 
              className="h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => scrollToSection(e, link.id)} 
              className={`group flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 ${
                activeSection === link.id 
                  ? "text-blue-400" 
                  : "text-slate-400 hover:text-blue-300"
              }`}
            >
              <span className={`text-[9px] transition-colors ${activeSection === link.id ? 'text-blue-500/80' : 'text-slate-600 group-hover:text-blue-500/50'}`}>
                0{index + 1}.
              </span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: CTA Button */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-mono font-bold tracking-widest text-blue-400 bg-blue-900/20 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-600/20 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] overflow-hidden rounded-sm"
          >
            <span className="absolute inset-0 w-full h-full -translate-x-full bg-blue-500/20 group-hover:animate-[slide_1s] pointer-events-none"></span>
            [ HIRE_ME ]
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-800/80 bg-[#020617]/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`block rounded-sm border-l-2 px-3 py-3 text-xs font-mono tracking-widest uppercase transition-colors ${
                  activeSection === link.id
                    ? "bg-slate-900/50 text-blue-400 border-blue-500"
                    : "border-transparent text-slate-400 hover:bg-slate-900/30 hover:text-blue-300 hover:border-slate-700"
                }`}
              >
                <span className="text-slate-600 mr-2">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}