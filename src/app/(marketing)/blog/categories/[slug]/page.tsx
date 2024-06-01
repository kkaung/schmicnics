import { Shell } from 'lucide-react';
import React from 'react';
import { type Metadata } from 'next';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { PageHeaderHeading } from '@/components/page-header';
import { allPosts } from 'contentlayer/generated';
import {
    PaginationPrevious,
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
    PaginationNext,
} from '@/components/ui/pagination';

import { BlogTabs } from '../../_components/blog-tabs';
import PostCard from '../../_components/post-card';

interface PageProps {
    params: {
        slug: string;
    };
}

export function generateMetadata(): Metadata {
    return {
        // title: '',
        // description: '',
    };
}

export default function Page({ params }: PageProps) {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                ]}
                dottable={false}
            />
            <PageHeaderHeading>
                <PageHeaderHeading>Heading...</PageHeaderHeading>
            </PageHeaderHeading>
            <section className="mt-8 max-w-5xl w-full mx-auto">
                <BlogTabs />
                <div className="grid gap-6 grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3">
                    {allPosts.map((post, idx) => (
                        <PostCard key={idx} post={post} />
                    ))}
                </div>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </Shell>
    );
}
