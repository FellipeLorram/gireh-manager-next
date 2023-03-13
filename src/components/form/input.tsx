import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ error, label, className, ...props }, ref) => {
    return (
        <div className={'w-full max-w-[640px] ' + className}>
            <label>
                <p className='text-white text-lg mb-1'>{label}</p>
                <input
                    className='focus w-full outline-none border border-zinc-400 bg-transparent rounded text-white p-2 '
                    {...props}
                    ref={ref}
                />
            </label>
            {error && (
                <p className='text-red-400 text-lg mt-1'>
                    {error}
                </p>
            )}
        </div>
    )
})

Input.displayName = "Input";

export { Input }
