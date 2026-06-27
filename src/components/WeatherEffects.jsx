import { useEffect, useState } from "react";

export default function WeatherEffects({ mode }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (mode < 2) {
      setParticles([]);
      return;
    }

    const count = mode === 2 ? 80 : mode === 3 ? 200 : 120;

    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration:
        mode === 2
          ? Math.random() * 2 + 4
          : mode === 3
            ? Math.random() * 1 + 1
            : Math.random() * 4 + 5,
      size: mode === 4 ? Math.random() * 4 + 2 : Math.random() * 10 + 10,
    }));

    setParticles(generated);
  }, [mode]);

  if (mode < 2) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-[-50px]"
          style={{
            left: `${particle.left}%`,
            animation: `fall ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {mode === 4 ? (
            <div
              style={{
                width: particle.size,
                height: particle.size,
              }}
              className="rounded-full bg-white opacity-80"
            />
          ) : (
            <div
              style={{
                height: particle.size,
              }}
              className={`w-[1px] ${
                mode === 2 ? "bg-white/30" : "bg-white/60"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
