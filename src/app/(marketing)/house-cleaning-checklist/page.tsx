import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'House Cleaning Checklist In Canberra',
    description: `A complete house cleaning checklist from Top Cleaner Canberra to keep your home spotless.`,
    alternates: {
        canonical: '/house-cleaning-checklist',
    },
    robots: {
        index: false,
    },
};

export default function Page() {
    return (
        <>
            <Shell as="article">
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        {
                            title: 'Checklist',
                            href: '/house-cleaning-checklist',
                        },
                    ]}
                    dottable={false}
                />
                <PageHeader className="text-center">
                    <PageHeaderHeading>
                        Our Cleaning Checklist
                    </PageHeaderHeading>
                </PageHeader>
            </Shell>
        </>
    );
}
