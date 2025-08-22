"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
    images: string[];
    showProgressBar?: boolean;
}

const Carousel = ({ images, showProgressBar = false }: Props) => {
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleSlideChange = () => {
        const progressBar: HTMLDivElement | null = progressBarRef.current
        if (progressBar) {
            // Remove classe para parar animação antiga
            progressBar.classList.remove('animate-progress-bar');

            // Truque para forçar o navegador a processar a remoção
            void progressBar.offsetWidth;

            // Adiciona a classe de volta para reiniciar a animação
            progressBar.classList.add('animate-progress-bar')
        }
    }

    return (
        <div className='w-full p-2 lg:p-0 aspect-[21/9] relative'>
            <Swiper
                className="w-full h-full"
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination
                autoplay={{ delay: 3500 }}
                onSlideChange={handleSlideChange}
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={item}
                            alt={`Imagem do carrossel ${index + 1}`}
                            fill
                            className="object-cover rounded-xl lg:rounded-none"
                            priority={index === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {showProgressBar && <div ref={progressBarRef} className='bg-sky-500 h-2'></div>}
        </div>
    );
}

export default Carousel;