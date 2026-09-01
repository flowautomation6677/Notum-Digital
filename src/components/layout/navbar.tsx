"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-petroleum/95 backdrop-blur-md border-b border-brand-slate/20 py-3 shadow-xl"
          : "bg-gradient-to-b from-brand-petroleum/90 via-brand-petroleum/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-44 sm:w-52">
              <Image
                src="/brand/logo/logo-horizontal-fundo-escuro.png"
                alt="Notum Tecnologia - Logotipo"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-gray-300 hover:text-brand-sky transition-colors"
            >
              Sobre a Notum
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-gray-300 hover:text-brand-sky transition-colors"
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              className="text-sm font-medium text-gray-300 hover:text-brand-sky transition-colors"
            >
              Diferenciais
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-gray-300 hover:text-brand-sky transition-colors"
            >
              FAQ
            </a>
            <Link
              href="/certificado-digital/"
              className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded border border-brand-sky/40 text-brand-sky bg-brand-sky/10 hover:bg-brand-sky/20 transition-all"
            >
              LP Certificado Digital
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={getWhatsAppLink("Olá! Vim pelo site institucional da Notum e gostaria de falar com um especialista.")}
              isExternal
              variant="primary"
              size="sm"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href={getWhatsAppLink("Olá! Vim pelo site institucional da Notum.")}
              isExternal
              variant="primary"
              size="sm"
              className="px-3 py-1.5 text-xs"
            >
              WhatsApp
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-brand-slate/20 focus:outline-none focus:ring-2 focus:ring-brand-sky"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-brand-slate/20 flex flex-col gap-3 bg-brand-petroleum-card rounded-xl p-4 shadow-2xl border border-brand-slate/30">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-200 hover:text-brand-sky p-2 rounded-lg hover:bg-brand-slate/20"
            >
              Sobre a Notum
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-200 hover:text-brand-sky p-2 rounded-lg hover:bg-brand-slate/20"
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-200 hover:text-brand-sky p-2 rounded-lg hover:bg-brand-slate/20"
            >
              Diferenciais
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-200 hover:text-brand-sky p-2 rounded-lg hover:bg-brand-slate/20"
            >
              FAQ
            </a>
            <Link
              href="/certificado-digital/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-brand-sky p-2 rounded-lg bg-brand-sky/10 border border-brand-sky/30 flex items-center justify-between"
            >
              <span>Landing: Certificado Digital</span>
              <ShieldCheck className="w-4 h-4" />
            </Link>
            <div className="pt-2">
              <Button
                href={getWhatsAppLink("Olá! Vim pelo site institucional da Notum e gostaria de falar com um especialista.")}
                isExternal
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Falar com um especialista
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
