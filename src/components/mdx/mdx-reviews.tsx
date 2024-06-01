import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface MdxReviewsProps extends HTMLAttributes<HTMLElement> {
    items: { name: string; review: string }[];
}

export default function MdxReviews({ items, ...props }: MdxReviewsProps) {
    return (
        <div className={cn(props.className)}>
            <h2>What Our Customers Say About {siteConfig.name}</h2>
            <div>
                {items.map((item, idx) => (
                    <div key={idx}>
                        <p>{item.name}</p>
                        <blockquote>{item.review}</blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
}
