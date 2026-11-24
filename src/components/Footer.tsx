import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 flex max-w-2xl flex-col gap-4 border-t border-border px-5 pt-10 pb-16 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <nav className="flex gap-6">
        {site.nav.map((n) => (
          <Link key={n.href} href={n.href} className="transition-colors hover:text-foreground">
            {n.label}
          </Link>
        ))}
      </nav>
      <p>
        © 2026 {site.name} ·{" "}
        <a href={`mailto:${site.email}`} className="hover:text-foreground">Kontakt</a>
      </p>
    </footer>
  );
}
