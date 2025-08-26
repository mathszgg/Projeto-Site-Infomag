import Image from "next/image";
import { Button } from "./ui/Button";
import { Direction } from "@/types/Direction";
import { ScrollAnimation } from "./ScrollAnimation";

type Services = {
    image: string;
    title: string;
    text: string;
    buttonText: string;
    transitionDirection: Direction;
}

const servicesList: Services[] = [
    { image: '/img/page/services-provided/phone.png', title: 'Manutenção de Celulares', text: 'Reparo profissional em celulares!', buttonText: 'Realizar Orçamento', transitionDirection: "bottom" },
    { image: '/img/page/services-provided/computer.png', title: 'Manutenção de Computadores', text: 'Diversos reparos em computadores / notebooks!', buttonText: 'Realizar Orçamento', transitionDirection: "top" },
    { image: '/img/page/services-provided/cftv.png', title: 'Instalação de Câmeras CFTV', text: 'Instalação de Câmeras de Monitoramento CFTV!', buttonText: 'Saiba Mais', transitionDirection: "bottom" },
    { image: '/img/page/services-provided/pdv.png', title: 'Instalação de Sistemas', text: 'Temos diversos sistemas para seu negócio!', buttonText: 'Saiba Mais', transitionDirection: "top" }
]

const ServicesProvided = () => {
    return (
        <div className="opacity-98 relative z-20 w-11/12 container h-auto m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-stretch">
            {servicesList.map((item, index) => {
                return (
                    <ScrollAnimation 
                        key={index} 
                        direction={item.transitionDirection} 
                        className="bg-primary-color border border-gray-700 w-full py-6 px-4 rounded-lg flex flex-col items-center shadow-lg shadow-gray-500 hover:scale-105 hover:shadow-xl duration-800 "
                    >
                        <Image src={item.image} alt={"Imagem do item " + item.title} width={128} height={128} className="mb-5 w-32 h-32 object-contain flex justify-center items-center" />

                        <p className="text-secondary-color text-2xl md:text-3xl lg:text-2xl 2xl:text-4xl font-bold text-center grow">{item.text}</p>

                        <Button className="mt-10 w-11/12 cursor-pointer">{item.buttonText}</Button>
                    </ScrollAnimation>
                )
            })}
        </div>
    )
};

// <p className="text-gray-900 text-xl font-normal text-center grow mt-5">{item.text}</p>
// <h2 className="text-white text-2xl font-bold text-center min-h-14 flex items-center justify-center">{item.title}</h2>

export default ServicesProvided;