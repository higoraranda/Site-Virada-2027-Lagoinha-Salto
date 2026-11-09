# Tipografia — versão Higor

Fonte canônica: `src/tokens.css` (tokens em CSS; este documento registra a decisão do usuário).

- Corpo, descrições, FAQ, links e botões em caixa normal: Neue Haas Grotesk Display Pro, com Text Pro e Arial como alternativas, via `--font-body`.
- Textos em CAPS: preservar as fontes atuais. Títulos, contador, faixa e textos de fallback usam Tusker Grotesk 5700 Bold (`--font-condensed`). Rótulos `.eyebrow` e data da home `.hero-event-date` usam Monument Extended Regular (`--font-display`).
- Artes e logotipos mantêm sua tipografia original embutida nas imagens.

`src/config.ts` configura os arquivos; `src/fonts.ts` carrega cada família e atualiza o token correspondente. Neue Haas ainda não foi fornecida: o CSS consulta a instalação local, usando Arial na ausência dela. Para carregamento independente da máquina, preencher `fonts.body` com o caminho do arquivo fornecido em `public/fonts/`.

Paleta, tamanhos, espaçamentos e estrutura permanecem definidos pelos tokens e estilos existentes da versão Higor.

Logo canônica: `public/media/01_LOGOS/PNG/02_simbolo-v27_amarelo.png`, símbolo V27 amarelo utilizado na abertura e no encerramento.

Hero: acima de 760px, a arte ocupa toda a largura, estendida apenas horizontalmente; sua altura equivale à apresentação anterior em 70% da largura (proporção de exibição 1920 / 756). Até 760px, preservar a proporção original e o enquadramento existente.
