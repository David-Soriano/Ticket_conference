export function Header() {
    return (
        <header className="flex justify-between items-center w-full sm:h-22 sm:mb-5">
            <div>
                <picture>
                    <img className="relative -top-6 -left-4 w-26 sm:w-40 sm:left-8 sm:-top-15 sm:absolute" src="/assets/images/pattern-circle.svg" alt="pattern-circle" />
                </picture>
            </div>
            <div><picture>
                <img className="w-40 sm:w-44" src="../../assets/images/logo-full.svg" alt="Logo_coding_form" />
            </picture></div>
            <div>
                <picture>
                    <img className="w-24 sm:absolute sm:right-0 sm:top-18 sm:w-[30%]" src="/assets/images/pattern-squiggly-line-top.svg" alt="pattern-circle" />
                </picture>
            </div>
        </header>
    );
}