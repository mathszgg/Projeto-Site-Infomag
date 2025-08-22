import ServicesWidget from "@/components/ServicesWidget";
import { ServiceImagesAbsolutePath } from '@/components/Images'

const ServicesGrid = () => {
    return (
        <div className="w-11/12 max-w-xl lg:max-w-6xl m-auto flex justify-center">
            <div className="w-full grid grid-cols-1 gap-10 xl:gap-15 lg:grid-cols-2 items-stretch">
                <ServicesWidget imgUrl={ServiceImagesAbsolutePath[0]} title="Teste" services={['Conserto de celular', 'Conserto de computador']} />
                <ServicesWidget imgUrl={ServiceImagesAbsolutePath[1]} title="Teste" services={['Conserto de celular', 'Conserto de computador']} />
                <ServicesWidget imgUrl={ServiceImagesAbsolutePath[2]} title="Teste" services={['Conserto de celular', 'Conserto de computador']} />
                <ServicesWidget imgUrl={ServiceImagesAbsolutePath[0]} title="Teste" services={['Conserto de celular', 'Conserto de computador']} />
            </div>
        </div>
    )
}

export default ServicesGrid;
