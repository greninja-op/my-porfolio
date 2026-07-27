import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChaosSandbox from './components/ChaosSandbox';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="portfolio-app" style={{ position: 'relative' }}>
      <ParticleCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
        <main>
          <Hero onOpenTerminal={() => setTerminalOpen(true)} />
          <ChaosSandbox />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
        <Footer />
        <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      </div>
    </div>
  );
}
