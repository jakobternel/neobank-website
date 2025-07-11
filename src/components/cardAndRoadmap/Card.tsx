import hexRgb from "hex-rgb";

const icon = require("../../assets/logo_white.png");

/**
 * Custom bank card generator
 *
 * @param color User-selected colour in HEX format
 * @param design Source of background image file selected by user
 */
const Card: React.FC<{ color: string; design: string }> = ({
    color,
    design,
}) => {
    // Convert HEX colour input to RGBA to allow transparency to be applied to card colour overlay
    const hexToRgb = (input: string, alpha?: number): string => {
        const rgb = hexRgb(input);

        return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha || 1})`;
    };

    return (
        <div className="aspect-[16/10] min-w-[20rem] rounded-2xl backdrop-blur-md bg-gray-700 scale-100 md:scale-[75%] lg:scale-100">
            <div
                className="p-5 flex flex-col border-2 rounded-2xl relative transition-all h-full w-full"
                style={{
                    backgroundColor: hexToRgb(color, 0.5), // Allow backgroundColor to be updated if color prop changes
                    borderColor: hexToRgb(color, 1), // Allow borderColor to be updated if color prop changes
                }}
            >
                <img
                    src={design}
                    alt="map"
                    className="absolute object-cover rounded-2xl top-0 left-0 w-full h-full opacity-15 z-10"
                    style={{
                        filter: `brightness(0) invert(0)`,
                    }}
                />
                <div className="flex flex-row justify-between z-20">
                    <div className="flex flex-row items-center gap-4">
                        <img src={icon} alt="logo" className="h-8" />
                        <p className="font-heading font-extrabold text-xl text-white">
                            Nomadix
                        </p>
                    </div>
                    <img
                        src="https://companieslogo.com/img/orig/MA.W-bcf56912.png"
                        alt="mastercard"
                        className="h-8"
                    />
                </div>
                <div className="flex-grow"></div>
                <div className="mb-3 z-20">
                    <p className="font-mono font-extrabold text-white">
                        1234 5678 1234 5678
                    </p>
                </div>
                <div className="flex flex-row z-20">
                    <div className="w-1/2 flex flex-col gap-1">
                        <p className="font-light text-white text-xs">
                            Cardholder
                        </p>
                        <p className="font-bold text-white text-sm">
                            John Smith
                        </p>
                    </div>
                    <div className="w-1/2 flex flex-col gap-1">
                        <p className="font-light text-white text-xs">
                            Expiry Date
                        </p>
                        <p className="font-bold text-white text-sm">12/2027</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
