"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface StackCategory {
  label: string;
  items: string[];
}

const stack: StackCategory[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "PHP", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "Game & Mobile",
    items: ["Unity (C#)", "Android (Kotlin/Java)", "WebGL"],
  },
  {
    label: "DevOps",
    items: ["Docker", "CI/CD", "AWS", "Vercel", "Linux"],
  },
];

function StackItem({
  category,
  index,
}: {
  category: StackCategory;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`space-y-3 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-sm font-medium text-foreground">{category.label}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {category.items.join(", ")}
      </p>
    </div>
  );
}

export function TechStack() {
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
          Stack
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {stack.map((category, index) => (
          <StackItem key={category.label} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
