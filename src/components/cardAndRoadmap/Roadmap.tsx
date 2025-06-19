import { roadmapElements } from "../../static/roadmap";

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
                        rightAlign ? "md:text-right pl-3" : "pr-3"
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
                {!isLast && (
                    <div className="bg-muted w-[1.5px] h-20 md:h-10"></div>
                )}
            </div>
            <div className="flex-1 hidden md:block"></div>
        </div>
    );
};

const Roadmap: React.FC<{}> = ({}) => {
    return (
        <div className="w-full flex-grow">
            <div className="h-96 md:h-72 relative">
                <div
                    className="absolute w-full h-6 top-0 z-20"
                    style={{
                        background:
                            "linear-gradient(0deg, var(--shadowTransparent) 0%, var(--shadowSolid) 100%)",
                    }}
                ></div>
                <div className="overflow-scroll scrollbar-hidden w-full h-full">
                    <div className="w-full h-12"></div>
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
