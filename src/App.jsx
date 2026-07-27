import React, { useState } from 'react';
import MacMenuBar from './components/MacMenuBar';
import DesktopIcons from './components/DesktopIcons';
import MacWindow from './components/MacWindow';
import MacControlStrip from './components/MacControlStrip';
import AboutArjunApp from './components/AboutArjunApp';
import ChronoLensApp from './components/ChronoLensApp';
import MemoireApp from './components/MemoireApp';
import NuvaultApp from './components/NuvaultApp';
import CFLSApp from './components/CFLSApp';
import ProjectsMacFinder from './components/ProjectsMacFinder';
import SkillsMacControlPanel from './components/SkillsMacControlPanel';
import ContactMacDialog from './components/ContactMacDialog';
import TerminalMac from './components/TerminalMac';
import MacCalculatorApp from './components/MacCalculatorApp';
import MacPuzzleApp from './components/MacPuzzleApp';

export default function App() {
  const [openWindows, setOpenWindows] = useState({
    about: true,
    chronolens: true,
    memoire: false,
    nuvault: false,
    cfls: false,
    projects: false,
    skills: false,
    contact: false,
    terminal: false,
    calculator: false,
    puzzle: false
  });

  const [windowZIndices, setWindowZIndices] = useState({
    about: 10,
    chronolens: 15,
    memoire: 12,
    nuvault: 14,
    cfls: 13,
    projects: 11,
    skills: 16,
    contact: 17,
    terminal: 18,
    calculator: 19,
    puzzle: 20
  });

  const [topZIndex, setTopZIndex] = useState(25);
  const [soundMuted, setSoundMuted] = useState(false);

  const focusWindow = (id) => {
    setTopZIndex((prev) => prev + 1);
    setWindowZIndices((prev) => ({
      ...prev,
      [id]: topZIndex + 1
    }));
  };

  const handleLaunchApp = (id) => {
    if (id === 'closeAll') {
      setOpenWindows({
        about: false,
        chronolens: false,
        memoire: false,
        nuvault: false,
        cfls: false,
        projects: false,
        skills: false,
        contact: false,
        terminal: false,
        calculator: false,
        puzzle: false
      });
      return;
    }

    if (id === 'hero') id = 'about';

    setOpenWindows((prev) => ({
      ...prev,
      [id]: true
    }));
    focusWindow(id);
  };

  const handleCloseApp = (id) => {
    setOpenWindows((prev) => ({
      ...prev,
      [id]: false
    }));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, overflow: 'hidden' }}>
      {/* Top System 7 Apple Menu Bar */}
      <MacMenuBar
        onOpenApp={handleLaunchApp}
        soundMuted={soundMuted}
        toggleSound={() => setSoundMuted(!soundMuted)}
      />

      {/* Desktop Icons */}
      <DesktopIcons onOpenApp={handleLaunchApp} />

      {/* Desktop Workspace Viewport */}
      <div style={{ position: 'relative', marginTop: '32px', width: '100vw', height: 'calc(100vh - 66px)', overflow: 'hidden' }}>

        {/* About Arjun Sabu System Info Window */}
        <MacWindow
          id="about"
          title=" About Arjun Sabu (greninja-op)"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.about}
          onClose={() => handleCloseApp('about')}
          onFocus={() => focusWindow('about')}
          zIndex={windowZIndices.about}
          defaultPos={{ top: 40, left: 50 }}
          defaultSize={{ width: 620, height: 430 }}
          icon=""
        >
          <AboutArjunApp onOpenApp={handleLaunchApp} />
        </MacWindow>

        {/* ChronoLens Standalone App */}
        <MacWindow
          id="chronolens"
          title="⚡ ChronoLens.app — Reliability Loop"
          themeColor="var(--mac-pink)"
          isOpen={openWindows.chronolens}
          onClose={() => handleCloseApp('chronolens')}
          onFocus={() => focusWindow('chronolens')}
          zIndex={windowZIndices.chronolens}
          defaultPos={{ top: 70, left: 140 }}
          defaultSize={{ width: 660, height: 450 }}
          icon="⚡"
        >
          <ChronoLensApp />
        </MacWindow>

        {/* Memoire Standalone App */}
        <MacWindow
          id="memoire"
          title="🧠 Memoire.app — AI Context Memory Graph"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.memoire}
          onClose={() => handleCloseApp('memoire')}
          onFocus={() => focusWindow('memoire')}
          zIndex={windowZIndices.memoire}
          defaultPos={{ top: 85, left: 160 }}
          defaultSize={{ width: 660, height: 450 }}
          icon="🧠"
        >
          <MemoireApp />
        </MacWindow>

        {/* Nuvault Standalone App */}
        <MacWindow
          id="nuvault"
          title="🔐 Nuvault.app — Zero-Trust Cloud Vault"
          themeColor="var(--mac-cyan)"
          isOpen={openWindows.nuvault}
          onClose={() => handleCloseApp('nuvault')}
          onFocus={() => focusWindow('nuvault')}
          zIndex={windowZIndices.nuvault}
          defaultPos={{ top: 100, left: 180 }}
          defaultSize={{ width: 640, height: 430 }}
          icon="🔐"
        >
          <NuvaultApp />
        </MacWindow>

        {/* CFLS Standalone App */}
        <MacWindow
          id="cfls"
          title="🔒 CFLS.app — Real-Time File Lock Sync"
          themeColor="var(--mac-lime)"
          isOpen={openWindows.cfls}
          onClose={() => handleCloseApp('cfls')}
          onFocus={() => focusWindow('cfls')}
          zIndex={windowZIndices.cfls}
          defaultPos={{ top: 115, left: 200 }}
          defaultSize={{ width: 660, height: 440 }}
          icon="🔒"
        >
          <CFLSApp />
        </MacWindow>

        {/* Projects Finder Window */}
        <MacWindow
          id="projects"
          title="📁 Projects.finder — Proud Works"
          themeColor="var(--mac-yellow)"
          isOpen={openWindows.projects}
          onClose={() => handleCloseApp('projects')}
          onFocus={() => focusWindow('projects')}
          zIndex={windowZIndices.projects}
          defaultPos={{ top: 60, left: 100 }}
          defaultSize={{ width: 700, height: 460 }}
          icon="📁"
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
          onFocus={() => focusWindow('skills')}
          zIndex={windowZIndices.skills}
          defaultPos={{ top: 95, left: 130 }}
          defaultSize={{ width: 660, height: 440 }}
          icon="🎛️"
        >
          <SkillsMacControlPanel />
        </MacWindow>

        {/* Terminal Window */}
        <MacWindow
          id="terminal"
          title="💻 Terminal.cli — Console"
          themeColor="#000000"
          isOpen={openWindows.terminal}
          onClose={() => handleCloseApp('terminal')}
          onFocus={() => focusWindow('terminal')}
          zIndex={windowZIndices.terminal}
          defaultPos={{ top: 110, left: 220 }}
          defaultSize={{ width: 620, height: 420 }}
          icon="💻"
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
          onFocus={() => focusWindow('contact')}
          zIndex={windowZIndices.contact}
          defaultPos={{ top: 80, left: 150 }}
          defaultSize={{ width: 580, height: 420 }}
          icon="✉️"
        >
          <ContactMacDialog />
        </MacWindow>

        {/* Calculator Desk Accessory */}
        <MacWindow
          id="calculator"
          title="🧮 Calculator"
          themeColor="var(--mac-pink)"
          isOpen={openWindows.calculator}
          onClose={() => handleCloseApp('calculator')}
          onFocus={() => focusWindow('calculator')}
          zIndex={windowZIndices.calculator}
          defaultPos={{ top: 130, left: 260 }}
          defaultSize={{ width: 260, height: 360 }}
          icon="🧮"
        >
          <MacCalculatorApp />
        </MacWindow>

        {/* 15-Puzzle Desk Accessory */}
        <MacWindow
          id="puzzle"
          title="🧩 Puzzle 15"
          themeColor="var(--mac-cyan)"
          isOpen={openWindows.puzzle}
          onClose={() => handleCloseApp('puzzle')}
          onFocus={() => focusWindow('puzzle')}
          zIndex={windowZIndices.puzzle}
          defaultPos={{ top: 145, left: 290 }}
          defaultSize={{ width: 260, height: 340 }}
          icon="🧩"
        >
          <MacPuzzleApp />
        </MacWindow>

      </div>

      {/* Bottom Macintosh Control Strip Taskbar */}
      <MacControlStrip
        openWindows={openWindows}
        onFocusApp={focusWindow}
        onLaunchApp={handleLaunchApp}
      />
    </div>
  );
}
