import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <Services />
                <Process />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
