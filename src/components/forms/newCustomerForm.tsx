import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { Input } from '../input';

interface FormFields {
    name: string;
    phone: string;
    age: number;
    address: string;
    inLine: boolean;
}

export function NewCustomerForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();

    function handleNewCustomerFormSubmit(data: FormFields) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleNewCustomerFormSubmit)} className='w-full max-w-[620px]  flex flex-col'>
            <Input className='mb-4' label='Nome' {...register("name")} />
            <Input className='mb-4' label='Telefone' {...register("phone")} />
            <Input className='mb-4' label='Idade' {...register("age")} />
            <Input className='mb-4' label='Endereço' {...register("address")} />
            <Checkbox {...register("inLine")} label="Fila de Exame" />
            <Button title='Adicionar' />
        </form>
    )
}
