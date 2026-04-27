import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Work', href: location.pathname === '/' ? '#work' : '/projects' },
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/contact' },
    ];

    const NavItem = ({ link, mobile = false }) => {
        const isAnchor = link.href.startsWith('#') || link.href.includes('#');

        if (isAnchor && location.pathname === '/') {
            return (
                <a
                    href={link.href}
                    onClick={() => mobile && setIsMobileMenuOpen(false)}
                    className={mobile
                        ? "text-gray-800 font-medium text-lg hover:text-accent transition-colors block py-2"
                        : "text-gray-600 hover:text-accent font-medium transition-colors"}
                >
                    {link.name}
                </a>
            );
        }

        return (
            <Link
                to={link.href}
                onClick={() => mobile && setIsMobileMenuOpen(false)}
                className={mobile
                    ? "text-gray-800 font-medium text-lg hover:text-accent transition-colors block py-2"
                    : "text-gray-600 hover:text-accent font-medium transition-colors"}
            >
                {link.name}
            </Link>
        );
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold tracking-tight text-primary">
                        Sumanth<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <NavItem key={link.name} link={link} />
                            ))}
                        </div>
                        <a href="https://wa.me/919343337788?text=Hay%20Sumanth%2C%20Let%27s%20work%20together." target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">Let's Talk</Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <NavItem key={link.name} link={link} mobile={true} />
                    ))}
                    <div className="pt-4 border-t border-gray-100">
                        <a href="https://wa.me/919343337788?text=Hay%20Sumanth%2C%20Let%27s%20work%20together." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="primary" className="w-full">Let's Talk</Button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
