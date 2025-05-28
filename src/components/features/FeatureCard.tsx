import Icon, { IconHandle } from "./Icon";
import { useRef } from "react";
import { useAppSelector } from "../../store/hooks";

const FeatureCard: React.FC<{
    icon: any;
    text: string;
    description: string;
}> = ({ icon, text, description }) => {
    const theme = useAppSelector((state) => state.theme.mode);

    const iconRef = useRef<IconHandle>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseOver = () => {
        if (cardRef.current) {
            cardRef.current.style.boxShadow = `0 0 10px 3px ${
                theme === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)"
            }`;
        }
    };

    const resetRotation = () => {
        if (cardRef.current) {
            cardRef.current.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    };

    return (
        <div
            className="w-96"
            onMouseEnter={() => iconRef.current?.play()}
            onMouseMove={(e) => {
                handleMouseMove(e);
            }}
            onMouseLeave={() => {
                resetRotation();
                if (cardRef.current) {
                    cardRef.current.style.boxShadow = "";
                }
            }}
            onMouseOver={() => {
                if (cardRef.current) {
                    handleMouseOver();
                }
            }}
        >
            <div
                className="w-full h-full bg-secondary hover:bg-backgroundLight flex flex-col gap-5 p-5 border-2 border-outline transition-all rounded-3xl items-center justify-center shadow-xl"
                ref={cardRef}
            >
                <div className="w-full flex flex-row items-center gap-4">
                    <Icon icon={icon} ref={iconRef} />
                    <p className="text-xl text-cyan font-heading font-semibold">
                        {text}
                    </p>
                </div>
                <p className="text-sm text-darker">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
