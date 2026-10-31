/**
 * Configuração Central da Landing Page — Minha Vila de Natal 3D
 * 
 * Altere aqui facilmente links de checkout, URLs de vídeo, fotos reais
 * das edificações e textos de garantia ou suporte.
 */

export interface HouseItem {
  id: number;
  name: string;
  description: string;
  theme: string;
  pages: number;
  image?: string;
  features: string[];
}

export interface BonusItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  estimatedPrice: string;
  confirmedSalePrice?: string;
}

export interface MoldePageItem {
  id: number;
  houseName: string;
  pageType: string;
  category: 'corpo' | 'telhado' | 'guia';
  image?: string;
  previewLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const LANDING_CONFIG = {
  // Links de Checkout (substitua pelas URLs da Kiwify, Hotmart, Eduzz, etc.)
  checkouts: {
    CHECKOUT_BASICO: "https://pay.kiwify.com.br/exemplo-basico-10",
    CHECKOUT_COMPLETO: "https://pay.kiwify.com.br/exemplo-completo-29",
    CHECKOUT_UPGRADE: "https://pay.kiwify.com.br/exemplo-upgrade-19",
  },

  // Imagem Oficial da Hero
  heroMockupImage: "/assets/hero-vila-natalina.webp",

  // Páginas A4 para a vitrine animada "Veja o Material por Dentro"
  sampleMoldes: [
    {
      id: 1,
      houseName: "Chalé Natalino Clássico",
      pageType: "Molde do Corpo da Casa (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Paredes de Madeira & Guirlanda"
    },
    {
      id: 2,
      houseName: "Chalé Natalino Clássico",
      pageType: "Molde do Telhado Alpino (Pág 2/3)",
      category: "telhado",
      image: "",
      previewLabel: "Telhado com Neve e Chaminé"
    },
    {
      id: 3,
      houseName: "Chalé Natalino Clássico",
      pageType: "Guia Ilustrado de Montagem (Pág 3/3)",
      category: "guia",
      image: "",
      previewLabel: "Passo a Passo de Vinco e Cola"
    },
    {
      id: 4,
      houseName: "Igreja Natalina",
      pageType: "Molde da Torre & Campanário (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Fachada Neoclássica e Vitrais"
    },
    {
      id: 5,
      houseName: "Igreja Natalina",
      pageType: "Molde da Cobertura e Cruz (Pág 2/3)",
      category: "telhado",
      image: "",
      previewLabel: "Telhado Solene com Cruz Dourada"
    },
    {
      id: 6,
      houseName: "Padaria Natalina",
      pageType: "Fachada com Vitrine de Doces (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Toldo Listrado & Pães de Mel"
    },
    {
      id: 7,
      houseName: "Casa de Doces",
      pageType: "Molde Decorado Confeitado (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Paredes de Biscoito e Arabescos"
    },
    {
      id: 8,
      houseName: "Casa do Papai Noel",
      pageType: "Molde da Fachada Imperial (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Pórtico Vermelho do Polo Norte"
    },
    {
      id: 9,
      houseName: "Oficina dos Duendes",
      pageType: "Molde das Engrenagens e Peças (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Oficina Lúdica de Brinquedos"
    },
    {
      id: 10,
      houseName: "Loja de Presentes",
      pageType: "Molde da Vitrine com Pacotes (Pág 1/3)",
      category: "corpo",
      image: "",
      previewLabel: "Caixas de Presente e Laços"
    },
    {
      id: 11,
      houseName: "Casinha Nevada",
      pageType: "Molde do Telhado Nórdico (Pág 2/3)",
      category: "telhado",
      image: "",
      previewLabel: "Acúmulos de Neve em Relevo"
    },
    {
      id: 12,
      houseName: "Vila de Natal 3D",
      pageType: "Guia Geral de Dicas e Ferramentas",
      category: "guia",
      image: "",
      previewLabel: "Orientações de Impressão e Montagem"
    }
  ] as MoldePageItem[],

  // Configuração do Vídeo
  video: {
    // URL do vídeo (pode ser link direto MP4 ou embed do YouTube/Vimeo)
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    // Imagem de capa (poster) exibida antes do usuário clicar para dar play
    posterUrl: "/src/assets/images/video_poster_cover_1792178485442.jpg",
    title: "Apresentação Minha Vila de Natal 3D",
    isTechnicalPlaceholder: true, // Indica visualmente que é um placeholder de teste até o vídeo final ser inserido
    caption: "Espaço reservado para o vídeo oficial demonstrativo de montagem da Vila de Natal 3D."
  },

  // Preços e Planos
  pricing: {
    basico: {
      name: "Plano Básico",
      price: "10,00",
      priceNumber: 10.0,
      currency: "R$",
      headline: "Edificações e guias de montagem (sem os 5 bônus)",
      items: [
        "Coleção Minha Vila de Natal 3D com +30 Edificações",
        "Casinhas, chalés, igrejas, lojas, oficinas e muito mais",
        "Moldes 100% coloridos prontos para imprimir em folha A4",
        "Guias ilustrados detalhados de recorte, dobra e montagem",
        "Acesso imediato para download e impressão ilimitada",
        "Liberdade para imprimir em casa ou na papelaria"
      ],
      notIncluded: [
        "Não inclui os 5 bônus de mesa posta e presentes"
      ]
    },
    completo: {
      name: "Plano Completo",
      price: "29,90",
      priceNumber: 29.9,
      originalPrice: "59,90",
      currency: "R$",
      period: "pagamento único",
      headline: "Edificações, guias e todos os 5 bônus inclusos",
      items: [
        "Tudo do Plano Básico (+30 edificações e guias de montagem)",
        "Moldes coloridos em alta resolução para imprimir em A4",
        "🎁 BÔNUS 01: 10 Anéis de Guardanapo Natalinos",
        "🎁 BÔNUS 02: 20 Tags para Presentes 'De/Para'",
        "🎁 BÔNUS 03: 10 Marcadores de Lugar para a Ceia",
        "🎁 BÔNUS 04: 3 Modelos de Bandeirinhas 'Feliz Natal'",
        "🎁 BÔNUS 05: 10 Cartões de Natal para Presentear",
        "R$ 49,50 de economia em bônus inteiramente grátis",
        "Acesso vitalício aos arquivos e atualizações"
      ]
    },
    upgrade: {
      popupTitle: "ESPERE! UMA OFERTA ESPECIAL DE NATAL PARA VOCÊ",
      popupSubtitle: "Leve o Plano Completo com todos os 5 bônus pagando apenas R$ 9,90 a mais!",
      normalPrice: "29,90",
      upgradePrice: "19,90",
      savings: "10,00",
      additionalCost: "9,90",
      ctaText: "QUERO O PLANO COMPLETO POR APENAS R$ 19,90",
      declineText: "Não, obrigado. Prefiro continuar apenas com o Plano Básico por R$ 10,00"
    }
  },

  // As 8 Edificações Oficiais (3 páginas A4 cada = 24 páginas totais)
  houses: [
    {
      id: 1,
      name: "Chalé Natalino Clássico",
      description: "Acolhedor chalé tradicional alpino com textura de madeira, guirlanda festiva na porta e chaminé nevada.",
      theme: "Arquitetura Tradicional",
      pages: 3,
      image: "", // Insira aqui a foto real da casinha (ex: '/assets/casas/chale.jpg')
      features: ["Molde do corpo da casa", "Molde do telhado rústico", "Guia ilustrado de montagem"]
    },
    {
      id: 2,
      name: "Casa de Doces",
      description: "Inspirada no mundo mágico de doces de Natal, com paredes de biscoito, telhado confeitado e adornos açucarados.",
      theme: "Fantasia & Confeitaria",
      pages: 3,
      image: "",
      features: ["Molde do corpo confeitado", "Molde do telhado de doces", "Guia ilustrado de montagem"]
    },
    {
      id: 3,
      name: "Casinha Nevada",
      description: "Típica construção nórdica com espessos acúmulos de neve suave no telhado e janelas quentes iluminadas.",
      theme: "Inverno Europeu",
      pages: 3,
      image: "",
      features: ["Molde do corpo nevado", "Molde do telhado com relevo", "Guia ilustrado de montagem"]
    },
    {
      id: 4,
      name: "Casa do Papai Noel",
      description: "A morada mais emblemática do Polo Norte, com fachada em vermelho festivo, detalhes em ouro e placa comemorativa.",
      theme: "Polo Norte Oficial",
      pages: 3,
      image: "",
      features: ["Molde do corpo vermelho nobre", "Molde do telhado imperial", "Guia ilustrado de montagem"]
    },
    {
      id: 5,
      name: "Loja de Presentes",
      description: "Charme comercial natalino com vitrines decoradas, caixas de presentes empilhadas e laços ornamentais.",
      theme: "Comércio Encantado",
      pages: 3,
      image: "",
      features: ["Molde do corpo com vitrine", "Molde do telhado com marquise", "Guia ilustrado de montagem"]
    },
    {
      id: 6,
      name: "Padaria Natalina",
      description: "O cantinho mais perfumado da vila, decorado com motivos de pão de mel, biscoitos de canela e fornos tradicionais.",
      theme: "Gastronomia Afetiva",
      pages: 3,
      image: "",
      features: ["Molde da fachada de padaria", "Molde do telhado com chaminé", "Guia ilustrado de montagem"]
    },
    {
      id: 7,
      name: "Igreja Natalina",
      description: "Ponto central e solene da vila com torre sineira, vitrais estilizados e linhas elegantes que trazem paz.",
      theme: "Espiritualidade & Paz",
      pages: 3,
      image: "",
      features: ["Molde do corpo e torre sineira", "Molde do telhado alto", "Guia ilustrado de montagem"]
    },
    {
      id: 8,
      name: "Oficina dos Duendes",
      description: "Onde os brinquedos ganham vida: repleta de engrenagens alegres, ferramentas lúdicas e cores vibrantes.",
      theme: "Criatividade & Magia",
      pages: 3,
      image: "",
      features: ["Molde da oficina lúdica", "Molde do telhado artesanal", "Guia ilustrado de montagem"]
    }
  ] as HouseItem[],

  // Os 5 Bônus Exclusivos do Plano Completo
  bonuses: [
    {
      id: 1,
      tag: "BÔNUS 01",
      title: "10 Anéis de Guardanapo",
      description: "Imprima, recorte e decore sua mesa.",
      image: "/assets/bonuses/bonus-01-aneis-guardanapo.webp",
      estimatedPrice: "9,90"
    },
    {
      id: 2,
      tag: "BÔNUS 02",
      title: "20 Tags para Presentes",
      description: "Um toque especial em cada presente.",
      image: "/assets/bonuses/bonus-02-tags-presentes.webp",
      estimatedPrice: "9,90"
    },
    {
      id: 3,
      tag: "BÔNUS 03",
      title: "10 Marcadores de Lugar",
      description: "Receba seus convidados com carinho.",
      image: "/assets/bonuses/bonus-03-marcadores-lugar.webp",
      estimatedPrice: "9,90"
    },
    {
      id: 4,
      tag: "BÔNUS 04",
      title: "3 Modelos de Bandeirinhas",
      description: "Imprima e monte seu 'Feliz Natal'.",
      image: "/assets/bonuses/bonus-04-bandeirinhas-natal.webp",
      estimatedPrice: "9,90"
    },
    {
      id: 5,
      tag: "BÔNUS 05",
      title: "10 Cartões de Natal",
      description: "Mensagens prontas para presentear.",
      image: "/assets/bonuses/bonus-05-cartoes-natal.webp",
      estimatedPrice: "9,90"
    }
  ] as BonusItem[],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: "O produto é físico ou digital?",
      answer: "O produto é 100% DIGITAL em formato PDF de alta resolução. Você não precisará esperar frete nem pagar pelo envio: logo após a confirmação do pagamento, você recebe acesso imediato para baixar todos os moldes e guias para imprimir quando quiser."
    },
    {
      question: "Como recebo os arquivos?",
      answer: "Assim que sua compra for aprovada na plataforma de pagamento, os dados de acesso e o link de download são enviados diretamente para o seu e-mail e disponibilizados na área de membros segura."
    },
    {
      question: "Preciso de impressora em casa?",
      answer: "Não necessariamente. Você pode imprimir na sua impressora doméstica (seja jato de tinta ou laser) ou simplesmente salvar o arquivo em um pen drive / WhatsApp e imprimir em qualquer papelaria ou gráfica rápida do seu bairro."
    },
    {
      question: "Qual papel posso utilizar?",
      answer: "Você pode imprimir em papel sulfite A4 comum (75g), mas para uma estrutura mais firme e durável das casinhas, recomendamos papéis com gramatura entre 120g e 180g (como papel fosco, offset, couchê fosco ou papel cartão/fotográfico fosco)."
    },
    {
      question: "Preciso de experiência com artesanato?",
      answer: "Não! Os moldes foram desenvolvidos pensando em facilidade e acessibilidade para toda a família. Cada uma das 8 edificações conta com um Guia Ilustrado de Montagem passo a passo, indicando exatamente onde cortar, dobrar e colar."
    },
    {
      question: "As casinhas já vêm coloridas?",
      answer: "Sim! Todas as 8 casinhas já vêm totalmente ilustradas e coloridas com alta definição, prontas para imprimir. Você só precisa recortar, dobrar nas linhas indicadas e colar."
    },
    {
      question: "Quantas edificações estão incluídas?",
      answer: "Estão incluídas 8 edificações completas: Chalé Natalino Clássico, Casa de Doces, Casinha Nevada, Casa do Papai Noel, Loja de Presentes, Padaria Natalina, Igreja Natalina e Oficina dos Duendes. São 3 páginas A4 por edificação, totalizando 24 páginas A4 de conteúdo."
    },
    {
      question: "Posso imprimir novamente se errar ou quiser montar mais de uma vila?",
      answer: "Sim! Como os arquivos são digitais, você tem a liberdade de imprimir quantas vezes desejar para o seu uso pessoal ou para presentear amigos e familiares neste Natal."
    },
    {
      question: "Qual é a diferença entre os planos?",
      answer: "O Plano Básico (R$ 10,00) entrega as 8 edificações completas da Minha Vila de Natal 3D (24 páginas A4 com moldes e guias de montagem). O Plano Completo (R$ 29,90) inclui tudo do Plano Básico mais os 5 kits complementares exclusivos (Mesa Posta, Presentes, Enfeites, Jogos e Lembrancinhas) que serão liberados assim que forem aprovados e finalizados."
    }
  ] as FaqItem[],

  // Garantia
  warranty: {
    title: "Garantia de Satisfação e Segurança",
    text: "Adquira com total tranquilidade. Se dentro do prazo legal de 7 dias você avaliar que o material não atendeu às suas expectativas, basta solicitar o reembolso na plataforma de pagamento para receber 100% do seu valor de volta, sem burocracia ou questionamentos.",
    badgeText: "Garantia Incondicional de 7 Dias"
  }
};
