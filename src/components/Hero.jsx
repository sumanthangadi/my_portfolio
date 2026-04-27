import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-40 md:pt-48 md:pb-32 min-h-screen flex items-center overflow-hidden bg-transparent">

            {/* Decorative Blob Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl rounded-tr-none z-0 hidden md:block"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl z-0 hidden md:block"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">

                {/* Content */}
                <div className="flex flex-col space-y-6 md:space-y-10 relative">
                    <div className="space-y-2 relative z-20">
                        <span className="block text-xs md:text-sm font-bold text-accent uppercase tracking-[0.3em] opacity-90">
                            Achive :
                        </span>
                        <h1 className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
                            More Visibility. <br className="hidden md:block" /> More <span className="text-accent">Bookings</span>. More Revenue.
                        </h1>
                    </div>

                    <p className="relative z-20 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Fast, mobile-first, and built to attract more customers. <br className="hidden md:block" />
                        Professional solutions delivered at lightning speed.
                    </p>

                    <div className="order-4 md:order-none relative z-20 flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <a href="#work">
                            <Button variant="primary" className="w-full sm:w-auto text-base md:text-lg py-3 md:py-4 px-8 md:px-10 group">
                                View My Work
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="https://wa.me/919343337788?text=Hay%20Sumanth%2C%20Let%27s%20work%20together." target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg py-3 md:py-4 px-8 md:px-10">
                                Let's Talk
                            </Button>
                        </a>
                    </div>

                    <div className="order-3 md:order-none relative z-20 pt-6 flex items-center justify-center space-x-2 text-sm text-gray-500 font-medium">
                        <span className="text-2xl">🚀</span>
                        <span className="text-base md:text-lg font-semibold text-accent">Launch Your Professional Website This Week</span>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-pulse">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Scroll to view more</span>
                <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent mt-4"></div>
            </div>
        </section>
    );
}
