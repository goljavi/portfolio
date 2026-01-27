"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Project {
  title: string;
  description: string;
  impact: string[];
  tags: string[];
  period: string;
  images: string[];
}

const projects: Project[] = [
  {
    title: "Single Sign-On System",
    description:
      "Designed and built a custom OAuth2-based SSO system to unify user identity across multiple platforms—editorial, e-commerce, and experimental labs.",
    impact: [
      "Unified identity for 50,000+ community members",
      "Reduced login friction across 3 separate platforms",
      "Implemented secure token handoff and session management",
    ],
    tags: ["Node.js", "OAuth2", "PostgreSQL", "Security"],
    period: "El Gato y La Caja",
    images: [
      "/projects/sso-1.jpg",
      "/projects/sso-2.jpg",
      "/projects/sso-3.jpg",
      "/projects/sso-4.jpg",
    ],
  },
  {
    title: "Custom Analytics & URL Shortener",
    description:
      "Built an internal URL shortener with advanced tracking to enable offline-to-online conversion tracking for physical publishing—QR codes in printed books link back to digital content.",
    impact: [
      "Enabled campaign tracking for print media",
      "Real-time analytics dashboard for marketing team",
      "High-performance redirect service handling thousands of daily requests",
    ],
    tags: ["Node.js", "Redis", "React", "Analytics"],
    period: "El Gato y La Caja",
    images: [
      "/projects/analytics-1.jpg",
      "/projects/analytics-2.jpg",
      "/projects/analytics-3.jpg",
      "/projects/analytics-4.jpg",
    ],
  },
  {
    title: "Citizen Science Platform",
    description:
      "Frontend architecture for interactive experiments that collected real-time data from thousands of concurrent users during live broadcasts and events.",
    impact: [
      "Handled traffic spikes during live TV appearances",
      "Real-time data visualization for researchers",
      "Gamified interfaces that boosted participation rates",
    ],
    tags: ["React", "WebSocket", "D3.js", "Data Viz"],
    period: "El Gato y La Caja",
    images: [
      "/projects/science-1.jpg",
      "/projects/science-2.jpg",
      "/projects/science-3.jpg",
      "/projects/science-4.jpg",
    ],
  },
];

function Lightbox({
  images,
  title,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: {
  images: string[];
  title: string;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => e.key === "Enter" && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
        aria-label="Close lightbox"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="relative mx-16 h-[80vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} screenshot ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}

function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  return (
    <>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => openLightbox(index)}
            className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded border border-border transition-all hover:border-primary hover:opacity-90"
            aria-label={`View ${title} screenshot ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          title={title}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`group rounded-lg border border-border bg-card p-6 transition-all duration-700 ease-out hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <ProjectGallery images={project.images} title={project.title} />

      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="text-sm text-primary">{project.period}</p>
        </div>
        <button
          type="button"
          className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
          aria-label="View project details"
        >
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1">
        {project.impact.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}

export function SelectedWork() {
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
          Selected Work
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
