module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    plugins: [require("@tailwindcss/line-clamp")],
    theme: {
        extend: {
            fontFamily: {
                main: ["Inter", "sans-serif"],
                heading: ["Space Grotesk", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                backgroundLighter: "var(--backgroundLighter)",
                backgroundLight: "var(--backgroundLight)",
                outline: "var(--outline)",
                secondary: "var(--secondary)",

                primary: "var(--primary)",
                primaryOff: "var(--primaryOff)",

                main: "var(--main)",
                darker: "var(--darker)",
                muted: "var(--muted)",

                lime: "#a3e635",
                limeDarker: "#92cf30",
                pink: "#f472b6",
                pinkDarker: "#dc66a3",
                cyan: "#06b6d4",
                cyanDarker: "#059fbb",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                scrollReverse: {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                scroll: "scroll 5s linear infinite",
                scrollReverse: "scrollReverse 5s linear infinite",
            },
        },
    },
    plugins: [],
};
