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
      className="py-24 sm:py-32 overflow-hidden" 
      id="contact"
    >
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
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }
        .opacity-0 { opacity: 0; }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header (Fades in normally) */}
        <div className={`mx-auto max-w-2xl text-center mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Ready to start your project? Reach out today and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* LEFT COLUMN: Slides in from LEFT */}
          <div className={`flex flex-col gap-6 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
            
            <div className="space-y-4">
              {/* Email Card */}
              <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 transition-all hover:border-blue-500/50 hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Email</p>
                    <a href="mailto:okomaduo@gmail.com" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                      okomaduo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 transition-all hover:border-blue-500/50 hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Phone</p>
                    <a href="tel:+2347015502629" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                      +234 701 550 2629
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="group rounded-3xl bg-white/5 border border-white/10 p-6 transition-all hover:border-blue-500/50 hover:bg-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-400">Average Response Time</p>
                    <p className="text-lg font-bold text-white">
                      Within 1 Hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Slides in from RIGHT */}
          <div className={`flex flex-col gap-6 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Website Development Inquiry"
                    required
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  // Removed redundant 'focus-visible:outline'
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send Message (WhatsApp) <Send className="h-4 w-4" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}