import { useAppSelector } from "../store/hooks";
import { ThemeMode } from "../store/slices/theme";

// Import app store icons as svg files
import { ReactComponent as AppleWhite } from "../assets/appStore/apple_white.svg";
import { ReactComponent as AppleBlack } from "../assets/appStore/apple_black.svg";
import { ReactComponent as GoogleWhite } from "../assets/appStore/google_white.svg";
import { ReactComponent as GoogleBlack } from "../assets/appStore/google_black.svg";

const phone = require("../assets/phone.png");

/**
 * Element for bottom of page download CTA
 */
const Download: React.FC = () => {
    const theme: ThemeMode = useAppSelector((state) => state.theme.mode); // Get user theme from Redux state

    return (
        <div className="px-5 sm:px-10 md:px-20 lg:px-40">
            <div className="flex flex-row w-full border-2 lg:h-[24rem] xl:h-[20rem] border-outline rounded-xl bg-backgroundLighter bg-gradient-to-tl from-backgroundLighter to-primary">
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center gap-5 p-10">
                    <h1 className="text-4xl font-heading font-semibold">
                        Online Mobile Banking Made For Everyone
                    </h1>
                    <p>
                        Experience the easiest way to stay connected and in
                        control — get started in just minutes!
                    </p>
                    <div className="flex gap-3 h-10 mt-5">
                        {/* Change app store icon depending on user selected theme */}
                        {theme === "dark" ? (
                            <>
                                <AppleWhite className="h-full w-auto cursor-pointer" />
                                <GoogleWhite className="h-full w-auto cursor-pointer" />
                            </>
                        ) : (
                            <>
                                <AppleBlack className="h-full w-auto cursor-pointer" />
                                <GoogleBlack className="h-full w-auto cursor-pointer" />
                            </>
                        )}
                    </div>
                </div>
                <div className="hidden w-1/2 lg:flex justify-center items-end self-stretch pt-5">
                    <img
                        src={phone}
                        alt="app screenshot"
                        className="max-h-full w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Download;
