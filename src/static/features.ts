// List of features to be imported to Features component

// Import animated icons. Sourced from https://lordicon.com/
const savings = require("../assets/animatedIcons/savings.json");
const crypto = require("../assets/animatedIcons/crypto.json");
const investments = require("../assets/animatedIcons/investment.json");
const globe = require("../assets/animatedIcons/globe.json");
const shopping = require("../assets/animatedIcons/shopping.json");
const security = require("../assets/animatedIcons/security.json");

export interface IFeature {
    icon: string;
    title: string;
    description: string;
}

export const features: IFeature[] = [
    {
        icon: savings,
        title: "Smarter Saving",
        description:
            "Effortlessly grow your money with powerful savings tools built for real life. From high-interest returns to collaborative goals, we help you save more.",
    },
    {
        icon: crypto,
        title: "Integrated Crypto Wallet",
        description:
            "Manage your cryptocurrencies right alongside your regular funds with seamless integration. Buy, sell, and store digital assets safely in one app.",
    },
    {
        icon: investments,
        title: "Zero Fee Investing",
        description:
            "Invest without worrying about hidden charges or commissions. Grow your portfolio with no fees eating into your returns or profits.",
    },
    {
        icon: globe,
        title: "No International Transaction Fees",
        description:
            "Shop or send money worldwide without extra costs. Enjoy borderless spending and transfers with zero international fees.",
    },
    {
        icon: shopping,
        title: "Made For Online Shopping",
        description:
            "Experience smooth, secure payments tailored for e-commerce. Benefit from optimized checkout, instant notifications, and fraud protection.",
    },
    {
        icon: security,
        title: "Enhanced Security",
        description:
            "Your money and data are protected with advanced encryption and multi-layer authentication. Sleep soundly knowing your account is safe.",
    },
];
