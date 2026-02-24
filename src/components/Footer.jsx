import React from 'react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6">
                <a href="#home" className="text-2xl font-bold tracking-tight text-primary">
                    Sumanth<span className="text-accent">.</span>
                </a>

                <div className="flex space-x-6 text-sm font-medium text-gray-600">
                    <a href="#work" className="hover:text-accent transition-colors">Work</a>
                    <a href="#services" className="hover:text-accent transition-colors">Services</a>
                    <a href="#process" className="hover:text-accent transition-colors">Process</a>
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                </div>

                <p className="text-gray-400 text-sm mt-8 border-t border-gray-200 pt-8 w-full max-w-md text-center">
                    &copy; {currentYear} Sumanth. Crafted for conversion.
                </p>
            </div>
        </footer>
    );
}
