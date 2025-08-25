// Razões para nos escolher

import { CircleDollarSign, Wrench, FastForward, ShieldCheck, CheckCheck, UserStar, LucideIcon } from 'lucide-react';

// LucideIcon é um type
type ReasonsData = {
    title: string;
    img: LucideIcon;
};

const reasons: ReasonsData[] = [
    { title: 'Preço Justo', img: CircleDollarSign },
    { title: 'Serviço de Qualidade', img: Wrench },
    { title: 'Prazo Rápido', img: FastForward },
    { title: 'Garantia Confiável', img: ShieldCheck },
    { title: 'Atendimento Profissional', img: CheckCheck },
    { title: 'Variedade de Serviços', img: UserStar }
]

const ChooseUs = () => {
    return (
        <div className='bg-primary-color flex flex-col items-center justify-center w-full'>
            <h2 className='text-center text-5xl text-white font-bold mt-8'>Razões para nos escolher</h2>

            <div className='inline-grid w-6xl grid-cols-2 sm:grid-cols-3 gap-6 mx-4 my-10'>
            {reasons.map((item, index) => {
                return (
                    <div key={index} className='transition-all hover:scale-105 hover:bg-amber-100 bg-secondary-color w-full h-45 rounded-xl flex flex-col items-center justify-center gap-10'>
                        <item.img className='w-12 h-12 fill-yellow-500' />
                        <h3 className='text-center text-xl sm:text-2xl font-bold'>{item.title}</h3>
                    </div>
                )
            })}
            </div>
        </div>
    )
};

export default ChooseUs;