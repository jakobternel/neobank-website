import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import InternationalBenefits from "./components/InternationalBenefits";
import Crypto from "./components/Crypto";
import Footer from "./components/Footer";

import { useAppSelector } from "./store/hooks";
import News from "./components/News";

function App() {
    const theme = useAppSelector((state) => state.theme.mode);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            {/*  className="breakpointDev" */}
            <Navigation />
            <div className="flex flex-col gap-32">
                <Hero />
                <Features />
                <InternationalBenefits />
                <Crypto />
                <News />
                <Footer />
            </div>
        </div>
    );
}

export default App;
