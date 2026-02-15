import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { TechStack } from "@/components/tech-stack";
import { Interests } from "@/components/interests";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";
import { useTranslations } from 'next-intl';

export default function Home() {
  const tTimeline = useTranslations('Timeline');

  const experience = ['elgato', 'freelance'].map(key => ({
    period: tTimeline(`entries.${key}.period`),
    title: tTimeline(`entries.${key}.title`),
    company: tTimeline.has(`entries.${key}.company`) ? tTimeline(`entries.${key}.company`) : undefined,
    description: tTimeline.has(`entries.${key}.description`) ? tTimeline(`entries.${key}.description`) : undefined,
  }));

  const education = ['university', 'davinci', 'udacity', 'fader'].map(key => ({
    period: tTimeline(`entries.${key}.period`),
    title: tTimeline(`entries.${key}.title`),
    company: tTimeline.has(`entries.${key}.company`) ? tTimeline(`entries.${key}.company`) : undefined,
    description: tTimeline.has(`entries.${key}.description`) ? tTimeline(`entries.${key}.description`) : undefined,
  }));

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Hero />
        <SelectedWork />
        <TechStack />
        <Timeline timeline={experience} title={tTimeline('experience')} />
        <Timeline timeline={education} title={tTimeline('education')} />
        <Interests />
        <Contact />
      </div>
    </main>
  );
}
