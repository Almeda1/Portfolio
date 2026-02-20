import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Custom Animation Styles */}
      <style>{`
        /* Left Side: Slide in from left */
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        /* Right Side: Pop up (Scale + Fade) */
        @keyframes pop-up {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-slide-left {
          opacity: 0;
          animation: slide-in-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-pop-up {
          opacity: 0;
          animation: pop-up 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          animation-delay: 0.2s;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <div className="text-left animate-slide-left">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 leading-tight">
              Crafting <br />
              <span className="text-blue-500">Exceptional</span> <br />
              Digital Experiences
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              I turn ambitious ideas into powerful, high-performance web solutions. 
              From seamless design to robust code, I build the technology that drives your business forward.
            </p>
            
            {/* BUTTONS CONTAINER */}
            <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
              {/* I also left the buttons swapped here from our previous chat, let me know if you want them reverted! */}
              <a 
                href="#contact" 
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
               <a 
                href="#work" 
                className="flex-1 sm:flex-none flex items-center justify-center rounded-lg border border-gray-700 bg-transparent px-3 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-gray-800 transition-colors whitespace-nowrap"
              >
                View Projects
              </a>

            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative mt-10 lg:mt-0 animate-pop-up">
            <img 
              src="https://images.unsplash.com/photo-1760435992373-b3e20f308bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHR5cGluZyUyMGxhcHRvcCUyMHdlYiUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2OTc1ODEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern web development workspace" 
              className="w-full h-auto rounded-3xl shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}