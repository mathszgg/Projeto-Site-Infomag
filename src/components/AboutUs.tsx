import { Award, LucideIcon, Users } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

// ===== 1. Dados dos Badges Abstraídos =====
const badgesData = [
    {
        id: 1,
        Icon: Award,
        text: "8+ Anos de Experiência",
        animationDirection: "left" as const, // TypeScript entende que é 'left' e não apenas 'string'
    },
    {
        id: 2,
        Icon: Users,
        text: "10.000+ Clientes Satisfeitos",
        animationDirection: "right" as const,
    },
];

// ===== 2. Props do Badge =====
type BadgeProps = {
    className?: string;
    Icon: LucideIcon;
    text: string;
    animationDirection: 'left' | 'right';
}

const Badge = ({ className, Icon, text, animationDirection }: BadgeProps) => {
    return (
        <ScrollAnimation
            className={`
                flex flex-1 flex-row gap-3 bg-gray-100 p-3 shadow-lg justify-center items-center rounded-lg
                transition-transform duration-300 ease-in-out hover:bg-gray-200 hover:scale-110
                ${className}
            `}
            direction={animationDirection}
        >
            <Icon width={24} height={24} className="fill-gray-200 stroke-primary-color" />
            <p className="cursor-default text-xs md:text-lg">{text}</p>
        </ScrollAnimation>
    )
}

const AboutUs = () => {
    return (
        <section
            id="about-us"
            className="bg-[#95e0ad] bg-store-interior bg-store-interior-darken bg-no-repeat bg-cover bg-center py-12 md:py-16 lg:py-20 xl:py-24"
            aria-labelledby="about-us-title" // Melhor para acessibilidade
        >
            <div className="container w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-5 flex flex-col justify-center items-center gap-9">
                <h1 id="about-us-title" className="text-white text-4xl md:text-5xl lg:text-6xl text-center font-bold text-shadow-lg text-shadow-black">
                    Sobre a <span className="text-primary-color font-black">InfoMag</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-center text-white text-shadow-md text-shadow-black max-w-4xl">
                    Há mais de 8 anos, somos sua referência em assistência técnica para computadores, notebooks e celulares. Nossa missão é oferecer soluções rápidas, confiáveis e com o <span className="text-primary-color font-bold">melhor custo-benefício</span> do mercado.
                </p>

                {/* ===== 1. Renderizando os Badges a partir do Array de Dados ===== */}
                <div className="w-full max-w-2xl mx-auto flex flex-row justify-center items-center gap-7 mt-4">
                    {badgesData.map((badge) => (
                        <Badge
                            key={badge.id}
                            Icon={badge.Icon}
                            text={badge.text}
                            animationDirection={badge.animationDirection}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUs;