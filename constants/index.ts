import {
  ArticleOutlined,
  CheckBoxOutlined,
  EmojiEventsOutlined,
  FilterDrama,
  HowToReg,
  LinkedIn,
  MedicalServices,
  MonitorHeart,
  School,
} from "@mui/icons-material";

export const cards = [
  {
    title: "Experiências Profissionais",
    icon: MedicalServices,
    content: [
      "Professora Associada de Endocrinologia na Faculdade de Ciências Médicas (FCM) da UERJ desde 2016.",
      "Professora do Programa de Pós-Graduação em Fisiopatolologia Clínica e Experimental da FCM UERJ.",
      "Coordenadora de pesquisa da Faculdade de Ciências Médicas da FCM (2024-2028).",
      "Secretaria Executiva da Sociedade Brasileira de Endocrinooogia, Regional RJ (2020-2022 e 2023-2024).",
      "Ex-professora da Faculdade de Medicina de Petrópolis (2007-2023).",
      "Ex-chefe do Departamento de Medicina Interna da FCM UERJ (2021-2023).",
      "Médica endocrinologista do Hospital Universitário Pedro Ernesto da UERJ (2012-2016).",
    ],
  },
  {
    title: "Formação Acadêmica",
    icon: School,
    content: [
      "Doutorado em Endocrinologia, UFRJ, Rio de Janeiro, 2015",
      "Mestrado em endocrinologia, UFRJ, Rio de Janeiro, 2009",
      "Especialista em Endocrinologia e Metodologia, SBEM, Rio de Janeiro, 2007 ",
      "Residência em Endocrinologia e Metabologia, IEDE, Rio de Janeiro, 2007",
      "Residência em Clínica Médica, UFJF, Juiz de Fora, 2005",
      "Graduação em Medicina, FASE, Petrópolis, 2002",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Registros Profissionais",
    icon: HowToReg,
    content: [
      "CRM RJ: 737470",
      "RQE Clínica Médica: 15964",
      "RQE Endocrinologia e Metabologia: 14091",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Publicações",
    icon: ArticleOutlined,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat",
      "praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla",
      "arcu fames luctus.leo lectus venenat consectetur dui ad sagittis sapien integer nullam,",
      "eu habitant leo potenti id interdum dolor neque ante, placerat metus bibendum commodo suscipit massa nisl",
      "posuere. neque class auctor facilisis aenean est lobortis molestie posuere, amet loborti habitant quam leo dictum quam congue,",
      "vestibulum est dictumst convallis pellentesque felis lacinia. laoreet est pharetra varius justo suspendisse lorem",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Tratamentos",
    icon: MonitorHeart,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus.",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Prêmios",
    icon: EmojiEventsOutlined,
    content: [
      "Lorem ipsum eget risus tristique odio lacus volutpat, praesent ipsum torquent amet condimentum pellentesque aptent, rutrum iaculis nulla arcu fames luctus. ",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Mais Informações",
    icon: FilterDrama,
    content: [],
    social:[
      LinkedIn
    ]
  },
];




export const images = [
  {
    url: "/greenoffice.jpg",
    alt: "Green Office",
  },
  {
    url: "/images/anabw.png",
    alt: "Ana Beatriz",
  },
  {
    url: "/images/consultorio.jpeg",
    alt: "Consultório",
  },
  {
    url: "/images/recepcao.jpeg",
    alt: "Recepção",
  },
  {
    url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    alt: "Coffee",
  },
  {
    url: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    alt: "Honey",
  },
  {
    url: "/images/anabeatriz.jpeg",
    alt: "Ana Beatriz",
  },
  {
    url: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    alt: "Sea Star",
  },
  {
    url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    alt: "Breakfast",
  },
];




export const links = [
  {
    desc: "Sobre Mim",
    href: "#about",
  },
  {
    desc: "Endereço",
    href: "#map",
  },
  {
    desc: "Reviews",
    href: "#reviews",
  },
  {
    desc: "Galeria",
    href: "#gallery",
  },
  {
    desc: "Contato",
    href: "#contact",
  },
];




export const reviews = [
  {
    patient: "Rosangela C.",
    content: "Excelente profissional. Competente, atenciosa, pontual, transmite calma e confiança ao paciente. Recomendo.",
    profile: "/images/razul.png"
  },
  {
    patient: "Douglas B.",
    content: "A Dr.ª Ana Beatriz é muito atenciosa. Realiza o acompanhamento completo durante o tratamento.",
    profile: "/images/douglasb.png"
  },
  {
    patient: "Daniela R.",
    content: "Excelente médica! Atenciosa, competente, disposta a ouvir e resolver os problemas. Nota 1.000 para essa médica tão dedicada!",
    profile: "/images/dlaranja.png"
  },
];
