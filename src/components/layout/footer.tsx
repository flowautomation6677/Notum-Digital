import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, ShieldCheck, ArrowUpRight } from "lucide-react";
import {
  NOTUM_ADDRESS,
  NOTUM_CNPJ,
  NOTUM_PHONE_DISPLAY,
  NOTUM_FACEBOOK_URL,
  NOTUM_INSTAGRAM_URL,
  getWhatsAppLink,
} from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#121a1e] border-t border-brand-slate/20 text-gray-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-slate/20">
          {/* Coluna 1: Marca e Posicionamento (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-14 w-52 mb-2">
              <Image
                src="/brand/logo/logo-principal-fundo-escuro.png"
                alt="Notum Tecnologia e Soluções Ltda"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              Notum vem do latim e significa &quot;certificar&quot;. Unimos produtos, assistência técnica especializada e certificação digital em um único parceiro confiável para o seu negócio.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-sky/90 font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-brand-sky" />
              <span>Em atividade desde 1998 · Mesquita - RJ</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-brand-sky transition-colors">
                  Sobre a Notum
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-sky transition-colors">
                  Serviços Especializados
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-brand-sky transition-colors">
                  Por que confiar na Notum
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-brand-sky transition-colors flex items-center gap-1.5">
                  <span>Avaliações no Google</span>
                  <span className="text-amber-400 text-xs">★★★★★</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-sky transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li className="pt-1">
                <Link
                  href="/certificado-digital/"
                  className="inline-flex items-center gap-1 text-brand-sky hover:underline font-medium text-xs"
                >
                  <span>Landing Certificado Digital</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato & Localização (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Atendimento & Endereço
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-sky flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {NOTUM_ADDRESS}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a
                  href={getWhatsAppLink("Olá! Gostaria de falar com o atendimento da Notum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-sky transition-colors text-xs sm:text-sm"
                >
                  {NOTUM_PHONE_DISPLAY} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a
                  href="mailto:contato@notumtecnologia.com.br"
                  className="text-gray-300 hover:text-brand-sky transition-colors text-xs sm:text-sm"
                >
                  contato@notumtecnologia.com.br
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <Instagram className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a
                  href={NOTUM_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-sky transition-colors text-xs sm:text-sm"
                >
                  @notumdigital (Instagram)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-brand-sky flex-shrink-0" />
                <a
                  href={NOTUM_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-sky transition-colors text-xs sm:text-sm"
                >
                  Notum Digital no Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © 2026 Notum Tecnologia e Soluções Ltda — CNPJ {NOTUM_CNPJ}. Todos os direitos reservados.
          </p>
          <p className="text-gray-600">
            Tecnologia, Assistência e Certificação Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
