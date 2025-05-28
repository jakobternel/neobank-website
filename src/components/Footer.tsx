import { useAppSelector } from "../store/hooks";

const icon = require("../assets/logo_white.png");

const Footer: React.FC<{}> = () => {
    const theme = useAppSelector((state) => state.theme.mode);

    return (
        <>
            <div className="w-full h-auto px-10 sm:px-20 md:px-10 lg:px-20 py-10 bg-backgroundLighter flex flex-row gap-5 flex-wrap justify-between">
                <div className="flex flex-col w-full md:w-[calc(100%/3-10px)] lg:w-[calc(100%/3-10px)] h-full justify-between gap-5">
                    <div className="flex items-center flex-row gap-4">
                        <img
                            src={icon}
                            alt="logo"
                            className={`h-8 ${
                                theme !== "dark" ? "invert" : ""
                            }`}
                        />
                        <h1 className="text-2xl font-heading font-extrabold">
                            Nomadix
                        </h1>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-heading font-bold text-lg">
                            Stay in the Loop
                        </p>
                        <p className="text-darker text-xs">
                            Join our mailing list for updates, exclusive offers,
                            and money-saving tips. No spam - just the good
                            stuff.
                        </p>
                        <div className="relative mt-4 sm:max-w-72">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full rounded-xl p-3 pr-16 bg-backgroundLight border-2 border-outline outline-none text-main text-sm box-border font-heading text-ellipsis"
                            />
                            <p className="absolute right-[0.375rem] top-1/2 -translate-y-1/2 text-sm bg-pink px-3 py-2 rounded-lg cursor-pointer hover:bg-pinkDarker transition-all">
                                Join!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full md:w-[calc(50%-10px)] lg:w-[calc(100%/3-10px)] self-stretch gap-5">
                    <div className="w-[calc(50%-10px)] h-full">
                        <p className="font-bold mb-2">Info</p>
                        <div className="space-y-1">
                            {[
                                "Features",
                                "Card Benefits",
                                "Pricing & Plans",
                                "Comparison",
                                "Security",
                            ].map((text, id) => (
                                <div key={id}>
                                    <p className="inline-block text-muted hover:text-main cursor-pointer transition-colors">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-[calc(50%-10px)] h-full">
                        <p className="font-bold mb-2">Company</p>
                        <div className="space-y-1">
                            {[
                                "About Us",
                                "Help & Support",
                                "Cookie Policy",
                                "Terms & Conditions",
                                "Privacy Statement",
                                "Careers",
                            ].map((text, id) => (
                                <div key={id}>
                                    <p className="inline-block text-muted hover:text-main cursor-pointer transition-colors">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-3 bg-gray-200">
                <p className="text-center text-sm !text-black">
                    Developed by{" "}
                    <span className="font-bold !text-black">Jakob Ternel</span>{" "}
                    - View on{" "}
                    <a
                        className="underline hover:text-cyan hover:font-bold cursor-pointer transition-all"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/jakobternel/neobank-website"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </>
    );
};

export default Footer;
