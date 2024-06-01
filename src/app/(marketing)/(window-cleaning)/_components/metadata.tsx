import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Window Cleaner ${location} - #1 Residential Window Cleaning Service in ${location}`,
        description: `Best Window Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Bond Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'window cleaning',
            'window cleaning service',
            'window cleaning service canberra',
            'window cleaning service near me',
            'window cleaner',
            'window cleaner canberra',
            'window cleaner near me',
            'window cleaning company',
            'window cleaning company canberra',
            'residental window cleaning',
        ],
    };
};
