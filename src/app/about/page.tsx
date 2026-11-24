import type { Metadata } from "next";
import Intro from "@/components/Intro";
import Work from "@/components/Work";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Über mich" };

export default function About() {
  return (
    <section className="pt-12">
      <h1 className="text-4xl font-semibold tracking-tight">Über mich</h1>
      <p className="mt-5 text-lg text-muted">
        <Intro />
      </p>
      <p className="mt-3 text-lg text-muted">
        Meine Hobbys sind {site.hobbies.slice(0, -1).join(", ")} und {site.hobbies[site.hobbies.length - 1]}.
      </p>
      <Work />
    </section>
  );
}
