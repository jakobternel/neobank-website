const NewsItem: React.FC<{ title: string; content: string; image: string }> = ({
    title,
    content,
    image,
}) => {
    return (
        <div className="group bg-backgroundLight border-2 border-outline rounded-xl flex flex-row gap-3 p-2 shadow-md cursor-pointer hover:scale-[1.025] hover:shadow-xl transition-all">
            <div className="w-1/3">
                <img
                    className="rounded-lg w-full h-full object-cover"
                    src={image}
                    alt="image"
                />
            </div>
            <div className="flex flex-col gap-1 py-2 pr-2 w-2/3">
                <h2 className="font-heading text-md font-semibold">{title}</h2>
                <p className="text-sm line-clamp-3">{content}</p>
                <span className="flex-grow"></span>
                <span className="text-sm inline-flex items-center gap-1 *:!text-darker *:transition-all">
                    <p className="group-hover:!text-main">Read Full Article</p>
                    <i className="fi fi-rr-arrow-small-right group-hover:!text-main"></i>
                </span>
            </div>
        </div>
    );
};

export default NewsItem;
