import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ExternalLink } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: 'Restaurant Website',
            description: 'A modern, dynamic website for a local pizzeria with online menu.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Salon Website',
            description: 'Elegant local salon site with booking integration.',
            image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Gym Website',
            description: 'High-energy fitness center site focused on lead generation.',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Premium Scroll Animation',
            description: 'Interactive portfolio template with smooth GSAP animations.',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <Section id="work" bg="light">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Featured Work</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Take a look at some of the recent businesses I've helped grow online.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col"
                    >
                        <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Button variant="primary" className="scale-90 group-hover:scale-100 transition-transform">
                                    View Case Study
                                </Button>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-sm mb-6 flex-1">{project.description}</p>
                            <div className="mt-auto">
                                <button className="flex items-center text-accent hover:text-yellow-600 font-semibold transition-colors">
                                    Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
