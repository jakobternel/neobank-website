module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        },
    },
    plugins: [],
};