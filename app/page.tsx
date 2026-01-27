import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { TechStack } from "@/components/tech-stack";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Hero />
        <SelectedWork />
        <TechStack />
        <Timeline />
        <Contact />
      </div>
    </main>
  );
}
