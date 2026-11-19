export const perfil = {
  nombre: "Carlos Llano",
  nombreCompleto: "Carlos Alberto Llano Flores",
  rol: "Desarrollador de Software Full Stack",
  ubicacion: "Arequipa, Perú",
  email: "car.alberto549@gmail.com",
  github: "https://github.com/CarlosFloresDev",
  resumen:
    "Estoy terminando Diseño y Desarrollo de Software en TECSUP. Trabajo en todo el ciclo de una aplicación: prototipo en Figma, backend, base de datos, app móvil y despliegue. Vengo de una formación técnica en electrónica, así que conectar software con hardware —sensores, ESP32, dispositivos hápticos— me resulta natural.",
  roles: ["Backend .NET y Java", "Apps móviles con Flutter", "Web con React y Astro", "Videojuegos con Godot y Unity"],
};

export const experiencia = [
  {
    cargo: "Desarrollador Full Stack",
    lugar: "Proyecto BlindForge",
    periodo: "Sep. 2025 — actualidad",
    puntos: [
      "Videojuego para personas con discapacidad visual, hecho en Unity para Android.",
      "Retroalimentación háptica y auditiva: la forma en que el jugador “ve” el juego.",
      "Servicios backend con Django y Spring Boot en la nube, y un panel web en React.",
      "Integración de hardware: ESP32, sensores de fuerza y módulos vibratorios en un guante háptico.",
    ],
    stack: ["Unity", "Django", "Spring Boot", "React", "ESP32", "Figma"],
  },
  {
    cargo: "Practicante de Software",
    lugar: "Fibertel Networks S.A.C.",
    periodo: "Ene. 2026 — Feb. 2026",
    puntos: [
      "Apoyo al área de software en tareas técnicas reales, bajo la supervisión del subgerente.",
      "Trabajo con plazos y prioridades de empresa.",
    ],
    stack: ["Desarrollo web", "Soporte de software"],
  },
  {
    cargo: "Cofundador y desarrollador",
    lugar: "Feka Studios",
    periodo: "2026",
    puntos: ["Estudio independiente de desarrollo formado con dos compañeros. Diseñé y publiqué el sitio del estudio."],
    stack: ["Cloudflare Workers", "JavaScript"],
  },
];

export type Proyecto = {
  nombre: string;
  tipo: string;
  descripcion: string;
  stack: string[];
  imagen?: string;
  acento: string;
  enlaces: { texto: string; url: string }[];
  destacado?: boolean;
};

export const proyectos: Proyecto[] = [
  {
    nombre: "Ceniza Neón",
    tipo: "Videojuego",
    descripcion:
      "Construye de día, resiste de noche y recupera cinco distritos. Colonia lateral con economía, profesiones y defensas, y jefes en arenas cenitales. Versiones para Windows, Android y navegador.",
    stack: ["Godot 4", "GDScript", "Pixel art"],
    imagen: "/proyectos/ceniza-colonia.webp",
    acento: "#ff4fd8",
    enlaces: [
      { texto: "Web del juego", url: "https://ceniza-neon.chefsitturchey.workers.dev/" },
      { texto: "Jugar en itch.io", url: "https://chefsitturchey.itch.io/ceniza-neon" },
    ],
    destacado: true,
  },
  {
    nombre: "TrackTrash",
    tipo: "App móvil + API",
    descripcion:
      "Plataforma de reciclaje para Arequipa: solicitudes de recojo, recicladores, puntos de acopio e indicadores. API con Clean Architecture y CQRS, y app en Flutter.",
    stack: ["Flutter", "ASP.NET Core", "PostgreSQL", "CQRS"],
    acento: "#3ddc97",
    enlaces: [{ texto: "Código de la app", url: "https://github.com/CarlosFloresDev/tracktrash-mobile" }],
    destacado: true,
  },
  {
    nombre: "Casa H&L",
    tipo: "Web + sistema de gestión",
    descripcion:
      "Sitio de un negocio de hospedaje con panel de administración: reservas, calendario de ocupación, cotizador, caja y comprobantes.",
    stack: ["Astro", "React", "Cloudflare Workers", "D1"],
    acento: "#f5b14c",
    enlaces: [
      { texto: "Ver sitio", url: "https://casa-hl.chefsitturchey.workers.dev" },
      { texto: "Código", url: "https://github.com/CarlosFloresDev/casa-hl" },
    ],
    destacado: true,
  },
  {
    nombre: "Mods de Minecraft",
    tipo: "6 mods (Fabric)",
    descripcion:
      "Picantería y casino arequipeños, campus Tecsup con progresión industrial, misiones diarias, gremios, mazmorras flotantes procedurales y televisores que reproducen YouTube. Con servidor y comunidad en Discord.",
    stack: ["Java", "Fabric", "Mixins", "Python"],
    acento: "#7cc4ff",
    enlaces: [
      { texto: "Casino", url: "https://github.com/CarlosFloresDev/arequipa-bar-casino" },
      { texto: "Tecsup Craft", url: "https://github.com/CarlosFloresDev/tecsup-craft" },
      { texto: "Mazmorras", url: "https://github.com/CarlosFloresDev/mazmorras-del-cielo" },
      { texto: "TeleRadio", url: "https://github.com/CarlosFloresDev/teleradio" },
    ],
  },
  {
    nombre: "LauncherChef",
    tipo: "App de escritorio",
    descripcion:
      "Launcher de Minecraft con gestión automática de mods, sincronización remota por servidor y actualizaciones automáticas.",
    stack: ["Electron", "React", "Vite"],
    acento: "#c792ff",
    enlaces: [{ texto: "Código", url: "https://github.com/CarlosFloresDev/launcherchef" }],
  },
  {
    nombre: "Pixel Andino",
    tipo: "Agencia web",
    descripcion: "Agencia de desarrollo web: landing, sitios de ejemplo por rubro y un panel para gestionar clientes y prospectos.",
    stack: ["Cloudflare", "JavaScript"],
    acento: "#ff7a59",
    enlaces: [{ texto: "Ver sitio", url: "https://pixelandino.pages.dev" }],
  },
  {
    nombre: "Feka Studios",
    tipo: "Sitio de estudio",
    descripcion: "Sitio del estudio independiente Feka Studios: proyectos, equipo y prensa.",
    stack: ["Cloudflare Workers", "JavaScript"],
    imagen: "/proyectos/feka.webp",
    acento: "#9ef01a",
    enlaces: [{ texto: "Ver sitio", url: "https://feka-studios.chefsitturchey.workers.dev" }],
  },
  {
    nombre: "Massive",
    tipo: "Landing page",
    descripcion: "Landing de una fábrica de software a medida.",
    stack: ["TypeScript", "Vite"],
    acento: "#5eead4",
    enlaces: [{ texto: "Código", url: "https://github.com/CarlosFloresDev/massive-landing" }],
  },
];

export const habilidades = [
  { grupo: "Lenguajes", items: ["C#", "Java", "TypeScript", "JavaScript", "Python", "Dart", "Kotlin", "PHP", "Ruby", "C++"] },
  { grupo: "Backend", items: ["ASP.NET Core", "Spring Boot", "Django", "Laravel", "Express", "MediatR / CQRS"] },
  { grupo: "Frontend y móvil", items: ["React", "Next.js", "Angular", "Astro", "Tailwind CSS", "Flutter"] },
  { grupo: "Datos", items: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "MongoDB", "Supabase", "Cloudflare D1"] },
  { grupo: "Cloud y DevOps", items: ["Git", "GitHub Actions", "Docker", "Cloudflare Workers", "Render", "Linux"] },
  { grupo: "Videojuegos y hardware", items: ["Godot", "Unity", "Unreal Engine 5", "ESP32", "Sensores", "Blender"] },
];

export const educacion = [
  { titulo: "Diseño y Desarrollo de Software", lugar: "TECSUP · Arequipa", periodo: "2024 — 2026" },
  { titulo: "Electrónica y Automatización Industrial (módulo I)", lugar: "TECSUP · Arequipa", periodo: "2023" },
];
