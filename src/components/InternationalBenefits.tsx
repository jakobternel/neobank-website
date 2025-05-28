const InternationalBenefitItem: React.FC<{
    title: string;
    description: string;
}> = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-2 max-w-72">
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
    return (
        <div className="w-full flex flex-col md:flex-row sm:gap-10 md:gap-12 xl:gap-20">
            <div className="bg-limeDarker sm:rounded-r-3xl self-stretch w-full sm:w-4/5 md:w-2/5 px-10 sm:pl-20 md:pl-12 lg:pl-16 xl:pl-20 sm:pr-10 py-10 flex flex-col justify-between gap-6 *:!text-black">
                <h1 className="font-heading text-4xl font-extrabold">
                    Made For The Modern Traveller
                </h1>
                <p>
                    Travel with confidence using fee-free ATM withdrawals,
                    currency conversion, and international bank transfers. No
                    hidden charges—just simple, seamless spending wherever you
                    go.
                </p>
            </div>
            <div className="md:self-stretch sm:w-4/5 self-end md:w-3/5 sm:pr-20 px-10 sm:pl-0 pt-10 sm:pt-0 md:pr-12 lg:pr-16 xl:pr-20 sm:!py-5 grid grid-rows-2 grid-cols-2 gap-5">
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
    );
};

export default InternationalBenefits;
