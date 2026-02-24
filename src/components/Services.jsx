import React from 'react';
import { Section } from './ui/Section';
import { Monitor, RefreshCcw, Search, MessageCircle } from 'lucide-react';

export function Services() {
    const services = [
        {
            title: 'Business Website Development',
            description: 'Custom, fast-loading, mobile-friendly websites built from scratch to represent your brand perfectly.',
            icon: <Monitor className="w-8 h-8 text-accent" />,
        },
        {
            title: 'Website Redesign',
            description: 'Modernize your old website with a fresh look, better performance, and improved user experience.',
            icon: <RefreshCcw className="w-8 h-8 text-accent" />,
        },
        {
            title: 'Google Business Optimization',
            description: 'Make your local business rank higher on Google Maps and search results to attract nearby customers.',
            icon: <Search className="w-8 h-8 text-accent" />,
        },
        {
            title: 'WhatsApp Integration',
            description: 'Connect your website directly to your WhatsApp to chat with potential customers instantly.',
            icon: <MessageCircle className="w-8 h-8 text-accent" />,
        },
    ];

    return (
        <Section id="services" bg="white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Services</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Everything you need to establish a strong online presence and grow your local business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100 hover:border-accent/20 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-50 transition-all duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
