import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send 
} from 'lucide-react';

export default function Contact() {
  // ----------------------------------------------------------------------
  // 1. ANIMATION & STATE LOGIC
  // ----------------------------------------------------------------------
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Intersection Observer for animation
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

  // ----------------------------------------------------------------------
  // 2. HANDLERS
  // ----------------------------------------------------------------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Project Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const phoneNumber = "2347015502629";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  // ----------------------------------------------------------------------
  // 3. RENDER
  // ----------------------------------------------------------------------
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#020617] font-sans" 
      id="contact"
    >
      {/* Background Cyber Gradient & Radar Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] z-0"></div>
      
      {/* Unique Radar Sweep Background Feature */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-200 h-200 rounded-full border border-blue-500/30 relative flex items-center justify-center">
          <div className="w-150 h-150 rounded-full border border-blue-500/20 flex items-center justify-center">
             <div className="w-100 h-100 rounded-full border border-blue-500/30"></div>
             <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-linear-to-r from-transparent to-blue-400 origin-left animate-[spin_4s_linear_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-right {
          animation: slide-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .opacity-0 { opacity: 0; }
        
        /* Terminal Input Glitch/Focus */
        .terminal-input:focus ~ .terminal-border {
          width: 100%;
          opacity: 1;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className={`mx-auto max-w-2xl text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="px-3 py-1 text-[10px] font-mono tracking-widest text-emerald-400 bg-emerald-900/10 border border-emerald-500/30 rounded-full uppercase shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              System.Uplink
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Secure <span className="font-serif italic font-normal text-slate-400">Transmission</span>
          </h2>
          <p className="mt-4 text-sm font-mono text-blue-400/80 max-w-xl mx-auto leading-relaxed uppercase tracking-wider">
            [ Establish a direct connection line ]
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* LEFT COLUMN: Slides in from LEFT */}
          <div className={`flex flex-col gap-6 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="flex items-center gap-3 border-b border-slate-800 pb-3 mb-2">
               <div className="w-2 h-2 bg-blue-500"></div>
               <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Active_Relays</h3>
            </div>
            
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group relative bg-slate-900/30 backdrop-blur-sm border-l-2 border-l-blue-500/30 border-t border-r border-b border-slate-800/80 p-5 hover:border-blue-500/60 transition-all duration-500 overflow-hidden cursor-pointer">
                {/* Tech Accent corner */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-slate-800/80 transform translate-x-2 -translate-y-2 rotate-45 group-hover:bg-blue-500/50 transition-colors"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-950 border border-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-colors shadow-inner">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">NODE_01 // EMAIL</span>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                    </div>
                    <a href="mailto:okomaduo@gmail.com" className="text-base font-mono text-slate-200 group-hover:text-blue-400 transition-colors">
                      okomaduo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-slate-900/30 backdrop-blur-sm border-l-2 border-l-blue-500/30 border-t border-r border-b border-slate-800/80 p-5 hover:border-blue-500/60 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-4 h-4 bg-slate-800/80 transform translate-x-2 -translate-y-2 rotate-45 group-hover:bg-blue-500/50 transition-colors"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-950 border border-slate-800 text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-colors shadow-inner">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">NODE_02 // PHONE_NET</span>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                    </div>
                    <a href="tel:+2347015502629" className="text-base font-mono text-slate-200 group-hover:text-blue-400 transition-colors">
                      +234 701 550 2629
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="group relative bg-slate-900/30 backdrop-blur-sm border-l-2 border-l-cyan-500/30 border-t border-r border-b border-slate-800/80 p-5 hover:border-cyan-500/60 transition-all duration-500 overflow-hidden cursor-pointer">
                <div className="absolute top-0 right-0 w-4 h-4 bg-slate-800/80 transform translate-x-2 -translate-y-2 rotate-45 group-hover:bg-cyan-500/50 transition-colors"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors shadow-inner">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                     <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">SYS_LATENCY // RESPONSE</span>
                    </div>
                    <p className="text-base font-mono text-slate-200 group-hover:text-cyan-400 transition-colors">
                      &lt; 1 HOUR
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scanline decoration under left side */}
            <div className="mt-8 flex gap-1 items-center opacity-30">
               <div className="h-1 w-24 bg-blue-500"></div>
               <div className="h-1 w-4 bg-slate-600"></div>
               <div className="h-1 w-1 bg-slate-600"></div>
               <div className="h-1 w-full grow border-b border-dashed border-slate-600"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Slides in from RIGHT */}
          <div className={`flex flex-col gap-6 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative bg-[#020617] border border-slate-800/80 p-8 lg:p-10 z-10 overflow-hidden">
              
              {/* Terminal Frame Decorations */}
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-blue-500"></div>
              <div className="absolute top-0 left-0 w-0.5 h-12 bg-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-blue-500"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-12 bg-blue-500"></div>
              <div className="absolute top-4 right-4 text-[10px] text-slate-600 font-mono">TERM_ID: XA-99</div>
              
              <div className="flex items-center gap-2 mb-8">
                <span className="text-blue-500 font-mono animate-pulse">&gt;</span>
                <h3 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-widest">Input_Parameters</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Custom Terminal-styled Inputs */}
                <div className="relative">
                  <label htmlFor="name" className="block text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider">VAR_01 // NAME</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ENTER_IDENTIFIER..."
                    required
                    className="terminal-input w-full bg-transparent border-b border-slate-700 py-2 text-sm font-mono text-slate-200 placeholder-slate-700 focus:outline-none transition-colors"
                  />
                  <div className="terminal-border absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-300 opacity-0"></div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider">VAR_02 // CONNECTION_ID (EMAIL)</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ENTER_EMAIL..."
                    required
                    className="terminal-input w-full bg-transparent border-b border-slate-700 py-2 text-sm font-mono text-slate-200 placeholder-slate-700 focus:outline-none transition-colors"
                  />
                  <div className="terminal-border absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-300 opacity-0"></div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider">VAR_03 // DIRECTIVE</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="ENTER_SUBJECT..."
                    required
                    className="terminal-input w-full bg-transparent border-b border-slate-700 py-2 text-sm font-mono text-slate-200 placeholder-slate-700 focus:outline-none transition-colors"
                  />
                  <div className="terminal-border absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-300 opacity-0"></div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider">VAR_04 // PAYLOAD</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="WRITE_MESSAGE_PAYLOAD..."
                    required
                    className="terminal-input w-full bg-transparent border border-slate-800 p-3 text-sm font-mono text-slate-200 placeholder-slate-700 focus:outline-none focus:border-transparent transition-colors resize-none mt-2 custom-scrollbar"
                  />
                  <div className="terminal-border absolute bottom-0 left-0 h-full w-0 border-l-2 border-blue-500 transition-all duration-300 opacity-0 pointer-events-none"></div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-2 bg-blue-900/20 border border-blue-500/50 px-8 py-4 text-xs font-mono font-bold text-blue-400 transition-all hover:bg-blue-600 hover:text-white shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full -translate-x-full bg-blue-500/30 group-hover:animate-[slide_1s] pointer-events-none"></span>
                  [ INITIATE_HANDSHAKE ] <Send className="h-4 w-4 relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}