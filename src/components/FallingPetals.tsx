import { useEffect, useMemo, useState } from "react";

interface PetalSpec {
  left: string;
  size: number;
  duration: string;
  delay: string;
  lavender: boolean;
}

function makePetals(count: number): PetalSpec[] {
  return Array.from({ length: count }, (_, i) => ({
    left: `${(i * 97) % 100}%`,
    size: 12 + ((i * 7) % 14),
    duration: `${9 + ((i * 3) % 8)}s`,
    delay: `${(i * 1.7) % 12}s`,
    lavender: i % 4 === 1,
  }));
}

export function FallingPetals({ count = 18 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const petals = useMemo(() => makePetals(count), [count]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className={`petal ${p.lavender ? "petal--lavender" : ""}`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 1.35,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
