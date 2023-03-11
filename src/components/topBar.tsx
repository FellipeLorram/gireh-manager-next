import { ArrowBackIcon } from '@/assets/svgs/arrowBack'
import Link from 'next/link'
import React from 'react'

export function TopBar({title}: {title: string}) {
  return (
    <div className='w-full p-4 pt-4 pb-8 flex flex-row'>
      <Link className='h-[36px] w-[36px]' href="/customers">
        <ArrowBackIcon className='h-[36px] w-[36px]' />
      </Link>
      <p className='ml-auto mr-auto text-xl text-zinc-200'>{title}</p>
    </div>
  )
}
