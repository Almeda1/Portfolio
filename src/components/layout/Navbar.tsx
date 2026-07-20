import { useState, useEffect, useRef } from "react";
import { MoonStar, SunMedium } from 'lucide-react';
import { useThemeMode } from '@/hooks/useThemeMode';
// Dark mode preview screenshots
import previewHeroDark from '@/assets/preview-hero.png';
import previewProjectsDark from '@/assets/preview-projects.png';
import previewAboutDark from '@/assets/preview-about.png';
import previewContactDark from '@/assets/preview-contact.png';
// Light mode preview screenshots
import previewHeroLight from '@/assets/preview-hero-light.png';
import previewProjectsLight from '@/assets/preview-projects-light.png';
import previewAboutLight from '@/assets/preview-about-light.png';
import previewContactLight from '@/assets/preview-contact-light.png';

type SectionId = 'hero' | 'work' | 'about' | 'contact';

type SectionPreview = {
  title: string;
  image: string;
  caption: string;
};

const getSectionPreviews = (isDark: boolean): Record<SectionId, SectionPreview> => ({
  hero: {
    title: 'Home',
    image: isDark ? previewHeroDark : previewHeroLight,
    caption: 'Hero section showcase',
  },
  work: {
    title: 'Projects',
    image: isDark ? previewProjectsDark : previewProjectsLight,
    caption: 'Project showcase preview',
  },
  about: {
    title: 'About',
    image: isDark ? previewAboutDark : previewAboutLight,
    caption: 'Profile and stats view',
  },
  contact: {
    title: 'Contact',
    image: isDark ? previewContactDark : previewContactLight,
    caption: 'Direct connection panel',
  },
});

export default function Navbar() {
  const { isDark, toggleTheme } = useThemeMode();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<SectionId>('hero');
  
  // Track manual clicks so scroll logic doesn't override active state during smooth scroll
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: SectionId) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      setHoveredSection(id);
      setIsMobileMenuOpen(false);

      // Instantly update hash on click
      window.history.pushState(null, '', `#${id}`);

      // Re-enable observer tracking after the smooth scroll finishes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 850);
    }
  };

  // Sync state to search bar (hash) smoothly
  useEffect(() => {
    if (!isScrollingRef.current && activeSection) {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash !== activeSection) {
        window.history.replaceState(null, '', `#${activeSection}`);
      }
    }
  }, [activeSection]);

  // Robust, jitter-free Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], #hero");
    
    // Maintain a real-time record of how much of each section is visible
    const intersectionRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          intersectionRatios.set(entry.target.id, entry.intersectionRatio);
        });

        // Determine which section has the highest visible percentage in the viewport
        let highestRatio = 0;
        let mostVisibleSectionId = activeSection;

        intersectionRatios.forEach((ratio, id) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleSectionId = id;
          }
        });

        // Only commit the update if there's a clear, dominant section change
        if (highestRatio > 0.05 && mostVisibleSectionId !== activeSection) {
          setActiveSection(mostVisibleSectionId);
        }
      },
      {
        // Check visibility across multiple layout thresholds to prevent sudden jumps
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-80px 0px -20% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [activeSection]);

  const navLinks = [
    { name: "HOME", id: "hero" },
    { name: "PROJECTS", id: "work" }, 
    { name: "ABOUT", id: "about" },
  ];

  const previews = getSectionPreviews(isDark);
  const previewSection = previews[(hoveredSection ?? activeSection) as SectionId] ?? previews.hero;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 font-sans transition-colors duration-300 ${isDark ? 'border-b border-white/10 bg-black/90 backdrop-blur-2xl' : 'border-b border-black/10 bg-white/12 backdrop-blur-2xl'}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className={`text-sm sm:text-base font-semibold tracking-wide transition-colors hover:opacity-80 ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Oscar Okomadu
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-all ${isDark ? 'border-white/15 bg-black/10 text-sky-300 hover:border-sky-400/50 hover:text-sky-200' : 'border-black/10 bg-white/10 text-slate-700 hover:border-sky-400/50 hover:text-sky-700'}`}
          >
            {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className={`inline-flex h-10 items-center gap-2 rounded-sm border px-3 text-[11px] font-mono font-bold tracking-widest uppercase transition-all ${isDark ? 'border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10' : 'border-black/10 bg-white/20 text-slate-900 hover:border-black/20 hover:bg-white/35'}`}
          >
            {!isMobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      <div className="hidden md:block absolute left-0 right-0 top-full z-40 pointer-events-none">
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-150 ease-out ${
            isMobileMenuOpen ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
          }`}
        >
          <div className={`mt-2 grid grid-cols-[minmax(220px,300px)_minmax(0,1fr)] gap-4 overflow-hidden rounded-[28px] border p-5 shadow-[0_28px_100px_rgba(0,0,0,0.35)] ${isDark ? 'border-white/15 bg-black/95' : 'border-black/10 bg-white/98'}`}>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id as SectionId)}
                  onMouseEnter={() => setHoveredSection(link.id as SectionId)}
                  onFocus={() => setHoveredSection(link.id as SectionId)}
                  className={`group flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-mono tracking-widest uppercase transition-all duration-150 ${
                    activeSection === link.id
                      ? (isDark ? 'border-white/20 bg-white/12 text-sky-100' : 'border-black/10 bg-white text-slate-900')
                      : (isDark ? 'border-white/10 bg-white/6 text-slate-100 hover:border-white/20 hover:bg-white/12' : 'border-black/10 bg-slate-50 text-slate-700 hover:border-black/20 hover:bg-white')
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>0{index + 1}.</span>
                    <span>{link.name}</span>
                  </span>
                  <span className={`text-[10px] tracking-[0.3em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>image</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                onMouseEnter={() => setHoveredSection('contact')}
                onFocus={() => setHoveredSection('contact')}
                className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-sm font-mono tracking-widest uppercase transition-all duration-150 ${
                  activeSection === 'contact'
                    ? (isDark ? 'border-white/20 bg-white/12 text-sky-100' : 'border-black/10 bg-white text-slate-900')
                    : (isDark ? 'border-white/10 bg-white/6 text-slate-100 hover:border-white/20 hover:bg-white/12' : 'border-black/10 bg-slate-50 text-slate-700 hover:border-black/20 hover:bg-white')
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>04.</span>
                  <span>CONTACT</span>
                </span>
                <span className={`text-[10px] tracking-[0.3em] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>image</span>
              </a>
            </div>

            <div className={`relative overflow-hidden rounded-3xl border p-4 ${isDark ? 'border-white/10 bg-black/90' : 'border-black/10 bg-white/96'}`}>
              <div className={`absolute inset-0 ${isDark ? 'bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_42%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_48%)]' : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_46%),radial-gradient(circle_at_top_right,rgba(125,211,252,0.18),transparent_45%)]'}`} />
              <div className="relative z-10 flex h-full flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className={`text-[10px] font-mono tracking-[0.35em] uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Hover Preview</p>
                    <h3 className={`mt-2 text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{previewSection.title}</h3>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] ${isDark ? 'border-white/10 bg-white/5 text-slate-200' : 'border-black/10 bg-white/95 text-slate-700'}`}>
                    Image View
                  </span>
                </div>

                <div className={`flex-1 min-h-[200px] max-h-[280px] overflow-hidden rounded-2xl border shadow-[0_24px_60px_rgba(0,0,0,0.28)] ${isDark ? 'bg-slate-950 border-white/10' : 'bg-white border-black/10'}`}>
                  <img src={previewSection.image} alt={`${previewSection.title} preview`} className="h-full w-full object-cover" />
                  <div className={`absolute inset-0 ${isDark ? 'bg-linear-to-t from-black/72 via-black/20 to-transparent' : 'bg-linear-to-t from-white/20 via-transparent to-transparent'}`} />
                </div>

                <div className={`rounded-xl border px-3 py-2 text-sm font-medium ${isDark ? 'border-white/10 bg-black/70 text-slate-100' : 'border-black/10 bg-white/96 text-slate-800'}`}>
                  {previewSection.caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-150 ease-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${isDark ? 'border-t border-white/10 bg-black/90' : 'border-t border-black/10 bg-white/20'} backdrop-blur-2xl`}>
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 pt-3 sm:px-6 lg:px-8">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id as SectionId)}
                onMouseEnter={() => setHoveredSection(link.id as SectionId)}
                onFocus={() => setHoveredSection(link.id as SectionId)}
                className={`flex items-center gap-2 rounded-sm border px-3 py-3 text-xs font-mono tracking-widest uppercase transition-colors ${
                  activeSection === link.id
                    ? (isDark ? 'bg-white/10 text-sky-300 border-white/20' : 'bg-white/30 text-slate-900 border-black/10')
                    : (isDark ? 'border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20' : 'border-black/10 text-slate-700 hover:bg-white/25 hover:border-black/20')
                }`}
              >
                <span className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>0{index + 1}.</span>
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`mt-1 inline-flex items-center justify-center rounded-sm border px-4 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all ${isDark ? 'border-blue-400/30 bg-blue-500/10 text-blue-200 hover:border-blue-300 hover:bg-blue-500/15' : 'border-sky-400/30 bg-sky-500/10 text-sky-900 hover:border-sky-500 hover:bg-sky-500/15'}`}
            >
              [ CONTACT_ME ]
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}