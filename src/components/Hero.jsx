import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

const PHRASES = [
    { text: 'More Visibility.', accent: null },
    { text: 'More Bookings.', accent: 'Bookings' },
    { text: 'More Revenue.', accent: null },
];

// Humanistic typing: base speed + random jitter so it feels natural
const TYPE_BASE = 90;
const TYPE_JITTER = 50;       // actual range: 90-140ms
const DELETE_BASE = 45;
const DELETE_JITTER = 20;     // actual range: 45-65ms
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 500;

function humanDelay(base, jitter) {
    return base + Math.random() * jitter;
}

function useTypewriter(phrases) {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [firstCycleComplete, setFirstCycleComplete] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex].text;

        if (!isDeleting) {
            if (charIndex < currentPhrase.length) {
                // Typing forward
                timeoutRef.current = setTimeout(() => {
                    setCharIndex((prev) => prev + 1);
                }, humanDelay(TYPE_BASE, TYPE_JITTER));
            } else {
                // Fully typed — hold, then start deleting
                // Mark first cycle complete when the last phrase finishes typing
                if (phraseIndex === phrases.length - 1 && !firstCycleComplete) {
                    setFirstCycleComplete(true);
                }
                timeoutRef.current = setTimeout(() => {
                    setIsDeleting(true);
                }, PAUSE_AFTER_TYPE);
            }
        } else {
            if (charIndex > 0) {
                // Deleting
                timeoutRef.current = setTimeout(() => {
                    setCharIndex((prev) => prev - 1);
                }, humanDelay(DELETE_BASE, DELETE_JITTER));
            } else {
                // Fully deleted — advance phrase
                timeoutRef.current = setTimeout(() => {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }, PAUSE_AFTER_DELETE);
            }
        }

        return () => clearTimeout(timeoutRef.current);
    }, [charIndex, isDeleting, phraseIndex, phrases]);

    const displayText = phrases[phraseIndex].text.slice(0, charIndex);
    return { displayText, accentWord: phrases[phraseIndex].accent, isDeleting, firstCycleComplete };
}

function TypewriterHeading({ displayText, accentWord, isDeleting }) {
    const measureRef = useRef(null);
    const [maxWidth, setMaxWidth] = useState(0);

    // Measure the widest phrase once on mount (and on resize)
    useEffect(() => {
        function measure() {
            if (!measureRef.current) return;
            const hiddenSpans = measureRef.current.querySelectorAll('.typewriter-measure-phrase');
            let widest = 0;
            hiddenSpans.forEach((span) => {
                widest = Math.max(widest, span.offsetWidth);
            });
            // Add a small buffer for the cursor
            setMaxWidth(widest + 12);
        }
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // Split displayText into individual characters, each wrapped for CSS animation
    const renderChars = () => {
        const chars = displayText.split('');
        let accentStart = -1;
        let accentEnd = -1;

        if (accentWord) {
            const idx = displayText.indexOf(accentWord);
            if (idx !== -1) {
                accentStart = idx;
                accentEnd = idx + accentWord.length;
            }
        }

        return chars.map((char, i) => {
            const isAccent = i >= accentStart && i < accentEnd && accentStart !== -1;
            const isLast = i === chars.length - 1 && !isDeleting;
            return (
                <span
                    key={`${i}-${char}`}
                    className={`typewriter-char${isLast ? ' typewriter-char--new' : ''}${isAccent ? ' text-accent' : ''}`}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            );
        });
    };

    return (
        <h1 className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight typewriter-heading">
            {/* Hidden measurement container — renders all phrases invisibly to find the widest */}
            <span ref={measureRef} aria-hidden="true" className="typewriter-measure">
                {PHRASES.map((p, i) => (
                    <span key={i} className="typewriter-measure-phrase">{p.text}</span>
                ))}
            </span>

            {/* Visible typewriter — fixed width, left-aligned text, centered container */}
            <span className="typewriter-container" style={{ width: maxWidth ? `${maxWidth}px` : 'auto' }}>
                <span className="typewriter-text">{renderChars()}</span>
                <span className="typewriter-cursor" aria-hidden="true"></span>
            </span>
        </h1>
    );
}

export function Hero() {
    const { displayText, accentWord, isDeleting, firstCycleComplete } = useTypewriter(PHRASES);

    return (
        <section id="home" className="relative pt-32 pb-40 md:pt-48 md:pb-32 min-h-screen flex items-center overflow-hidden bg-transparent">

            {/* Decorative Blob Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl z-0"></div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl rounded-tr-none z-0 hidden md:block"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-3xl z-0 hidden md:block"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">

                {/* Content */}
                <div className="flex flex-col space-y-6 md:space-y-10 relative">
                    <div className="space-y-2 relative z-20">
                        <span className="block text-xs md:text-sm font-bold text-accent uppercase tracking-[0.3em] opacity-90">
                            Achive :
                        </span>
                        <TypewriterHeading displayText={displayText} accentWord={accentWord} isDeleting={isDeleting} />
                    </div>

                    <p className={`relative z-20 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed fade-up-element${firstCycleComplete ? ' fade-up-visible' : ''}`}>
                        Fast, mobile-first, and built to attract more customers. <br className="hidden md:block" />
                        Professional solutions delivered at lightning speed.
                    </p>

                    <div className={`order-4 md:order-none relative z-20 flex flex-col sm:flex-row justify-center gap-4 pt-4 fade-up-element fade-up-delay-1${firstCycleComplete ? ' fade-up-visible' : ''}`}>
                        <a href="#work">
                            <Button variant="primary" className="w-full sm:w-auto text-base md:text-lg py-3 md:py-4 px-8 md:px-10 group">
                                View My Work
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </a>
                        <a href="https://wa.me/919343337788?text=Hay%20Sumanth%2C%20Let%27s%20work%20together." target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg py-3 md:py-4 px-8 md:px-10">
                                Let's Talk
                            </Button>
                        </a>
                    </div>

                    <div className={`order-3 md:order-none relative z-20 pt-6 flex items-center justify-center space-x-2 text-sm text-gray-500 font-medium fade-up-element fade-up-delay-2${firstCycleComplete ? ' fade-up-visible' : ''}`}>
                        <span className="text-2xl">🚀</span>
                        <span className="text-base md:text-lg font-semibold text-accent">Launch Your Professional Website This Week</span>
                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center animate-pulse">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">Scroll to view more</span>
                <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent mt-4"></div>
            </div>
        </section>
    );
}
