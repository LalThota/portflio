import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar */}
      <header
        style={{ boxSizing: 'border-box' }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-card-border)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Inner container — always fits within screen */}
        <div
          style={{ boxSizing: 'border-box' }}
          className="flex items-center justify-between w-full px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl sm:text-2xl font-bold font-heading text-[var(--color-tertiary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            LSS<span className="text-[var(--color-primary)]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-tertiary)] transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger — always inside layout */}
          <button
            className="flex md:hidden items-center justify-center w-10 h-10 text-[var(--color-tertiary)] focus:outline-none shrink-0"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenuAlt3 size={26} />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-background)] z-[200] flex flex-col"
          >
            {/* Close button row */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-[var(--color-card-border)]">
              <span className="text-xl font-bold font-heading text-[var(--color-tertiary)]">
                LSS<span className="text-[var(--color-primary)]">.</span>
              </span>
              <button
                className="flex items-center justify-center w-10 h-10 text-[var(--color-tertiary)] focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <HiX size={26} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col justify-center flex-1 gap-2 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="py-4 text-2xl font-heading font-bold text-[var(--color-tertiary)] hover:text-[var(--color-primary)] transition-colors border-b border-[var(--color-card-border)]"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
