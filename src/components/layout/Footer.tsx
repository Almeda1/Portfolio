import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-slate-800/80 relative overflow-hidden font-sans">
      {/* Cyber Background Details */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Brand & Description */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3 mb-6 transition hover:opacity-80 group">
              <img 
                src="/logo.png" 
                alt="Almeda Logo" 
                className="h-10 w-auto object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all" 
              />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1 h-3 bg-blue-500/50 block"></span> SYS.ONLINE
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-mono">
              &gt; Crafting exceptional digital experiences with clean code and modern design. 
              Let's build something amazing together.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-none"></div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">SYS.LINKS</h3>
            </div>
            <ul role="list" className="space-y-4">
              {['Home', 'Services', 'About', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item === 'Projects' ? 'work' : item.toLowerCase()}`} className="group flex items-center gap-2 text-sm font-mono text-slate-500 hover:text-blue-400 transition-colors">
                    <span className="text-slate-700 group-hover:text-blue-500 transition-colors">/</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect / Socials */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-none"></div>
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">NET.CONNECT</h3>
            </div>
            <ul role="list" className="space-y-4">
              {[
                { name: 'GitHub', icon: Github, href: 'https://github.com' },
                { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
                { name: 'Email', icon: Mail, href: 'mailto:okomaduo@gmail.com' }
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-sm font-mono text-slate-500 hover:text-cyan-400 transition-colors">
                    <div className="p-1.5 border border-slate-800 bg-slate-900/50 group-hover:border-cyan-500/40 group-hover:bg-cyan-900/20 transition-colors">
                      <social.icon className="h-4 w-4" />
                    </div>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <p className="text-xs font-mono text-slate-500">
            COPYRIGHT &copy; {currentYear} ALMEDA. ALL_RIGHTS_RESERVED. <span className="animate-pulse font-bold text-blue-500">_</span>
          </p>
          <p className="text-xs font-mono text-slate-500 flex items-center gap-2">
            COMPILED WITH <Heart className="h-3 w-3 text-red-500/80 fill-red-500/50 animate-pulse" /> IN NIGERIA
          </p>
        </div>

      </div>
    </footer>
  );
}