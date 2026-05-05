"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

const AnimatedGridBackground = () => {
  const lines = useMemo(() => {
    const arr = [];
    const count = 26;
    for (let i = 0; i < count; i++) {
      const angle = i % 2 === 0 ? 45 : -45;
      arr.push({
        id: `l-${i}`,
        angle,
        top: `${(i * 9.7) % 110 - 5}%`,
        left: `${(i * 13.3) % 110 - 5}%`,
        length: 25 + ((i * 7) % 35),
        delay: (i % 10) * 1.2,
        duration: 9 + (i % 6) * 0.3,
        thickness: i % 5 === 0 ? 1.5 : 1,
      });
    }
    return arr;
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #0A0F1C 0%, #050A14 70%, #03060F 100%)",
      }}
    >
      {/* Soft cyan glow wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.06),transparent_60%)]" />

      {/* Lines */}
      <div className="absolute inset-0" style={{ filter: "blur(0.4px)" }}>
        {lines.map((l) => (
          <div
            key={l.id}
            className="absolute overflow-hidden"
            style={{
              top: l.top,
              left: l.left,
              width: `${l.length}vmax`,
              height: `${l.thickness}px`,
              transform: `rotate(${l.angle}deg)`,
              transformOrigin: "left center",
            }}
          >
            <motion.span
              className="block h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(186,230,253,0.85) 50%, transparent 100%)",
                boxShadow: "0 0 8px rgba(56,189,248,0.45)",
                willChange: "transform",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: l.duration,
                delay: l.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        ))}
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(3,6,15,0.85)_100%)]" />
    </div>
  );
};

export default AnimatedGridBackground;
