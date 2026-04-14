import React from 'react';
import aboutImage from '../../assets/b.png';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Zap, Smartphone, MapPin } from 'lucide-react';

export function About() {
    return (
        <Section id="about" bg="white">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Image Grid Layout */}
                <div className="relative mx-auto w-full max-w-lg">
                    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 relative shadow-xl">
                        <img
                            src={aboutImage}
                            alt="Sumanth - Business Website Developer"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            }}
                        />

                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>

                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-bold text-2xl">Sumanth</p>
                            <p className="text-white/80">Freelance Web Developer</p>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Hi, I'm Sumanth</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            I specialize in helping local businesses establish a powerful, professional online presence. With a deep understanding of what drives conversions, I craft websites that not only look fantastic but actively work to bring more customers through your door.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            When business owners choose to work with me, they get more than just code. They get a partner invested in their growth, dedicated to fast turnarounds and hassle-free communication.
                        </p>
                    </div>

                    <div className="py-6 border-y border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-50 text-accent p-2 rounded-xl">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-primary">Fast Delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-50 text-accent p-2 rounded-xl">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-primary">Mobile-First Design</span>
                            </div>
                            <div className="flex items-center gap-3 sm:col-span-2">
                                <div className="bg-yellow-50 text-accent p-2 rounded-xl">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-primary">Dedicated to Local Businesses</span>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" className="inline-block">
                        <Button className="text-lg px-8 py-4">Let's Build Your Website</Button>
                    </a>
                </div>

            </div>
        </Section>
    );
}
