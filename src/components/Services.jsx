import React from 'react';
import { Section } from './ui/Section';

export function Services() {
    const services = [
        {
            title: 'Business Website Development',
            description: 'Custom, fast-loading websites built from scratch for your brand.',
        },
        {
            title: 'Website Redesign',
            description: 'Modernize your old website with a fresh look and better performance.',
        },
        {
            title: 'Google Business Optimization',
            description: 'Rank higher on Google Maps to attract nearby customers.',
        },
        {
            title: 'WhatsApp Integration',
            description: 'Connect your site to WhatsApp to chat with customers instantly.',
        },
    ];

    return (
        <Section id="services" bg="light">
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-5xl font-bold text-primary mb-4">Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                {services.map((service, index) => (
                    <div key={index} className="relative group">
                        <div className="flex flex-col text-left">
                            <div className="flex-1 mt-2 lg:mt-0">
                                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 leading-tight flex items-start">
                                    <span className="font-extrabold text-2xl md:text-3xl text-gray-500 mr-3 leading-none">{index + 1}.</span>
                                    <span className="mt-1">{service.title}</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
