import Link from "next/link";
import { site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-border/60">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-4">
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
