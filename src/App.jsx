import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <Projects />
                                <Services />
                                <Process />
                                <About />
                                <Contact />
                            </>
                        } />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
