import React from 'react';

export function Section({
    id,
    className = '',
    children,
    bg = 'white'
}) {
    const bgColors = {
        white: 'bg-transparent',
        light: 'bg-white/40 backdrop-blur-sm',
        dark: 'bg-primary text-white'
    };

    return (
        <section
            id={id}
            className={`py-20 md:py-28 w-full overflow-hidden ${bgColors[bg]} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
}
