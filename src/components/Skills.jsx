import React from 'react';
import { skills } from '../data/projects';
import useReveal from '../hooks/useReveal';

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section section--darker" ref={ref}>
      <div className="sec-eye reveal">Capabilities</div>
      <h2 className="sec-title reveal">SKILLS</h2>
      <p className="sec-sub reveal">
        Technologies and practices applied across coursework, projects, and independent work.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1px',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r)',
        overflow: 'hidden',
      }}>
        {skills.map((s, i) => (
          <div key={s.title} className="reveal sk-card" style={{
            padding: '1.75rem',
            background: 'var(--black2)',
            borderRight: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}>
            {/* Icon + title row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '32px', height: '32px',
                border: '1px solid rgba(232,25,44,.3)',
                borderRadius: 'var(--r)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--red)', fontSize: '.85rem',
                flexShrink: 0,
              }}>
                <i className={s.icon} />
              </div>
              <span style={{
                fontFamily: 'var(--ff-d)', fontSize: '1.1rem',
                color: 'var(--white)', letterSpacing: '.5px',
              }}>{s.title}</span>
            </div>

            {/* Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {s.items.map(item => (
                <span key={item} style={{
                  fontFamily: 'var(--ff-b)',
                  fontSize: '.68rem', fontWeight: 500,
                  padding: '.25rem .65rem', borderRadius: '2px',
                  background: 'var(--black3)',
                  border: '1px solid var(--border)',
                  color: 'var(--grey)',
                  transition: 'all .2s',
                  cursor: 'default',
                }}
                  className="sk-pill"
                >{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sk-pill:hover {
          background: rgba(232,25,44,.1) !important;
          border-color: rgba(232,25,44,.3) !important;
          color: var(--red2) !important;
        }
      `}</style>
    </section>
  );
}
