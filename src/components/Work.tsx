import Image from "next/image";
import { site, work } from "@/data/site";

export default function Work() {
  const linkedin = site.socials.find((s) => s.label === "LinkedIn");
  return (
    <section className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-2 text-lg font-semibold">Werdegang</h2>
      <ol className="divide-y divide-border">
        {work.map((w) => (
          <li key={`${w.org}-${w.period}`} className="flex items-center gap-4 py-4">
            <a
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${w.org} – Webseite öffnen`}
              title={w.org}
              className="relative size-11 flex-none overflow-hidden rounded-xl bg-white ring-1 ring-border transition-transform hover:scale-105"
            >
              <Image src={w.logo} alt="" fill sizes="44px" className="object-cover" />
            </a>
            <div className="flex min-w-0 flex-1 flex-col">
              <strong className="font-semibold">{w.role}</strong>
              <span className="text-sm text-muted">{w.org}</span>
            </div>
            <span className="text-right text-sm whitespace-nowrap text-muted">{w.period}</span>
          </li>
        ))}
      </ol>
      {linkedin && (
        <a
          href={linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          LinkedIn ansehen →
        </a>
      )}
    </section>
  );
}
