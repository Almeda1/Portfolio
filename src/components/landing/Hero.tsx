import React from 'react';

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


const HeroSection = () => {
  return (
    <div id="hero" className="relative h-screen w-full font-sans bg-[#020617] text-slate-100 overflow-hidden flex flex-col justify-center items-center p-4">
      
      {/* Background Gradient & Starry Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] z-0"></div>

      <div className="w-full max-w-300 h-full max-h-200 grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 relative">
        
        {/* LEFT SIDE: Text Column */}
        <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start gap-6 md:gap-4 p-4 sm:p-8 md:p-6 lg:pr-0 mt-8 md:mt-0">
          
          <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white animate-fade-up">
            Engineering the<br className="hidden md:block"/>
            <span className="font-serif italic font-normal text-white">
              {" "}future of the web.
            </span>
          </h1>

          {/* Role and Icon */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-2 md:mt-2 animate-fade-up delay-100">
            <span className="text-lg md:text-lg text-slate-300 tracking-wide font-light">
              Full-Stack Developer
            </span>
            <Icon name="terminal" />
          </div>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg md:text-base text-slate-400 max-w-2xl md:max-w-lg leading-relaxed mt-2 md:mt-1 animate-fade-up delay-200">
            Bridging the gap between exceptional design and robust engineering. I build scalable, interactive web applications that users love.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 mt-6 md:mt-5 animate-fade-up delay-300">
            <div className="relative group">
              <div className="absolute -inset-2 bg-linear-to-r from-blue-500/50 to-cyan-500/50 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 md:block"></div>
              <a href="#contact" className="relative flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-slate-900/80 border border-slate-600 rounded-xl text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/20 text-sm md:text-base">
                Get Started
                <Icon name="arrowRight" className="text-slate-300 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
            
            <a href="#work" className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-transparent border border-slate-700/80 rounded-xl text-slate-300 font-medium hover:bg-slate-800/50 hover:text-white transition-colors text-sm md:text-base">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Complex Glassmorphic Cluster */}
        <div className="relative h-120 lg:h-150 w-full hidden md:flex items-center justify-center scale-[0.65] lg:scale-[0.80] origin-center -ml-4">
          
          {/* Subtle dot grid background */}
          <div className="absolute -inset-25 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }}></div>

          {/* Connecting Lines SVG — hub to each card, z-index below cards */}
          {/* Coords adjusted for exact center of smaller cards to the Central Hub (Code Editor) at roughly (50, 50) */}
          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none animate-path delay-1000"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {/* Hub → Key Metrics (top-left card) */}
            <path d="M 50,50 Q 30,30 20,20" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke" />
            {/* Hub → Modern Stack (top-right card) */}
            <path d="M 50,50 Q 70,30 80,20" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke" />
            {/* Hub → Performance (middle-left card) */}
            <path d="M 50,50 Q 25,48 10,50" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke" />
            {/* Hub → Analytics (middle-right card) */}
            <path d="M 50,50 Q 75,48 90,50" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke" />
            {/* Hub → Network Nodes (bottom-left cluster) */}
            <path d="M 50,50 Q 35,65 20,80" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke" />
            {/* Hub → System.init (bottom-right console) */}
            <path d="M 50,50 Q 65,65 80,80" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.4" vectorEffect="non-scaling-stroke" />

            {/* Hub node pulse dot */}
            <circle cx="50" cy="50" r="1.5" fill="#38bdf8" opacity="0.9" className="animate-pulse" />

            {/* Endpoint dots at each card */}
            <circle cx="20" cy="20" r="1" fill="#38bdf8" opacity="0.6" />
            <circle cx="80" cy="20" r="1" fill="#38bdf8" opacity="0.6" />
            <circle cx="10" cy="50" r="1" fill="#38bdf8" opacity="0.6" />
            <circle cx="90" cy="50" r="1" fill="#38bdf8" opacity="0.6" />
            <circle cx="20" cy="80" r="1" fill="#38bdf8" opacity="0.6" />
            <circle cx="80" cy="80" r="1" fill="#38bdf8" opacity="0.6" />
          </svg>

          {/* Key metrics (Top Left) */}
          <div className="absolute top-[15%] left-[5%] p-2.5 glassmorphic rounded-2xl border border-yellow-700/30 shadow-2xl z-20 flex items-center gap-2.5 bg-yellow-950/10 backdrop-blur-md scale-90 animate-fade-scale delay-400">
            <div className="w-8 h-8 rounded-lg bg-yellow-600/20 border border-yellow-600/30 flex justify-center items-center text-yellow-500">
               <Icon name="barChart" className="scale-75" />
            </div>
            <div className="pr-3">
              <span className="block text-lg font-bold text-slate-100 leading-none mb-1">3,234</span>
              <span className="text-[10px] text-slate-400">Key metrics</span>
            </div>
          </div>

          {/* Modern Stack Cards (Top Right) */}
          <div className="absolute top-[0%] -right-[5%] w-46.25 glassmorphic p-4 rounded-xl border border-slate-700/50 shadow-2xl z-20 bg-slate-900/40 backdrop-blur-md scale-[0.85] animate-fade-scale delay-500">
            <h4 className="font-medium text-slate-200 text-sm">Modern Stack</h4>
            <p className="text-[10px] text-slate-500 mb-3.5">Layers</p>
            <div className="relative h-15 w-full perspective-[1000px]">
              <div className="absolute top-0 left-3 w-22 h-12.5 bg-slate-800 rounded-lg border border-blue-500/30 shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(18px)' }}></div>
              <div className="absolute top-0 left-3 w-22 h-12.5 bg-slate-800/80 rounded-lg border border-teal-500/30 shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(9px)' }}></div>
              <div className="absolute top-0 left-3 w-22 h-12.5 bg-slate-800/60 rounded-lg border border-indigo-500/30 shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(0px)' }}></div>
              <div className="absolute top-0 left-3 w-22 h-12.5 bg-slate-800/40 rounded-lg border border-purple-500/30 shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-2" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(-9px)' }}></div>
            </div>
          </div>

          {/* Performance Card (Middle Left) */}
          <div className="absolute top-[50%] -left-[5%] -translate-y-1/2 w-40 p-3 glassmorphic rounded-lg border border-slate-700/50 shadow-2xl z-30 bg-slate-900/60 backdrop-blur-md scale-90 animate-fade-scale delay-600">
            <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-slate-200 text-xs">Performance</h4>
                <div className="flex items-center text-slate-400 text-[10px]">
                    zap <Icon name="zap" className="ml-1 text-slate-500 scale-75" />
                </div>
            </div>
            <div className="w-full h-12 rounded-md bg-linear-to-br from-slate-800 via-slate-900 to-teal-900/40 border border-slate-700/50 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-teal-500/20 to-transparent blur-md"></div>
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 20 80, 50 100, 100 20 L 100 100 Z" fill="currentColor"/></svg>
                </div>
            </div>
          </div>

          {/* Code editor — THE HUB (Dead Center) */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-62.5 aspect-square flex flex-col glassmorphic rounded-lg border border-slate-700/60 shadow-[0_0_50px_rgba(56,189,248,0.15)] z-40 bg-slate-900/80 backdrop-blur-xl overflow-hidden scale-100 animate-fade-scale delay-300">
            <div className="bg-slate-800/60 px-3 py-2 flex items-center gap-1.5 border-b border-slate-700/50 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-[10px] text-slate-500 font-mono">Hero.tsx</span>
            </div>
            <div className="p-4 font-mono text-[10px] leading-relaxed text-slate-400 flex flex-col justify-center grow">
              <div className="flex"><span className="w-4 text-slate-600 text-right pr-2 select-none">1</span><p><span className="text-purple-400">class</span> <span className="text-yellow-200">Nodeers</span> {'{'}</p></div>
              <div className="flex"><span className="w-4 text-slate-600 text-right pr-2 select-none">2</span><p className="pl-3"><span className="text-purple-400">return</span> (</p></div>
              <div className="flex"><span className="w-4 text-slate-600 text-right pr-2 select-none">3</span><p className="pl-6"><span className="text-blue-400">const</span> ideter = <span className="text-green-300">"UI"</span>;</p></div>
              <div className="flex"><span className="w-4 text-slate-600 text-right pr-2 select-none">4</span><p className="pl-6">collection.clear();</p></div>
              <div className="flex"><span className="w-4 text-slate-600 text-right pr-2 select-none">5</span><p className="pl-3">);</p></div>
              <div className="flex"><span className="w-4 text-slate-600 text-right pr-2 select-none">6</span><p>{'}'}</p></div>
              <div className="flex mt-1"><span className="w-4 text-slate-600 text-right pr-2 select-none">7</span><p><span className="text-purple-400">export default</span> <span className="text-blue-200">leave()</span></p></div>
            </div>
          </div>

          {/* Analytics line graph (Middle Right) */}
          <div className="absolute top-[50%] -right-[5%] -translate-y-1/2 w-40 p-3 glassmorphic rounded-lg border border-slate-700/50 shadow-2xl z-30 bg-slate-900/60 backdrop-blur-md scale-90 animate-fade-scale delay-700">
            <h4 className="font-medium text-slate-200 text-xs mb-3 flex justify-between">Analytics <span className="text-slate-400 text-[10px]">● 100</span></h4>
            <div className="relative w-full h-12">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M 0,50 L 0,30 Q 15,10 30,25 T 60,20 T 80,10 T 100,25 L 100,50 Z" fill="url(#analyticsGradient)" opacity="0.4" />
                <path d="M 0,30 Q 15,10 30,25 T 60,20 T 80,10 T 100,25" stroke="#a855f7" strokeWidth="2" fill="none" />
                <circle cx="80" cy="10" r="2.5" fill="#fff" className="drop-shadow-[0_0_4px_#a855f7]" />
                <defs>
                  <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between mt-2 text-[8px] text-slate-500 uppercase tracking-widest">
              <span>Mon</span><span>Wed</span><span>Fri</span>
            </div>
          </div>

          {/* Infrastructure (Bottom Left Replacement) */}
          <div className="absolute bottom-[5%] left-[5%] w-45 p-4 glassmorphic rounded-xl border border-blue-500/30 shadow-2xl z-20 bg-slate-900/60 backdrop-blur-md scale-90 animate-fade-scale delay-800">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Icon name="terminal" className="scale-75" />
              </div>
              <h4 className="font-medium text-slate-200 text-xs">Infrastructure</h4>
            </div>
            <div className="space-y-2 mt-2">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[85%]"></div>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 w-[60%]"></div>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[45%]"></div>
              </div>
            </div>
          </div>

          {/* System.init() console (Bottom Right) */}
          <div className="absolute bottom-[10%] right-[5%] w-60 glassmorphic rounded-lg border border-slate-700/60 shadow-2xl z-40 bg-slate-900/80 backdrop-blur-xl scale-90 animate-fade-scale delay-900">
             <div className="bg-slate-800/80 px-3 py-2 flex items-center gap-1.5 border-b border-slate-700/50 rounded-t-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
            </div>
            <div className="p-4 font-mono">
              <p className="text-white font-semibold text-sm flex items-center gap-2">
                <span className="text-slate-400">{'>_'}</span> System.init()
              </p>
              <div className="w-2/3 h-2 mt-2 bg-slate-800 rounded animate-pulse"></div>
            </div>
          </div>

        </div>
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