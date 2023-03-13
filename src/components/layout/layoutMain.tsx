import React from 'react'
import { TopBar } from './topBar'

export function LayoutMain({ children }: { children: React.ReactNode }) {
    return (
        <main className='w-screen h-screen flex flex-col overflow-hidden items-center '>
            <div className='max-w-[1280px] w-11/12 overflow-auto scrollbar-hide '>
                <TopBar title='Novo Cliente' />
                <div className='flex justify-center w-full'>
                    {children}
                </div>
            </div>
        </main>
    )
}
