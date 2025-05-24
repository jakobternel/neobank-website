import { useEffect, useRef, useState } from "react";
import { BlurDotBg } from "../modules/BlurDotBg.module";

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

const Hero: React.FC<{}> = () => {
    const [labelText, setLabelText] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const backgroundRef = useRef(null);

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

            return () => {
                background.destroy && background.destroy();
            };
        }
    }, []);

    useEffect(() => {
        const currentWord = labels[wordIndex];
        const isDoneTyping = labelText === currentWord;
        const isDoneDeleting = labelText === "";
        const typeSpeed = isDeleting ? 50 : 100;

        let timeout: NodeJS.Timeout;

        if (!isDeleting && !isDoneTyping) {
            timeout = setTimeout(() => {
                setLabelText(currentWord.slice(0, labelText.length + 1));
            }, typeSpeed);
        } else if (!isDeleting && isDoneTyping) {
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && !isDoneDeleting) {
            timeout = setTimeout(() => {
                setLabelText(currentWord.slice(0, labelText.length - 1));
            }, typeSpeed);
        } else if (isDeleting && isDoneDeleting) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % labels.length);
        }

        return () => clearTimeout(timeout);
    }, [labelText, wordIndex, isDeleting]);

    return (
        <div className="w-full h-screen">
            <div className="absolute flex flex-col sm:flex-row h-full w-full py-20 px-10 sm:px-10 lg:px-20 z-30">
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
                        <p className="text-muted hover:text-light cursor-pointer transition-all">
                            Learn More
                        </p>
                        <p className="px-5 py-3 bg-primaryOff hover:bg-primary transition-all cursor-pointer rounded-xl">
                            Join Today!
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
                        "linear-gradient(180deg, rgba(13,27,42,0) 0%, rgba(13,27,42,1) 100%)",
                }}
            ></div>
            <div
                className="w-full h-full z-10 opacity-20"
                id="blurBackground"
                ref={backgroundRef}
            ></div>
        </div>
    );
};

export default Hero;
