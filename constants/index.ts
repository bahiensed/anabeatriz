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
      "Mestrado em Endocrinologia, UFRJ, Rio de Janeiro, 2009",
      "Especialização em Endocrinologia e Metabologia, SBEM, 2007",
      "Residência em Endocrinologia e Metabologia, IEDE, Rio de Janeiro, 2007",
      "Residência em Clínica Médica, UFJF, Juiz de Fora, 2005",
      "Graduação em Medicina, Faculdade de Medicina de Petrópolis, 2002",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Publicações",
    icon: ArticleOutlined,
    content: [
      "Cavalcante, R.B.M.; Leão, L.M.C.S.M.; Tavares, Ana Beatriz Winter; Lopes, K.G.; Kraemer-Aguiar, L.G. Fat Distribution and its Correlation with Insulin Resistance, Androgen Markers, and Proinflammatory Cytokines in Polycystic Ovary Syndrome. HORMONE AND METABOLIC RESEARCH, 2024.",
      "Félix, T.M.; de Oliveira, B.M.; Artifon, M.; Carvalho, I.; Bernardi, F.A.; Schawartz, I.V.D.; Saute, J.A.; Ferraz, V.E.F. ; Acosta, A.X.; Sorte, N.B.; Alves, D.; Amorim, T.; Adjuto, G.M.A.F.; Almeida, R.E.S.; Brandão, F.R.; Bueno, L.S.M.; de Andrade, M.D.F.C.; Cagliari, C.I.; Cardoso, M.T.; TAVARES, Ana Beatriz Winter. Epidemiology of rare diseases in Brazil: protocol of the Brazilian Rare Diseases Network (RARAS-BRDN). Orphanet Journal of Rare Diseases, v.17, p.1-13, 2022.",
      "Tavares, Ana Beatriz Winter; COLLETT-SOLBERG, P.F. Growth hormone deficiency and the transition from pediatric to adult care. Jornal de Pediatria, v.97, p.595-602, 2021.",
      "Tavares, Ana Beatriz Winter; Seixas da Silva, I.A.; Silvestre, D.H.S.; Pinheiro, M.F.C.; Vaisman, M.; Conceição, F.L. Growth hormone and cortisol secretion in the elderly evaluated using the glucagon stimulation test. ENDOCRINE, v.56, p.317-324, 2017.",
      "Tavares, Ana Beatriz Winter; Seixas da Silva, I.A.; Silvestre, D.H.S.; Paixão, C.M.; Vaisman, M.; Conceição, F.L. Potential risks of glucagon stimulation test in elderly people. Growth Hormone & IGF Research, v.25, p.53-56, 2015."
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Registros Profissionais",
    icon: HowToReg,
    content: [
      "CRM RJ:737470",
      "Clínica Médica RQE:15964",
      "Endocrinologia e Metabologia RQE:14091",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Tratamentos",
    icon: MonitorHeart,
    content: [
      "Diabetes",
      "Obesidade",
      "Osteoporose",
      "Climatério / Menopausa",
      "Endocrinologia Pediátrica",
      "Disfunções da Tireoide",
      "Disfunções da Hipófise",
      "Disfunções das Adrenais",
      "Disfunções dos Ovários",
      "Disfunções Testiculares",
      "Dislipidemia",
      "Distúrbios do Metabolismo Ósseo",
    ],
    check: CheckBoxOutlined,
  },
  {
    title: "Prêmios",
    icon: EmojiEventsOutlined,
    content: [
      "Grant de Pesquisa Clínica. XXI Encontro Brasileiro de Tireoide, Departamento de Tireoide, SBEM, 2024.",
      "Cinco Melhores Pôsteres Clínicos. XIX Latin American Thyroid Congress. Association between proteinuria and TSH in patients with Chronic Kidney Disease stages 3 and 4, Latin American Thyroid Association, 2023",
      "Menção Honrosa. 31 Semana Científica da UERJ. Correlação entre função tireoidiana e doença renal crônica estágios 3 e 4, UERJ, 2022.",
      "APQ1, FAPERJ, 2021."
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
    url: "/images/greenoffice.jpg",
    alt: "Green Office",
  },
  {
    url: "/images/anabw.png",
    alt: "Ana Beatriz",
  },
  {
    url: "/images/recepcao.jpeg",
    alt: "Recepção",
  },
  {
    url: "/images/consultorio.jpeg",
    alt: "Consultório",
  },
  {
    url: "/images/anabeatriz.jpeg",
    alt: "Ana Beatriz",
  },
  {
    url: "/images/maca.jpeg",
    alt: "Ambulatório",
  },
  {
    url: "/images/estacionamento.jpg",
    alt: "Estacionamento",
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
