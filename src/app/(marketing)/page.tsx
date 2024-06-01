import { type Metadata } from 'next';
import React from 'react';
import { checkUserAgentForGooglebot } from '@/lib/next';

import Content from './_components/content';
import CloakedContent from './_components/cloaked-content';

export const metadata: Metadata = {
    title: `Schmicnics - #1 House Cleaning Service in Canberra`,
    description:
        'Best House Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking',
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <CloakedContent />;

    return <Content location="Canberra" />;
}
