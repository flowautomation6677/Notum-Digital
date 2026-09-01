---
name: Flow Guidelines
description: Princípios invioláveis de UX/UI e de Infraestrutura da agência Flow Automation.
---

# Princípios Invioláveis de UX/UI e Infraestrutura

Este documento carrega os fundamentos cruciais que orientarão sua técnica, adaptáveis a qualquer cliente e branding definido através do Flow Kit Site.

## 0. Princípio Anti-Genérico (Direção de Arte é Obrigatória)
Todo cliente atendido pela Flow Automation compete visualmente com sites feitos por humanos, agências e outros negócios do seu setor — não apenas entre si. Um site que "cheira a IA" é um site que perde credibilidade antes mesmo de o visitante ler a primeira linha. Por isso, antes de aplicar qualquer regra abaixo, o agente **DEVE** ter concluído o Passo 2 (Direção de Arte) do workflow `/build-landing`.

**Lista de clichês proibidos por padrão** (só podem aparecer se forem, de fato, a decisão certa e deliberada para aquela marca — nunca por preguiça ou default):
- Hero com gradiente roxo/azul/violeta de fundo, título centralizado e dois botões (um sólido, um outline).
- Grid de 3 colunas com "ícone dentro de círculo colorido + título + parágrafo curto" repetido sem variação em toda a página.
- Cards todos idênticos: `rounded-xl`, `shadow-lg`, `p-6`, sem nenhuma diferenciação de forma entre seções.
- Seção "Trusted by" com logos genéricos em escala de cinza sem contexto real.
- Blob/formas orgânicas SVG decorativas atrás do hero sem relação com a marca.
- Fonte default do sistema (ou Inter/Poppins "porque sim") sem checar se é realmente a fonte do `idv-cliente.md`.
- Uso de glassmorphism/blur em excesso como recurso decorativo sem função.
- Toda a página com o mesmo `max-w-7xl mx-auto` centralizado e nenhuma seção rompendo esse container.

Cada projeto deve fixar, na Direção de Arte do Passo 2, ao menos 2 decisões visuais assinatura que fujam dessa lista — documentadas e aplicadas de forma consistente pelo restante do build.

## 1. Princípio de Conversão (CTAs)
Botões de conversão e Call To Actions são o coração do funil visual, mas a forma do botão **não é universal** — ela deriva da personalidade de marca documentada em `idv-cliente.md`:
- Todo botão principal de ação deve obrigatoriamente usar a "Cor Primária" definida pelo cliente.
- A **forma do botão é uma decisão de marca, não um default fixo**. Use como ponto de partida (não como regra cega):
  - Bordas levemente arredondadas (`rounded-md` a `rounded-lg`, 6–8px) para marcas modernas de tecnologia/SaaS.
  - Bordas retas (`rounded-none` ou `rounded-sm`) para marcas industriais, institucionais ou de engenharia.
  - Borda de contorno (`border`) sem preenchimento sólido, ou estilo link sublinhado, para marcas editoriais, premium ou minimalistas.
  - Formato pílula (`rounded-full`) apenas quando fizer parte de um sistema de design intencional do cliente — nunca como default.
- Elevação (sombra) e hover são recursos, não obrigação universal. Um hover de `-translate-y-1` com `shadow` é uma opção válida entre várias — outras incluem inversão de cor, preenchimento progressivo de fundo, sublinhado animado, ou mudança de borda. Escolha a que combina com a Direção de Arte do projeto, evitando repetir a mesma fórmula em todos os clientes.

## 2. Princípio de Espaçamento
A carga cognitiva excessiva destrói os layouts. Reduza o volume visual através da técnica de "respiro":
- Exija a adição de uso abundante de white-space. Utilizar amplos distanciamentos (exemplo de `py-24` ou `py-32` no Tailwind) nos envoltórios ou seções limpas.
- Espaçamento generoso não significa espaçamento uniforme: varie a densidade entre seções (uma seção mais compacta seguida de uma mais respirada) para criar ritmo de leitura, em vez de repetir o mesmo `py-24` em toda a página.

## 3. Princípio de Tipografia
O tratamento tipográfico deve garantir escaneabilidade, hierarquia de atenção rápida e **personalidade visível**:
- Fontes exatas e variáveis CSS serão fornecidas sempre e de forma exclusiva nos documentos (docs) do respectivo cliente — carregadas via `next/font`.
- Hierarquia bruta obrigatória: Títulos (Headings) exigem uso de pesos potentes e dominantes (font-weight `700` a `800`), e todo o texto base ou textos longos precisam recuar de peso (ficando contidos de `400` a `500`).
- Sempre que a marca do cliente permitir, prefira um pareamento de fontes com contraste real (ex.: serifada de destaque para headings + sans para corpo) em vez de uma única família sans-serif genérica em todos os pesos — isso é um dos sinais mais fortes de "template de IA" quando ausente.
- Headings de destaque (Hero, títulos de seção grandes) podem sair da escala default do Tailwind (`text-6xl`, `text-7xl` ou maior, com `tracking-tight` ou negativo) quando a Direção de Arte pedir impacto tipográfico.

## 4. Princípio de Cor e Imagem
- **Gradientes:** proibido usar gradiente roxo/azul/violeta genérico como default de fundo. Gradientes só devem ser usados quando derivarem diretamente das cores da marca do cliente, e com justificativa na Direção de Arte.
- **Blocos de cor:** prefira usar a cor primária do cliente em blocos sólidos e com confiança (uma seção inteira, uma faixa, um destaque de texto) a diluí-la sempre em gradiente ou em tons pastel genéricos.
- **Imagens e texturas:** para reforçar identidade, considere tratamentos como duotone com as cores da marca, grão/textura sutil, ou recortes de imagem fora do retângulo padrão — sempre coerente com a Direção de Arte do Passo 2, nunca como enfeite aleatório.

## 5. Princípio de Layout e Grid
- Evite que toda a página seja uma pilha vertical de seções `full-width`, `max-w-7xl mx-auto`, centralizadas, com a mesma estrutura interna. Isso é o padrão mais reconhecível de "site feito por IA".
- Busque assimetria proposital: imagens que sangram para fora do container, texto e mídia com proporções desiguais (ex. 5/7 em vez de 6/6), elementos sobrepostos entre seções.
- Layouts tipo "bento grid" são permitidos, mas apenas como escolha deliberada de Direção de Arte — não como substituto automático do grid de 3 colunas genérico.

## 6. Gestão de Assets e Imagens (Infraestrutura Visual)
Para garantir coesão mesmo durante a montagem primária em que as imagens finais ainda não existem:
- Para imagens ausentes ou não fornecidas no documento, utilize espaços de placeholders estruturados (exemplo: via uma `div` com background cinza ou consumindo serviços como `placehold.co`). A criação de src's e caminhos de imagens fantasma (vazios e quebrados) é proibida.
- Para todo pacote iconográfico (ícones UI generalistas na plataforma), **utilize exclusivamente a biblioteca `lucide-react`** — mas com parcimônia: nem todo título de seção ou item de lista precisa de um ícone ao lado. Ícone em excesso é outro sinal reconhecível de site genérico.

## 7. Regra de Deploy (Infraestrutura)
Independente do cliente, todo projeto deve levantar o questionamento abaixo antes da materialização dos setups (arquivos `.config` ou compilações):
- Ao iniciar ou formatar o repositório, **o agente DEVE** obrigatoriamente perguntar ao usuário: *"Qual o destino do deploy? (1) HostGator/Estático ou (2) VPS/Dinâmico"*.
- **SE FOR 1:** Altere o arquivo de configuração raíz do Next.js (como `next.config.ts`) de modo a inserir e exportar estaticamente (`output: "export"`).
- **Atenção em Deploys Estáticos (HostGator):** Sempre utilize caminhos relativos (ex: `./pasta/imagem.png`) ao invés de caminhos absolutos (ex: `/pasta/imagem.png`) para assets/imagens públicas em componentes manuais. Isso evita erros `404` causados por configurações rígidas de Apache que confundem a raiz da conta com a raiz do domínio.
