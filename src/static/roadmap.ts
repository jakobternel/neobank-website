// Roadmap elements showing past and future features. Used in the generation of scrollable roadmap component

export interface IRoadmapElement {
    month: string;
    year: string;
    title: string;
    description: string;
}

export const roadmapElements: IRoadmapElement[] = [
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
