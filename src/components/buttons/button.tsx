import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function Button({ title }: Props) {
    return (
        <button className='max-w-[120px] p-2 text-white border-2 bg-blue-600 border-none outline-none text-center rounded'>
            {title}
        </button>
    )
}
