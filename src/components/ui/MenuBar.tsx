"use client";

import { Home, Info, Phone } from 'lucide-react'; // Biblioteca de ícone
import Link from "next/link"
import { useState, useRef, useEffect } from "react";

export const NavegationPages: any[] =
    [
        { href: "/", label: "Início", imageIcon: <Home className='w-8 h-8 stroke-gray-800'/> },
        { href: "/sobre", label: "Sobre", imageIcon: <Info className='w-8 h-8 stroke-gray-800'/> },
        { href: "/suporte", label: "Suporte", imageIcon: <Phone className='w-8 h-8 stroke-gray-800'/> }
    ]

const MenuBar = () => {
    const [showMenuList, setShowMenuList] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);
    // Criar uma referência também para o botão
    const buttonRef = useRef<HTMLButtonElement>(null);

    const ButtonClickHandler = () => {
        setShowMenuList(!showMenuList)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Só feche o menu se o clique for fora do menu E também fora do botão.
            if (
                menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                setShowMenuList(false);
            }
        };

        if (showMenuList) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenuList]);

    return (
        <nav>
            <ul className="hidden md:flex flex-row items-center gap-8 text-2xl font-bold">
                {NavegationPages.map((item) => (
                    <li key={item.href} className="border-b-4 border-transparent transition-colors hover:border-b-green-800">
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col items-end">
                <button
                    ref={buttonRef}
                    onClick={ButtonClickHandler}
                    className="md:hidden rotate-90 cursor-pointer text-2xl font-bold"
                >
                    III
                </button>

                <div ref={menuRef} className={`
                    absolute translate-y-8 bg-gray-600 border border-gray-600 flex items-center 
                    w-40 h-42 rounded-md shadow-md shadow-gray-800 text-white
                    transition-all duration-300 ease-in-out origin-top-right 
                    ${showMenuList
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }
                `}>
                    <ul className="w-full flex flex-col gap-3">
                        {NavegationPages.map((item) => (
                            <li key={item.href} className="text-2xl border-b pt-2 border-gray-600 flex flex-row gap-3 justify-start ml-2 items-start">
                                {item.imageIcon}
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MenuBar;