import { Star } from "lucide-react";
import Image from "next/image";
import StarsRating from "./StarsRating";
import { ScrollAnimation } from "./ScrollAnimation";

type Reviews = {
    text: string;
    imgUser: string;
    nameUser: string;
}

const reviews: Reviews[] = [
    {
        text: 'Excelente atendimento, ambiente tranquilo, sempre que preciso já corro pra InfoMag pois sei que irão me ajudar da melhor forma!!!',
        imgUser: '/img/logo.png',
        nameUser: 'Rebeca Vieira'
    },
    {
        text: 'Muito bom o atendimento e o serviço de ótima qualidade!',
        imgUser: '/img/logo.png',
        nameUser: 'Marcus Winicius'
    },
    {
        text: 'Suporte de TI com rapidez e eficiência!',
        imgUser: '/img/logo.png',
        nameUser: 'Fabiane Pereira'
    }
]

/* TENHO QUE COLOCAR GRADIENTE NO FUNDO DAS AVALIACOES */

const CustomerReviews = () => {
    return (
        <div className="text-white flex flex-col items-center gap-7">
            <div className="mt-0 flex flex-col justify-center items-center gap-4">
                <ScrollAnimation direction="left"><h2 className="text-gray-900 text-5xl text-center font-bold">Avaliações dos Clientes</h2></ScrollAnimation>
                <ScrollAnimation direction="right"><StarsRating count={5} w={40} h={40} /></ScrollAnimation>
            </div>
            <ScrollAnimation className="w-11/12 max-w-7xl grid grid-cols-1 md:grid-cols-3 justify-center items-strech gap-5 lg:gap-10 mx-4 " direction="bottom">
                {reviews.map((item, index) => (
                    <div key={index} className="w-full transition-all bg-gradient-to-b from-primary-color to-[#006e23] shadow-lg flex flex-col gap-3 p-5 rounded-lg hover:scale-105 hover:bg-green-700 hover:shadow-xl shadow-gray-400">
                        <div className="flex-grow text-xl">
                            <p className="cursor-default">{item.text}</p>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-5">
                            <h3 className="font-bold">{item.nameUser}</h3>
                        </div>
                    </div>
                ))}
            </ScrollAnimation>
        </div>
    )
}

export default CustomerReviews;