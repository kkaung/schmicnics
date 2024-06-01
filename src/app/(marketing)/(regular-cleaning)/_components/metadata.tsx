import { siteConfig } from '@/configs/site';
import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Regular Cleaning Service in ${location} - ${siteConfig.title}`,
        description: `Best Regular Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'regular cleaning',
            'regular cleaning canberra',
            'regular cleaning service',
            'regular cleaning service canberra',
            'recurring cleaning',
            'recurring cleaning canberra',
            'cleaner near me',
        ],
    };
};
