"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

interface WhatsAppFloatingProps {
  message?: string;
  heroElementId?: string;
  finalCtaElementId?: string;
}

export function WhatsAppFloating({
  message = "Olá! Vim pelo site da Notum Tecnologia e gostaria de mais informações.",
  heroElementId = "hero-section",
  finalCtaElementId = "final-cta-section",
}: WhatsAppFloatingProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById(heroElementId);
      const finalCtaEl = document.getElementById(finalCtaElementId);

      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = heroEl ? heroEl.offsetHeight - 100 : 400;

      let isPastHero = scrollY > heroHeight;
      let isInsideFinalCta = false;

      if (finalCtaEl) {
        const ctaRect = finalCtaEl.getBoundingClientRect();
        // Se a seção de CTA final está no viewport
        if (ctaRect.top < window.innerHeight - 100 && ctaRect.bottom > 100) {
          isInsideFinalCta = true;
        }
      }

      setIsVisible(isPastHero && !isInsideFinalCta);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroElementId, finalCtaElementId]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center"
        >
          <a
            href={getWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar conosco no WhatsApp"
            className="group flex items-center gap-2.5 bg-[#25D366] text-[#0d2a1a] hover:bg-[#2fe671] active:bg-[#20bd5a] font-bold px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-[#25D366]/30 border-2 border-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d2a1a] fill-current" />
            <span className="hidden sm:inline text-sm font-semibold tracking-wide text-[#0d2a1a]">
              Falar no WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
