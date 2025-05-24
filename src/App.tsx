import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "light");
    }, []);

    return (
        <>
            <Navigation />
            <Hero />
            <Features />
        </>
    );
}

export default App;
