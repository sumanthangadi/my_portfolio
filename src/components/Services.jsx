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
        <Section id="services" bg="light" className="!py-8 md:!py-16">
            <div className="mb-6 md:mb-10 text-center sm:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Services</h2>
                <p className="text-sm md:text-lg text-gray-600 max-w-2xl">
                    Everything you need to establish a strong online presence and grow your local business.
                </p>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group flex items-start gap-4 text-left py-2 border-b border-gray-200/50 last:border-0 md:border-0"
                    >
                        <span className="text-2xl md:text-3xl font-black text-accent/80 mt-1 md:mt-0">
                            0{index + 1}
                        </span>
                        <div>
                            <h3 className="text-base md:text-xl font-bold text-primary mb-1">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-snug">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
