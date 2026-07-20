import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { useThemeMode } from '@/hooks/useThemeMode';

const LiquidMetalBlobScene = lazy(() => import('@/components/landing/LiquidMetalBlobScene'));

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const icons: Record<string, React.ReactNode> = {
    arrowRight: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    ),
    terminal: (
      <div className="bg-slate-800/80 rounded block px-2 py-0.5 border border-slate-600/50 shadow-sm text-xs font-mono text-slate-300">
        &gt;_
      </div>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19H5V8h3v11zM6.5 6.7A1.7 1.7 0 1 1 6.5 3.3a1.7 1.7 0 0 1 0 3.4zM19 19h-3v-5.6c0-1.3-.3-2.2-1.5-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.7 1.2-1.7 3-1.7 2.2 0 3.9 1.5 3.9 4.7V19z"/></svg>
    ),
    dribbble: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm0-22c-5.514 0-10 4.486-10 10 0 2.222.723 4.27 1.936 5.91-.497-2.678.077-5.594 1.7-8.156-2.036-.595-3.666-.08-3.666-.08.411-1.789 1.344-3.375 2.656-4.576 1.636 1.488 4.276 2.083 6.703 1.83-1.603-2.903-3.605-5.312-3.605-5.312C9.171 2.264 10.551 2 12 2c5.514 0 10 4.486 10 10 0 .526-.046 1.042-.128 1.547-1.751-.762-3.951-1.127-6.204-.982-1.182 2.376-2.614 4.545-4.237 6.42a15.758 15.758 0 01-1.89-6.495c-1.748.406-3.235 1.378-4.212 2.766 1.54 3.018 3.999 5.253 6.885 6.402A9.957 9.957 0 0012 22c5.449 0 9.886-4.364 9.995-9.789a11.96 11.96 0 00-4.045 1.053c1.55 3.332 2.502 6.96 2.645 10.424A9.972 9.972 0 0022 12c0-5.514-4.486-10-10-10z"/></svg>
    ),
    barChart: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="14" width="4" height="6" rx="1" strokeWidth={2}/><rect x="10" y="8" width="4" height="12" rx="1" strokeWidth={2}/><rect x="16" y="4" width="4" height="16" rx="1" strokeWidth={2}/></svg>
    ),
    zap: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
  };
  return <span className={className}>{icons[name] || <span className="text-sm">?</span>}</span>;
};

const rotatingTitles = ['Full-Stack Developer', 'Frontend Engineer', 'Product Builder', 'Web Developer', 'Intelligent Systems Builder', 'UI Engineer'];


const HeroSection = () => {
  const { isDark } = useThemeMode();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState(rotatingTitles[0].slice(0, 1));
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSceneVisible, setIsSceneVisible] = useState(true);
  const [pointerTarget, setPointerTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentTitle = rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 55 : 95;
    const pauseDelay = !isDeleting && typedTitle === currentTitle ? 1200 : 0;
    const timer = window.setTimeout(() => {
      if (!isDeleting && typedTitle === currentTitle) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedTitle === '') {
        setIsDeleting(false);
        setTitleIndex((currentIndex) => (currentIndex + 1) % rotatingTitles.length);
        return;
      }

      setTypedTitle((currentText) => {
        if (isDeleting) {
          return currentText.slice(0, -1);
        }

        return currentTitle.slice(0, currentText.length + 1);
      });
    }, pauseDelay || typingSpeed);

    return () => window.clearTimeout(timer);
  }, [isDeleting, titleIndex, typedTitle]);

  useEffect(() => {
    const element = heroRef.current;

    if (!element || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSceneVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = heroRef.current;

    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    setPointerTarget({
      x: Math.max(-1, Math.min(1, normalizedX)),
      y: Math.max(-1, Math.min(1, normalizedY)),
    });
  };

  const handleMouseLeave = () => {
    setPointerTarget({ x: 0, y: 0 });
  };

  return (
    <div
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-screen w-full font-sans overflow-hidden flex flex-col justify-center items-center p-4 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex w-full translate-y-0 items-center justify-center opacity-45 lg:inset-auto lg:right-[7%] lg:top-[54%] lg:z-5 lg:w-[34%] lg:-translate-y-1/2 lg:opacity-100">
        <div className="h-[min(52vh,430px)] w-full translate-x-0 md:h-[min(70vh,680px)] lg:h-[min(62vh,620px)] lg:translate-x-[6%]">
          <Suspense fallback={null}>
            <LiquidMetalBlobScene
              active={isSceneVisible}
              pointerTarget={pointerTarget}
              isDark={isDark}
            />
          </Suspense>
        </div>
      </div>

      <div className="w-full max-w-300 h-full max-h-200 grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 relative">
        
        {/* LEFT SIDE: Text Column */}
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start gap-5 md:gap-6 p-4 sm:p-8 md:mx-auto md:max-w-2xl md:p-6 lg:mx-0 lg:max-w-none lg:pr-0 mt-8 md:mt-0">
          
         <h1 className={`text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-fade-up ${isDark ? 'text-white' : 'text-slate-900'}`}>
  Engineering impact<br className="hidden md:block" />
  <span className={`font-serif italic font-normal ${isDark ? 'text-white' : 'text-slate-700'}`}>
    {' '}through technology.
  </span>
</h1>

          {/* Role and Icon */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mt-1 md:mt-1 animate-fade-up delay-100">
            <span className={`min-h-6 text-base sm:text-lg tracking-wide font-light ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {typedTitle}
              <span className="ml-0.5 inline-block animate-cursor">|</span>
            </span>
            <Icon name="terminal" className="scale-90 origin-left" />
          </div>

          <p className={`hidden md:block max-w-xl text-sm lg:text-base leading-relaxed animate-fade-up delay-200 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            I design and develop web experiences that balance visual clarity, intuitive usability, and reliable engineering. Every build is tuned for speed, polish, and a consistent user experience across devices.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-stretch justify-center lg:items-start gap-3 mt-5 md:mt-4 w-full max-w-80">
            <a href="https://drive.google.com/file/d/1tk00XTLz2nBKSEo_D-sLLjsnWLvP8qkh/view?usp=drivesdk" target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center gap-2.5 h-12 px-4 rounded-lg font-semibold transition-colors shadow-lg text-sm w-full animate-rise-up ${isDark ? 'bg-slate-50 text-slate-900 hover:bg-white shadow-blue-900/20' : 'bg-slate-50 text-slate-900 hover:bg-white shadow-black/10'} border border-slate-200`}>
              <span className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white/80 p-1.5">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7V3a1 1 0 011-1h5.586a1 1 0 01.707.293l3.414 3.414A1 1 0 0118 6.414V21a1 1 0 01-1 1H8a1 1 0 01-1-1V7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 2v4a1 1 0 001 1h4" /></svg>
              </span>
              Resume
            </a>

            <div className="flex flex-row items-stretch justify-center lg:justify-start gap-3 w-full">
              <a href="#contact" className={`flex-[1.55] inline-flex items-center justify-center h-12 px-4 rounded-lg font-semibold transition-colors text-base ${isDark ? 'bg-slate-950 border border-slate-800 text-white hover:bg-slate-900' : 'bg-slate-950 border border-slate-800 text-white hover:bg-slate-800'}`}>
                Hire Me
              </a>

              <a href="https://github.com/Almeda1" target="_blank" rel="noreferrer" aria-label="GitHub" className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border transition-colors ${isDark ? 'border-slate-800 bg-slate-950 text-white hover:bg-slate-900' : 'border-slate-200 bg-slate-950 text-white hover:bg-slate-800'}`}>
                <Icon name="github" className="w-5 h-5" />
              </a>

              <a href="https://www.linkedin.com/in/oscar-okomadu-04154a41b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border transition-colors ${isDark ? 'border-slate-800 bg-slate-950 text-white hover:bg-slate-900' : 'border-slate-200 bg-slate-950 text-white hover:bg-slate-800'}`}>
                <Icon name="linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </div>
  );
};

// CSS (Global styles to include glassmorphism utility)
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const styleId = "hero-styles-custom";
  if (!document.getElementById(styleId)) {
    const styleTag = document.createElement("style");
    styleTag.id = styleId;
    styleTag.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      
      .font-sans {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .font-serif {
        font-family: 'Merriweather', serif;
      }
      .glassmorphic {
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }
      
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInScale {
        0% { opacity: 0; transform: scale(0.9) translateY(15px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes drawPath {
        0% { stroke-dashoffset: 100; opacity: 0; }
        100% { stroke-dashoffset: 0; opacity: 0.4; }
      }

      .animate-fade-up {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
      }
      .animate-fade-scale {
        animation: fadeInScale 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
      }
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
        opacity: 0;
      }
      @keyframes cursorBlink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
      .animate-cursor {
        animation: cursorBlink 1s steps(1, end) infinite;
      }
      @keyframes riseUp {
        0% { opacity: 0; transform: translateY(22px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-rise-up {
        animation: riseUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0;
      }
      .animate-path {
        stroke-dasharray: 100;
        animation: drawPath 1.5s ease-out forwards;
        opacity: 0;
      }

      .delay-100 { animation-delay: 100ms; }
      .delay-200 { animation-delay: 200ms; }
      .delay-300 { animation-delay: 300ms; }
      .delay-400 { animation-delay: 400ms; }
      .delay-500 { animation-delay: 500ms; }
      .delay-700 { animation-delay: 700ms; }
      .delay-800 { animation-delay: 800ms; }
      .delay-\[600ms\] { animation-delay: 600ms; }
      .delay-\[700ms\] { animation-delay: 700ms; }
      .delay-\[900ms\] { animation-delay: 900ms; }
      .delay-1000 { animation-delay: 1000ms; }
    `;
    document.head.appendChild(styleTag);
  }
}

export default HeroSection;