import { useState } from "react";
import { Heart } from "lucide-react";

const LETTER_LINES = [
  "Angy,",
  "Hoy el mundo celebra el día en que llegaste a él,",
  "y yo celebro cada día en que llegaste a mi vida.",
  "",
  "Eres mi lugar favorito, mi calma y mi alegría.",
  "Que este nuevo año te regale todo lo que sueñas,",
  "y que siempre tenga un lugar a tu lado para verte florecer.",
  "",
  "Feliz cumpleaños, mi amor. 🤍",
];

export function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="love-card relative overflow-hidden p-8 sm:p-10">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lily-soft/60 blur-2xl"
      />
      <h2 className="font-display text-3xl text-lily-plum sm:text-4xl">
        Una carta para ti
      </h2>
      <p className="mt-2 text-muted-foreground">
        {open ? "Leída con el corazón" : "Toca el sobre para abrirla"}
      </p>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir la carta de amor"
          className="animate-glow-pulse group relative mx-auto mt-10 block w-full max-w-xs cursor-pointer rounded-2xl"
        >
          {/* Sobre */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary shadow-soft">
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart className="h-14 w-14 fill-primary text-primary animate-heartbeat" />
            </div>
            {/* Solapa */}
            <div
              className="absolute inset-x-0 top-0 h-1/2 origin-top bg-primary/90 transition-transform duration-500 group-hover:scale-y-105"
              style={{
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                borderRadius: "1rem 1rem 0 0",
              }}
            />
          </div>
          <span className="mt-4 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft">
            Abrir mi carta 💌
          </span>
        </button>
      ) : (
        <div className="animate-bloom-open mt-8 rounded-2xl border border-border bg-lily-cream/60 p-6 sm:p-8">
          <div className="space-y-1.5 text-center">
            {LETTER_LINES.map((line, i) => (
              <p
                key={i}
                className="animate-fade-up text-[15px] leading-relaxed text-lily-plum sm:text-base"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                {line || "\u00A0"}
              </p>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary">
            <Heart className="h-4 w-4 fill-primary" />
            <span className="font-semibold italic">Con todo mi amor</span>
          </div>
        </div>
      )}
    </section>
  );
}
