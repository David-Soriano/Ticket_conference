import { DecorMiddle } from "../DecorMiddle/DecorMiddle";

export function Ticket({ nombre, github, avatar }) {
    const fecha = new Date();
    const hora = String(fecha.getHours());
    const minuto = String(fecha.getMinutes()).padStart(2, "0"); 
    const dia = String(fecha.getDate()).padStart(2, "0");

    const idTicket = `${hora}${minuto}${dia}`;
    return (
        <section className="relative w-11/12 sm:w-2/3 xl:w-[45%] h-auto  my-15 xl:mt-24 xl:mb-40 overflow-hidden rounded-xl text-Neutral-0 section-ticket">

            {/* Fondo como imagen */}
            <img
                src="/assets/images/pattern-ticket.svg"
                alt="ticket background"
                className="absolute inset-0 w-full h-full object-contain z-0"
            />

            {/* Decoración lateral */}
            <DecorMiddle
                className="absolute top-1/2 -right-[24%] -translate-y-1/2 pointer-events-none z-0"
                styles={{ clipPath: 'inset(0 0 0 33%)' }}
            />

            {/* Contenido */}
            <div className="relative z-10 flex justify-between items-center h-full p-3 lg:p-6">

                {/* Columna izquierda */}
                <div className="flex flex-col justify-between h-full ticket-col-izq">

                    {/* Logo + Info del evento */}
                    <div className="flex gap-3 items-start container_cod-conf ">
                        <img
                            className="w-7 sm:w-10 lg:w-12 cod-conf--img"
                            src="/assets/images/logo-mark.svg"
                            alt="logo-mark"
                        />
                        <div className="flex flex-col gap-3 xl:gap-5 cod-conf--text">
                            <h3 className="text-xl font-medium leading-3.5 sm:text-4xl md:leading-6 lg:text-5xl xl:text-[40px] xl:font-bold lg:leading-7">
                                Coding Conf
                            </h3>
                            <p className="text-xs font-light sm:text-xl lg:text-2xl">
                                Jan 31, 2025 / Austin, TX
                            </p>
                        </div>
                    </div>

                    {/* Avatar + GitHub */}
                    <div className="flex gap-3">
                        <img
                            className="avatar size-11 sm:size-18 lg:size-20 rounded-md overflow-hidden"
                            src={avatar || "/assets/images/icon-info.svg"}
                            alt="avatar"
                        />
                        <div className="flex flex-col justify-center gap-1 lg:gap-3">
                            <h4 className="leading-3.5 sm:text-2xl lg:text-3xl lg:leading-4 txt-invitado">
                                {nombre || "Invitado"}
                            </h4>
                            <div className="flex gap-1 container-github">
                                <img
                                    className="w-3.5 sm:w-5 lg:w-5.5"
                                    src="/assets/images/icon-github.svg"
                                    alt="Icon_GitHub"
                                />
                                <p className="text-xs font-light sm:text-lg">
                                    @{github || "youruser"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Número de ticket */}
                <div className="flex items-center justify-end w-[14%] xl:w-[11%]">
                    <p className="rotate-90 h-fit text-Neutral-0/50 font-light sm:text-xl lg:text-2xl text-id">
                        #{idTicket}
                    </p>
                </div>
            </div>
        </section>
    );
}
