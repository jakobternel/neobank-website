import { useState } from "react";

import Card from "./cardAndRoadmap/Card";

const mapOverlay: string = require("../assets/cardOverlays/map.png");
const contourOverlay: string = require("../assets/cardOverlays/contour.png");
const circuitOverlay: string = require("../assets/cardOverlays/circuit.png");
const abstractOverlay: string = require("../assets/cardOverlays/abstract.png");
const linesOverlay: string = require("../assets/cardOverlays/lines.png");

const CardAndRoadmap: React.FC<{}> = ({}) => {
    const [selectedColor, setSelectedColor] = useState<number>(0);
    const [selectedDesign, setSelectedDesign] = useState<any>(mapOverlay);

    const cardColors = ["#9448BC", "#00CC66", "#49BCFF", "#F75C03"];
    const cardDesigns = [
        { image: mapOverlay, icon: "fi-rr-earth-americas" },
        { image: contourOverlay, icon: "fi-br-1" },
        { image: circuitOverlay, icon: "fi-br-2" },
        { image: abstractOverlay, icon: "fi-br-3" },
        { image: linesOverlay, icon: "fi-br-4" },
    ];

    return (
        <div className="flex gap-5 w-full flex-col md:flex-row px-10 lg:px-20 xl:px-40">
            <div className="flex flex-col gap-3 py-5 w-full md:w-1/2 ">
                <h1 className="font-heading text-2xl font-semibold">
                    Make It Yours
                </h1>
                <p className="text-sm text-muted">
                    Personalise your card to match your style. Choose from 12
                    vibrant colours and 5 unique designs — whether you're bold,
                    minimal, or somewhere in between, there's a look that fits
                    you.
                </p>
                <div className="flex flex-row gap-5 w-min m-auto mt-5">
                    <div className="flex flex-col gap-2 justify-center">
                        {cardColors.map((color, index) => {
                            return (
                                <div
                                    className="h-7 w-7 rounded-full border-[1px] flex justify-center items-center border-outline cursor-pointer"
                                    key={index}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(index)}
                                >
                                    {index === selectedColor && (
                                        <i className="fi fi-br-check text-black opacity-75 text-[12px]"></i>
                                    )}
                                </div>
                            );
                        })}
                        <div className="h-7 w-7 rounded-full border-[1px] border-outline flex items-center justify-center bg-backgroundLight ">
                            <p className="text-xs">+8</p>
                        </div>
                    </div>
                    <Card
                        color={cardColors[selectedColor]}
                        design={selectedDesign}
                    />
                    <div className="flex flex-col gap-2 justify-center">
                        {Object.values(cardDesigns).map((cardDesign, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`h-7 w-12 rounded-lg border-[1px] border-outline cursor-pointer flex justify-center items-center transition-all ${
                                        selectedDesign === cardDesign.image
                                            ? "bg-backgroundLight"
                                            : "bg-backgroundLighter"
                                    }`}
                                    onClick={() =>
                                        setSelectedDesign(cardDesign.image)
                                    }
                                >
                                    <i
                                        className={`fi ${cardDesign.icon} text-main text-[14px]`}
                                    ></i>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="self-stretch w-[2px] bg-outline"></div>
            <div className="w-1/2">
                <h1 className="font-heading text-2xl font-semibold text-right">
                    Always Improving
                </h1>
            </div>
        </div>
    );
};

export default CardAndRoadmap;
