import Link from "next/link";
import { site } from "@/data/site";
import HomeLink from "./HomeLink";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="pointer-events-none border-b border-border/60">
      <div className="pointer-events-auto mx-auto flex min-h-16 max-w-2xl items-center justify-between gap-4 px-5 py-4">
        <div className="flex items-center gap-5">
          <HomeLink />
          <nav aria-label="Hauptnavigation" className="flex gap-6 text-sm font-medium">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-muted transition-colors hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
