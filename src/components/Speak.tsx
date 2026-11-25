import { useEffect, useState } from 'react';
import { speak, stopSpeaking } from '../lib/ai/tts';

let activeSetter: ((v: boolean) => void) | null = null;

/** Play button for German text. */
export function SpeakButton({
  text,
  dialog,
  rate,
  label,
  className = '',
}: {
  text: string;
  dialog?: boolean;
  rate?: number;
  label?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [err, setErr] = useState('');
  useEffect(() => () => {
    if (activeSetter === setPlaying) stopSpeaking();
  }, []);
  const toggle = async () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    activeSetter?.(false);
    activeSetter = setPlaying;
    setPlaying(true);
    setErr('');
    try {
      await speak(text, { dialog, rate, onError: (e) => setErr(e.message) });
    } catch (e) {
      setErr((e as Error).message);
    } finally {
      setPlaying(false);
    }
  };
  return (
    <>
      <button type="button" className={`btn-speak ${playing ? 'playing' : ''} ${className}`} onClick={toggle} title="Прослушать">
        {playing ? '⏹' : '🔊'}
        {label && <span>{label}</span>}
      </button>
      {err && <span className="tiny warn"> {err}</span>}
    </>
  );
}
