export function DecorBottom() {
    return (
        <div className='absolute bottom-0 z-0 w-full sm:-left-15'>
            <picture>
                <source media="(min-width: 640px)" srcset="/assets/images/pattern-squiggly-line-bottom-desktop.svg" sizes="" />
                <img className='w-4/5 sm:w-3/5' src="assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="" />
            </picture>
        </div>
    );
}