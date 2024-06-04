import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Carpet Cleaner ${location}: #1 Carpet Cleaning Service in ${location}, ACT`,
        description: `Best Carpet Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'carpet cleaning',
            'carpet cleaning service',
            'carpet cleaning service canberra',
            'carpet cleaning company',
            'carpet cleaning company canberra',
            'carpet cleaner',
            'carpet cleaner canberra',
            'carpet cleaner near me',
            'carpet cleaning service near me',
        ],
    };
};
