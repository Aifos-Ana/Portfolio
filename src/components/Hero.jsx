import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const nameRef = useRef(null);

  // Glitch effect on load
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    el.classList.add('glitch-run');
    const t = setTimeout(() => el.classList.remove('glitch-run'), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: 'calc(var(--nav-h) + 4rem) clamp(1.5rem, 7vw, 6rem) 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Big red vertical line */}
      <div style={{
        position: 'absolute', left: 'clamp(1.5rem, 7vw, 6rem)', top: '10%', bottom: '10%',
        width: '1px', background: 'linear-gradient(to bottom, transparent, var(--red), transparent)',
        opacity: .4,
      }} />

      {/* BG number */}
      <div style={{
        position: 'absolute', right: 'clamp(1.5rem, 7vw, 6rem)', bottom: '4rem',
        fontFamily: 'var(--ff-d)', fontSize: 'clamp(8rem, 18vw, 18rem)',
        color: 'rgba(232,25,44,0.05)', lineHeight: 1, userSelect: 'none',
        pointerEvents: 'none', letterSpacing: '-4px',
      }}>01</div>

      <div style={{ paddingLeft: '2.5rem', maxWidth: '780px', position: 'relative', zIndex: 1 }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          fontFamily: 'var(--ff-b)', fontSize: '.68rem', letterSpacing: '.12em',
          textTransform: 'uppercase', color: 'var(--red)',
          marginBottom: '1.5rem',
          animation: 'fadeUp .6s ease both',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--red)',
            boxShadow: '0 0 8px var(--red)',
            animation: 'pulse 2s infinite',
          }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 ref={nameRef}
          style={{
            fontFamily: 'var(--ff-d)',
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            lineHeight: '.92', letterSpacing: '2px',
            color: 'var(--white)',
            marginBottom: '1.5rem',
            animation: 'fadeUp .6s .1s ease both',
          }}
          className="hero-name"
        >
          ANA SOFIA<br />
          <span style={{ color: 'var(--red)', WebkitTextStroke: '0px', }}>SILVA PINTO</span>
        </h1>

        {/* Role */}
        <p style={{
          fontFamily: 'var(--ff-b)', fontSize: '.85rem',
          color: 'var(--grey)', letterSpacing: '.06em',
          marginBottom: '1rem',
          animation: 'fadeUp .6s .2s ease both',
        }}>
          <span style={{ color: 'var(--red)' }}>_</span> Software Engineer · MSc Student @ FCUP
        </p>

        {/* Desc */}
        <p style={{
          fontSize: '.8rem', color: 'var(--grey)',
          maxWidth: '480px', lineHeight: '1.9',
          marginBottom: '2.5rem',
          animation: 'fadeUp .6s .3s ease both',
        }}>
          Computing engineer building reliable software — from compilers to distributed systems
          to mobile apps. Based in Porto, Portugal.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeUp .6s .4s ease both' }}>
          <button className="btn-red"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects <i className="fas fa-arrow-down" style={{ fontSize: '.7rem' }} />
          </button>
          <button className="btn-ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap',
          animation: 'fadeUp .6s .5s ease both',
        }}>
          {[['7+','Projects'], ['9','Languages'], ['2','Degrees']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--ff-d)', fontSize: '2.8rem', color: 'var(--white)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: '.65rem', color: 'var(--grey)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.2rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem',
        fontFamily: 'var(--ff-b)', fontSize: '.6rem',
        color: 'var(--grey)', letterSpacing: '.15em', textTransform: 'uppercase',
        animation: 'fadeIn 1s 1s both',
      }}>
        Scroll
        <div style={{
          width: '1px', height: '36px',
          background: 'linear-gradient(to bottom, var(--red), transparent)',
          animation: 'scrollDrop 1.5s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .4; transform: scale(1.5); }
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
