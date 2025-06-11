import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Saving from "./components/Saving";
import InternationalBenefits from "./components/InternationalBenefits";
import Crypto from "./components/Crypto";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Download from "./components/Download";
import Footer from "./components/Footer";

import { useAppSelector } from "./store/hooks";

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
                <Saving />
                <InternationalBenefits />
                <Crypto />
                <News />
                <FAQ />
                <Download />
                <Footer />
            </div>
        </div>
    );
}

export default App;
