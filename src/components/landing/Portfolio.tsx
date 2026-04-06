import { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  X, 
  ExternalLink, 
  // Github, // 1. Un-comment to restore Github Icon import
} from 'lucide-react';

// ----------------------------------------------------------------------
// ASSETS
// ----------------------------------------------------------------------
// Existing Assets
import habitVaultImage from '../../assets/habitvault.png'; 
import habitVaultLogo from '../../assets/habitvault-logo.png'; 


// NEW ASSETS (Make sure these files exist in your assets folder)
import nairaTrackImage from '../../assets/nairatrack.png';
import nairaTrackLogo from '../../assets/nairatrack-logo.png';
import crownlithImage from '../../assets/crownlith.png';
import crownlithLogo from '../../assets/crownlith-logo.png';
import chopsImage from '../../assets/chops.png';
import chopsLogo from '../../assets/chops-logo.png';
import eclatImage from '../../assets/eclatImage.png';
import eclatLogo from '../../assets/eclatlogo.png';
// import hazalaImage from '../../assets/hazala.png'; // Commented out
// import hazalaLogo from '../../assets/hazala-logo.png'; // Commented out

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
  // repoLink: string; // 2. Un-comment to restore type definition
}

const projects: Project[] = [
  {
  title: "ÉCLAT",
  shortDescription: "A premium e-commerce platform for luxury timepieces, featuring a bespoke minimalist interface and real-time inventory management.",
  fullDescription: "ÉCLAT is a high-fidelity e-commerce experience designed to mirror the precision of the Swiss watches it curates. Built with a 'content-first' approach, it moves away from cluttered storefronts to offer a refined, distraction-free shopping journey. The platform powers real-time product data via Supabase, features a custom global state management system for the cart, and utilizes advanced filtering logic to deliver a seamless, performant user experience.",
  tags: ["React.js", "Tailwind CSS", "Supabase"],
  fullTags: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Context API", "UI/UX Design"],
  image: eclatImage, 
  logo: eclatLogo,  
  status: "Deployed",
  link: "https://eclat-swiss.vercel.app/",
},
   {
    title: "CROWNLITH LOGISTICS",
    shortDescription: "A logistics company website focused on service clarity, credibility, and lead generation for transport and delivery solutions.",
    fullDescription: "Crownlith Logistics is a professional corporate website designed to establish credibility and service clarity. It showcases global shipping solutions, transport services, and delivery logistics. The site is optimized for lead generation, helping customers easily understand service offerings and get in touch for their logistical needs.",
    tags: ["React.js", "Tailwind CSS", "Business"],
    fullTags: ["React.js", "Tailwind CSS", "Business Architecture"],
    image: crownlithImage, 
    logo: crownlithLogo,
    status: "Deployed",
    link: "https://crownlithlogistics.vercel.app/", 
    // repoLink: "https://github.com/yourusername/crownlith"
  },
  {
    title: "HABITVAULT",
    shortDescription: "A habit-tracking and productivity system focused on consistency, streaks, and long-term personal growth.",
    fullDescription: "HabitVault is a habit-tracking and productivity system built for users who want structure without friction. It allows users to build positive habits like reading, exercising, or studying by tracking daily progress. The application features data visualization for completion rates and streaks to keep users motivated on their journey to self-improvement.",
    tags: ["React.js", "Tailwind CSS", "Firebase"],
    fullTags: ["React.js", "Tailwind CSS", "Firebase", "NoSQL"],
    image: habitVaultImage, 
    logo: habitVaultLogo,
    status: "Deployed",
    link: "https://habitvault-self.vercel.app",
    // repoLink: "https://github.com/yourusername/habit-vault" 
  },
   {
    title: "NAIRATRACK",
    shortDescription: "A personal finance tracker tailored for Nigerian users to monitor expenses, manage income, and gain financial clarity in Naira.",
    fullDescription: "NairaTrack is a smart personal finance tracker tailored for Nigerian users. It helps individuals monitor their daily expenses, manage income sources, and gain financial clarity—all denominated in Naira. The dashboard provides intuitive insights to help users budget like a pro and achieve financial freedom.",
    tags: ["React.js", "Tailwind CSS", "Charting"],
    fullTags: ["React.js", "Tailwind CSS", "Charting Libraries", "State Management"],
    image: nairaTrackImage, 
    logo: nairaTrackLogo,
    status: "Deployed",
    link: "https://naira-track.vercel.app", 
    // repoLink: "https://github.com/yourusername/naira-track"
  },
  {
    title: "CHOPS & HAMPERS",
    shortDescription: "A food and hampers ordering website designed to highlight offerings, simplify orders, and boost customer engagement.",
    fullDescription: "Chops & Hampers is a specialized ordering platform for fresh food and gift hampers. Designed to boost customer engagement, the site highlights daily fresh stock and simplified ordering flows. It serves as a digital storefront that connects customers with farm-fresh produce and curated gift packages in Lagos.",
    tags: ["React.js", "Tailwind CSS", "Orders"],
    fullTags: ["React.js", "Tailwind CSS", "Order Flow Logic"],
    image: chopsImage, 
    logo: chopsLogo,
    status: "Deployed",
    link: "https://chopsandhampersbymimi.vercel.app", 
    // repoLink: "https://github.com/yourusername/chops-hampers"
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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
      className="relative py-24 sm:py-32 overflow-hidden bg-[#020617] font-sans" 
      id="work"
    >
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
      {/* Background Gradient & Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020617] to-[#020617] z-0"></div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' }}></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* HEADER ANIMATION */}
        <div 
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 text-[10px] font-mono tracking-widest text-blue-400 bg-blue-900/20 border border-blue-500/30 rounded-full uppercase shadow-[0_0_10px_rgba(56,189,248,0.2)]">
              <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              System.Deployments
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured <span className="font-serif italic font-normal text-slate-300">Projects</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Take a look at some of my recent work and successful deployments. Built for performance and scalability.
          </p>
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              // ANIMATION: Staggered delay based on index
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative flex flex-col bg-slate-900/30 backdrop-blur-sm border-t border-l border-slate-700/40 hover:border-blue-500/60 cursor-pointer transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.3)] overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              {/* Cyber Cut-out Corner Effect via styling */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#020617] transform translate-x-4 -translate-y-4 rotate-45 border-b border-slate-700/40 group-hover:border-blue-500/60 transition-colors z-20"></div>

              {/* Background Cyber Grid Accent */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 pointer-events-none transition-opacity duration-500" style={{ backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Decorative Project Number watermark */}
              <div className="absolute top-4 right-6 font-mono font-bold text-6xl text-slate-800/40 opacity-50 group-hover:text-blue-500/10 transition-colors z-10 pointer-events-none select-none">
                0{index + 1}
              </div>

              {/* CARD: INSET IMAGE */}
              <div className="relative h-48 w-full overflow-hidden bg-[#020617] mt-1 border-b border-slate-800/50 p-1 group-hover:border-blue-500/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent z-10" />
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale-[30%] group-hover:grayscale-0" 
                  />
                  {/* Cyber Scanline effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
                </div>
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  <span className="inline-flex items-center rounded-sm bg-slate-900/90 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-mono tracking-widest text-emerald-400 backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    <span className="w-1.5 h-1.5 bg-emerald-400 mr-1.5 animate-pulse rounded-none"></span>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* CARD: CONTENT */}
              <div className="p-5 flex flex-col flex-grow relative z-20">
                <div className="flex items-center gap-4 mb-5">
                  <div className="shrink-0 w-12 h-12 bg-slate-800/80 border border-slate-700/50 p-2 backdrop-blur-md group-hover:border-blue-500/40 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <img 
                      src={project.logo} 
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_5px_rgba(56,189,248,0.5)] transition-all"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors tracking-wide uppercase">
                      {project.title}
                    </h3>
                    <div className="h-[1px] w-8 bg-blue-500/50 mt-1 mb-1 group-hover:w-full transition-all duration-500 ease-out"></div>
                    <p className="text-[9px] text-blue-500/70 font-mono uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      SYS.ACCESS \ <span className="text-white">AUTHORIZED</span>
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* CARD FOOTER */}
                <div className="mt-auto border-t border-slate-800 relative pt-4 flex flex-col gap-4">
                  
                  {/* Tech Stack Row */}
                  <div className="flex flex-wrap gap-1.5 z-10">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[9px] font-mono text-slate-400 bg-slate-900/60 px-2 py-1 border border-slate-700/50 group-hover:border-blue-500/30 group-hover:text-blue-200 transition-colors rounded-sm">
                          {tag}
                        </span>
                      ))}
                  </div>
                  
                  {/* Details Button Row */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-blue-500/40"></div>
                      <div className="w-1 h-3 bg-blue-500/60"></div>
                      <div className="w-1 h-3 bg-blue-500/80"></div>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                      INITIATE_SEQUENCE <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Bottom decorative bar */}
              <div className="h-1 w-full bg-slate-800 mt-auto group-hover:bg-blue-500 transition-colors duration-500 relative overflow-hidden">
                 <div className="absolute top-0 left-0 h-full w-1/3 bg-white/20 transform -translate-x-full group-hover:animate-[slide_2s_infinite]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* MODAL SECTION */}
      {/* ---------------------------------------------------------------------- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl transition-opacity" 
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col transform overflow-hidden rounded-2xl bg-[#020617]/95 backdrop-blur-3xl border border-slate-700/60 shadow-[0_0_50px_rgba(56,189,248,0.15)] transition-all animate-in fade-in zoom-in-95 duration-200">
            
            <div className="overflow-y-auto custom-scrollbar">
              
              {/* MODAL: INSET HEADER IMAGE */}
              <div className="p-3 pb-0">
                <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-xl border border-slate-700/50 bg-[#020617]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10 opacity-80" />
                    
                    <img 
                     src={selectedProject.image} 
                     alt={selectedProject.title} 
                     className="w-full h-full object-cover"
                    />

                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-20 rounded-full bg-slate-900/50 border border-slate-700/50 p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors backdrop-blur-md hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                     >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Window Controls Overlay */}
                    <div className="absolute top-4 left-4 z-20 flex gap-1.5 backdrop-blur-md bg-slate-900/50 px-2 py-1.5 rounded-lg border border-slate-700/50">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 relative">
                {/* Cyber Grid Background for Modal */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div className="relative z-10">
                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 border-b border-slate-700/50 pb-8">
                    <div className="shrink-0 w-20 h-20 rounded-xl bg-slate-800/50 border border-slate-700/50 p-3 backdrop-blur-sm shadow-inner">
                      <img 
                        src={selectedProject.logo} 
                        alt="logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-3xl font-bold text-slate-100">{selectedProject.title}</h3>
                          <span className="inline-flex items-center rounded bg-slate-900/80 px-2 py-1 text-[10px] font-mono tracking-widest text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></span>
                          {selectedProject.status}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm font-mono flex items-center gap-2">
                          System.Overview <span className="text-blue-500">::</span> Frontend Development
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="text-slate-600">/</span> Description
                        </h4>
                        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="text-slate-600">/</span> Tech_Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.fullTags.map((tag, i) => (
                            <span 
                              key={i} 
                              className="inline-flex items-center rounded border border-slate-700/50 bg-slate-800/50 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-slate-300 hover:border-blue-500/30 hover:text-blue-400 transition-colors shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions Sidebar */}
                    <div className="lg:col-span-1">
                      <div className="rounded-xl bg-slate-800/30 backdrop-blur-md border border-slate-700/50 p-5 space-y-4">
                        <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">Execute_Links</h4>
                        
                        <a 
                          href={selectedProject.link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full rounded-lg bg-blue-600/10 border border-blue-500/30 px-4 py-3 text-sm font-mono font-semibold text-blue-400 hover:bg-blue-600 hover:text-white transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] shadow-[inset_0_0_10px_rgba(59,130,246,0.1)] group"
                        >
                          Launch App <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}