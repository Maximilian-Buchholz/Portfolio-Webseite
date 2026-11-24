// Hier alle Inhalte pflegen – Platzhalter durch echte Daten ersetzen.
export const site = {
  name: "Maximilian Buchholz",
  initials: "MB",
  avatar: "/photos/avatar-wide.jpg",
  headline: "Moin!",
  role: "Medieninformatiker aus Dortmund",
  channel: { name: "Daniel Korte", href: "https://www.youtube.com/c/korte100" },
  hobbies: ["Programmieren", "Videospiele", "Fotografie", "Videografie"],
  email: "deine@email.de",
  socials: [
    { label: "GitHub", href: "https://github.com/Maximilian-Buchholz" },
    { label: "LinkedIn", href: "#" }, // TODO: LinkedIn-Profil-URL eintragen
  ],
  nav: [
    { label: "Über mich", href: "/about" },
    { label: "Projekte", href: "/projects" },
  ],
};

// Fotos nach /public/photos legen und hier eintragen, z. B.:
//   { src: "/photos/schreibtisch.jpg", alt: "Mein Schreibtisch", rotate: -3 }
// Ohne Einträge wird die Foto-Reihe nicht angezeigt.
export type Photo = { src: string; alt: string; rotate?: number };
export const photos: Photo[] = [
  { src: "/photos/foto-1.jpg", alt: "Gelber Käfer bei Nacht auf nasser Straße", rotate: -3 },
  { src: "/photos/foto-2.jpg", alt: "Person mit Koffer in einer Altstadtgasse", rotate: 2 },
  { src: "/photos/foto-3.jpg", alt: "Altes Backsteinhaus mit Erker an einem Kanal", rotate: -2 },
  { src: "/photos/foto-4.jpg", alt: "Bahnhofsfassade im Abendlicht", rotate: 3 },
  { src: "/photos/foto-5.jpg", alt: "Prunkvolle Treppenhalle mit großem Bogenfenster", rotate: -1 },
];

export type Entry = { title: string; meta: string; description: string; href: string };

// Projekte hier eintragen, z. B.:
//   { title: "Mein Projekt", meta: "2026", description: "Kurzbeschreibung", href: "https://…" }
export const projects: Entry[] = [
  {
    title: "PlanWerk",
    meta: "2026",
    description: "Projektmanagement in Phasen. Projekte, Aufgaben, Kalender und Team in einer App.",
    href: "/planwerk",
  },
  {
    title: "ScanChef",
    meta: "2025",
    description: "iOS-App für Vorräte und Rezepte mit Barcode-Scanner – Medienprojekt an der FH Südwestfalen.",
    href: "/projects/scanchef",
  },
  {
    title: "Fragmented Trust",
    meta: "2024/25",
    description: "VFX-Kurzfilm in Night City – Medienproduktion an der FH Südwestfalen.",
    href: "/projects/fragmented-trust",
  },
  {
    title: "SCN2A Germany e.V. Imagefilm",
    meta: "2024",
    description: "Imagefilm für den Verein SCN2A Germany e.V. – verantwortlich für einen Großteil der Videoaufnahmen.",
    href: "/projects/scn2a-imagefilm",
  },
];

export const work = [
  { role: "Student – Medieninformatik", org: "Fachhochschule Südwestfalen", period: "2022 – heute", logo: "/resumee/fhswf-logo.jpeg", url: "https://www.fh-swf.de" },
  { role: "Videoeditor – YouTube (Daniel Korte)", org: "Rocket Up GmbH", period: "2021 – heute", logo: "/resumee/rup-logo.png", url: "https://rocket-up.de" },
  { role: "Student – Praktische Informatik", org: "Fachhochschule Dortmund", period: "2021 – 2022", logo: "/resumee/fhdo-logo.png", url: "https://www.fh-dortmund.de" },
  { role: "Zerspanungsmechaniker", org: "ROSEN Group", period: "01.2021 – 07.2021", logo: "/resumee/rosen-logo.png", url: "https://www.rosen-group.com" },
  { role: "Ausbildung – Zerspanungsmechaniker", org: "ROSEN Group", period: "2018 – 2021", logo: "/resumee/rosen-logo.png", url: "https://www.rosen-group.com" },
  { role: "Allgemeine Hochschulreife", org: "BBS Wirtschaft Lingen", period: "2014 – 2017", logo: "/resumee/bbswi-logo.png", url: "https://bbs-lingen-wirtschaft.eu" },
];
