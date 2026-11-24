import type { Metadata } from "next";
import EntryList from "@/components/EntryList";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Projekte" };

export default function Projects() {
  return (
    <div className="pt-12">
      <h1 className="text-4xl font-semibold tracking-tight">Projekte</h1>
      <EntryList title="Alle Projekte" entries={projects} />
    </div>
  );
}
