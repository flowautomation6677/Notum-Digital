# Notum Tecnologia — como acionar o agente

Este projeto já está pronto para desenvolvimento. O que foi preparado:

- `docs/idv-cliente.md` — identidade visual completa (cores, tipografia, personalidade de marca, direção de arte, assets), extraída do "Manual de Identidade Visual — Notum Tecnologia (2024)".
- `docs/wireframe.md` — copy e estrutura do **site institucional** (Hero, Sobre, Serviços, Diferenciais, Prova Social, FAQ, CTA, Footer).
- `docs/wireframe-landing-certificado-digital.md` — **v2**: copy de conversão (nível copywriter sênior, com seção de agitação de problema, prova social e FAQ priorizando a objeção de legitimidade) + spec de estrutura e animação por seção (nível dev sênior, com framer-motion, tudo com fallback para `prefers-reduced-motion`). Landing dedicada para tráfego pago, focada só em conversão de Certificado Digital.
- `public/brand/logo/` — logos já extraídos e organizados (principal, horizontal, símbolo, wordmark, versões para fundo escuro).

## Antes de acionar `/build-landing`
Vários trechos nos dois wireframes estão marcados `[CONFIRMAR]` — são dados que só a Notum pode confirmar (telefone, e-mail, documentos exigidos, prazos, parceria com Autoridade Certificadora, depoimentos reais). Endereço e CNPJ já foram preenchidos (ver `idv-cliente.md`, seção 6). A copy e a estrutura já estão prontas; o que falta é esse fechamento factual antes de publicar. **Confirme também o nome da marca**: o manual e os logos usam "Notum Tecnologia" — se o site deve sair como "Notum Digital", isso muda o `idv-cliente.md` e todo o wordmark do site.

**Ponto de atenção antes de publicar:** uma consulta pública (Econodata, não é a fonte oficial) mostra o CNPJ 02.765.891/0001-00 como "INAPTA" desde 12/05/2026 por omissão de declarações. Confirme diretamente na Receita Federal antes de colocar o site no ar — um site de uma marca que vende "confiabilidade e autenticidade" com um CNPJ irregular é um risco reputacional que vale resolver primeiro.

**Instagram (@notumdigital):** não consegui abrir o perfil — o Instagram bloqueia leitura automatizada. Se houver bio, destaques, telefone ou horário de atendimento lá que devam entrar no site, me envie o texto ou um print e eu incluo nos wireframes.

## Como acionar
O workflow `/build-landing` já foi atualizado para ler **todos** os arquivos `docs/wireframe*.md` de uma vez — não precisa mais renomear arquivo nenhum. Ao enviar `/build-landing`, o agente vai:
1. Listar os wireframes que encontrou (`wireframe.md` e `wireframe-landing-certificado-digital.md`) e perguntar para qual rota cada um vai (padrão sugerido: institucional em `/`, landing em `/certificado-digital`).
2. Propor a Direção de Arte uma vez para o projeto inteiro.
3. Construir as duas páginas dentro do **mesmo projeto Next.js** — não são dois sites separados.

Você pode pedir para construir as duas de uma vez ("constrói o site inteiro") ou uma de cada vez, se preferir revisar o institucional antes de partir para a landing.
