"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

/** Kleiner Avatar in der Tabbar als Link zur Startseite – nur auf Unterseiten (auf der Startseite ist das große Bild im Hero). */
export default function HomeLink() {
  if (usePathname() === "/") return null;
  return (
    <Link
      href="/"
      aria-label="Zur Startseite"
      title="Startseite"
      className="relative size-8 flex-none overflow-hidden rounded-full ring-1 ring-border transition-transform hover:scale-105"
    >
      <Image src={site.avatar} alt={site.name} fill sizes="32px" className="object-cover" />
    </Link>
  );
}
