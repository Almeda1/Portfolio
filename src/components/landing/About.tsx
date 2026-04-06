import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Clock, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

// ----------------------------------------------------------------------
// UPDATED DATA
// ----------------------------------------------------------------------
const stats = [
  { label: 'Completion Rate', value: '100%', icon: CheckCircle2 }, 
  { label: 'Projects Completed', value: '10+', icon: Award },       
  { label: 'Year Experience', value: '1', icon: Clock },          
  { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
];

const whyChooseMe = [
  'Dedicated expertise with a proven track record',
  'Custom solutions tailored to your needs',
  'Ongoing support and maintenance',
  'Competitive pricing and timely delivery',
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50 font-sans" 
      id="about"
    >
      {/* CSS for Orbs & Diagnostics Animation */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Clean isometric entry */
        @keyframes diag-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-diag-in {
          animation: diag-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Background Layers: Orbs and Data Grid */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Technical blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div 
            className={`opacity-0 ${isVisible ? 'animate-diag-in' : ''}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 text-[10px] font-mono tracking-widest text-slate-600 bg-slate-200/50 border border-slate-300/50 rounded-sm uppercase shadow-sm">
                <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                SYS.ABOUT
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Identity <span className="font-serif italic font-normal text-slate-500">Overview</span>
            </h2>
            
            <div className="relative p-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-10">
              <div className="absolute top-0 right-0 w-16 h-[2px] bg-blue-500/30"></div>
              <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-cyan-500/30"></div>
              
              <p className="text-base leading-relaxed text-slate-700 mb-4">
                I am dedicated to creating exceptional digital experiences. With a year of industry experience, I transform ideas into powerful websites that drive business growth.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                My approach combines cutting-edge technology, creative design, and strategic thinking to deliver solutions that not only look great but also perform exceptionally well.
              </p>
            </div>

            {/* Core Competencies List (Diagnostics Style) */}
            <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-slate-400">/</span> Active_Protocols
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {whyChooseMe.map((item, index) => (
                <li 
                  key={index} 
                  className="group flex items-center gap-4 p-3 rounded-xl bg-white/30 backdrop-blur-md border border-slate-200/50 hover:border-blue-300 hover:bg-white/60 transition-all duration-300 shadow-sm"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100/50 text-blue-600 border border-blue-200/50 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Diagnostic Stats Grid */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mr-0 z-10 w-full relative">
            
            {/* Center connection crosshair (decorative) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-300/50 z-0 pointer-events-none hidden sm:block">
              {/* Optional Background Element */}
            </div>

            {stats.map((stat, index) => (
              <div 
                key={index} 
                style={{ animationDelay: `${index * 150}ms` }}
                className={`relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 hover:border-blue-400/40 transition-all duration-500 group opacity-0 overflow-hidden ${isVisible ? 'animate-diag-in' : ''}`}
              >
                {/* Top LED Indicator */}
                <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-blue-400 transition-colors duration-500" />
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    METRIC_0{index + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-100/50 text-slate-500 group-hover:text-blue-500 group-hover:bg-blue-50 transition-colors">
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-4xl font-mono font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>

                {/* Ambient Background Icon */}
                <stat.icon className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-200/50 group-hover:text-blue-100/50 transition-colors -rotate-12 pointer-events-none z-0" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}