import React, { useState, useEffect } from 'react';

const links = ['home', 'projects', 'skills', 'about', 'contact'];

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [active, setActive]   = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = links.map(id => document.getElementById(id)).filter(Boolean);
      const current = sections.reduce((acc, s) => {
        return s.getBoundingClientRect().top <= 100 ? s.id : acc;
      }, 'home');
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 'var(--nav-h)',
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(1.5rem, 7vw, 6rem)',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        zIndex: 100,
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{
            fontFamily: 'var(--ff-d)', fontSize: '1.6rem',
            color: 'var(--white)', background: 'none', border: 'none',
            cursor: 'none', marginRight: 'auto', letterSpacing: '2px',
          }}
        >
          A<span style={{ color: 'var(--red)' }}>SP</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}
            className="nav-desktop">
          {links.map(id => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: 'var(--ff-b)', fontSize: '.7rem',
                  letterSpacing: '.1em', textTransform: 'uppercase',
                  color: active === id ? 'var(--red)' : 'var(--grey)',
                  background: 'none', border: 'none', cursor: 'none',
                  transition: 'color .2s',
                  position: 'relative',
                }}
              >
                {id}
                {active === id && (
                  <span style={{
                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                    height: '1px', background: 'var(--red)',
                  }} />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CV button */}
        <a
          href="assets/docs/CV - Sofia Pinto.pdf"
          download
          className="btn-red nav-desktop"
          style={{ marginLeft: '2.5rem', fontSize: '.68rem', padding: '.45rem 1.1rem' }}
        >
          CV <i className="fas fa-download" style={{ fontSize: '.6rem' }} />
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="nav-ham"
          aria-label="Menu"
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', cursor: 'none',
            marginLeft: 'auto', padding: '4px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: open && i === 1 ? 'transparent' : 'var(--white)',
              borderRadius: '2px',
              transform: open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
              transition: 'all .3s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0,
          background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: '2rem clamp(1.5rem, 7vw, 6rem)',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
          zIndex: 99,
        }}>
          {links.map(id => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{
                fontFamily: 'var(--ff-b)', fontSize: '1rem',
                letterSpacing: '.08em', textTransform: 'uppercase',
                color: active === id ? 'var(--red)' : 'var(--white)',
                background: 'none', border: 'none', cursor: 'none',
                textAlign: 'left',
              }}>
              {id}
            </button>
          ))}
          <a href="assets/docs/CV - Sofia Pinto.pdf" download
            style={{ color: 'var(--red)', fontFamily: 'var(--ff-b)', fontSize: '.8rem', letterSpacing: '.08em' }}>
            Download CV ↓
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-ham { display: flex !important; }
        }
      `}</style>
    </>
  );
}
