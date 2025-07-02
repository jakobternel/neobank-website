import { useEffect, useRef, useState } from "react";
import GlobeModel from "./internationalBenefits/Globe";

const InternationalBenefitItem: React.FC<{
    title: string;
    description: string;
}> = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-heading font-semibold">{title}</h2>
            <p className="text-sm text-darker">{description}</p>
            <span>
                <p className="group inline-flex items-center gap-1 text-muted hover:text-main cursor-pointer transition-colors text-sm">
                    Learn More <i className="fi fi-rr-arrow-small-right"></i>
                </p>
            </span>
        </div>
    );
};

const InternationalBenefits: React.FC = () => {
    const [globeSize, setGlobeSize] = useState<number>(600);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width;
            const height = entry.contentRect.height;

            setGlobeSize(Math.min(width, height));
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
                <div className="bg-limeDarker lg:rounded-r-3xl self-stretch py-10 flex flex-col justify-between gap-6 *:!text-black pr-5 sm:pr-10 md:pr-20 lg:pr-10 pl-5 sm:pl-10 md:pl-20 lg:pl-16 xl:pl-20">
                    <h1 className="font-heading text-4xl font-extrabold">
                        Made For The Modern Traveller
                    </h1>
                    <p>
                        Travel with confidence using fee-free ATM withdrawals,
                        currency conversion, and international bank transfers.
                        No hidden charges—just simple, seamless spending
                        wherever you go.
                    </p>
                </div>
                <div
                    className="md:self-stretch grid grid-rows-2 grid-cols-2 gap-5
                    pr-5 sm:pr-10 md:pr-20 lg:pr-10 pl-5 sm:pl-10 md:pl-20 lg:pl-16 xl:pl-20
                "
                >
                    <InternationalBenefitItem
                        title="Worldwide ATM Network"
                        description="Access cash globally with no ATM withdrawal fees anytime, anywhere"
                    />
                    <InternationalBenefitItem
                        title="100+ Currencies"
                        description="Pay for hotels, food, and essentials in more than 100 supported currencies"
                    />
                    <InternationalBenefitItem
                        title="International Transfers"
                        description="Send money abroad instantly with zero international transfer fees"
                    />
                    <InternationalBenefitItem
                        title="Multi-Currency Accounts"
                        description="Manage multiple currency balances from a single account"
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div
                    className="w-full h-full flex justify-center"
                    ref={containerRef}
                >
                    <GlobeModel size={globeSize} />
                </div>
            </div>
        </div>
    );
};

export default InternationalBenefits;
