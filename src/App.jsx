import React, { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [showBtt, setShowBtt]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? (window.scrollY / h) * 100 : 0);
      setShowBtt(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0,
          height: '2px', width: `${scrollPct}%`,
          background: 'linear-gradient(90deg, #e8192c, #ff3347)',
          zIndex: 9999, transition: 'width 0.08s linear',
        }}
      />

      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`btt ${showBtt ? 'btt--show' : ''}`}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
    </>
  );
}
