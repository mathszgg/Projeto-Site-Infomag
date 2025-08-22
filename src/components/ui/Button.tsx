import { forwardRef, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-3 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                default: 'bg-gray-100 text-gray-900 border border-gray-400 hover:bg-gray-200 hover:scale-105 active:bg-gray-300 shadow-md shadow-gray-400',
                destructive: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
                outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
            },
            size: {
                default: 'px-4 py-2'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    imgIconUrl?: string;
    className?: string;
};

type LinkButtonProps = ButtonBaseProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
        href: string;
    };

type StandardButtonProps = ButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

export type ButtonProps = LinkButtonProps | StandardButtonProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    (props, ref) => {
        
        const content = (
            <>
                {props.imgIconUrl && (
                    <Image
                        src={props.imgIconUrl}
                        alt="Ícone do botão"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                )}
                <span>{props.children}</span>
            </>
        );

        const classes = twMerge(buttonVariants({ variant: props.variant, size: props.size, className: props.className }));

        // --- 1. LÓGICA DE DECISÃO: Link Interno ou Externo? ---
        if (props.href) {
            const { href, className, variant, size, imgIconUrl, children, ...rest } = props;

            // Verificamos se o link começa com "http", "mailto:" ou "tel:"
            const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

            // --- 2. RENDERIZAÇÃO CONDICIONAL ---
            if (isExternal) {
                // Se for EXTERNO, renderiza uma tag <a> padrão
                return (
                    <a
                        href={href}
                        ref={ref as React.Ref<HTMLAnchorElement>}
                        className={classes}
                        target="_blank" // Abre em nova aba
                        rel="noopener noreferrer" // Boa prática de segurança
                        {...rest}
                    >
                        {content}
                    </a>
                );
            }

            // Se for INTERNO, renderiza o <Link> otimizado do Next.js
            return (
                <Link
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={classes}
                    {...rest}
                >
                    {content}
                </Link>
            );
        }

        // Se não tiver 'href', é um botão normal
        const { className, variant, size, imgIconUrl, children, ...rest } = props;
        return (
            <button
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classes}
                {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button, buttonVariants };