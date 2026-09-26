import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { EnchantedLily } from "@/components/EnchantedLily";

/**
 * Sección con el mismo lirio encantado de la intro, para que
 * puedas verlo florecer de nuevo cuando quieras.
 */
export function GrowingLily() {
  const [run, setRun] = useState(0);

  return (
    <section
      className="lily-night relative flex min-h-[680px] flex-col items-center justify-center overflow-hidden rounded-4xl border border-border px-5 py-12 text-center shadow-card sm:min-h-[760px] sm:px-10"
    >
      <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.22em] text-lily-soft">Mira cómo nace</p>
      <h2 className="relative z-10 mt-2 font-display text-4xl text-lily-soft sm:text-5xl">Un lirio para Angy</h2>

      <div className="relative z-10 mt-5 w-full max-w-[380px] sm:max-w-[460px]">
        <EnchantedLily playKey={run} />
      </div>

      <p className="relative z-10 mt-4 max-w-md font-display text-xl italic text-lily-soft/90 sm:text-2xl">
        Nuestro amor también florece: despacio, luminoso y cada día más hermoso.
      </p>
      <Button
        type="button"
        variant="secondary"
        onClick={() => setRun((r) => r + 1)}
        className="relative z-10 mt-6 rounded-full px-6"
      >
        <RotateCcw /> Ver de nuevo
      </Button>
    </section>
  );
}
