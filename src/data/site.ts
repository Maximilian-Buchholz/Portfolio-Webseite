// Hier alle Inhalte pflegen – Platzhalter durch echte Daten ersetzen.
export const site = {
  name: "Maximilian Buchholz",
  initials: "MB",
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
  { company: "Firma A", role: "Position", period: "2023 – heute" },
  { company: "Firma B", role: "Position", period: "2020 – 2023" },
];
