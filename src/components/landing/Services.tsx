import { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Zap, 
  Globe, 
  Smartphone, 
  LineChart 
} from 'lucide-react';

const services = [
  {
    name: 'Custom Web Development',
    description: 'Tailored websites built with modern technologies to meet your unique business needs.',
    icon: Code2,
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that engage users and enhance brand identity.',
    icon: Palette,
  },
  {
    name: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed, SEO, and conversion rates.',
    icon: Zap,
  },
  {
    name: 'E-Commerce Solutions',
    description: 'Full-featured online stores that drive sales and grow your business.',
    icon: Globe,
  },
  {
    name: 'Responsive Design',
    description: 'Websites that look perfect on any device, from desktop to mobile.',
    icon: Smartphone,
  },
  {
    name: 'Analytics & Insights',
    description: 'Data-driven solutions to track performance and make informed decisions.',
    icon: LineChart,
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1, 
      }
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
      id="services"
    >
      <style>{`
        @keyframes move-grid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }

        .moving-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px);
          animation: move-grid 3s linear infinite;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-in {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .opacity-0 { opacity: 0; }
      `}</style>

      {/* Ambient Color Blobs for Light Mode Depth (Matching Hero Palette) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Moving Grid Background Layer */}
      <div className="absolute inset-0 moving-grid opacity-40 pointer-events-none" />
      
      {/* Radial mask to fade grid out at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f8fafc_85%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div 
          className={`mx-auto max-w-3xl text-center mb-24 ${
            isVisible ? 'animate-in' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 text-[10px] font-mono tracking-widest text-blue-600 bg-blue-50 border border-blue-200/60 rounded-full uppercase shadow-sm">
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              System.Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Guaranteed <span className="font-serif italic font-normal text-slate-900 line-through decoration-blue-200 decoration-4">Services</span> <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
            Comprehensive engineering protocols to scale your infrastructure smoothly within the modern web ecosystem.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={service.name} 
              style={{ animationDelay: `${index * 120 + 100}ms` }}
              className={`group relative flex flex-col bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgb(56,189,248,0.1)] hover:border-blue-300/50 hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden ${
                isVisible ? 'animate-in' : 'opacity-0'
              }`}
            >
              {/* Tech Header / Status Bar */}
              <div className="bg-slate-50/80 px-4 py-2.5 flex items-center justify-between border-b border-slate-200/50 shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                  <span className="font-mono text-[9px] text-slate-400 tracking-widest uppercase">
                    Module_0{index + 1}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                  {service.name.substring(0, 3).toUpperCase()}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                
                {/* Decorative Data Graph SVG (Hidden subtly in corner) */}
                <svg className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 text-blue-600 pointer-events-none" viewBox="0 0 100 100">
                  <path d="M0 100 L20 80 L40 90 L60 40 L80 60 L100 20 L100 100 Z" fill="currentColor" />
                  <path d="M0 80 L20 60 L40 70 L60 20 L80 40 L100 0" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="group-hover:animate-path" />
                </svg>

                <div className="relative z-20">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/50 border border-blue-100 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <service.icon 
                      className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-500 relative z-10" 
                      aria-hidden="true" 
                    />
                  </div>

                  <h3 className="text-lg font-bold leading-7 text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-slate-500 mb-8">
                    {service.description}
                  </p>
                </div>
                
                {/* Tech Terminal Footer */}
                <div className="mt-auto relative z-20">
                  <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent mb-4"></div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center">
                      <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform duration-300">{'>'}</span> 
                      <span className="group-hover:text-slate-700 transition-colors">execute_protocol</span>
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-600">
                      [OK]
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}