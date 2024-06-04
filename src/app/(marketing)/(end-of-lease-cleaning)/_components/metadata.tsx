import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Bond Cleaning ${location}: #1 End Of Lease Cleaning Service in ${location}, ACT`,
        description: `Best Vacate Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
        keywords: [
            'vacate cleaning service',
            'vacate cleanng service canberra',
            'vacate cleaner canberra',
            'bond cleaning service',
            'bond cleaning service canberra',
            'bond cleaner',
            'bond cleaner canberra',
            'bond cleaner near me',
            'end of lease cleaning service',
            'end of lease cleaning service canberra',
            'end of lease cleaner',
            'end of lease cleaner canberra',
            'move out cleaning service',
            'move out cleaning service canberra',
            'move out cleaner canberra',
            'bond cleaning company',
            'bond cleaning company canberra',
        ],
    };
};
