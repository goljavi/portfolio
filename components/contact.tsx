"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import { useTranslations } from 'next-intl';

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const t = useTranslations('Contact');

  return (
    <section>
      <div
        ref={headerRef}
        className={`mb-8 flex items-center gap-4 transition-all duration-700 ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          {t('title')}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div
        ref={cardRef}
        className={`rounded-lg border border-border bg-card p-6 transition-all duration-700 ease-out delay-100 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          {t('description')}
        </p>

        <div className="flex flex-wrap gap-6">
          <div>
            <p className="mb-1 text-sm text-muted-foreground">{t('linkedin')}</p>
            <Link
              href="https://linkedin.com/in/javiergold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              /in/javiergold
            </Link>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">{t('email')}</p>
            <Link
              href="mailto:somossedentarios@gmail.com"
              className="text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              somossedentarios@gmail.com
            </Link>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">{t('github')}</p>
            <Link
              href="https://github.com/goljavi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              @goljavi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
