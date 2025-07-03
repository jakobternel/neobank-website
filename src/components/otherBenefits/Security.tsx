/**
 * Text box component that animates title and content on hover. Initial title will slide up to reveal content in div
 *
 * @param title Title to be shown on initial view
 * @param content Content to be revealed on hover
 * @param icon Icon to be shown on initial view
 */
const TextBox: React.FC<{
    title: string;
    content: string;
    icon: string;
}> = ({ title, content, icon }) => {
    return (
        <div className="h-32 bg-backgroundLighter border-2 border-outline rounded-lg group overflow-hidden">
            <div className="h-full w-full flex flex-col gap-3 items-center justify-center relative group-hover:-translate-y-full transition-all ease-in-out p-5">
                <i className="fi fi-br-info absolute right-3 top-3"></i>
                <i
                    className={`fi ${icon} p-3 text-xl rounded-md bg-opacity-25 bg-sky-500 text-sky-500`}
                ></i>
                <p className="text-center text-sm md:text-md">{title}</p>
            </div>
            <div className="h-full w-full group-hover:-translate-y-full overflow-hidden transition-all ease-in-out flex items-center justify-center p-5">
                <p className="text-xs md:text-[8px] lg:text-xs text-muted text-center">
                    {content}
                </p>
            </div>
        </div>
    );
};

/**
 * Security benefits component to be used in OtherBenefits element and shown on button click
 */
const Security: React.FC = () => {
    return (
        <div className="w-full border-2 border-outline rounded-xl p-5 md:p-10 flex flex-col gap-10">
            <div className="w-full flex flex-col gap-5">
                <h2 className="font-heading text-xl font-semibold">
                    Security Benefits
                </h2>
                <p className="text-sm text-muted">
                    Security is built into every feature of our app — from
                    account setup to goal tracking, payments, and beyond. We
                    protect your information so you can focus on what matters,
                    with total peace of mind.
                </p>
            </div>
            <div className="w-full grid grid-rows-4 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-5">
                <TextBox
                    title="End-to-End Encryption"
                    content="All your personal data, preferences, and financial activity are securely encrypted — whether you're browsing, saving, or checking out."
                    icon="fi-rs-binary-lock"
                />
                <TextBox
                    title="Intelligent Threat Detection"
                    content="Our systems monitor for unusual activity in real time, flagging anything suspicious and keeping your account safe at all times."
                    icon="fi-rs-problem-solving"
                />
                <TextBox
                    title="Privacy-First Design"
                    content="We collect only what's necessary to run the app — and never share or sell your data. Your privacy isn't just a feature; it's a foundation."
                    icon="fi-rs-user-lock"
                />
                <TextBox
                    title="Biometric Authentication"
                    content="Biometric login adds a powerful extra layer of protection — ensuring only you can access your account, even if your device is lost or stolen."
                    icon="fi-rs-face-viewfinder"
                />
            </div>
        </div>
    );
};

export default Security;
