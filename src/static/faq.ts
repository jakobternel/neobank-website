// FAQ content to be rendered in expandable components

export interface IFAQElement {
    title: string;
    content: string;
}

export const faqInformation: IFAQElement[] = [
    {
        title: "How does automatic saving work?",
        content:
            "Our app rounds up your everyday purchases and automatically transfers the spare change into your savings account. You can also set recurring transfers or savings goals to help you stay on track—completely hands-free.",
    },
    {
        title: "Is my money safe with this app?",
        content:
            "Yes. We use bank-grade encryption, two-factor authentication, and multi-layered security protocols to keep your funds and personal information protected at all times.",
    },
    {
        title: "Can I invest through the app with no fees?",
        content:
            "Absolutely. Our zero-fee investing platform lets you buy and sell stocks and ETFs without commissions. What you invest is exactly what goes into your portfolio.",
    },
    {
        title: "How is the crypto wallet integrated?",
        content:
            "You can manage your crypto assets directly within the app, right alongside your traditional funds. Buy, sell, or store popular cryptocurrencies securely without needing a separate wallet.",
    },
    {
        title: "Are there any international transaction fees?",
        content:
            "None at all. We've eliminated international transaction fees so you can shop or send money across borders without extra costs.",
    },
    {
        title: "How do shared savings goals work?",
        content:
            "With “Save Together,” you can invite friends or family to contribute toward a shared goal—whether it's a trip, gift, or group investment. Everyone stays updated and accountable in one shared view.",
    },
    {
        title: "What interest rate do savings earn?",
        content:
            "Your savings earn a competitive 4.15% annual interest rate—paid out monthly and automatically deposited into your savings account, helping your money grow effortlessly.",
    },
    {
        title: "Can I use the app for online shopping?",
        content:
            "Yes. Our app is optimized for online shopping with fast, secure checkout, instant transaction alerts, and built-in fraud protection to keep your purchases safe.",
    },
];
