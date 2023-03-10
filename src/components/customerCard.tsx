import React from 'react'

interface Props {
    id: string;
    name: string;
    age?: number;
    inLine: boolean;
}

export function CustomerCard({ id, inLine, name, age }: Props) {
    return (
        <div className='cursor-pointer flex flex-col bg-[#b4b4b4] w-84 w-full shadow-md shadow-[#777] divide-y divide-[#686868]'>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Nome:</p>
                <p>{name}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Idade:</p>
                <p>{age ? age : "Não informado"}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Em fila:</p>
                <p>{inLine ? "Na fila" : "Fora da fila"}</p>
            </div>
        </div>
    )
}
