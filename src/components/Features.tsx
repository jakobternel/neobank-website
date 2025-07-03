import FeatureCard from "./features/FeatureCard";

import { features, IFeature } from "../static/features";

/**
 * Element for key features included in the app
 */
const Features: React.FC = () => {
    return (
        <div className="w-full h-full -mt:-10 sm:-mt-20">
            <div className="flex h-full flex-col gap-12 items-center justify-around">
                <h1 className="font-heading text-4xl px-10 text-center">
                    Everything You Need, Nothing You Don't
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 justify-center">
                    {/* Create FeatureCard component for each element in features array */}
                    {features.map((feature: IFeature, index: number) => {
                        return (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Features;
