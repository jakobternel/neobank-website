import { useEffect, useRef, useState } from "react";
import Icon, { IconHandle } from "./shared/Icon";

import Social from "./otherBenefits/Social";
import Investing from "./otherBenefits/Investing";
import Shopping from "./otherBenefits/Shopping";
import Security from "./otherBenefits/Security";

const social = require("../assets/animatedIcons/friends.json");
const investments = require("../assets/animatedIcons/share.json");
const shopping = require("../assets/animatedIcons/basket.json");
const security = require("../assets/animatedIcons/lock.json");

const OtherBenefits: React.FC<{}> = ({}) => {
    const [activeBenefitsSection, setActiveBenefitsSection] =
        useState<number>(0);
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 768 : true
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const socialRef = useRef<IconHandle>(null);
    const investmentsRef = useRef<IconHandle>(null);
    const shoppingRef = useRef<IconHandle>(null);
    const securityRef = useRef<IconHandle>(null);

    const sections = [
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
                {sections.map((section, index) => (
                    <div className="relative group" key={index}>
                        <div
                            className={`w-16 md:w-24 h-16 md:h-24 border-2 border-outline rounded-xl transition-all cursor-pointer flex items-center justify-center group-hover:shadow-lg ${
                                activeBenefitsSection === index
                                    ? "bg-backgroundLight"
                                    : "bg-none hover:bg-backgroundLighter"
                            }`}
                            onMouseEnter={() => section.ref.current?.play()}
                            onClick={() => setActiveBenefitsSection(index)}
                        >
                            <Icon
                                icon={section.icon}
                                ref={section.ref}
                                size={isMobile ? 35 : undefined}
                            />
                        </div>
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
