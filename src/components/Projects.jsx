import React, { useState } from 'react';
import { projects } from '../data/projects';
import useReveal from '../hooks/useReveal';

function ProjectCard({ project, index }) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <article className="reveal proj-card" style={{ animationDelay: `${index * 80}ms` }}>
      {/* Image */}
      <div style={{
        height: '200px', overflow: 'hidden',
        background: 'var(--black)',
        position: 'relative',
      }}>
        {!imgErr ? (
          <img
            src={project.img} alt={project.name}
            onError={() => setImgErr(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s ease' }}
            className="proj-img"
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', opacity: .15,
          }}>{project.emoji}</div>
        )}
        {/* Red corner accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: '3px', height: '40px',
          background: 'var(--red)',
        }} />
      </div>

      {/* Body */}
      <div style={{
        padding: '1.4rem', flex: 1,
        display: 'flex', flexDirection: 'column',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.75rem', marginBottom: '.6rem' }}>
          <h3 style={{ fontFamily: 'var(--ff-d)', fontSize: '1.4rem', color: 'var(--white)', letterSpacing: '.5px', lineHeight: 1.1 }}>
            {project.name}
          </h3>
          <a href={project.url} target="_blank" rel="noreferrer"
            style={{
              width: '28px', height: '28px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--grey)', fontSize: '.75rem',
              flexShrink: 0, transition: 'all .2s',
            }}
            className="proj-gh"
          >
            <i className="fab fa-github" />
          </a>
        </div>

        <p style={{ fontSize: '.75rem', color: 'var(--grey)', flex: 1, marginBottom: '1.1rem', lineHeight: 1.8 }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
          {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      <style>{`
        .proj-card {
          background: var(--black3);
          border: 1px solid var(--border);
          border-radius: var(--r);
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: border-color .3s, transform .3s, box-shadow .3s;
        }
        .proj-card:hover {
          border-color: rgba(232,25,44,.4);
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px rgba(232,25,44,.1);
        }
        .proj-card:hover .proj-img { transform: scale(1.06); }
        .proj-gh:hover { border-color: var(--red) !important; color: var(--red) !important; }
      `}</style>
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section section--dark" ref={ref}>
      <div className="sec-eye reveal">Featured Work</div>
      <h2 className="sec-title reveal">PROJECTS</h2>
      <p className="sec-sub reveal">
        Academic and personal projects — each one a chance to go deep on something real.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  );
}
