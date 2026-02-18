"use client";

import Link from "next/link";
import Logo from "./ui/Logo";
import SocialNeworkBar from "./SocialNetworkBar";
import { NavegationPages } from "./ui/MenuBar";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-8">
            <div className="container mx-auto px-6 py-12">
                {/* Container principal com 3 colunas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Coluna 1: Logo e Descrição */}
                    <div className="flex flex-col items-center md:items-start ">
                        <div className="bg-white p-1 rounded-xl">
                            <Logo useLazy/>
                        </div>

                        <p className="mt-4 text-center md:text-left text-gray-100">
                            Sua empresa de assistência técnica especializada em Piraí, RJ. Qualidade e confiança que você pode contar.
                        </p>

                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div className="border-l border-gray-600 px-4">
                        <h3 className="text-xl font-bold">Links Rápidos</h3>
                        <nav className="mt-4">
                            <ul className="space-y-2">
                                {NavegationPages.map((a) => 
                                    <li key={a.href} className="list-disc list-inside"><Link href={a.href} className="hover:underline">{a.label}</Link></li>
                                )}
                            </ul>
                        </nav>
                    </div>

                    {/* Coluna 3: Contato e Redes Sociais */}
                    <div className="border-l border-gray-600 px-4">
                        <h3 className="text-xl font-bold">Contato</h3>
                        <address className="mt-4 not-italic text-gray-100 space-y-2">
                            <p>Rua Barão do Piraí, 412, Centro</p>
                            <p>Piraí, RJ - 27175-000</p>
                            <p>Telefone: (24) 99966-7657</p>
                        </address>
                        <div className="flex mt-4 space-x-4">
                            <SocialNeworkBar />
                        </div>
                    </div>
                </div>

                {/* Linha de Copyright */}
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Infomag. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
