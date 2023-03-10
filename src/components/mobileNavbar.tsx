import Link from "next/link"
import { useRouter } from "next/router";

import { CustomersIcon } from "@/assets/svgs/customers"
import { OrdersIcon } from "@/assets/svgs/orders";
import { AppointmentsIcon } from "@/assets/svgs/appointments";
import { SettingsIcon } from "@/assets/svgs/settings";

export function MobileNavBar() {
    const { pathname } = useRouter();
    const mobileButtons = [
        { href: "/customers", name: "Clientes", isActive: pathname === "/customers", Icon: CustomersIcon },
        { href: "/orders", name: "Vendas", isActive: pathname === "/orders", Icon: OrdersIcon },
        { href: "/appointments", name: "Exames", isActive: pathname === "/appointments", Icon: AppointmentsIcon },
    ]

    return <div className='md:hidden fixed p-2 flex flex-row items-center justify-around bottom-0 left-0 w-full bg-black h-16 z-10'>
        {mobileButtons.map(({ href, isActive, name, Icon }, i) => {
            const textClassName = isActive ? 'text-white' : 'text-zinc-400'
            return (
                <Link className='flex flex-col items-center' key={i} href={href}>
                    <Icon isActive={isActive} />
                    <p className={'text-sm ' + textClassName}>{name}</p>
                </Link>
            )
        })}
        <div className='flex flex-col items-center'>
            <SettingsIcon isActive={false} />
            <p className="text-sm text-zinc-400">Mais</p>
        </div>
    </div>
}