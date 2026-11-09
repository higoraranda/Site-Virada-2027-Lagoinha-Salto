# Tipografia — versão Higor

Fonte canônica: `src/tokens.css` (tokens em CSS; este documento registra a decisão do usuário).

- Corpo, descrições, FAQ, links e botões: Neue Haas Grotesk Display Pro, com Text Pro e Arial como alternativas, via `--font-body`. Botões de ingresso e links de ação (Conheça o encontro, mapas e navegação do rodapé) usam caixa alta, preservando essa família.
- Textos em CAPS: preservar as fontes atuais. Títulos, contador, faixa e textos de fallback usam Tusker Grotesk 5700 Bold (`--font-condensed`). Rótulos `.eyebrow` e data da home `.hero-event-date` usam Monument Extended Regular (`--font-display`).
- Artes e logotipos mantêm sua tipografia original embutida nas imagens.

`src/config.ts` configura os arquivos; `src/fonts.ts` carrega cada família e atualiza o token correspondente. Neue Haas ainda não foi fornecida: o CSS consulta a instalação local, usando Arial na ausência dela. Para carregamento independente da máquina, preencher `fonts.body` com o caminho do arquivo fornecido em `public/fonts/`.

Paleta, tamanhos, espaçamentos e estrutura permanecem definidos pelos tokens e estilos existentes da versão Higor.

Logo canônica: `public/media/01_LOGOS/PNG/02_simbolo-v27_amarelo.png`, símbolo V27 amarelo utilizado na abertura e no encerramento.

Hero: acima de 760px, a arte ocupa toda a largura, estendida apenas horizontalmente; sua altura equivale à apresentação anterior em 70% da largura (proporção de exibição 1920 / 756). Até 760px, preservar a proporção original e o enquadramento existente.

Abertura: exibir somente a data acima da arte, sem o rótulo Culto da Virada. Data, ações e textos de apresentação têm tamanho ampliado para legibilidade. A imagem Welcome abaixo da hero chega a 1440px no desktop; no celular, continua com largura total e proporção original.

O painel azul de ingressos permanece no fluxo normal, centralizado verticalmente na grade da seção; não acompanha a rolagem. Os tamanhos responsivos e limites de largura ficam em `src/styles.css`.

Botões de venda têm altura mínima de 68px no corpo, 60px no canto da home e 56px nesse canto no celular; a chamada móvel tem mínimo de 60px. Todos os links do rodapé usam peso 700 (negrito).

As seis chamadas de venda exibem COMPRE AQUI e abrem em nova aba o link de WhatsApp fornecido pelo usuário, com telefone e mensagem preenchidos, sem enviar automaticamente. O destino padrão está em `src/config.ts`; uma `VITE_TICKET_URL` não vazia pode substituí-lo. O texto do painel e do FAQ orienta o contato pelo WhatsApp.
