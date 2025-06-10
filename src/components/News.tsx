import NewsItem from "./blog/NewsItem";

const News: React.FC<{}> = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-between px-5 sm:px-10 md:px-5 lg:px-16 xl:px-20">
            <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col gap-5 justify-center">
                <h1 className="font-heading text-4xl font-semibold">
                    Blog & News
                </h1>
                <p>
                    Stay informed with the latest updates from our team,
                    including product improvements, feature rollouts, and
                    insights into the technology shaping our platform. From
                    behind-the-scenes development to upcoming launches, our news
                    section keeps you connected with what's new and what's next.
                </p>
                <p className="w-fit px-6 text-sm py-3 bg-primaryOff hover:bg-primary transition-colors cursor-pointer rounded-xl">
                    Read More
                </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                <NewsItem
                    title="Gen Z Leads the Rise in Micro-Investing Apps"
                    content="New research shows that Gen Z investors are embracing micro-investing platforms more than any other age group. With tools like round-ups and automatic contributions, small investments are adding up to big portfolio gains."
                    image="https://images.pexels.com/photos/17781649/pexels-photo-17781649/free-photo-of-man-looking-at-the-stock-charts-on-the-phone-and-tablet.jpeg"
                />
                <NewsItem
                    title="Top Budgeting Mistakes People Make in 2025"
                    content="Despite the growing popularity of budgeting apps, many users still fall into common traps—like underestimating irregular expenses or forgetting to review their spending habits monthly. Experts share tips for getting back on track."
                    image="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg"
                />
            </div>
        </div>
    );
};

export default News;
