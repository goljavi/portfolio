import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

import { LanguageSwitcher } from "@/components/language-switcher";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        metadataBase: new URL('https://javiergold.ar'),
        title: t('title'),
        description: t('description'),
        keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Python", "Web Development", "Javier Goldschmidt", "Software Engineering"],
        generator: 'v0.app',
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `https://javiergold.ar/${locale}`,
            siteName: 'Javier Goldschmidt Portfolio',
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`font-sans antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <LanguageSwitcher />
                    {children}
                    <Analytics />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
