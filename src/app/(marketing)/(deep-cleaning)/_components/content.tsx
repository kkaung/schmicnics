import React from 'react';
import { Shell } from '@/components/shell';

import Hero from './hero';
import FAQs from './faqs';
import Features from './features';

import HowWork from './how-work';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <Shell>
            <Hero location={city} />
            <HowWork />
            <Features location={city} />
            <FAQs />
        </Shell>
    );
}
