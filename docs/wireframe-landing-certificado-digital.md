# Wireframe — Landing Page "Certificado Digital" (Notum Tecnologia)

> v2 — copy de conversão (copywriter sênior) + spec de estrutura e animação (dev sênior). Landing dedicada, focada em um único objetivo (emissão/renovação de certificado digital), pensada para tráfego pago/local e para quem já está com a dor ativa (certificado vencido ou vencendo). Sem menu, sem distração: uma página, uma oferta, um CTA repetido em variações. Trechos `[CONFIRMAR]` são dados factuais que só o cliente pode validar (lista de documentos, prazos, modalidade de validação, parceria com Autoridade Certificadora) — a copy e a lógica de conversão já estão prontas.
>
> Stack de animação: `framer-motion`, sempre com fallback estático via `prefers-reduced-motion`. Nenhuma animação com `autoplay` em loop agressivo, nada de bounce/confete — o tom da marca é técnico e sóbrio, a animação existe para guiar atenção, não para "parecer moderno".

---

## Hero
- **Objetivo:** Parar o scroll de quem já está com a dor ativa (certificado vencido/vencendo) e apresentar a promessa central em uma tela, sem precisar rolar para entender a oferta.
- **Copy:**
  - Título Principal (H1): "Seu certificado digital, emitido hoje — sem fila, sem enrolação"
  - Subtítulo (P): "e-CNPJ e e-CPF com validação simples e suporte de quem entende do assunto. A Notum cuida da burocracia para você continuar faturando, emitindo nota e assinando documentos sem travar."
  - Texto do Botão (CTA primário): "Emitir meu certificado agora"
  - Link secundário (menor, abaixo do botão): "Já sei o que preciso → falar direto no WhatsApp"
  - Linha de confiança (microcopy abaixo do CTA): "Em atividade desde 1998, em Mesquita (RJ) · Atendimento direto, sem call center · [CONFIRMAR: credenciamento/parceria com Autoridade Certificadora]"
- **Estrutura de Layout:** Duas colunas assimétricas em desktop (`lg:grid lg:grid-cols-12`) — texto ocupando 7 colunas à esquerda, símbolo da lupa em traço fino grande (sangrando parcialmente para fora da viewport à direita) ocupando as 5 colunas restantes. Em mobile, empilhado com o símbolo em opacidade reduzida atrás do texto (não acima). Fundo: gradiente oficial marinho→azul-céu na diagonal, com o grafismo do "N" repetido em baixíssima opacidade por cima.
- **Animação:** Entrada em stagger (headline → subtítulo → CTA → linha de confiança, ~80ms de intervalo, fade + slide-up de 12px, easing `easeOut`, 400–500ms). O símbolo da lupa à direita se move em parallax muito sutil (translateY proporcional ao scroll, no máximo 20px) — não gira, não pulsa. Botão CTA com hover de preenchimento progressivo de fundo (ver Skill `flow-guidelines`, princípio de CTA) em vez do clichê `-translate-y-1`. Com `prefers-reduced-motion`, tudo aparece direto, sem parallax.
- **Regra Específica:** Sem menu de navegação — página de conversão única. Botão de WhatsApp fixo aparece após o usuário rolar além do Hero (ver seção de animação do rodapé/CTA flutuante).

## Um certificado vencido trava mais do que você imagina
- **Objetivo:** Agitar a dor de quem está adiando a emissão/renovação — a maior parte de quem chega numa landing de certificado digital só age quando entende o tamanho do problema de não ter um válido.
- **Copy:**
  - Título Principal (H2): "Um certificado vencido trava mais do que você imagina"
  - Lista de consequências:
    1. "Nota fiscal eletrônica bloqueada — sua empresa para de faturar"
    2. "Acesso suspenso a sistemas do governo (eSocial, Receita, licitações)"
    3. "Assinatura de contratos e documentos travada"
    4. "Movimentação bancária PJ bloqueada em bancos que exigem certificado válido"
  - Frase de fechamento: "Quanto mais você adia, maior o risco de precisar resolver isso correndo — sem tempo para escolher com calma."
  - Texto do Botão (CTA): "Resolver isso agora"
- **Estrutura de Layout:** Título centralizado e curto no topo da seção; abaixo, lista em grid `md:grid-cols-2` (não 3 colunas — 4 itens ficam melhor em 2x2 do que forçados em linha única), cada item como linha com um ícone de traço fino à esquerda (não ícone-em-círculo) e texto à direita. Fundo neutro claro, sem gradiente aqui — a seção anterior e a seguinte já carregam cor, esta "respira".
- **Animação:** Cada item da lista entra com fade + slide lateral de 8px conforme cruza o viewport (stagger 100ms entre itens, `once: true` — não repete a cada scroll para cima/baixo). Nenhum ícone pulsa ou treme; o impacto vem do texto, não de efeito.
- **Regra Específica:** Esta seção é nova em relação ao rascunho anterior — existe porque uma landing de certificado digital converte melhor mostrando a consequência de não ter um certificado válido antes de explicar a solução (estrutura clássica de problema → solução). Se o cliente preferir não usar tom de urgência, esta seção pode ser suavizada ou removida — sinalizar antes de construir.

## Como Funciona
- **Objetivo:** Remover a fricção percebida mostrando que o processo é simples e sob controle do cliente, não da burocracia.
- **Copy:**
  - Título Principal (H2): "Do primeiro contato ao certificado em mãos — sem mistério"
  - Passos:
    1. "Você fala com a Notum e diz o que precisa" — "Sem formulário longo, sem robô: atendimento direto com quem resolve."
    2. "Você envia os documentos" — "Lista simples e objetiva — avisamos exatamente o que falta. [CONFIRMAR lista de documentos por tipo de certificado]"
    3. "Você faz a validação" — "Presencial ou por videoconferência, o que for mais rápido para você. [CONFIRMAR modalidade disponível]"
    4. "Seu certificado está pronto para uso" — "Emitido e validado, sem pendência para você resolver depois."
- **Estrutura de Layout:** Linha do tempo horizontal em desktop (4 colunas conectadas por uma linha), vertical em mobile. Números grandes (tipografia Avapore) em vez de ícone-em-círculo genérico; o passo ativo/em foco no scroll ganha destaque em `#87CEEB`, os demais em tom neutro.
- **Animação:** A linha conectora entre os passos "desenha" da esquerda para a direita conforme a seção entra no viewport (`scaleX` de 0 a 1, origem à esquerda, ~800ms `easeInOut`); cada número/passo aparece com um leve scale-in (0.9 → 1) sincronizado com o avanço da linha, não todos de uma vez. Com `prefers-reduced-motion`, a linha aparece completa e os passos só fazem fade.
- **Regra Específica:** Evitar o clichê de 4 ícones-em-círculo idênticos — a hierarquia vem do número e da cor de destaque, não de um container repetido.

## O que muda quando você emite com a Notum
- **Objetivo:** Diferenciar de qualquer emissor genérico e justificar a escolha antes da prova social.
- **Copy:**
  - Título Principal (H2): "O que muda quando você emite com a Notum"
  - Itens (formato benefício, não lista genérica):
    1. "Atendimento direto — você fala com quem resolve, não com um script de call center."
    2. "Processo transparente — você sabe em que etapa está, sem 'aguarde o retorno'."
    3. "Suporte depois da emissão — se algo precisar de ajuste, você não vira só mais um ticket em outro fornecedor."
    4. "Quase 3 décadas de mercado — a Notum está em atividade desde 1998, em Mesquita (RJ). [CONFIRMAR: usar este dado só depois de regularizar a situação cadastral do CNPJ — ver nota em idv-cliente.md]"
- **Estrutura de Layout:** Faixa de largura total com o gradiente oficial marinho→azul-céu como fundo; os 4 itens em grid `md:grid-cols-2 lg:grid-cols-4` mas com o item 4 (tempo de mercado) visualmente maior/destacado (grid span 2), quebrando a simetria de "4 cards iguais".
- **Animação:** Fade-in simples por item ao entrar no viewport, sem stagger agressivo (essa seção é mais "afirmação" do que "lista a ler em ordem"). O item de destaque (tempo de mercado) pode ter um contador numérico simples ("1998 → hoje", ou "27 anos" se o dado for confirmado) que conta a partir de um valor próximo quando entra em cena — efeito único desta seção, não repetido em outras (evita virar "mais um contador de estatística genérico").
- **Regra Específica:** Os 4 itens não devem ter a mesma forma/tamanho de card — o item 4 quebra a grade de propósito.

## Quem já resolveu com a Notum não faz isso sozinho de novo
- **Objetivo:** Prova social como reforço de confiança logo antes da objeção final (FAQ).
- **Copy:**
  - Título Principal (H2): "Quem já resolveu com a Notum não faz isso sozinho de novo"
  - Depoimentos: "[EXEMPLO — substituir por depoimento real antes de publicar] 'Meu certificado venceu na pior hora e a Notum resolveu no mesmo dia.' — Nome, Empresa"
- **Estrutura de Layout:** Grid `md:grid-cols-3` com cards de depoimento; se houver menos de 3 depoimentos reais confirmados, preferir um layout de 1 ou 2 depoimentos em destaque grande a preencher com genéricos.
- **Animação:** Fade + slide-up ao entrar no viewport, stagger leve entre os cards. Sem carrossel automático (autoplay prejudica acessibilidade e leitura); se houver mais de 3 depoimentos, usar navegação manual (setas/dots) sem rotação sozinha.
- **Regra Específica:** Não publicar a seção com depoimento de exemplo — ou remover, ou substituir por depoimento real antes do lançamento.

## Perguntas Frequentes
- **Objetivo:** Eliminar as últimas objeções de quem está a um passo da conversão — incluindo a dúvida de legitimidade, que é a maior barreira nesse nicho.
- **Copy:**
  - Título Principal (H2): "Perguntas frequentes"
  - Perguntas:
    - "É seguro emitir meu certificado digital com a Notum?" | Resposta: "[CONFIRMAR: mencionar credenciamento/parceria oficial com Autoridade Certificadora — essa é a pergunta que mais pesa na decisão, priorizar resposta completa aqui]"
    - "Quais documentos preciso levar para emitir meu certificado?" | Resposta: "[CONFIRMAR lista por tipo de certificado]"
    - "Posso fazer a validação sem sair da empresa?" | Resposta: "[CONFIRMAR modalidade remota/videoconferência]"
    - "Quanto tempo leva do pedido até o certificado pronto?" | Resposta: "[CONFIRMAR prazo]"
    - "Quanto custa?" | Resposta: "[CONFIRMAR — ou manter em 'fale com a gente' se o valor variar por caso, deixando claro que não há cobrança para tirar a dúvida]"
- **Estrutura de Layout:** Acordeão de coluna única, largura controlada (`max-w-3xl mx-auto`) para manter leitura confortável — não usar grid de 2 colunas em FAQ, prejudica a leitura sequencial.
- **Animação:** Expansão/colapso com altura animada (`AnimatePresence` + medição de altura real, não `max-height` fixo arbitrário), ~250–300ms `easeInOut`; ícone de chevron gira 180° em sincronia. Apenas um item aberto por vez (comportamento de acordeão, não todos expansíveis simultaneamente).
- **Regra Específica:** A pergunta sobre segurança/legitimidade vem primeiro, não por acaso — é a maior objeção implícita de quem procura "certificado digital" e desconfia de golpe.

## CTA Final
- **Objetivo:** Fechar a conversão com urgência genuína (não artificial) e reversão de risco.
- **Copy:**
  - Título Principal (H2): "Não espere seu certificado vencer para agir"
  - Subtítulo (P): "Fale com a Notum agora e resolva isso ainda hoje — antes que vire um problema maior do que precisava ser."
  - Texto do Botão (CTA): "Quero emitir meu certificado agora"
  - Microcopy de reversão de risco (abaixo do botão): "Atendimento sem compromisso — você só decide depois de saber exatamente o que precisa."
- **Estrutura de Layout:** Seção full-width, texto centralizado mas não simétrico por acaso — título e subtítulo alinhados à esquerda dentro de um container de largura controlada (`max-w-2xl`), não centralizados letra por letra, para reforçar tom direto/técnico em vez de "banner de venda".
- **Animação:** Fundo com o gradiente oficial em leve deslocamento (`background-position` animando de 0% a 100% em ~8s, loop suave, amplitude pequena) — a única animação em loop contínuo da página, e some completamente com `prefers-reduced-motion`. Botão com o mesmo hover de preenchimento definido no Hero (consistência, não uma terceira variação de botão).
- **Regra Específica:** CTA leva direto para WhatsApp com mensagem pré-preenchida ("Olá, quero emitir meu certificado digital"). O botão de WhatsApp fixo (flutuante) que aparece desde a seção 2 se funde/desaparece aqui, já que o CTA principal da seção cobre a mesma ação — evita dois botões de WhatsApp visíveis ao mesmo tempo.

## Botão de WhatsApp Flutuante (elemento persistente)
- **Objetivo:** Manter a ação de conversão sempre a um clique, sem exigir voltar ao topo da página.
- **Estrutura de Layout:** Fixo no canto inferior direito, ícone + texto curto ("Falar agora") em telas largas, só ícone em mobile para não ocupar espaço de leitura.
- **Animação:** Aparece com slide-in + fade a partir do momento em que o usuário passa da seção Hero (não antes — no Hero o CTA principal já cobre a ação). Desaparece suavemente ao chegar na seção de CTA Final, para não duplicar o botão. Sem "pulso" contínuo chamativo — um único pulso sutil na primeira aparição é suficiente para chamar atenção sem incomodar quem rola a página inteira.
- **Regra Específica:** Nenhuma outra seção deve ter botão de WhatsApp concorrente visível ao mesmo tempo que o flutuante, exceto o Hero (CTA principal) e o CTA Final (onde o flutuante se retira).

## Footer (reduzido)
- **Objetivo:** Apenas o essencial — sem navegação institucional completa, para não distrair da conversão.
- **Copy:**
  - Telefone/WhatsApp: "[CONFIRMAR]"
  - E-mail: "[CONFIRMAR]"
  - Endereço: "Av. Coelho da Rocha, nº 1030 — Bairro BNH, Mesquita - RJ"
  - Texto legal: "© 2026 Notum Tecnologia e Soluções Ltda — CNPJ 02.765.891/0001-00. Todos os direitos reservados."
- **Estrutura de Layout:** Coluna única centralizada, tipografia pequena — o footer aqui é só rodapé legal, não replica o footer completo do site institucional.
- **Animação:** Nenhuma — footer é âncora estática de encerramento, sem motion.
- **Regra Específica:** Sem links de navegação para outras páginas do site institucional — o objetivo é manter o visitante na própria landing até converter.
