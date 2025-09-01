import { LucideIcon } from "lucide-react";
import { ScrollAnimation } from "../ScrollAnimation";

// ===== Props do Badge =====
export type BadgeProps = {
    className?: string;
    Icon: LucideIcon;
    text: string;
    animationDirection: 'left' | 'right';
}

const Badge = ({ className, Icon, text, animationDirection }: BadgeProps) => {
    return (
        <ScrollAnimation
            className={`
                flex flex-row gap-3 bg-gray-100 p-3 shadow-lg justify-center items-center rounded-lg
                transition-transform duration-300 ease-in-out hover:bg-gray-200 hover:scale-110 grow 
                ${className}
            `}
            direction={animationDirection}
        >
            <Icon width={24} height={24} className="fill-gray-200 stroke-primary-color" />
            <p className='cursor-default'>{text}</p>
        </ScrollAnimation>
    )
}

export default Badge;