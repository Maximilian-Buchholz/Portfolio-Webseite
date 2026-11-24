import Image from "next/image";
import { work } from "@/data/site";

export default function Work() {
  return (
    <section className="mt-16">
      <h2 className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">Werdegang</h2>
      <ol>
        {work.map((w) => (
          <li key={`${w.org}-${w.period}`} className="flex items-center gap-4 py-3">
            <span className="relative size-11 flex-none overflow-hidden rounded-xl bg-white ring-1 ring-border">
              <Image src={w.logo} alt={w.org} fill sizes="44px" className="object-cover" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <strong className="font-semibold">{w.role}</strong>
              <span className="text-sm text-muted">{w.org}</span>
            </div>
            <span className="text-right text-sm whitespace-nowrap text-muted">{w.period}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
