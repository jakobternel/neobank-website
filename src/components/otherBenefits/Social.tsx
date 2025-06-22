const Social: React.FC<{}> = ({}) => {
    return (
        <div className="w-full border-2 border-outline rounded-xl p-10 flex gap-10">
            <div className="w-1/2 flex flex-col gap-5">
                <h2 className="font-heading text-xl font-semibold">
                    Social Benefits
                </h2>
                <p className="text-sm text-muted">
                    Banking isn't just about money — it's about connection. Our
                    app helps you share, save, and spend together, wherever you
                    are in the world. Whether it's helping out a mate or teaming
                    up on a shared goal, we're building tools that bring people
                    closer through smarter money habits.
                </p>
            </div>
            <div className="w-1/2 flex flex-col gap-5">
                <div className="flex gap-3">
                    <div className="h-8 flex">
                        <i className="fi fi-rs-heart-partner-handshake text-2xl text-cyan"></i>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg h-[32px]">Shared Accounts</p>
                        <p className="text-sm text-muted">Create pooled accounts with friends, partners, or travel groups for collective budgeting and spending.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="h-8 flex">
                        <i className="fi fi-rr-money-coin-transfer text-2xl text-cyan"></i>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg h-[32px]">Instant Peer-to-Peer Transfers</p>
                        <p className="text-sm text-muted">Send and receive money instantly to anyone on the app, no matter where they are.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="h-8 flex">
                        <i className="fi fi-rs-split text-2xl text-cyan"></i>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg h-[32px]">Split Bills Easily</p>
                        <p className="text-sm text-muted">Automatically split purchases or expenses across multiple users with just a tap.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Social;
