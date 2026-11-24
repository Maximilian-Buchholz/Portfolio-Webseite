import Image from "next/image";
import { photos } from "@/data/site";

export default function Photos() {
  return (
    <section aria-label="Fotos" className="-mx-5 flex justify-start gap-4 overflow-x-auto px-5 py-12 sm:justify-center">
      {photos.map((p) => (
        <figure
          key={p.caption}
          style={{ rotate: `${p.rotate}deg` }}
          className="w-38 flex-none rounded-xl border border-[#6b5130]/10 bg-[#FFFAF2] p-2 pb-3 text-[#554536] shadow-[0_2px_10px_rgba(65,48,25,0.09)] transition-all duration-300 hover:scale-105 hover:rotate-0!"
        >
          <div className="relative aspect-3/4 overflow-hidden rounded-md bg-[#e8dfd0]">
            {p.src && <Image src={p.src} alt={p.caption} fill sizes="152px" className="object-cover" />}
          </div>
          <figcaption className="mt-2 text-center text-[11px]">{p.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}
