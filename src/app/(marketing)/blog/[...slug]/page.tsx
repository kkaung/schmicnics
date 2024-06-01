import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-components';
import Image from 'next/image';
import Link from 'next/link';
import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import { absoluteUrl, cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { headingVariants } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { getPathname } from '@/lib/next';

import Dot from '@/components/dot';
import { siteConfig } from '@/configs/site';

interface PostPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: any) {
    const slug = params?.slug?.join('/');
    const post = allPosts.find(post => post.slugAsParams === slug);

    if (!post) null;

    return post;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    const pathname = getPathname();

    if (!post) return {};

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set('heading', post.title);
    ogUrl.searchParams.set('type', 'Blog Post');
    ogUrl.searchParams.set('mode', 'dark');

    return {
        title: post.title,
        description: post.description,
        authors: [
            {
                name: siteConfig.title,
                url: absoluteUrl('/'),
            },
        ],
        alternates: {
            canonical: pathname,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: absoluteUrl(post.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [ogUrl.toString()],
        },
    };
}

export async function generateStaticParams(): Promise<
    PostPageProps['params'][]
> {
    return allPosts.map(post => ({
        slug: post.slugAsParams.split('/'),
    }));
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params);

    if (!post) notFound();

    return (
        <section className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute left-[-200px] top-14 hidden xl:inline-flex'
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                <h1 className={headingVariants({})}>{post.title}</h1>
                <div className="mt-4">
                    {post.date && (
                        <time
                            dateTime={post.date}
                            className="block text-sm text-muted-foreground mb-2"
                        >
                            Updated on {formatDate(post.date)}
                        </time>
                    )}
                </div>
                <div className="mt-4 flex space-x-4">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex flex-col ">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">
                                    <Link
                                        href={'/'}
                                        className="ml-1 hover:underline"
                                    >
                                        {siteConfig.title}
                                    </Link>
                                </p>
                                <Dot />
                                <p className="text-muted-foreground font-medium text-sm">
                                    {post.readingTime} min read
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={405}
                    className="my-8 rounded-xl border bg-muted transition-colors"
                    priority
                />
            )}
            <Mdx code={post.body.code} />
            <section className="bg-secondary/50 p-6 rounded-lg space-y-4 my-8">
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{siteConfig.name}</h3>
                    <p className="text-sm">
                        <Link href="/">{siteConfig.title}</Link> is a top-rated
                        house cleaning company in Canberra. We offer tailored
                        cleaning services for your homes, apartments and
                        offices.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm">
                    <li>
                        <Link
                            href="/deep-cleaning-canberra"
                            title="Deep Cleaning Service In Canberra"
                        >
                            Deep Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/regular-cleaning-canberra"
                            title="Regular Cleaning Service In Canberra"
                        >
                            Regular Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/end-of-lease-cleaning-canberra"
                            title="End Of Lease Cleaning Service In Canberra"
                        >
                            End Of Lease Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/end-of-lease-cleaning-canberra"
                            title="End Of Lease Cleaning Service In Canberra"
                        >
                            Office Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/end-of-lease-cleaning-canberra"
                            title="End Of Lease Cleaning Service In Canberra"
                        >
                            Oven Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/carpet-cleaning-canberra"
                            title="Carpet Cleaning Service In Canberra"
                        >
                            Carpet Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/window-cleaning-canberra"
                            title="Window Cleaning Service In Canberra"
                        >
                            Window Cleaning
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/after-builder-cleaning-canberra"
                            title="After Builder Cleaning Service In Canberra"
                        >
                            After Builder Cleaning
                        </Link>
                    </li>
                </ul>
            </section>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                ]}
                dottable={false}
                className="mt-12"
            />
            <div className="flex justify-center py-6 lg:py-10">
                <Link
                    href="/blog"
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </section>
    );
}
