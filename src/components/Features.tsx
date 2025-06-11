import FeatureCard from "./features/FeatureCard";

const savings = require("../assets/animatedIcons/savings.json");
const crypto = require("../assets/animatedIcons/crypto.json");
const investments = require("../assets/animatedIcons/investment.json");
const globe = require("../assets/animatedIcons/globe.json");
const shopping = require("../assets/animatedIcons/shopping.json");
const security = require("../assets/animatedIcons/security.json");

const Features: React.FC<{}> = () => {
    return (
        <div className="w-full h-full -mt-20">
            <div className="flex h-full flex-col gap-12 items-center justify-around">
                <h1 className="font-heading text-4xl px-10 text-center">
                    Everything You Need, Nothing You Don't
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 justify-center">
                    <FeatureCard
                        icon={savings}
                        text="Auto Saving"
                        description={
                            "Automatically set aside money effortlessly so your savings grow without you thinking about it. Stay on track with your goals without extra effort or stress."
                        }
                    />
                    <FeatureCard
                        icon={crypto}
                        text="Integrated Crypto Wallet"
                        description={
                            "Manage your cryptocurrencies right alongside your regular funds with seamless integration. Buy, sell, and store digital assets safely in one app."
                        }
                    />
                    <FeatureCard
                        icon={investments}
                        text="Zero Fee Investing"
                        description={
                            "Invest without worrying about hidden charges or commissions. Grow your portfolio with no fees eating into your returns or profits."
                        }
                    />
                    <FeatureCard
                        icon={globe}
                        text="No International Transaction Fees"
                        description={
                            "Shop or send money worldwide without extra costs. Enjoy borderless spending and transfers with zero international fees."
                        }
                    />
                    <FeatureCard
                        icon={shopping}
                        text="Made For Online Shopping"
                        description={
                            "Experience smooth, secure payments tailored for e-commerce. Benefit from optimized checkout, instant notifications, and fraud protection."
                        }
                    />
                    <FeatureCard
                        icon={security}
                        text="Enhanced Security"
                        description={
                            "Your money and data are protected with advanced encryption and multi-layer authentication. Sleep soundly knowing your account is safe."
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Features;
