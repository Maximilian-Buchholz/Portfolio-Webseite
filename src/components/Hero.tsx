import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-16 pb-8">
      <h1 className="text-balance text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        {site.headline}
      </h1>
      <p className="mt-5 text-lg text-muted">
        Hi, ich bin <strong className="text-foreground">{site.name}</strong> – {site.intro}
      </p>
      <div className="mt-6 flex gap-5 text-sm">
        {site.socials.map((s) => (
          <a key={s.label} href={s.href} className="text-muted transition-colors hover:text-foreground">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
