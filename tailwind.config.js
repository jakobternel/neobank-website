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
                secondary: "var(--secondary)",
                backgroundLight: "var(--backgroundLight)",
                outline: "var(--outline)",

                primary: "var(--primary)",
                primaryOff: "var(--primaryOff)",

                main: "var(--main)",
                darker: "var(--darker)",
                muted: "var(--muted)",

                lime: "var(--lime)",
                pink: "var(--pink)",
                cyan: "var(--cyan)",
            },
        },
    },
    plugins: [],
};