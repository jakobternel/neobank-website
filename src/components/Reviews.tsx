import { useEffect, useState } from "react";
import { reviews } from "../static/reviews";

const Review: React.FC<{
    name: string;
    rating: number;
    review: string;
    image: string;
}> = ({ name, rating, review, image }) => {
    const starRating = () => {
        const stars = [];

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++)
            stars.push(<i className="fi fi-ss-star"></i>);

        if (hasHalfStar)
            stars.push(<i className="fi fi-ss-star-sharp-half"></i>);

        return stars;
    };

    return (
        <div className="flex flex-col gap-5 p-5 rounded-2xl border-2 border-outline bg-backgroundLighter h-full">
            <div className="flex gap-5">
                <img
                    src={image}
                    alt={name}
                    className="rounded-full object-cover h-16 w-16"
                />
                <div className="flex flex-col gap-2 justify-center">
                    <p className="font-heading font-semibold">{name}</p>
                    <div className="flex flex-row gap-1 text-pink">
                        {starRating()}
                    </div>
                </div>
            </div>
            <div className="h-full flex items-center">
                <p className="text-sm text-muted">{review}</p>
            </div>
        </div>
    );
};

const Reviews: React.FC<{}> = ({}) => {
    const [reviewIndex, setReviewIndex] = useState<number>(0);
    const [visibleCount, setVisibleCount] = useState<number>(1);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1280) setVisibleCount(3);
            else if (width >= 768) setVisibleCount(2);
            else setVisibleCount(1);
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const totalPages = Math.ceil(reviews.length / visibleCount);
    const currentIndex = Math.min(reviewIndex, totalPages - 1);

    return (
        <div className="flex flex-col gap-3 items-center px-[10px] xl:px-40">
            <h1 className="font-heading text-4xl font-semibold text-center">
                Loved by Thousands Worldwide
            </h1>
            <p className="text-muted">
                Trusted by a growing community of 650,000+
            </p>

            <div className="relative w-full overflow-hidden mt-5">
                <div
                    className="flex gap-5 transition-transform duration-500 ease-in-out px-[10px]"
                    style={{
                        width: `${(reviews.length / visibleCount) * 100}%`,
                        transform: `translateX(-${
                            (100 / totalPages) * currentIndex
                        }%)`,
                    }}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex"
                            style={{ width: `${100 / reviews.length}%` }}
                        >
                            <Review
                                name={review.name}
                                rating={review.rating}
                                review={review.review}
                                image={review.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        className={`rounded-full w-12 h-2 bg-main cursor-pointer transition-all ${
                            reviewIndex === index
                                ? "opacity-50"
                                : "opacity-25 hover:opacity-35"
                        }`}
                        onClick={() => setReviewIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
