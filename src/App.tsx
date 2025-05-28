import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

import { useAppSelector } from "./store/hooks";

function App() {
    const theme = useAppSelector((state) => state.theme.mode);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <>
            <Navigation />
            <Hero />
            <Features />
            <Footer />
        </>
    );
}

export default App;
