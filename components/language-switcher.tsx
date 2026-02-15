"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: "en" | "es") => {
        if (newLocale === locale) return;
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="fixed top-6 right-6 z-50 p-1 rounded-full bg-secondary/30 backdrop-blur-md border border-border/50 flex gap-1 shadow-lg transition-all hover:border-border">
            <button
                onClick={() => switchLanguage("en")}
                className={`cursor-pointer px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${locale === "en"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage("es")}
                className={`cursor-pointer px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${locale === "es"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
            >
                ES
            </button>
        </div>
    );
}
