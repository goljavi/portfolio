"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section>
      <div
        ref={headerRef}
        className={`mb-8 flex items-center gap-4 transition-all duration-700 ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Contact
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div
        ref={cardRef}
        className={`rounded-lg border border-border bg-card p-6 transition-all duration-700 ease-out delay-100 ${
          cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          If you&apos;d like to discuss a project or just say hi, I&apos;m
          always open to conversation.
        </p>

        <div className="flex flex-wrap gap-6">
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Email</p>
            <Link
              href="mailto:you@example.com"
              className="text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              you@example.com
            </Link>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">LinkedIn</p>
            <Link
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              /in/yourprofile
            </Link>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">GitHub</p>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              @yourusername
            </Link>
          </div>
        </div>
      </div>

      <footer className="mt-12 border-t border-border pt-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Built with Next.js and deployed on
          Vercel
        </p>
      </footer>
    </section>
  );
}
