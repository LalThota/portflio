import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono text-[var(--color-secondary)]">
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
  );
};

// Magnetic Button Wrapper
const MagneticButton = ({ children, className, href, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Wrapper = href ? 'a' : 'button';

  return (
    <Wrapper
      href={href}
      onClick={onClick}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </Wrapper>
  );
};

const Hero = () => {
  const roles = ["AI/ML Engineer", "Full Stack Developer", "Hackathon Winner", "Problem Solver"];

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-20 overflow-hidden">
      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Name with Glitch */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold font-heading mb-4 tracking-tighter leading-none w-full text-center"
          style={{ fontSize: 'clamp(2rem, 10vw, 7rem)' }}
        >
          <span className="glitch" data-text="LAL SATYA SAI">LAL SATYA SAI</span>
        </motion.h1>

        {/* Role Typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-4xl font-light mb-8 text-[var(--color-tertiary)] px-2 text-center"
        >
          Building intelligent systems as a{' '}
          <Typewriter words={roles} />
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 mb-16 w-full sm:w-auto justify-center"
        >
          <MagneticButton 
            href="#projects" 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-[var(--color-tertiary)] text-[var(--color-background)] font-bold rounded-none flex items-center justify-center gap-2 hover:bg-white transition-colors w-full sm:w-auto"
          >
            View My Work
          </MagneticButton>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-6 gap-y-3 text-xs sm:text-sm md:text-base font-mono text-[var(--color-muted)]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-primary)]">9.18</span> CGPA
          </div>
          <span className="hidden md:inline text-[var(--color-card-border)]">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-primary)]">5+</span> Projects
          </div>
          <span className="hidden md:inline text-[var(--color-card-border)]">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-secondary)]">1</span> Hackathon Win
          </div>
          <span className="hidden md:inline text-[var(--color-card-border)]">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-secondary)]">2</span> National Top 10s
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[var(--color-muted)] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-[var(--color-primary)] opacity-70" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
