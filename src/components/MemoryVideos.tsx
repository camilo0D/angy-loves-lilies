import { Heart } from "lucide-react";

const VIDEOS = [
  { src: "/videos/video-1.mp4", label: "Nuestro video 1" },
  { src: "/videos/video-2.mp4", label: "Nuestro video 2" },
];

export function MemoryVideos() {
  return (
    <section className="love-card p-8 sm:p-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary">Momentos en movimiento</p>
      <h2 className="mt-2 text-center font-display text-4xl text-lily-plum sm:text-5xl">Nuestros videos</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
        Porque algunos recuerdos hay que verlos moverse otra vez.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {VIDEOS.map((v) => (
          <div key={v.src} className="overflow-hidden rounded-3xl border border-border bg-background shadow-card">
            <video
              src={v.src}
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] w-full bg-black object-cover"
            />
            <div className="flex items-center justify-center gap-2 p-3 text-sm text-lily-plum">
              <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
              {v.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
