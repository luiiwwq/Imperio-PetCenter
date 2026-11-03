# Império Pet Center — direção e contrato visual

## Contexto e decisão
Site institucional para tutores de cães e gatos. A tarefa principal é conhecer possibilidades de cuidado e encontrar informações de contato verificadas. Pasta inicialmente vazia; Vite e JavaScript vanilla, sem necessidade de framework ou servidor de aplicação. Implementação autônoma autorizada, sem gates ou delegação.

### Duas direções comparadas
1. **Editorial acolhedora (escolhida):** creme, verde profundo e damasco, serif expressiva, fotografia ampla e ritmo de revista. Aproxima a marca do cotidiano dos tutores sem recorrer a patas, coroas ou promessas de excelência não comprovadas.
2. **Varejo lúdico:** tipografia arredondada, cores mais intensas e módulos curtos de catálogo. Facilitaria promoções, mas sugeriria estoque e compra, informações indisponíveis; o excesso de módulos reduziria o caráter institucional.

## Síntese executável
- Hero de classe `full-bleed-overlay`: foto panorâmica dominante, título sobre tratamento escurecido para legibilidade, não uma foto pequena ao lado de texto. Assinatura é o encontro da imagem com a composição editorial ampla.
- Marca tipográfica própria: “império” em serif, com assinatura discreta “pet center”. Sem símbolos de realeza ou pictogramas repetidos.
- Tipografia: Fraunces local para títulos e marca, Manrope local para corpo. Fallbacks Georgia e Arial. Escala fluida, corpo de 16–18px, títulos com entrelinha compacta.
- Paleta e demais tokens são definidos exclusivamente em `src/style.css`: creme de fundo, verde para conteúdo/ações, damasco subordinado em uma seção de contato, tom areia para superfícies.
- Ritmo: hero fotográfico; serviço em composição assimétrica; categorias em lista editorial; etapas em sequência; sobre em bloco verde com foto; FAQ nativo; contato damasco.
- Espaço entre seções de 80–128px no desktop e 64–80px no celular; conteúdo limitado a 1280px.
- Sem preços, estoque, avaliações, números de clientes, história da empresa ou equipe inventados. Fotografias ilustrativas, não fotos da loja.
- Disponibilidade de serviços e categorias nunca presumida. Campos desconhecidos ficam `null`. Sem canais confirmados, contato é um estado vazio informativo, não um formulário sem destino.
- Animação somente em feedback de ação: cores dos links/botões e abertura do menu. Nenhum conteúdo depende de animação para aparecer. Reduced-motion remove transições e rolagem suave.
- Menu é disclosure, não modal: links na ordem de tabulação, Escape fecha e devolve foco, seleção fecha e move foco ao destino. FAQ usa `details`/`summary`.

## Referências e adaptação
Tasteful UI original, exploration, anti_generic, catalog, implementation e verification. Catálogo: referência Apple usada apenas para escala fotográfica e ritmo entre superfícies; não copiar fonte, azul, glassmorphism ou componentes. O risco de uma referência de tecnologia é esfriar o caráter afetivo: mitigado por fotos naturais, serif e linguagem cotidiana. Frontend-design e ui-craft (original, craft-intent, recipe-landing, accessibility) sustentam hierarquia e interação. Regras genéricas de prova social e preços não se aplicam: faltam dados, portanto não inventar.

## Verificação e limites
Executar instalação, build e testes de contrato. A revisão independente do coordenador deve conferir screenshots desktop/mobile, recorte das fotografias, teclado, foco e console. Não considerar build como prova de inspeção visual. Sem backend, contas, envio de mensagens, reservas ou coleta de dados.
