import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center overflow-hidden bg-gray-50">

            {/* Decorative Blob Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl rounded-tr-none z-0 hidden md:block"></div>

            <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl z-0 hidden md:block"></div>

            {/* Smooth amber SVG blob at bottom for accent */}
            <svg className="absolute bottom-0 left-0 w-full text-accent/5 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,176.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content */}
                <div className="space-y-8 max-w-2xl">
                    <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm">
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        <span>Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
                        Get Your Business Website in <span className="text-accent">3–5 Days</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
                        Fast, mobile-first, and built to attract more customers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#work">
                            <Button variant="primary" className="w-full sm:w-auto text-lg py-4 px-8 group">
                                View My Work
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button variant="outline" className="w-full sm:w-auto text-lg py-4 px-8">
                                Let's Talk
                            </Button>
                        </a>
                    </div>

                    <div className="pt-2 flex items-center space-x-2 text-sm text-gray-500 font-medium">
                        <span className="text-xl">⚡</span>
                        <span>Websites delivered in 3–5 days</span>
                    </div>
                </div>

                {/* Right Image/Illustration placeholder mapped to provided asset */}
                <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                    <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-200">
                        {/* The provided man photo asset should go here. Setting up a placeholder if asset is missing, but simulating the image. */}
                        <img
                            src="/developer-photo.jpg"
                            alt="Sumanth - Freelance Developer"
                            className="w-full h-full object-cover object-top"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // Fallback placeholder
                            }}
                        />
                        {/* Floating badge */}
                        <div className="absolute bottom-6 -left-6 md:-left-12 bg-white rounded-xl p-4 shadow-xl flex items-center space-x-3 hidden sm:flex">
                            <div className="bg-green-100 p-2 rounded-full">
                                <CheckCircle2 className="text-green-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">100% Success</p>
                                <p className="text-xs text-gray-500">Local Businesses</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
