import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ThemeMode, toggleTheme } from "../store/slices/theme";

/**
 * Element for handling the display and control of nav bar and navigation menu
 */
const Navigation: React.FC = () => {
    const theme: ThemeMode = useAppSelector((state) => state.theme.mode); // Get user theme from Redux state

    const [navOpen, setNavOpen] = useState<boolean>(false); // State for handling nav open/closed
    const [scrolled, setScrolled] = useState<boolean>(false); // State for handling if page has been scrolled by more than 50px

    const dispatch = useAppDispatch();

    // Event listener for detecting when user scrolls on page. Set setScrolled to true if page scrolled more than 50px to display background on nav bar which is transparent by default
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Toggle overflow-hidden on document based on navOpen status
    useEffect(() => {
        navOpen
            ? document.body.classList.add("overflow-hidden")
            : document.body.classList.remove("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [navOpen]);

    return (
        <div className="z-50 sticky top-0">
            <div
                // Dynamically show/hide navBar based on if navOpen is true or not. These classes only apply on screens smaller than Tailwind sm as they are overwritten by sm:block
                className={`${navOpen ? "block h-dvh" : "hidden"}
                sm:block absolute w-screen top-0 left-0 sm:h-auto bg-secondary sm:bg-transparent p-10 sm:p-0`}
            >
                <div
                    // Set background on navBar if user has scrolled on page
                    className={`${
                        scrolled && !navOpen ? "bg-backgroundLighter" : ""
                    } transition-all flex flex-col sm:flex-row justify-start sm:justify-between sm:px-10 lg:px-8 xl:px-20 sm:py-4 items-start sm:items-center h-full`}
                >
                    <div className="w-full mb-10 sm:mb-0 sm:justify-start flex flex-row items-center justify-between">
                        <h1 className="font-heading text-4xl sm:text-2xl font-bold">
                            Nomadix
                        </h1>
                        <div className="flex flex-row gap-5 sm:hidden text-main text-2xl">
                            <i
                                onClick={() => {
                                    dispatch(toggleTheme()); // Toggle theme using Redux if icon clicked
                                }}
                                // Show sun/moon icon depending on user theme
                                className={`fi ${
                                    theme === "dark"
                                        ? "fi-br-sun"
                                        : "fi-br-moon-stars"
                                } cursor-pointer`}
                            ></i>
                            <i
                                onClick={() => setNavOpen(false)}
                                className="fi fi-br-cross cursor-pointer"
                            ></i>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-5 justify-start sm:justify-center text-xl sm:text-base *:text-muted *:cursor-pointer *:border-b-outline *:border-b-2 *:pb-3 *:sm:pb-0 *:sm:border-none *:transition-all">
                        <p className="hover:text-main text-nowrap">Features</p>
                        <p className="hover:text-main text-nowrap">
                            Comparison
                        </p>
                        <p className="hover:text-main text-nowrap">About Us</p>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="w-full flex gap-5 flex-col sm:flex-row items-center justify-start sm:justify-end text-xl sm:text-base *:w-full *:sm:w-auto *:text-center *:px-6 *:py-2 *:rounded-xl *:cursor-pointer *:transition-all">
                        <p className="text-muted hover:text-main border-2 border-outline sm:border-none block sm:hidden lg:block">
                            Join Today
                        </p>
                        <p className="bg-primaryOff hover:bg-primary block sm:hidden md:block">
                            Log In
                        </p>
                        <i
                            onClick={() => {
                                dispatch(toggleTheme());
                            }}
                            className={`fi ${
                                theme === "dark"
                                    ? "fi-br-sun"
                                    : "fi-br-moon-stars"
                            } !hidden sm:!flex cursor-pointer text-muted hover:text-main bg-backgroundLighter bg-opacity-25 hover:bg-opacity-50 !p-3`}
                        ></i>
                    </div>
                </div>
            </div>

            {/* Mobile button for showing/hiding navigation menu */}
            <i
                onClick={() => setNavOpen(true)}
                className={`${navOpen ? "hidden" : "absolute"} ${
                    scrolled ? "bg-backgroundLighter" : ""
                } transition-all sm:hidden fi fi-br-menu-burger text-2xl text-light right-5 top-7 cursor-pointer p-5 rounded-full`}
            ></i>
        </div>
    );
};

export default Navigation;
