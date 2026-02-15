"use client";

import { Github, Linkedin, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import me from "@/components/images/me.png";

export function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const t = useTranslations('Hero');

  return (
    <section ref={ref} className="mb-24">
      <div
        className={`grid gap-8 md:grid-cols-[200px_1fr] md:gap-12 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="space-y-6">
          <Image
            src={me}
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t('title')}
          </h1>

          <nav className="flex items-center gap-4 pt-4">
            <Link
              href="https://linkedin.com/in/javiergold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:somossedentarios@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/goljavi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            {/*<Link
              href="/cv.pdf"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Download CV"
            >
              <FileText className="h-5 w-5" />
            </Link>*/}
          </nav>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {t.rich('about1', {
              highlight: (chunks) => <span className="font-medium text-foreground">{chunks}</span>
            })}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            {t.rich('about2', {
              link: (chunks) => (
                <Link
                  href="https://elgatoylacaja.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
                >
                  {chunks}
                </Link>
              )
            })}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            {t.rich('about3', {
              highlight: (chunks) => <span className="font-medium text-foreground">{chunks}</span>
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
