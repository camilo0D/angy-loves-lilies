import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import cancion from "@/assets/cancion-angy.asset.json";

/**
 * Botón flotante que reproduce la canción de Angy.
 * Los navegadores exigen un gesto del usuario para iniciar el audio,
 * así que la música arranca al tocar el botón (o al primer toque de la página).
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const audio = new Audio(cancion.url);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    const tryAutoplay = () => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          setHint(false);
        })
        .catch(() => {
          /* espera el toque del usuario */
        });
      window.removeEventListener("pointerdown", tryAutoplay);
    };
    window.addEventListener("pointerdown", tryAutoplay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", tryAutoplay);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
    setHint(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      {hint && (
        <span className="animate-fade-up rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-semibold text-lily-plum shadow-soft backdrop-blur">
          Toca para escuchar tu canción 🎶
        </span>
      )}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pausar la canción" : "Reproducir la canción"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-110"
      >
        {playing && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-primary/40"
          />
        )}
        {playing ? <Pause className="h-6 w-6" /> : <Music className="h-6 w-6" />}
      </button>
    </div>
  );
}
