import { useMemo } from "react";

export default function WeatherEffects({ mode }) {
  const particles = useMemo(() => {
    if (mode === 2) {
      return Array.from({ length: 120 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 0.9 + Math.random(),
      }));
    }

    if (mode === 3) {
      return Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        size: 2 + Math.random() * 5,
      }));
    }

    return [];
  }, [mode]);

  return (
    <>
      {/* SUNLIGHT */}

      {mode === 1 && (
        <>
          <div className="sunGlow" />
          <div className="sunRays" />

          <div className="dust">
            {Array.from({ length: 45 }).map((_, i) => (
              <span
                key={i}
                className="dustParticle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${8 + Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* RAIN */}

      {mode === 2 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          {particles.map((p) => (
            <span
              key={p.id}
              className="rainDrop"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* SNOW */}

      {mode === 3 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
          {particles.map((p) => (
            <span
              key={p.id}
              className="snowFlake"
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}
