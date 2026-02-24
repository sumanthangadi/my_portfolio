import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, MessageCircle, Send } from 'lucide-react';

export function Contact() {
    return (
        <Section id="contact" bg="light" className="relative pb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Let's Work Together</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to take your local business to the next level? Get in touch today for a free consultation and personalized quote.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a
                            href="https://wa.me/919343337788?text=Hi%20Sumanth%2C%20I%20want%20a%20website%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                <MessageCircle size={28} />
                            </div>
                            <div className="ml-6 flex-1">
                                <h3 className="text-lg font-bold text-primary mb-1">WhatsApp Me</h3>
                                <p className="text-gray-500">I usually reply within an hour</p>
                            </div>
                            <div className="text-green-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                &rarr;
                            </div>
                        </a>

                        <a
                            href="mailto:hello@sumanth.dev"
                            className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <div className="ml-6 flex-1">
                                <h3 className="text-lg font-bold text-primary mb-1">Email Me</h3>
                                <p className="text-gray-500">hello@sumanth.dev</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Contact Form Placeholder */}
                <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative max-w-lg w-full mx-auto lg:ml-auto">
                    <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0"></div>

                    <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="text-2xl font-bold text-primary mb-8">Send a Message</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="business">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    id="business"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    placeholder="Your Company LLC"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                                    Project Details
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none resize-none"
                                    placeholder="Tell me about what you need..."
                                ></textarea>
                            </div>
                        </div>

                        <Button variant="primary" className="w-full py-4 text-lg mt-4 flex justify-between items-center group">
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </form>
                </div>

            </div>
        </Section>
    );
}
