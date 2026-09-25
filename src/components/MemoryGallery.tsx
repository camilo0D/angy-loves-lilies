import { useState } from "react";
import { Sparkles } from "lucide-react";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const MEMORIES = [
  {
    src: memory1,
    alt: "Cena romántica a la luz de las velas",
    hidden: "Cada momento contigo sabe mejor que una cena de ensueño.",
  },
  {
    src: memory2,
    alt: "Pareja tomados de la mano al atardecer",
    hidden: "Contigo, cualquier atardecer es el mejor capítulo de nuestra historia.",
  },
  {
    src: memory3,
    alt: "Lirios rosados con regalo y carta",
    hidden: "Prometido: muchos más lirios, cartas y sorpresas para ti.",
  },
];

export function MemoryGallery() {
  const [revealed, setRevealed] = useState<number[]>([]);

  const toggle = (i: number) =>
    setRevealed((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );

  return (
    <section className="love-card p-8 sm:p-10">
      <h2 className="font-display text-3xl text-lily-plum sm:text-4xl">
        Recuerdos con mensajes escondidos
      </h2>
      <p className="mt-2 text-muted-foreground">
        Toca cada foto para descubrir su secreto 🌷
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {MEMORIES.map((m, i) => {
          const isRevealed = revealed.includes(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="group relative block aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-2xl border border-border text-left shadow-card transition-transform duration-300 hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-lily-plum/70 p-4 text-center transition-opacity duration-500 ${
                  isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                }`}
              >
                {isRevealed && (
                  <p className="animate-fade-up font-display text-lg leading-snug text-white">
                    {m.hidden}
                  </p>
                )}
              </div>
              {!isRevealed && (
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 shadow-soft">
                  <Sparkles className="h-4 w-4 text-primary" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
