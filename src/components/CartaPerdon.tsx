import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PERDON_LINES = [
  "Mi bellota, mi bombón de chocolate, mi negra:",
  "",
  "Hoy quiero pedirte perdón, de corazón, sin excusas.",
  "",
  "Sé que hubo días en que no te escuché como merecías,",
  "que respondí con enojo cuando tú solo querías ser entendida,",
  "y que hice sentir pequeña a la mujer que más admiro.",
  "Eso no está bien, y tú no tenías la culpa de nada.",
  "",
  "Perdóname por mis malas actitudes, por las palabras que dolieron",
  "y por los momentos en que puse mi orgullo por encima de tu corazón.",
  "Me equivoqué, y lo reconozco sin esconderme.",
  "",
  "Aun así, aquí estoy: feliz y agradecido de que me ames,",
  "de que me des otra oportunidad cada día",
  "y de que sigas a mi lado a pesar de mis errores.",
  "",
  "Prometo aprender, escucharte mejor y cuidarte con más paciencia.",
  "No quiero que sientas miedo ni tristeza por mi culpa,",
  "quiero que tu vida conmigo sea un lugar donde florezcas.",
  "",
  "Te amo, mi vida. Gracias por quedarte. 🤍",
  "— Camilo",
];

export function CartaPerdon() {
  const [open, setOpen] = useState(false);

  return (
    <section className="love-card relative overflow-hidden p-8 sm:p-10">
      <h2 className="font-display text-3xl text-lily-plum sm:text-4xl">Una carta de perdón</h2>
      <p className="mt-2 text-muted-foreground">
        {open ? "Con humildad y con el corazón abierto" : "Un momento sincero para ti"}
      </p>

      {!open ? (
        <Button
          type="button"
          variant="secondary"
          onClick={() => setOpen(true)}
          className="mx-auto mt-8 block h-auto rounded-full px-7 py-3 shadow-soft"
        >
          Leer mi disculpa
        </Button>
      ) : (
        <div className="animate-bloom-open mt-8 rounded-2xl border border-border bg-lily-cream/60 p-6 sm:p-8">
          <div className="space-y-1.5 text-center">
            {PERDON_LINES.map((line, i) => (
              <p
                key={i}
                className="animate-fade-up text-[15px] leading-relaxed text-lily-plum sm:text-base"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {line || "\u00A0"}
              </p>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary">
            <Heart className="h-4 w-4 fill-primary" />
            <span className="font-semibold italic">Con todo mi corazón</span>
          </div>
        </div>
      )}
    </section>
  );
}
