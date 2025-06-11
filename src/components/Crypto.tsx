import { useAppSelector } from "../store/hooks";

const mockup = require("../assets/mockup.png");
const bitcoin = require("../assets/cryptoIcons/bitcoin.png");
const dogecoin = require("../assets/cryptoIcons/dogecoin.png");
const ethereum = require("../assets/cryptoIcons/ethereum.png");
const monero = require("../assets/cryptoIcons/monero.png");

const CryptoInfo: React.FC<{ icon: any; name: string; theme: string }> = ({
    icon,
    name,
    theme,
}) => {
    function randomDecimal(): string {
        const num = (Math.random() * 6 - 3).toFixed(2);
        return (parseFloat(num) >= 0 ? "+" : "") + num;
    }
    const change = randomDecimal();

    return (
        <div className="w-full lg:w-[calc(50%-6px)] flex gap-3 px-3 items-center">
            <img
                src={icon}
                alt={name}
                className="h-8 w-8"
                style={{
                    filter: `brightness(0) invert(${
                        theme === "dark" ? "1" : "0"
                    })`,
                }}
            />
            <div className="flex flex-col">
                <p className="font-heading font-normal">{name}</p>
                <p
                    className={`text-xs ${
                        parseFloat(change) < 0
                            ? "text-red-500"
                            : "text-green-500"
                    }`}
                >
                    {change}%
                </p>
            </div>
        </div>
    );
};

const CryptoIcon: React.FC<{
    icon: any;
    offsetX: number;
    offsetY: number;
    cryptoName: string;
    theme: any;
    delay: number;
}> = ({ icon, offsetX, offsetY, cryptoName, theme, delay }) => {
    return (
        <div
            className="absolute w-[13%] h-[13%] top-1/2 left-1/2 z-40"
            style={{
                transform: `translate(calc(-50% + ${offsetX}%), calc(-50% + ${offsetY}%))`,
            }}
        >
            <img
                src={icon}
                alt={cryptoName}
                className={`w-full h-full border-black border-2 p-[10%] rounded-full animate-bounce`}
                style={{
                    animationDelay: `${delay}ms`,
                    filter: `brightness(0) invert(${
                        theme === "dark" ? "1" : "0"
                    })`,
                }}
            />
        </div>
    );
};

const Crypto: React.FC = () => {
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="w-full md:w-5/12 lg:w-1/2 px-16 sm:px-36 md:px-12 lg:px-16 xl:px-20">
                <div className="aspect-square relative w-full h-full">
                    <div className="absolute inset-0">
                        <CryptoIcon
                            offsetX={-200}
                            offsetY={-150}
                            icon={bitcoin}
                            cryptoName="bitcoin"
                            theme={theme}
                            delay={0}
                        />
                        <CryptoIcon
                            offsetX={200}
                            offsetY={-150}
                            icon={monero}
                            cryptoName="monero"
                            theme={theme}
                            delay={250}
                        />
                        <CryptoIcon
                            offsetX={-75}
                            offsetY={-250}
                            icon={dogecoin}
                            cryptoName="dogecoin"
                            theme={theme}
                            delay={500}
                        />
                        <CryptoIcon
                            offsetX={75}
                            offsetY={-250}
                            icon={ethereum}
                            cryptoName="ethereum"
                            theme={theme}
                            delay={750}
                        />
                    </div>

                    <div className="absolute inset-0">
                        <div
                            className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan ${
                                theme === "dark" ? "opacity-25" : "opacity-10"
                            } rounded-full z-20`}
                        ></div>
                        <div
                            className={`w-3/4 h-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan ${
                                theme === "dark" ? "opacity-25" : "opacity-30"
                            } rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20`}
                        ></div>
                        <div
                            className={`w-1/2 h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan ${
                                theme === "dark" ? "opacity-25" : "opacity-50"
                            } rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20`}
                        ></div>
                    </div>

                    <img
                        src={mockup}
                        alt="mockup"
                        className="absolute w-2/3 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                    />
                </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 md:pl-0 md:pr-20 md:py-10 px-10 md:px-0 flex flex-col gap-5 justify-center">
                <h2 className="font-heading text-4xl font-extrabold text-center md:text-left">
                    Seamless Crypto Integration
                </h2>
                <p className="text-center md:text-left">
                    Easily manage crypto alongside your money. We support
                    popular coins like Bitcoin, Ethereum, and Monero — securely
                    and without extra fees.
                </p>
                <div className="mt-10 rounded-xl w-full self-center bg-backgroundLight shadow-md flex p-3 gap-3">
                    <div className="w-1/2 lg:w-1/3 rounded-lg flex flex-col items-center gap-3 p-10 lg:p-5 xl:p-3 bg-gradient-to-br from-blue-400 to-blue-800 justify-between">
                        <p className="font-heading text-center text-white">
                            Trade over 100+ cryptocurrencies
                        </p>
                        <p className="px-6 text-xs py-3 bg-backgroundLighter rounded-full w-min text-nowrap cursor-pointer transition-all hover:bg-cyanDarker">
                            Get Started
                        </p>
                    </div>
                    <div className="w-1/2 lg:w-2/3 rounded-lg flex flex-wrap gap-3">
                        <CryptoInfo
                            icon={bitcoin}
                            name="Bitcoin"
                            theme={theme}
                        />
                        <CryptoInfo
                            icon={ethereum}
                            name="Ethereum"
                            theme={theme}
                        />
                        <CryptoInfo icon={monero} name="Monero" theme={theme} />
                        <CryptoInfo
                            icon={dogecoin}
                            name="Dogecoin"
                            theme={theme}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crypto;
