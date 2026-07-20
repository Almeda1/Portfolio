import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Clock, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import { useThemeMode } from '@/hooks/useThemeMode';

// ----------------------------------------------------------------------
// UPDATED DATA
// ----------------------------------------------------------------------
const stats = [
  { label: 'Completion Rate', value: '100%', icon: CheckCircle2 }, 
  { label: 'Projects Completed', value: '20+', icon: Award },       
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
  const { isDark } = useThemeMode();
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
      className="relative py-24 sm:py-32 overflow-hidden bg-transparent font-sans" 
      id="about"
    >
      {/* CSS for entry animation */}
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

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className={`opacity-0 ${isVisible ? 'animate-diag-in' : ''}`}>
            <div className="flex items-center gap-2 mb-6">
              <span className={`px-3 py-1 text-[10px] font-mono tracking-widest rounded-sm uppercase shadow-sm ${isDark ? 'text-slate-300 bg-slate-900/60 border border-slate-700/70' : 'text-slate-600 bg-slate-200/50 border border-slate-300/50'}`}>
                <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 animate-pulse ${isDark ? 'bg-cyan-400' : 'bg-blue-500'}`}></span>
                About
              </span>
            </div>
            
            <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Identity <span className={`font-serif italic font-normal ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>Overview</span>
            </h2>
            
            <div
              style={{
                borderColor: isDark ? 'rgba(255, 255, 255, 0.11)' : 'rgba(15, 23, 42, 0.12)',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
              }}
              className="group relative p-6 rounded-2xl border shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-10 transition-all duration-300 overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: isDark ? '#7dd3fc' : '#0369a1' }}
              />
              
              <p
                className="text-base leading-relaxed mb-4 relative z-10"
                style={{ color: isDark ? '#cbd5e1' : '#475569' }}
              >
                I am dedicated to creating exceptional digital experiences. With a year of industry experience, I transform ideas into powerful websites that drive business growth.
              </p>
              <p
                className="text-base leading-relaxed relative z-10"
                style={{ color: isDark ? '#cbd5e1' : '#475569' }}
              >
                My approach combines cutting-edge technology, creative design, and strategic thinking to deliver solutions that not only look great but also perform exceptionally well.
              </p>
            </div>

            {/* Core Competencies List - New Design Style */}
            <ul className="grid grid-cols-1 gap-3">
              {whyChooseMe.map((item, index) => (
                <li 
                  key={index}
                  style={{
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.11)' : 'rgba(15, 23, 42, 0.12)',
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.55)',
                  }}
                  className={`group relative flex items-center gap-4 p-3 rounded-xl border outline-none transition-all duration-300 overflow-hidden`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: isDark ? '#7dd3fc' : '#0369a1' }}
                  />
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${isDark ? 'text-cyan-300' : 'text-blue-600'}`} style={{
                    backgroundColor: isDark ? 'rgba(125, 211, 252, 0.1)' : 'rgba(14, 165, 233, 0.09)',
                  }}>
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-medium relative z-10 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Stats Cards - Grid Layout */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mr-0 z-10 w-full relative">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    borderColor: isDark ? 'rgba(255, 255, 255, 0.11)' : 'rgba(15, 23, 42, 0.12)',
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.55)',
                  }}
                  className={`group relative p-6 rounded-2xl border shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 overflow-hidden opacity-0 ${isVisible ? 'animate-diag-in' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: isDark ? '#7dd3fc' : '#0369a1' }}
                  />

                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div
                      className="p-2 rounded-lg transition-colors"
                      style={{
                        backgroundColor: isDark ? 'rgba(125, 211, 252, 0.1)' : 'rgba(14, 165, 233, 0.09)',
                        color: isDark ? '#7dd3fc' : '#0369a1'
                      }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div
                      className="text-4xl font-mono font-bold mb-1 transition-colors"
                      style={{ color: isDark ? '#f8fafc' : '#0f172a' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: isDark ? '#94a3b8' : '#475569' }}
                    >
                      {stat.label}
                    </div>
                  </div>

                  {/* Ambient Background Icon */}
                  <IconComponent
                    className="absolute -bottom-4 -right-4 w-24 h-24 transition-colors -rotate-12 pointer-events-none z-0"
                    style={{
                      color: isDark ? 'rgba(125, 211, 252, 0.15)' : 'rgba(15, 23, 42, 0.1)'
                    }}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}