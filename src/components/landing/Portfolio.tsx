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
import drivepointImage from '../../assets/drivepoint.png'; 
import drivepointLogo from '../../assets/wheel-logo.png'; 
import habitVaultImage from '../../assets/habitvault.png'; 
import habitVaultLogo from '../../assets/habitvault-logo.png'; 

// NEW ASSETS (Make sure these files exist in your assets folder)
import nairaTrackImage from '../../assets/nairatrack.png';
import nairaTrackLogo from '../../assets/nairatrack-logo.png';
import crownlithImage from '../../assets/crownlith.png';
import crownlithLogo from '../../assets/crownlith-logo.png';
import chopsImage from '../../assets/chops.png';
import chopsLogo from '../../assets/chops-logo.png';
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
    title: "DRIVEPOINT LOGISTICS",
    shortDescription: "A premium luxury car rental platform offering an extensive fleet of high-end vehicles.",
    fullDescription: "DRIVEPOINT is a premium car rental platform designed for a seamless user experience. It allows customers to browse, book, and manage a curated fleet of high-end vehicles—from sports cars to luxury SUVs. Built with a focus on performance and ease of use, the application handles complex scheduling and inventory management to ensure a sophisticated travel experience.",
    tags: ["React.js", "Tailwind CSS", "Typescript"],
    fullTags: ["React.js", "Tailwind CSS", "Typescript"],
    image: drivepointImage, 
    logo: drivepointLogo,
    status: "Deployed",
    link: "https://drive-point.vercel.app",
    // repoLink: "https://github.com/Almeda1/drive-point" 
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
      className="py-24 sm:py-32 overflow-hidden" 
      id="work"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER ANIMATION: Simple Fade In */}
        <div 
          className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-slate-400">Take a look at some of our recent work and successful deployments.</p>
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              // ANIMATION: Staggered delay based on index
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`group relative rounded-3xl bg-white/5 border border-white/10 p-3 hover:border-blue-500/50 cursor-pointer transition-all duration-700 ease-out transform hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              
              {/* CARD: INSET IMAGE */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-black border border-white/5">
                <div className="absolute inset-0 bg-linear-to-t from-[#020617]/50 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="inline-flex items-center rounded-full bg-black/60 border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-green-400 backdrop-blur-md shadow-lg">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* CARD: CONTENT */}
              <div className="p-4 pt-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white/10 border border-white/10 p-2 backdrop-blur-sm shadow-inner">
                    <img 
                      src={project.logo} 
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-wider">
                      View Case Study
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 pl-1">
                  {project.shortDescription}
                </p>

                {/* CARD FOOTER */}
                <div className="pt-4 border-t border-white/5">
                  {/* Tech Stack Row */}
                  <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-medium text-slate-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-200 transition-colors">
                          {tag}
                        </span>
                      ))}
                  </div>
                  
                  {/* Details Button Row */}
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 border border-white/5 group-hover:border-blue-500/50">
                    Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
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
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity" 
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col transform overflow-hidden rounded-3xl bg-black border border-white/10 shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200">
            
            <div className="overflow-y-auto custom-scrollbar">
              
              {/* MODAL: INSET HEADER IMAGE */}
              <div className="p-3 pb-0">
                <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl border border-white/5 bg-black">
                    <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10 opacity-60" />
                    
                    <img 
                     src={selectedProject.image} 
                     alt={selectedProject.title} 
                     className="w-full h-full object-cover"
                    />

                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-20 rounded-full bg-black/50 border border-white/10 p-2 text-white/70 hover:bg-black/80 hover:text-white transition-colors backdrop-blur-md"
                     >
                      <X className="h-5 w-5" />
                    </button>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 border-b border-white/5 pb-8">
                  <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
                    <img 
                      src={selectedProject.logo} 
                      alt="logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400 border border-green-500/20">
                         {selectedProject.status}
                       </span>
                    </div>
                    <p className="text-slate-400 text-sm">
                        Premium Case Study • <span className="text-blue-400">Frontend Development</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">About</h4>
                      <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.fullTags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center rounded-lg bg-white/5 border border-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="rounded-2xl bg-white/5 border border-white/5 p-4 space-y-3">
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Project Links</h4>
                      
                      <a 
                        href={selectedProject.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]"
                      >
                        Visit Website <ExternalLink className="h-4 w-4" />
                      </a>
                      
                      {/* 4. Un-comment to restore Repo Link Button */}
                      {/* <a 
                        href={selectedProject.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                      >
                        <Github className="h-4 w-4" /> View Code
                      </a> 
                      */}
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