import { PropsWithChildren } from 'react';

import type { Metadata, Viewport } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { env } from '@/env.mjs';
import { siteConfig } from '@/configs/site';
import { fontSans } from '@/lib/fonts';
import { Providers } from '@/components/providers';

import '@/styles/globals.css';

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    alternates: {
        canonical: '/',
    },
    description: siteConfig.description,
    keywords: [],
    authors: [],
    creator: 'topcleanercanberra',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: '@topcleanercanberra',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
};

export default async function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={(fontSans.variable, 'scroll-smooth antialiased')}>
                <Providers>{children}</Providers>
                <TailwindIndicator />
                <Toaster />
            </body>
        </html>
    );
}
