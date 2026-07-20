import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { useThemeMode } from '@/hooks/useThemeMode';

export default function Footer() {
  const { isDark } = useThemeMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden border-t font-sans backdrop-blur-2xl ${isDark ? 'border-white/10 bg-black/12' : 'border-black/10 bg-white/20'}`}>
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_28%)]' : 'bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.55),transparent_30%)]'}`} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className={`rounded-[28px] border p-6 sm:p-8 lg:p-10 ${isDark ? 'border-white/10 bg-black/20 shadow-[0_24px_90px_rgba(0,0,0,0.25)]' : 'border-black/10 bg-white/30 shadow-[0_24px_90px_rgba(15,23,42,0.08)]'}`}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
            <div>
              <a href="#hero" className="inline-flex items-center gap-3 mb-5 transition hover:opacity-80 group">
                <img 
                  src="/logo.png" 
                  alt="Almeda Logo" 
                  className="h-10 w-auto object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.35)]" 
                />
                <span className={`text-[10px] font-mono uppercase tracking-[0.35em] flex items-center gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  <span className="w-1 h-3 bg-sky-500/60 block"></span> Oscar Okomadu
                </span>
              </a>
              <p className={`text-sm leading-relaxed max-w-md font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Crafting exceptional digital experiences with clean code and modern design. Let's build something amazing together.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-none"></div>
                <h3 className={`text-xs font-mono font-bold tracking-widest uppercase ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>SYS.LINKS</h3>
              </div>
              <ul role="list" className="space-y-3">
                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item === 'Projects' ? 'work' : item.toLowerCase()}`} className={`group flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-mono transition-colors ${isDark ? 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10 hover:text-white' : 'border-black/10 bg-white/40 text-slate-600 hover:border-black/20 hover:bg-white hover:text-slate-900'}`}>
                      <span className={`${isDark ? 'text-slate-500 group-hover:text-sky-300' : 'text-slate-400 group-hover:text-sky-600'}`}>/</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-none"></div>
                <h3 className={`text-xs font-mono font-bold tracking-widest uppercase ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>NET.CONNECT</h3>
              </div>
              <ul role="list" className="space-y-3">
                {[
                  { name: 'GitHub', icon: Github, href: 'https://github.com' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
                  { name: 'Email', icon: Mail, href: 'mailto:okomaduo@gmail.com' }
                ].map((social) => (
                  <li key={social.name}>
                    <a href={social.href} target="_blank" rel="noreferrer" className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-mono transition-colors ${isDark ? 'border-white/10 bg-white/5 text-slate-400 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-200' : 'border-black/10 bg-white/40 text-slate-600 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-slate-900'}`}>
                      <div className={`p-1.5 border transition-colors ${isDark ? 'border-slate-700 bg-slate-900/80 group-hover:border-cyan-400/40 group-hover:bg-cyan-900/20' : 'border-slate-200 bg-white group-hover:border-cyan-400/40 group-hover:bg-cyan-50'}`}>
                        <social.icon className="h-4 w-4" />
                      </div>
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`mt-10 border-t pt-6 flex flex-col items-center justify-between gap-3 md:flex-row ${isDark ? 'border-white/10' : 'border-black/10'}`}>
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-linear-to-r from-transparent ${isDark ? 'via-sky-400/40' : 'via-sky-500/40'} to-transparent`}></div>
            
            <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              COPYRIGHT &copy; {currentYear} ALMEDA. ALL_RIGHTS_RESERVED. <span className="animate-pulse font-bold text-sky-500">_</span>
            </p>
            <p className={`text-xs font-mono flex items-center gap-2 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              COMPILED WITH <Heart className="h-3 w-3 text-red-500/80 fill-red-500/50 animate-pulse" /> IN NIGERIA
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}