import hexRgb from "hex-rgb";

const icon = require("../../assets/logo_white.png");

const Card: React.FC<{ color: string; design: any }> = ({
    color,
    design,
}) => {
    const hexToRgb = (input: string, alpha?: number): string => {
        const rgb = hexRgb(input);

        return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${alpha || 1})`;
    };

    return (
        <div className="w-[20rem] h-[12.61rem] rounded-2xl backdrop-blur-md bg-gray-700">
            <div
                className="p-5 flex flex-col border-2 rounded-2xl relative transition-all h-full w-full"
                style={{
                    backgroundColor: hexToRgb(color, 0.5),
                    borderColor: hexToRgb(color, 1),
                }}
            >
                <img
                    src={design}
                    alt="map"
                    className="absolute object-cover top-0 left-0 w-full h-full opacity-15 z-10"
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
