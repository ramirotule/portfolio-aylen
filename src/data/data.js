// ============================================================
// DATOS DEL PORTFOLIO — editar aquí para actualizar el sitio
// ============================================================

export const personalInfo = {
  name: "Dévora Aylén De Ferrari",
  titles: [
    "Ingeniera en Recursos Naturales y Medio Ambiente - UNLPam",
    "Capacitación Pedagógica para Profesionales y Técnicos - ISFD Colonia Barón",
    "Profesora en Ciencias Biológicas (en formación) — UNLPam",
    "Profesora en Química (en formación) — UNLPam",
  ],
  tagline: "Transformando la ciencia en aprendizaje, y el aprendizaje en cambio.",
  email: "aylen_df@hotmail.com",
  phone: "02954 – 15290655",
  linkedin: "https://linkedin.com/in/aylendeferrari",
  location: "Santa Rosa, La Pampa — Argentina",
  bio: `Soy Ingeniera en Recursos Naturales y Medio Ambiente egresada de la Facultad de Ciencias Exactas y Naturales
  de la Universidad Nacional de La Pampa. Desde 2018 me desempeño como docente en distintas instituciones de nivel
  secundario en Santa Rosa, dictando materias del área de ciencias naturales, química, física y educación ambiental.`,
  bioExtra: `Combino la formación científica con una pedagogía centrada en el estudiante, promoviendo el pensamiento
  crítico, la curiosidad y el vínculo con el entorno natural. Actualmente curso el Profesorado en Química en la UNLPam,
  sumando herramientas para seguir creciendo como educadora.`,
};

export const education = [
  {
    id: 1,
    degree: "Ingeniería en Recursos Naturales y Medio Ambiente",
    institution: "Facultad de Ciencias Exactas y Naturales — Universidad Nacional de La Pampa",
    year: "Ingreso 2006",
    description: "Formación técnica y científica en gestión, conservación y aprovechamiento sustentable de recursos naturales. Promedio académico: 6,50.",
  },
  {
    id: 2,
    degree: "Capacitación Pedagógica para Profesionales y Técnicos",
    institution: "Instituto Superior de Formación Docente Colonia Barón",
    year: "2023 - 2025",
    description: "Habilitación pedagógica para el ejercicio de la docencia en el nivel secundario. 75% de materias aprobadas.",
  },
  {
    id: 3,
    degree: "Profesorado en Ciencias Biológicas",
    institution: "Facultad de Ciencias Exactas y Naturales — UNLPam",
    year: "En formación",
    description: "Carrera orientada a la enseñanza de las ciencias biológicas en el nivel secundario. 35,63% de materias aprobadas.",
  },
  {
    id: 4,
    degree: "Profesorado en Química",
    institution: "Facultad de Ciencias Exactas y Naturales — UNLPam",
    year: "En formación",
    description: "Formación docente especializada en Química para el nivel secundario. 29,63% de materias aprobadas.",
  },
  {
    id: 5,
    degree: "Secundario — Ciencias Naturales",
    institution: "Instituto Privado Domingo Savio",
    year: "2000 – 2005",
    description: "Modalidad orientada en Ciencias Naturales, base de la vocación científica y docente.",
  },
];

// Cursos y capacitaciones realizadas (para mostrar en sección adicional si se desea)
export const courses = [
  { year: "2009", title: "Lectocomprensión de textos científicos y académicos en inglés", institution: "UNLPam", status: "Aprobado — Nota: 9" },
  { year: "2009", title: "Historia Ecológica de Iberoamérica", institution: "Vialidad Nacional", status: "Asistido" },
  { year: "2010", title: "3° Congreso Pampeano del Agua", institution: "Asociación Rural", status: "Asistido" },
  { year: "2010", title: "Herramienta de Gestión Ambiental", institution: "UNLPam", status: "Aprobado" },
  { year: "2011", title: "Ecología Acuática", institution: "UNLPam", status: "Asistido" },
  { year: "2012", title: "Biorremediación de Suelos Contaminados", institution: "UNLPam", status: "Asistido" },
  { year: "2012", title: "Seminario: Ambiente Urbano y Problemáticas Ambientales (Parte 1 y 2)", institution: "UNLPam", status: "Aprobado" },
  { year: "2013", title: "Manejo Responsable de Envases Vacíos de Agroquímicos", institution: "UNLPam", status: "Asistido" },
  { year: "2013", title: "Taller de Escritura de Trabajo Científico", institution: "UNLPam", status: "Aprobado" },
  { year: "2013", title: "Seminario sobre Problemática Ambiental (Parte 1 y 2)", institution: "UNLPam", status: "Aprobado" },
  { year: "2022", title: "ESI: Crecer, Cuidarnos, Querernos", institution: "CAPACITAR (online)", status: "Aprobado" },
  { year: "2022", title: "Ciencias Naturales: Aula y Laboratorio", institution: "CAPACITAR (online)", status: "Aprobado" },
  { year: "2024", title: "Construyendo Futuro: Herramientas para el Ahorro y la Inversión", institution: "RedPam", status: "Aprobado" },
];

export const teachingAreas = [
  {
    id: 1,
    subject: "Matemática",
    icon: "Calculator",
    color: "emerald",
    description: "Álgebra, geometría y razonamiento lógico-matemático aplicado a situaciones cotidianas.",
    content: {
      overview: "La matemática como lenguaje universal para comprender el mundo.",
      topics: ["Álgebra y funciones", "Geometría analítica", "Estadística y probabilidad", "Razonamiento lógico"],
      approach: "Aprendizaje basado en problemas contextualizados con situaciones reales.",
    },
  },
  {
    id: 2,
    subject: "Biología",
    icon: "Leaf",
    color: "green",
    description: "Estudio de los seres vivos, ecosistemas y procesos biológicos fundamentales.",
    content: {
      overview: "Comprendiendo la vida en toda su diversidad.",
      topics: ["Célula y genética", "Ecología y ecosistemas", "Evolución", "Biodiversidad"],
      approach: "Observación directa, experimentos y salidas de campo.",
    },
  },
  {
    id: 3,
    subject: "Química & Física",
    icon: "FlaskConical",
    color: "blue",
    description: "Fundamentos de la materia, energía y las leyes que rigen el universo físico.",
    content: {
      overview: "La física y la química como herramientas para entender la naturaleza.",
      topics: ["Materia y energía", "Reacciones químicas", "Mecánica y ondas", "Termodinámica"],
      approach: "Laboratorio experimental y modelado matemático.",
    },
  },
  {
    id: 4,
    subject: "Educación Tecnológica",
    icon: "Cpu",
    color: "purple",
    description: "Comprensión crítica de la tecnología y su impacto en la sociedad y el ambiente.",
    content: {
      overview: "Tecnología al servicio del ser humano y la naturaleza.",
      topics: ["Diseño y proyecto tecnológico", "Materiales y procesos", "TIC y sociedad", "Robótica educativa"],
      approach: "Proyectos de diseño y resolución de problemas.",
    },
  },
  {
    id: 5,
    subject: "Agrobiotecnología",
    icon: "Dna",
    color: "teal",
    description: "Biotecnología aplicada a la producción agropecuaria y sus implicancias ambientales.",
    content: {
      overview: "La biotecnología como puente entre ciencia y producción sustentable.",
      topics: ["OGM y transgénicos", "Fermentación y bioproductos", "Mejoramiento vegetal", "Bioética"],
      approach: "Análisis de casos reales y debate crítico.",
    },
  },
  {
    id: 6,
    subject: "Agrobioseguridad",
    icon: "Shield",
    color: "orange",
    description: "Protocolos y marcos normativos para el manejo seguro de organismos agropecuarios.",
    content: {
      overview: "La seguridad biológica como responsabilidad científica y social.",
      topics: ["Normativa nacional e internacional", "Riesgo biológico", "Bioseguridad en laboratorio", "Políticas públicas"],
      approach: "Estudio de casos y análisis normativo.",
    },
  },
  {
    id: 7,
    subject: "Agroecosistemas",
    icon: "TreePine",
    color: "lime",
    description: "Análisis de los sistemas productivos rurales desde una perspectiva ecológica integral.",
    content: {
      overview: "Producción agropecuaria en armonía con los ciclos naturales.",
      topics: ["Manejo de suelos", "Cuencas hidrográficas", "Producción sustentable", "Servicios ecosistémicos"],
      approach: "Salidas de campo y proyectos productivos escolares.",
    },
  },
  {
    id: 8,
    subject: "Taller de Investigación Ambiental y Rural",
    icon: "Search",
    color: "emerald",
    description: "Formación en metodologías de investigación aplicadas a problemáticas rurales y ambientales.",
    content: {
      overview: "Aprender a investigar investigando problemas del propio entorno.",
      topics: ["Metodología científica", "Diseño de proyectos", "Trabajo de campo", "Presentación de resultados"],
      approach: "Proyectos de investigación estudiantil con impacto comunitario.",
    },
  },
  {
    id: 9,
    subject: "Química",
    icon: "Atom",
    color: "indigo",
    description: "Estudio de la composición, estructura y propiedades de la materia y sus transformaciones.",
    content: {
      overview: "La química como ciencia de la transformación.",
      topics: ["Tabla periódica", "Estequiometría", "Química orgánica", "Soluciones y equilibrio"],
      approach: "Laboratorio experimental y resolución de problemas.",
    },
  },
  {
    id: 10,
    subject: "Historia del Conocimiento en Ciencias Naturales",
    icon: "BookOpen",
    color: "amber",
    description: "Recorrido histórico y epistemológico por los grandes hitos de la ciencia.",
    content: {
      overview: "Entender cómo construimos el conocimiento científico a través del tiempo.",
      topics: ["Historia de la ciencia", "Revolución científica", "Epistemología", "Ciencia y sociedad"],
      approach: "Análisis de textos históricos y debates filosóficos.",
    },
  },
  {
    id: 11,
    subject: "Ciencias Naturales",
    icon: "Globe",
    color: "cyan",
    description: "Integración de biología, física, química y ciencias de la tierra en el nivel secundario.",
    content: {
      overview: "Una mirada integradora de las ciencias para comprender el mundo natural.",
      topics: ["Tierra y universo", "Materia y energía", "Seres vivos", "Interacciones"],
      approach: "Proyectos interdisciplinarios y aprendizaje basado en fenómenos.",
    },
  },
  {
    id: 12,
    subject: "Educación Ambiental",
    icon: "Wind",
    color: "green",
    description: "Formación en valores, actitudes y competencias para la sustentabilidad ambiental.",
    content: {
      overview: "Construir ciudadanía ambiental activa y responsable.",
      topics: ["Problemáticas ambientales", "Cambio climático", "Consumo responsable", "Acción colectiva"],
      approach: "Proyectos comunitarios y educación experiencial.",
    },
  },
];

export const methodology = [
  {
    id: 1,
    title: "Aprendizaje Basado en Problemas",
    icon: "Puzzle",
    description: "Los estudiantes abordan situaciones reales y complejas, desarrollando pensamiento crítico y habilidades de resolución.",
  },
  {
    id: 2,
    title: "Experimentos y Práctica",
    icon: "FlaskConical",
    description: "La experiencia directa en laboratorio y campo como fuente primaria de conocimiento científico.",
  },
  {
    id: 3,
    title: "Pensamiento Crítico",
    icon: "Brain",
    description: "Fomento del análisis, la argumentación y la evaluación de evidencias como herramientas fundamentales.",
  },
  {
    id: 4,
    title: "Ciencia y Naturaleza Integradas",
    icon: "TreePine",
    description: "Conexión permanente entre los contenidos científicos y el entorno natural y rural del estudiante.",
  },
  {
    id: 5,
    title: "Educación Ambiental",
    icon: "Leaf",
    description: "Transversalización de la dimensión ambiental en todos los espacios curriculares.",
  },
  {
    id: 6,
    title: "Educación Inclusiva",
    icon: "Users",
    description: "Diseño universal del aprendizaje: cada estudiante aprende desde sus capacidades y contexto.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Proyecto de Educación Ambiental",
    description: "Diagnóstico participativo de problemáticas ambientales locales con diseño de acciones comunitarias por parte de los estudiantes.",
    icon: "Leaf",
    tags: ["Ambiente", "Comunidad", "Investigación"],
  },
  {
    id: 2,
    title: "Taller de Cocina y Matemática",
    description: "Integración interdisciplinaria que usa la cocina como laboratorio para enseñar proporciones, fracciones, escalas y estadística.",
    icon: "ChefHat",
    tags: ["Matemática", "Interdisciplinar", "Creatividad"],
  },
  {
    id: 3,
    title: "Viaje de Estudio",
    description: "Salidas educativas a reservas naturales, plantas de tratamiento y establecimientos agropecuarios como extensión del aula.",
    icon: "Map",
    tags: ["Campo", "Experiencial", "Naturaleza"],
  },
  {
    id: 4,
    title: "Actividades Científicas Escolares",
    description: "Diseño y coordinación de experimentos, demostraciones y jornadas científicas en el ámbito escolar.",
    icon: "FlaskConical",
    tags: ["Ciencia", "Escuela", "Experimentación"],
  },
  {
    id: 5,
    title: "Ferias de Saberes",
    description: "Espacios de socialización del conocimiento donde los estudiantes presentan sus proyectos e investigaciones ante la comunidad.",
    icon: "Star",
    tags: ["Divulgación", "Proyecto", "Comunidad"],
  },
];

// Experiencia laboral docente — cronología real del CV
export const experience = [
  { period: "Jun 2007 – Feb 2008", role: "Atención al público", institution: "Imprenta De Ferrari y Pérez" },
  { period: "Ago 2009 – May 2014", role: "Atención al público — Venta y Servicio Técnico", institution: "RAM Informática" },
  { period: "Jun – Ago 2014", role: "Horas cátedra — Química II", institution: "Colegio Secundario Marcelino Catrón" },
  { period: "Sep – Dic 2014", role: "Horas cátedra — Físico Química", institution: "E.P.E.T N°1" },
  { period: "Oct 2014 – Feb 2015", role: "Horas cátedra — Físico Química", institution: "Colegio Secundario María Teresa de Calcuta" },
  { period: "Jun 2015", role: "Cargo Auxiliar Docente", institution: "Colegio Secundario Marcelino Catrón" },
  { period: "Jun 2015", role: "Cargo Auxiliar Docente", institution: "Colegio Nocturno Héctor Áyax Guiñazú" },
  { period: "Jul 2015", role: "Cargo Auxiliar Docente", institution: "Nuevo Secundario Toay" },
  { period: "2018 – actualidad", role: "Docente de Ciencias — diversas materias", institution: "Distintas instituciones de Santa Rosa, La Pampa" },
];

export const skills = [
  "Enseñanza de Ciencias",
  "Educación Ambiental",
  "Matemática",
  "Biología",
  "Química y Física",
  "Educación Tecnológica",
  "Agrobiotecnología",
  "Agrobioseguridad",
  "Agroecosistemas",
  "Investigación Ambiental",
  "Ciencias Naturales",
  "Perspectiva de Género",
  "Herramientas Digitales Educativas",
  "Diseño de Proyectos Pedagógicos",
  "Educación Inclusiva",
  "Trabajo en Equipo",
];
