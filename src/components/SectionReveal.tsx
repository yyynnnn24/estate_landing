import { useEffect, useRef, type ReactNode } from 'react';

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Wraps children in a div that fades + slides into view on scroll.
 */
export default function SectionReveal({ children, className = '' }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
}
