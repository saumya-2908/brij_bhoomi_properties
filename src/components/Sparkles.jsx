// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Sparkles() {

  const sparkles = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      size: Math.random() * 5 + 3,   // slightly bigger
      left: Math.random() * 100,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.8, 0],   // FULL brightness in middle
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            background: "radial-gradient(circle, #FFF9C4 0%, #FFD700 50%, transparent 80%)",
          }}
          className="absolute bottom-0 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.9)]"
        />
      ))}
    </div>
  );
}