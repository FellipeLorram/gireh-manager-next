import { useFormatedDate } from '@/hooks/useFormatedDate';
import React from 'react'

interface Props {
    id?: string;
    name: string;
    serviceOrder: number;
    orderTotal: number;
    orderPaymentSituation: boolean;
    orderDeliverSituation: boolean;
    createdAt: number;
}

export function OrderCard({
    id,
    name,
    orderPaymentSituation,
    orderDeliverSituation,
    serviceOrder,
    orderTotal,
    createdAt,
}: Props) {
    const date = useFormatedDate(createdAt);
    return (
        <div className='cursor-pointer flex flex-col bg-[#b4b4b4] w-84 w-full shadow-md shadow-[#777] divide-y divide-[#686868]'>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>O.S.:</p>
                <p>{serviceOrder}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Data:</p>
                <p>{date}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Nome:</p>
                <p>{name}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Total:</p>
                <p>{orderTotal}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Pago:</p>
                <p>{orderPaymentSituation ? "Pago" : "Não Pago"}</p>
            </div>
            <div className='w-full p-1.5 flex justify-between flex-row'>
                <p className='font-semibold'>Entregue:</p>
                <p>{orderDeliverSituation ? "Entregue" : "Não entregue"}</p>
            </div>
        </div>
    )
}
