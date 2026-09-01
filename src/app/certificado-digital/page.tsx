import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  FileCheck,
  Video,
  Lock,
  Clock,
  Building,
  HelpCircle,
} from "lucide-react";
import { LPFooter } from "@/components/layout/lp-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, FAQItem } from "@/components/ui/accordion";
import { WhatsAppFloating } from "@/components/ui/whatsapp-floating";
import { NotumGeometricPattern, TechnicalGridOverlay } from "@/components/brand/geometric-pattern";
import { getWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certificado Digital e-CNPJ e e-CPF Emitido Hoje | Notum Tecnologia",
  description:
    "Emita ou renove seu certificado digital e-CNPJ ou e-CPF sem fila e sem burocracia. Atendimento direto e validação rápida por videoconferência ou presencial em Mesquita - RJ.",
  openGraph: {
    title: "Emita seu Certificado Digital Hoje | Notum Tecnologia",
    description:
      "e-CNPJ e e-CPF sem burocracia. Atendimento humanizado e emissão no mesmo dia com a Notum Tecnologia.",
    url: "https://notumtecnologia.com.br/certificado-digital/",
  },
};

export default function CertificadoDigitalPage() {
  const lpFaqList: FAQItem[] = [
    {
      id: "lp-faq-1",
      question: "É seguro emitir meu certificado digital com a Notum?",
      answer:
        "Totalmente seguro. Nossas emissões obedecem aos mais rigorosos padrões da ICP-Brasil, possuindo plena validade jurídica nacional para emissão de NF-e, acesso aos sistemas da Receita Federal, eSocial, Conectividade Social e assinaturas eletrônicas avançadas.",
    },
    {
      id: "lp-faq-2",
      question: "Quais documentos preciso levar para emitir meu certificado?",
      answer:
        "Para e-CPF: Documento de identidade com foto (RG, CNH) e comprovante de residência. Para e-CNPJ: Contrato Social ou última alteração consolidada, Cartão CNPJ e os documentos do responsável legal cadastrado na Receita. Nossa equipe orienta tudo antes da validação.",
    },
    {
      id: "lp-faq-3",
      question: "Posso fazer a validação sem sair da empresa?",
      answer:
        "Sim! Se você já possui biometria cadastrada na base nacional ou em certificado anterior, a validação pode ser realizada 100% online por videoconferência em poucos minutos.",
    },
    {
      id: "lp-faq-4",
      question: "Quanto tempo leva do pedido até o certificado pronto?",
      answer:
        "Assim que a documentação é recebida e conferida, agendamos a validação de imediato e o certificado fica ativo para emissão no mesmo dia, sem travar o faturamento da sua empresa.",
    },
    {
      id: "lp-faq-5",
      question: "Quanto custa?",
      answer:
        "Oferecemos condições sob medida para e-CNPJ e e-CPF nos modelos A1 (instalado diretamente no computador/servidor) e A3 (em cartão ou token criptográfico). Fale conosco no WhatsApp para tirar dúvidas e receber seu atendimento sem compromisso.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-brand-petroleum text-white flex flex-col selection:bg-brand-sky selection:text-brand-petroleum">
      {/* Top Header Simplificado da LP (Foco em Conversão) */}
      <header className="w-full bg-brand-petroleum/90 backdrop-blur-md border-b border-brand-slate/20 py-4 px-4 sm:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative h-9 w-40 sm:w-48 block">
            <Image
              src="/brand/logo/logo-horizontal-fundo-escuro.png"
              alt="Notum Tecnologia"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-xs text-gray-300 font-medium">
              Dúvidas sobre documentação?
            </span>
            <Button
              href={getWhatsAppLink("Olá! Tenho dúvidas sobre a emissão de certificado digital e gostaria de atendimento.")}
              isExternal
              variant="primary"
              size="sm"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* =========================================================
            1. HERO SECTION (ASSIMÉTRICO 7/5)
        ========================================================= */}
        <section
          id="hero-section"
          className="relative min-h-[85vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-gradient-brand-subtle"
        >
          {/* Textura Notum e Grid Técnico */}
          <NotumGeometricPattern opacity={0.12} />
          <TechnicalGridOverlay />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Coluna Texto (7 Colunas) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sky/15 border border-brand-sky/40 text-brand-sky text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Emissão Rápida e Homologada ICP-Brasil</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Seu certificado digital, emitido hoje —{" "}
                  <span className="text-brand-sky underline decoration-brand-sky/40 underline-offset-4">
                    sem fila, sem enrolação
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                  e-CNPJ e e-CPF com validação simples e suporte de quem entende do assunto. A Notum cuida da burocracia para você continuar faturando, emitindo nota e assinando documentos sem travar.
                </p>

                {/* Bloco de Conversão Direto */}
                <div className="pt-2 space-y-3">
                  <Button
                    href={getWhatsAppLink("Olá! Preciso emitir meu certificado digital agora (e-CNPJ / e-CPF).")}
                    isExternal
                    variant="primary"
                    size="xl"
                    className="w-full sm:w-auto"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                  >
                    Emitir meu certificado agora
                  </Button>

                  <div>
                    <a
                      href={getWhatsAppLink("Olá! Já sei qual certificado preciso e gostaria de agilizar pelo WhatsApp.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-brand-sky hover:underline font-medium"
                    >
                      <span>Já sei o que preciso → falar direto no WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Linha de Confiança (Microcopy) */}
                <div className="pt-4 border-t border-brand-slate/20 text-xs text-gray-300 flex flex-wrap gap-x-4 gap-y-2">
                  <span className="font-semibold text-white">
                    Em atividade desde 1998, em Mesquita (RJ)
                  </span>
                  <span className="text-brand-slate">•</span>
                  <span>Atendimento direto, sem call center</span>
                  <span className="text-brand-slate">•</span>
                  <span>Videoconferência ou Presencial</span>
                </div>
              </div>

              {/* Coluna Visual (5 Colunas) — Lupa em Traço Fino Sangrando */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md bg-brand-petroleum-card/90 rounded-2xl border border-brand-sky/40 p-8 shadow-2xl backdrop-blur-md space-y-6">
                  <div className="flex items-center justify-between border-b border-brand-slate/20 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[11px] font-mono text-brand-sky font-semibold tracking-wider">
                      CERTIFICADOR NOTUM
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-brand-navy border border-brand-sky/30">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-brand-sky flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white text-sm">e-CNPJ A1 / A3</h4>
                          <p className="text-xs text-gray-300">Para empresas, emissão de NF-e e Receita</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-brand-navy border border-brand-sky/30">
                      <div className="flex items-center gap-3">
                        <FileCheck className="w-5 h-5 text-brand-sky flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white text-sm">e-CPF A1 / A3</h4>
                          <p className="text-xs text-gray-300">Para pessoa física, assinaturas e procurações</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-brand-sky/10 border border-brand-sky/30 text-center">
                    <span className="text-xs font-semibold text-brand-sky block">
                      Validação Rápida · Sem Espera em Fila
                    </span>
                  </div>
                </div>

                {/* Símbolo Sangrando no Fundo */}
                <div
                  className="absolute -right-24 -bottom-16 w-80 h-80 opacity-[0.06] pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <Image
                    src="/brand/logo/simbolo.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. AGITAÇÃO DA DOR: UM CERTIFICADO VENCIDO TRAVA MAIS DO QUE VOCÊ IMAGINA
        ========================================================= */}
        <section className="py-24 bg-[#141e23] border-t border-b border-brand-slate/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-300 bg-red-950/40 px-3 py-1 rounded border border-red-800/40">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span>Risco Operacional Imediato</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                Um certificado vencido trava mais do que você imagina
              </h2>
            </div>

            {/* Grid 2x2 de Consequências */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Consequência 1 */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-brand-petroleum-card border border-brand-slate/30">
                <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    Nota fiscal eletrônica bloqueada
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Sua empresa para de faturar e expedir mercadorias de forma imediata.
                  </p>
                </div>
              </div>

              {/* Consequência 2 */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-brand-petroleum-card border border-brand-slate/30">
                <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    Acesso suspenso a sistemas do governo
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Bloqueio no eSocial, Receita Federal, FGTS e participação em licitações.
                  </p>
                </div>
              </div>

              {/* Consequência 3 */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-brand-petroleum-card border border-brand-slate/30">
                <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    Assinatura de contratos travada
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Perda de prazos judiciais, contratos societários e fechamento de novos negócios.
                  </p>
                </div>
              </div>

              {/* Consequência 4 */}
              <div className="flex items-start gap-4 p-5 sm:p-6 rounded-xl bg-brand-petroleum-card border border-brand-slate/30">
                <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">
                    Movimentação bancária PJ bloqueada
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Impossibilidade de validar transações em bancos que exigem certificado digital ativo.
                  </p>
                </div>
              </div>
            </div>

            {/* Fechamento com CTA */}
            <div className="mt-12 text-center space-y-4 max-w-xl mx-auto">
              <p className="text-sm sm:text-base text-gray-300 font-medium">
                Quanto mais você adia, maior o risco de precisar resolver isso correndo — sem tempo para escolher com calma.
              </p>
              <Button
                href={getWhatsAppLink("Olá! Meu certificado está vencido/vencendo e preciso resolver agora.")}
                isExternal
                variant="primary"
                size="lg"
              >
                Resolver isso agora
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. COMO FUNCIONA (TIMELINE CONECTADA EM 4 PASSOS)
        ========================================================= */}
        <section className="py-24 sm:py-32 bg-brand-petroleum relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">
                Processo Transparente
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Do primeiro contato ao certificado em mãos — sem mistério
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Sem filas e sem jargões burocráticos. Você sabe exatamente o que está acontecendo em cada etapa.
              </p>
            </div>

            {/* Timeline Horizontal no Desktop / Vertical no Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Passo 1 */}
              <div className="relative flex flex-col p-6 rounded-2xl bg-brand-petroleum-card border border-brand-sky/40 space-y-4 shadow-lg">
                <div className="text-4xl font-extrabold text-brand-sky">01</div>
                <h3 className="text-lg font-bold text-white">
                  Você fala com a Notum e diz o que precisa
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Sem formulário longo, sem robô: atendimento direto com quem resolve.
                </p>
              </div>

              {/* Passo 2 */}
              <div className="relative flex flex-col p-6 rounded-2xl bg-brand-petroleum-card border border-brand-slate/30 space-y-4 shadow-lg">
                <div className="text-4xl font-extrabold text-brand-slate">02</div>
                <h3 className="text-lg font-bold text-white">
                  Você envia os documentos
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Lista simples e objetiva — avisamos exatamente o que falta para não perder tempo.
                </p>
              </div>

              {/* Passo 3 */}
              <div className="relative flex flex-col p-6 rounded-2xl bg-brand-petroleum-card border border-brand-slate/30 space-y-4 shadow-lg">
                <div className="text-4xl font-extrabold text-brand-slate">03</div>
                <h3 className="text-lg font-bold text-white">
                  Você faz a validação
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Presencial ou por videoconferência, o que for mais rápido e cômodo para você.
                </p>
              </div>

              {/* Passo 4 */}
              <div className="relative flex flex-col p-6 rounded-2xl bg-brand-petroleum-card border border-brand-sky/40 space-y-4 shadow-lg bg-gradient-to-b from-[#1e3440] to-brand-petroleum-card">
                <div className="text-4xl font-extrabold text-brand-sky">04</div>
                <h3 className="text-lg font-bold text-white">
                  Seu certificado está pronto para uso
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Emitido e validado, sem pendência para você resolver depois. Pronto para operar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. O QUE MUDA QUANDO VOCÊ EMITE COM A NOTUM (GRADIENTE + GRID ASSIMÉTRICO)
        ========================================================= */}
        <section className="relative py-24 bg-gradient-brand text-white overflow-hidden">
          {/* Lupa ao fundo */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none select-none"
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
                Diferencial Notum
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                O que muda quando você emite com a Notum
              </h2>
            </div>

            {/* Grid Assimétrico: Item 4 com grid-span-2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Item 1 */}
              <div className="bg-brand-navy/85 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-sky/15 flex items-center justify-center text-brand-sky font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-lg text-white">Atendimento Direto</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Você fala com quem resolve, não com um script engessado de call center.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-brand-navy/85 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-sky/15 flex items-center justify-center text-brand-sky font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-lg text-white">Processo Transparente</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Você sabe em que etapa está, sem &quot;aguarde o retorno indefinido&quot;.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-brand-navy/85 rounded-xl p-6 border border-brand-sky/20 backdrop-blur-sm space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-sky/15 flex items-center justify-center text-brand-sky font-bold">
                  ✓
                </div>
                <h4 className="font-bold text-lg text-white">Suporte Pós-Emissão</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Se algo precisar de ajuste ou instalação, você não vira só mais um ticket esquecido.
                </p>
              </div>

              {/* Item 4 (Destaque Quebrando a Simetria: Span 2 no Desktop) */}
              <div className="md:col-span-2 bg-gradient-to-r from-brand-navy to-[#182d38] rounded-xl p-6 sm:p-8 border-2 border-brand-sky/50 shadow-xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-sky/20 text-brand-sky text-xs font-bold uppercase tracking-wider mb-2">
                    <Building className="w-4 h-4" />
                    <span>Solidez e Tradição</span>
                  </div>
                  <h4 className="font-bold text-xl sm:text-2xl text-white">
                    Quase 3 décadas de mercado
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mt-2">
                    A Notum está em atividade desde 1998, com sede física em Mesquita (RJ). Segurança jurídica comprovada por quem conhece o mercado corporativo.
                  </p>
                </div>
                <div className="pt-2 text-xs font-mono text-brand-sky">
                  CNPJ: 02.765.891/0001-00 · Desde 1998
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. PROVA SOCIAL
        ========================================================= */}
        <section className="py-24 bg-[#141e23] border-b border-brand-slate/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Quem já resolveu com a Notum não faz isso sozinho de novo
              </h2>
              <p className="text-base text-gray-300">
                Empresas e contadores que confiam na velocidade e precisão da Notum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-brand-petroleum-card border border-brand-slate/30 space-y-4">
                <div className="flex text-brand-sky gap-1">★★★★★</div>
                <p className="text-base text-gray-200 italic leading-relaxed">
                  &quot;Meu certificado venceu na pior hora e a Notum resolveu no mesmo dia. Atendimento ágil e sem enrolação.&quot;
                </p>
                <div className="pt-3 border-t border-brand-slate/20">
                  <span className="block font-bold text-white text-sm">Diretor Financeiro</span>
                  <span className="text-xs text-gray-400">Empresa de Logística · RJ</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-brand-petroleum-card border border-brand-slate/30 space-y-4">
                <div className="flex text-brand-sky gap-1">★★★★★</div>
                <p className="text-base text-gray-200 italic leading-relaxed">
                  &quot;Fizemos a validação por videoconferência com total comodidade. Recomendo para qualquer empresa que precisa de rapidez.&quot;
                </p>
                <div className="pt-3 border-t border-brand-slate/20">
                  <span className="block font-bold text-white text-sm">Contador Parceiro</span>
                  <span className="text-xs text-gray-400">Escritório Contábil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. PERGUNTAS FREQUENTES (COLUNA ÚNICA MAX-W-3XL)
        ========================================================= */}
        <section className="py-24 sm:py-32 bg-brand-petroleum">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-sky">
                <HelpCircle className="w-4 h-4" />
                <span>Elimine suas Dúvidas</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Perguntas frequentes
              </h2>
              <p className="text-base text-gray-300">
                Segurança, prazos e modalidades de atendimento.
              </p>
            </div>

            <Accordion items={lpFaqList} defaultOpenId="lp-faq-1" />
          </div>
        </section>

        {/* =========================================================
            7. CTA FINAL (REVERSÃO DE RISCO E WHATSAPP DIRETO)
        ========================================================= */}
        <section
          id="final-cta-section"
          className="relative py-24 sm:py-32 bg-gradient-brand text-white overflow-hidden"
        >
          <NotumGeometricPattern opacity={0.15} />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/70 border border-brand-sky/40 text-brand-sky text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Evite o bloqueio fiscal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Não espere seu certificado vencer para agir
            </h2>

            <p className="text-base sm:text-xl text-gray-200 leading-relaxed">
              Fale com a Notum agora e resolva isso ainda hoje — antes que vire um problema maior do que precisava ser.
            </p>

            <div className="pt-2">
              <Button
                href={getWhatsAppLink("Olá! Quero emitir meu certificado digital com a Notum agora.")}
                isExternal
                variant="primary"
                size="xl"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Quero emitir meu certificado agora
              </Button>
            </div>

            <p className="text-xs text-gray-300 italic pt-1">
              Atendimento sem compromisso — você só decide depois de saber exatamente o que precisa.
            </p>
          </div>
        </section>
      </main>

      <LPFooter />
      <WhatsAppFloating message="Olá! Vim pela página de Certificado Digital da Notum e gostaria de emitir meu certificado." />
    </div>
  );
}
