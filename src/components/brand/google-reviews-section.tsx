import React from "react";
import Link from "next/link";
import { Star, ExternalLink, ShieldCheck, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NOTUM_GOOGLE_MAPS_URL,
  NOTUM_GOOGLE_RATING,
  NOTUM_GOOGLE_REVIEWS_COUNT,
  getWhatsAppLink,
} from "@/lib/utils";

export interface GoogleReviewItem {
  id: string;
  author: string;
  badge: string;
  rating: number;
  isLocalGuide?: boolean;
  timeAgo: string;
  text: string;
  initials: string;
  avatarBg: string;
  highlight?: boolean;
}

export const REAL_GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: "giovani-marques",
    author: "Giovani Marques",
    badge: "Local Guide · 19 avaliações",
    rating: 5,
    isLocalGuide: true,
    timeAgo: "2 semanas atrás",
    text: "Me atende a anos, super indico ! Faço todos os certificados dos meus clientes com eles . Nota 10 !",
    initials: "GM",
    avatarBg: "bg-amber-600",
    highlight: true,
  },
  {
    id: "mariane-barbosa",
    author: "Mariane Barbosa",
    badge: "3 avaliações",
    rating: 5,
    timeAgo: "2 semanas atrás",
    text: "validação do seu certificado de forma rápida, atendimento de milhões",
    initials: "MB",
    avatarBg: "bg-purple-600",
  },
  {
    id: "guilherme-carpes",
    author: "Guilherme Carpes",
    badge: "1 avaliação",
    rating: 5,
    timeAgo: "2 semanas atrás",
    text: "Agilidade e excelência na emissão de certificado digital!",
    initials: "GC",
    avatarBg: "bg-blue-600",
  },
  {
    id: "guilherme-henrique",
    author: "Guilherme Henrique",
    badge: "3 avaliações",
    rating: 5,
    timeAgo: "2 semanas atrás",
    text: "Atendimento, suporte e segurança aos clientes, uma empresa diferenciada, recomendo a todos!!",
    initials: "GH",
    avatarBg: "bg-teal-600",
  },
  {
    id: "natan-silva",
    author: "natan silva ferreira",
    badge: "3 avaliações · 1 foto",
    rating: 5,
    timeAgo: "2 semanas atrás",
    text: "Ótimo atendimento, super atenciosos, fui atendido por uma mulher super simpática, inteligente batemos um super papo.",
    initials: "NS",
    avatarBg: "bg-emerald-700",
  },
];

function GoogleGIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface GoogleReviewsSectionProps {
  id?: string;
  badgeText?: string;
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
}

export function GoogleReviewsSection({
  id = "avaliacoes-google",
  badgeText = "Avaliações Reais no Google",
  title = "Nota 5.0 no Google · Aprovado por quem utiliza",
  subtitle = "Veja a experiência de contadores, empresas e clientes que confiam na Notum Digital para emissão de certificados e tecnologia.",
  whatsappMessage = "Olá! Vi as avaliações 5 estrelas da Notum no Google e gostaria de atendimento.",
}: GoogleReviewsSectionProps) {
  return (
    <section id={id} className="relative py-20 sm:py-28 bg-[#131d23] border-b border-brand-slate/20 overflow-hidden">
      {/* Luz ambiente sutil */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-sky/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/80 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider shadow-sm">
            <GoogleGIcon className="w-4 h-4" />
            <span>{badgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Card Resumo do Perfil Google (Google Business Profile Badge) */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-brand-petroleum-card to-brand-navy/90 border border-brand-sky/30 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Informações da Empresa no Google */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md shrink-0 border border-gray-100">
                <GoogleGIcon className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                    NOTUM DIGITAL
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Verificado
                  </span>
                </div>
                <p className="text-xs text-gray-300">
                  Certificado Digital RJ · Mesquita, RJ
                </p>
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="text-2xl font-black text-white">{NOTUM_GOOGLE_RATING}</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">
                    ({NOTUM_GOOGLE_REVIEWS_COUNT} avaliações)
                  </span>
                </div>
              </div>
            </div>

            {/* Botão de Ação Google Maps */}
            <div className="shrink-0 w-full sm:w-auto">
              <a
                href={NOTUM_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-gray-200"
              >
                <GoogleGIcon className="w-4 h-4" />
                <span>Conferir no Google</span>
                <ExternalLink className="w-4 h-4 text-gray-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos Reais do Google */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                review.highlight
                  ? "bg-gradient-to-b from-[#1b2b35] to-brand-petroleum-card border-brand-sky/50 shadow-xl shadow-brand-sky/5 ring-1 ring-brand-sky/30"
                  : "bg-brand-petroleum-card/90 border-brand-slate/30 hover:border-brand-sky/30 shadow-lg"
              }`}
            >
              {/* Marca d'água Google */}
              <div className="absolute top-5 right-5 opacity-20 pointer-events-none">
                <GoogleGIcon className="w-5 h-5" />
              </div>

              <div className="space-y-4">
                {/* Cabeçalho do Card: Avatar, Nome e Local Guide */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-inner shrink-0`}
                  >
                    {review.initials}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-white text-sm sm:text-base leading-tight">
                      {review.author}
                    </h4>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs text-gray-400">{review.badge}</span>
                      {review.isLocalGuide && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                          Local Guide
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Estrelas + Tag Novo / Verificado */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-gray-400">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Texto do Depoimento */}
                <p className="text-sm text-gray-200 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Rodapé do Card */}
              <div className="pt-4 mt-4 border-t border-brand-slate/20 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1 text-brand-sky text-[11px] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Avaliação 5 Estrelas
                </span>
                <span className="text-[11px] text-gray-500">Google Maps</span>
              </div>
            </div>
          ))}

          {/* Card de CTA para Avaliar ou Conhecer */}
          <div className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-navy to-[#182832] border border-brand-sky/40 shadow-xl space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-sky/20 flex items-center justify-center text-brand-sky">
                <Star className="w-5 h-5 fill-brand-sky text-brand-sky" />
              </div>
              <h4 className="font-extrabold text-xl text-white">
                Sua empresa merece esse padrão de atendimento
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Junte-se às dezenas de empresas e contadores que emitem seus certificados com agilidade total e nota máxima.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Button
                href={getWhatsAppLink(whatsappMessage)}
                isExternal
                variant="primary"
                size="md"
                className="w-full justify-center shadow-lg"
                leftIcon={<MessageSquare className="w-4 h-4 text-brand-petroleum" />}
              >
                Falar com a Notum
              </Button>
              <a
                href={NOTUM_GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors py-1"
              >
                <span>Ver todas as avaliações no perfil do Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé da Seção com Microcopys de Confiança */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-gray-400 border-t border-brand-slate/20">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-sky" />
            <span>100% de avaliações 5 estrelas no Google</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-sky" />
            <span>Validações presenciais e por videoconferência</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-sky" />
            <span>Atendimento humano e suporte imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
}
