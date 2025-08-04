export function Ticket() {
    return (
        <section className="grid grid-rows-2 grid-cols-4 gap-5 bg-[url('/public/assets/images/pattern-ticket.svg')] bg-contain bg-no-repeat h-33 m-5 mt-15 p-3 relative text-Neutral-0">
            <div className="row-start-1 row-end-2 col-start-1 col-end-4 flex gap-3">
                <div className="">
                    <img className="w-6" src="/public/assets/images/logo-mark.svg" alt="logo-mark" />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl leading-3.5 font-medium">Coding Conf</h3>
                    <p className="font-light text-xs">Jan 31, 2025 / Austin, TX</p>
                </div>
            </div>
            <div className="row-start-2 row-end-3 col-start-1 col-end-4 flex gap-3">
                <div>
                    <img className="size-9.5 rounded-md overflow-hidden" src="/public/assets/images/image-avatar.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <h4 className="leading-3.5">Jonatan Kristof</h4>
                    <div className="flex gap-1">
                        <img className="w-3.5" src="/public/assets/images/icon-github.svg" alt="Icon_GitHub" />
                        <p className="text-xs font-light">@jonatankristof0101</p>
                    </div>
                </div>
            </div>
            <div className="row-start-1 row-end-3 flex items-center relative">
                <p className="rotate-90 h-fit font-light text-Neutral-0/50">#01609</p>
            </div>
        </section>
    );
}