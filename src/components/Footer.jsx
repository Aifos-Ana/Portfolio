import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--border)',
      padding: '1.75rem clamp(1.5rem, 7vw, 6rem)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '.75rem',
    }}>
      <span style={{ fontFamily: 'var(--ff-d)', fontSize: '1.2rem', color: 'var(--white)', letterSpacing: '1px' }}>
        A<span style={{ color: 'var(--red)' }}>SP</span>
      </span>

      <span style={{ fontFamily: 'var(--ff-b)', fontSize: '.65rem', color: 'var(--grey)', letterSpacing: '.06em' }}>
        © {new Date().getFullYear()} Ana Sofia Silva Pinto · Built with React
      </span>

      <a href="assets/docs/CV - Sofia Pinto.pdf" download style={{
        fontFamily: 'var(--ff-b)', fontSize: '.65rem', color: 'var(--red)',
        border: '1px solid rgba(232,25,44,.35)',
        padding: '.35rem .9rem', borderRadius: 'var(--r)',
        letterSpacing: '.06em', transition: 'all .2s',
      }}
        className="foot-cv"
      >
        Download CV ↓
      </a>

      <style>{`.foot-cv:hover { background: rgba(232,25,44,.1); }`}</style>
    </footer>
  );
}
