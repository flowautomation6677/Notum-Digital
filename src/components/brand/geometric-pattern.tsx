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
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern
            id="notum-n-matrix"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            {/* Linha técnica diagonal e formas angulares do N */}
            <path
              d="M 10 70 L 10 10 L 40 70 L 40 10"
              fill="none"
              stroke="#87CEEB"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="10" r="1.5" fill="#87CEEB" />
            <circle cx="40" cy="70" r="1.5" fill="#87CEEB" />
            <line
              x1="55"
              y1="40"
              x2="75"
              y2="40"
              stroke="#708090"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#notum-n-matrix)" />
      </svg>
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
