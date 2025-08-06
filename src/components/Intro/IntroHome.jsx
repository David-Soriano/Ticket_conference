export function IntroHome({nombre, correo}) {
    const [pnombre, apellido] = nombre.split(" ");
    return (
        <section className="text-Neutral-0 px-5 flex flex-col gap-4 sm:w-7/12">
            <h2 className="text-2xl sm:text-6xl font-bold text-center">Congrats, <span className="bg-gradient-to-r from-Orange-500 to-Neutral-0 bg-clip-text text-transparent">{pnombre || "No disponible"}</span> <span className="bg-gradient-to-r from-Orange-500 to-Neutral-0 bg-clip-text text-transparent">{apellido || "No disponible"}</span>! Your ticket is ready.</h2>
            <p className="text-md font-light text-center sm:text-2xl sm:w-3/5 m-auto">We've emailed your ticket to <span className="text-Orange-500">{correo || "No disponible"}</span> and will send updates in the run up to the event.</p>
        </section>
    );
}