import { Star } from "lucide-react";
import Image from "next/image";
import StarsRating from "./StarsRating";

type Reviews = {
    text: string;
    imgUser: string;
    nameUser: string;
}

const reviews: Reviews[] = [
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis temporibus eos. Minima molestiae modi impedit error repellendus. Sint vel quidem consectetur dicta quia sequi harum explicabo id ipsa molestiae.',
        imgUser: '/img/logo.png',
        nameUser: 'José da Silva'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis temporibus eos. Minima molestiae modi impedit error repellendus. Sint vel quidem consectetur dicta quia sequi harum explicabo id ipsa molestiae.',
        imgUser: '/img/logo.png',
        nameUser: 'José da Silva'
    },
    {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis temporibus eos. Minima molestiae modi impedit error repellendus. Sint vel quidem consectetur dicta quia sequi harum explicabo id ipsa molestiae.',
        imgUser: '/img/logo.png',
        nameUser: 'José da Silva'
    }
]

/* TENHO QUE COLOCAR GRADIENTE NO FUNDO DAS AVALIACOES */

const CustomerReviews = () => {
    return (
        <div className="bg-secondary-color text-white flex flex-col items-center gap-10">
            <div className="mt-0 flex flex-col justify-center items-center gap-4">
                <h2 className="text-gray-900 text-5xl font-bold">Avaliações dos Clientes</h2>
                <StarsRating count={5} w={40} h={40} />
            </div>
            <div className="flex flex-row justify-center gap-10">
                {reviews.map((item, index) => (
                    <div key={index} className="transition-all bg-primary-color flex flex-col w-sm rounded-lg p-5 hover:scale-105 hover:bg-green-700 shadow-lg shadow-gray-400">
                        <div className="flex-grow text-xl">
                            <p>{item.text}</p>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-5 mt-3">
                            <Image
                                src={item.imgUser}
                                alt={`Imagem do usuário ${item.nameUser}`}
                                width={48}
                                height={48}
                            />
                            <h3>{item.nameUser}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerReviews;