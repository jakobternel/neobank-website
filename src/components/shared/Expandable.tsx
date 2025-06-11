import { useEffect, useRef, useState } from "react";

const Expandable: React.FC<{ title: string; content: string }> = ({
    title,
    content,
}) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [height, setHeight] = useState<number>(0);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (expanded && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [expanded]);

    return (
        <div
            className="border-2 p-3 cursor-pointer border-outline rounded-xl flex flex-col"
            onClick={() => {
                setExpanded((prev) => !prev);
            }}
        >
            <div className="flex justify-between align-middle">
                <p>{title}</p>
                <i
                    className={`fi ${
                        !expanded ? "fi-br-plus" : "fi-br-minus"
                    } self-center pl-3`}
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
