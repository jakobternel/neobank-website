import { forwardRef, useImperativeHandle, useRef } from "react";
import { Player } from "@lordicon/react";

import { useAppSelector } from "../../store/hooks";

export type IconHandle = {
    play: () => void;
};

const Icon = forwardRef<IconHandle, { icon: any }>(({ icon }, ref) => {
    const theme = useAppSelector((state) => state.theme.mode);

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
            size={50}
            colors={`primary:#${theme === "dark" ? "F1F5F9" : "0D1B2A"}`}
        />
    );
});

export default Icon;
