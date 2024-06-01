import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Post Construction Cleaning ${location} - #1 After Builder Cleaning Service in ${location} `,
        description: `Best Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'builder clean',
            'after builder cleaning',
            'after builder cleaning canberra',
            'builder cleaning service',
            'builder cleaning service',
            'post construction cleaning service',
            'post construction cleaning service canberra',
            'construction cleaning company',
            'construction cleaning company canberra',
        ],
    };
};
