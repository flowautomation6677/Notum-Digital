---
description: /build-landing - Workflow de criação de sites agnóstico via Flow Kit Site.
---

# Workflow: Build Landing Page

Trata-se da linha de montagem universal que pavimenta o desenvolvimento de sucesso da Flow Automation e engaja o ecossistema do template de múltiplos clientes simultâneos. A meta final não é "montar a página conforme o wireframe" — é entregar algo que um visitante não confunda com um template genérico de IA. Cada etapa abaixo existe para blindar esse resultado; nenhuma pode ser pulada para "ganhar tempo".

**Gatilho do Workflow:** Enviar na conversa o comando `/build-landing`.

## Passo 1 (Leitura de Contexto e o Contrato de Entrada)
- Ao ouvir o gatilho, você como modelo de código **DEVE**, obrigatoriamente e antes de codificar telas inteiras, ler de forma atenta e literal os arquivos abaixo indicados:
  1. `docs/idv-cliente.md`: Para recolher os mapeamentos das variáveis da cor HEX específicas, tipografias nativas e **personalidade de marca** (formal, industrial, jovem, premium, artesanal, etc.) do cliente em pauta — essa personalidade é o que vai guiar o Passo 2.
  2. **Todo arquivo `docs/wireframe*.md` presente na pasta** (não apenas `docs/wireframe.md`). É comum um projeto ter mais de uma página/rota — ex. `wireframe.md` para o site institucional e `wireframe-landing-[oferta].md` para uma landing page dedicada de tráfego pago. Cada arquivo `wireframe*.md` encontrado é **uma rota separada dentro do mesmo projeto Next.js**, nunca um projeto à parte e nunca uma reescrita do outro. Cada um obedece ao mesmo padrão estrutural rígido:
     - `## [Nome da Seção]` (ex: Hero, Features, CTA, Footer)
     - `- **Objetivo:**` (ex: Captura de lead, Prova social)
     - `- **Copy:**`
       - Título Principal (H1/H2): "..."
       - Subtítulo (P): "..."
       - Texto do Botão (CTA): "..."
     - `- **Assets Visuais:**` (ex: O que carregar visualmente ali).
     - `- **Regra Específica:**` (ex: Comportamento ou diretrizes de fundo exigidas).
  - Antes de codificar, **liste para o usuário todos os arquivos `wireframe*.md` encontrados e pergunte para qual rota cada um vai** (ex.: `wireframe.md` → `/`, `wireframe-landing-certificado-digital.md` → `/certificado-digital`). Não assuma a rota por conta própria além de `wireframe.md` → `/`, que é o único mapeamento padrão.
  - Se o usuário pedir para construir "tudo" ou "o site inteiro" em uma única execução do `/build-landing`, construa **todas** as rotas mapeadas nesta mesma rodada, repetindo os Passos 2 a 7 para cada uma (a Direção de Arte do Passo 2 é definida uma vez para o projeto todo, mas a Montagem do Passo 6 e a Auditoria do Passo 7 rodam por rota).
- Pergunte ao usuário onde a aplicação vai rodar (**HostGator/Estático** ou **VPS/Dinâmico**). Essa resposta condiciona a configuração técnica do Passo 4 e vale para o projeto inteiro, não por rota.

## Passo 2 (Direção de Arte — Fuja do Padrão de IA)
Antes de tocar em componentes, produza e apresente ao usuário um **conceito de direção de arte** curto (3 a 5 linhas) descrevendo como este projeto especificamente vai se diferenciar do "template genérico de IA". Com base na personalidade de marca do `idv-cliente.md` e no tom do `wireframe.md`, escolha deliberadamente **pelo menos 2 decisões visuais assinatura**, entre elas (lista não exaustiva):
- **Grid não-óbvio no Hero:** assimetria, imagem sangrando para fora do container, texto sobreposto a um elemento visual — em vez do padrão "título centralizado + subtítulo + dois botões" que aparece em praticamente todo site gerado por IA.
- **Tipografia com personalidade real:** pareamento de duas fontes com contraste de verdade (serifada + sans, ou display + texto corrido), headings fora da escala default do Tailwind, tracking ajustado em títulos grandes — não apenas "Inter em vários pesos".
- **Cor com intenção:** nada de gradiente roxo/azul/violeta genérico sem relação com a marca. Prefira bloco de cor sólida da identidade do cliente, duotone em imagens, ou a cor primária ocupando uma seção inteira com confiança.
- **Microinterações com propósito:** parallax sutil, reveal de texto ao entrar no viewport, hover states customizados — nunca animação aplicada indiscriminadamente só para "parecer moderno".
- **Forma própria em cards e seções:** recortes, sobreposição, offsets, seções que rompem o grid de 12 colunas em pontos estratégicos — em vez do card `rounded-xl shadow-lg p-6` repetido de forma idêntica em toda a página.
- **Ritmo de seção variado:** nem toda seção precisa ser um bloco full-width centralizado com o mesmo `py-24`. Alterne largura, alinhamento e densidade entre seções adjacentes.

Este conceito deve ser comunicado ao usuário (mesmo que brevemente) antes de seguir para os passos técnicos, para alinhamento e para registrar as decisões que vão orientar as auditorias dos Passos 4 e 7.

## Passo 3 (Setup Dinâmico)
- Construa ou edite o arquivo `tailwind.config.ts` do repositório, mapeando as cores e fontes lidas do `idv-cliente.md`. Estenda a escala de espaçamento, tamanhos de fonte e `letterSpacing` sempre que a Direção de Arte do Passo 2 exigir valores fora do default do Tailwind.

## Passo 4 (Componentização)
- Produza arquivos dedicados de Componentes de base (`Button`, `Section`, `Card`) no local correto (`src/components/ui` e `src/components/layout`), já refletindo as decisões assinatura do Passo 2 — nunca o componente-padrão "de prateleira" do Tailwind UI ou shadcn sem nenhuma adaptação.

## Passo 5 (Setup de SEO Técnico)
- Todo projeto no formato das LPs de conversão requer SEO dinâmico ativo e metadados fortes na raiz.
- Ao construir o arquivo base (`layout.tsx` ou `page.tsx`), a IA **DEVE** engatilhar e gerar a exportação de metadados padrão (`export const metadata`). Injete o Título, Descrição central e o OpenGraph com base no escopo e copy lidos no contrato do Wireframe no Passo 1.
- Quando o segmento do cliente permitir (negócio local, produto, serviço), inclua dados estruturados (`JSON-LD`, schema `LocalBusiness`, `Organization` ou `Product` conforme o caso) para reforçar SEO técnico.

## Passo 6 (Montagem Escalonada)
- Projete as seções da interface seguindo a ordem e o conteúdo do Wireframe aprovado, mas traduza cada seção através da Direção de Arte definida no Passo 2 — o conteúdo do wireframe é fixo, a forma visual de cada bloco não precisa (e não deve) repetir mecanicamente o layout do bloco anterior.
- Nenhuma vírgula do texto original (copy) deverá ser alterada em relação à matriz original sob pena gravíssima no fluxo de dados de marketing, jamais sendo substituída por "Lorem Ipsum" arbitrário.
- Aplique motion de entrada (fade/slide sutil ao cruzar o viewport) nas seções principais definidas no Passo 2, sempre respeitando `prefers-reduced-motion`.

## Passo 7 (Auditoria Técnica Final e Revisão de Código)
Efetue a revisão final validando via código estrito se:
1. Todas as imagens e componentes iconográficos invocados possuem atributos textuais `alt` rigorosamente preenchidos em coerência com os assets.
2. As tags de divisão semânticas do HTML5 (ex: `<header>`, `<section>`, `<main>`, `<footer>` ou `<article>`) foram aplicadas.
3. As classes do frame do Tailwind CSS garantem a responsividade base e comportamentos nativos de estiramento ou contração, verificando e obrigando o uso das declarações prefixadas dos breakpoints (como `md:` e `lg:`) na construção modular nas caixas principais.
4. **Checklist Anti-Genérico** (compare o resultado às decisões do Passo 2):
   - O Hero não é um clichê de "gradiente roxo/azul + título centralizado + dois botões" sem relação com a marca do cliente.
   - Nem toda seção de features é um grid de 3 colunas idêntico com "ícone em círculo + título + parágrafo" sem nenhuma variação de layout.
   - Os botões e cards não são todos visualmente idênticos entre si e entre clientes diferentes só porque "é o padrão" — a forma segue a personalidade documentada em `idv-cliente.md`.
   - A tipografia não é a fonte default do sistema sem justificativa explícita no `idv-cliente.md`.
5. Contraste mínimo AA e navegação completa por teclado testados nos elementos interativos (botões, links, formulários).
