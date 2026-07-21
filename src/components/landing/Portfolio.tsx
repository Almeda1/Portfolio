import { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  X, 
} from 'lucide-react';
import { useThemeMode } from '@/hooks/useThemeMode';

// ----------------------------------------------------------------------
// ASSETS
// ----------------------------------------------------------------------
// Existing Assets
import easyPropertyImage from '../../assets/easyproperty.png'; 
import easyPropertyLogo from '../../assets/easyproperty-logo2.png'; 
import hazalaImage from '../../assets/hazala.png';
import hazalaLogo from '../../assets/hazala-logo2.png';


import nairaTrackImage from '../../assets/nairatrack.png';
import nairaTrackLogo from '../../assets/nairatrack-logo.png';
import crownlithImage from '../../assets/crownlith.png';
import crownlithLogo from '../../assets/crownlith-logo.png';
import chopsImage from '../../assets/chops.png';
import chopsLogo from '../../assets/chops-logo.png';
import eclatImage from '../../assets/eclatImage.png';
import eclatLogo from '../../assets/eclatlogo.png';

// ----------------------------------------------------------------------
// TYPES & DATA
// ----------------------------------------------------------------------
interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  fullTags: string[];
  image: string; 
  status: string;
  logo: string; 
  link: string;
  category?: string;
}

const projects: Project[] = [
{
  title: "ÉCLAT",
  shortDescription: "A premium e-commerce platform for luxury timepieces, featuring a bespoke minimalist interface and real-time inventory management.",
  fullDescription: "Premium e-commerce experience for Swiss watches built with a content-first approach. Features real-time product data via Supabase, custom state management, and advanced filtering for seamless shopping.",
  tags: ["React.js", "Tailwind CSS", "Supabase"],
  fullTags: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Context API", "UI/UX Design"],
  image: eclatImage, 
  logo: eclatLogo,  
  status: "Deployed",
  link: "https://eclat-swiss.vercel.app/",
  category: "Full Stack Development",
},
  {
    title: "CROWNLITH LOGISTICS",
    shortDescription: "A logistics company website focused on service clarity, credibility, and lead generation for transport and delivery solutions.",
    fullDescription: "Professional corporate website for global shipping and transport services. Optimized for lead generation with clear service showcases and customer engagement tools.",
    tags: ["React.js", "Tailwind CSS", "Business"],
    fullTags: ["React.js", "Tailwind CSS", "Business Architecture"],
    image: crownlithImage, 
    logo: crownlithLogo,
    status: "Deployed",
    link: "https://crownlithlogistics.vercel.app/", 
  },
  {
    title: "EASYPROPERTY",
    shortDescription: "A real estate property listing and management platform designed for efficiency and user experience.",
    fullDescription: "Comprehensive real estate platform with streamlined listings, advanced search, virtual tours, and integrated communication tools for agents and clients.",
    tags: ["React.js", "Tailwind CSS", "Flutterwave API"],
    fullTags: ["React.js", "Tailwind CSS", "Flutterwave API", "State Management", "UI/UX Design"],
    image: easyPropertyImage, 
    logo: easyPropertyLogo,
    status: "Deployed",
    link: "https://easyproperty.vercel.app",
    category: "Full Stack Development",
  },
  {
    title: "HAZALA COSMETICS",
    shortDescription: "Cosmetics and beauty product platform with product catalogue, brand storytelling, and purchase workflows.",
    fullDescription: "Specialized e-commerce platform for beauty products with comprehensive catalogue, brand storytelling, and streamlined purchase workflow.",
    tags: ["React.js", "Tailwind CSS", "E-commerce"],
    fullTags: ["React.js", "Tailwind CSS", "E-commerce", "Product Catalogue"],
    image: hazalaImage, 
    logo: hazalaLogo,
    status: "Deployed",
    link: "https://hazalacosmetics.vercel.app", 
     category: "Full Stack Development",
  },
  {
    title: "CHOPS & HAMPERS",
    shortDescription: "A food and hampers ordering website designed to highlight offerings, simplify orders, and boost customer engagement.",
    fullDescription: "Specialized ordering platform for fresh food and gift hampers. Features daily fresh stock highlights and simplified ordering to connect customers with farm-fresh produce in Lagos.",
    tags: ["React.js", "Tailwind CSS", "Orders"],
    fullTags: ["React.js", "Tailwind CSS", "Order Flow Logic"],
    image: chopsImage, 
    logo: chopsLogo,
    status: "Deployed",
    link: "https://chopsandhampersbymimi.vercel.app", 
  },
 {
    title: "NAIRATRACK",
    shortDescription: "A personal finance tracker tailored for Nigerian users to monitor expenses, manage income, and gain financial clarity in Naira.",
    fullDescription: "Smart personal finance tracker for Nigerian users. Monitor expenses, manage income, and gain financial clarity with intuitive dashboard insights denominated in Naira.",
    tags: ["React.js", "Tailwind CSS", "Charting"],
    fullTags: ["React.js", "Tailwind CSS", "Charting Libraries", "State Management"],
    image: nairaTrackImage, 
    logo: nairaTrackLogo,
    status: "Deployed",
    link: "https://naira-track.vercel.app", 
  },
  
];

export default function Portfolio() {
  const { isDark } = useThemeMode();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // ----------------------------------------------------------------------
  // STAGGERED ANIMATION LOGIC
  // ----------------------------------------------------------------------
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

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-transparent font-sans" 
      id="work"
    >
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes modal-slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes backdrop-fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .modal-enter {
          animation: modal-slide-up 0.3s ease-out;
        }
        .backdrop-enter {
          animation: backdrop-fade 0.3s ease-out;
        }
      `}</style>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* HEADER ANIMATION */}
        <div 
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className={`text-4xl md:text-5xl font-serif font-semibold tracking-wide mb-4 uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {projects.map((project, index) => (
            <button 
              key={index} 
              type="button"
              onClick={() => setSelectedProject(project)}
              // ANIMATION: Staggered delay based on index
              style={{ transitionDelay: `${index * 150}ms`, aspectRatio: '16 / 10' }}
              className="group relative overflow-hidden rounded-lg border border-transparent text-left shadow-[0_24px_80px_-40px_rgba(2,6,23,0.9)] transition-all duration-300 ease-out transform hover:scale-[1.01] hover:shadow-[0_28px_90px_-35px_rgba(15,23,42,0.9)] cursor-pointer opacity-100 translate-y-0 scale-100"
            >
              <div className="absolute inset-0 pointer-events-none bg-slate-950" />
              <div className="absolute inset-0 pointer-events-none">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/88 via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 lg:p-5 pointer-events-none">
                <h3 className="max-w-[14ch] text-[1.2rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-[1.35rem] lg:text-[1.55rem]">
                  {project.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL SECTION */}
      {/* ---------------------------------------------------------------------- */}
      {selectedProject && (
        <>
          {/* Mobile Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden p-4">
            <div
              className={`absolute inset-0 backdrop-blur-xl transition-opacity ${isDark ? 'bg-black/90' : 'bg-white/40'} backdrop-enter`}
              onClick={() => setSelectedProject(null)}
            />

            <div className={`relative w-full max-w-sm max-h-[90vh] overflow-hidden rounded-2xl border shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${isDark ? 'bg-black border-slate-700/60' : 'bg-white border-slate-200/60'} modal-enter`}>
              <div className="overflow-y-auto custom-scrollbar">
                <div 
                  className="relative h-40 overflow-hidden rounded-t-2xl border-b bg-black cursor-pointer group" 
                  style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
                  onClick={() => setSelectedImage(selectedProject.image)}
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="h-full w-full object-cover transition-transform group-hover:scale-105" 
                  />
                  <div className={`absolute inset-0 bg-linear-to-t ${isDark ? 'from-black/85 via-black/20' : 'from-white/70 via-white/10'} to-transparent`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 z-20">
                    <span className="text-white text-xs font-semibold pointer-events-none">Click to view</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className={`absolute right-3 top-3 z-20 rounded-full border p-1.5 backdrop-blur-md transition-colors ${isDark ? 'border-slate-700/60 bg-black/70 text-slate-200 hover:bg-slate-900 hover:text-white' : 'border-slate-300/60 bg-white/70 text-slate-600 hover:bg-white hover:text-slate-900'}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className={`absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[8px] font-mono tracking-widest backdrop-blur-md ${isDark ? 'border-slate-600/30 bg-black/85 text-slate-300' : 'border-slate-400/30 bg-white/80 text-slate-700'}`}>
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    {selectedProject.status}
                  </div>
                </div>

                <div className="px-4 py-4 space-y-3">
                  <div className="pb-2 border-b" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold uppercase tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                          {selectedProject.title}
                        </h3>
                      </div>
                      <a 
                        href={selectedProject.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`shrink-0 inline-flex items-center justify-center gap-1 rounded-lg px-2.5 py-1.5 text-[8px] font-semibold transition-all ${isDark ? 'bg-black text-white hover:bg-slate-900' : 'bg-black text-white hover:bg-slate-950'} border ${isDark ? 'border-slate-700/60' : 'border-slate-300/60'}`}
                      >
                        Visit
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                    <p className={`text-[8px] font-mono uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                      {selectedProject.category || 'Frontend Development'}
                    </p>
                  </div>

                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedProject.fullDescription}
                  </p>

                  <div>
                    <h4 className={`mb-2 text-[8px] font-mono uppercase tracking-[0.15em] flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <span className={`text-[6px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>●</span>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.fullTags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[8px] font-mono transition-colors ${isDark ? 'border-slate-700/70 bg-slate-900/80 text-slate-300 hover:border-slate-600/50 hover:text-slate-100' : 'border-slate-300/70 bg-slate-100 text-slate-700 hover:border-slate-500/50 hover:text-slate-900'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Modal */}
          <div className="fixed inset-0 z-50 hidden md:flex items-center justify-center p-6 py-16">
            <div 
              className={`absolute inset-0 transition-opacity ${isDark ? 'bg-black/90' : 'bg-white/40'} backdrop-blur-xl backdrop-enter`}
              onClick={() => setSelectedProject(null)}
            />

            <div className={`relative w-full max-w-lg flex flex-col transform overflow-hidden rounded-2xl backdrop-blur-3xl transition-all border shadow-[0_20px_60px_rgba(0,0,0,0.3)] ${isDark ? 'bg-black border-slate-700/60' : 'bg-white border-slate-200/60'} modal-enter`}>
              <div className="overflow-hidden">
                {/* Header Image */}
                <div 
                  className="relative w-full h-40 overflow-hidden border-b cursor-pointer group" 
                  style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)', backgroundColor: isDark ? '#000000' : '#f1f5f9' }}
                  onClick={() => setSelectedImage(selectedProject.image)}
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 z-10 ${isDark ? 'bg-linear-to-t from-black to-transparent opacity-80' : 'bg-linear-to-t from-white/60 to-transparent opacity-60'}`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 z-20">
                    <span className="text-white text-xs font-semibold pointer-events-none">Click to view</span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(null);
                    }}
                    className={`absolute top-3 right-3 z-20 rounded-full p-1.5 border transition-all ${isDark ? 'border-slate-700/50 bg-black/70 text-slate-300 hover:bg-slate-900 hover:text-white' : 'border-slate-300/50 bg-white/70 text-slate-600 hover:bg-white hover:text-slate-900'}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-5 space-y-3 flex flex-col h-full">
                  {/* Title Section */}
                  <div className="pb-2 border-b" style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                    <div className={`inline-flex items-center gap-1.5 mb-1.5 px-2 py-0.5 rounded-full border text-[8px] font-mono tracking-widest ${isDark ? 'border-slate-600/30 bg-slate-700/10 text-slate-300' : 'border-slate-400/30 bg-slate-100 text-slate-700'}`}>
                      <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                      {selectedProject.status}
                    </div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className={`text-lg font-bold uppercase tracking-tight leading-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                        {selectedProject.title}
                      </h3>
                      <a 
                        href={selectedProject.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`shrink-0 inline-flex items-center justify-center gap-1 rounded-lg px-2.5 py-1.5 text-[10px] font-semibold transition-all ${isDark ? 'bg-black text-white hover:bg-slate-900' : 'bg-black text-white hover:bg-slate-950'} border ${isDark ? 'border-slate-700/60' : 'border-slate-300/60'}`}
                      >
                        Visit
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                    <p className={`text-[7px] font-mono uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                      {selectedProject.category || 'Frontend Development'}
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {selectedProject.fullDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex-1">
                    <h4 className={`mb-1.5 text-[7px] font-mono uppercase tracking-[0.15em] flex items-center gap-1.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <span className={`text-[6px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>●</span>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.fullTags.map((tag, i) => (
                        <span 
                          key={i} 
                          className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[7px] font-mono transition-colors ${isDark ? 'border-slate-700/70 bg-slate-900/80 text-slate-300 hover:border-slate-600/50 hover:text-slate-100' : 'border-slate-300/70 bg-slate-100 text-slate-700 hover:border-slate-500/50 hover:text-slate-900'}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="absolute inset-0 backdrop-blur-xl bg-black/90 backdrop-enter" />
          <div className="relative max-w-4xl w-full max-h-[90vh] modal-enter">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 z-20 rounded-full p-2 bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}