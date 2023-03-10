import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { MobileNavBar } from './mobileNavbar';

const LINK_STYLE = ' text-lg pb-0.5 border-solid border-transparent border-b-2 hover:border-white hover:text-white ease-in-out duration-300'
const LINK_STYLE_ACTIVE = LINK_STYLE + " text-white border-white"

export function Navbar() {
    const { pathname } = useRouter();
    const Links = [
        { href: "/customers", name: "Clientes", isActive: pathname === "/customers" },
        { href: "/new-customer", name: "Novo Cliente", isActive: pathname === "/new-customer" },
        { href: "/orders", name: "Vendas", isActive: pathname === "/orders" },
        { href: "/new-order", name: "Nova venda", isActive: pathname === "/new-order" },
        { href: "/appointments", name: "Exames", isActive: pathname === "/appointments" },
        { href: "/new-appointment", name: "Novo Exame", isActive: pathname === "/new-appointment" },
    ]

    return (
        <>
            <nav className='hidden md:flex w-72 bg-black h-full pt-4 flex-col items-center gap-8 shadow-lg shadow-black'>
                <h1 className='text-white text-3xl'>
                    Ótica Girêh
                </h1>
                <div className='pt-4 flex flex-col items-center gap-4'>
                    {Links.map(({ href, name, isActive }) => <Link key={href} className={isActive ?
                        LINK_STYLE_ACTIVE : 'text-zinc-400' + LINK_STYLE} href={href}>{name}</Link>)}
                </div>
            </nav>
            <MobileNavBar />
        </>
    )
}
