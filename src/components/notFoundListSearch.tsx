import { ListSearchIcon } from '@/assets/svgs/listSearch'
import React from 'react'

export function NotFoundListSearch() {
  return (
    <div className='w-full pt-4 gap-4 flex-col flex items-center justify-center'>
        <ListSearchIcon  />
        <p className='text-zinc-400 text-xl'>Não encontrado</p>
    </div>
  )
}
