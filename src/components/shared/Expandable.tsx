import { useEffect, useRef, useState } from "react";

/**
 * Expandable section that displays additional text content when clicked on
 *
 * @param title Title of expandable section
 * @param content Text content to be displayed when section expanded
 */
const Expandable: React.FC<{ title: string; content: string }> = ({
    title,
    content,
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);

    const contentRef = useRef<HTMLDivElement>(null);

    // Set height of content element to content height when expanded. Set to 0 if not expanded. Transition handled using Tailwind transition
    useEffect(() => {
        if (expanded && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [expanded]);

    return (
        <div
            className="border-2 p-3 cursor-pointer border-outline rounded-xl flex flex-col bg-backgroundLighter"
            onClick={() => {
                setExpanded((prev) => !prev);
            }}
        >
            <div className="flex justify-between items-start">
                <p>{title}</p>
                <i
                    className={`fi ${
                        !expanded ? "fi-br-plus" : "fi-br-minus"
                    } pl-3 h-[24px]`}
                ></i>
            </div>
            <p
                ref={contentRef}
                style={{ maxHeight: `${height}px` }}
                className={`text-sm text-muted transition-all ease-in-out overflow-hidden ${
                    expanded ? "mt-3" : "mt-0"
                }`}
            >
                {content}
            </p>
        </div>
    );
};

export default Expandable;
