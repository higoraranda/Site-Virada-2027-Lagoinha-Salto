export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
export type Photo = ImageAsset & {
  position?: string;
  fit?: "contain" | "cover";
  aspectRatio?: string;
};
export type FontAsset = { src: string; weight: string };

const dinnerFiles = import.meta.glob<string>(
  "/public/media/jantar-ano-passado/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}",
  { eager: true, query: "?url", import: "default" },
);
const dinnerPhotos: Photo[] = Object.keys(dinnerFiles)
  .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }))
  .map((path, i) => ({
    src: path.replace("/public", ""),
    alt: `Registros da última virada — foto ${i + 1}`,
    fit: "cover",
  }));

// Preencha somente com informações e materiais confirmados de Salto.
export const eventConfig = {
  name: "Vira Salto 27",
  church: "Lagoinha Salto",
  date: "2026-12-31",
  dateLabel: "31 de dezembro de 2026",
  shortDate: "31.12.2026",
  arrivingYear: "2027",
  countdownTarget: "2026-12-31T22:00:00-03:00",
  startTime: "22h · horário de Brasília" as string | null,
  companions: "Sua família",
  location: "Lagoinha Salto · Salto, SP" as string | null,
  venues: [
    {
      name: "Lagoinha Salto",
      label: "Culto da Virada",
      city: "Salto, SP",
      mapQuery: "Igreja Batista da Lagoinha Salto SP",
    },
    {
      name: "Restaurante Santa Rita",
      label: "Jantar da Virada",
      city: "Itu, SP",
      mapQuery: "Espaço Santa Rita restaurante Itu SP",
    },
  ],
  ticketUrl: import.meta.env.VITE_TICKET_URL ?? "",
  fonts: {
    display: {
      src: "/fonts/MonumentExtended-Regular.otf",
      weight: "400",
    } as FontAsset | null,
    condensed: {
      src: "/fonts/TuskerGrotesk-5700Bold.otf",
      weight: "700",
    } as FontAsset | null,
  },
  artworks: {
    logo: {
      src: "/media/logo_lagoinha_salto_virada.png",
      alt: "Logo da Virada Lagoinha Salto",
      width: 3000,
      height: 1894,
    } as ImageAsset | null,
    hero: {
      src: "/media/home_image.png",
      alt: "Vira Salto 27",
      width: 1920,
      height: 1080,
    } as ImageAsset | null,
    belowHero: {
      src: "/media/foto_abaixo_home.png",
      alt: "Welcome to the new year",
      width: 1920,
      height: 1080,
    } as ImageAsset | null,
    newYear: null as ImageAsset | null,
    closing: null as ImageAsset | null,
  },
  photos: {
    pastDinner: dinnerPhotos,
    congregation: null as Photo | null,
    worship: null as Photo | null,
    venue: null as Photo | null,
    participants: [] as Photo[],
  },
  navigation: [
    { href: "#sobre", label: "O encontro" },
    { href: "#virada", label: "A virada" },
    { href: "#ano-passado", label: "Ano passado" },
    { href: "#localizacao", label: "Localização" },
    { href: "#ingressos", label: "Ingressos" },
    { href: "#duvidas", label: "Dúvidas" },
  ],
  copy: {
    dinnerEyebrow: "Culto da Virada",
    dinnerTitle: "Como foi\nno ano passado",
    dinnerDescription:
      "Uma noite de fé, comunhão e gratidão. Relembre a nossa última virada e prepare o coração para receber 2027 na presença de Deus, com sua família e a Lagoinha Salto.",
    dinnerPhotosPending: "Fotos da última virada em breve",
    dinnerGalleryLabel: "Recordações da nossa última virada",
    skip: "Pular para o conteúdo",
    eventType: "Culto da Virada",
    available: "Comprar ingresso",
    unavailable: "Vendas em breve",
    external: "Abre a plataforma de ingressos em nova aba",
    heroIntro: "Um novo ano. Um encontro para viver juntos.",
    newYearStrip: "VIVA O NOVO ANO",
    heroTitleLines: ["Vira", "Salto"],
    heroYear: "27",
    heroMonth: "Dezembro",
    heroGratitude: "Gratidão pelo que vivemos.",
    heroHope: "Esperança pelo que vem.",
    heroDescription:
      "Vamos receber 2027 na presença de Deus, com a Lagoinha Salto.",
    discover: "Conheça o encontro",
    aboutEyebrow: "Um encontro. Um novo começo.",
    aboutTitle: "O ano muda.\nA fé nos reúne.",
    aboutParagraphs: [
      "Há algo especial em encerrar um ciclo com gratidão e começar outro com esperança.",
      "O Culto da Virada é um convite para estarmos juntos na presença de Deus. No dia 31 de dezembro, a Lagoinha Salto se reúne para receber 2027. Venha viver esse momento com a gente.",
    ],
    countdownEyebrow: "Contagem para o início do culto",
    countdownLabel: "Tempo até o início do culto",
    countdownTitle: "O novo se aproxima.",
    countdownNote:
      "O culto começa em 31/12/2026, às 22h, no horário de Brasília.",
    celebration:
      "Chegou a hora do nosso encontro! Vamos celebrar juntos na presença de Deus.",
    communityEyebrow: "Lagoinha Salto",
    communityTitle: "O melhor é\nestarmos juntos.",
    communityDescription:
      "Fé, gratidão e comunhão. É com esse coração que queremos começar o novo ano.",
    congregationFallback: "Um lugar para\nestarmos juntos.",
    congregationCaption: "Nossa comunidade",
    worshipFallback: "Uma só fé.\nMuitas histórias.",
    worshipCaption: "Louvor e comunhão",
    venueFallback: "Nos encontramos\nna virada.",
    venueCaption: "Nosso lugar de encontro",
    locationEyebrow: "Onde nos encontrar",
    locationTitle: "Nossa localização\ne o jantar da virada",
    locationDescription:
      "Confira no mapa a localização da igreja e do jantar da virada.",
    openMap: "Abrir no Google Maps",
    participantsTitle: "Gente que faz parte deste encontro",
    ticketsEyebrow: "Anote na agenda",
    ticketsTitle: "Seu próximo ano\ncomeça aqui.",
    dateField: "Quando",
    churchField: "Com quem",
    locationField: "Local",
    timeField: "Início do culto",
    detailsPending:
      "O horário de início e os detalhes do local ainda não foram divulgados.",
    locationPending: "Os detalhes do local ainda não foram divulgados.",
    timePending: "O horário de início ainda não foi divulgado.",
    ticketTitle: "Vamos viver\nessa virada?",
    ticketPending:
      "A venda de ingressos ainda não começou. Quando estiver disponível, você poderá acessar a plataforma de compra por aqui.",
    ticketAvailable:
      "Os ingressos estão disponíveis na plataforma de compra. Consulte por lá os valores e as condições.",
    ticketFootnote: "Vira Salto 27 · Culto da Virada",
    faqEyebrow: "Antes de nos encontrarmos",
    faqTitle: "Ficou com\nalguma dúvida?",
    closingEyebrow: "31 de dezembro · Lagoinha Salto",
    closingTitle: "Viva o novo ano.",
    closingDescription: "Vamos receber 2027 juntos, na presença de Deus.",
    footerLine: "Culto da Virada · 31 de dezembro de 2026",
    backToTop: "Voltar ao início",
  },
  faq: [
    {
      question: "Quando acontece o Culto da Virada?",
      answer:
        "O encontro acontece em 31 de dezembro de 2026, para recebermos 2027 juntos com a Lagoinha Salto.",
    },
    {
      question: "O que significa o 27 no nome?",
      answer:
        "O 27 representa a chegada de 2027. O Culto da Virada acontece no último dia de 2026.",
    },
    {
      question: "Como faço para comprar meu ingresso?",
      kind: "tickets" as const,
    },
    {
      question: "A contagem regressiva indica o início do culto?",
      answer:
        "Sim. O culto começa em 31 de dezembro de 2026, às 22h, no horário de Brasília. A contagem regressiva acompanha esse horário.",
    },
  ],
};
