import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  Cpu,
  CheckCircle2,
  Lock,
  Search,
  ArrowRight,
  MessageSquare,
  Clock,
  Building2,
  Users,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, FAQItem } from "@/components/ui/accordion";
import { WhatsAppFloating } from "@/components/ui/whatsapp-floating";
import { NotumGeometricPattern, TechnicalGridOverlay } from "@/components/brand/geometric-pattern";
import { GoogleReviewsSection } from "@/components/brand/google-reviews-section";
import { FounderSection } from "@/components/brand/founder-section";
import { HeroAuthorityCard } from "@/components/brand/hero-authority-card";
import { AboutSymbolCard } from "@/components/brand/about-symbol-card";
import { getWhatsAppLink } from "@/lib/utils";

export default function HomePage() {
  const faqList: FAQItem[] = [
    {
      id: 1,
      question: "Quais documentos preciso levar para emitir meu certificado digital?",
      answer:
        "Para e-CPF: Documento de identificação oficial com foto (RG, CNH ou DNI) e comprovante de residência recente. Para e-CNPJ: Contrato Social/Estatuto da empresa e última alteração, Cartão CNPJ e documentos pessoais do responsável legal perante a Receita Federal. Nossa equipe orienta passo a passo.",
    },
    {
      id: 2,
      question: "Quanto tempo leva para emitir um certificado?",
      answer:
        "O processo de emissão e validação é realizado no mesmo dia após o envio e conferência da documentação básica, permitindo que você volte a operar rapidamente sem travar emissões fiscais.",
    },
    {
      id: 3,
      question: "O certificado pode ser emitido remotamente (videoconferência)?",
      answer:
        "Sim! Caso você já possua biometria cadastrada (CNH ou certificado anterior) ou se enquadre nos requisitos das normas ICP-Brasil, a validação pode ser feita 100% por videoconferência com total segurança jurídica.",
    },
    {
      id: 4,
      question: "A Notum atende assistência técnica fora do horário comercial?",
      answer:
        "Para contratos de suporte corporativo e emergências em sistemas críticos, disponibilizamos canais de acionamento dedicados para que sua operação não sofra interrupções prolongadas.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-petroleum text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section
          id="hero-section"
          className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-gradient-brand-subtle"
        >
          {/* Background Textures */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#131b2c]/70 via-[#18242A]/25 to-[#131b2c]/45 pointer-events-none"
            aria-hidden="true"
          />
          <NotumGeometricPattern opacity={0.16} />
          <TechnicalGridOverlay className="opacity-25" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Coluna Texto (7 Colunas no Desktop) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Badge de Autoridade */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/60 border border-brand-sky/30 text-brand-sky text-[11px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-sky flex-shrink-0" aria-hidden="true" />
                  <span>Em atividade desde 1998 · Mesquita (RJ) e todo o Brasil</span>
                </div>

                {/* H1 Principal */}
                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.08]">
                  Certificação, tecnologia e{" "}
                  <span className="text-brand-sky">confiança</span>{" "}
                  para o seu negócio
                </h1>

                {/* Subtítulo Parágrafo */}
                <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                  A Notum Tecnologia une produtos, assistência técnica e certificação digital em um único parceiro confiável para empresas que não podem errar.
                </p>

                {/* Ações de Conversão */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    href={getWhatsAppLink("Olá! Gostaria de falar com um especialista da Notum Tecnologia.")}
                    isExternal
                    variant="primary"
                    size="lg"
                    className="rounded-xl font-bold"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Falar com um especialista
                  </Button>

                  <Button
                    href="/certificado-digital/"
                    variant="secondary"
                    size="lg"
                    className="rounded-xl bg-brand-petroleum/60 border-white/25 hover:border-brand-sky/50 hover:bg-brand-petroleum-card backdrop-blur-sm"
                    leftIcon={<Lock className="w-4 h-4 text-brand-sky" />}
                  >
                    Emitir Certificado Digital
                  </Button>
                </div>

                {/* Microcopy de Confiança */}
                <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" aria-hidden="true" />
                    <span>Atendimento técnico direto</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" aria-hidden="true" />
                    <span>e-CNPJ e e-CPF com agilidade</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" aria-hidden="true" />
                    <span>Suporte sem call center</span>
                  </div>
                </div>
              </div>

              {/* Coluna Visual Lateral (5 Colunas) - Card Glassmórfico com Escudo */}
              <div className="lg:col-span-5 relative">
                <HeroAuthorityCard />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. SOBRE A NOTUM
        ========================================================= */}
        <section
          id="sobre"
          className="relative py-24 sm:py-32 bg-[#111921] border-t border-b border-brand-slate/20 overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Asset Visual: Card Glassmórfico com Lupa Luminosa */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <AboutSymbolCard />
              </div>

              {/* Conteúdo Textual */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-sky/90">
                  <Search className="w-4 h-4 text-brand-sky" aria-hidden="true" />
                  <span>História &amp; Propósito</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-white">
                  Por que &quot;Notum&quot;
                </h2>

                <p className="text-lg sm:text-xl text-brand-sky font-medium leading-relaxed">
                  Notum vem do latim e significa &quot;certificar&quot;. É a base de tudo o que fazemos: garantir confiabilidade e autenticidade em cada produto, atendimento e certificado que entregamos.
                </p>

                <p className="text-base text-gray-300 leading-relaxed">
                  Do suporte técnico do dia a dia à emissão de certificados digitais que sua empresa não pode ficar sem, a Notum existe para eliminar a insegurança da tecnologia no seu negócio. Em atividade desde 1998, com escritório em Mesquita (RJ) e atendimento para todo o Brasil.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-[#131e28]/90 border border-white/15 hover:border-brand-sky/35 shadow-lg backdrop-blur-md transition-colors">
                    <div
                      className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/35 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-brand-sky flex-shrink-0" aria-hidden="true" />
                      <span>Sede Própria no RJ</span>
                    </h3>
                    <p className="text-xs text-gray-300/85 leading-relaxed">
                      Localizada em Mesquita (RJ), com atendimento presencial e suporte online para empresas de todo o Brasil.
                    </p>
                  </div>

                  <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-b from-white/[0.07] to-[#131e28]/90 border border-white/15 hover:border-brand-sky/35 shadow-lg backdrop-blur-md transition-colors">
                    <div
                      className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-brand-sky/35 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                      <Award className="w-4 h-4 text-brand-sky flex-shrink-0" aria-hidden="true" />
                      <span>Desde 1998</span>
                    </h3>
                    <p className="text-xs text-gray-300/85 leading-relaxed">
                      Quase 3 décadas de solidez contínua, compromisso ético e suporte sem rodeios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. SERVIÇOS
        ========================================================= */}
        <section id="servicos" className="py-24 sm:py-32 bg-brand-petroleum relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
                <span>Pilares de Atuação</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                O que a Notum faz por você
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Três frentes, um único padrão de confiança.
              </p>
            </div>

            {/* Grid Assimétrico de Serviços com Destaque no Carro-Chefe */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Pilar 1: Certificado Digital (Card Destacado com Glow e Badge) */}
              <div className="lg:col-span-1 relative flex flex-col rounded-2xl bg-gradient-to-b from-[#1c2e39] to-brand-petroleum-card p-8 border-2 border-brand-sky/60 shadow-xl shadow-brand-sky/10 justify-between">
                {/* Badge Destaque */}
                <div className="absolute -top-3.5 left-6 bg-brand-sky text-brand-petroleum px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  Mais Procurado
                </div>

                <div className="space-y-6 pt-2">
                  <div className="w-14 h-14 rounded-xl bg-brand-sky/15 border border-brand-sky/40 flex items-center justify-center text-brand-sky">
                    <Lock className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Certificado Digital
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Emissão de certificados digitais (e-CNPJ, e-CPF e outros) com atendimento direto e suporte em toda a documentação, sem deixar sua empresa travada por um certificado vencido.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-brand-slate/20">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" />
                      <span>Validação rápida presencial ou por videoconferência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" />
                      <span>e-CNPJ A1, A3 e e-CPF para pessoa física</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button
                    href="/certificado-digital/"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Emitir meu certificado
                  </Button>
                </div>
              </div>

              {/* Pilar 2: Assistência Técnica */}
              <div className="lg:col-span-1 flex flex-col rounded-2xl bg-brand-petroleum-card p-8 border border-brand-slate/30 shadow-lg justify-between hover:border-brand-slate/60 transition-all">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-navy border border-brand-slate/40 flex items-center justify-center text-brand-sky">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Assistência Técnica
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Suporte técnico especializado para equipamentos e sistemas da sua empresa, com diagnóstico transparente e prazo combinado.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-brand-slate/20">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" />
                      <span>Manutenção preventiva e corretiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" />
                      <span>Diagnóstico claro, sem termos técnicos confusos</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button
                    href={getWhatsAppLink("Olá! Gostaria de solicitar suporte ou assistência técnica para minha empresa.")}
                    isExternal
                    variant="secondary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Solicitar suporte
                  </Button>
                </div>
              </div>

              {/* Pilar 3: Produtos de Tecnologia */}
              <div className="lg:col-span-1 flex flex-col rounded-2xl bg-brand-petroleum-card p-8 border border-brand-slate/30 shadow-lg justify-between hover:border-brand-slate/60 transition-all">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-navy border border-brand-slate/40 flex items-center justify-center text-brand-sky">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Produtos de Tecnologia
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Equipamentos e soluções tecnológicas selecionadas para o seu negócio, garantindo desempenho e procedência.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-xs text-gray-300 pt-2 border-t border-brand-slate/20">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" />
                      <span>Hardware, suprimentos e soluções homologadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-sky flex-shrink-0" />
                      <span>Consultoria na escolha certa para sua demanda</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Button
                    href={getWhatsAppLink("Olá! Gostaria de conhecer o catálogo de produtos de tecnologia da Notum.")}
                    isExternal
                    variant="secondary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Ver produtos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. DIFERENCIAIS (FAIXA COM GRADIENTE OFICIAL NOTUM)
        ========================================================= */}
        <section
          id="diferenciais"
          className="relative py-24 bg-gradient-brand text-white overflow-hidden"
        >
          {/* Lupa em Traço Fino de Marca D'água ao Fundo */}
          <div
            className="absolute -right-16 -bottom-16 w-96 h-96 opacity-10 pointer-events-none select-none"
            aria-hidden="true"
          >
            <Image
              src="/brand/logo/simbolo.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-sky bg-brand-navy/60 px-3 py-1 rounded border border-brand-sky/30">
                Padrão Notum
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Por que empresas confiam na Notum
              </h2>
              <p className="text-base sm:text-lg text-gray-200">
                Construímos relacionamentos de longo prazo baseados em clareza, suporte imediato e responsabilidade técnica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Diferencial 1 */}
              <div className="bg-brand-navy/80 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="text-brand-sky font-bold text-2xl">01</div>
                <h4 className="font-bold text-lg text-white">Atendimento Direto</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Atendimento técnico direto, sem enrolação. Você fala com quem entende do assunto e resolve sua pendência.
                </p>
              </div>

              {/* Diferencial 2 */}
              <div className="bg-brand-navy/80 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="text-brand-sky font-bold text-2xl">02</div>
                <h4 className="font-bold text-lg text-white">Processos Claros</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Processos de certificação claros, sem letras miúdas. Você sabe exatamente o que precisa e quando fica pronto.
                </p>
              </div>

              {/* Diferencial 3 */}
              <div className="bg-brand-navy/80 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="text-brand-sky font-bold text-2xl">03</div>
                <h4 className="font-bold text-lg text-white">Parceiro Único</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Um único parceiro para tecnologia, suporte e certificação: menos fornecedores e faturas para gerenciar.
                </p>
              </div>

              {/* Diferencial 4 */}
              <div className="bg-brand-navy/80 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="text-brand-sky font-bold text-2xl">04</div>
                <h4 className="font-bold text-lg text-white">Quase 30 Anos</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Presença consolidada desde 1998, com experiência acumulada em soluções tecnológicas corporativas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. QUEM ESTÁ À FRENTE (VINICIUS CARPES)
        ========================================================= */}
        <FounderSection
          id="lideranca"
          imageLayout="right"
          eyebrow="Liderança & Atendimento"
          title="Quem está à frente da Notum Digital"
          lead="Sob a direção de Vinicius Carpes, a Notum une rigor técnico e atendimento próximo, da certificação digital à assistência técnica e soluções em TI."
          paragraphs={[
            "Tecnologia corporativa exige confiança. Quando um certificado vence, um equipamento para ou sua empresa precisa estruturar a operação, ninguém quer perder horas repetindo o mesmo problema para atendentes diferentes.",
            "À frente da Notum Digital, Vinicius Carpes mantém um padrão simples e raro no setor: atendimento técnico direto, diagnóstico transparente e compromisso real com prazos. Com escritório físico em Mesquita (RJ) e atendimento para todo o Brasil, a operação dá continuidade a uma história construída desde 1998. Você sabe exatamente com quem está falando e quem responde pelo resultado.",
          ]}
          quote="Tecnologia precisa trabalhar a favor do seu negócio. Nosso compromisso é entregar segurança, clareza e um atendimento em que você pode confiar de verdade."
          highlights={[
            {
              label: "Atendimento direto",
              description: "Contato objetivo com quem entende da parte técnica e resolve.",
            },
            {
              label: "Visão integrada",
              description: "Certificação digital, suporte especializado e equipamentos no mesmo lugar.",
            },
            {
              label: "Todo o Brasil",
              description: "Atendimento online em todo o país e escritório físico em Mesquita (RJ).",
            },
          ]}
          ctaLabel="Falar com a equipe da Notum"
          whatsappMessage="Olá! Vim pelo site da Notum Digital e gostaria de atendimento com a equipe do Vinicius Carpes."
        />

        {/* =========================================================
            6. PROVA SOCIAL & AVALIAÇÕES GOOGLE 5 ESTRELAS
        ========================================================= */}
        <GoogleReviewsSection
          id="avaliacoes"
          title="O que nossos clientes dizem no Google"
          subtitle="Empresas, contabilidades e profissionais que contam com a nossa agilidade técnica e atendimento nota 10 diariamente."
          whatsappMessage="Olá! Vi as avaliações no Google e gostaria de falar com a equipe da Notum."
        />

        {/* =========================================================
            7. PERGUNTAS FREQUENTES
        ========================================================= */}
        <section id="faq" className="py-24 sm:py-32 bg-brand-petroleum">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
                Tire suas dúvidas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Perguntas frequentes
              </h2>
              <p className="text-base text-gray-300">
                Esclarecimentos sobre certificação digital, prazos e assistência técnica.
              </p>
            </div>

            <Accordion items={faqList} defaultOpenId={1} />
          </div>
        </section>

        {/* =========================================================
            8. CTA FINAL
        ========================================================= */}
        <section
          id="final-cta-section"
          className="relative py-24 sm:py-32 bg-gradient-brand text-white overflow-hidden"
        >
          {/* Textura Geométrica e Lupa ao Fundo */}
          <NotumGeometricPattern opacity={0.15} />
          <div
            className="absolute -left-20 -bottom-20 w-80 h-80 opacity-10 pointer-events-none select-none"
            aria-hidden="true"
          >
            <Image
              src="/brand/logo/simbolo.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/70 border border-brand-sky/40 text-brand-sky text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Atendimento Direto & Imediato</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Pronto para ter mais confiança na sua tecnologia?
            </h2>

            <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Fale agora com a Notum e resolva certificação, suporte ou equipamentos com um único parceiro.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={getWhatsAppLink("Olá! Vim pelo site institucional da Notum e gostaria de atendimento agora.")}
                isExternal
                variant="primary"
                size="xl"
                leftIcon={<MessageSquare className="w-5 h-5 text-brand-petroleum" />}
              >
                Falar no WhatsApp
              </Button>
            </div>

            <p className="text-xs text-gray-300">
              Resposta rápida em horário comercial · Sem robôs de atendimento
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
