import React, { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-tertiary)] selection:bg-[var(--color-secondary)] selection:text-white">
      <Background />
      <CustomCursor />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
