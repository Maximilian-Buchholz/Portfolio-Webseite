import Hero from "@/components/Hero";
import Photos from "@/components/Photos";
import EntryList from "@/components/EntryList";
import Work from "@/components/Work";
import { projects } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Photos />
      <EntryList title="Projekte" entries={projects} />
      <Work />
    </>
  );
}
