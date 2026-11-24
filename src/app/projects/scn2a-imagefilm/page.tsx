import type { Metadata } from "next";

export const metadata: Metadata = { title: "SCN2A Imagefilm" };

const VIDEO_ID = "JUGbTGnZEUs";

const facts = [
  { label: "Format", value: "Imagefilm" },
  { label: "Auftrag", value: "SCN2A Germany e.V." },
  { label: "Rolle", value: "Kamera" },
  { label: "Jahr", value: "2024" },
];

const heading = "mt-12 mb-4 text-xs font-semibold tracking-widest text-muted uppercase";

export default function Scn2aImagefilm() {
  return (
    <article className="pt-12">
      <p className="text-sm text-muted">Imagefilm · SCN2A Germany e.V. · 2024</p>
      <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight">
        SCN2A Germany e.V. – Imagefilm
      </h1>
      <p className="mt-5 text-lg text-muted">
        Für den Verein SCN2A Germany e.V. ist ein Imagefilm entstanden. Bei diesem Projekt war ich
        für einen Großteil der Videoaufnahmen verantwortlich.
      </p>

      <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-card ring-1 ring-border">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}`}
          title="SCN2A Germany e.V. Imagefilm 2024 – fertiges Video auf YouTube"
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
    </article>
  );
}
