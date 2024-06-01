import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Spring Cleaning ${location} - #1 Deep Cleaning Service in ${location}`,
        description: `Best Deep Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning Service ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'deep cleaning',
            'deep clean',
            'deep cleaning service',
            'deep cleaning canberra',
            'spring cleaning',
            'spring cleaning service',
            'spring cleaning service canberra',
            'spring cleaning canberra',
            'spring cleaner canberra',
            'spring cleaning near me',
        ],
    };
};
