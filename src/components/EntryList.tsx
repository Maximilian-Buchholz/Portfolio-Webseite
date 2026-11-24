import type { Entry } from "@/data/site";

export default function EntryList({ title, entries }: { title: string; entries: Entry[] }) {
  if (entries.length === 0) return null;
  return (
    <section className="mt-16 rounded-2xl border border-border p-6 sm:p-8">
      <h2 className="mb-2 text-lg font-semibold">{title}</h2>
      <ul className="divide-y divide-border">
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
