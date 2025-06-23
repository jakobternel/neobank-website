const Shopping: React.FC<{}> = ({}) => {
    return (
        <div className="w-full border-2 border-outline rounded-xl p-10 flex gap-10">
            <div className="w-full flex flex-col gap-5">
                <h2 className="font-heading text-xl font-semibold">
                    Shopping Benefits
                </h2>
                <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-cyan"></div>
                    <div className="flex-grow bg-cyanDarker h-1"></div>
                    <div className="w-4 h-4 rounded-full bg-cyan"></div>
                    <div className="flex flex-grow relative">
                        <i className="fi fi-sr-shopping-cart absolute left-1/2 -translate-y-1/2 top-1/2 bg-main text-secondary p-2 rounded-full"></i>
                        <div className="w-1/2 bg-cyanDarker h-1"></div>
                        <div className="w-1/2 bg-outline h-1"></div>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-cyan"></div>
                </div>
                <div className="flex gap-10">
                    <div className="w-1/3 flex flex-col gap-3">
                        <h3 className="font-heading">Save with Goals</h3>
                        <p className="text-xs text-muted">
                            Plan your purchases by setting saving goals for
                            specific items. Whether it's a new laptop or holiday
                            gifts, you can monitor progress and stay motivated
                            as you save toward what matters most.
                        </p>
                        <div className="flex-grow"></div>
                        <div className="w-full h-32 bg-backgroundLighter rounded-lg border-2 border-outline"></div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-3 text-center">
                        <h3 className="font-heading">
                            Automatic Price Tracking
                        </h3>
                        <p className="text-xs text-muted">
                            Never miss a deal again. Our system monitors prices
                            in real-time, alerting you the moment an item drops
                            — so you can buy at the right time without
                            constantly checking back.
                        </p>
                        <div className="flex-grow"></div>
                        <div className="w-full h-32 bg-backgroundLighter rounded-lg border-2 border-outline"></div>
                    </div>
                    <div className="w-1/3 flex flex-col gap-3 text-right">
                        <h3 className="font-heading">Fast & Secure Checkout</h3>
                        <p className="text-xs text-muted">
                            Enjoy peace of mind with encrypted payments and
                            one-tap checkout. Your personal and payment
                            information is protected, so you can shop
                            confidently, every time.
                        </p>
                        <div className="flex-grow"></div>
                        <div className="w-full h-32 bg-backgroundLighter rounded-lg border-2 border-outline"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;
