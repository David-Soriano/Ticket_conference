export function Input({ type, label, value, placeholder, id, className, onChange, error }) {
    return (
        <div className="flex flex-col gap-2 group">
            {label && (
                <label htmlFor={id}>{label}</label>
            )}
            <div className="border border-transparent group-focus-within:border-Neutral-0/80 rounded-lg p-0.5 transition-all duration-200 ease-in-out">
                <input
                    className={className}
                    type={type}
                    name={id}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
            {error && (
                <div className="flex gap-2">
                    <div className="size-4 bg-Orange-500 mask mask-[url('/assets/images/icon-info.svg')] bg-no-repeat bg-center bg-cover" />
                    <p className="text-[10px] font-light text-Orange-500">{error}</p>
                </div>
            )}
        </div>
    );
}
