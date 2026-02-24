import React from 'react';

export function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-in-out px-6 py-3 shadow-sm hover:shadow-md';

    const variants = {
        primary: 'bg-accent text-primary hover:bg-yellow-400 hover:-translate-y-0.5',
        secondary: 'bg-white text-primary border border-gray-200 hover:border-accent hover:-translate-y-0.5',
        outline: 'bg-transparent text-primary hover:text-accent font-semibold px-4 py-2 hover:bg-gray-50'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
