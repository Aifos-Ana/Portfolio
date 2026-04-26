import { useEffect, useRef } from 'react';

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll('.reveal');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          // stagger siblings
          const siblings = [...e.target.parentElement.querySelectorAll('.reveal:not(.in)')];
          const idx = siblings.indexOf(e.target);
          setTimeout(() => e.target.classList.add('in'), idx * 80);
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return ref;
}
