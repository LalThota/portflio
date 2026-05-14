import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[var(--color-card-border)] bg-[var(--color-background)] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[var(--color-muted)] text-sm font-mono">
          <span className="text-[var(--color-primary)]">©</span> {new Date().getFullYear()} Lal Satya Sai
        </div>
        
        <div className="text-[var(--color-muted)] text-sm">
          Built by <span className="text-[var(--color-tertiary)] font-bold">Lal Satya Sai</span> with React.js
        </div>
      </div>
    </footer>
  );
};

export default Footer;
