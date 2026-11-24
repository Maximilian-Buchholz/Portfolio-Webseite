// Hier alle Inhalte pflegen – Platzhalter durch echte Daten ersetzen.
export const site = {
  name: "Maximilian Buchholz",
  initials: "MB",
  avatar: "/photos/avatar.jpg",
  headline: "Ich baue Dinge und teile den Weg dorthin.",
  intro:
    "[Beruf/Rolle] aus [Stadt]. Aktuell arbeite ich an [Projektname]. Hier schreibe ich über meine Arbeit und Ideen.",
  email: "deine@email.de",
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
  ],
  nav: [
    { label: "Über mich", href: "/about" },
    { label: "Projekte", href: "/projects" },
  ],
};

// Fotos nach /public/photos legen und `src` eintragen (z. B. "/photos/desk.jpg").
export const photos = [
  { caption: "Ausblick von zu Hause", rotate: -3, src: "" },
  { caption: "Mein Schreibtisch", rotate: 2, src: "" },
  { caption: "Unterwegs", rotate: -2, src: "" },
  { caption: "Auszeit", rotate: 3, src: "" },
];

export type Entry = { title: string; meta: string; description: string; href: string };

export const projects: Entry[] = [
  { title: "Projekt Eins", meta: "2026", description: "Kurze Beschreibung des Projekts.", href: "#" },
  { title: "Projekt Zwei", meta: "2025", description: "Kurze Beschreibung des Projekts.", href: "#" },
  { title: "Projekt Drei", meta: "2024", description: "Kurze Beschreibung des Projekts.", href: "#" },
];

export const work = [
  { role: "Student – Medieninformatik", org: "Fachhochschule Südwestfalen", period: "2022 – heute", logo: "/resumee/fhswf-logo.jpeg" },
  { role: "Videoeditor – YouTube (Daniel Korte)", org: "Rocket Up GmbH", period: "2021 – heute", logo: "/resumee/rup-logo.png" },
  { role: "Student – Praktische Informatik", org: "Fachhochschule Dortmund", period: "2021 – 2022", logo: "/resumee/fhdo-logo.png" },
  { role: "Zerspanungsmechaniker", org: "ROSEN Group", period: "01.2021 – 07.2021", logo: "/resumee/rosen-logo.png" },
  { role: "Ausbildung – Zerspanungsmechaniker", org: "ROSEN Group", period: "2018 – 2021", logo: "/resumee/rosen-logo.png" },
  { role: "Allgemeine Hochschulreife", org: "BBS Wirtschaft Lingen", period: "2014 – 2017", logo: "/resumee/bbswi-logo.png" },
];
