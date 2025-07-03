import { roadmapElements } from "../../static/roadmap";

/**
 * Roadmap item component to display on the roadmap
 *
 * @param month Month the roadmap feature was/will be released
 * @param year Year the roadmap feature was/will be released
 * @param title Short title of the roadmap feature
 * @param description Text description of the roadmap feature
 * @param rightAlign Specify whether the roadmap item should be aligned to the right on wide screens. If user is on mobile, all roadmap items are set to right-based
 * @param isLast Optional prop for specifying if roadmap item is the last to be shown. Will not generate line below year/month indicator if last in series
 */
const RoadmapItem: React.FC<{
    month: string;
    year: string;
    title: string;
    description: string;
    rightAlign: boolean;
    isLast?: boolean;
}> = ({ month, year, title, description, rightAlign, isLast }) => {
    return (
        <div
            className={`w-full h-30 flex ${
                rightAlign ? "md:flex-row-reverse" : ""
            }`}
        >
            <div className="flex-1">
                <div
                    className={`h-14 w-full flex items-center gap-3 ${
                        rightAlign ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                >
                    <p className="font-heading max-w-64 text-primary text-lg font-semibold break-words">
                        {title}
                    </p>
                    <div className="h-[1.5px] bg-primary flex-1"></div>
                </div>
                <div
                    className={`w-full h-10 overflow-visible ${
                        rightAlign ? "md:text-right md:pl-3" : "md:pr-3"
                    }`}
                >
                    <p className="text-sm text-muted">{description}</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary flex flex-col items-center justify-center">
                    <p className="font-heading text-xs">{year}</p>
                    <p className="font-heading text-xs">{month}</p>
                </div>
                {/* Do not generate bottom line if isLast is specified */}
                {!isLast && (
                    <div className="bg-muted w-[1.5px] h-20 md:h-10"></div>
                )}
            </div>
            <div className="flex-1 hidden md:block"></div>
        </div>
    );
};

/**
 * Component for displaying the feature roadmap including past and future feature releases
 */
const Roadmap: React.FC = () => {
    return (
        <div className="w-full flex-grow">
            <div className="h-96 md:h-72 relative">
                <div
                    className="absolute w-full h-6 top-0 z-20"
                    // Set shadow on top of roadmap component to smoothly fade out content on scroll
                    style={{
                        background:
                            "linear-gradient(0deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                    }}
                ></div>
                <div className="overflow-scroll scrollbar-hidden w-full h-full">
                    <div className="w-full h-12"></div>
                    {/* Create roadmap item component for each feature release based on information in roadmapElements file */}
                    {roadmapElements.map((roadmapContent, index) => {
                        return (
                            <RoadmapItem
                                key={index}
                                month={roadmapContent.month}
                                year={roadmapContent.year}
                                title={roadmapContent.title}
                                description={roadmapContent.description}
                                rightAlign={index % 2 === 0}
                                isLast={index + 1 === roadmapElements.length}
                            />
                        );
                    })}

                    <div className="w-full h-12"></div>
                </div>
                <div
                    className="absolute w-full h-6 bottom-0 z-20"
                    // Set shadow on bottom of roadmap component to smoothly fade out content on scroll
                    style={{
                        background:
                            "linear-gradient(180deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Roadmap;
