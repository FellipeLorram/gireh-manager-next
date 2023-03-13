import React from 'react'

export function CardGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full grid grid-cols-1 gap-4 p-4 pb-20 md:p-8 md:grid-cols-4'>{children}</div>
    )
}
