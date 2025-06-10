const Saving: React.FC<{}> = ({}) => {
    return (
        <div className="flex flex-col gap-8 sm:gap-16 items-center px-10 lg:px-32 xl:px-48">
            <h1 className="font-heading text-center text-4xl font-semibold">
                Built to{" "}
                <span className="px-3 py-1 rounded-xl bg-pink">Boost</span> Your
                Savings
            </h1>
            <div className="flex flex-col gap-8 sm:gap-5 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                    <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col gap-3 justify-center md:pl-16 lg:pl-24 xl:pl-32">
                        <h2 className="text-xl font-heading text-center sm:text-right">
                            Automatic Savings
                        </h2>
                        <p className="text-center sm:text-right text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum perspiciatis soluta atque amet eius
                            odio, nihil facilis dolorum quasi quos?
                        </p>
                    </div>
                    <div className="w-4/5 sm:w-1/2 md:w-2/5 h-32 border-2 border-outline rounded-2xl bg-secondary"></div>
                </div>

                <div className="flex flex-col sm:flex-row-reverse items-center gap-5">
                    <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col gap-3 justify-center md:pr-16 lg:pr-24 xr:pl-32">
                        <h2 className="text-xl font-heading text-center sm:text-left">
                            4.15% Interest Rate
                        </h2>
                        <p className="text-center sm:text-left text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum perspiciatis soluta atque amet eius
                            odio, nihil facilis dolorum quasi quos?
                        </p>
                    </div>
                    <div className="w-4/5 sm:w-1/2 md:w-2/5 h-32 border-2 border-outline rounded-2xl bg-secondary"></div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                    <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col gap-3 justify-center md:pl-16 lg:pl-24 xl:pl-32">
                        <h2 className="text-xl font-heading text-center sm:text-right">
                            Save Together
                        </h2>
                        <p className="text-center sm:text-right text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum perspiciatis soluta atque amet eius
                            odio, nihil facilis dolorum quasi quos?
                        </p>
                    </div>
                    <div className="w-4/5 sm:w-1/2 md:w-2/5 h-32 border-2 border-outline rounded-2xl bg-secondary"></div>
                </div>
            </div>
        </div>
    );
};

export default Saving;
