import React, { useState, useEffect } from 'react';
import MacMenuBar from './components/MacMenuBar';
import DesktopIcons from './components/DesktopIcons';
import MacWindow from './components/MacWindow';
import AboutMacHeroWindow from './components/AboutMacHeroWindow';
import ChronoLensMacApp from './components/ChronoLensMacApp';
import ProjectsMacFinder from './components/ProjectsMacFinder';
import SkillsMacControlPanel from './components/SkillsMacControlPanel';
import ContactMacDialog from './components/ContactMacDialog';
import TerminalMac from './components/TerminalMac';

export default function App() {
  const [openWindows, setOpenWindows] = useState({
    hero: true,
    chronolens: true,
    projects: false,
    skills: false,
    contact: false,
    terminal: false
  });

  const [soundMuted, setSoundMuted] = useState(false);

  // Web Audio System Click Synthesizer
  const playClickSound = (freq = 800) => {
    if (soundMuted) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  };

  const handleOpenApp = (appId) => {
    playClickSound(950);
    if (appId === 'closeAll') {
      setOpenWindows({
        hero: false,
        chronolens: false,
        projects: false,
        skills: false,
        contact: false,
        terminal: false
      });
      return;
    }

    if (appId === 'sandbox' || appId === 'chaos_spiral' || appId === 'chaos_slo') {
      setOpenWindows((prev) => ({ ...prev, chronolens: true }));
      return;
    }

    setOpenWindows((prev) => ({
      ...prev,
      [appId]: true
    }));
  };

  const handleCloseApp = (appId) => {
    playClickSound(600);
    setOpenWindows((prev) => ({
      ...prev,
      [appId]: false
    }));
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }} onClick={() => playClickSound(700)}>
      {/* Top Apple System 7 Menu Bar */}
      <MacMenuBar
        onOpenApp={handleOpenApp}
        soundMuted={soundMuted}
        toggleSound={() => setSoundMuted(!soundMuted)}
      />

      {/* Desktop Wallpaper Icons */}
      <DesktopIcons onOpenApp={handleOpenApp} />

      {/* Desktop Windows Stack */}
      <div style={{ position: 'relative', marginTop: '35px', width: '100%', height: 'calc(100vh - 35px)' }}>
        
        {/* About / Welcome Hero Window */}
        <MacWindow
          id="hero"
          title="About Arjun Sabu (greninja-op)"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.hero}
          onClose={() => handleCloseApp('hero')}
          defaultPos={{ top: '60px', left: '4%' }}
          maxWidth="720px"
          zIndex={openWindows.hero ? 15 : 5}
        >
          <AboutMacHeroWindow onOpenApp={handleOpenApp} />
        </MacWindow>

        {/* ChronoLens & Chaos Control Panel App */}
        <MacWindow
          id="chronolens"
          title="⚡ ChronoLens.app — System 7 Control Panel"
          themeColor="var(--mac-pink)"
          isOpen={openWindows.chronolens}
          onClose={() => handleCloseApp('chronolens')}
          defaultPos={{ top: '110px', left: '26%' }}
          maxWidth="780px"
          zIndex={openWindows.chronolens ? 20 : 6}
        >
          <ChronoLensMacApp />
        </MacWindow>

        {/* Projects Finder Window */}
        <MacWindow
          id="projects"
          title="📁 Projects.finder — Proud Works"
          themeColor="var(--mac-cyan)"
          isOpen={openWindows.projects}
          onClose={() => handleCloseApp('projects')}
          defaultPos={{ top: '90px', left: '15%' }}
          maxWidth="820px"
          zIndex={openWindows.projects ? 25 : 7}
        >
          <ProjectsMacFinder />
        </MacWindow>

        {/* Skills Control Panel Window */}
        <MacWindow
          id="skills"
          title="🎛️ Control Panel — Capabilities"
          themeColor="var(--mac-lime)"
          isOpen={openWindows.skills}
          onClose={() => handleCloseApp('skills')}
          defaultPos={{ top: '130px', left: '20%' }}
          maxWidth="760px"
          zIndex={openWindows.skills ? 22 : 8}
        >
          <SkillsMacControlPanel />
        </MacWindow>

        {/* Terminal Window */}
        <MacWindow
          id="terminal"
          title="💻 Terminal.cli — System 7 Console"
          themeColor="#000000"
          isOpen={openWindows.terminal}
          onClose={() => handleCloseApp('terminal')}
          defaultPos={{ top: '150px', left: '28%' }}
          maxWidth="700px"
          zIndex={openWindows.terminal ? 30 : 9}
        >
          <TerminalMac />
        </MacWindow>

        {/* Contact Dialog Window */}
        <MacWindow
          id="contact"
          title="✉️ Mail.dialog — Transmit Message"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.contact}
          onClose={() => handleCloseApp('contact')}
          defaultPos={{ top: '140px', left: '22%' }}
          maxWidth="620px"
          zIndex={openWindows.contact ? 28 : 10}
        >
          <ContactMacDialog />
        </MacWindow>

      </div>
    </div>
  );
}
