"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslations } from 'next-intl';

import extrasMiddleware1 from "@/components/images/extras-middleware-1.png";
import extrasMiddleware2 from "@/components/images/extras-middleware-2.png";
import extrasMiddleware3 from "@/components/images/extras-middleware-3.png";
import extrasMiddleware4 from "@/components/images/extras-middleware-4.png";
import gridxEcosystem1 from "@/components/images/gridx-ecosystem-1.png";
import gridxEcosystem2 from "@/components/images/gridx-ecosystem-2.png";
import gridxEcosystem3 from "@/components/images/gridx-ecosystem-3.png";
import gridxEcosystem4 from "@/components/images/gridx-ecosystem-4.png";
import gridxEcosystem5 from "@/components/images/gridx-ecosystem-5.png";
import gridxEcosystem6 from "@/components/images/gridx-ecosystem-6.png";
import bancantes1 from "@/components/images/bancantes-1.png";
import bancantes2 from "@/components/images/bancantes-2.png";
import bancantes3 from "@/components/images/bancantes-3.png";
import bancantes4 from "@/components/images/bancantes-4.png";
import elGatoMigration1 from "@/components/images/el-gato-migration-1.png";
import elGatoMigration2 from "@/components/images/el-gato-migration-2.png";
import elGatoMigration3 from "@/components/images/el-gato-migration-3.png";
import scrollytellingSuite1 from "@/components/images/scrollytelling-suite-1.png";
import scrollytellingSuite2 from "@/components/images/scrollytelling-suite-2.png";
import scrollytellingSuite3 from "@/components/images/scrollytelling-suite-3.png";
import scrollytellingSuite4 from "@/components/images/scrollytelling-suite-4.png";
import cybershockGame1 from "@/components/images/cybershock-game-1.jpg";
import cybershockGame2 from "@/components/images/cybershock-game-2.jpg";
import cybershockGame3 from "@/components/images/cybershock-game-3.jpg";
import Link from "next/link";

interface ProjectBase {
  id: string;
  stack: string[];
  link: string;
  images: StaticImageData[];
}

const projectsData: ProjectBase[] = [
  {
    "id": "gridx-ecosystem",
    "stack": ["Next.js", "WordPress Headless", "Airtable API", "i18n Routing", "AI Media"],
    "link": "https://gridx-website.vercel.app",
    images: [
      gridxEcosystem1,
      gridxEcosystem2,
      gridxEcosystem3,
      gridxEcosystem4,
      gridxEcosystem5,
      gridxEcosystem6,
    ]
  },
  {
    "id": "bancantes-platform",
    "stack": ["PHP", "CodeIgniter", "MercadoPago API", "Cron Jobs", "Three.js"],
    "link": "https://bancar.elgatoylacaja.com",
    images: [
      bancantes1,
      bancantes2,
      bancantes3,
      bancantes4,
    ]
  },
  {
    "id": "el-gato-migration",
    "stack": ["Next.js", "WordPress Headless", "Docker", "AWS S3", "Vercel"],
    "link": "https://elgatoylacaja.com",
    images: [
      elGatoMigration1,
      elGatoMigration2,
      elGatoMigration3,
    ]
  },
  {
    "id": "extras-middleware",
    "stack": ["Javascript", "PHP", "Codeigniter", "Tiendanube API", "Canvas", "Nexo SDK", "Looker Studio", "BigQuery"],
    "link": "https://tienda.elgatoylacaja.com",
    images: [
      extrasMiddleware1,
      extrasMiddleware2,
      extrasMiddleware3,
      extrasMiddleware4,
    ]
  },
  {
    "id": "scrollytelling-suite",
    "stack": ["React", "Framer Motion", "D3.js", "Three.js", "Accessibility (A11y)"],
    "link": "https://chicasentecnologia.org/futuro-programado/",
    images: [
      scrollytellingSuite1,
      scrollytellingSuite2,
      scrollytellingSuite3,
      scrollytellingSuite4,
    ]
  },
  {
    "id": "cybershock-game",
    "stack": ["Unity", "C#", "Steamworks API", "Game Design"],
    "link": "https://store.steampowered.com/app/1365030/Cybershock_Future_Parkour/",
    images: [
      cybershockGame1,
      cybershockGame2,
      cybershockGame3,
    ]
  }
];

interface Project extends ProjectBase {
  title: string;
  shortDescription: string;
  fullDescription: string;
  impact: (string | { text: string; link: string })[];
  year: string;
  company: string;
}

function Lightbox({
  images,
  title,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: {
  images: StaticImageData[];
  title: string;
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }}
      onKeyDown={(e) => e.key === "Enter" && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
        className="absolute z-10 cursor-pointer right-4 top-4 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
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
        className="absolute z-10 cursor-pointer left-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        className="relative h-[80vh] w-full max-w-5xl"
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
        className="absolute z-10 cursor-pointer right-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 text-foreground transition-colors hover:bg-secondary/80"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>,
    document.body
  );
}

function ProjectGallery({ images, title }: { images: StaticImageData[]; title: string }) {
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
      <div className="mb-4 mt-8 md:mt-0 flex gap-2 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openLightbox(index);
            }}
            className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded border border-border transition-all hover:border-primary hover:opacity-90 cursor-pointer"
            aria-label={`View ${title} screenshot ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="150px"
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
  const t = useTranslations('SelectedWork');

  return (
    <article
      ref={ref}
      className={`group rounded-lg border border-border bg-card p-6 transition-all duration-700 ease-out hover:border-primary/50 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        href={project.link}
        target="_blank"
        className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        aria-label="View project details"
      >
        <span>{t('viewProject')}</span>
        <ExternalLink className="h-3 w-3" />
      </Link>
      {project.images && <ProjectGallery images={project.images} title={project.title} />}

      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <Link href={project.link} target="_blank" className="hover:text-primary transition-colors">
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
          </Link>
          <h4 className="mb-2 text-sm text-foreground">
            {project.shortDescription}
          </h4>
          <p className="text-sm text-primary">{project.company}</p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {project.fullDescription}
      </p>

      <ul className="mb-4 space-y-1">
        {project.impact.map((item, i) => {
          const isObj = typeof item === 'object';
          const text = isObj ? item.text : item;
          const link = isObj ? item.link : undefined;

          return (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
              {link ? (
                <Link href={link} target="_blank" className="hover:underline hover:text-primary transition-colors">
                  {text} <ExternalLink className="h-4 w-4 inline-block ml-1" />
                </Link>
              ) : (
                <span>{text}</span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tag) => (
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
  const t = useTranslations('SelectedWork');

  const projects: Project[] = projectsData.map((project) => ({
    ...project,
    title: t(`projects.${project.id}.title`),
    shortDescription: t(`projects.${project.id}.shortDescription`),
    fullDescription: t(`projects.${project.id}.fullDescription`),
    impact: Object.values(t.raw(`projects.${project.id}.impact`) as Record<string, string | { text: string; link: string }>),
    year: t(`projects.${project.id}.year`),
    company: t(`projects.${project.id}.company`),
  }));

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

      <div className="flex gap-4 flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
