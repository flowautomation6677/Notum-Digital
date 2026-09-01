import React from "react";
import Image from "next/image";
import { NOTUM_ADDRESS, NOTUM_CNPJ, NOTUM_PHONE_DISPLAY, getWhatsAppLink } from "@/lib/utils";

export function LPFooter() {
  return (
    <footer className="bg-[#10171b] border-t border-brand-slate/20 text-gray-400 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="relative h-10 w-40 mx-auto opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src="/brand/logo/logo-horizontal-fundo-escuro.png"
            alt="Notum Tecnologia"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-400">
          <span>{NOTUM_ADDRESS}</span>
          <span className="hidden sm:inline text-brand-slate">•</span>
          <a
            href={getWhatsAppLink("Olá! Vim pela página de Certificado Digital e gostaria de suporte.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-sky hover:underline"
          >
            WhatsApp: {NOTUM_PHONE_DISPLAY}
          </a>
          <span className="hidden sm:inline text-brand-slate">•</span>
          <a
            href="mailto:contato@notumtecnologia.com.br"
            className="hover:text-brand-sky transition-colors"
          >
            contato@notumtecnologia.com.br
          </a>
        </div>

        <p className="text-xs text-gray-500 pt-2 border-t border-brand-slate/10">
          © 2026 Notum Tecnologia e Soluções Ltda — CNPJ {NOTUM_CNPJ}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
