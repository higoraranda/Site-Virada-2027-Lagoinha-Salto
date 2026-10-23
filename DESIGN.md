# Tipografia — versão Higor

Fonte canônica: `src/tokens.css` (tokens em CSS; este documento registra a decisão do usuário).

- Corpo, descrições, FAQ, links e botões em caixa normal: Neue Haas Grotesk Display Pro, com Text Pro e Arial como alternativas, via `--font-body`.
- Textos em CAPS: preservar as fontes atuais. Títulos, contador, faixa e textos de fallback usam Tusker Grotesk 5700 Bold (`--font-condensed`). Rótulos `.eyebrow` e data da home `.hero-event-date` usam Monument Extended Regular (`--font-display`).
- Artes e logotipos mantêm sua tipografia original embutida nas imagens.

`src/config.ts` configura os arquivos; `src/fonts.ts` carrega cada família e atualiza o token correspondente. Neue Haas ainda não foi fornecida: o CSS consulta a instalação local, usando Arial na ausência dela. Para carregamento independente da máquina, preencher `fonts.body` com o caminho do arquivo fornecido em `public/fonts/`.

Paleta, tamanhos, espaçamentos e estrutura permanecem definidos pelos tokens e estilos existentes da versão Higor.
