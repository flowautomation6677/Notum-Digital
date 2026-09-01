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
          className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-brand-subtle"
        >
          {/* Background Textures */}
          <NotumGeometricPattern opacity={0.12} />
          <TechnicalGridOverlay />

          {/* Símbolo d'água grande no fundo à direita com baixa opacidade */}
          <div
            className="absolute -right-20 -bottom-20 w-[480px] h-[480px] lg:w-[680px] lg:h-[680px] opacity-[0.04] pointer-events-none select-none"
            aria-hidden="true"
          >
            <Image
              src="/brand/logo/simbolo-fundo-escuro.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Coluna Texto (7 Colunas no Desktop) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Badge de Autoridade */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-sky/10 border border-brand-sky/30 text-brand-sky text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-brand-sky" />
                  <span>Em atividade desde 1998 · Mesquita - RJ</span>
                </div>

                {/* H1 Principal Rigoroso */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Certificação, tecnologia e{" "}
                  <span className="text-brand-sky underline decoration-brand-sky/40 underline-offset-4">
                    confiança
                  </span>{" "}
                  para o seu negócio
                </h1>

                {/* Subtítulo Parágrafo */}
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                  A Notum Tecnologia une produtos, assistência técnica e certificação digital em um único parceiro confiável — para empresas que não podem errar.
                </p>

                {/* Ações de Conversão */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    href={getWhatsAppLink("Olá! Gostaria de falar com um especialista da Notum Tecnologia.")}
                    isExternal
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Falar com um especialista
                  </Button>

                  <Button
                    href="/certificado-digital/"
                    variant="secondary"
                    size="lg"
                    leftIcon={<Lock className="w-4 h-4 text-brand-sky" />}
                  >
                    Emitir Certificado Digital
                  </Button>
                </div>

                {/* Microcopy de Confiança */}
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-400 border-t border-brand-slate/20">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                    <span>Atendimento técnico direto</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                    <span>e-CNPJ e e-CPF com agilidade</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-sky" />
                    <span>Suporte sem call center</span>
                  </div>
                </div>
              </div>

              {/* Coluna Visual Lateral (5 Colunas) — Vitrine de Autoridade Notum */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Card Central com Efeito Tech */}
                  <div className="relative bg-brand-petroleum-card/90 rounded-2xl border border-brand-sky/30 p-8 shadow-2xl backdrop-blur-md">
                    {/* Header do Card */}
                    <div className="flex items-center justify-between pb-6 border-b border-brand-slate/20">
                      <div className="relative h-9 w-32">
                        <Image
                          src="/brand/logo/logo-horizontal-fundo-escuro.png"
                          alt="Logo Notum"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded bg-brand-navy border border-brand-sky/30 text-brand-sky">
                        NOTUM SYS v2.4
                      </span>
                    </div>

                    {/* Símbolo em Destaque */}
                    <div className="py-8 flex flex-col items-center justify-center text-center">
                      <div className="relative w-28 h-28 mb-4 p-4 rounded-2xl bg-brand-navy border border-brand-sky/40 shadow-inner">
                        <Image
                          src="/brand/logo/simbolo.png"
                          alt="Símbolo Notum Tecnologia"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <h2 className="text-xl font-bold tracking-tight text-white">
                        Confiabilidade & Autenticidade
                      </h2>
                      <p className="text-xs text-gray-300 mt-1 max-w-xs">
                        &quot;Notum&quot;, do latim: <strong>certificar</strong>. Investigação técnica rigorosa e processos sem fricção.
                      </p>
                    </div>

                    {/* Destaques Rápidos */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-slate/20">
                      <div className="p-3 rounded-lg bg-brand-petroleum/60 border border-brand-slate/30">
                        <span className="block text-xl font-bold text-brand-sky">27+</span>
                        <span className="text-[11px] text-gray-400">Anos de atuação</span>
                      </div>
                      <div className="p-3 rounded-lg bg-brand-petroleum/60 border border-brand-slate/30">
                        <span className="block text-xl font-bold text-brand-sky">100%</span>
                        <span className="text-[11px] text-gray-400">Suporte direto</span>
                      </div>
                    </div>
                  </div>

                  {/* Detalhe de Borda Decorativa */}
                  <div
                    className="absolute -inset-1 rounded-2xl bg-gradient-brand opacity-20 blur-sm -z-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. SOBRE A NOTUM
        ========================================================= */}
        <section
          id="sobre"
          className="relative py-24 sm:py-32 bg-[#141e23] border-t border-b border-brand-slate/20 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Asset Visual: Símbolo Isolado Grande */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-petroleum-card to-brand-petroleum p-8 border border-brand-sky/30 shadow-2xl flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/brand/logo/simbolo-fundo-escuro.png"
                      alt="Símbolo Notum - Lupa e N"
                      fill
                      className="object-contain drop-shadow-[0_10px_20px_rgba(135,206,235,0.15)]"
                    />
                  </div>
                  {/* Etiqueta Flutuante de Origem */}
                  <div className="absolute -bottom-4 bg-brand-petroleum border border-brand-sky/40 px-4 py-2 rounded-full shadow-lg text-xs font-semibold text-brand-sky tracking-wider uppercase">
                    Origem do Nome: Notum
                  </div>
                </div>
              </div>

              {/* Conteúdo Textual */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
                  <Search className="w-4 h-4 text-brand-sky" />
                  <span>História & Propósito</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Por que &quot;Notum&quot;
                </h2>

                <p className="text-lg sm:text-xl text-brand-sky font-medium leading-relaxed">
                  Notum vem do latim e significa &quot;certificar&quot;. É a base de tudo o que fazemos: garantir confiabilidade e autenticidade em cada produto, atendimento e certificado que entregamos.
                </p>

                <p className="text-base text-gray-300 leading-relaxed">
                  Do suporte técnico do dia a dia à emissão de certificados digitais que sua empresa não pode ficar sem, a Notum existe para eliminar a insegurança da tecnologia no seu negócio. Em atividade desde 1998, com sede em Mesquita (RJ).
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-brand-petroleum-card border border-brand-slate/30">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-brand-sky" />
                      Sede Própria no RJ
                    </h4>
                    <p className="text-xs text-gray-400">
                      Localizada em Mesquita, atendendo empresas e profissionais de toda a região e online.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-petroleum-card border border-brand-slate/30">
                    <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                      <Award className="w-4 h-4 text-brand-sky" />
                      Desde 1998
                    </h4>
                    <p className="text-xs text-gray-400">
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
                      Emissão de certificados digitais (e-CNPJ, e-CPF e outros) com atendimento direto e suporte em toda a documentação — sem deixar sua empresa travada por um certificado vencido.
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
                  Atendimento técnico direto, sem enrolação — você fala com quem entende do assunto e resolve sua pendência.
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
                  Um único parceiro para tecnologia, suporte e certificação — menos fornecedores e faturas para gerenciar.
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
            5. PROVA SOCIAL & AVALIAÇÕES GOOGLE 5 ESTRELAS
        ========================================================= */}
        <GoogleReviewsSection
          id="avaliacoes"
          title="O que nossos clientes dizem no Google"
          subtitle="Empresas, contabilidades e profissionais que contam com a nossa agilidade técnica e atendimento nota 10 diariamente."
          whatsappMessage="Olá! Vi as avaliações no Google e gostaria de falar com a equipe da Notum."
        />

        {/* =========================================================
            6. PERGUNTAS FREQUENTES
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
            7. CTA FINAL
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
