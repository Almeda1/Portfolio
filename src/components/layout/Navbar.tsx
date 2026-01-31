import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

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
        
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-2 transition hover:opacity-80"
        >
          <img 
            src="/logo.png" 
            alt="Almeda Logo" 
            // Increased size slightly to h-10 (40px) since it stands alone now
            className="h-10 w-auto object-contain" 
          />
        </a>

        {/* Navigation Links */}
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

        {/* CTA Button */}
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
    </nav>
  );
}