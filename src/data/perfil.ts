export type Lang = "en" | "es";
type T = Record<Lang, string>;

export const perfil = {
  nombre: "Carlos Llano",
  nombreCompleto: "Carlos Alberto Llano Flores",
  email: "car.alberto549@gmail.com",
  github: "https://github.com/CarlosFloresDev",
  linkedin: "https://www.linkedin.com/in/carlos-llano-flores",
  rol: { en: "Full Stack Software Developer", es: "Desarrollador de Software Full Stack" } as T,
};

export const ui = {
  nav: {
    work: { en: "Work", es: "Proyectos" },
    experience: { en: "Experience", es: "Experiencia" },
    skills: { en: "Skills", es: "Habilidades" },
    about: { en: "About", es: "Sobre mí" },
    contact: { en: "Contact", es: "Contacto" },
  },
  hero: {
    eyebrow: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    title: {
      en: "I build software end to end, from the API to the screen.",
      es: "Construyo software de punta a punta, de la API a la pantalla.",
    },
    sub: {
      en: "Backend in .NET and Java, mobile apps in Flutter, web in React and Astro, and games in Godot.",
      es: "Backend en .NET y Java, apps móviles en Flutter, web con React y Astro, y videojuegos en Godot.",
    },
    ctaWork: { en: "View work", es: "Ver proyectos" },
  },
  work: {
    title: { en: "Selected work", es: "Proyectos destacados" },
    more: { en: "More projects", es: "Más proyectos" },
  },
  experience: { title: { en: "Experience", es: "Experiencia" } },
  skills: { title: { en: "What I work with", es: "Con qué trabajo" } },
  about: {
    title: { en: "About", es: "Sobre mí" },
    p1: {
      en: "I am finishing a degree in Software Design and Development at TECSUP. I like taking an idea all the way to production: I design the interface, build the API, model the database, ship the app and deploy it with continuous integration.",
      es: "Estoy terminando Diseño y Desarrollo de Software en TECSUP. Me gusta llevar una idea hasta producción: diseño la interfaz, construyo la API, modelo la base de datos, armo la app y la despliego con integración continua.",
    },
    p2: {
      en: "My background in electronics led me to projects where software meets hardware, like a haptic glove built on ESP32 for an accessible video game. Outside class I build games, mods and websites for real businesses.",
      es: "Mi formación en electrónica me llevó a proyectos donde el software toca el mundo físico, como un guante háptico con ESP32 para un videojuego accesible. Fuera de clase hago videojuegos, mods y sitios para negocios reales.",
    },
    education: { en: "Education", es: "Formación" },
  },
  contact: {
    title: { en: "Let's build something.", es: "Construyamos algo." },
    sub: {
      en: "Open to junior and internship roles, and to freelance projects. I reply within a day.",
      es: "Abierto a puestos junior, prácticas y proyectos freelance. Respondo en menos de un día.",
    },
    cta: { en: "Contact", es: "Contacto" },
  },
  footer: { en: "Built with Astro.", es: "Hecho con Astro." },
  theme: { en: "Toggle theme", es: "Cambiar tema" },
};

export const experiencia = [
  {
    cargo: { en: "Full Stack Developer", es: "Desarrollador Full Stack" } as T,
    lugar: "BlindForge",
    periodo: { en: "Sep 2025 - Present", es: "Sep. 2025 - Actualidad" } as T,
    puntos: {
      en: [
        "Unity game for Android designed for blind and low-vision players, driven by haptic and audio feedback.",
        "Backend services in Django and Spring Boot deployed to the cloud, plus a React admin dashboard.",
        "Hardware integration: ESP32, force sensors and vibration modules in a haptic glove.",
      ],
      es: [
        "Videojuego en Unity para Android pensado para personas con discapacidad visual, guiado por retroalimentación háptica y auditiva.",
        "Servicios backend con Django y Spring Boot en la nube, y un panel de administración en React.",
        "Integración de hardware: ESP32, sensores de fuerza y módulos vibratorios en un guante háptico.",
      ],
    } as Record<Lang, string[]>,
    stack: ["Unity", "Django", "Spring Boot", "React", "ESP32"],
  },
  {
    cargo: { en: "Software Intern", es: "Practicante de Software" } as T,
    lugar: "Fibertel Networks S.A.C.",
    periodo: { en: "Jan 2026 - Feb 2026", es: "Ene. 2026 - Feb. 2026" } as T,
    puntos: {
      en: ["Supported the software team on production tasks under the deputy manager, working to company deadlines and priorities."],
      es: ["Apoyo al área de software en tareas reales bajo la supervisión del subgerente, con plazos y prioridades de empresa."],
    } as Record<Lang, string[]>,
    stack: ["Web", "Software support"],
  },
  {
    cargo: { en: "Co-founder and Developer", es: "Cofundador y desarrollador" } as T,
    lugar: "Feka Studios",
    periodo: { en: "2026", es: "2026" } as T,
    puntos: {
      en: ["Independent game studio founded with two classmates. I designed and shipped the studio website."],
      es: ["Estudio independiente de videojuegos formado con dos compañeros. Diseñé y publiqué el sitio del estudio."],
    } as Record<Lang, string[]>,
    stack: ["Cloudflare Workers", "JavaScript"],
  },
];

export type Proyecto = {
  id: string;
  nombre: string;
  tipo: T;
  descripcion: T;
  stack: string[];
  imagen?: string;
  enlaces: { texto: T; url: string }[];
};

const live: T = { en: "Live site", es: "Ver sitio" };
const code: T = { en: "Source", es: "Código" };

export const destacado: Proyecto = {
  id: "fachievements",
  nombre: "Fachievements",
  tipo: { en: "Web app", es: "Aplicación web" },
  descripcion: {
    en: "Step-by-step trophy and achievement guides. Search any game, follow the route to the platinum and track progress per user. Integrates IGDB and the Steam Web API.",
    es: "Guías de trofeos y logros paso a paso. Busca cualquier juego, sigue la ruta al platino y guarda tu progreso por usuario. Integra IGDB y la Steam Web API.",
  },
  stack: ["Astro", "React", "Supabase", "Cloudflare Workers", "Steam API"],
  imagen: "/proyectos/fach-guide.webp",
  enlaces: [
    { texto: live, url: "https://fachievements.pages.dev" },
    { texto: code, url: "https://github.com/CarlosFloresDev/Fachievements" },
  ],
};

export const pares: Proyecto[] = [
  {
    id: "ceniza",
    nombre: "Ceniza Neón",
    tipo: { en: "Video game", es: "Videojuego" },
    descripcion: {
      en: "Colony survival game: build by day, defend by night and reclaim five districts. Released for Windows and Android.",
      es: "Juego de supervivencia y colonia: construye de día, resiste de noche y recupera cinco distritos. Para Windows y Android.",
    },
    stack: ["Godot 4", "GDScript", "Pixel art"],
    imagen: "/proyectos/ceniza-web.webp",
    enlaces: [
      { texto: { en: "Game site", es: "Web del juego" }, url: "https://ceniza-neon.pages.dev/" },
      { texto: { en: "Play on itch.io", es: "Jugar en itch.io" }, url: "https://chefsitturchey.itch.io/ceniza-neon" },
    ],
  },
  {
    id: "pixelandino",
    nombre: "Pixel Andino",
    tipo: { en: "Web agency", es: "Agencia web" },
    descripcion: {
      en: "Agency site with industry demo sites and a panel to manage clients and leads.",
      es: "Sitio de agencia con webs de ejemplo por rubro y un panel para gestionar clientes y prospectos.",
    },
    stack: ["Cloudflare", "JavaScript"],
    imagen: "/proyectos/pixelandino.webp",
    enlaces: [{ texto: live, url: "https://pixelandino.pages.dev" }],
  },
];

export const otros: Proyecto[] = [
  {
    id: "tracktrash",
    nombre: "TrackTrash",
    tipo: { en: "Mobile app + API", es: "App móvil + API" },
    descripcion: {
      en: "Recycling platform with pickup requests, recyclers and collection points. Clean Architecture and CQRS API.",
      es: "Plataforma de reciclaje con solicitudes de recojo, recicladores y puntos de acopio. API con Clean Architecture y CQRS.",
    },
    stack: ["Flutter", "ASP.NET Core", "PostgreSQL"],
    imagen: "/proyectos/tracktrash.webp",
    enlaces: [{ texto: code, url: "https://github.com/CarlosFloresDev/tracktrash-mobile" }],
  },
  {
    id: "launcherchef",
    nombre: "LauncherChef",
    tipo: { en: "Desktop app", es: "App de escritorio" },
    descripcion: {
      en: "Minecraft launcher with automatic mod management, server-side sync and auto updates.",
      es: "Launcher de Minecraft con gestión automática de mods, sincronización con el servidor y actualizaciones automáticas.",
    },
    stack: ["Electron", "React", "Vite"],
    enlaces: [{ texto: code, url: "https://github.com/CarlosFloresDev/launcherchef" }],
  },
  {
    id: "feka",
    nombre: "Feka Studios",
    tipo: { en: "Studio website", es: "Sitio de estudio" },
    descripcion: {
      en: "Bilingual site for an independent game studio: games, devlog, team and press kit.",
      es: "Sitio bilingüe de un estudio independiente: juegos, bitácora, equipo y prensa.",
    },
    stack: ["Cloudflare Workers", "JavaScript"],
    imagen: "/proyectos/feka.webp",
    enlaces: [{ texto: live, url: "https://feka-studios.pages.dev" }],
  },
  {
    id: "massive",
    nombre: "Massive",
    tipo: { en: "Landing page", es: "Landing page" },
    descripcion: {
      en: "Landing page for a custom software studio with an interactive 3D hero.",
      es: "Landing de una fábrica de software a medida con un hero 3D interactivo.",
    },
    stack: ["TypeScript", "Vite"],
    imagen: "/proyectos/massive.webp",
    enlaces: [{ texto: code, url: "https://github.com/CarlosFloresDev/massive-landing" }],
  },
  {
    id: "mods",
    nombre: "Minecraft mods",
    tipo: { en: "6 Fabric mods", es: "6 mods para Fabric" },
    descripcion: {
      en: "Procedural sky dungeons, guilds, daily quests and in-game TVs that stream video, with a dedicated server.",
      es: "Mazmorras flotantes procedurales, gremios, misiones diarias y televisores que reproducen video, con servidor propio.",
    },
    stack: ["Java", "Fabric", "Mixins"],
    imagen: "/proyectos/mods.webp",
    enlaces: [{ texto: code, url: "https://github.com/CarlosFloresDev/mazmorras-del-cielo" }],
  },
];

export const habilidades: { grupo: T; items: string[] }[] = [
  { grupo: { en: "Languages", es: "Lenguajes" }, items: ["C#", "Java", "TypeScript", "Python", "Dart", "Kotlin", "PHP", "C++"] },
  { grupo: { en: "Backend", es: "Backend" }, items: ["ASP.NET Core", "Spring Boot", "Django", "Laravel", "Express", "CQRS / MediatR"] },
  { grupo: { en: "Frontend and mobile", es: "Frontend y móvil" }, items: ["React", "Next.js", "Angular", "Astro", "Tailwind CSS", "Flutter"] },
  { grupo: { en: "Data", es: "Datos" }, items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Supabase", "Cloudflare D1"] },
  { grupo: { en: "Cloud and DevOps", es: "Cloud y DevOps" }, items: ["Git", "GitHub Actions", "Docker", "Cloudflare Workers", "Render", "Linux"] },
  { grupo: { en: "Games and hardware", es: "Videojuegos y hardware" }, items: ["Godot", "Unity", "Unreal Engine 5", "Blender", "ESP32"] },
];

export const educacion = [
  { titulo: { en: "Software Design and Development", es: "Diseño y Desarrollo de Software" } as T, lugar: "TECSUP", periodo: "2024 - 2026" },
  { titulo: { en: "Electronics and Industrial Automation (Module I)", es: "Electrónica y Automatización Industrial (módulo I)" } as T, lugar: "TECSUP", periodo: "2023" },
];
