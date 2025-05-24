import { forwardRef, useImperativeHandle, useRef } from "react";
import { Player } from "@lordicon/react";

export type IconHandle = {
    play: () => void;
};

const Icon = forwardRef<IconHandle, { icon: any }>(({ icon }, ref) => {
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
            colors="outline:#A3E635,primary:#F1F5F9"
        />
    );
});

export default Icon;
