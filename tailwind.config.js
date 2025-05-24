module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                main: ["Inter", "sans-serif"],
                heading: ["Space Grotesk", "sans-serif"],
            },
            colors: {
                background: "#0D1B2A",
                secondary: "#1E293B",
                backgroundLight: "#263144",
                outline: "#334155",

                primary: "#2563EB",
                primaryOff: "#1E4FDB",

                light: "#F1F5F9",
                darker: "#CBD5E1",
                muted: "#94A3B8",

                lime: "#A3E635",
                pink: "#F472B6",
                cyan: "#06B6D4",
            },
        },
    },
    plugins: [],
};