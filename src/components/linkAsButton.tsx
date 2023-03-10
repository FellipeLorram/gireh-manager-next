import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    href: string;
    title: string;
}

export function LinkAsButton({ href, title }: Props) {
    return (
        <Link href={href}>
            <button className='max-w-32 w-9/10 p-2 text-white border-2 bg-blue-600 border-none outline-none text-center rounded'>
                {title}
            </button>
        </Link>
    )
}
