// Shared post data
const POSTS = [
  {
    slug: "agentes-autonomos-2026",
    date: "12 Abril 2026",
    dateShort: "12.04.26",
    title: "Agentes autónomos: la promesa de 2026 y lo que realmente entregaron",
    excerpt:
      "El año arrancó con la promesa de que los agentes harían el trabajo solos. Después de seis meses construyendo con ellos en producción, esto es lo que aprendí sobre el espacio entre la demo y el deploy real.",
    tags: ["IA", "Agentes", "Producto"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600&q=80",
    author: "Raul J. Camacho",
  },
  {
    slug: "modelos-pequenos",
    date: "28 Marzo 2026",
    dateShort: "28.03.26",
    title: "Por qué los modelos pequeños están ganando la batalla práctica",
    excerpt:
      "Los benchmarks aman los modelos gigantes. Las facturas de la nube no. Una mirada honesta a por qué los modelos de 7B parámetros se están comiendo casos de uso que pensábamos pertenecían solo a los frontier models.",
    tags: ["IA", "Infraestructura"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    author: "Raul J. Camacho",
  },
  {
    slug: "ergonomia-prompt",
    date: "14 Marzo 2026",
    dateShort: "14.03.26",
    title: "La ergonomía del prompt: diseñar interfaces para hablar con máquinas",
    excerpt:
      "Llevamos décadas diseñando interfaces para hacer clic. Diseñar interfaces para hablar es un problema diferente, y la mayoría de los productos de IA siguen fallando en lo básico.",
    tags: ["UX", "IA", "Diseño"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",
    author: "Raul J. Camacho",
  },
  {
    slug: "edge-computing",
    date: "02 Marzo 2026",
    dateShort: "02.03.26",
    title: "Edge computing redux: cuando la latencia importa más que la potencia",
    excerpt:
      "Mover la inferencia al borde dejó de ser una novedad y se convirtió en requisito. Tres patrones que estamos viendo emerger en aplicaciones de tiempo real.",
    tags: ["Infraestructura", "Tecnología"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
    author: "Raul J. Camacho",
  },
  {
    slug: "construir-con-ia",
    date: "18 Febrero 2026",
    dateShort: "18.02.26",
    title: "Construir software con IA: cuaderno de campo del último trimestre",
    excerpt:
      "Dejé de escribir el primer borrador del código hace meses. Lo que cambió no fue mi velocidad, sino la forma en que pienso. Notas crudas, sin ceremonia, sobre el oficio en transición.",
    tags: ["Desarrollo", "IA"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80",
    author: "Raul J. Camacho",
  },
  {
    slug: "open-source-2026",
    date: "30 Enero 2026",
    dateShort: "30.01.26",
    title: "Open source en la era de los modelos: nuevas reglas del juego",
    excerpt:
      "Cuando los pesos pesan más que el código, ¿qué significa realmente que algo sea open source? Una conversación incómoda que llevamos meses postergando.",
    tags: ["Open Source", "IA"],
    image: "https://images.unsplash.com/photo-1496262967815-132206202600?w=1600&q=80",
    author: "Raul J. Camacho",
  },
  {
    slug: "interfaces-conversacionales",
    date: "12 Enero 2026",
    dateShort: "12.01.26",
    title: "El renacimiento (silencioso) de las interfaces conversacionales",
    excerpt:
      "Los chatbots de 2018 fracasaron por una razón muy aburrida: no entendían. Hoy entienden, pero todavía no sabemos diseñar la conversación. Algunas observaciones desde el campo.",
    tags: ["UX", "IA", "Diseño"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80",
    author: "Raul J. Camacho",
  },
];

window.POSTS = POSTS;
