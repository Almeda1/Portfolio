import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Brand & Description */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4 transition hover:opacity-80">
              {/* UPDATED: Logo only, text removed */}
              <img 
                src="/logo.png" 
                alt="Almeda Logo" 
                className="h-10 w-auto object-contain" 
              />
            </a>
            <p className="text-sm leading-6 text-gray-400 max-w-sm">
              Crafting exceptional digital experiences with clean code and modern design. 
              Let's build something amazing together.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <a href="#hero" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#work" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          {/* 3. Connect / Socials */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <Github className="h-5 w-5 text-gray-400" />
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-5 w-5 text-gray-400" />
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Twitter className="h-5 w-5 text-gray-400" />
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:okomaduo@gmail.com" className="text-sm leading-6 text-gray-400 hover:text-blue-400 transition-colors">
                  okomaduo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Almeda. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> in Nigeria
          </p>
        </div>

      </div>
    </footer>
  );
}