"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TimelineItem {
  period: string;
  title: string;
  company?: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    period: "2017 — Present",
    title: "Senior Full Stack Engineer",
    company: "El Gato y La Caja",
    description:
      "Leading development of digital infrastructure for a mass-media science platform. Built SSO systems, analytics tools, and e-commerce integrations serving 50k+ users.",
  },
  {
    period: "2014 — 2017",
    title: "Full Stack Developer",
    company: "El Gato y La Caja",
    description:
      "Started as the first technical hire. Built the foundational web stack and established engineering practices that scaled with the company.",
  },
  {
    period: "2012 — 2014",
    title: "Mobile & Game Developer",
    description:
      "Freelance work building Android applications and Unity games. Shipped multiple titles and learned the foundations of performance optimization and user experience.",
  },
];

function TimelineEntry({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`grid gap-4 md:grid-cols-[140px_1fr] md:gap-8 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="text-sm text-muted-foreground">{item.period}</p>
      <div className="space-y-2">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="font-medium text-foreground">{item.title}</h3>
          {item.company && (
            <>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-primary">{item.company}</span>
            </>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function Timeline() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="mb-24">
      <div
        ref={ref}
        className={`mb-8 flex items-center gap-4 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Experience
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-8">
        {timeline.map((item, index) => (
          <TimelineEntry
            key={`${item.period}-${index}`}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
