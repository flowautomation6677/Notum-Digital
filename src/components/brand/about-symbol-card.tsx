"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function AboutSymbolCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      className="relative flex items-center justify-center pb-5"
    >
      {/* Halo atmosférico suave ao redor do card */}
      <div
        className="absolute -inset-8 rounded-full bg-gradient-to-tr from-brand-navy/40 via-brand-sky/20 to-brand-sky/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Partículas sutis de luz ao redor do quadrado */}
      <span
        className="absolute -top-4 left-6 w-1.5 h-1.5 rounded-full bg-brand-sky/70 blur-[0.5px] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute top-10 -left-6 w-1 h-1 rounded-full bg-white/55 pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute -top-2 right-10 w-1 h-1 rounded-full bg-brand-sky/60 pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-brand-sky/45 blur-[1px] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-8 -left-4 w-1.5 h-1.5 rounded-full bg-brand-sky/50 blur-[0.5px] pointer-events-none"
        aria-hidden="true"
      />
      <span
        className="absolute bottom-2 right-4 w-1 h-1 rounded-full bg-white/50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Card Quadrado Glassmórfico */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.11] via-[#1b2b38]/80 to-[#121c25]/95 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] backdrop-blur-xl flex items-center justify-center p-8">
        {/* Linha especular no topo do card */}
        <div
          className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Luz interna atrás da lupa */}
        <div
          className="absolute inset-8 rounded-full bg-brand-sky/20 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Ilustração Luminosa: Lupa Notum com N */}
        <svg
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-[0_14px_30px_rgba(135,206,235,0.35)]"
          role="img"
          aria-label="Símbolo luminoso da Notum: lupa com a letra N"
        >
          <defs>
            <radialGradient id="notum-about-lens-fill" cx="42%" cy="38%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="48%" stopColor="#87CEEB" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#191A34" stopOpacity="0.45" />
            </radialGradient>
            <linearGradient id="notum-about-ring" x1="38" y1="36" x2="152" y2="152" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="42%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#3B6D94" />
            </linearGradient>
            <linearGradient id="notum-about-ring-inner" x1="48" y1="46" x2="144" y2="142" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0F4FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="notum-about-handle" x1="138" y1="138" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="50%" stopColor="#4F8DB8" />
              <stop offset="100%" stopColor="#264366" />
            </linearGradient>
            <linearGradient id="notum-about-n" x1="66" y1="62" x2="128" y2="128" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#D6F1FD" />
              <stop offset="100%" stopColor="#87CEEB" />
            </linearGradient>
            <linearGradient id="notum-about-sheen" x1="46" y1="44" x2="112" y2="104" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Lente translúcida de vidro */}
          <circle
            cx="96"
            cy="94"
            r="54"
            fill="url(#notum-about-lens-fill)"
          />

          {/* Reflexo de vidro curvo no canto superior esquerdo */}
          <path
            d="M49 84 C52 58 74 41 101 42 C110 42.4 118 45 124 49 C104 52 72 68 55 98 C51 94 49 89 49 84 Z"
            fill="url(#notum-about-sheen)"
          />

          {/* Aro externo da lupa com brilho 3D */}
          <circle
            cx="96"
            cy="94"
            r="56"
            stroke="url(#notum-about-ring)"
            strokeWidth="10"
          />
          <circle
            cx="96"
            cy="94"
            r="51"
            stroke="url(#notum-about-ring-inner)"
            strokeWidth="1.5"
          />

          {/* Colo e Cabo 3D chanfrado da lupa */}
          <line
            x1="133"
            y1="131"
            x2="145"
            y2="143"
            stroke="url(#notum-about-ring)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <line
            x1="145"
            y1="143"
            x2="173"
            y2="171"
            stroke="url(#notum-about-handle)"
            strokeWidth="17"
            strokeLinecap="round"
          />
          <line
            x1="147"
            y1="140"
            x2="175"
            y2="168"
            stroke="#E0F4FF"
            strokeOpacity="0.6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Símbolo "N" oficial estilizado no centro da lente */}
          <path
            d="M72 118 V80 H82 L113 111"
            stroke="url(#notum-about-n)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M79 70 L110 101 H120 V68"
            stroke="url(#notum-about-n)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Brilhos especulares sutis */}
          <path
            d="M54 52 L55.3 56.2 L59.5 57.5 L55.3 58.8 L54 63 L52.7 58.8 L48.5 57.5 L52.7 56.2 Z"
            fill="#FFFFFF"
            fillOpacity="0.9"
          />
          <path
            d="M140 132 L141 135.2 L144.2 136.2 L141 137.2 L140 140.4 L139 137.2 L135.8 136.2 L139 135.2 Z"
            fill="#E0F4FF"
            fillOpacity="0.85"
          />
        </svg>

        {/* Pílula Flutuante Inferior */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#131e28]/95 border border-brand-sky/40 px-5 py-2 rounded-full shadow-xl backdrop-blur-md text-[11px] font-bold text-brand-sky tracking-widest uppercase">
          Origem do Nome: Notum
        </div>
      </div>
    </motion.div>
  );
}
