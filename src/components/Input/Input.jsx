export function Input({ type, label, value, placeholder, id, className}) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={id}>{label}</label>
            )}
            <input className={className} type={type} name={id} id={id} value={value} placeholder={placeholder} />
        </div>
    );
}