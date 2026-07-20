import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { useThemeMode } from '@/hooks/useThemeMode';

type ContactLink = {
  label: string;
  href: string;
  external: boolean;
  detail: string;
  emphasis: 'primary' | 'secondary';
  icon: typeof Mail;
};

const primaryLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:okomaduo@gmail.com',
    external: false,
    detail: 'okomaduo@gmail.com',
    emphasis: 'primary',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/2347015502629',
    external: true,
    detail: 'Chat',
    emphasis: 'secondary',
    icon: MessageCircle,
  },
];

const socialLinks: ContactLink[] = [
  {
    label: 'Call',
    href: 'tel:07015502629',
    external: false,
    detail: '07015502629',
    emphasis: 'secondary',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oscar-okomadu-04154a41b/',
    external: true,
    detail: 'Profile',
    emphasis: 'secondary',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Almeda1',
    external: true,
    detail: 'Code',
    emphasis: 'secondary',
    icon: Github,
  },
];

export default function Contact() {
  const { isDark } = useThemeMode();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const themeVars = {
    '--contact-bg': isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.55)',
    '--contact-text': isDark ? '#f8fafc' : '#0f172a',
    '--contact-muted': isDark ? '#94a3b8' : '#475569',
    '--contact-border': isDark ? 'rgba(255, 255, 255, 0.11)' : 'rgba(15, 23, 42, 0.12)',
    '--contact-accent': isDark ? '#7dd3fc' : '#0369a1',
    '--contact-accent-strong': isDark ? '#e0f2fe' : '#082f49',
    '--contact-surface': isDark ? 'rgba(2, 6, 23, 0.7)' : 'rgba(255, 255, 255, 0.72)',
    '--contact-tag-bg': isDark ? 'rgba(125, 211, 252, 0.1)' : 'rgba(14, 165, 233, 0.09)',
    '--contact-tag-border': isDark ? 'rgba(125, 211, 252, 0.18)' : 'rgba(14, 165, 233, 0.18)',
  } as React.CSSProperties;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-transparent py-16 font-sans sm:py-20 lg:py-24"
      style={themeVars}
    >
      <style>{`
        @keyframes contact-rise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes contact-slide {
          from { opacity: 0; transform: translateX(-36px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-contact-rise {
          animation: contact-rise 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-contact-slide {
          animation: contact-slide 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8">
        <div className={`space-y-6 ${isVisible ? 'animate-contact-rise' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center gap-2 border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.28em]"
              style={{
                borderColor: 'var(--contact-border)',
                color: 'var(--contact-muted)',
                backgroundColor: 'var(--contact-bg)',
              }}
            >
              Contact
            </span>
          </div>

          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'var(--contact-text)' }}>
              LET&apos;S WORK TOGETHER
            </h2>
            <p
              className="mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--contact-muted)' }}
            >
              Reach me directly via email, phone, LinkedIn, WhatsApp, or GitHub.
            </p>
          </div>

          <div
            className="max-w-xl border-l pl-5 sm:pl-6"
            style={{
              borderColor: 'var(--contact-border)',
              color: 'var(--contact-text)',
            }}
          >
            <p className="text-sm uppercase tracking-[0.32em]" style={{ color: 'var(--contact-muted)' }}>
              Direct line
            </p>
            <p className="mt-3 text-2xl font-serif italic leading-tight sm:text-3xl" style={{ color: 'var(--contact-accent-strong)' }}>
              If you want a fast reply, start with email or whatsapp.
            </p>
          </div>
        </div>

        <div className={`space-y-6 ${isVisible ? 'animate-contact-slide' : 'opacity-0'}`}>
          <div className="grid gap-4 sm:grid-cols-2">
            {primaryLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              const labelId = `contact-${contact.label.toLowerCase()}`;
              const isEmail = index === 0;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noreferrer' : undefined}
                  aria-labelledby={labelId}
                  className="group relative flex min-h-47.5 flex-col justify-between overflow-hidden border p-5 text-left outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:p-6"
                  style={{
                    borderColor: 'var(--contact-border)',
                    backgroundColor: isEmail ? 'var(--contact-surface)' : 'var(--contact-bg)',
                    borderRadius: isEmail ? '28px' : '18px 30px 18px 30px',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: 'var(--contact-accent)' }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.35em]" style={{ color: 'var(--contact-muted)' }}>
                        0{index + 1}
                      </p>
                      <h3 id={labelId} className="mt-3 text-3xl font-serif italic sm:text-4xl" style={{ color: 'var(--contact-text)' }}>
                        {contact.label}
                      </h3>
                    </div>
                    <IconComponent
                      aria-hidden="true"
                      className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      style={{ color: 'var(--contact-accent)' }}
                    />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.28em]" style={{ color: 'var(--contact-muted)' }}>
                      {isEmail ? 'Preferred' : 'Direct'}
                    </p>
                    <p
                      className="mt-2 text-lg font-medium transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: 'var(--contact-text)' }}
                    >
                      {contact.detail}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: 'var(--contact-accent-strong)' }}
                    >
                      <span
                        className="h-px w-8 origin-left scale-x-75 transition-transform duration-300 group-hover:scale-x-100"
                        style={{ backgroundColor: 'var(--contact-accent)' }}
                      />
                      Open link
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div
            className="border p-5 sm:p-6"
            style={{
              borderColor: 'var(--contact-border)',
              backgroundColor: 'var(--contact-bg)',
              borderRadius: '22px 36px 22px 36px',
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xs uppercase tracking-[0.36em]" style={{ color: 'var(--contact-muted)' }}>
                Secondary links
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((contact) => {
                const IconComponent = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={contact.external ? 'noreferrer' : undefined}
                    className="group inline-flex items-center gap-3 border px-4 py-3 text-sm font-medium outline-none transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    style={{
                      color: 'var(--contact-text)',
                      borderColor: 'var(--contact-tag-border)',
                      backgroundColor: 'var(--contact-tag-bg)',
                      borderRadius: '999px',
                    }}
                  >
                    <IconComponent aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--contact-accent)' }} />
                    <span>{contact.label}</span>
                    <span className="font-serif italic" style={{ color: 'var(--contact-muted)' }}>
                      {contact.detail}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
