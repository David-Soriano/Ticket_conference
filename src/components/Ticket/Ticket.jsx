import { DecorMiddle } from "../DecorMiddle/DecorMiddle";
export function Ticket({ nombre, github, avatar }) {
    return (
        <section className="grid grid-rows-2 grid-cols-4 gap-5 bg-[url('/public/assets/images/pattern-ticket.svg')] bg-contain bg-no-repeat h-33 m-5 mt-15 p-3 relative z-30 text-Neutral-0 sm:w-2/5 sm:h-[41vh] sm:mt-24 sm:mb-40 sm:p-6">
            <DecorMiddle className="top-1/2 left-[88%] -translate-y-1/2 -z-10 pointer-events-none" styles={{ clipPath: 'inset(0 0 0 33%)' }}/>
            <div className="row-start-1 row-end-2 col-start-1 col-end-4 flex gap-3">
                <div>
                    <img className="w-6 sm:w-8" src="/public/assets/images/logo-mark.svg" alt="logo-mark" />
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl leading-3.5 font-medium sm:text-4xl sm:font-bold sm:leading-5">Coding Conf</h3>
                    <p className="font-light text-xs sm:text-xl">Jan 31, 2025 / Austin, TX</p>
                </div>
            </div>
            <div className="row-start-2 row-end-3 col-start-1 col-end-4 flex gap-3">
                <div className="flex items-center">
                    <img className="size-9.5 sm:size-15 rounded-md overflow-hidden" src={avatar || "/public/assets/images/icon-info.svg"} alt="" />
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <h4 className="leading-3.5 sm:leading-4 sm:text-3xl">{nombre || "Invitado"}</h4>
                    <div className="flex gap-1">
                        <img className="w-3.5 sm:w-5.5" src="/public/assets/images/icon-github.svg" alt="Icon_GitHub" />
                        <p className="text-xs sm:text-lg font-light">@{github || "youruser"}</p>
                    </div>
                </div>
            </div>
            <div className="row-start-1 row-end-3 flex items-center relative">
                <p className="rotate-90 h-fit font-light text-Neutral-0/50">#01609</p>
            </div>
        </section>
    );
}