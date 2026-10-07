"use client";

import React from "react";

interface PatternProps {
  className?: string;
  opacity?: number;
}

export function NotumGeometricPattern({ className = "", opacity = 0.08 }: PatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="w-full h-full"
        style={{
          opacity,
          backgroundImage: "url('/pattern-3.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto"
        }}
      />
    </div>
  );
}

export function TechnicalGridOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none bg-grid-tech ${className}`}
      aria-hidden="true"
    />
  );
}
