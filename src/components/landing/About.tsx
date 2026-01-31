import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Clock, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

// ----------------------------------------------------------------------
// UPDATED DATA
// ----------------------------------------------------------------------
const stats = [
  { label: 'Completion Rate', value: '100%', icon: CheckCircle2 }, 
  { label: 'Projects Completed', value: '5+', icon: Award },       
  { label: 'Year Experience', value: '1', icon: Clock },          
  { label: 'Client Satisfaction', value: '98%', icon: TrendingUp },
];

const whyChooseUs = [
  'Expert team with proven track record',
  'Custom solutions tailored to your needs',
  'Ongoing support and maintenance',
  'Competitive pricing and timely delivery',
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger the animation
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50" 
      id="about"
    >
      {/* CSS for Background Grid and Animations */}
      <style>{`
        /* Moving Grid Animation */
        @keyframes move-grid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .moving-grid {
          background-size: 40px 40px;
          background-image:
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px);
          animation: move-grid 4s linear infinite;
        }

        /* Slide In From Left Animation */
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        .opacity-0 { opacity: 0; }
      `}</style>

      {/* Background Layers */}
      <div className="absolute inset-0 moving-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#f8fafc_95%)] pointer-events-none" />

      {/* Main Content Container */}
      <div className={`relative mx-auto max-w-7xl px-6 lg:px-8 z-10 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">
              About
            </h2>
            <p className="text-lg leading-8 text-slate-700 mb-6">
              We are dedicated to creating exceptional digital experiences. With a year of industry experience, we transform ideas into powerful websites that drive business growth.
            </p>
            <p className="text-lg leading-8 text-slate-700 mb-10">
              Our approach combines cutting-edge technology, creative design, and strategic thinking to deliver solutions that not only look great but also perform exceptionally well.
            </p>

            {/* Why Choose Us List */}
            <h3 className="text-2xl font-bold text-slate-900 mb-5">Why Choose Us?</h3>
            <ul className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* UPDATE: Changed flex-shrink-0 to shrink-0 */}
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0 mt-1" />
                  <span className="text-lg text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                // Staggered animation delay for cards
                style={{ animationDelay: `${index * 100}ms` }}
                className={`bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}