# Checklist Pré-Lançamento — Site Institucional Notum

> Baseado na leitura do código atual (`src/app/page.tsx`, `navbar.tsx`, `footer.tsx`) confrontado com o dossiê de CRO e com os próprios wireframes do projeto (`docs/wireframe.md`, `docs/idv-cliente.md`). Organizado por prioridade e depois seção por seção.

---

## 0. Bloqueadores críticos — resolver antes de qualquer outra coisa

Estes itens não são sobre copy ou estrutura: sem eles o site converte zero ou expõe a marca a risco. Valem tanto para a home quanto para a LP `/certificado-digital`, que compartilham o mesmo código-base (`src/lib/utils.ts`).

1. **WhatsApp fake no ar.** `NOTUM_WHATSAPP = "5521999999999"` em `src/lib/utils.ts` é placeholder. Todo botão "Falar no WhatsApp" do site — o CTA principal em praticamente toda seção — hoje não leva a lugar nenhum. Trocar pelo número real antes de qualquer divulgação.
2. **CNPJ com possível pendência não verificada.** O rodapé exibe "CNPJ 02.765.891/0001-00" como prova de solidez, mas os docs do projeto registram que uma base pública (Econodata, não oficial) mostrava situação **INAPTA desde 12/05/2026**. Confirmar direto na Receita Federal antes de publicar — se estiver mesmo inapta, publicar o CNPJ é o oposto do que a marca promete ("confiabilidade e autenticidade").
3. **Nome da marca inconsistente.** Site e logos usam "Notum Tecnologia"; Instagram é `@notumdigital`; você se refere à empresa como "Notum Digital". Decidir o nome oficial antes de publicar — muda wordmark, e-mail de contato, domínio (`notumtecnologia.com.br` está hardcoded no `metadata` da LP sem confirmação de que é o domínio real) e toda a copy.
4. **Depoimentos fabricados apresentados como reais.** Home e LP têm cards com 5 estrelas e citações atribuídas a "Diretor Financeiro · Empresa de Logística", "Contador Parceiro", "Cliente Corporativo" — não são clientes reais. O próprio `wireframe.md` já instruía não publicar assim. Recomendação: **remover a seção ou substituir por depoimentos verdadeiros** antes de qualquer publicação; não é só uma questão de CRO, é reputacional.
5. **E-mail `contato@notumtecnologia.com.br` não confirmado.** Se o domínio não estiver registrado/ativo, o e-mail no rodapé também não funciona. Confirmar junto com o item 3.

---

## 1. Navbar

**Está bom:** logo, CTA de WhatsApp sempre visível (desktop e mobile), menu simples, link direto para a LP de certificado.

**Falta / mexer:**
- CTA aponta para o WhatsApp fake (bloqueador 0.1).
- Nenhuma indicação de telefone/horário de atendimento no header para quem prefere ligar — considerar se faz sentido dado o público (empresário com urgência muitas vezes liga antes de mandar WhatsApp).
- Não há badge de autoridade (ITI/ICP-Brasil) no header, mesmo que discreto — só faz sentido adicionar **depois** de confirmar se existe parceria formal com uma Autoridade Certificadora (ver item 4 dos "Gaps estratégicos" abaixo).

---

## 2. Hero

**Está bom:** headline clara ("Certificação, tecnologia e confiança para o seu negócio"), CTA duplo (WhatsApp + Emitir Certificado), badge "desde 1998 · Mesquita-RJ" como prova de solidez real (não inventada).

**Falta / mexer:**
- O H1 atual é institucional/genérico — fala de "confiança" em abstrato, mas não nomeia a dor específica do visitante nos primeiros segundos (a persona "Pequeno Empresário" do dossiê chega em estado de urgência: nota fiscal travada, prazo vencendo). Para a home isso é aceitável (ela atende 3 públicos ao mesmo tempo), mas vale testar uma versão que amarre o "por quê" mais rápido.
  - **Sugestão de copy (variação A/B):**
    - H1 atual: "Certificação, tecnologia e confiança para o seu negócio"
    - Alternativa testável: "Certificado digital, suporte técnico e equipamentos — resolvidos por um único parceiro que não te deixa na mão"
- Subheadline pode ganhar um verbo de ação mais concreto no lugar de "não podem errar" (vago). Ex.: "...para empresas que não têm tempo a perder com burocracia ou suporte que some."
- Falta o campo de "Verificar elegibilidade" (CPF/CNPJ) que o dossiê recomenda no Módulo 3/4 — **mas isso só deve entrar depois que a Notum confirmar se tem parceria com uma AC para checagem biométrica**; sem isso, é uma promessa que a página não pode cumprir.
- Card lateral "NOTUM SYS v2.4" é um detalhe estético que não comunica benefício — considerar substituir por algo com mais peso de prova social real (ex. número de certificados emitidos, se confirmado) quando os dados existirem.

---

## 3. Sobre a Notum

**Está bom:** a explicação do nome ("Notum = certificar", em latim) é um diferencial de marca genuíno e bem aproveitado — poucas certificadoras têm essa narrativa. "Desde 1998" é dado real e forte.

**Falta / mexer:**
- Texto termina em "[CONFIRMAR: tamanho da equipe, regiões atendidas hoje]" no wireframe original — no código isso já não aparece como placeholder, mas também não foi substituído por dado real. Vale adicionar 1 frase concreta (nº de pessoas no time, ou "atendemos toda a Baixada Fluminense e região metropolitana do RJ, com suporte remoto para todo o Brasil") assim que confirmado.
- Os dois mini-cards ("Sede Própria no RJ" e "Desde 1998") repetem informação que já apareceu no badge do Hero — considerar trocar um deles por algo novo, como "clientes atendidos" ou "certificados emitidos", quando houver número real para não ser genérico.

---

## 4. Serviços (os 3 pilares)

**Está bom:** estrutura de 3 cards com destaque visual no Certificado Digital ("Mais Procurado") é uma boa forma leve de guided selling sem forçar um quiz completo. CTAs específicos por card (Emitir / Solicitar suporte / Ver produtos) evitam o "Saiba Mais" genérico que o dossiê critica no Módulo 3.

**Falta / mexer:**
- Card de Certificado Digital menciona "e-CNPJ A1, A3 e e-CPF" lado a lado, sem hierarquia — o dossiê (Módulo 3) recomenda **esconder o A3 do fluxo principal** e tratá-lo como produto de nicho, porque é a maior fonte de chamado técnico (drivers, token, SafeSign). Sugestão: no card, citar só "e-CNPJ A1 e e-CPF" e deixar o A3 como opção secundária dentro da página de certificado, não na vitrine principal.
- Card "Assistência Técnica" tem "[CONFIRMAR: presencial, remoto ou ambos]" pendente no wireframe original — isso não está resolvido no texto publicado ("Suporte técnico especializado... com diagnóstico transparente e prazo combinado" é vago o suficiente para não mentir, mas também não converte tão bem quanto seria com o dado real).
- Card "Produtos de Tecnologia" também tem catálogo/marcas não confirmado — mesma lógica.
- Nenhum dos 3 cards deixa claro **para quem** é cada serviço (o dossiê usa personas: contador, empresário, profissional liberal). Uma microlinha tipo "Ideal para: empresas com NF-e travada" no card de certificado ajudaria o visitante a se reconhecer mais rápido.

---

## 5. Diferenciais

**Está bom:** os 4 diferenciais batem com o que o dossiê recomenda como antídoto às falhas dos grandes players (atendimento direto, processos claros, parceiro único, tempo de mercado) — e, corretamente, evitam números não confirmados (seguindo a própria regra do `wireframe.md`: "melhor 3 diferenciais reais do que 5 genéricos").

**Falta / mexer:**
- Nenhum diferencial ataca diretamente a dor mais citada no dossiê contra os concorrentes grandes: **agendamento de videoconferência cancelado/reagendamento burocrático**. Vale um 5º diferencial (ou substituir um dos genéricos) do tipo: "Sua videoconferência não é cancelada em cima da hora — se agendou, a gente aparece."
- "Parceiro Único" é forte para quem já entende os 3 pilares, mas na primeira leitura da página (antes da seção de Serviços) pode soar vago — considerar reordenar essa seção para depois de Serviços (ela já está depois, o que é correto — só reforçando que a ordem atual está certa).

---

## 6. Prova Social

**Falta / mexer (prioridade máxima, ver bloqueador 0.4):**
- Os 3 depoimentos são fabricados. Antes de decidir a copy definitiva desta seção, decidir com o cliente:
  - Tem depoimentos reais (mesmo que só 1 ou 2) para usar aqui?
  - Se não, a seção deve ser **removida temporariamente** — uma seção vazia é menos arriscado que uma com prova social falsa, especialmente numa marca posicionada em torno de "confiabilidade e autenticidade".
- Alternativa enquanto não há depoimentos reais: substituir a seção por números verificáveis (anos de mercado, CNPJ ativo desde 1998, áreas atendidas) — prova social "institucional" em vez de prova social "de cliente".

---

## 7. FAQ

**Está bom:** aborda bem a diferença A1/A3, o requisito de biometria para videoconferência (sem jargão pesado) e documentação — no espírito do "Desarme Regulatório" do Módulo 5 do dossiê.

**Falta / mexer:**
- Resposta 2 ("Quanto tempo leva para emitir um certificado?") promete "processo... realizado no mesmo dia" como afirmação categórica. O `wireframe.md` original marcava isso como `[CONFIRMAR prazo]` — a versão publicada resolveu o placeholder com uma promessa concreta sem confirmação. Se o prazo real variar (ex. depender de agenda do Agente de Registro), isso vira exatamente o tipo de promessa quebrada que gera reclamação no Reclame Aqui, segundo o próprio dossiê (Módulo 2). Ajustar para algo como "normalmente no mesmo dia útil, dependendo da disponibilidade de agenda" até confirmar o SLA real.
- Resposta 4 (atendimento fora do horário comercial) também resolve um `[CONFIRMAR]` com uma frase de efeito ("canais de acionamento dedicados") sem dizer o que isso significa na prática — vale substituir por algo verificável (ex. "sim, para contratos corporativos" ou remover a pergunta se não houver isso hoje).
- Falta uma pergunta sobre o que acontece se o cliente **não** se qualificar para videoconferência (o dossiê recomenda isso explicitamente no Módulo 5, Bloco 2 — "Fique tranquilo, te levamos para o processo presencial mais próximo"). Hoje a FAQ só cobre o caminho feliz.

---

## 8. CTA Final

**Está bom:** fechamento direto, sem enrolação, reforça "sem robôs de atendimento" — que é exatamente a promessa que neutraliza a maior dor do mercado segundo o dossiê.

**Falta / mexer:**
- CTA aponta para o WhatsApp fake (bloqueador 0.1).
- "Resposta rápida em horário comercial" é uma promessa de SLA — confirmar se é fiel à realidade (mesma lógica do item de FAQ acima) antes de publicar.

---

## 9. Footer

**Está bom:** estrutura completa (navegação, endereço, contato, redes, texto legal) — mais denso e útil do que a maioria dos concorrentes citados no dossiê.

**Falta / mexer:**
- CNPJ exibido sem verificação de situação cadastral (bloqueador 0.2).
- Telefone/WhatsApp fake (bloqueador 0.1).
- E-mail com domínio não confirmado (bloqueador 0.5).
- O dossiê (Módulo 4, Seção 6) recomenda um rodapé "denso" com links de long-tail SEO técnico (ex. "Como converter P12 para PFX", "Driver SafeNet Windows 11") para capturar tráfego de clientes frustrados de concorrentes — isso não existe hoje porque ainda não há uma Central de Ajuda/repositório técnico no site. Fica como item de fase 2, não bloqueador.

---

## Resumo — ordem sugerida de execução

1. Resolver os 5 bloqueadores críticos da seção 0 (WhatsApp real, CNPJ, nome da marca/domínio, depoimentos, e-mail).
2. Ajustar as respostas da FAQ e o texto da CTA final para não prometer SLA não confirmado.
3. Reordenar a exibição do A3 no card de Serviços (tirar do destaque principal).
4. Refinar copy do Hero e da seção Sobre com dados reais assim que confirmados (equipe, região atendida, nº de clientes).
5. Avaliar se/quando vale adicionar selos ITI/ICP-Brasil e o campo de "verificar elegibilidade" — só depois de confirmar a parceria com Autoridade Certificadora.
