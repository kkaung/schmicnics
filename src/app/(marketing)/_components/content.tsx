import { Shell } from '@/components/shell';
import React from 'react';

import Hero from './hero';
import HowWork from './how-work';
import Features from './features';
import FAQs from './faqs';

interface ContentProps {
    location: string;
}

export default function Content({ location }: ContentProps) {
    return (
        <Shell>
            <Hero />
            <HowWork />
            <Features location={location} />
            <FAQs />
        </Shell>
    );
}
