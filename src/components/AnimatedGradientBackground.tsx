import React from "react";

export default function AnimatedGradientBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1800px] max-h-[1800px] animate-gradient-move"
        style={{
          background: "radial-gradient(circle at 50% 50%, #3b82f6 0%, #8b5cf6 60%, #a78bfa 100%)",
          opacity: 0.35,
          filter: "blur(32px)",
        }}
      />
    </div>
  );
}