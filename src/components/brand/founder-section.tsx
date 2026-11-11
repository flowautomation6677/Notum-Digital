"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnicalGridOverlay } from "@/components/brand/geometric-pattern";
import { cn, getWhatsAppLink } from "@/lib/utils";

export interface FounderHighlight {
  label: string;
  description: string;
}

export interface FounderSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  quote: string;
  highlights: FounderHighlight[];
  ctaLabel?: string;
  whatsappMessage?: string;
  imageLayout?: "left" | "right";
  className?: string;
}

export function FounderSection({
  id = "lideranca",
  eyebrow,
  title,
  lead,
  paragraphs,
  quote,
  highlights,
  ctaLabel,
  whatsappMessage,
  imageLayout = "left",
  className,
}: FounderSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const headingId = `${id}-heading`;
  const isImageRight = imageLayout === "right";

  const motionProps = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: prefersReducedMotion ? 0 : 0.45, ease: "easeOut" as const },
  };

  const textMotionProps = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.45,
      delay: prefersReducedMotion ? 0 : 0.08,
      ease: "easeOut" as const,
    },
  };

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "relative py-24 sm:py-32 bg-brand-petroleum border-b border-brand-slate/20 overflow-hidden",
        className
      )}
    >
      <TechnicalGridOverlay className="opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Retrato Editorial (5 colunas) */}
          <motion.div
            {...motionProps}
            className={cn(
              "lg:col-span-5 flex justify-center",
              isImageRight ? "order-1 lg:order-2" : "order-1 lg:order-1"
            )}
          >
            <figure className="relative w-full max-w-[380px] lg:max-w-[420px]">
              {/* Wrapper da foto com moldura arquitetônica deslocada */}
              <div className="relative pr-3 pb-3 sm:pr-4 sm:pb-4">
                <div
                  className="absolute top-3 left-3 right-0 bottom-0 sm:top-4 sm:left-4 rounded-2xl border border-brand-sky/25 bg-brand-navy/35 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Retrato Principal 3:4 */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-brand-sky/40 bg-brand-navy shadow-2xl">
                  <Image
                    src="/images/vinicius-carpes.jpg"
                    alt="Vinicius Carpes, diretor da Notum Digital, em seu escritório"
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-petroleum/90 via-brand-petroleum/25 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Cartão de Identificação Sobreposto */}
              <figcaption className="relative -mt-12 ml-4 mr-1 sm:ml-6 sm:mr-2 z-10 rounded-xl bg-[#141e23]/95 border border-brand-sky/35 px-5 py-4 shadow-xl backdrop-blur-md flex items-center justify-between gap-4">
                <div>
                  <span className="block text-base sm:text-lg font-extrabold tracking-tight text-white">
                    Vinicius Carpes
                  </span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-brand-sky mt-0.5">
                    Diretor · Notum Digital
                  </span>
                </div>
                <div className="relative w-10 h-10 rounded-lg bg-brand-navy border border-brand-sky/30 p-1.5 flex-shrink-0">
                  <Image
                    src="/brand/logo/simbolo.png"
                    alt="Emblema Notum Digital"
                    fill
                    sizes="40px"
                    className="object-contain p-1.5"
                  />
                </div>
              </figcaption>
            </figure>
          </motion.div>

          {/* Coluna Editorial & Copy (7 colunas) */}
          <motion.div
            {...textMotionProps}
            className={cn(
              "lg:col-span-7 space-y-6 text-left",
              isImageRight ? "order-2 lg:order-1" : "order-2 lg:order-2"
            )}
          >
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-sky">
              <span className="w-6 h-px bg-brand-sky" aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>

            <h2
              id={headingId}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white leading-[1.15]"
            >
              {title}
            </h2>

            <p className="text-lg sm:text-xl text-brand-sky font-medium leading-relaxed">
              {lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Citação Editorial */}
            <blockquote className="border-l-2 border-brand-sky pl-5 py-1.5 space-y-2 bg-brand-petroleum-card/40 rounded-r-xl pr-4">
              <p className="text-sm sm:text-base italic text-gray-100 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
              <footer className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-sky">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                <span>Vinicius Carpes · Notum Digital</span>
              </footer>
            </blockquote>

            {/* Pilares de Liderança (layout editorial sem ícones repetidos) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-brand-slate/25">
              {highlights.map((item, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="w-7 h-0.5 bg-brand-sky/70" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-white">{item.label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {ctaLabel && whatsappMessage && (
              <div className="pt-2">
                <Button
                  href={getWhatsAppLink(whatsappMessage)}
                  isExternal
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  {ctaLabel}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
