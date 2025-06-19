const Pricing: React.FC<{}> = ({}) => {
    return (
        <div className="px-5 sm:px-5 md:px-5 lg:px-20 xl:px-40 flex flex-col">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-backgroundLighter border-2 border-outline rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg flex flex-col gap-3 p-5">
                    <h2 className="font-heading text-xl font-bold">Nomad</h2>
                    <p className="font-semibold">Free Forever</p>
                    <p className="text-muted text-sm md:h-[120px] md:line-clamp-6 lg:h-[100px] lg:line-clamp-5 xl:h-20 xl:line-clamp-4">
                        Your passport to smarter spending. Get a multi-currency
                        account, fee-free ATM withdrawals (up to $300), and
                        real-time FX rates — all for free.
                    </p>
                    <div className="w-full border-t-2 border-outline flex flex-col gap-2 pt-5 mt-2">
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-wallet"></i>
                            <p className="text-sm text-muted">
                                Multi-currency account (up to 3 currencies)
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-deposit"></i>
                            <p className="text-sm text-muted">
                                Fee-free ATM withdrawals (up to $300/month)
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-hand-holding-usd"></i>
                            <p className="text-sm text-muted">
                                Instant peer-to-peer transfers
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-rr-exchange-alt"></i>
                            <p className="text-sm text-muted">
                                Real-time FX rates
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-sack-dollar"></i>
                            <p className="text-sm text-muted">
                                Budgeting tools
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-credit-card"></i>
                            <p className="text-sm text-muted">
                                Virtual debit card
                            </p>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="rounded-full flex justify-between border-2 border-outline py-2 px-4 mt-4 cursor-pointer hover:bg-backgroundLight bg-none transition-all">
                        <p className="font-heading text-sm">Get Started Free</p>
                        <i className="fi leading-none fi-rr-arrow-right items-center"></i>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-backgroundLight border-x-2 md:border-x-0 md:border-y-2 border-outline flex flex-col gap-3 p-5 relative">
                    <div className="hidden md:block absolute -top-[2px] -translate-y-full px-3 py-1 bg-primary left-0 rounded-t-xl font-heading">
                        Popular
                    </div>
                    <div className="flex flex-row gap-3">
                        <h2 className="font-heading text-xl font-bold">
                            Explorer
                        </h2>
                        <span className="block md:hidden px-3 py-1 rounded-full bg-primary text-sm font-medium">
                            Popular
                        </span>
                    </div>

                    <p className="font-semibold">$15/month</p>
                    <p className="text-muted text-sm md:h-[120px] md:line-clamp-6 lg:h-[100px] lg:line-clamp-5 xl:h-20 xl:line-clamp-4">
                        For frequent flyers and digital nomads. Enjoy higher ATM
                        limits, travel insurance, FX alerts, and priority
                        support to make the world your wallet.
                    </p>
                    <div className="w-full border-t-2 border-outline flex flex-col gap-2 pt-5 mt-2">
                        <p className="text-sm font-semibold pb-1">
                            All Nomad features, plus:
                        </p>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-wallet"></i>
                            <p className="text-sm text-muted">
                                Unlimited multi-currency wallets
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-deposit"></i>
                            <p className="text-sm text-muted">
                                Fee-free ATM withdrawals (up to $1000/month)
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-plane-departure"></i>
                            <p className="text-sm text-muted">
                                Travel insurance coverage
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-phone-call"></i>
                            <p className="text-sm text-muted">
                                Priority customer support
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-rr-exchange-alt"></i>
                            <p className="text-sm text-muted">
                                FX rate alerts & auto-conversion rules
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-star-christmas"></i>
                            <p className="text-sm text-muted">
                                Early access to new features
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-credit-card"></i>
                            <p className="text-sm text-muted">Custom debit card</p>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="rounded-full flex justify-between bg-primary py-2 px-4 mt-4 cursor-pointer hover:bg-primaryOff transition-all">
                        <p className="font-heading text-sm">
                            Upgrade to Explorer
                        </p>
                        <i className="fi leading-none fi-rr-arrow-right"></i>
                    </div>
                </div>
                <div className="w-full md:w-1/3 bg-backgroundLighter border-2 border-outline rounded-b-lg md:rounded-bl-none md:rounded-tr-xl flex flex-col gap-3 p-5">
                    <h2 className="font-heading text-xl font-bold">Pioneer</h2>
                    <p className="font-semibold">$25/month</p>
                    <p className="text-muted text-sm md:h-[120px] md:line-clamp-6 lg:h-[100px] lg:line-clamp-5 xl:h-20 xl:line-clamp-4">
                        Built for global pros. Unlock crypto staking, unlimited
                        withdrawals, investment tools, and AI-powered insights —
                        all in one powerful financial hub.
                    </p>
                    <div className="w-full border-t-2 border-outline flex flex-col gap-2 pt-5 mt-2">
                        <p className="text-sm font-semibold pb-1">
                            All Explorer features, plus:
                        </p>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-deposit"></i>
                            <p className="text-sm text-muted">
                                No ATM withdrawal limits
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-brands-bitcoin"></i>
                            <p className="text-sm text-muted">
                                Crypto wallet with staking & trading
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-dashboard-monitor"></i>
                            <p className="text-sm text-muted">
                                Smart investment dashboard
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-artificial-intelligence"></i>
                            <p className="text-sm text-muted">
                                AI-powered spending insights
                            </p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <i className="fi leading-none fi-sr-credit-card"></i>
                            <p className="text-sm text-muted">Metal debit card</p>
                        </div>
                    </div>
                    <div className="flex-grow"></div>
                    <div className="rounded-full flex justify-between border-2 border-outline py-2 px-4 mt-4 cursor-pointer hover:bg-backgroundLight bg-none transition-all">
                        <p className="font-heading text-sm">
                            Unlock Full Access
                        </p>
                        <i className="fi leading-none fi-rr-arrow-right items-center"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
