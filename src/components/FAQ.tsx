import Expandable from "./shared/Expandable";

import { faqInformation } from "../static/faq";

const FAQ: React.FC<{}> = ({}) => {
    return (
        <div className="px-5 sm:px-10 md:px-20 lg:px-40 flex flex-col gap-3 items-center">
            <h1 className="text-4xl font-bold font-heading text-center">
                Frequently Asked Questions
            </h1>
            <p className="text-muted text-center">
                Find quick answers to common questions about using Nomadix
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {/* Create two div flex children for left and right sides when viewing on large screen */}
                {[...Array(2)].map((_: undefined, colNum: number) => {
                    return (
                        <div className="flex flex-col gap-3" key={colNum}>
                            {/* Populate div flex elements with Expandable components. Get total length of FAQ items, divide by 2 and use Math.floor on result to ensure boxes only added when review exists for left and right side parent divs. I.e., a review does not show on the left if there is no review on the right */}
                            {[
                                ...Array(Math.floor(faqInformation.length / 2)),
                            ].map((_: undefined, index: number) => {
                                return (
                                    <Expandable
                                        key={`${colNum}-${index}`}
                                        // Index faqInformation by adding colNum with calculated index multiplied by 2. E.g., for first element in array to be displayed on first row in first column, colNum is 0 and index is 0. 0+0*2 = 0. For second FAQ box on right side, colNum is 1 and index is 0. 1+0*2 = 1. Third box on first col and second row is 0+1*2 = 2. Fourth box: 1+1*2 = 3
                                        title={
                                            faqInformation[colNum + index * 2]
                                                .title
                                        }
                                        content={
                                            faqInformation[colNum + index * 2]
                                                .content
                                        }
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
