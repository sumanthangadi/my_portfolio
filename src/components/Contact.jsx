import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        business: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'success', 'error', ''
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [mobileError, setMobileError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'mobile') {
            const digits = value.replace(/\D/g, '');
            if (digits.length > 0 && digits.length !== 10) {
                setMobileError('Please enter a valid 10-digit mobile number.');
            } else {
                setMobileError('');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        try {
            const formDataToSend = new FormData();
            // Add your Web3Forms Access Key here. You need to create an account at web3forms.com
            formDataToSend.append('access_key', '00fedef4-a2df-4394-a4e4-0beed34eba63');
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('mobile', formData.mobile);
            formDataToSend.append('business', formData.business);
            formDataToSend.append('message', formData.message);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', mobile: '', business: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" bg="transparent" className="relative pb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact</h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Ready to collaborate on your next project? Get in touch today for a free consultation.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a
                            href="https://wa.me/919343337788?text=Hi%20Sumanth%2C%20I%20want%20a%20website%20for%20my%20business."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
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
                            href="mailto:sumanthangadi7@gmail.com"
                            className="flex items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 hover:border-accent/40 hover:shadow-md transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                <Mail size={28} />
                            </div>
                            <div className="ml-6 flex-1">
                                <h3 className="text-lg font-bold text-primary mb-1">Email Me</h3>
                                <p className="text-gray-500">sumanthangadi7@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Contact Form Placeholder */}
                <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative max-w-lg w-full mx-auto lg:ml-auto">
                    <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0"></div>

                    <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-bold text-primary mb-8">Send a Message</h3>

                        <div className="space-y-4">
                            {status === 'success' && (
                                <div className="bg-green-50 text-green-800 p-4 rounded-xl flex items-center gap-3 border border-green-200">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <p className="font-medium text-sm">Message sent successfully! I'll be in touch soon.</p>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200">
                                    <p className="font-medium text-sm">Oops! Something went wrong. Please try emailing me directly.</p>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="mobile">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        className={`w-full px-5 py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-accent/20 transition-all outline-none ${mobileError ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-accent'}`}
                                        placeholder="98XXXXXXXX"
                                    />
                                    {mobileError && (
                                        <p className="text-red-500 text-xs mt-1 font-medium">{mobileError}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="business">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    id="business"
                                    name="business"
                                    value={formData.business}
                                    onChange={handleChange}
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none resize-none"
                                    placeholder="Tell me about what you need..."
                                ></textarea>
                            </div>
                        </div>

                        <Button
                            variant="primary"
                            className="w-full py-4 text-lg mt-4 flex justify-between items-center group disabled:opacity-75 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <Send className={`w-5 h-5 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                        </Button>
                    </form>
                </div>

            </div>
        </Section>
    );
}
