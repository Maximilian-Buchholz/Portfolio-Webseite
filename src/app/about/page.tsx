import type { Metadata } from "next";
import Work from "@/components/Work";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Über mich" };

export default function About() {
  return (
    <section className="pt-12">
      <h1 className="text-4xl font-semibold tracking-tight">Über mich</h1>
      <p className="mt-5 text-lg text-muted">{site.intro}</p>
      <Work />
    </section>
  );
}
