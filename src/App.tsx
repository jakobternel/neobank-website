import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "light");
    }, []);

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
