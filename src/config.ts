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
export type FaqItem = {
  question: string;
  answer: string[];
  items?: { label: string; text: string }[];
  notice?: string;
  note?: string;
};

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
  countdownTarget: "2027-01-01T00:00:00-03:00",
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
  ticketUrl:
    import.meta.env.VITE_TICKET_URL?.trim() ||
    "https://api.whatsapp.com/send/?phone=5511950740169&text=Ol%C3%A1%21+Vim+pelo+site+da+Virada+e+gostaria+de+garantir+meu+acesso!&type=phone_number&app_absent=0",
  fonts: {
    display: {
      src: "/fonts/MonumentExtended-Regular.otf",
      weight: "400",
    } as FontAsset | null,
    condensed: {
      src: "/fonts/TuskerGrotesk-5700Bold.otf",
      weight: "700",
    } as FontAsset | null,
    // Configure o arquivo da Neue Haas aqui quando ele estiver disponível.
    body: null as FontAsset | null,
  },
  artworks: {
    logo: {
      src: "/media/01_LOGOS/PNG/02_simbolo-v27_amarelo.png",
      alt: "Símbolo V27 amarelo da Virada Lagoinha Salto",
      width: 3000,
      height: 1698,
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
    closing: null as ImageAsset | null,
  },
  photos: {
    pastDinner: dinnerPhotos,
    congregation: null as Photo | null,
    worship: null as Photo | null,
    venue: {
      src: "/media/encontro-lagoinha.jpg",
      alt: "Comunidade reunida em louvor, diante do palco iluminado da igreja",
      width: 1200,
      height: 800,
      fit: "cover",
      position: "50% 50%",
    } as Photo | null,
    participants: [] as Photo[],
  },
  navigation: [
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
    available: "COMPRE AQUI",
    unavailable: "Vendas em breve",
    external: "Abre o WhatsApp em nova aba",
    heroIntro: "Um novo ano. Um encontro para viver juntos.",
    newYearStrip: "VIVA O NOVO ANO",
    heroTitleLines: ["Vira", "Salto"],
    heroYear: "27",
    heroMonth: "Dezembro",
    heroGratitude: "Gratidão pelo que vivemos.",
    heroHope: "Esperança pelo que vem.",
    heroDescription:
      "Vamos receber 2027 na presença de Deus, com a Lagoinha Salto.",
    countdownEyebrow: "Contagem para a virada de 2027",
    countdownLabel:
      "Tempo até a meia-noite de 1º de janeiro de 2027, horário de Brasília",
    countdownTitle: "O novo se aproxima.",
    countdownNote:
      "Contagem até a meia-noite de 1º de janeiro de 2027, no horário de Brasília. O culto começa em 31/12/2026, às 22h.",
    celebration: "Chegou 2027! Vamos celebrar juntos na presença de Deus.",
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
      "O culto é gratuito. Para garantir seu ingresso do jantar da virada, clique em COMPRE AQUI e fale com a equipe pelo WhatsApp.",
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
      question: "Quem pode participar do evento? Preciso comprar ingresso?",
      answer: [
        "Todos são bem-vindos ao Vira Salto 2027! O culto é gratuito e aberto a todos, independentemente de frequentarem ou não a Lagoinha.",
        "O ingresso é necessário apenas para participar do jantar da virada. Você pode participar somente do culto, somente do jantar ou de ambos.",
      ],
    },
    {
      question:
        "Como posso comprar meu ingresso e quais são as formas de pagamento?",
      answer: [
        "Os ingressos são individuais e podem ser adquiridos presencialmente na igreja ou pelo WhatsApp oficial, acessível pelo botão de compra neste site.",
        "Aceitamos Pix e cartão, sendo que pagamentos com cartão estão sujeitos à taxa da máquina.",
      ],
      notice: "Não haverá venda de ingressos no dia do evento.",
    },
    {
      question: "Como funcionará a confirmação e a entrada no jantar?",
      answer: [
        "No momento da compra, será necessário cadastrar os dados de cada participante.",
        "Na entrada do restaurante, a equipe realizará a conferência desses dados para liberar o acesso. Por isso, é importante que todas as informações estejam corretas e atualizadas.",
      ],
    },
    {
      question: "Qual será a programação e o horário do culto e do jantar?",
      answer: [
        "O culto da virada terá início às 22h do dia 31 de dezembro de 2026.",
        "À meia-noite, teremos um momento especial de oração para receber o novo ano. Após a oração, o culto será encerrado.",
        "O jantar acontecerá após o término do culto, sem um horário exato de início definido.",
      ],
    },
    {
      question:
        "Onde acontecerão o culto e o jantar? Haverá estacionamento e acessibilidade?",
      answer: [
        "O culto e o jantar acontecerão em locais diferentes. Os endereços estão disponíveis neste site.",
        "Haverá estacionamento e acessibilidade para os participantes.",
        "Não será disponibilizado transporte coletivo da igreja para todos os participantes. O deslocamento entre os locais deverá ser organizado individualmente.",
      ],
    },
    {
      question: "O que está incluído no ingresso do jantar da virada?",
      answer: [
        "O ingresso garante a participação no jantar especial de Ano-Novo, que contará com buffet de comidas, bebidas, opções infantis e sobremesas.",
        "O ingresso é destinado exclusivamente ao jantar, já que a participação no culto é gratuita.",
      ],
    },
    {
      question: "Crianças pagam ingresso? Haverá espaço kids?",
      answer: [
        "Sim! Teremos um espaço kids preparado especialmente para as crianças, com monitores de recreação e brinquedos infláveis.",
        "Os valores dos ingressos seguem a faixa etária:",
      ],
      items: [
        { label: "Até 6 anos:", text: "entrada gratuita." },
        { label: "De 7 a 12 anos:", text: "meia-entrada." },
        { label: "A partir de 13 anos:", text: "ingresso com valor integral." },
      ],
    },
    {
      question: "Os lugares e as mesas serão reservados?",
      answer: [
        "Não haverá lugares ou mesas previamente definidos.",
        "Os participantes poderão escolher livremente onde desejam se sentar, conforme a disponibilidade no momento da chegada.",
      ],
    },
    {
      question:
        "Posso transferir, cancelar ou solicitar reembolso do meu ingresso?",
      answer: [
        "A transferência do ingresso para outra pessoa será permitida, desde que os dados do novo participante sejam informados presencialmente na igreja, para atualização do cadastro.",
        "Conforme a política informada pela organização, não estão previstos cancelamentos nem reembolsos.",
      ],
      note: "Essa política está sujeita aos direitos obrigatórios previstos na legislação aplicável, especialmente em compras à distância, e não exclui direitos legais.",
    },
    {
      question: "Como posso entrar em contato com a organização?",
      answer: [
        "Para esclarecer dúvidas, solicitar informações ou comunicar alguma necessidade específica, entre em contato pelo WhatsApp oficial da Lagoinha Salto.",
        "Basta clicar no botão de contato ou compra de ingressos disponível neste site para iniciar a conversa com nossa equipe.",
      ],
    },
  ] as FaqItem[],
};
