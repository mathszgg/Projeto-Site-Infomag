import { CheckCircle, History } from "lucide-react";
import Image from "next/image";

const checks: string[] = [
    'Diagnóstico gratuito e transparente',
    'Serviço de alta qualidade',
    'Atendimento personalizado'
]

const OurStory = () => {
    return (
        <section
            id="our-story"
            className="w-11/12 xl:w-9/12 flex flex-col gap-5 lg:flex-row lg:gap-10 m-auto mt-5"
            aria-labelledby="our-story-title" // Melhor para acessibilidade
        >
            <div className="flex-1 relative aspect-[4/2] grow shrink">
                <Image 
                    src={'/img/page/carousel/slide-notebook.png'}
                    alt="Imagem de reparo em notebook"
                    fill
                    className="rounded-xl shadow-xl shadow-gray-500"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right' }}
                />
            </div>

            <div className="flex-1 flex flex-col gap-10 py-10 grow shrink-0">
                <div className="flex flex-row items-center justify-start gap-4">
                    <History width={48} height={48} className="stroke-primary-color" />
                    <h2 className="text-5xl font-bold">Nossa História</h2>
                </div>

                <p className="text-2xl leading-relaxed">Fundada em 2017, a InfoMag nasceu da paixão por tecnologia e do desejo de
                    oferecer um atendimento diferenciado no setor de assistência técnica. Começamos
                    como uma pequena oficina e hoje somos referência na região.</p>

                <div className="flex flex-col gap-2">
                    {checks.map((item, index) => (
                        <div key={index} className="flex flex-row gap-3">
                            <CheckCircle className="stroke-primary-color" />
                            <span className="text-xl">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurStory;