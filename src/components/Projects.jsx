import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import StarBorder from './StarBorder';
import { ExternalLink, X, ShoppingCart, TrendingUp, Users, ShieldCheck, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const FannedCards = ({ images }) => {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-8 bg-gray-50 overflow-hidden">
            {/* Soft shadows and depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />

            <div className="relative w-48 h-[400px] flex items-center justify-center">
                {/* Image 1 (Left) */}
                <div className="absolute w-[200px] aspect-[9/19.5] rounded-[1.5rem] overflow-hidden shadow-2xl border-[3px] border-white -rotate-[12deg] -translate-x-16 translate-y-4 hover:z-30 transition-all duration-300">
                    <img src={images[2]} alt="App Screen 3" className="w-full h-full object-cover" />
                </div>

                {/* Image 2 (Right) */}
                <div className="absolute w-[200px] aspect-[9/19.5] rounded-[1.5rem] overflow-hidden shadow-2xl border-[3px] border-white rotate-[12deg] translate-x-16 translate-y-4 hover:z-30 transition-all duration-300">
                    <img src={images[3]} alt="App Screen 4" className="w-full h-full object-cover" />
                </div>

                {/* Image 3 (Center Back) */}
                <div className="absolute w-[200px] aspect-[9/19.5] rounded-[2rem] overflow-hidden shadow-xl border-[4px] border-white rotate-0 -translate-y-4 scale-105 hover:z-30 transition-all duration-300">
                    <img src={images[1]} alt="App Screen 2" className="w-full h-full object-cover" />
                </div>

                {/* Image 4 (Main Center / Top) */}
                <div className="absolute w-[220px] aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] border-white rotate-0 z-20 hover:scale-110 transition-all duration-500">
                    <img src={images[0]} alt="App Screen 1" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    if (!isOpen) return null;

    const nextImage = (e) => {
        e?.stopPropagation();
        setActiveImageIndex((prev) => 
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setActiveImageIndex((prev) => 
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextImage();
        if (isRightSwipe) prevImage();
    };

    return (
        <>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                <div 
                    className="absolute inset-0 bg-primary/40 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={onClose}
                />
                <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors text-primary"
                    >
                        <X size={24} />
                    </button>

                    {/* Screenshots Gallery Section */}
                    <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 overflow-y-auto no-scrollbar">
                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Gallery</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {project.images?.map((img, idx) => (
                                    <div 
                                        key={idx} 
                                        className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer"
                                        onClick={() => setActiveImageIndex(idx)}
                                    >
                                        <img src={img} alt={`Screen ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Maximize2 className="text-white scale-75 group-hover:scale-100 transition-transform" size={24} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar flex flex-col">
                        <div className="mb-8">
                            <span className="inline-block px-4 py-1 bg-accent/10 text-accent font-bold rounded-full text-sm mb-4">
                                Premium Management App
                            </span>
                            <h2 className="text-4xl font-bold text-primary mb-4 leading-tight">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {project.longDescription || project.description}
                            </p>
                        </div>

                        <div className="space-y-6 flex-1">
                            <h3 className="text-xl font-bold text-primary flex items-center">
                                Key Features
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { icon: <ShoppingCart className="text-accent" size={20} />, title: "Order Management", desc: "Track and update order status in real-time." },
                                    { icon: <TrendingUp className="text-accent" size={20} />, title: "Revenue Dashboard", desc: "Visual insights into your daily and monthly earnings." },
                                    { icon: <Users className="text-accent" size={20} />, title: "Customer Integration", desc: "Easily manage customer data and contact them directly." },
                                    { icon: <ShieldCheck className="text-accent" size={20} />, title: "Mobile-First UI", desc: "Optimized for speed and efficiency on any device." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="mt-1">{feature.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-primary">{feature.title}</h4>
                                            <p className="text-sm text-gray-500">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <Button 
                                variant="primary" 
                                className="flex-1 rounded-2xl py-4 flex items-center justify-center gap-2 text-lg"
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                <ExternalLink size={20} /> Live Demo
                            </Button>
                            <button 
                                onClick={onClose}
                                className="flex-1 bg-gray-100 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-colors text-primary text-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Lightbox */}
            {activeImageIndex !== null && (
                <div 
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onClick={() => setActiveImageIndex(null)}
                >
                    <button 
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[210] p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex(null);
                        }}
                    >
                        <X size={40} />
                    </button>

                    {/* Navigation Arrows */}
                    <button 
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all z-[210] p-4 hover:scale-110 active:scale-95"
                        onClick={prevImage}
                    >
                        <ChevronLeft size={60} strokeWidth={1} />
                    </button>
                    <button 
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all z-[210] p-4 hover:scale-110 active:scale-95"
                        onClick={nextImage}
                    >
                        <ChevronRight size={60} strokeWidth={1} />
                    </button>

                    {/* Image Container */}
                    <div 
                        className="relative w-full max-w-4xl h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            key={activeImageIndex}
                            src={project.images[activeImageIndex]} 
                            alt={`Fullscreen Screen ${activeImageIndex + 1}`} 
                            className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(255,255,255,0.1)] animate-in zoom-in-95 duration-300 pointer-events-none"
                        />
                        
                        {/* Image Indicators */}
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images?.map((_, idx) => (
                                <div 
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeImageIndex ? 'w-8 bg-white' : 'bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'travel Agency',
            description: 'A modern, cinematic travel agency website with scroll-driven animations.',
            image: 'https://placehold.co/800x600/ffffff/111827?text=VOYA+-+Travel+agency+websites',
            link: 'https://travel-agency-ochre-six.vercel.app/',
            hideCaseStudy: true
        },
        {
            title: 'Noir Studio (A Saloon Website)',
            description: 'Elegant local salon site with booking integration.',
            image: 'https://placehold.co/800x600/ffffff/111827?text=Noir+Studio+(A+Saloon+Website)',
            link: 'https://noir-studio-three.vercel.app/',
            hideCaseStudy: true
        },
        {
            title: 'Order Management App',
            description: 'A mobile app to manage orders, track revenue, and handle customer interactions efficiently.',
            longDescription: 'A comprehensive solution for business owners to streamline their workflow. This application provides real-time tracking of orders, detailed financial analytics, and seamless customer management, all wrapped in a premium mobile-first interface.',
            images: ['/1.jpeg', '/3.jpeg', '/5.jpeg', '/6.jpeg', '/2.jpeg', '/7.jpeg', '/8.jpeg', '/9.jpeg', '/10.jpeg'],
            fanned: true,
            hideCaseStudy: false,
            link: '#'
        },
    ];

    return (
        <Section id="work" bg="transparent">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">My Work</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Take a look at some of the recent applications I've built using modern web technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => {
                    const isFanned = project.fanned;

                    const CardContent = (
                        <>
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative group">
                                {isFanned ? (
                                    <FannedCards images={project.images} />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                {!project.hideCaseStudy && (
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button
                                            variant="primary"
                                            className="scale-90 group-hover:scale-100 transition-transform"
                                            onClick={(e) => {
                                                if (isFanned) {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-1">{project.description}</p>
                                <div className="mt-auto">
                                    {project.link && project.link !== '#' ? (
                                        <div className="flex w-fit items-center text-accent hover:text-yellow-600 font-semibold transition-colors">
                                            Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                                        </div>
                                    ) : (
                                        <button
                                            className="flex items-center text-accent hover:text-yellow-600 font-semibold transition-colors"
                                            onClick={(e) => {
                                                if (isFanned) {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }
                                            }}
                                        >
                                            View Project <ExternalLink className="ml-2 w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </>
                    );

                    const cardOuterClasses = "group w-full h-full relative rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer";
                    const cardInnerClasses = "w-full h-full bg-transparent flex flex-col overflow-hidden";

                    if (project.link && project.link !== '#' && !isFanned) {
                        return (
                            <StarBorder
                                as="a"
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cardOuterClasses}
                                color="#F59E0B"
                                thickness={3}
                            >
                                <div className={cardInnerClasses}>
                                    {CardContent}
                                </div>
                            </StarBorder>
                        );
                    }

                    return (
                        <StarBorder
                            as="div"
                            key={index}
                            onClick={() => isFanned && setSelectedProject(project)}
                            className={cardOuterClasses}
                            color="#F59E0B"
                            thickness={3}
                        >
                            <div className={cardInnerClasses}>
                                {CardContent}
                            </div>
                        </StarBorder>
                    );
                })}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
}
