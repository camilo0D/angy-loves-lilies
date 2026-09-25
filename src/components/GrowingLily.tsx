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
      className="relative flex flex-col items-center overflow-hidden rounded-4xl border border-border px-5 py-10 text-center shadow-card sm:px-10"
      style={{ background: "oklch(0.16 0.035 275)" }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lily-soft">Mira cómo nace</p>
      <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">Un lirio para ti</h2>

      <div className="mt-4">
        <EnchantedLily playKey={run} className="max-w-[260px] sm:max-w-[300px]" />
      </div>

      <p className="mt-2 max-w-sm font-display text-xl italic text-lily-soft/90">
        Así crecen los buenos sentimientos: despacio, con raíces y con cuidado.
      </p>
      <Button
        type="button"
        variant="secondary"
        onClick={() => setRun((r) => r + 1)}
        className="mt-6 rounded-full px-6"
      >
        <RotateCcw /> Ver de nuevo
      </Button>
    </section>
  );
}
