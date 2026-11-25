import { useStore } from './store';

let ctx: AudioContext | null = null;

function ac(): AudioContext | null {
  try {
    ctx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', vol = 0.18) {
  const c = ac();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.value = freq;
  const t = c.currentTime + start;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

const enabled = () => useStore.getState().settings.sounds !== false;

/** Small synthesized sound effects – no audio files needed. */
export const sfx = {
  correct() {
    if (!enabled()) return;
    tone(880, 0, 0.12, 'triangle');
    tone(1320, 0.08, 0.18, 'triangle');
  },
  wrong() {
    if (!enabled()) return;
    tone(220, 0, 0.18, 'sawtooth', 0.08);
    tone(180, 0.12, 0.22, 'sawtooth', 0.07);
  },
  flip() {
    if (!enabled()) return;
    tone(660, 0, 0.06, 'sine', 0.08);
  },
  success() {
    if (!enabled()) return;
    [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.25, 'triangle', 0.16));
  },
  fanfare() {
    if (!enabled()) return;
    [523, 523, 784, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.3, 'square', 0.07));
  },
};
