import React from 'react';
import useReveal from '../hooks/useReveal';

const edu = [
  {
    degree: 'MSc Network & Information Systems Engineering',
    school: 'FCUP — Faculty of Sciences, University of Porto',
    date: '2024 – Present',
    active: true,
  },
  {
    degree: 'BSc Informatics & Computing Engineering',
    school: 'FEUP — Faculty of Engineering, University of Porto',
    date: '2021 – 2025',
    active: false,
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section section--dark" ref={ref}
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>

      {/* Left */}
      <div>
        <div className="sec-eye reveal">About Me</div>
        <h2 className="sec-title reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
          ENGINEERING<br />FROM SCRATCH
        </h2>
        <p className="reveal" style={{ fontSize: '.8rem', color: 'var(--grey)', lineHeight: 1.95, marginBottom: '1.25rem', marginTop: '1.5rem' }}>
          I'm a junior software engineer with a strong foundation in CS fundamentals — from writing compilers
          to designing distributed architectures to building AI game agents.
        </p>
        <p className="reveal" style={{ fontSize: '.8rem', color: 'var(--grey)', lineHeight: 1.95, marginBottom: '2rem' }}>
          I thrive in environments where I get to solve real problems, collaborate with a team, and keep learning.
          Currently deepening my knowledge in network and information systems at FCUP, Porto.
        </p>

        {/* Divider */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--red)' }} />
          <span style={{ fontFamily: 'var(--ff-b)', fontSize: '.65rem', color: 'var(--grey)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            Porto, Portugal
          </span>
        </div>

        <div className="reveal">
          <a href="assets/docs/CV - Sofia Pinto.pdf" download className="btn-red">
            Download CV <i className="fas fa-download" style={{ fontSize: '.7rem' }} />
          </a>
        </div>
      </div>

      {/* Right: Education */}
      <div>
        <div className="sec-eye reveal">Education</div>
        <div className="reveal" style={{ marginTop: '1rem' }}>
          {edu.map((e, i) => (
            <div key={i} style={{
              padding: '1.5rem 0',
              borderBottom: i < edu.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
            }}>
              {/* Accent */}
              <div style={{
                width: '2px', alignSelf: 'stretch', minHeight: '60px',
                background: e.active ? 'var(--red)' : 'var(--border)',
                flexShrink: 0, marginTop: '.2rem',
                boxShadow: e.active ? '0 0 8px var(--red)' : 'none',
              }} />

              <div>
                <div style={{
                  fontFamily: 'var(--ff-d)', fontSize: '1.1rem',
                  color: 'var(--white)', marginBottom: '.25rem', letterSpacing: '.3px',
                }}>{e.degree}</div>
                <div style={{ fontSize: '.73rem', color: 'var(--grey)', marginBottom: '.3rem' }}>{e.school}</div>
                <div style={{
                  fontFamily: 'var(--ff-b)', fontSize: '.63rem',
                  color: e.active ? 'var(--red)' : 'var(--grey)',
                  letterSpacing: '.08em', textTransform: 'uppercase',
                }}>{e.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
