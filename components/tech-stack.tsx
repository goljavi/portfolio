"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslations } from 'next-intl';

interface StackCategory {
  labelKey: string;
  items: string[];
}

const stack: StackCategory[] = [
  {
    labelKey: "frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    labelKey: "backend",
    items: ["Node.js", "PHP", "Python", "MySQL", "BigQuery"],
  },
  {
    labelKey: "gameMobile",
    items: ["Unity (C#)", "Android (Kotlin/Java)", "WebGL"],
  },
  {
    labelKey: "devops",
    items: ["Digital Ocean", "Google Cloud", "AWS", "Vercel", "Docker", "CI/CD", "Linux"],
  },
];

function StackItem({
  category,
  index,
  label,
}: {
  category: StackCategory;
  index: number;
  label: string;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`space-y-3 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-sm font-medium text-foreground">{label}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {category.items.join(", ")}
      </p>
    </div>
  );
}

export function TechStack() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const t = useTranslations('TechStack');

  return (
    <section className="mb-24">
      <div
        ref={ref}
        className={`mb-8 flex items-center gap-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t('title')}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {stack.map((category, index) => (
          <StackItem
            key={category.labelKey}
            category={category}
            index={index}
            label={t(category.labelKey)}
          />
        ))}
      </div>
    </section>
  );
}
