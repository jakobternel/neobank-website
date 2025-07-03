import { useState } from "react";

import Card from "./cardAndRoadmap/Card";
import Roadmap from "./cardAndRoadmap/Roadmap";

// Import card background overlays
const mapOverlay: string = require("../assets/cardOverlays/map.png");
const contourOverlay: string = require("../assets/cardOverlays/contour.png");
const circuitOverlay: string = require("../assets/cardOverlays/circuit.png");
const abstractOverlay: string = require("../assets/cardOverlays/abstract.png");
const linesOverlay: string = require("../assets/cardOverlays/lines.png");

/**
 * Element for displaying card customisation and feature roadmap
 */
const CardAndRoadmap: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<number>(0); // User-selected colour for card customisation
    const [selectedDesign, setSelectedDesign] = useState<any>(mapOverlay); // User-selected design for card customisation

    // Array of all card colour options
    const cardColors = ["#9448BC", "#00CC66", "#49BCFF", "#F75C03"];

    // Object containing all card background designs. Contains source of background overlay image and icon name to be displayed on button
    const cardDesigns = [
        { image: mapOverlay, icon: "fi-rr-earth-americas" },
        { image: contourOverlay, icon: "fi-br-1" },
        { image: circuitOverlay, icon: "fi-br-2" },
        { image: abstractOverlay, icon: "fi-br-3" },
        { image: linesOverlay, icon: "fi-br-4" },
    ];

    return (
        <div className="flex gap-5 w-full flex-col md:flex-row px-5 lg:px-20 xl:px-40">
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
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-5">
                    <div className="order-2 sm:order-1 flex flex-row sm:flex-col gap-2 justify-center">
                        {/* Create a button for each colour specified in cardColors array */}
                        {cardColors.map((color, index) => {
                            return (
                                <div
                                    className="h-7 w-7 rounded-full border-[1px] flex justify-center items-center border-outline cursor-pointer"
                                    key={index}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(index)} // Change selectedColor state when button clicked by user
                                >
                                    {/* Apply tick to button if colour is currently selected */}
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
                    <div className="order-1 sm:order-2 h-min w-min overflow-hidden flex justify-center items-center">
                        <Card
                            color={cardColors[selectedColor]}
                            design={selectedDesign}
                        />
                    </div>
                    <div className="order-3 flex flex-row sm:flex-col gap-2 justify-center">
                        {/* Create a button for each card background design specified in cardDesigns array */}
                        {Object.values(cardDesigns).map((cardDesign, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`h-7 w-12 rounded-lg border-[1px] border-outline cursor-pointer flex justify-center items-center transition-all ${
                                        // Change background for currently selected design button
                                        selectedDesign === cardDesign.image
                                            ? "bg-backgroundLight"
                                            : "bg-backgroundLighter"
                                    }`}
                                    onClick={
                                        () =>
                                            setSelectedDesign(cardDesign.image) // Change selectedDesign state if button clicked
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
            <div className="w-full md:w-1/2 flex flex-col gap-3 py-5">
                <h1 className="font-heading text-2xl font-semibold text-left md:text-right">
                    Always Improving
                </h1>
                <p className="block md:hidden text-muted text-sm">
                    We're constantly updating the app to bring you smoother
                    payments, smarter budgeting, tighter security, and better
                    ways to grow your money. New tools drop often — so banking
                    with us only gets better.
                </p>
                <Roadmap />
            </div>
        </div>
    );
};

export default CardAndRoadmap;
