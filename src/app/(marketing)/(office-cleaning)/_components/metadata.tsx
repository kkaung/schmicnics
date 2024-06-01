import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Office Cleaner ${location} - #1 Office Cleaning Service in ${location}`,
        description: `Best Office Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'commercial cleaning company',
            'commercial cleaning company canberra',
            'commercial cleaner',
            'commercial cleaner canberra',
            'commercial cleaning service',
            'commercial cleaning service canberra',
            'office cleaning service',
            'office cleaning service canberra',
            'office cleaner',
            'office cleaner canberra',
            'office cleaner near me',
        ],
    };
};
