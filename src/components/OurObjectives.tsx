import { Award, FastForward, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Badge, { BadgeProps } from "./ui/Badge";

const checks: string[] = [
    'Diagnóstico gratuito e transparente',
    'Serviço de alta qualidade',
    'Atendimento personalizado'
]

const badgesClassName: string = 'text-sm text-center'

const badges: BadgeProps[] = [
    {
        Icon: Wrench,
        text: "Serviço de Qualidade",
        animationDirection: "left",
        className: badgesClassName
    },
    {
        Icon: FastForward,
        text: "Prazo curto",
        animationDirection: "left",
        className: badgesClassName
    },
    {
        Icon: ShieldCheck,
        text: "Confiabilidade",
        animationDirection: "left",
        className: badgesClassName + ' col-span-2 md:col-span-1'
    }
];

const OurObjectives = () => {
    return (
        <section
            id="our-objectives"
            className="w-11/12 xl:w-9/12 flex flex-col gap-5 lg:flex-row lg:gap-10 m-auto mt-5"
            aria-labelledby="our-story-title" // Melhor para acessibilidade
        >
            <div className="flex-1 flex flex-col order-2 lg:order-1 gap-10 py-10 grow shrink-0">
                <div className="flex flex-row items-center justify-start gap-4">
                    <Award width={48} height={48} className="stroke-primary-color"/>
                    <h2 className="text-5xl font-bold">Nossos Objetivos</h2>
                </div>

                <p className="text-2xl leading-relaxed">
                    Nosso compromisso é entregar excelência em cada serviço, focando em qualidade e confiabilidade. Trabalhamos com prazos curtos para atender às suas necessidades com agilidade, e mantemos um atendimento profissional e transparente em todas as etapas do processo.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {badges.map((item, index) => (
                        <Badge Icon={item.Icon} text={item.text} className={item.className} animationDirection={item.animationDirection} key={index} />
                    ))}
                </div>
            </div>

            <div className="flex-1 order-1 lg:order-2 relative aspect-[4/2] grow shrink">
                <Image
                    src={'/img/page/carousel/slide-notebook.png'}
                    alt="Imagem de reparo em notebook"
                    fill
                    className="rounded-xl shadow-xl shadow-gray-500"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right' }}
                />
            </div>
        </section>
    );
};

export default OurObjectives;