export function DecorMiddle({ className, styles }) {
    return (
        <picture>
            <img className={`hidden sm:block ${className} sm:absolute`} style={styles} src="/public/assets/images/pattern-circle.svg" alt="pattern-circle" />
        </picture>
    );
}