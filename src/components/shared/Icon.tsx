import { forwardRef, useImperativeHandle, useRef } from "react";
import { Player } from "@lordicon/react";

import { useAppSelector } from "../../store/hooks";
import { ThemeMode } from "../../store/slices/theme";

/**
 * Type declaration for handling play animation when triggered by ref
 */
export type IconHandle = {
    play: () => void;
};

/**
 * Element for displaying icon which is animated on hover
 *
 * @param icon Link to animated icon file. Icons can be found on https://lordicon.com/
 * @param size Optional size. Defaults to 50 if no value entered
 */
const Icon = forwardRef<IconHandle, { icon: any; size?: number }>(
    ({ icon, size }, ref) => {
        const theme: ThemeMode = useAppSelector((state) => state.theme.mode); // Get current user theme from Redux state

        const iconPlayerRef = useRef<Player>(null);

        useImperativeHandle(ref, () => ({
            play() {
                iconPlayerRef.current?.playFromBeginning();
            },
        }));

        return (
            <Player
                ref={iconPlayerRef}
                icon={icon}
                size={size || 50}
                colors={`primary:#${theme === "dark" ? "F1F5F9" : "0D1B2A"}`} // Change main colour of icon if theme changes
            />
        );
    }
);

export default Icon;
