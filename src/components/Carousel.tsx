"use client";

// 1. Importe o Swiper e TAMBÉM o SwiperSlide aqui
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image'; // Importe o Image aqui também

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';
// Não precisa mais importar o CarouselSlide
// import CarouselSlide from './CarouselSlide'; 
import { SlideProps } from '@/types/TypeCarouselSlides';

type Props = {
    showProgressBar?: boolean;
}

const slides: SlideProps[] =
    [
        { id: 0, imageUrl: '/img/page/carousel/slide-cellphone.png', title: 'Manutenção em Celulares' },
        { id: 1, imageUrl: '/img/page/carousel/slide-cftv.png', title: 'Instalação de Câmeras CFTV' },
        { id: 2, imageUrl: '/img/page/carousel/slide-notebook.png', title: 'Manutenção em Computadores' },
        { id: 3, imageUrl: '/img/page/carousel/slide-pdv.png', title: 'Sistemas PDV' }
    ]


const Carousel = ({ showProgressBar = true }: Props) => {
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleSlideChange = () => {
        const progressBar: HTMLDivElement | null = progressBarRef.current
        if (progressBar) {
            progressBar.classList.remove('animate-progress-bar');
            void progressBar.offsetWidth;
            progressBar.classList.add('animate-progress-bar')
        }
    }

    return (
        <div className='relative w-full h-[calc(50vh-var(--header-height))] lg:h-[calc(97vh-var(--header-height))] p-2 lg:p-0'>
            <Swiper
                className="primary-carousel w-full h-full"
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                onSlideChange={handleSlideChange}
            >
                {/* 2. Mapeie diretamente para o componente SwiperSlide */}
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl leading-snug text-shadow-lg text-shadow-black font-bold text-white absolute m-6 z-1'>
                            {slide.title}
                        </h1>

                        <Image
                            src={slide.imageUrl}
                            alt={slide.title}
                            fill
                            className="object-cover rounded-xl lg:rounded-none"
                            priority={index === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {showProgressBar && <div ref={progressBarRef} className='bg-sky-500 h-2 animate-progress-bar'></div>}
        </div>
    );
}

export default Carousel;