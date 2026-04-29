import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

const PHRASES = [
    { text: 'More Visibility.', accent: null },
    { text: 'More Bookings.', accent: 'Bookings' },
    { text: 'More Revenue.', accent: null },
];

// Humanistic typing: base speed + random jitter so it feels natural
const TYPE_BASE = 50;
const TYPE_JITTER = 30;       // actual range: 50-80ms
const DELETE_BASE = 25;
const DELETE_JITTER = 15;     // actual range: 25-40ms
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_DELETE = 300;

function humanDelay(base, jitter) {
    return base + Math.random() * jitter;
}

function useTypewriter(phrases) {
    const [state, setState] = useState({ phraseIndex: 0, progress: 0, firstCycleComplete: false });
    
    useEffect(() => {
        let animationFrameId;
        let lastTime = performance.now();
        
        let phraseIndex = 0;
        let progress = 0;
        let phase = 'typing';
        let firstCycleComplete = false;
        
        const TYPE_SPEED_MS_PER_CHAR = 65; 
        const DELETE_SPEED_MS_PER_CHAR = 35;
        const PAUSE_AFTER_TYPE = 1800;
        const PAUSE_AFTER_DELETE = 500;
        
        let pauseWaitTime = 0;

        const update = (time) => {
            const delta = time - lastTime;
            lastTime = time;
            
            let shouldUpdateState = false;

            const currentPhraseLength = phrases[phraseIndex].text.length;
            
            if (phase === 'typing') {
                progress += delta / (TYPE_SPEED_MS_PER_CHAR * currentPhraseLength);
                if (progress >= 1) {
                    progress = 1;
                    phase = 'holding';
                    pauseWaitTime = PAUSE_AFTER_TYPE;
                    if (!firstCycleComplete) {
                        firstCycleComplete = true;
                        shouldUpdateState = true;
                    }
                }
                shouldUpdateState = true;
            } else if (phase === 'holding') {
                pauseWaitTime -= delta;
                if (pauseWaitTime <= 0) {
                    phase = 'deleting';
                }
            } else if (phase === 'deleting') {
                progress -= delta / (DELETE_SPEED_MS_PER_CHAR * currentPhraseLength);
                if (progress <= 0) {
                    progress = 0;
                    phase = 'waiting';
                    pauseWaitTime = PAUSE_AFTER_DELETE;
                }
                shouldUpdateState = true;
            } else if (phase === 'waiting') {
                pauseWaitTime -= delta;
                if (pauseWaitTime <= 0) {
                    phase = 'typing';
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    shouldUpdateState = true;
                }
            }
            
            if (shouldUpdateState) {
                setState({ phraseIndex, progress, firstCycleComplete });
            }
            
            animationFrameId = requestAnimationFrame(update);
        };
        
        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, [phrases]);

    return { 
        currentPhrase: phrases[state.phraseIndex],
        progress: state.progress,
        firstCycleComplete: state.firstCycleComplete
    };
}

function TypewriterHeading({ currentPhrase, progress }) {
    const measureRef = useRef(null);
    const phraseRef = useRef(null);
    const [maxWidth, setMaxWidth] = useState(0);
    const [phraseWidth, setPhraseWidth] = useState(0);

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

    // Measure current phrase exact width whenever it changes
    useEffect(() => {
        if (phraseRef.current) {
            setPhraseWidth(phraseRef.current.offsetWidth);
        }
    }, [currentPhrase]);

    const renderText = (phrase) => {
        const text = phrase.text;
        const accent = phrase.accent;
        if (!accent) return text;
        const idx = text.indexOf(accent);
        if (idx === -1) return text;
        return (
            <>
                {text.slice(0, idx)}
                <span className="text-accent">{accent}</span>
                {text.slice(idx + accent.length)}
            </>
        );
    };

    return (
        <h1 className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight typewriter-heading">
            {/* Hidden measurement container — renders all phrases invisibly to find the widest */}
            <span ref={measureRef} aria-hidden="true" className="typewriter-measure">
                {PHRASES.map((p, i) => (
                    <span key={i} className="typewriter-measure-phrase">{renderText(p)}</span>
                ))}
            </span>

            {/* Hidden measurement for current phrase width */}
            <span aria-hidden="true" className="typewriter-measure">
                <span ref={phraseRef} className="typewriter-measure-phrase">{renderText(currentPhrase)}</span>
            </span>

            {/* Visible typewriter — fixed width, left-aligned text, centered container */}
            <span className="typewriter-container" style={{ width: maxWidth ? `${maxWidth}px` : 'auto' }}>
                <span className="typewriter-smooth-wrapper" style={{ width: `${phraseWidth * progress}px` }}>
                    <span className="typewriter-text">{renderText(currentPhrase)}</span>
                </span>
                <span className="typewriter-cursor" aria-hidden="true"></span>
            </span>
        </h1>
    );
}

export function Hero() {
    const { currentPhrase, progress, firstCycleComplete } = useTypewriter(PHRASES);

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
                        <span className={`block text-xs md:text-sm font-bold text-accent uppercase tracking-[0.3em] opacity-90 fade-up-element${firstCycleComplete ? ' fade-up-visible' : ''}`}>
                            Achive :
                        </span>
                        <TypewriterHeading currentPhrase={currentPhrase} progress={progress} />
                    </div>

                    <p className={`relative z-20 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed fade-up-element fade-up-delay-1${firstCycleComplete ? ' fade-up-visible' : ''}`}>
                        Fast, mobile-first, and built to attract more customers. <br className="hidden md:block" />
                        Professional solutions delivered at lightning speed.
                    </p>

                    <div className={`order-4 md:order-none relative z-20 flex flex-col sm:flex-row justify-center gap-4 pt-4 fade-up-element fade-up-delay-2${firstCycleComplete ? ' fade-up-visible' : ''}`}>
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

                    <div className={`order-3 md:order-none relative z-20 pt-6 flex items-center justify-center space-x-2 text-sm text-gray-500 font-medium fade-up-element fade-up-delay-3${firstCycleComplete ? ' fade-up-visible' : ''}`}>
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
