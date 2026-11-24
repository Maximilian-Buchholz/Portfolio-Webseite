import { work } from "@/data/site";

export default function Work() {
  return (
    <section className="mt-16">
      <h2 className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">Werdegang</h2>
      <ol>
        {work.map((w) => (
          <li key={w.company} className="flex items-center gap-4 py-3">
            <span className="grid size-9 place-items-center rounded-lg bg-card font-semibold ring-1 ring-border">
              {w.company.slice(-1)}
            </span>
            <div className="flex flex-1 flex-col">
              <strong>{w.company}</strong>
              <span className="text-sm text-muted">{w.role}</span>
            </div>
            <span className="text-sm text-muted">{w.period}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
