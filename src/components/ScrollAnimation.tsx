// components/ScrollAnimation.tsx
'use client'; // Necessário no Next.js App Router para componentes com interatividade

import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

type Direction = 'top' | 'bottom' | 'left' | 'right';

type ScrollAnimationProps = {
    children: ReactNode;
    className?: string;
    direction?: Direction;
};

export function ScrollAnimation({ children, className, direction = 'bottom' }: ScrollAnimationProps) {
    const { ref, inView } = useInView({
        // Opções
        triggerOnce: true, // A animação acontece apenas uma vez
        threshold: 0.1,    // O elemento é considerado visível quando 10% dele estiver na tela
    });

    const animationMap: { [key in Direction]: { initial: string; final: string } } = {
        top: { initial: 'opacity-0 -translate-y-10', final: 'opacity-100 translate-y-0' },
        bottom: { initial: 'opacity-0 translate-y-10', final: 'opacity-100 translate-y-0' },
        left: { initial: 'opacity-0 -translate-x-10', final: 'opacity-100 translate-x-0' },
        right: { initial: 'opacity-0 translate-x-10', final: 'opacity-100 translate-x-0' },
    };

    // Pega o conjunto de classes correto baseado na direção
    const animationClasses = animationMap[direction];

    return (
        <div
            ref={ref}
            className={`${className} transition-all ease-out duration-[1500ms] ${
                inView ? animationClasses.final : animationClasses.initial
            }`}
        >
            {children}
        </div>
    );
}