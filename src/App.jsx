import React, { useState, useEffect } from 'react';
import MacMenuBar from './components/MacMenuBar';
import DesktopIcons from './components/DesktopIcons';
import DesktopWidgets from './components/DesktopWidgets';
import MacWindow from './components/MacWindow';
import MacControlStrip from './components/MacControlStrip';
import AboutArjunApp from './components/AboutArjunApp';
import AboutThisComputerApp from './components/AboutThisComputerApp';
import TheChooserApp from './components/TheChooserApp';
import ControlPanelsApp from './components/ControlPanelsApp';
import ExtensionsManagerApp from './components/ExtensionsManagerApp';
import SystemBombDialog from './components/SystemBombDialog';
import SpotlightSearch from './components/SpotlightSearch';
import LaunchpadOverlay from './components/LaunchpadOverlay';
import ScreensaverOverlay from './components/ScreensaverOverlay';
import ResumeMacWindow from './components/ResumeMacWindow';
import MacNotesApp from './components/MacNotesApp';
import MacGitApp from './components/MacGitApp';
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
    chronolens: false,
    notes: false,
    macgit: false,
    about_computer: false,
    resume: false,
    chooser: false,
    control_panels: false,
    extensions: false,
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
    chronolens: 12,
    notes: 16,
    macgit: 17,
    about_computer: 12,
    resume: 14,
    chooser: 14,
    control_panels: 13,
    extensions: 11,
    memoire: 12,
    nuvault: 14,
    cfls: 13,
    projects: 11,
    skills: 15,
    contact: 17,
    terminal: 18,
    calculator: 19,
    puzzle: 20
  });

  const [topZIndex, setTopZIndex] = useState(50);
  const [volume, setVolume] = useState(0.8);
  const [soundMuted, setSoundMuted] = useState(false);
  const [alertSound, setAlertSound] = useState('sosumi');
  const [desktopPattern, setDesktopPattern] = useState('purple_dots');
  const [accentColor, setAccentColor] = useState('purple');
  const [fontSmoothing, setFontSmoothing] = useState('pixel');
  const [colorTheme, setColorTheme] = useState('cyberpop');
  const [crtShader, setCrtShader] = useState(false);
  const [screensaverActive, setScreensaverActive] = useState(false);
  const [windowAnimations, setWindowAnimations] = useState(true);
  const [desktopItemsVisible, setDesktopItemsVisible] = useState(true);

  const [activeExtensions, setActiveExtensions] = useState([
    'Python', 'OpenTelemetry', 'React', 'TypeScript', 'Go', 'WebCrypto', 'Docker'
  ]);
  const [bombOpen, setBombOpen] = useState(false);
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const [launchpadOpen, setLaunchpadOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
        e.preventDefault();
        setSpotlightOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // System Sound & Alert Sound Synthesizer
  const playSystemSound = (freq = 800, duration = 0.08, type = 'square') => {
    if (soundMuted || volume <= 0) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05 * volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback
    }
  };

  const playAlertSound = (name = alertSound) => {
    if (soundMuted || volume <= 0) return;
    try {
      if (name === 'sosumi') {
        playSystemSound(650, 0.09, 'square');
        setTimeout(() => playSystemSound(850, 0.12, 'square'), 100);
      } else if (name === 'wild_eep') {
        playSystemSound(1200, 0.07, 'sawtooth');
      } else if (name === 'indigo') {
        playSystemSound(440, 0.15, 'sine');
        setTimeout(() => playSystemSound(880, 0.2, 'sine'), 120);
      } else if (name === 'quack') {
        playSystemSound(180, 0.18, 'sawtooth');
        setTimeout(() => playSystemSound(140, 0.15, 'sawtooth'), 80);
      }
    } catch (e) {}
  };

  // Atomic Focus Window Booster
  const focusWindow = (id) => {
    setTopZIndex((prev) => {
      const nextZ = prev + 5;
      setWindowZIndices((w) => ({ ...w, [id]: nextZ }));
      return nextZ;
    });
  };

  const handleLaunchApp = (id) => {
    playAlertSound();
    if (id === 'closeAll') {
      setOpenWindows({
        about: false,
        chronolens: false,
        notes: false,
        macgit: false,
        about_computer: false,
        resume: false,
        chooser: false,
        control_panels: false,
        extensions: false,
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
    playSystemSound(600, 0.06);
    setOpenWindows((prev) => ({
      ...prev,
      [id]: false
    }));
  };

  const resetLayout = () => {
    playSystemSound(1300, 0.15);
    setOpenWindows({
      about: true,
      chronolens: false,
      notes: false,
      macgit: false,
      about_computer: false,
      resume: false,
      chooser: false,
      control_panels: true,
      extensions: false,
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
    setWindowZIndices({
      about: 10,
      chronolens: 12,
      notes: 16,
      macgit: 17,
      about_computer: 12,
      resume: 14,
      chooser: 14,
      control_panels: 60,
      extensions: 11,
      memoire: 12,
      nuvault: 14,
      cfls: 13,
      projects: 11,
      skills: 15,
      contact: 17,
      terminal: 18,
      calculator: 19,
      puzzle: 20
    });
    setTopZIndex(65);
  };

  const toggleExtension = (extId) => {
    playSystemSound(1000, 0.05);
    setActiveExtensions((prev) =>
      prev.includes(extId) ? prev.filter((item) => item !== extId) : [...prev, extId]
    );
  };

  const resetExtensions = () => {
    playSystemSound(1200, 0.1);
    setActiveExtensions(['Python', 'OpenTelemetry', 'React', 'TypeScript', 'Go', 'WebCrypto', 'Docker']);
  };

  const handleEmptyTrash = () => {
    playSystemSound(300, 0.25, 'sawtooth');
    resetExtensions();
    handleLaunchApp('closeAll');
  };

  // Dynamic Wallpaper Pattern Generator
  const getDesktopBgStyle = () => {
    if (desktopPattern === 'teal_grid') {
      return {
        backgroundColor: '#008080',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      };
    }
    if (desktopPattern === 'platinum_gray') {
      return {
        backgroundColor: '#7b8794',
        backgroundImage: 'repeating-linear-gradient(0deg, #626d7a, #626d7a 1px, transparent 1px, transparent 4px)',
        backgroundSize: '100% 4px'
      };
    }
    if (desktopPattern === 'checkerboard') {
      return {
        backgroundColor: '#475569',
        backgroundImage: 'repeating-conic-gradient(#334155 0% 25%, #475569 0% 50%)',
        backgroundSize: '20px 20px'
      };
    }
    if (desktopPattern === 'starfield') {
      return {
        backgroundColor: '#090d16',
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#48c6ff 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 15px 15px'
      };
    }
    // Default Purple System 7 Dots
    return {
      backgroundColor: '#8c71e0',
      backgroundImage: 'radial-gradient(#ffffff 15%, transparent 16%), radial-gradient(#ffffff 15%, transparent 16%)',
      backgroundSize: '24px 24px',
      backgroundPosition: '0 0, 12px 12px'
    };
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        ...getDesktopBgStyle(),
        filter: colorTheme === 'monochrome' ? 'grayscale(100%) contrast(160%)' : 'none'
      }}
    >
      {/* CRT Scanline & Phosphor Shader Overlay */}
      {crtShader && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 99990,
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.28) 50%), linear-gradient(90deg, rgba(255,0,0,0.03), rgba(0,255,0,0.01), rgba(0,0,255,0.03))',
            backgroundSize: '100% 3px, 6px 100%'
          }}
        />
      )}

      {/* 90s Flying Toasters & Starfield Screensaver Overlay */}
      <ScreensaverOverlay isActive={screensaverActive} onWake={() => setScreensaverActive(false)} />

      {/* Top System 7 Apple Menu Bar */}
      <MacMenuBar
        onOpenApp={handleLaunchApp}
        soundMuted={soundMuted}
        toggleSound={() => setSoundMuted(!soundMuted)}
        onTriggerBomb={() => {
          playSystemSound(200, 0.4, 'sawtooth');
          setBombOpen(true);
        }}
        onEmptyTrash={handleEmptyTrash}
        onOpenSpotlight={() => setSpotlightOpen(true)}
        onOpenLaunchpad={() => setLaunchpadOpen(true)}
      />

      {/* Retro Desktop Widgets */}
      <DesktopWidgets playSystemSound={playSystemSound} />

      {/* Desktop Icons */}
      {desktopItemsVisible && <DesktopIcons onOpenApp={handleLaunchApp} onEmptyTrash={handleEmptyTrash} />}

      {/* Desktop Workspace Viewport */}
      <div style={{ position: 'relative', marginTop: '32px', width: '100vw', height: 'calc(100vh - 66px)', overflow: 'hidden' }}>

        {/* About Arjun Sabu Profile Info Window */}
        <MacWindow
          id="about"
          title=" About Arjun Sabu (greninja-op)"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.about}
          onClose={() => handleCloseApp('about')}
          onFocus={() => focusWindow('about')}
          zIndex={windowZIndices.about}
          defaultPos={{ top: 40, left: 240 }}
          defaultSize={{ width: 620, height: 430 }}
          icon=""
        >
          <AboutArjunApp onOpenApp={handleLaunchApp} />
        </MacWindow>

        {/* 🐙 MacGit.app — Retro GitHub TCP/IP Client */}
        <MacWindow
          id="macgit"
          title="🐙 MacGit v1.0 — GitHub TCP/IP Client"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.macgit}
          onClose={() => handleCloseApp('macgit')}
          onFocus={() => focusWindow('macgit')}
          zIndex={windowZIndices.macgit}
          defaultPos={{ top: 55, left: 260 }}
          defaultSize={{ width: 740, height: 490 }}
          icon="🐙"
        >
          <MacGitApp />
        </MacWindow>

        {/* 📝 Notes.app Standalone Application */}
        <MacWindow
          id="notes"
          title="📝 Notes.app — Retro Text Pad"
          themeColor="var(--mac-yellow)"
          isOpen={openWindows.notes}
          onClose={() => handleCloseApp('notes')}
          onFocus={() => focusWindow('notes')}
          zIndex={windowZIndices.notes}
          defaultPos={{ top: 70, left: 280 }}
          defaultSize={{ width: 720, height: 470 }}
          icon="📝"
        >
          <MacNotesApp />
        </MacWindow>

        {/* 1. About This Computer... App */}
        <MacWindow
          id="about_computer"
          title=" About This Computer"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.about_computer}
          onClose={() => handleCloseApp('about_computer')}
          onFocus={() => focusWindow('about_computer')}
          zIndex={windowZIndices.about_computer}
          defaultPos={{ top: 40, left: 60 }}
          defaultSize={{ width: 620, height: 440 }}
          icon=""
        >
          <AboutThisComputerApp />
        </MacWindow>

        {/* Resume.pdf Document Window */}
        <MacWindow
          id="resume"
          title="📄 Resume_ArjunSabu.pdf"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.resume}
          onClose={() => handleCloseApp('resume')}
          onFocus={() => focusWindow('resume')}
          zIndex={windowZIndices.resume}
          defaultPos={{ top: 50, left: 90 }}
          defaultSize={{ width: 680, height: 480 }}
          icon="📄"
        >
          <ResumeMacWindow />
        </MacWindow>

        {/* 2. The Chooser Network Hub App */}
        <MacWindow
          id="chooser"
          title="📡 The Chooser — Network Hub"
          themeColor="var(--mac-cyan)"
          isOpen={openWindows.chooser}
          onClose={() => handleCloseApp('chooser')}
          onFocus={() => focusWindow('chooser')}
          zIndex={windowZIndices.chooser}
          defaultPos={{ top: 75, left: 120 }}
          defaultSize={{ width: 640, height: 420 }}
          icon="📡"
        >
          <TheChooserApp />
        </MacWindow>

        {/* 3. Control Panels Theme & Audio Switcher */}
        <MacWindow
          id="control_panels"
          title="🎛️ Control Panel — System Control Center"
          themeColor="var(--mac-pink)"
          isOpen={openWindows.control_panels}
          onClose={() => handleCloseApp('control_panels')}
          onFocus={() => focusWindow('control_panels')}
          zIndex={windowZIndices.control_panels}
          defaultPos={{ top: 50, left: 200 }}
          defaultSize={{ width: 680, height: 490 }}
          icon="🎛️"
        >
          <ControlPanelsApp
            volume={volume}
            setVolume={setVolume}
            soundMuted={soundMuted}
            toggleSound={() => setSoundMuted(!soundMuted)}
            alertSound={alertSound}
            setAlertSound={setAlertSound}
            playAlertSound={playAlertSound}
            desktopPattern={desktopPattern}
            setDesktopPattern={setDesktopPattern}
            accentColor={accentColor}
            setAccentColor={setAccentColor}
            fontSmoothing={fontSmoothing}
            setFontSmoothing={setFontSmoothing}
            monochromeMode={colorTheme === 'monochrome'}
            toggleMonochrome={() => setColorTheme(colorTheme === 'monochrome' ? 'cyberpop' : 'monochrome')}
            crtShader={crtShader}
            setCrtShader={setCrtShader}
            triggerScreensaver={() => setScreensaverActive(true)}
            windowAnimations={windowAnimations}
            setWindowAnimations={setWindowAnimations}
            desktopItemsVisible={desktopItemsVisible}
            setDesktopItemsVisible={setDesktopItemsVisible}
            resetLayout={resetLayout}
            playSystemSound={playSystemSound}
          />
        </MacWindow>

        {/* 4. Extensions Manager Filter App */}
        <MacWindow
          id="extensions"
          title="🧩 Extensions Manager — Tech Filters"
          themeColor="var(--mac-lime)"
          isOpen={openWindows.extensions}
          onClose={() => handleCloseApp('extensions')}
          onFocus={() => focusWindow('extensions')}
          zIndex={windowZIndices.extensions}
          defaultPos={{ top: 60, left: 100 }}
          defaultSize={{ width: 640, height: 440 }}
          icon="🧩"
        >
          <ExtensionsManagerApp
            activeExtensions={activeExtensions}
            toggleExtension={toggleExtension}
            resetExtensions={resetExtensions}
          />
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
          title="🔒 CFLS.app — Lock-Free Protocol Engine"
          themeColor="var(--mac-lime)"
          isOpen={openWindows.cfls}
          onClose={() => handleCloseApp('cfls')}
          onFocus={() => focusWindow('cfls')}
          zIndex={windowZIndices.cfls}
          defaultPos={{ top: 115, left: 200 }}
          defaultSize={{ width: 640, height: 430 }}
          icon="🔒"
        >
          <CFLSApp />
        </MacWindow>

        {/* Projects Finder Browser */}
        <MacWindow
          id="projects"
          title="📁 Finder — Projects & Codebases"
          themeColor="var(--mac-yellow)"
          isOpen={openWindows.projects}
          onClose={() => handleCloseApp('projects')}
          onFocus={() => focusWindow('projects')}
          zIndex={windowZIndices.projects}
          defaultPos={{ top: 55, left: 220 }}
          defaultSize={{ width: 680, height: 460 }}
          icon="📁"
        >
          <ProjectsMacFinder onOpenApp={handleLaunchApp} activeExtensions={activeExtensions} />
        </MacWindow>

        {/* Tech Stack & Skills Control Panel */}
        <MacWindow
          id="skills"
          title="🎛️ System Control Panel — Tech Stack & RAM"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.skills}
          onClose={() => handleCloseApp('skills')}
          onFocus={() => focusWindow('skills')}
          zIndex={windowZIndices.skills}
          defaultPos={{ top: 80, left: 240 }}
          defaultSize={{ width: 640, height: 440 }}
          icon="🎛️"
        >
          <SkillsMacControlPanel />
        </MacWindow>

        {/* Contact Dialog */}
        <MacWindow
          id="contact"
          title="✉️ System Mail — Connect with Arjun"
          themeColor="var(--mac-pink)"
          isOpen={openWindows.contact}
          onClose={() => handleCloseApp('contact')}
          onFocus={() => focusWindow('contact')}
          zIndex={windowZIndices.contact}
          defaultPos={{ top: 100, left: 260 }}
          defaultSize={{ width: 560, height: 410 }}
          icon="✉️"
        >
          <ContactMacDialog playSystemSound={playSystemSound} />
        </MacWindow>

        {/* Interactive Mac Terminal */}
        <MacWindow
          id="terminal"
          title="💻 System Terminal v7.0 (zsh)"
          themeColor="#000000"
          isOpen={openWindows.terminal}
          onClose={() => handleCloseApp('terminal')}
          onFocus={() => focusWindow('terminal')}
          zIndex={windowZIndices.terminal}
          defaultPos={{ top: 120, left: 280 }}
          defaultSize={{ width: 660, height: 430 }}
          icon="💻"
        >
          <TerminalMac onLaunchApp={handleLaunchApp} />
        </MacWindow>

        {/* Mac Calculator */}
        <MacWindow
          id="calculator"
          title="🧮 Desk Accessory — Calculator"
          themeColor="var(--mac-purple)"
          isOpen={openWindows.calculator}
          onClose={() => handleCloseApp('calculator')}
          onFocus={() => focusWindow('calculator')}
          zIndex={windowZIndices.calculator}
          defaultPos={{ top: 140, left: 300 }}
          defaultSize={{ width: 340, height: 380 }}
          icon="🧮"
        >
          <MacCalculatorApp playSystemSound={playSystemSound} />
        </MacWindow>

        {/* Mac Puzzle Game */}
        <MacWindow
          id="puzzle"
          title="🧩 Desk Accessory — 15-Puzzle Game"
          themeColor="var(--mac-cyan)"
          isOpen={openWindows.puzzle}
          onClose={() => handleCloseApp('puzzle')}
          onFocus={() => focusWindow('puzzle')}
          zIndex={windowZIndices.puzzle}
          defaultPos={{ top: 160, left: 320 }}
          defaultSize={{ width: 360, height: 410 }}
          icon="🧩"
        >
          <MacPuzzleApp playSystemSound={playSystemSound} />
        </MacWindow>

        {/* System Bomb Error Modal */}
        <SystemBombDialog
          isOpen={bombOpen}
          onRestart={() => {
            setBombOpen(false);
            resetLayout();
          }}
        />

        {/* Spotlight Search Overlay */}
        <SpotlightSearch
          isOpen={spotlightOpen}
          onClose={() => setSpotlightOpen(false)}
          onOpenApp={handleLaunchApp}
        />

        {/* Launchpad Fullscreen Overlay */}
        <LaunchpadOverlay
          isOpen={launchpadOpen}
          onClose={() => setLaunchpadOpen(false)}
          onOpenApp={handleLaunchApp}
        />

      </div>

      {/* System 7 Bottom Control Strip / Dock */}
      <MacControlStrip openWindows={openWindows} onFocusApp={focusWindow} onLaunchApp={handleLaunchApp} />
    </div>
  );
}
