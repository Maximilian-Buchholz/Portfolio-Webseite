import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-16 pb-8">
      <Image
        src={site.avatar}
        alt={`Porträt von ${site.name}`}
        width={96}
        height={96}
        sizes="96px"
        className="mb-6 size-24 rounded-full object-cover ring-1 ring-border"
        priority
      />
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
