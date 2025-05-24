import Icon, { IconHandle } from "./Icon";
import { useRef } from "react";

const FeatureCard: React.FC<{
    icon: any;
    text: string;
    description: string;
}> = ({ icon, text, description }) => {
    const iconRef = useRef<IconHandle>(null);

    return (
        <div
            className="w-96 bg-secondary rounded-3xl border-2 shadow-xl border-outline flex flex-col gap-5 items-center justify-center p-5"
            onMouseEnter={() => iconRef.current?.play()}
        >
            <div className="w-full flex flex-row items-center gap-4">
                <Icon icon={icon} ref={iconRef} />
                <p className="text-xl text-cyan font-heading font-semibold">
                    {text}
                </p>
            </div>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default FeatureCard;
