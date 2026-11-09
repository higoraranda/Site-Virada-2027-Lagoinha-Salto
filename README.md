[Português (Brasil)](README.md) · [English](README.en.md)

<img src="public/media/01_LOGOS/PNG/02_simbolo-v27_amarelo.png" alt="Símbolo V27 amarelo da Virada Lagoinha Salto" width="160">

# Vira Salto 27

Landing page do **Culto da Virada da Lagoinha Salto**, para receber 2027 com a comunidade. Apresenta o encontro, reúne informações e encaminha a compra para uma plataforma externa quando o link estiver disponível.

![React 19.2](https://img.shields.io/badge/React-19.2-1E90FC?logo=react&logoColor=F6E8CE&labelColor=231714)
![TypeScript 5.9](https://img.shields.io/badge/TypeScript-5.9-1E90FC?logo=typescript&logoColor=F6E8CE&labelColor=231714)
![Vite 7.1](https://img.shields.io/badge/Vite-7.1-F8E520?logo=vite&logoColor=231714&labelColor=231714)

Este README documenta a **versão Higor**, independente da versão Samuel. O conteúdo desta pasta pode ser a raiz de um repositório próprio; a aplicação não depende da pasta superior do workspace. O remoto Git configurado é [Site-Virada-2027-Lagoinha-Salto](https://github.com/higoraranda/Site-Virada-2027-Lagoinha-Salto). Não foi confirmado um endereço público de produção.

![Abertura atual no desktop, com símbolo V27 amarelo e arte preenchendo a largura](docs/screenshots/desktop.png)

## Sumário

- [Início rápido](#início-rápido)
- [Visão geral](#visão-geral)
- [Demonstração](#demonstração)
- [Tecnologias](#tecnologias)
- [Execução local](#execução-local)
- [Arquitetura e estrutura](#arquitetura-e-estrutura)
- [Caso de uso completo](#caso-de-uso-completo)
- [Personalização](#personalização)
- [Solução de problemas](#solução-de-problemas)
- [Identidade visual](#identidade-visual)
- [Validação](#validação)
- [GitHub e publicação](#github-e-publicação)
- [Pendências e créditos](#pendências-e-créditos)

## Início rápido

Pré-requisitos: **Node.js 24.x** e **pnpm 11.25.0**, conforme `package.json` e `.nvmrc`. Dentro da pasta `site higor` deste workspace, ou da raiz de um clone independente desta versão:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Acesse [http://127.0.0.1:5174/](http://127.0.0.1:5174/). A página funciona sem `.env.local`, banco, autenticação ou backend. Nesse estado, a compra aparece como **Vendas em breve**. Para encerrar o servidor, pressione `Ctrl+C` no terminal que o iniciou.

Se pnpm não estiver instalado, use `npx --yes pnpm@11.25.0` no lugar de `pnpm`, com npm/npx disponíveis na instalação do Node.

## Visão geral

| Informação                         | Implementação atual                                                           |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| Evento                             | Vira Salto 27 — Culto da Virada                                               |
| Organização                        | Lagoinha Salto                                                                |
| Data                               | 31 de dezembro de 2026, recebendo 2027                                        |
| Início do culto e alvo da contagem | 22h, horário de Brasília (UTC−03:00)                                          |
| Locais apresentados                | Lagoinha Salto, em Salto/SP; Restaurante Santa Rita, em Itu/SP, para o jantar |
| Idioma da interface                | Português brasileiro                                                          |
| Arquitetura                        | Página estática em React, sem backend ou checkout próprio                     |

### O que está implementado

- Home com artes oficiais, logo à esquerda e botão de ingressos à direita. A logo usa o símbolo V27 amarelo. No desktop, a arte principal ocupa toda a largura e é estendida apenas horizontalmente, mantendo a altura anterior; até 760px, preserva a proporção e o enquadramento do celular. A imagem Welcome abaixo também ocupa 100% no celular.
- Contagem regressiva com dias, horas, minutos e segundos; ao chegar ao alvo, mostra uma mensagem de celebração.
- Faixa “VIVA O NOVO ANO” e galeria com 12 fotos da última virada, ambas deslizando continuamente para a esquerda, sem botões de pausa.
- Dois mapas do Google com carregamento adiado, títulos descritivos e links para abrir as localizações em outra aba.
- Perguntas frequentes com `details`/`summary`, navegação por âncoras no rodapé, link para pular ao conteúdo e chamada de ingressos fixa no celular.
- Seis pontos de chamada para ingressos, com comportamento centralizado e estado desativado quando falta uma URL HTTPS válida.

## Demonstração

Capturas reais do **build local em Chrome, em 08/11/2026**, com ingressos no estado sem URL de compra. A imagem principal acima mostra a abertura em 1440 × 900; a página continua abaixo da área visível. As animações foram congeladas somente durante a captura. Não são mockups.

### Celular — 390 × 844

<img src="docs/screenshots/mobile.png" alt="Abertura no celular com símbolo amarelo, hero proporcional e chamada fixa de ingressos na base" width="320">

A arte preserva o enquadramento do celular, e a chamada de ingressos fica disponível na base durante a navegação.

### Contagem regressiva

![Contador com dias, horas, minutos e segundos até o início do culto](docs/screenshots/countdown.png)

O visitante acompanha o tempo até **31/12/2026 às 22h de Brasília**. O contador usa o relógio do dispositivo.

### Recordações da última virada

![Galeria horizontal com fotos reais da última virada](docs/screenshots/memories.png)

A seção apresenta 12 fotos cadastradas, repetidas em dois grupos para manter o movimento contínuo. Não há controles de navegação ou pausa.

### Perguntas e disponibilidade de ingressos

![FAQ com a pergunta sobre compra aberta e informação de vendas ainda não iniciadas](docs/screenshots/faq.png)

O visitante abre as perguntas para consultar respostas. A resposta de compra acompanha o mesmo estado dos botões de ingresso.

## Tecnologias

| Tecnologia                                  | Uso                                                                                      |
| ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| React e React DOM 19.2.0                    | Componentes, estado e montagem da interface                                              |
| TypeScript 5.9.3                            | Tipagem e verificação estática                                                           |
| Vite 7.1.12 e plugin React 5.0.4            | Desenvolvimento, transformação e build estático                                          |
| CSS e FontFace API                          | Layout responsivo, animações, tokens e carregamento das fontes locais                    |
| Vitest 3.2.4                                | Testes automatizados                                                                     |
| Testing Library React 16.3.0 e jsdom 27.0.1 | Renderização e interação nos testes de componentes                                       |
| Playwright 1.61.1 e Axe Playwright 4.11.0   | Ferramentas de verificação de navegador disponíveis como dependências de desenvolvimento |
| Prettier 3.6.2                              | Formatação, disponível via `pnpm exec prettier`                                          |

A instalação é definida por `pnpm-lock.yaml`; `package.json` fixa **pnpm 11.25.0** e **Node.js 24.x**. `pnpm-workspace.yaml` autoriza o script de instalação do esbuild usado pelo Vite.

## Execução local

### Pré-requisitos

- Node.js **24.x**, também indicado em `.nvmrc`.
- pnpm **11.25.0**, ou npm/npx de uma instalação padrão do Node para executar os comandos abaixo.

Use a pasta e os comandos do [início rápido](#início-rápido). A porta 5174 é fixa: o Vite falha se ela estiver ocupada.

Com pnpm disponível, os scripts são:

| Comando          | Resultado                                             |
| ---------------- | ----------------------------------------------------- |
| `pnpm dev`       | Servidor local na porta 5174                          |
| `pnpm typecheck` | Verificação TypeScript com `tsc -b`                   |
| `pnpm test`      | Execução dos testes com Vitest                        |
| `pnpm build`     | Verificação de tipos e geração do build em `dist/`    |
| `pnpm preview`   | Prévia local do build; endereço informado no terminal |

Sem pnpm global, substitua `pnpm` por `npx --yes pnpm@11.25.0` nesses comandos. Nenhum deles publica a aplicação.

### Variável de ambiente

Copie `.env.example` para `.env.local` somente se quiser configurar ingressos localmente:

| Variável          | Obrigatória | Uso                                          |
| ----------------- | ----------- | -------------------------------------------- |
| `VITE_TICKET_URL` | Não         | URL HTTPS da plataforma externa de ingressos |

Sem valor, com URL inválida ou com protocolo diferente de HTTPS, todos os botões exibem **“Vendas em breve”** e ficam desativados. Uma URL válida ativa **“Comprar ingresso”**, em nova aba, com `noopener noreferrer`. URLs com credenciais embutidas também são rejeitadas.

Reinicie o servidor após editar o ambiente. Variáveis `VITE_` ficam públicas no build; este campo recebe somente o link de compra. Arquivos `.env` são ignorados pelo Git; `.env.example` permanece versionável.

## Arquitetura e estrutura

`src/main.tsx` carrega as fontes e monta `App`. A configuração local fornece textos, informações e caminhos de mídia; componentes React renderizam as seções, e o Vite gera arquivos estáticos em `dist/`. Não existem API própria, banco de dados, autenticação, pagamentos internos ou workers.

```mermaid
flowchart LR
  Config["config.ts + public/"] --> UI["React no navegador"]
  UI --> Maps["Google Maps: mapas e links"]
  UI --> Tickets["Plataforma externa: URL HTTPS configurada"]
```

Google Maps recebe consultas por nome e cidade, sem chave de API configurada. A plataforma de ingressos recebe o visitante em outra aba; a compra e sua confirmação acontecem fora do site. O contador é calculado localmente, sem chamadas a servidor.

```text
src/
  App.tsx             Seções e composição da página
  config.ts           Informações, textos, artes, fontes e fotos
  fonts.ts            Carregamento das fontes pela FontFace API
  components/         Contador, ingressos, mapas, galeria e mídia
  lib/                Cálculo da contagem e validação da URL
  styles.css          Layout, estados e animações
  tokens.css          Cores, fontes, espaçamento e limites
public/
  fonts/              Arquivos de fontes e licença fornecida
  media/              Artes, logotipos, materiais da marca e fotos
    jantar-ano-passado/ Fotos da galeria, em ordem de nome
docs/screenshots/    Capturas reais usadas nos READMEs
tests/               Testes de lógica e componentes
index.html           Entrada, idioma e metadados
vite.config.ts       Configuração do Vite e do Vitest
vercel.json          Configuração de instalação e build na Vercel
```

| Componente                        | Responsabilidade                                                                        |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| `TicketButton.tsx`                | Ação de compra e estado sem URL                                                         |
| `Countdown.tsx`                   | Atualização por segundo e mensagem ao chegar ao alvo                                    |
| `Locations.tsx`                   | Dois mapas e seus links externos                                                        |
| `NewYearStrip.tsx`                | Faixa contínua com texto repetido                                                       |
| `PastDinner`, em `RingDinner.tsx` | Galeria horizontal contínua; o nome do arquivo é histórico, sem anel 3D na versão atual |
| `Media.tsx`                       | Renderização de artes, fotos configuráveis e fallback de falha                          |

### Referências BH e USA

`MODELOS/Vira Brasil BH` e `MODELOS/Vira Brasil USA`, presentes no workspace original, fora da pasta `site higor`, foram referências de **estrutura e experiência**: abertura, ritmo das seções, contagem e chamadas de ingresso. Não fazem parte desta pasta independente e não são necessários para instalar ou compilar o site. Sua identidade visual e seus dados de evento não substituem os materiais de Salto.

## Caso de uso completo

**Contexto:** uma pessoa quer planejar a participação da família no Culto da Virada. **Pré-requisito:** site iniciado conforme o início rápido. **Estado observado:** URL de ingresso ausente.

1. Abra a home e confira o nome do evento e a data. Acesse a seção de contagem para acompanhar o tempo restante.
2. No rodapé, escolha **Localização**. O site apresenta a igreja em Salto/SP e o restaurante em Itu/SP. Cada cartão oferece **Abrir no Google Maps**.
3. No rodapé, escolha **Dúvidas** e abra **Como faço para comprar meu ingresso?**. A resposta informa que a venda ainda não começou.
4. Escolha **Ingressos** no rodapé. Confira a data, o início às 22h e a chamada **Vendas em breve**, desativada.

**Resultado:** o visitante encontra as informações disponíveis e identifica a disponibilidade de compra. O fluxo de navegação e consulta ao FAQ foi executado em Chrome no desktop e no celular; URLs dos mapas foram inspecionadas, sem validar o conteúdo externo dos pins. Evidências: [prints](#demonstração) e [relatório de navegador](docs/verification/readme-2026-11-08.json).

**Quando houver URL válida:** pelo código e pelos testes de `TicketButton`, os seis pontos de compra passam a **Comprar ingresso** e abrem o mesmo destino HTTPS em nova aba. Não foi realizada compra nem testada uma plataforma de pagamento real nesta revisão.

## Personalização

### Textos, evento e ingressos

A configuração central fica em [`src/config.ts`](src/config.ts):

| Campo                                                          | O que editar                                                               |
| -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`, `church`, `date`, `dateLabel`, `startTime`, `location` | Identificação, data, horário exibido e local                               |
| `copy`, `faq`, `navigation`                                    | Textos das seções, perguntas e links do rodapé                             |
| `venues`                                                       | Nomes, cidades e consultas usadas nos mapas                                |
| `ticketUrl`                                                    | Lê `VITE_TICKET_URL`; configure o ambiente para trocar o destino de compra |
| `artworks`, `fonts`                                            | Caminhos, descrições, dimensões e pesos das artes/fontes                   |
| `photos.venue`                                                 | Foto opcional do local; ausente, aparece um bloco textual                  |

Metadados de título, descrição e Open Graph ficam em [`index.html`](index.html). Se alterar nome, data ou mensagem do evento, revise também esses metadados e os textos correspondentes.

### Contagem regressiva

O alvo implementado e confirmado é **31/12/2026 às 22h, horário de Brasília**:

```ts
countdownTarget: "2026-12-31T22:00:00-03:00";
```

O cálculo usa esse instante absoluto, independentemente do fuso do visitante, e zera ao chegar ao alvo, sem avançar automaticamente para outro ano. A hora atual vem do relógio do dispositivo, sem sincronização com servidor.

Para uma alteração futura, revise `countdownTarget`, `startTime`, `copy.countdownNote`, a resposta correspondente no FAQ e `tests/event.test.tsx`, que atualmente fixa 22h.

### Fotos, artes e fontes

- **Galeria:** adicione arquivos em `public/media/jantar-ano-passado/`. Eles são descobertos automaticamente no build, ordenados por nome com comparação numérica. Formatos: `jpg`, `jpeg`, `png`, `webp` e `avif`; também são aceitos `JPG`, `JPEG` e `PNG`. O nome da pasta foi preservado, mas a seção apresenta recordações do Culto da Virada.
- **Descrições e enquadramento:** ajuste o mapeamento `dinnerPhotos` em `src/config.ts` para personalizar `alt`, `fit` e `position`. O padrão atual é `cover`; tamanho e proporção dos cartões ficam em `.memory-card`, em `src/styles.css`.
- **Artes:** a home usa `public/media/home_image.png`; Welcome, `public/media/foto_abaixo_home.png`; o logo da página, `public/media/01_LOGOS/PNG/02_simbolo-v27_amarelo.png`. Ao trocar um arquivo, atualize o caminho, a descrição e as dimensões em `artworks`.
- **Fontes:** os textos em CAPS preservam `MonumentExtended-Regular.otf` (400) e `TuskerGrotesk-5700Bold.otf` (700), em `public/fonts/`. O corpo usa Neue Haas Grotesk Display Pro ou Text Pro quando instalada, com Arial como alternativa. O arquivo da Neue Haas ainda não acompanha o projeto: para servi-la a todos os visitantes, adicione o arquivo em `public/fonts/` e configure `fonts.body` com `{ src: "/fonts/nome-do-arquivo.woff2", weight: "400" }` (ou o intervalo de pesos de uma fonte variável). `src/fonts.ts` aplica as famílias após o carregamento. Os tokens de tipografia ficam em `src/tokens.css`; `.eyebrow` e `.hero-event-date` usam `--font-display` para manter a fonte anterior dos rótulos em CAPS.

Novas fotos ou mudanças no ambiente de produção precisam de novo build/deploy para aparecer no site publicado.

## Solução de problemas

| Sintoma                                                | O que conferir                                                                                                                                                                     |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Porta 5174 ocupada                                     | Encerre sua instância anterior com `Ctrl+C`; `--strictPort` impede escolher outra porta silenciosamente.                                                                           |
| Botão em “Vendas em breve”                             | Verifique `VITE_TICKET_URL`: exige HTTPS sem credenciais embutidas. Reinicie o Vite ou gere novo build após mudar o ambiente.                                                      |
| Arte ou foto não aparece                               | Confira caminho e extensão, inclusive maiúsculas. A URL começa em `/media/`, sem `/public/`.                                                                                       |
| Fonte diferente                                        | Confirme arquivos em `public/fonts/`; Neue Haas depende da instalação local enquanto `fonts.body` for `null`.                                                                      |
| Mapas indisponíveis                                    | Os iframes dependem de conexão e do Google; cada cartão também oferece um link externo.                                                                                            |
| Erro ao carregar `vite.config.ts` em ambiente restrito | O runner do Vite foi usado nesta revisão: `pnpm exec vite build --configLoader runner`; execute `pnpm typecheck` antes. Para testes, `pnpm exec vitest run --configLoader runner`. |

## Identidade visual

As artes, logotipos, fontes e a paleta são os materiais fornecidos para **Vira Salto**. As versões BH e USA orientam a estrutura e a experiência, sem definir a marca desta página. Os logotipos exibidos neste README são arquivos oficiais existentes, sem redesenho.

| Cor     | Token      | Valor     |
| ------- | ---------- | --------- |
| Creme   | `--cream`  | `#F6E8CE` |
| Azul    | `--blue`   | `#1E90FC` |
| Amarelo | `--yellow` | `#F8E520` |
| Escuro  | `--ink`    | `#231714` |

A fonte de verdade da paleta é [`src/tokens.css`](src/tokens.css). Layout e animações ficam em [`src/styles.css`](src/styles.css); a estrutura das seções, em `src/App.tsx`. Os botões de ingressos usam o amarelo da paleta.

## Validação

Verificações executadas em **08/11/2026**, com Node.js **24.22.1** e dependências já instaladas. Como npm/pnpm não estavam no PATH desta sessão e o carregamento padrão do config encontrou restrição de acesso do sandbox, foram usados diretamente os executáveis locais:

| Comando ou verificação                                           | Resultado                                                                                                 |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `node node_modules/typescript/bin/tsc -b`                        | Aprovado                                                                                                  |
| `node node_modules/vite/bin/vite.js build --configLoader runner` | Build estático concluído em `dist/`                                                                       |
| `node node_modules/vitest/vitest.mjs run --configLoader runner`  | 22 testes aprovados em 2 arquivos                                                                         |
| Chrome, build local                                              | Home, localização, FAQ e ingressos em 1440 × 900 e 390 × 844; sem erros JavaScript ou overflow horizontal |

A instalação do zero não foi repetida: as instruções de instalação correspondem ao manifest, ao lockfile e à configuração existente. O [relatório de navegador](docs/verification/readme-2026-11-08.json) registra o fluxo e os cenários observados.

Os testes cobrem cálculo e ciclo de vida do contador, validação da URL, estado de compra, ordem de seções, ausência de controles de pausa e fallback de imagem. As verificações de navegador confirmaram fontes e artes carregadas, seis chamadas desativadas, 12 fotos cadastradas e dois mapas embutidos; não certificam a disponibilidade externa do Google Maps.

A preferência por movimento reduzido desliga várias animações, mas a faixa de fotos mantém uma regra `animation: ... !important`; a redução de movimento não é completa nessa galeria. Essa limitação foi identificada sem alterar o comportamento da aplicação.

Não há script `test:browser`, `lint`, `format` ou pipeline de CI nesta pasta. Playwright e Axe estão instalados como ferramentas, mas isso não equivale a uma auditoria completa de acessibilidade ou a testes em todos os navegadores. Relatórios antigos da pasta superior descrevem etapas anteriores, inclusive formatos de carrossel já substituídos.

## GitHub e publicação

### Repositório

O Git local tem `origin` configurado para [higoraranda/Site-Virada-2027-Lagoinha-Salto](https://github.com/higoraranda/Site-Virada-2027-Lagoinha-Salto). Isso confirma a configuração local, sem afirmar a visibilidade ou o estado remoto do repositório.

Esta pasta é uma aplicação independente; mantenha seu conteúdo como raiz de um repositório dedicado. `site samuel` e a aplicação na pasta superior são versões separadas e não são dependências da versão Higor. Os modelos BH/USA também não são necessários em execução.

Inclua os READMEs, `docs/screenshots/`, `docs/verification/`, código, arquivos de `public/`, testes e configurações. O `.gitignore` exclui dependências, build, caches, relatórios locais de teste, `.env` e estado da Vercel. Nenhum commit, push ou deploy foi executado nesta revisão.

### Vercel

A configuração verificável está em [`vercel.json`](vercel.json):

| Configuração     | Valor                                              |
| ---------------- | -------------------------------------------------- |
| Framework        | Vite                                               |
| Install Command  | `npx --yes pnpm@11.25.0 install --frozen-lockfile` |
| Build Command    | `npx --yes pnpm@11.25.0 run build`                 |
| Output Directory | `dist`                                             |
| Node.js          | `24.x`, conforme `package.json`                    |

Após importar o repositório contendo apenas esta versão, use **Root Directory: `./`**. Se mantiver o workspace inteiro no repositório, o diretório da aplicação passa a ser `site higor`. Configure `VITE_TICKET_URL` nos ambientes desejados quando tiver a URL oficial e faça novo deploy após alterar esse valor. A página usa âncoras, sem necessidade de backend ou rotas de servidor.

Os valores acima foram conferidos nos arquivos locais, sem executar publicação ou consultar o painel da Vercel. Nenhuma URL de produção foi confirmada.

## Pendências e créditos

- **Ingressos:** `VITE_TICKET_URL` está vazio no exemplo; a compra permanece indisponível na prévia capturada. Valores e condições não estão cadastrados.
- **Vídeo:** a área Welcome continua usando uma imagem estática; não existe player implementado.
- **Publicação:** há repositório Git local e remoto configurado; nenhum endereço público de produção foi confirmado nesta revisão.
- **Licenças:** não foi encontrada licença geral do código. O [acordo da Monument](public/fonts/Monument-Personal-license-agreement.txt) limita os pesos fornecidos a uso pessoal e restringe redistribuição. As [orientações do kit](public/media/05_FONTES/LEIA-ME_FONTES.txt) também exigem licenciamento das fontes comerciais. Confirme os direitos de publicação e distribuição das fontes e materiais antes de subir um repositório público ou publicar o site. Nenhuma licença MIT ou autorização adicional foi adicionada.

Organização do evento: **Lagoinha Salto**. Materiais visuais: identidade fornecida para **Vira Salto**. Créditos tipográficos identificados nos arquivos: **Pangram Pangram** (Monument Extended) e **Lewis McGuffie Type** (Tusker Grotesk).
