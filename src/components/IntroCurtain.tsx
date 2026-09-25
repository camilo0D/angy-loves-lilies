import { useEffect, useState } from "react";
import { EnchantedLily } from "@/components/EnchantedLily";

/**
 * Pantalla de entrada: un lirio encantado florece bajo una cúpula
 * de cristal, en una noche estrellada. Se puede saltar tocando.
 */
export function IntroCurtain() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const close = () => {
    setLeaving(true);
    setTimeout(() => setVisible(false), 900);
  };

  useEffect(() => {
    const t = setTimeout(close, 6200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={close}
      className={`intro-curtain fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center bg-[oklch(0.14_0.035_275)] px-6 ${leaving ? "intro-curtain--leave" : ""}`}
      role="dialog"
      aria-label="Introducción"
    >
      <EnchantedLily playKey="intro" className="max-w-[240px] sm:max-w-[280px]" />
      <p className="intro-text mt-6 font-display text-3xl text-white sm:text-4xl" style={{ animationDelay: "4.6s" }}>
        Para ti, Angy
      </p>
      <p className="intro-text-late mt-2 text-sm text-white/70" style={{ animationDelay: "5.3s" }}>
        Toca para continuar
      </p>
    </div>
  );
}
