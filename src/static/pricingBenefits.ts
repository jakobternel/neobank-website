// Tier benefits to be used in Pricing element

export interface IPricingBenefits {
    icon: string;
    text: string;
}

export const pricingBenefits: {
    [key in "nomad" | "explorer" | "pioneer"]: IPricingBenefits[];
} = {
    nomad: [
        {
            icon: "fi-sr-wallet",
            text: "Multi-currency account (up to 3 currencies)",
        },
        {
            icon: "fi-sr-deposit",
            text: "Fee-free ATM withdrawals (up to $300/month)",
        },
        {
            icon: "fi-sr-hand-holding-usd",
            text: "Instant peer-to-peer transfers",
        },
        {
            icon: "fi-rr-exchange-alt",
            text: "Real-time FX rates",
        },
        {
            icon: "fi-sr-sack-dollar",
            text: "Budgeting tools",
        },
        {
            icon: "fi-sr-credit-card",
            text: "Virtual debit card",
        },
    ],
    explorer: [
        {
            icon: "fi-sr-wallet",
            text: "Unlimited multi-currency wallets",
        },
        {
            icon: "fi-sr-deposit",
            text: "Fee-free ATM withdrawals (up to $1000/month)",
        },
        {
            icon: "fi-sr-plane-departure",
            text: "Travel insurance coverage",
        },
        {
            icon: "fi-sr-phone-call",
            text: "Priority customer support",
        },
        {
            icon: "fi-rr-exchange-alt",
            text: "FX rate alerts & auto-conversion rules",
        },
        {
            icon: "fi-sr-star-christmas",
            text: "Early access to new features",
        },
        {
            icon: "fi-sr-credit-card",
            text: "Custom debit card",
        },
    ],
    pioneer: [
        { icon: "fi-sr-deposit", text: "No ATM withdrawal limits" },
        {
            icon: "fi-brands-bitcoin",
            text: "Crypto wallet with staking & trading",
        },
        { icon: "fi-sr-dashboard-monitor", text: "Smart investment dashboard" },
        {
            icon: "fi-sr-artificial-intelligence",
            text: "AI-powered spending insights",
        },
        { icon: "fi-rs-percent-50", text: "Weekly vouchers and discounts" },
        { icon: "fi-sr-credit-card", text: "Metal debit card" },
    ],
};
