import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          aria-label="Start"
          className="relative size-10 overflow-hidden rounded-full bg-card ring-1 ring-border"
        >
          <Image src={site.avatar} alt={site.name} fill sizes="40px" className="object-cover" priority />
        </Link>
        <nav aria-label="Hauptnavigation" className="flex gap-6 text-sm font-medium">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-muted transition-colors hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
