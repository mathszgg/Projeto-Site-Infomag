import ServicesWidget from "@/components/ServicesWidget";
import { ServiceImagesAbsolutePath } from '@/components/Images'

type ServiceWidgetProps = {
    imgUrl: string;
    title: string;
    services: string[];
};

const servicesData: any[] = [
    {
        id: 0,
        services: [
            "Formatação e Reinstalação do Sistema Operacional",
            "Remoção de Vírus e Malwares",
            "Limpeza Física e Troca de Pasta Térmica",
            "Upgrade (Aumento de Memória RAM ou troca por SSD)",
            "Recuperação de Dados e Backup",
            "Conserto de Notebooks (Tela, Teclado, Bateria)",
            "Diagnóstico e Reparo de Defeitos de Hardware"
        ]
    },
    {
        id: 1,
        services: [
            "Troca de Tela",
            "Troca de Bateria",
            "Reparo de Conector de Carga",
            "Desoxidação (limpeza de aparelho que molhou)",
            "Troca de Câmeras (Frontal e Traseira)",
            "Atualização e Reparo de Software",
            "Troca de Tampas Traseiras e Carcaças",
            "Reparo de Alto-falantes e Microfones"
        ]
    },
    {
        id: 2,
        services: [
            // Para Celular
            "Películas de Proteção (3D, Privacidade)",
            "Capas de Celular (Anti-impacto, Silicone, Carteira)",
            "Carregadores (USB-C, Lightning, Micro-USB)",
            "Fones de Ouvido (Com fio e Bluetooth)",

            // Para Informática
            "Mouse (Com fio e Sem fio)",
            "Teclado (Com fio e Sem fio)",
            "Pen Drives e Cartões de Memória",
            "Cabos Diversos",
            "Caixas de Som para PC",
            "Webcams"
        ]
    },
    {
        id: 3,
        services: [
            "Comercial (MEI e ME)",
            "Controle Financeiro",
            "Geração de Orçamentos",
        ]
    },
    {
        id: 4,
        services: [
            "Instalação de Câmeras",
            "Aluguel de Câmeras"
        ]
    },
    {
        id: 5,
        services: [
            "Resolução de Problemas",
            "Suporte"
        ]
    }
]

const widgetData: any[] = [
    { id: 0, imgUrl: ServiceImagesAbsolutePath[0], title: 'Manutenção de Computador' },
    { id: 1, imgUrl: ServiceImagesAbsolutePath[1], title: 'Manutenção de Celular' },
    { id: 2, imgUrl: ServiceImagesAbsolutePath[1], title: 'Venda de Acessórios' },
    { id: 3, imgUrl: ServiceImagesAbsolutePath[1], title: 'Sistemas' },
    { id: 4, imgUrl: ServiceImagesAbsolutePath[3], title: 'Câmeras CFTV' },
    { id: 5, imgUrl: ServiceImagesAbsolutePath[1], title: 'Visita Técnica' }
]

const fullWidgetData: ServiceWidgetProps[] = widgetData.map((widget, index) => {

    const id: number = widget.id;
    // Encontre o serviço correspondente
    const correspondingService = servicesData.filter((item) => item.id == id)

    return {
        imgUrl: widget.imgUrl,
        title: widget.title,
        services: correspondingService[0] && correspondingService[0].services !== undefined ? correspondingService[0].services : []
    }
})

const ServicesGrid = () => {
    return (
        <div className="w-11/12 max-w-xl lg:max-w-6xl m-auto flex justify-center">
            <div className="w-full grid grid-cols-1 gap-10 xl:gap-15 lg:grid-cols-2 items-stretch">
                {
                    fullWidgetData.map((item, index) => (
                        <ServicesWidget
                            key={index}
                            imgUrl={item.imgUrl}
                            title={item.title}
                            services={item.services}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesGrid;
