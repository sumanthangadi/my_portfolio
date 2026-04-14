import React from 'react';
import profileImage from '../../assets/a.png';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center overflow-hidden bg-transparent">

            {/* Decorative Blob Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl rounded-tr-none z-0 hidden md:block"></div>

            <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl z-0 hidden md:block"></div>



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid md:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Content */}
                <div className="space-y-4 md:space-y-8 max-w-2xl relative">
                    <h1 className="relative z-20 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
                        Get Your Website / <span className="text-accent">Mobile App</span> in 3–5 Days
                    </h1>

                    <p className="relative z-20 text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
                        Fast, mobile-first, and built to attract more customers.
                    </p>

                    {/* Mobile Image (hidden on desktop) */}
                    <div className="relative mx-auto w-full max-w-xs block md:hidden pt-4 pb-0">
                        <div className="relative overflow-hidden flex justify-center items-center rounded-3xl border-4 border-accent shadow-xl bg-white/20 backdrop-blur-sm pt-2 px-2 pb-0">
                            <img
                                src={profileImage}
                                alt="Sumanth - Freelance Developer"
                                className="w-full h-auto object-cover object-top rounded-t-2xl rounded-b-xl"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                                }}
                            />
                        </div>
                    </div>

                    <div className="relative z-20 flex flex-col sm:flex-row gap-4 !-mt-2 md:!mt-0 md:pt-4">
                        <a href="#work">
                            <Button variant="primary" className="w-full sm:w-auto text-lg py-4 px-8 group">
                                View My Work
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="https://wa.me/919343337788?text=Hi%20Sumanth%2C%20I%20want%20a%20website%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full sm:w-auto text-lg py-4 px-8">
                                Let's Talk
                            </Button>
                        </a>
                    </div>

                    <div className="relative z-20 pt-2 flex items-center space-x-2 text-sm text-gray-500 font-medium">
                        <span className="text-xl">⚡</span>
                        <span>Delivered in 3–5 days</span>
                    </div>
                </div>

                {/* Right Image/Illustration — behind the SVG blob */}
                <div className="relative mx-auto w-full max-w-md lg:max-w-lg hidden md:block z-[5]">
                    <div className="relative overflow-hidden flex justify-center items-center rounded-3xl border-4 border-accent shadow-xl bg-white/20 backdrop-blur-sm pt-3 px-3 pb-0">
                        <img
                            src={profileImage}
                            alt="Sumanth - Freelance Developer"
                            className="w-full h-auto object-cover object-top rounded-t-2xl rounded-b-xl shadow-sm"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
