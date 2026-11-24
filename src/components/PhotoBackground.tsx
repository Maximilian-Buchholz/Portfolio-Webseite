"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { photos } from "@/data/site";

/** Deckkraft der Hintergrundfotos: 0 = unsichtbar, 1 = voll sichtbar. */
const OPACITY = 0.15;
/** Auf schmalen Bildschirmen liegen Fotos hinter dem Text – dort viel dezenter. */
const OPACITY_NARROW = 0.07;

const COLUMN = 672; // Breite des Textbereichs (max-w-2xl) in px
const MIN_GUTTER = 200; // Mindestbreite eines Seitenrands, damit Fotos daneben passen

type Placed = { src: string; x: number; y: number; width: number; rotate: number }; // x/width in px, y in % der Seitenhöhe
type Layout = { items: Placed[]; opacity: number; interactive: boolean };

/**
 * Weiche, abgerundete Ränder: Maske aus einem weichgezeichneten Rechteck mit runden Ecken.
 * (Bild ist immer 2:3, die Maske im Verhältnis 200x300 skaliert daher gleichmäßig.)
 *  - INSET: Abstand der Form vom Bildrand (Platz für den weichen Auslauf)
 *  - RADIUS: Eckenrundung
 *  - SOFT: Stärke der Unschärfe am Rand
 */
const INSET = 18;
const RADIUS = 40;
const SOFT = 9;
const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${SOFT}"/></filter></defs><rect x="${INSET}" y="${INSET}" width="${200 - 2 * INSET}" height="${300 - 2 * INSET}" rx="${RADIUS}" fill="#fff" filter="url(#b)"/></svg>`;
const feather = `url("data:image/svg+xml,${encodeURIComponent(maskSvg)}")`;

/** Startwert der Anordnung: gleicher Wert = bei jedem Aufruf dieselbe Anordnung. Andere Zahl = neue Anordnung. */
const SEED = 7;

/** Kleiner Zufallsgenerator mit festem Startwert (liefert immer dieselbe Zahlenfolge). */
function seededRandom(seed: number) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Ordnet die Fotos im Zickzack an (links, rechts, links, …) mit gleichen Höhenabständen.
 * Reihenfolge, Abstände und Drehung sind "zufällig", aber über SEED fest – bei jedem Aufruf gleich.
 */
function scatter(): Layout {
  const next = seededRandom(SEED);
  const rand = (min: number, max: number) => min + next() * (max - min);
  const shuffle = <T,>(a: T[]) => [...a].sort(() => next() - 0.5);
  const vw = window.innerWidth;
  const gutter = (vw - COLUMN) / 2;
  const wide = gutter >= MIN_GUTTER;

  const order = shuffle([...photos.keys()]);
  const n = order.length;
  const TOP = 7; // % der Seitenhöhe, an dem das erste Bild beginnt
  const BOTTOM = 73; // % der Seitenhöhe, an dem das letzte Bild beginnt
  const RIGHT_SHIFT = -3.5; // Bilder rechts um so viel % der Seitenhöhe nach oben schieben (negativ = hoch)
  const step = n > 1 ? (BOTTOM - TOP) / (n - 1) : 0;
  const seen = { left: 0, right: 0 };

  const items = order.map((idx, i): Placed => {
    const side = i % 2 === 0 ? "left" : "right";
    const k = seen[side]++; // wievieltes Bild auf dieser Seite
    // Drehung wechselt von Bild zu Bild auf einer Seite (links: rechts-, links-, rechtsherum …)
    const sign = (side === "left" ? 1 : -1) * (k % 2 === 0 ? 1 : -1);
    const rotate = sign * rand(4, 9);
    const width = wide ? Math.min(Math.max(gutter * rand(0.54, 0.62), 150), 290) : rand(150, 220);
    const y = TOP + i * step + (side === "right" ? RIGHT_SHIFT : 0) + rand(-0.8, 0.8);

    let x: number;
    if (!wide) x = rand(-width * 0.2, vw - width * 0.8);
    else if (side === "left") {
      // nah an der Textspalte (Luft für gedrehte Ecken), nur wenig Streuung nach außen
      const nearest = gutter - width - 16 - width * 0.3;
      x = rand(Math.max(-width * 0.15, nearest - gutter * 0.2), nearest);
    } else {
      const nearest = vw - gutter + 16 + width * 0.3;
      x = rand(nearest, Math.min(vw - width * 0.85, nearest + gutter * 0.2));
    }
    return { src: photos[idx].src, x, y, width, rotate };
  });
  return { items, opacity: wide ? OPACITY : OPACITY_NARROW, interactive: wide };
}

/** Fotos als dezenter Hintergrund der Startseite (beim Überfahren mit der Maus voll sichtbar) über die gesamte Seitenhöhe (scrollt mit dem Inhalt). */
export default function PhotoBackground() {
  const pathname = usePathname();
  const [layout, setLayout] = useState<Layout | null>(null);

  // Erst im Browser berechnen (braucht die Fensterbreite), damit Server- und Client-HTML übereinstimmen.
  useEffect(() => {
    const id = requestAnimationFrame(() => setLayout(scatter()));
    return () => cancelAnimationFrame(id);
  }, []);

  // Nur auf der Startseite zeigen, nicht auf Unterseiten.
  if (pathname !== "/" || photos.length === 0 || !layout) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {layout.items.map((p) => (
        <div
          key={p.src}
          className={`group absolute aspect-2/3 animate-[bgfade_1.2s_ease_backwards] overflow-hidden rounded-lg opacity-(--bg-opacity) transition-[opacity,scale] duration-300${
            layout.interactive ? " pointer-events-auto hover:z-10 hover:scale-105 hover:opacity-100" : ""
          }`}
          style={{
            left: p.x,
            top: `${p.y}%`,
            width: p.width,
            rotate: `${p.rotate}deg`,
            "--bg-opacity": layout.opacity,
            maskImage: feather,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: feather,
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          } as React.CSSProperties}
        >
          <Image
            src={p.src}
            alt=""
            fill
            sizes="380px"
            // Weichgezeichnet im Ruhezustand (leicht vergrößert, damit der Rand nicht ausfranst); scharf beim Überfahren.
            className="scale-125 object-cover blur-[12px] transition-[filter,scale] duration-500 group-hover:scale-100 group-hover:blur-none"
          />
        </div>
      ))}
    </div>
  );
}
