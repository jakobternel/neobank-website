import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { Player } from "@lordicon/react";

export type IconHandle = {
    play: () => void;
};

const Icon = forwardRef<IconHandle, { icon: any }>(({ icon }, ref) => {
    const [theme, setTheme] = useState<string>(
        document.documentElement.getAttribute("data-theme") || "light"
    );

    const iconPlayerRef = useRef<Player>(null);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newTheme =
                document.documentElement.getAttribute("data-theme") || "light";
            setTheme(newTheme);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    useImperativeHandle(ref, () => ({
        play() {
            iconPlayerRef.current?.playFromBeginning();
        },
    }));

    return (
        <Player
            ref={iconPlayerRef}
            icon={icon}
            size={50}
            colors={`primary:#${theme === "dark" ? "F1F5F9" : "0D1B2A"}`}
        />
    );
});

export default Icon;
