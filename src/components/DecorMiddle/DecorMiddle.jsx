export function DecorMiddle({ className, styles }) {
    return (
        <picture className={`hidden xl:block ${className} sm:absolute decorMiddle`}>
            <img  style={styles} src="/assets/images/pattern-circle.svg" alt="pattern-circle" />
        </picture>
    );
}