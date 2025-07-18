import React from "react";
import { useRef, useEffect, useState } from "react";
import {
    XAxis,
    CartesianGrid,
    ResponsiveContainer,
    AreaChart,
    Area,
    Tooltip,
} from "recharts";

import { stocks, crypto, etfs } from "../../static/investments"; // Import example arrays of stocks, crypto, etfs which can be invested on platform. Used on scrolling ticker tape
import { useAppSelector } from "../../store/hooks";

/**
 * Element for scrolling ticker tape showing examples of securities that can be invested in
 *
 * @param data Array of strings containing the names of securities for a given investment class
 * @param reversed Optional parameter for specifying if the ticker should play in reverse. By default, will scroll from right to left <-. If reversed is set to true, will go from left to right ->
 */
const TextScrolling: React.FC<{ data: string[]; reversed?: boolean }> = ({
    data,
    reversed,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0); // Width of scrolling ticker tape element once populated with data. Used to ensure smooth transition through all tickers/names

    // Get width of ticker tape element with data
    useEffect(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.offsetWidth);
        }
    }, [data]);

    return (
        <div className="relative w-full overflow-hidden cursor-default">
            <div
                className={`flex hover:[animation-play-state:paused] ${
                    reversed ? "animate-scrollReverse" : "animate-scroll"
                }`}
                style={{
                    animationDuration: `${contentWidth / 50}s`,
                    width: contentWidth ? `${contentWidth * 2}px` : "auto",
                }}
            >
                {/* Duplicate ticker tape to ensure smooth animation/looping */}
                {[...Array(2)].map((_: undefined, tapeIndex: number) => {
                    return (
                        <div
                            ref={tapeIndex === 0 ? contentRef : null} // Only apply contentRef for width calculation on the first ticker tape
                            className="flex shrink-0 whitespace-nowrap"
                        >
                            {/* Generate div element for each ticker/name in data array */}
                            {data.map((name, index) => (
                                <div
                                    key={`${tapeIndex}-${index}`}
                                    className="flex items-center"
                                >
                                    <p className="text-xs text-darker">
                                        {name}
                                    </p>
                                    <p className="px-1 text-sm text-muted">•</p>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * Investing benefits component to be used in OtherBenefits element and shown on button click
 */
const Investing: React.FC = () => {
    const theme = useAppSelector((state) => state.theme.mode); // Get current user theme from Redux state. Used for changing the colour of recharts graph elements

    // Data to be used in recharts graph
    const data = [
        { month: "Jan", value: 5000 },
        { month: "Feb", value: 5400 },
        { month: "Mar", value: 5800 },
        { month: "Apr", value: 6300 },
        { month: "May", value: 7200 },
        { month: "Jun", value: 6900 },
        { month: "Jul", value: 7500 },
        { month: "Aug", value: 8100 },
        { month: "Sep", value: 8700 },
        { month: "Oct", value: 9100 },
        { month: "Nov", value: 9700 },
        { month: "Dec", value: 10200 },
    ];

    return (
        <div className="w-full border-2 border-outline rounded-xl p-5 md:p-10 flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2 flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-5">
                    <h2 className="font-heading text-xl font-semibold">
                        Investing Benefits
                    </h2>
                    <p className="text-sm text-muted">
                        Start building your wealth with commission-free
                        investing in stocks, crypto, and ETFs — all in one
                        seamless platform.
                    </p>
                </div>
                <div className="w-full h-56">
                    {/* Create recharts responsive container that takes up full space available from parent div */}
                    <ResponsiveContainer width="100%" height="100%">
                        {/* Create area chart setting horizontal margin to 20 to allow for XAxis label overflow */}
                        <AreaChart data={data} margin={{ right: 20, left: 20 }}>
                            <defs>
                                {/* Linear gradient to appear below line */}
                                <linearGradient
                                    id="color"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#92cf30"
                                        stopOpacity={0.75}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#92cf30"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            {/* XAxis labels to show below graph */}
                            <XAxis
                                dataKey="month"
                                stroke={
                                    theme === "dark" ? "#475569" : "#94a3b8"
                                }
                            />
                            {/* Grid background on graph */}
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke={
                                    theme === "dark" ? "#475569" : "#94a3b8"
                                }
                            />
                            {/* Handles line that shows when hovering over graph */}
                            <Tooltip
                                content={() => null} // Set to null to remove info box that appears on graph hover
                                cursor={{
                                    stroke:
                                        theme === "dark"
                                            ? "#f1f5f9"
                                            : "#0d1b2a",
                                    strokeWidth: 1,
                                }}
                            />
                            {/* Graph to be shown based on data variable */}
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#92cf30"
                                strokeWidth={2}
                                fill="url(#color)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3 justify-between">
                <div className="flex flex-col gap-2 relative">
                    <div
                        className="absolute w-10 h-full -left-1 bottom-0 z-20"
                        style={{
                            background:
                                "linear-gradient(270deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                        }}
                    ></div>
                    <div className="w-full h-6">
                        <TextScrolling data={stocks} />
                    </div>
                    <div className="w-full h-6">
                        <TextScrolling data={crypto} reversed={true} />
                    </div>
                    <div className="w-full h-6">
                        <TextScrolling data={etfs} />
                    </div>
                    <div
                        className="absolute w-10 h-full -right-1 bottom-0 z-20"
                        style={{
                            background:
                                "linear-gradient(90deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                        }}
                    ></div>
                </div>
                <div className="w-full h-min grid grid-cols-2 grid-rows-2 gap-3">
                    <div className="col-span-2 bg-backgroundLight rounded-lg flex py-5 md:p-5">
                        <div className="w-1/3 h-full flex flex-col gap-3 items-center justify-center">
                            <i className="fi fi-rr-growth-chart-invest p-3 text-xl rounded-md bg-opacity-25 bg-fuchsia-500 text-fuchsia-500"></i>
                            <p className="font-heading text-xl font-bold">
                                Stocks
                            </p>
                        </div>
                        <div className="w-1/3 h-full flex flex-col gap-3 items-center justify-center border-x-2 border-outline">
                            <i className="fi fi-brands-bitcoin p-3 text-xl rounded-md bg-opacity-25 bg-sky-500 text-sky-500"></i>
                            <p className="font-heading text-xl font-bold">
                                Crypto
                            </p>
                        </div>
                        <div className="w-1/3 h-full flex flex-col gap-3 items-center justify-center">
                            <i className="fi fi-rr-budget p-3 text-xl rounded-md bg-opacity-25 bg-emerald-500 text-emerald-500"></i>
                            <p className="font-heading text-xl font-bold">
                                ETFs
                            </p>
                        </div>
                    </div>
                    <div className="h-full bg-backgroundLight rounded-lg flex flex-col justify-center items-center gap-2 p-3 py-5">
                        <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                            400,000+
                        </p>
                        <p className="text-xs text-center text-darker">
                            Whether it's stocks, ETFs, or crypto, our global
                            community is growing fast — and so are their
                            portfolios.
                        </p>
                    </div>
                    <div className="h-full bg-backgroundLight rounded-lg flex flex-col justify-center items-center gap-2 px-3 py-5">
                        <p className="font-heading text-2xl md:text-3xl font-bold text-primary">
                            $0
                        </p>
                        <p className="text-xs text-center text-darker">
                            We don't charge commission or hidden fees, so every
                            dollar you invest works harder for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investing;
