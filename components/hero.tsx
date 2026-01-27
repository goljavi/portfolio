"use client";

import { Github, Linkedin, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="mb-24">
      <div
        className={`grid gap-8 md:grid-cols-[200px_1fr] md:gap-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your Name
          </h1>
          <p className="text-lg text-primary">Senior Full Stack Engineer</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Building scalable systems and digital platforms for the web.
          </p>

          <nav className="flex items-center gap-4 pt-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:you@example.com"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="/cv.pdf"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Download CV"
            >
              <FileText className="h-5 w-5" />
            </Link>
          </nav>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m a developer with{" "}
            <span className="font-medium text-foreground">
              12 years of experience
            </span>{" "}
            building everything from video games in Unity to complex web
            platforms. My work sits at the intersection of{" "}
            <span className="font-medium text-foreground">
              robust engineering
            </span>{" "}
            and{" "}
            <span className="font-medium text-foreground">
              thoughtful product design
            </span>
            .
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Currently, I&apos;m a Senior Engineer at{" "}
            <Link
              href="https://elgatoylacaja.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              El Gato y La Caja
            </Link>
            , where I&apos;ve spent the last 9 years building digital
            infrastructure for a mass-media science platform—from custom SSO
            systems to analytics dashboards and e-commerce integrations.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            I specialize in{" "}
            <span className="font-medium text-foreground">
              scalable React frontends
            </span>{" "}
            and{" "}
            <span className="font-medium text-foreground">
              complex Node/PHP backends
            </span>
            , with deep roots in game development and native mobile apps.
          </p>
        </div>
      </div>
    </section>
  );
}
