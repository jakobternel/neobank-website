import { JSX, useEffect, useRef, useState } from "react";
import Icon, { IconHandle } from "./shared/Icon";

// Import information components to be changed based on user input
import Social from "./otherBenefits/Social";
import Investing from "./otherBenefits/Investing";
import Shopping from "./otherBenefits/Shopping";
import Security from "./otherBenefits/Security";

// Import animated icons
const social = require("../assets/animatedIcons/friends.json");
const investments = require("../assets/animatedIcons/share.json");
const shopping = require("../assets/animatedIcons/basket.json");
const security = require("../assets/animatedIcons/lock.json");

/**
 * Element for containing additional benefits of the platform. Displays buttons which toggle the information shown to the user for social, investment, shopping, and security benefits
 */
const OtherBenefits: React.FC = () => {
    const [activeBenefitsSection, setActiveBenefitsSection] =
        useState<number>(0); // Currently selected benefits to be shown. Defaults to 0 for social benefits
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : true
    ); // Uses the width of the window to determine if the user is browsing on phone. Used for the dynamic sizing of animated icons which default to size 50 if no value entered

    // Event listener for window resizing
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Refs for handling icon animation
    const socialRef = useRef<IconHandle>(null);
    const investmentsRef = useRef<IconHandle>(null);
    const shoppingRef = useRef<IconHandle>(null);
    const securityRef = useRef<IconHandle>(null);

    // Additional benefits sections which can be selected by user
    const sections: {
        name: string;
        icon: string;
        ref: React.RefObject<IconHandle | null>;
        element: JSX.Element;
    }[] = [
        { name: "Social", icon: social, ref: socialRef, element: <Social /> },
        {
            name: "Investing",
            icon: investments,
            ref: investmentsRef,
            element: <Investing />,
        },
        {
            name: "Shopping",
            icon: shopping,
            ref: shoppingRef,
            element: <Shopping />,
        },
        {
            name: "Security",
            icon: security,
            ref: securityRef,
            element: <Security />,
        },
    ];

    return (
        <div className="flex flex-col gap-3 px-5 sm:px-10 md:px-5 lg:px-20 xl:px-40">
            <h1 className="text-4xl font-bold font-heading text-center">
                Other Great Benefits
            </h1>
            <p className="text-muted text-center">
                Learn more about what else Nomadix has to offer
            </p>
            <div className="flex gap-5 justify-center mt-8">
                {/* Create button for each section */}
                {sections.map((section, index) => (
                    <div className="relative group" key={index}>
                        <div
                            className={`w-16 md:w-24 h-16 md:h-24 border-2 border-outline rounded-xl transition-all cursor-pointer flex items-center justify-center group-hover:shadow-lg ${
                                activeBenefitsSection === index
                                    ? "bg-backgroundLight"
                                    : "bg-none hover:bg-backgroundLighter"
                            }`}
                            onMouseEnter={() => section.ref.current?.play()} // Play icon animation on hover
                            onClick={() => setActiveBenefitsSection(index)} // Change active section state to show relevant component for clicked button
                        >
                            <Icon
                                icon={section.icon}
                                ref={section.ref}
                                size={isMobile ? 35 : undefined}
                            />
                        </div>
                        {/* Additional text to show when button hovered over */}
                        <div className="absolute px-3 py-1 rounded-full border-2 border-outline top-24 md:top-32 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-backgroundLighter group-hover:top-20 md:group-hover:top-28 transition-all duration-200 pointer-events-none group-hover:shadow-lg">
                            <p className="text-sm whitespace-nowrap flex gap-1">
                                <span>{section.name}</span>
                                <span className="hidden md:inline">
                                    Benefits
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[3.5rem] relative w-full">
                {/* Render benefit components. Div also handles the animation when changed by user */}
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`transition-opacity ease-in-out ${
                            activeBenefitsSection === index
                                ? "opacity-100 delay-200 pointer-events-auto static"
                                : "opacity-0 pointer-events-none absolute inset-0"
                        }`}
                    >
                        {section.element}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherBenefits;
