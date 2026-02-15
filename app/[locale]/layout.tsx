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

export const metadata: Metadata = {
    metadataBase: new URL('https://javiergold.ar'),
    title: 'Javier Goldschmidt - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and Python. Building modern web applications with clean code and great user experiences.',
    keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Python", "Web Development", "Javier Goldschmidt", "Software Engineering"],
    generator: 'v0.app',
    openGraph: {
        title: 'Javier Goldschmidt - Full Stack Developer',
        description: 'Full Stack Developer specializing in React, Next.js, Node.js, and Python. Building modern web applications with clean code and great user experiences.',
        url: 'https://javiergold.ar',
        siteName: 'Javier Goldschmidt Portfolio',
        locale: 'en',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Javier Goldschmidt - Full Stack Developer',
        description: 'Full Stack Developer specializing in React, Next.js, Node.js, and Python. Building modern web applications with clean code and great user experiences.',
    },
};

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
