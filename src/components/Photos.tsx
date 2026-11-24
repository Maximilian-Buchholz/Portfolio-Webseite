import Image from "next/image";
import { photos } from "@/data/site";

export default function Photos() {
  if (photos.length === 0) return null;
  return (
    // Bricht aus dem schmalen Textbereich aus: bis zu 76rem breit, mittig zur Seite.
    <section
      aria-label="Fotos"
      className="relative left-1/2 flex w-[min(100vw,76rem)] -translate-x-1/2 gap-8 overflow-x-auto px-5 py-12 [&>:first-child]:ml-auto [&>:last-child]:mr-auto"
    >
      {photos.map((p) => (
        <div
          key={p.src}
          style={{ rotate: `${p.rotate ?? 0}deg` }}
          className="relative aspect-2/3 w-40 flex-none sm:w-52 overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 hover:rotate-0!"
        >
          <Image src={p.src} alt={p.alt} fill sizes="208px" className="object-cover" />
        </div>
      ))}
    </section>
  );
}
