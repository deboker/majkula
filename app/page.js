'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [stage, setStage] = useState('intro');
  const [muted, setMuted] = useState(false);
  const [missing, setMissing] = useState(false);
  const [imageReady, setImageReady] = useState(false);
  const video = useRef(null);
  const sound = useRef(null);
  const synth = useRef(null);
  const revealTimer = useRef(null);

  useEffect(() => {
    const picture = new Image();
    picture.onload = () => setImageReady(true);
    picture.src = '/media/majkula.png';
    return () => { synth.current?.close(); clearTimeout(revealTimer.current); };
  }, []);

  function startSound() {
    if (muted) return;
    if (sound.current) {
      sound.current.play().catch(() => {});
    }
  }

  function startFallbackSound() {
    if (muted || stage !== 'diving') return;
    // Original underwater suspense sound; replace with your own audio file.
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    synth.current = ctx;
    ctx.resume();
    for (let i = 0; i < 8; i++) {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      const time = ctx.currentTime + i * 0.45;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(55 + i * 5, time);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.22, time + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
      oscillator.connect(gain).connect(ctx.destination);
      oscillator.start(time);
      oscillator.stop(time + 0.42);
    }
  }

  function begin() {
    setMissing(false);
    setStage('diving');
    startSound();
    revealTimer.current = setTimeout(() => setStage('video'), 2800);
  }

  function finish() { setStage('gift'); }

  function toggleSound() {
    if (sound.current) sound.current.muted = !muted;
    if (synth.current) {
      if (!muted) synth.current.suspend();
      else synth.current.resume();
    }
    setMuted(!muted);
    if (video.current) video.current.muted = !muted;
  }

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header><a className="brand" href="/" aria-label="Majkula"><span>▲</span></a><button className="sound" onClick={toggleSound} aria-label={muted ? 'Unmute sound' : 'Mute sound'}>{muted ? '🔇' : '🔊'}</button></header>
      <audio ref={sound} src="/media/fronbondi_skegs-sfx-custom-version-of-jaws-theme-cinematic-sound-effect-461780.mp3" preload="auto" loop muted={muted} onError={startFallbackSound} />

      {(stage === 'intro' || stage === 'diving') && <section className="intro">
        <div className="fin-scene" aria-hidden="true"><div className="fin" /><div className="ripple one" /><div className="ripple two" /><div className="ripple three" /></div>
        <h1>Watch out<br />for your <em>beer.</em></h1>
        <button className="primary" style={{ marginTop: 36 }} onClick={begin} disabled={stage === 'diving'} aria-label="Play the surprise"><span>{stage === 'diving' ? '≈' : '▶'}</span></button>
      </section>}

      {stage === 'video' && <section className="reveal">
        <div className="video-frame">
          {!missing ? <video ref={video} src="/media/miso.mp4" controls autoPlay playsInline muted={muted} onEnded={finish} onError={() => setMissing(true)} /> : <div className="placeholder" role="status" aria-label="Video coming soon"><span>▶</span></div>}
        </div>
        <button className="text-button" onClick={finish} aria-label="View your gift"><span>→</span></button>
      </section>}

      {stage === 'gift' && <section className="reveal gift">
        <div className="picture-frame">{imageReady ? <img src="/media/majkula.png" alt="Majkula — a keepsake gift for Mišo" /> : <div className="placeholder" role="status" aria-label="Image coming soon"><span className="mini-fin">▲</span></div>}</div>
        {imageReady && <a className="primary" href="/media/majkula.png" download="majkula.png" aria-label="Download Majkula"><span>↓</span></a>}
        <button className="text-button" aria-label="Play again" onClick={() => setStage('intro')}><span>↺</span></button>
      </section>}
    </main>
  );
}
