import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

import { useAppSelector } from "./store/hooks";
import InternationalBenefits from "./components/InternationalBenefits";

function App() {
    const theme = useAppSelector((state) => state.theme.mode);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <Navigation />
            <div className="flex flex-col gap-32">
                <Hero />
                <Features />
                <InternationalBenefits />
                <Footer />
            </div>
        </div>
    );
}

export default App;
