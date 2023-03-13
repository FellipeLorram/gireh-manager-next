import { getCollection } from '@/hooks/getCollection';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '../buttons/button';
import { Checkbox } from './checkbox';
import { Input } from './input';

interface FormFields {
    name: string;
    phone: string;
    age: number;
    address: string;
    inLine: boolean;
}

export function NewCustomerForm() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const { add } = getCollection("customers");

    async function handleNewCustomerFormSubmit(data: FormFields) {
        await add(data);
        router.push("/customers");
    }

    return (
        <form onSubmit={handleSubmit(handleNewCustomerFormSubmit)} className='w-full max-w-[620px]  flex flex-col'>
            <Input className='mb-4' label='Nome' {...register("name", { required: 'O nome é obrigatório' })} error={errors.name?.message} />
            <Input type="phone" className='mb-4' label='Telefone' {...register("phone")} />
            <Input type="number" className='mb-4' label='Idade' {...register("age")} />
            <Input className='mb-4' label='Endereço' {...register("address")} />
            <Checkbox {...register("inLine")} label="Fila de Exame" />
            <Button title='Adicionar' />
        </form>
    )
}
