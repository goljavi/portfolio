"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslations } from 'next-intl';
import {
    Gamepad2,
    Bike,
    BookOpen,
    Book,
    ChefHat,
    Utensils,
    Plane,
    MapPin,
    Train,
    Music,
    Cpu,
    Brain,
    Microscope,
    Laptop,
    Box
} from "lucide-react";

const iconMap = {
    videogames: Gamepad2,
    biking: Bike,
    philosophy: BookOpen,
    reading: Book,
    cooking: ChefHat,
    eatingFromAbroad: Utensils,
    traveling: Plane,
    urbanism: MapPin,
    trains: Train,
    electronicMusic: Music,
    ai: Cpu,
    machineLearning: Brain,
    science: Microscope,
    technology: Laptop,
    printing3d: Box,
};

export function Interests() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
    const t = useTranslations('Interests');

    const interests = [
        'videogames',
        'biking',
        'philosophy',
        'eatingFromAbroad',
        'urbanism',
        'trains',
        'electronicMusic',
        'ai',
        'technology',
    ];

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


            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                {interests.map((interest) => {
                    const Icon = iconMap[interest as keyof typeof iconMap];
                    return (
                        <div
                            key={interest}
                            className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                <Icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                                {t(`items.${interest}`)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
