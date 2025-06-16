const RoadmapItem: React.FC<{
    month: string;
    year: string;
    title: string;
    description: string;
    rightAlign: boolean;
    isLast?: boolean;
}> = ({ month, year, title, description, rightAlign, isLast }) => {
    return (
        <div
            className={`w-full h-30 flex ${
                rightAlign ? "md:flex-row-reverse" : ""
            }`}
        >
            <div className="flex-1">
                <div
                    className={`h-14 w-full flex items-center gap-3 ${
                        rightAlign ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                >
                    <p className="font-heading max-w-64 text-primary text-lg font-semibold break-words">
                        {title}
                    </p>
                    <div className="h-[1.5px] bg-primary flex-1"></div>
                </div>
                <div
                    className={`w-full h-10 overflow-visible ${
                        rightAlign ? "md:text-right" : ""
                    }`}
                >
                    <p className="text-sm text-muted">{description}</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary flex flex-col items-center justify-center">
                    <p className="font-heading text-xs">{year}</p>
                    <p className="font-heading text-xs">{month}</p>
                </div>
                {!isLast && <div className="bg-muted w-[1.5px] h-20 md:h-10"></div>}
            </div>
            <div className="flex-1 hidden md:block"></div>
        </div>
    );
};

const Roadmap: React.FC<{}> = ({}) => {
    const roadmapElements = [
        {
            month: "Jan",
            year: "2024",
            title: "Nomadix Launch",
            description:
                "Initial release of the platform in Australia and the United Kingdom",
        },
        {
            month: "Feb",
            year: "2024",
            title: "Multi-Currency Accounts",
            description:
                "Users can now hold, convert, and spend in over 30 global currencies with real-time exchange rates.",
        },
        {
            month: "March",
            year: "2024",
            title: "Fee-Free Transfers",
            description:
                "Launched zero-fee international transfers between users in supported countries.",
        },
        {
            month: "May",
            year: "2024",
            title: "Virtual Card",
            description:
                "Introduced virtual debit cards for instant online payments and travel use.",
        },
        {
            month: "July",
            year: "2024",
            title: "Crypto Wallet",
            description:
                "Users can now buy, sell, and hold cryptocurrencies directly from their account.",
        },
        {
            month: "Sep",
            year: "2024",
            title: "FX Rate Alerts",
            description:
                "Users can set custom alerts to track and lock in the best foreign exchange rates.",
        },
        {
            month: "Dec",
            year: "2024",
            title: "Portfolio Tracker",
            description:
                "Added a dashboard to track stocks, ETFs, and crypto investments in one place.",
        },
        {
            month: "Feb",
            year: "2025",
            title: "Recurring Payments",
            description:
                "Launched smart budgeting tools including recurring transfers and automated savings rules.",
        },
        {
            month: "April",
            year: "2025",
            title: "Shared Accounts",
            description:
                "Users can now create shared accounts with friends or family for pooled travel or savings.",
        },
        {
            month: "June",
            year: "2025",
            title: "Crypto Staking",
            description:
                "Enable passive earnings by staking supported cryptocurrencies directly in-app.",
        },

        {
            month: "Oct",
            year: "2025",
            title: "International Payments",
            description:
                "Users will be able to pay utility and subscription bills in over 50 countries using local currencies.",
        },
        {
            month: "Dec",
            year: "2025",
            title: "AI Spending Insights",
            description:
                "Smart analytics will help users understand spending habits and suggest personalized budgeting tips.",
        },
        {
            month: "Feb",
            year: "2026",
            title: "Crypto Debit Card",
            description:
                "Spend crypto directly from your wallet while automatically converting to local fiat at checkout.",
        },
        {
            month: "April",
            year: "2026",
            title: "Currency Exchange",
            description:
                "Facilitates secure user-to-user currency swaps with better rates than traditional exchanges.",
        },
        {
            month: "June",
            year: "2026",
            title: "Integrated Tax Reports",
            description:
                "Generate detailed reports for all fiat and crypto transactions, optimized for local tax laws.",
        },
    ];

    return (
        <div className="w-full flex-grow">
            <div className="h-96 md:h-72 relative">
                <div
                    className="absolute w-full h-6 top-0 z-20"
                    style={{
                        background:
                            "linear-gradient(0deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                    }}
                ></div>
                <div className="overflow-scroll scrollbar-hidden w-full h-full">
                    <div className="w-full h-12"></div>
                    {roadmapElements.map((roadmapContent, index) => {
                        return (
                            <RoadmapItem
                                key={index}
                                month={roadmapContent.month}
                                year={roadmapContent.year}
                                title={roadmapContent.title}
                                description={roadmapContent.description}
                                rightAlign={index % 2 === 0}
                                isLast={index + 1 === roadmapElements.length}
                            />
                        );
                    })}

                    <div className="w-full h-12"></div>
                </div>
                <div
                    className="absolute w-full h-6 bottom-0 z-20"
                    style={{
                        background:
                            "linear-gradient(180deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Roadmap;
