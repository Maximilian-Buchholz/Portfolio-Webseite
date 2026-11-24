import type { Entry } from "@/data/site";

export default function EntryList({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="mt-16">
      <h2 className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">{title}</h2>
      <ul>
        {entries.map((e) => (
          <li key={e.title}>
            <a
              href={e.href}
              className="-mx-3 grid grid-cols-[1fr_auto] gap-x-4 rounded-xl px-3 py-4 transition-colors hover:bg-card"
            >
              <span className="font-semibold">{e.title}</span>
              <span className="text-sm text-muted">{e.meta}</span>
              <span className="col-span-2 text-sm text-muted">{e.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
