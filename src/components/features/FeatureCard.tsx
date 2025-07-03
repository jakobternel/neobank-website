import { useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import { ThemeMode } from "../../store/slices/theme";

import Icon, { IconHandle } from "../shared/Icon";

/**
 * Feature Card Component to be used in Features element
 *
 * @param icon Source of animated icon to be displayed
 * @param title Title of feature
 * @param description Text description of feature
 */
const FeatureCard: React.FC<{
    icon: any;
    title: string;
    description: string;
}> = ({ icon, title, description }) => {
    const theme: ThemeMode = useAppSelector((state) => state.theme.mode); // Set theme based on current Redux state for use of changing Icon theme

    const iconRef = useRef<IconHandle>(null); // Icon ref used to toggle animation play on hover
    const cardRef = useRef<HTMLDivElement>(null); // Card ref used for handling mouse perspective interaction

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;

        // Get bounding box of card element as well as user mouse interaction coordinates
        const boundingBox = card.getBoundingClientRect();
        const x = e.clientX - boundingBox.left;
        const y = e.clientY - boundingBox.top;

        // Get centerpoint of bounding box
        const centerX = boundingBox.width / 2;
        const centerY = boundingBox.height / 2;

        // Set X and Y rotation of card element based on user hover
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    // Apply shadow to element based on mouse hover
    const handleMouseOver = () => {
        if (cardRef.current) {
            cardRef.current.style.boxShadow = `0 0 10px 3px ${
                theme === "dark"
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)"
            }`;
        }
    };

    // Reset rotation/perspective microinteraction when mouse is taken off element
    const resetRotation = () => {
        if (cardRef.current) {
            cardRef.current.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }
    };

    return (
        <div
            className="w-full md:max-w-96"
            // Play Icon animation when mouse enters on feature card
            onMouseEnter={() => iconRef.current?.play()}
            // Apply microinteraction when mouse moves on feature card
            onMouseMove={(e) => {
                handleMouseMove(e);
            }}
            // Remove microinteraction when mouse hovers off feature card
            onMouseLeave={() => {
                resetRotation();
                if (cardRef.current) {
                    cardRef.current.style.boxShadow = "";
                }
            }}
            // Apply shadow when mouse is placed over feature card
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
                        {title}
                    </p>
                </div>
                <p className="text-sm text-darker">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
