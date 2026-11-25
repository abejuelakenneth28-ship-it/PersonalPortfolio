"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Drifting red/orange glow over a faded grid, fixed behind the page. */
export function Background() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-1/2"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, var(--glow-1) 0%, transparent 35%), radial-gradient(circle at 70% 70%, var(--glow-2) 0%, transparent 35%)",
        }}
        animate={reduce ? undefined : { x: [0, -30, 30, 0], y: [0, -30, -20, 0], rotate: [0, 1, -1, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
