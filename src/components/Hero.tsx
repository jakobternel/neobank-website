import { useEffect, useRef, useState } from "react";
import { BlurDotBg } from "../modules/BlurDotBg.module";
import { useAppSelector } from "../store/hooks";
import { ThemeMode } from "../store/slices/theme";

// Labels to rotate through for typing effect
const labels = [
    "students",
    "travellers",
    "expats",
    "nomads",
    "professionals",
    "freelancers",
    "influencers",
    "entrepreneurs",
    "creators",
    "sellers",
    "investors",
    "Gen Z",
];

/**
 * Element for hero section of webpage
 */
const Hero: React.FC = () => {
    const theme: ThemeMode = useAppSelector((state) => state.theme.mode); // Load user theme from Redux state

    const [labelText, setLabelText] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const backgroundRef = useRef(null); // Ref for blurred background effect

    // Generate blur background using BlurDotBg. Sourced from https://www.color4bg.com/en/
    useEffect(() => {
        if (backgroundRef.current) {
            const background = new BlurDotBg({
                dom: "blurBackground",
                colors: [
                    "#A3E635",
                    "#F472B6",
                    "#06B6D4",
                    "#0D1B2A",
                    "#0D1B2A",
                    "#0D1B2A",
                ],
                seed: 1000,
                loop: true,
            });

            setTimeout(() => {
                const canvas = document.getElementById("colorbgcanvas");
                if (canvas) {
                    canvas.style.height = "100%";
                }
            }, 100);

            return () => {
                background.destroy && background.destroy();
            };
        }
    }, []);

    // Typing effect on hero section
    useEffect(() => {
        const currentWord = labels[wordIndex]; // Sets the current word from the list of labels
        const isDoneTyping = labelText === currentWord; // Boolean for if the word if finished typing
        const isDoneDeleting = labelText === ""; // Boolean for if the word has been deleted
        const typeSpeed = isDeleting ? 50 : 100; // Typing effect speed

        let timeout: NodeJS.Timeout;

        if (!isDeleting && !isDoneTyping) {
            // If word is not finished typing, but not finished deleting, add extra letter to labelText
            timeout = setTimeout(() => {
                setLabelText(currentWord.slice(0, labelText.length + 1));
            }, typeSpeed);
        } else if (!isDeleting && isDoneTyping) {
            // If word is finished typing, set mode to deleting after a 1.5s pause
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && !isDoneDeleting) {
            // If word is not fully deleted and mode set to deleting, remove a letter from labelText
            timeout = setTimeout(() => {
                setLabelText(currentWord.slice(0, labelText.length - 1));
            }, typeSpeed);
        } else if (isDeleting && isDoneDeleting) {
            // If mode is set to deleting and word has been fully deleted, set mode to typing (deleting = false) and set wordIndex to index of next word
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % labels.length);
        }

        return () => clearTimeout(timeout);
    }, [labelText, wordIndex, isDeleting]);

    return (
        <div className="w-full h-full sm:h-screen relative">
            <div className="relative sm:absolute flex flex-col sm:flex-row h-full w-full py-20 px-10 sm:px-10 lg:px-20 z-30">
                <div className="w-full sm:w-1/2 h-[30rem] sm:h-full flex flex-col gap-3 justify-center py-10 sm:py-0 sm:items-start sm:pr-10">
                    <p className="text-xl text-muted text-left">
                        Banking that fits in your pocket - and your lifestyle.
                    </p>
                    <h1 className="max-w-[80%] text-4xl sm:text-6xl font-heading leading-[1.5] sm:leading-[1.3] text-left sm:h-auto">
                        Online mobile banking made for
                        <span className="px-3 ml-3 font-bold rounded-xl bg-pink whitespace-nowrap">
                            {labelText}
                        </span>
                    </h1>
                    <div className="flex flex-row gap-10 mt-6 items-center">
                        <p className="px-5 py-3 bg-primaryOff hover:bg-primary transition-all cursor-pointer rounded-xl">
                            Join Today!
                        </p>
                        <p className="text-muted hover:text-main cursor-pointer transition-all">
                            Learn More
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 h-full flex items-center sm:pl-10">
                    <img
                        src="https://www.freeiconspng.com/uploads/iphone-x-picture-image-19.png"
                        alt="mockup"
                    />
                </div>
            </div>
            <div
                className="absolute w-full h-60 bottom-0 z-20"
                style={{
                    background:
                        "linear-gradient(180deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                }}
            ></div>
            <div
                className={`absolute w-full h-full z-10 top-0 ${
                    theme === "light" ? "opacity-50" : "opacity-20"
                }`}
                id="blurBackground"
                ref={backgroundRef}
            ></div>
        </div>
    );
};

export default Hero;
