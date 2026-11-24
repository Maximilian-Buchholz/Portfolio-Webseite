import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "ScanChef" };

const features = [
  "Kühlschrank: Lebensmittel mit Menge, Einheit, Lagerort und Verfallsdatum verwalten",
  "Barcode-Scanner: Produkte scannen und Name, Marke, Menge und Bild über die Open Food Facts API laden",
  "Benachrichtigungen, bevor Lebensmittel ablaufen",
  "Rezepte mit Zutaten, Kategorien, Tags, Zubereitungszeit und Schritt-für-Schritt-Anleitung",
  "Einkaufsliste",
  "Hell- und Dunkelmodus",
];

const sprints = [
  { name: "Sprint 1", text: "Entwurf, Feature-Festlegung, Grobarchitektur und Styleguide" },
  { name: "Sprint 2", text: "Grundfunktionen, Datenstrukturen, Lebensmittelübersicht, Barcode-Scanner und API-Anbindung" },
  { name: "Sprint 3", text: "Lebensmittelverwaltung, Verbrauchsmanagement, Ablauf-Benachrichtigungen und Rezeptverwaltung" },
  { name: "Sprint 4", text: "Guided Cooking, Einkaufsliste und Einstellungen" },
  { name: "Sprint 5", text: "Einkaufsliste automatisch füllen, Rezepte teilen, fehlende Oberflächen" },
];

const stack = ["Swift", "SwiftUI", "SwiftData", "AVFoundation", "Open Food Facts API", "XCTest", "Git", "Scrum"];

const heading = "mt-12 mb-4 text-xs font-semibold tracking-widest text-muted uppercase";

export default function ScanChef() {
  return (
    <article className="pt-12">
      <Image
        src="/projects/scanchef/logo.png"
        alt="ScanChef Logo"
        width={80}
        height={80}
        className="mb-6 size-20 rounded-2xl ring-1 ring-border"
      />
      <p className="text-sm text-muted">Medienprojekt · FH Südwestfalen · Sommersemester 2025</p>
      <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight">
        ScanChef – iOS-App für Vorräte und Rezepte
      </h1>
      <p className="mt-5 text-lg text-muted">
        ScanChef verwaltet, was im Kühlschrank liegt, und macht daraus Rezepte und Einkaufslisten.
        Produkte werden per Barcode gescannt, die App warnt vor ablaufenden Lebensmitteln.
        Entstanden ist sie als Teamprojekt in einer Vierergruppe im Scrum-Vorgehen.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        <Image
          src="/projects/scanchef/rezepte.png"
          alt="ScanChef: Rezepte im Hellmodus"
          width={598}
          height={1300}
          sizes="(max-width: 768px) 30vw, 220px"
          className="w-full rounded-2xl ring-1 ring-border"
        />
        <Image
          src="/projects/scanchef/kuehlschrank.png"
          alt="ScanChef: Kühlschrank mit Lebensmitteln und Verfallsdaten im Hellmodus"
          width={598}
          height={1300}
          sizes="(max-width: 768px) 30vw, 220px"
          className="w-full rounded-2xl ring-1 ring-border"
        />
        <Image
          src="/projects/scanchef/einkaufen-dark.png"
          alt="ScanChef: Einkaufsliste im Dunkelmodus"
          width={598}
          height={1300}
          sizes="(max-width: 768px) 30vw, 220px"
          className="w-full rounded-2xl ring-1 ring-border"
        />
      </div>

      <h2 className={heading}>Funktionen</h2>
      <ul className="list-disc space-y-2 pl-5 text-muted">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2 className={heading}>Vorgehen</h2>
      <p className="mb-4 text-muted">
        Wir haben in Sprints gearbeitet, mit Scrum-Meetings und Protokollen. Die Roadmap:
      </p>
      <ol className="divide-y divide-border">
        {sprints.map((s) => (
          <li key={s.name} className="grid grid-cols-[5rem_1fr] gap-x-4 py-3">
            <strong className="font-semibold">{s.name}</strong>
            <span className="text-muted">{s.text}</span>
          </li>
        ))}
      </ol>

      <h2 className={heading}>Datenmodell</h2>
      <p className="mb-4 text-muted">
        Produkte, Lebensmittel, Bestände, Lagerorte, Einheiten, Rezepte und Einkaufsliste sind als
        Modelle in SwiftData abgebildet.
      </p>
      <Image
        src="/projects/scanchef/datenmodell.png"
        alt="Datenbankdiagramm von ScanChef mit den Tabellen Product, StockEntry, FoodItem, Recipe und weiteren"
        width={1600}
        height={1293}
        sizes="(max-width: 768px) 100vw, 720px"
        className="w-full rounded-2xl bg-white ring-1 ring-border"
      />

      <h2 className={heading}>Technik</h2>
      <ul className="flex flex-wrap gap-2">
        {stack.map((t) => (
          <li key={t} className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
