import { Star } from "lucide-react";

type StarsRatingProps = {
    count: number;
    w: number;
    h: number;
}

const StarsRating = ({ count, w, h }: StarsRatingProps) => {
    return (
        <div className="flex flex-row">
            {Array(count).fill(null).map((_, index) => (
                <Star key={index} className='fill-yellow-500' style={{ width: `${w}px`, height: `${h}px` }} />
            ))}
        </div>
    )

}

export default StarsRating;