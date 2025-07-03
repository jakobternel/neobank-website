import { cryptocurrencies, ICrypto } from "../static/cryptocurrencies";
import { useAppSelector } from "../store/hooks";
import { ThemeMode } from "../store/slices/theme";

const mockup = require("../assets/mockup.png");

/**
 * Component for the display of cryptocurrency information. Contains icon/logo of token, name and generates random daily percentage change
 *
 * @param icon Source of the cryptocurrency icon to be displayed. Ensure icon is black to display properly on default light theme
 * @param name Name/ticker of the cryptocurrency
 * @param theme Current theme of the application from Redux state
 */
const CryptoInfo: React.FC<{
    icon: string;
    name: string;
    theme: ThemeMode;
}> = ({ icon, name, theme }) => {
    // Generate random percentage change to be displayed underneath cryptocurrency name. Generates between -3 and +3
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
                // Invert the colour of the cryptocurrency icon based on the current theme
                style={{
                    filter: `brightness(0) invert(${
                        theme === "dark" ? "1" : "0"
                    })`,
                }}
            />
            <div className="flex flex-col">
                <p className="font-heading font-normal">{name}</p>
                <p
                    // Change color of daily percentage change based on if it is a positive or negative value
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

/**
 * Component for displaying hovering cryptocurrency icon
 *
 * @param icon Source of the cryptocurrency icon to be displayed. Ensure icon is black to display properly on default light theme
 * @param offsetX Horizontal offset from centre of parent element in %
 * @param offsetY Vertical offset from centre of parent element in %
 * @param cryptoName Name of crypto to be used as alt in img tag
 * @param theme Current theme of the application from Redux state
 * @param delay Delay of start of hovering animation in ms
 */
const CryptoIcon: React.FC<{
    icon: string;
    offsetX: number;
    offsetY: number;
    cryptoName: string;
    theme: ThemeMode;
    delay: number;
}> = ({ icon, offsetX, offsetY, cryptoName, theme, delay }) => {
    return (
        <div
            className="absolute w-[13%] h-[13%] top-1/2 left-1/2 z-40"
            style={{
                // Offset position of cryptocurrency icon
                transform: `translate(calc(-50% + ${offsetX}%), calc(-50% + ${offsetY}%))`,
            }}
        >
            <img
                src={icon}
                alt={cryptoName}
                className={`w-full h-full border-black border-2 p-[10%] rounded-full animate-bounce`}
                style={{
                    // Delay start of hovering animation
                    animationDelay: `${delay}ms`,
                    // Invert colour if theme is set to dark
                    filter: `brightness(0) invert(${
                        theme === "dark" ? "1" : "0"
                    })`,
                }}
            />
        </div>
    );
};

/**
 * Element for displaying cryptocurrency investing benefits
 */
const Crypto: React.FC = () => {
    const theme: ThemeMode = useAppSelector((state) => state.theme.mode); // Get current user theme from Redux state

    return (
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="w-full md:w-5/12 lg:w-1/2 px-16 sm:px-36 md:px-12 lg:px-16 xl:px-20">
                <div className="aspect-square relative w-full h-full">
                    <div className="absolute inset-0">
                        {/* Return CryptoIcon component for each element in cryptocurrencies array */}
                        {cryptocurrencies.map(
                            (crypto: ICrypto, index: number) => {
                                return (
                                    <CryptoIcon
                                        key={index}
                                        offsetX={crypto.offsetX}
                                        offsetY={crypto.offsetY}
                                        icon={crypto.icon}
                                        cryptoName={crypto.cryptoName}
                                        theme={theme}
                                        delay={crypto.delay}
                                    />
                                );
                            }
                        )}
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
            <div className="w-full md:w-7/12 lg:w-1/2 md:pl-0 md:pr-20 md:py-10 px-5 md:px-0 flex flex-col gap-5 justify-center">
                <h2 className="font-heading text-4xl font-extrabold text-center md:text-left">
                    Seamless Crypto Integration
                </h2>
                <p className="text-center md:text-left text-muted">
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
                        {/* Return CryptoInfo component for each element in cryptocurrencies array */}
                        {cryptocurrencies.map(
                            (crypto: ICrypto, index: number) => {
                                return (
                                    <CryptoInfo
                                        key={index}
                                        icon={crypto.icon}
                                        name={crypto.cryptoName}
                                        theme={theme}
                                    />
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crypto;
