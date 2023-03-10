import React from 'react'

interface Props {
    searchFunction(value: string): void;
}

export function SearchBar({ searchFunction }: Props) {
    return (
        <div className='w-full bg-stone-800 px-8'>
            <input className='p-4 bg-transparent outline-none border-none text-white w-full' placeholder='Buscar...'
                onChange={e => searchFunction(e.target.value)}
            />
        </div>
    )
}
