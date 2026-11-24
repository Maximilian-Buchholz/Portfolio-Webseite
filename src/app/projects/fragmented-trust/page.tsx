import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Fragmented Trust" };

const VIDEO_ID = "cDBH3ijmU3Y";

const facts = [
  { label: "Format", value: "VFX-Sequenz, Szene „Night City – Alley“" },
  { label: "Team", value: "Dreiköpfiges Team, gemeinsame Regie" },
  { label: "Kamera", value: "Panasonic Lumix G85 in 4K mit 25-mm- und 50-mm-Objektiv" },
  { label: "Drehtag", value: "10 bis 18 Uhr, 20 geplante Einstellungen à ca. 5 Sekunden" },
];

const steps = [
  {
    title: "Story Circle",
    text: "Die Geschichte ist nach Dan Harmons Story Circle aufgebaut: von Lucys Rückzug auf den Mond über den Auftrag und die Mission im Konzern bis zum Verrat durch den Auftraggeber und dem neuen Team.",
    image: { src: "/projects/fragmented-trust/story-circle.jpg", alt: "Handschriftlich ausgefüllter Story Circle zu Fragmented Trust", width: 1600, height: 1200 },
  },
  {
    title: "Moodboard",
    text: "Neon, Regen und enge Gassen als visuelle Referenz für die Szene. Die Bilder stammen von anderen Urheber:innen und dienten nur der Orientierung.",
    image: { src: "/projects/fragmented-trust/moodboard.jpg", alt: "Moodboard Night City – Alley mit Neon-Stadtansichten und Charakter-Referenzen", width: 1600, height: 900 },
  },
  {
    title: "Storyboard",
    text: "Das Storyboard entstand mit Storyboarder und legt Einstellungsgrößen, Bewegung und Soundideen für die Szene fest.",
    image: { src: "/projects/fragmented-trust/storyboard.jpg", alt: "Storyboard-Seite 1 mit acht Panels zu Fragmented Trust", width: 1400, height: 990 },
  },
];

const heading = "mt-12 mb-4 text-xs font-semibold tracking-widest text-muted uppercase";

export default function FragmentedTrust() {
  return (
    <article className="pt-12">
      <p className="text-sm text-muted">Medienproduktion · FH Südwestfalen · Wintersemester 2024/25</p>
      <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight">
        Fragmented Trust – VFX-Kurzfilm in Night City
      </h1>
      <p className="mt-5 text-lg text-muted">
        In einer neongetränkten Zukunft kehrt die Auftragskillerin Lucy nach „Night City“ zurück, um
        einen Auftrag auszuführen. Doch als sie herausfindet, dass ihr eigener Auftraggeber mit dem
        scheinbar feindlichen Konzern unter einer Decke steckt, muss sie sich entscheiden, wem sie in
        einer Stadt voller Lügen und Verrat vertrauen kann.
      </p>

      <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-card ring-1 ring-border">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
          title="Fragmented Trust – fertiges Video auf YouTube"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="size-full"
        />
      </div>
      <a
        href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm text-muted underline underline-offset-4"
      >
        Auf YouTube ansehen
      </a>

      <h2 className={heading}>Projekt</h2>
      <dl className="divide-y divide-border">
        {facts.map((f) => (
          <div key={f.label} className="grid grid-cols-[5.5rem_1fr] gap-x-4 py-3">
            <dt className="font-semibold">{f.label}</dt>
            <dd className="text-muted">{f.value}</dd>
          </div>
        ))}
      </dl>

      <h2 className={heading}>Vorbereitung</h2>
      <div className="space-y-12">
        {steps.map((s) => (
          <section key={s.title}>
            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
            <p className="mb-4 text-muted">{s.text}</p>
            <Image
              src={s.image.src}
              alt={s.image.alt}
              width={s.image.width}
              height={s.image.height}
              sizes="(max-width: 768px) 100vw, 720px"
              className="w-full rounded-2xl ring-1 ring-border"
            />
          </section>
        ))}
      </div>
    </article>
  );
}
