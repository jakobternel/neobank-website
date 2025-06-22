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

                secondary: "var(--secondary)",
                outline: "var(--outline)",

                primary: "var(--primary)",
                primaryOff: "var(--primaryOff)",

                main: "var(--main)",
                darker: "var(--darker)",
                muted: "var(--muted)",

                lime: "var(--lime)",
                limeDarker: "var(--limeDarker)",
                pink: "var(--pink)",
                pinkDarker: "var(--pinkDarker)",
                cyan: "var(--cyan)",
                cyanDarker: "var(--cyanDarker)",
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
