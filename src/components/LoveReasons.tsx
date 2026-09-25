import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const REASONS = [
  "Tu sonrisa ilumina hasta mis días grises.",
  "Contigo hasta el silencio es una buena conversación.",
  "Amas con una intensidad que inspira.",
  "Tu risa es mi sonido favorito en el mundo.",
  "Me haces querer ser una mejor persona cada día.",
  "Tienes el corazón más generoso que conozco.",
  "Contigo, cualquier plan es el plan perfecto.",
  "Simplemente… eres tú. Y eso lo es todo.",
  "Tu forma de cuidar a quienes amas habla de la belleza de tu corazón.",
  "A tu lado aprendí que el amor también se siente como paz.",
  "Admiro tu fuerza, tu esencia y la mujer maravillosa que eres.",
  "Porque contigo quiero celebrar muchos cumpleaños y construir miles de recuerdos.",
];

export function LoveReasons() {
  const [shown, setShown] = useState(0);
  const done = shown >= REASONS.length;

  return (
    <section className="love-card flex flex-col p-8 sm:p-10">
      <h2 className="font-display text-3xl text-lily-plum sm:text-4xl">
        Razones por las que te amo
      </h2>
      <p className="mt-2 text-muted-foreground">
        Pide otra razón, hay muchas más de las que caben aquí 🌸
      </p>

      <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-6 text-center">
        {shown === 0 ? (
          <p className="font-display text-xl italic text-muted-foreground">
            ¿Empezamos?
          </p>
        ) : (
          <ul className="w-full space-y-3">
            {REASONS.slice(0, shown).map((r, i) => (
              <li
                key={i}
                className="animate-fade-up flex items-start gap-3 rounded-2xl bg-secondary/70 px-5 py-3.5 text-left"
              >
                <Heart className="mt-0.5 h-4 w-4 shrink-0 fill-primary text-primary" />
                <span className="text-[15px] text-lily-plum">{r}</span>
              </li>
            ))}
          </ul>
        )}

        {!done ? (
          <Button
            type="button"
            onClick={() => setShown((s) => s + 1)}
            className="h-auto rounded-full px-7 py-3 shadow-soft hover:scale-105"
          >
            Otra razón 💗 ({shown}/{REASONS.length})
          </Button>
        ) : (
          <p className="animate-fade-up font-display text-lg italic text-primary">
            …y podría seguir toda la vida.
          </p>
        )}
      </div>
    </section>
  );
}
