"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string | number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
  className?: string;
  defaultOpenId?: string | number;
}

export function Accordion({ items, className = "", defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | number | null>(defaultOpenId ?? null);

  const toggleItem = (id: string | number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const itemId = `faq-item-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-xl border transition-all duration-200 overflow-hidden",
              isOpen
                ? "bg-brand-petroleum-card border-brand-sky/60 shadow-lg shadow-brand-sky/5"
                : "bg-brand-petroleum-card/60 border-brand-slate/30 hover:border-brand-slate/60 hover:bg-brand-petroleum-card/80"
            )}
          >
            <button
              id={itemId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-inset"
            >
              <span className="text-base sm:text-lg font-semibold text-white pr-4">
                {item.question}
              </span>
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300",
                  isOpen
                    ? "bg-brand-sky text-brand-petroleum border-brand-sky rotate-180"
                    : "bg-brand-petroleum/60 text-brand-slate border-brand-slate/40"
                )}
              >
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={itemId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-brand-slate/20">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
