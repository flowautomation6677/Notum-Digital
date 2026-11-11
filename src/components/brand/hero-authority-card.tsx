"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function HeroAuthorityCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.1,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-[400px] lg:max-w-[430px]"
    >
      {/* Halo atmosférico suave atrás do card */}
      <div
        className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-brand-sky/20 via-brand-navy/35 to-brand-sky/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Card Glassmórfico Principal */}
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.12] via-[#1b2b38]/80 to-[#141f2a]/95 p-7 sm:p-9 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.65)] backdrop-blur-xl">
        {/* Linha especular no topo do card */}
        <div
          className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/75 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Luz interna atrás do escudo */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-brand-sky/25 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Ilustração 3D: Certificado Digital + Escudo com Cadeado */}
        <div className="relative mx-auto w-44 h-40 sm:w-48 sm:h-44 flex items-center justify-center mb-5">
          <svg
            viewBox="0 0 220 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_16px_32px_rgba(135,206,235,0.34)]"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="notum-cert-bg" x1="26" y1="42" x2="128" y2="114" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.42" />
                <stop offset="55%" stopColor="#264D73" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#191A34" stopOpacity="0.75" />
              </linearGradient>
              <linearGradient id="notum-cert-border" x1="26" y1="42" x2="128" y2="114" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0F4FF" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="notum-shield-outer" x1="78" y1="20" x2="178" y2="158" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0F4FF" />
                <stop offset="45%" stopColor="#87CEEB" />
                <stop offset="100%" stopColor="#285880" />
              </linearGradient>
              <linearGradient id="notum-shield-body" x1="84" y1="26" x2="172" y2="151" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#62BCE4" />
                <stop offset="48%" stopColor="#254C73" />
                <stop offset="100%" stopColor="#191A34" />
              </linearGradient>
              <linearGradient id="notum-shield-sheen" x1="84" y1="26" x2="145" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#87CEEB" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="notum-lock-shackle" x1="115" y1="51" x2="141" y2="74" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#87CEEB" />
              </linearGradient>
              <linearGradient id="notum-lock-body" x1="108" y1="73" x2="148" y2="106" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F2FAFF" />
                <stop offset="55%" stopColor="#BAE6FB" />
                <stop offset="100%" stopColor="#72B8D4" />
              </linearGradient>
            </defs>

            {/* Cartão Digital de Certificado atrás à esquerda */}
            <g transform="rotate(-7 76 80)">
              <rect
                x="26"
                y="46"
                width="102"
                height="68"
                rx="12"
                fill="url(#notum-cert-bg)"
                stroke="url(#notum-cert-border)"
                strokeWidth="1.5"
              />
              <circle cx="48" cy="70" r="9" fill="#87CEEB" fillOpacity="0.35" stroke="#E0F4FF" strokeOpacity="0.6" strokeWidth="1" />
              <rect x="64" y="64" width="34" height="4.5" rx="2.25" fill="#E0F4FF" fillOpacity="0.65" />
              <rect x="64" y="73" width="24" height="4" rx="2" fill="#87CEEB" fillOpacity="0.45" />
              <rect x="39" y="89" width="42" height="4" rx="2" fill="#E0F4FF" fillOpacity="0.4" />
              <rect x="39" y="97" width="28" height="4" rx="2" fill="#87CEEB" fillOpacity="0.3" />
            </g>

            {/* Escudo 3D Principal */}
            <path
              d="M128 20 L178 39 V84 C178 121 153 147 128 158 C103 147 78 121 78 84 V39 L128 20 Z"
              fill="url(#notum-shield-outer)"
            />
            <path
              d="M128 25.5 L172.5 42.5 V84 C172.5 117.5 150.5 141 128 151.5 C105.5 141 83.5 117.5 83.5 84 V42.5 L128 25.5 Z"
              fill="url(#notum-shield-body)"
              stroke="#E0F4FF"
              strokeOpacity="0.35"
              strokeWidth="1"
            />

            {/* Reflexo de vidro no canto superior esquerdo do escudo */}
            <path
              d="M83.5 42.5 L128 25.5 L154 35.5 C127 56 102 82 83.5 111 V42.5 Z"
              fill="url(#notum-shield-sheen)"
            />

            {/* Cadeado Luminoso Central */}
            <path
              d="M115 74 V64 C115 56.82 120.82 51 128 51 C135.18 51 141 56.82 141 64 V74"
              stroke="url(#notum-lock-shackle)"
              strokeWidth="5.5"
              strokeLinecap="round"
            />
            <rect
              x="108"
              y="72"
              width="40"
              height="34"
              rx="8.5"
              fill="url(#notum-lock-body)"
              stroke="#FFFFFF"
              strokeOpacity="0.7"
              strokeWidth="1.2"
            />
            <circle cx="128" cy="86" r="3.8" fill="#18242A" />
            <path d="M126.2 88 H129.8 L130.6 96.5 H125.4 Z" fill="#18242A" />

            {/* Pontos de brilho especular */}
            <path
              d="M82 36 L83.4 40.6 L88 42 L83.4 43.4 L82 48 L80.6 43.4 L76 42 L80.6 40.6 Z"
              fill="#E0F4FF"
              fillOpacity="0.9"
            />
            <path
              d="M167 118 L168 121.2 L171.2 122.2 L168 123.2 L167 126.4 L166 123.2 L162.8 122.2 L166 121.2 Z"
              fill="#87CEEB"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        {/* Título e Definição da Marca */}
        <div className="relative text-center space-y-2.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Confiabilidade &amp; Autenticidade
          </h2>
          <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed max-w-xs mx-auto">
            &quot;Notum&quot;, do latim: <strong className="text-white font-semibold">certificar</strong>. Investigação técnica rigorosa e processos sem fricção.
          </p>
        </div>

        {/* Destaques Numéricos Inferiores */}
        <div className="relative mt-7 pt-6 border-t border-white/10 grid grid-cols-2 gap-3.5">
          <div className="rounded-xl bg-[#0e1922]/75 border border-white/10 px-4 py-3.5 text-left transition-colors hover:border-brand-sky/35">
            <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              27+
            </span>
            <span className="block text-xs text-gray-300/85 mt-0.5">
              Anos de atuação
            </span>
          </div>
          <div className="rounded-xl bg-[#0e1922]/75 border border-white/10 px-4 py-3.5 text-left transition-colors hover:border-brand-sky/35">
            <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              100%
            </span>
            <span className="block text-xs text-gray-300/85 mt-0.5">
              Suporte direto
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

