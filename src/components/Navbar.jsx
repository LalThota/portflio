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
      {/* Navbar — fixed, always within viewport width */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          maxWidth: '100vw',
          boxSizing: 'border-box',
          zIndex: 50,
          transition: 'all 0.3s',
          ...(scrolled
            ? {
                backgroundColor: 'rgba(8,8,8,0.9)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #1A1A1A',
                padding: '12px 0',
              }
            : {
                backgroundColor: 'transparent',
                padding: '20px 0',
              }),
        }}
      >
        {/* Inner row — padded, never overflows */}
        <div
          style={{
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollToSection(e, '#home')}
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-tertiary)',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            LSS<span style={{ color: 'var(--color-primary)' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'none',
            }}
            className="md:flex gap-8"
          >
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

          {/* Mobile Hamburger — inline style guarantees it stays in layout */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              color: 'var(--color-tertiary)',
              cursor: 'pointer',
              flexShrink: 0,
              padding: 0,
            }}
            className="md:hidden"
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
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'var(--color-background)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Top bar with close button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderBottom: '1px solid #1A1A1A',
                boxSizing: 'border-box',
              }}
            >
              <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-tertiary)' }}>
                LSS<span style={{ color: 'var(--color-primary)' }}>.</span>
              </span>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-tertiary)',
                  cursor: 'pointer',
                  padding: 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <HiX size={26} />
              </button>
            </div>

            {/* Nav links */}
            <nav style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', padding: '0 24px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  style={{
                    padding: '16px 0',
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'var(--color-tertiary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1A1A1A',
                    display: 'block',
                  }}
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
