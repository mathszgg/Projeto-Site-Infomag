import Image from "next/image";
import { Button } from "./ui/Button";
import { Direction } from "@/types/Direction";
import { ScrollAnimation } from "./ScrollAnimation";
import Link from "next/link";

type Services = {
    href: string;
    label: string;
    image: string;
    title: string;
    text: string;
    buttonText: string;
    transitionDirection: Direction;
}

const waMeUrl:string = 'https://wa.me/5524999667657?text=';

const servicesList: Services[] = [
    { href: waMeUrl+'Olá! Gostaria de realizar um orçamento de reparo do meu celular.', label: 'Clique para realizar um orçamento de reparo do seu celular', image: '/img/page/services-provided/phone.png', title: 'Manutenção de Celulares', text: 'Reparo profissional em celulares!', buttonText: 'Saiba Mais', transitionDirection: "bottom" },
    { href: waMeUrl+'Olá! Gostaria de realizar um orçamento de reparo do meu computador.', label: 'Clique para realizar um orçamento do seu computador', image: '/img/page/services-provided/computer.png', title: 'Manutenção de Computadores', text: 'Diversos reparos em computadores / notebooks!', buttonText: 'Saiba Mais', transitionDirection: "top" },
    { href: waMeUrl+'Olá! Gostaria de realizar um orçamento de instalação de câmeras de segurança.', label: 'Clique para realizar um orçamento de instalação de câmeras CFTV', image: '/img/page/services-provided/cftv.png', title: 'Instalação de Câmeras CFTV', text: 'Instalação de Câmeras de Monitoramento CFTV!', buttonText: 'Saiba Mais', transitionDirection: "bottom" },
    { href: waMeUrl+'Olá! Gostaria de saber mais sobre os sistemas para meu negócio.', label: 'Clique para saber mais sobre sistemas para seu negócio', image: '/img/page/services-provided/pdv.png', title: 'Instalação de Sistemas', text: 'Temos diversos sistemas para seu negócio!', buttonText: 'Saiba Mais', transitionDirection: "top" }
]

const ServicesProvided = () => {

    return (
        <div className="z-20 relative w-11/12 container h-auto m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
            {servicesList.map((item, index) => {
                return (
                    <div 
                        key={index} 
                        className="bg-gradient-to-t from-primary-color to-[#003f14] border border-gray-700 w-full py-6 px-4 rounded-lg flex flex-col items-center shadow-lg shadow-gray-500 hover:scale-105 hover:shadow-xl duration-400"
                    >
                        <Image src={item.image} alt={"Imagem do item " + item.title} width={128} height={128} className="mb-5 w-32 h-32 object-contain flex justify-center items-center" />

                        <p className="cursor-default text-secondary-color text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl font-bold text-center grow">{item.text}</p>

                        <Button href={item.href} aria-label={item.label} className="mt-10 w-11/12 cursor-pointer">{item.buttonText}</Button>
                    </div>
                )
            })}
        </div>
    )
};

// <p className="text-gray-900 text-xl font-normal text-center grow mt-5">{item.text}</p>
// <h2 className="text-white text-2xl font-bold text-center min-h-14 flex items-center justify-center">{item.title}</h2>

export default ServicesProvided;