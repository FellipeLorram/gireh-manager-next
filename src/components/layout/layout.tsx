import React from 'react'
import { Navbar } from '../navigation/navbar'

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='w-screen h-screen bg-[#202020] flex flex-row overflow-hidden static'>
            <Navbar />
            <div className='w-full overflow-auto scrollbar-hide'>{children}</div>
        </main>
    )
}
