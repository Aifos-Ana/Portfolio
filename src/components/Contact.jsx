import React from 'react';
import useReveal from '../hooks/useReveal';

const cards = [
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Porto, Portugal', href: null },
  { icon: 'fas fa-envelope',       label: 'Email',    value: 'AnaSofia.Pinto@protonmail.com', href: 'mailto:AnaSofia.Pinto@protonmail.com' },
  { icon: 'fas fa-briefcase',      label: 'Status',   value: 'Open to Work', href: null },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section section--darker" ref={ref}
      style={{ textAlign: 'center' }}>

      <div className="sec-eye reveal" style={{ justifyContent: 'center' }}>Get In Touch</div>
      <h2 className="sec-title reveal">LET'S BUILD<br />SOMETHING</h2>
      <p className="sec-sub reveal" style={{ margin: '0 auto 3.5rem' }}>
        Open to full-time roles, internships, and interesting projects.<br />Don't hesitate to reach out.
      </p>

      {/* Info cards */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
        {cards.map(c => (
          <div key={c.label} style={{
            background: 'var(--black2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r)',
            padding: '1.5rem 2rem',
            minWidth: '180px',
            transition: 'border-color .25s, transform .25s',
          }}
            className="c-card"
          >
            <i className={c.icon} style={{ fontSize: '1.1rem', color: 'var(--red)', marginBottom: '.6rem', display: 'block' }} />
            <div style={{ fontFamily: 'var(--ff-b)', fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '.3rem' }}>
              {c.label}
            </div>
            {c.href
              ? <a href={c.href} style={{ fontSize: '.75rem', color: 'var(--white)', transition: 'color .2s' }} className="c-link">{c.value}</a>
              : <div style={{ fontSize: '.75rem', color: 'var(--white)' }}>{c.value}</div>
            }
          </div>
        ))}
      </div>

      {/* Social buttons */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="https://github.com/Aifos-Ana" target="_blank" rel="noreferrer" className="btn-ghost">
          <i className="fab fa-github" /> GitHub
        </a>
        <a href="https://linkedin.com/in/ana-sofia-silva-pinto" target="_blank" rel="noreferrer" className="btn-ghost">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
        <a href="mailto:AnaSofia.Pinto@protonmail.com" className="btn-red">
          <i className="fas fa-envelope" /> Send Email
        </a>
      </div>

      <style>{`
        .c-card:hover {
          border-color: rgba(232,25,44,.35) !important;
          transform: translateY(-3px);
        }
        .c-link:hover { color: var(--red2) !important; }
      `}</style>
    </section>
  );
}
