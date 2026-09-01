# Identidade Visual do Cliente — Notum Tecnologia

> Preenchido a partir do "Manual de Identidade Visual — Notum Tecnologia (2024)" e dos arquivos em `Logo/`. O nome oficial da marca no manual e nos logos é **"Notum Tecnologia"** (não "Notum Digital") — confirme com o cliente qual nome deve ir no site antes de publicar; usei "Notum Tecnologia" abaixo por ser o que está registrado na marca.

---

## 1. Cores
| Uso | Nome/Hex |
|---|---|
| Primária (CTAs, destaques) | Azul Céu — `#87CEEB` (RGB 135, 206, 235) |
| Secundária | Slate/Azul Acinzentado — `#708090` (RGB 111, 127, 144) |
| Neutra escura 1 (fundos escuros, texto sobre claro) | Grafite Petróleo — `#18242A` (RGB 24, 36, 42) |
| Neutra escura 2 (fundos escuros alternativos, wordmark) | Azul-Marinho/Índigo — `#191A34` (RGB 25, 26, 52) |
| Neutra clara (fundos) | Branco `#FFFFFF` |

- **Gradiente é permitido?** Sim, mas só com as cores oficiais da marca — nunca roxo/azul genérico. Os dois degradês do manual (usar apenas estes, sempre na diagonal):
  - Gradiente 1: `#191A34` → `#87CEEB` (marinho para azul céu)
  - Gradiente 2: `#18242A` → `#708090` (petróleo para slate)
- O manual proíbe explicitamente aplicar gradiente **sobre a logo em si** — gradiente é só para fundos/elementos, nunca dentro do símbolo ou do texto da marca.

## 2. Tipografia
| Uso | Fonte | Pesos usados |
|---|---|---|
| Headings (H1/H2/H3) e wordmark | **Avapore** (display, geométrica, uppercase, traços diagonais — é a fonte usada no próprio logotipo "NOTUM") | Peso único da família, usar em caixa alta |
| Corpo de texto / UI | **Field Gothic** (grotesca limpa, boa legibilidade em telas) | 400–500 no corpo, 700–800 em subtítulos/destaques |

- Fonte já existe como arquivo? **[CONFIRMAR com o cliente]** — Avapore é uma fonte display de nicho, provavelmente comprada/licenciada; localizar o arquivo `.otf`/`.ttf` original com quem fez a identidade visual antes de licenciar via `next/font/local`. Se não for possível obter o arquivo, usar uma alternativa geométrica de caixa alta com aberturas retas (ex. "Michroma", "Orbitron" ou similar) apenas em títulos, nunca substituir por Inter/Poppins sem mais essa.
- Tracking/estilo: o wordmark "NOTUM" já usa letras com bastante respiro (tracking positivo) — replicar esse espaçamento em headings grandes que usem a Avapore.

## 3. Personalidade de Marca
- Conceito oficial (do manual): *"Notum"*, do latim, significa **"certificar"**. A marca existe para transmitir **confiabilidade e autenticidade** — seja em produtos tecnológicos, assistência técnica, ou serviços empresariais como certificados digitais. O símbolo (lupa + "N") reforça **certificar, investigar, autenticar**.
- Adjetivos: confiável, técnica, precisa, investigativa, séria, sem enfeite.
- Segmento/setor: tecnologia — venda de produtos tecnológicos, assistência técnica e certificação digital para empresas (ex. e-CNPJ, e-CPF, assinatura eletrônica). **[CONFIRMAR com o cliente]** o mix exato de serviços ativos hoje e se há parceria com alguma Autoridade Certificadora específica (Serasa, Certisign, Soluti, etc.) — isso muda a copy de "Como funciona" no site.
- Tom de voz: técnico, direto, sóbrio — nada de gírias de marketing ("bombástico", "revolucionário"). A marca vende confiança, não hype.
- Referências visuais do próprio manual: paleta fria e desaturada (slate, azul céu, marinho, petróleo), ícones de traço fino (lupa, cadeado, check, "telhado"/casa), grafismos geométricos repetidos (padrão de "N" e ziguezagues) usados como textura de fundo, não como ilustração central.
- O que **evitar** neste projeto: gradiente roxo/rosa/violeta genérico (o gradiente oficial é marinho→azul céu, não usar outro); ícones fofos/coloridos fora da paleta; linguagem "startup" informal; qualquer variação da logo fora das aprovadas no manual (não esticar, não rotacionar, não trocar tipografia do logo, não aplicar contorno, não usar sobre fundo de baixo contraste).

## 4. Direção de Arte (decisões assinatura deste projeto)
- Decisão assinatura 1: usar o **grafismo geométrico do "N" repetido** (mostrado no manual, seção Ícones/Grafismo) como textura de fundo sutil em seções de destaque (Hero ou CTA final), em vez de blob/gradiente genérico — é um ativo de marca já pronto e nada parecido com IA.
- Decisão assinatura 2: o **gradiente diagonal marinho → azul céu** (oficial da marca) aplicado como fundo de uma seção inteira (ex. CTA final ou faixa de diferenciais), com o símbolo da lupa em traço fino sobreposto em baixa opacidade — assinatura visual forte e exclusiva da Notum, não um gradiente genérico de IA.
- Decisão assinatura 3 (sugestão, confirmar com o cliente): usar os ícones de traço fino do próprio manual (lupa, cadeado, check) em vez de ícones genéricos do `lucide-react` sempre que houver equivalente direto — reforça a identidade única da marca na seção de Serviços/Diferenciais.

## 5. Logo e Assets de Marca
Arquivos organizados em `public/brand/logo/` (copiados de `Logo/` na raiz do projeto):
- Logo principal (símbolo + nome empilhado, fundo claro): `public/brand/logo/logo-principal.png`
- Logo horizontal (símbolo + nome lado a lado, fundo claro): `public/brand/logo/logo-horizontal.png`
- Wordmark (somente texto "NOTUM TECNOLOGIA", sem símbolo): `public/brand/logo/wordmark.png`
- Símbolo isolado (lupa + N): `public/brand/logo/simbolo.png`
- Versões para fundo escuro (petróleo `#18242A`): `logo-principal-fundo-escuro.png`, `logo-horizontal-fundo-escuro.png`, `simbolo-fundo-escuro.png`
- Favicon: **[CONFIRMAR/GERAR]** — recortar o símbolo isolado em formato quadrado com respiro (área de proteção mínima definida no manual) para gerar o favicon.
- Demais variações de cor (`_1` a `_5` de cada arquivo em `Logo/`) ficam disponíveis na pasta original `Logo/` caso precise de outra combinação de fundo — todas já aprovadas no manual, não crie novas variações de cor.
- **Usos proibidos pelo manual** (não fazer em hipótese nenhuma): esticar vertical/horizontalmente, alterar cores fora das aprovadas, rotacionar o símbolo, alterar formas/elementos, distorcer, aplicar gradiente sobre a marca, trocar a tipografia do logo, usar sobre fundo de baixo contraste, inserir traçado/contorno.

## 6. Dados Institucionais (Razão Social, CNPJ, Endereço)
- Razão social: Notum Tecnologia e Soluções Ltda
- Nome fantasia / marca: Notum Tecnologia
- CNPJ: 02.765.891/0001-00
- Endereço: Av. Coelho da Rocha, nº 1030 — Bairro BNH, Mesquita - RJ, CEP 26.574-391
- Data de abertura: 25/08/1998 (quase 30 anos de mercado — pode virar diferencial real na copy, ex. "desde 1998")
- CNAE principal: Consultoria em tecnologia da informação. CNAEs secundários incluem desenvolvimento de software, web design, suporte técnico em TI, hospedagem/tratamento de dados e comércio varejista de equipamentos de telefonia — atuação mais ampla em TI do que só certificação digital; **[CONFIRMAR com o cliente]** quais dessas linhas devem aparecer no site hoje.
- **Atenção:** consulta a base pública (Econodata, dado de terceiro — não é a fonte oficial) mostra a situação cadastral do CNPJ como **INAPTA desde 12/05/2026 por omissão de declarações**. Isso não é algo que eu deva presumir como definitivo — confirme diretamente na Receita Federal (consulta CNPJ) antes de publicar o site, porque uma situação cadastral irregular pode afetar emissão de nota fiscal e a própria credibilidade de uma marca que vende "confiabilidade e autenticidade".
- Instagram: [@notumdigital](https://www.instagram.com/notumdigital) — não consegui abrir o conteúdo (Instagram bloqueia leitura automatizada via robots.txt). Se quiser trazer bio, destaques ou telefone de contato de lá para o site, me envie o texto/print e eu incluo.

## 7. Infraestrutura
- Destino do deploy: **[CONFIRMAR com o cliente]** — "HostGator/Estático" ou "VPS/Dinâmico".
- Domínio: **[CONFIRMAR]**
- Observações técnicas específicas: **[CONFIRMAR]** — provavelmente vai precisar de formulário/WhatsApp para captação de leads de certificado digital; confirmar se há CRM ou planilha para onde os leads devem cair.
