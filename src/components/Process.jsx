import React from 'react';
import { Section } from './ui/Section';

export function Process() {
    const steps = [
        {
            title: 'Understand your business',
            description: 'We start with a quick chat to understand your goals, customers, and what makes your business unique.',
        },
        {
            title: 'Design & build',
            description: 'I design a custom, mobile-ready website tailored to your brand, keeping you updated along the way.',
        },
        {
            title: 'Launch your website',
            description: 'After your approval, we go live! I handle all the technical details to ensure a smooth launch.',
        },
        {
            title: 'Ongoing support',
            description: 'I provide continuous support, updates, and optimization to help your site grow with your business.',
        },
    ];

    return (
        <Section id="process" bg="transparent">
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-5xl font-bold text-primary mb-4">My Process</h2>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">

                            <div className="flex flex-col text-left">
                                <div className="flex-1 mt-2 lg:mt-0">
                                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 leading-tight flex items-start lg:justify-center">
                                        <span className="font-extrabold text-2xl md:text-3xl text-gray-500 mr-3 leading-none">{index + 1}.</span>
                                        <span className="mt-1">{step.title}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
