import { IPricingBenefits, pricingBenefits } from "../static/pricingBenefits";

/**
 * Element for containing pricing information and product tier benefits
 */
const Pricing: React.FC = () => {
    // Return array of JSX elements for each individual benefit in chosen product tier
    const returnBenefitItems = (benefitItemData: IPricingBenefits[]) => {
        return benefitItemData.map(
            (benefit: IPricingBenefits, index: number) => {
                return (
                    <div className="flex flex-row gap-3" key={index}>
                        <i className={`fi ${benefit.icon}`}></i>
                        <p className="text-sm text-muted">{benefit.text}</p>
                    </div>
                );
            }
        );
    };

    return (
        <div className="px-5 sm:px-10 md:px-5 lg:px-20 xl:px-40 flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-backgroundLighter border-2 border-outline rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg flex flex-col gap-3 p-5">
                    <h2 className="font-heading text-xl font-bold">Nomad</h2>
                    <p className="font-semibold">Free Forever</p>
                    <p className="text-muted text-sm md:h-[120px] md:line-clamp-6 lg:h-[100px] lg:line-clamp-5 xl:h-20 xl:line-clamp-4">
                        Your passport to smarter spending. Get a multi-currency
                        account, fee-free ATM withdrawals (up to $300), and
                        real-time FX rates — all for free.
                    </p>
                    <div className="w-full border-t-2 border-outline flex flex-col gap-2 pt-5 mt-2">
                        {/* Return elements for nomad tier benefits */}
                        {returnBenefitItems(pricingBenefits.nomad)}
                    </div>
                    <div className="flex-grow"></div>
                    <div className="rounded-full flex justify-between border-2 border-outline py-2 px-4 mt-4 cursor-pointer hover:bg-backgroundLight bg-none transition-all">
                        <p className="font-heading text-sm">Get Started Free</p>
                        <i className="fi fi-rr-arrow-right items-center"></i>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-backgroundLight border-x-2 md:border-x-0 md:border-y-2 border-outline flex flex-col gap-3 p-5 relative">
                    <div className="hidden md:block absolute -top-[2px] -translate-y-full px-3 py-1 bg-primary left-0 rounded-t-xl font-heading">
                        Popular
                    </div>
                    <div className="flex flex-row gap-3">
                        <h2 className="font-heading text-xl font-bold">
                            Explorer
                        </h2>
                        <span className="block md:hidden px-3 py-1 rounded-full bg-primary text-sm font-medium">
                            Popular
                        </span>
                    </div>

                    <p className="font-semibold">$15/month</p>
                    <p className="text-muted text-sm md:h-[120px] md:line-clamp-6 lg:h-[100px] lg:line-clamp-5 xl:h-20 xl:line-clamp-4">
                        For frequent flyers and digital nomads. Enjoy higher ATM
                        limits, travel insurance, FX alerts, and priority
                        support to make the world your wallet.
                    </p>
                    <div className="w-full border-t-2 border-outline flex flex-col gap-2 pt-5 mt-2">
                        <p className="text-sm font-semibold pb-1">
                            All Nomad features, plus:
                        </p>
                        {/* Return elements for explorer tier benefits */}
                        {returnBenefitItems(pricingBenefits.explorer)}
                    </div>
                    <div className="flex-grow"></div>
                    <div className="rounded-full flex justify-between bg-primaryOff py-2 px-4 mt-4 cursor-pointer hover:bg-primary transition-all">
                        <p className="font-heading text-sm">
                            Upgrade to Explorer
                        </p>
                        <i className="fi fi-rr-arrow-right"></i>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-backgroundLighter border-2 border-outline rounded-b-lg md:rounded-bl-none md:rounded-tr-xl flex flex-col gap-3 p-5">
                    <h2 className="font-heading text-xl font-bold">Pioneer</h2>
                    <p className="font-semibold">$25/month</p>
                    <p className="text-muted text-sm md:h-[120px] md:line-clamp-6 lg:h-[100px] lg:line-clamp-5 xl:h-20 xl:line-clamp-4">
                        Built for global pros. Unlock crypto staking, unlimited
                        withdrawals, investment tools, and AI-powered insights —
                        all in one powerful financial hub.
                    </p>
                    <div className="w-full border-t-2 border-outline flex flex-col gap-2 pt-5 mt-2">
                        <p className="text-sm font-semibold pb-1">
                            All Explorer features, plus:
                        </p>
                        {/* Return elements for pioneer tier benefits */}
                        {returnBenefitItems(pricingBenefits.pioneer)}
                    </div>
                    <div className="flex-grow"></div>
                    <div className="rounded-full flex justify-between border-2 border-outline py-2 px-4 mt-4 cursor-pointer hover:bg-backgroundLight bg-none transition-all">
                        <p className="font-heading text-sm">
                            Unlock Full Access
                        </p>
                        <i className="fi fi-rr-arrow-right items-center"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
