import React from 'react';
import { Section } from './ui/Section';
import { Search, PenTool, Rocket, HeartHandshake } from 'lucide-react';

export function Process() {
    const steps = [
        {
            title: 'Understand your business',
            description: 'We start with a quick chat to understand your goals, customers, and what makes your business unique.',
            icon: <Search className="w-6 h-6" />,
        },
        {
            title: 'Design & build',
            description: 'I design a custom, mobile-ready website tailored to your brand, keeping you updated along the way.',
            icon: <PenTool className="w-6 h-6" />,
        },
        {
            title: 'Launch your website',
            description: 'After your approval, we go live! I handle all the technical details to ensure a smooth launch.',
            icon: <Rocket className="w-6 h-6" />,
        },
        {
            title: 'Ongoing support',
            description: 'I provide continuous support, updates, and optimization to help your site grow with your business.',
            icon: <HeartHandshake className="w-6 h-6" />,
        },
    ];

    return (
        <Section id="process" bg="light">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">My Process</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    A simple, completely stress-free experience from our first chat to launch day.
                </p>
            </div>

            <div className="relative">
                {/* Connecting line for desktop */}
                <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Mobile connecting line */}
                            {index !== steps.length - 1 && (
                                <div className="lg:hidden absolute left-[44px] top-[88px] bottom-[-48px] w-[2px] bg-gray-200 z-0"></div>
                            )}

                            <div className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-0 lg:text-center">
                                <div className="relative flex-shrink-0 w-[88px] h-[88px] rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-sm group-hover:border-accent group-hover:shadow-md transition-all duration-300 z-10 mb-0 lg:mb-8">
                                    <div className="text-accent group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center -mt-1 -mr-1 shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="flex-1 mt-2 lg:mt-0">
                                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
