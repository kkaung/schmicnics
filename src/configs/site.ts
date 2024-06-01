import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://www.pinterest.com.au/',
    linkin: 'https://www.linkedin.com/company/',
    youtube: 'https://www.youtube.com/channel/',
    googlemap: '',
};

export const siteConfig = {
    logo: 'Schmicnics Cleaning',
    name: 'Schmicnics Cleaning',
    title: `Schmicnics Cleaning`,
    description: `Our top-rated cleaning services come with a 200% satisfaction guarantee. We deliver sparkling results you'll love with our professional cleaners. Book online in 60 seconds!`,
    url: 'https://schmicnics.com.au',
    domain: 'schmicnics.com.au',
    ogImage: 'https://schmicnics.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-canberra',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-canberra',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-canberra',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-canberra',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/house-cleaning-pricing-canberra',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning Canberra',
                    href: '/deep-cleaning-canberra',
                },
                {
                    title: 'Regular Cleaning Canberra',
                    href: '/regular-cleaning-canberra',
                },
                {
                    title: 'End Of Lease Cleaning Canberra',
                    href: '/end-of-lease-cleaning-canberra',
                },
                {
                    title: 'Office Cleaning Canberra',
                    href: '/office-cleaning-canberra',
                },
                {
                    title: 'Oven Cleaning Canberra',
                    href: '/oven-cleaning-canberra',
                },
                {
                    title: 'Carpet Cleaning Canberra',
                    href: '/carpet-cleaning-canberra',
                },
                {
                    title: 'Window Cleaning Canberra',
                    href: '/window-cleaning-canberra',
                },
                {
                    title: 'After Builder Cleaning Canberra',
                    href: '/after-builder-cleaning-canberra',
                },
                {
                    title: 'House Cleaning Service Canberra',
                    href: '/',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                {
                    title: 'Pricing',
                    href: '/house-cleaning-pricing-canberra',
                },
                {
                    title: 'Products',
                    href: '/products',
                },
                { title: 'Checklist', href: '/house-cleaning-checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [{ title: 'About Us', href: '/about' }],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@schmicnics.com.au',
        phone: '+61 414076980',
        address: '74 Northbourne Ave, Braddon ACT 2612',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 1027,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
