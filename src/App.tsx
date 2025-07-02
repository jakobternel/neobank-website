import { useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Saving from "./components/Saving";
import InternationalBenefits from "./components/InternationalBenefits";
import Crypto from "./components/Crypto";
import OtherBenefits from "./components/OtherBenefits";
import News from "./components/News";
import CardAndRoadmap from "./components/CardAndRoadmap";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
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
            <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-28 xl:gap-32">
                <Hero />
                <Features />
                <Saving />
                <InternationalBenefits />
                <Crypto />
                <OtherBenefits />
                <News />
                <CardAndRoadmap />
                <Pricing />
                <Reviews />
                <FAQ />
                <Download />
                <Footer />
            </div>
        </div>
    );
}

export default App;
