export function Header() {
    return (
        <header className="flex justify-between items-center">
            <div>
                <picture className="">
                    <img className="relative -top-6 -left-4 w-26" src="/public/assets/images/pattern-circle.svg" alt="pattern-circle" />
                </picture>
            </div>
            <div><picture>
                <img className="w-40" src="../../assets/images/logo-full.svg" alt="Logo_coding_form" />
            </picture></div>
            <div>
                <picture>
                    <img className="w-24" src="/public/assets/images/pattern-squiggly-line-top.svg" alt="pattern-circle" />
                </picture>
            </div>
        </header>
    );
}