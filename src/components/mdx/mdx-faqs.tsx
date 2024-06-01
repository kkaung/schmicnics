import React, { type HTMLAttributes } from 'react';

interface MdxFAQsProps extends HTMLAttributes<HTMLElement> {
    items: { question: string; answer: string }[];
}

export default function MdxFAQs({ items }: MdxFAQsProps) {
    return (
        <div>
            {items.map((i, idx) => (
                <div key={idx}>
                    <p>{i.question}</p>
                    <p>{i.answer}</p>
                </div>
            ))}
        </div>
    );
}
