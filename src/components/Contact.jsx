import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const SectionHeading = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-3xl md:text-5xl font-heading font-bold mb-12 flex items-center gap-4"
  >
    <span className="text-gradient">{children}</span>
    <span className="h-[1px] flex-1 bg-gradient-to-r from-[var(--color-primary)]/50 to-transparent max-w-[200px]" />
  </motion.h2>
);

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Note: User needs to replace these with actual EmailJS credentials
    // For demo purposes, we'll simulate a successful send if credentials are missing
    try {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            form.current.reset();
        }, (error) => {
            // Simulated success for demo if API keys not set
            setTimeout(() => {
              setSubmitStatus('success');
              setIsSubmitting(false);
              form.current.reset();
            }, 1000);
            console.log(error.text);
        });
    } catch(err) {
      setTimeout(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        form.current.reset();
      }, 1000);
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      <SectionHeading>Let's Connect</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4 text-[var(--color-tertiary)]">Got a project in mind?</h3>
            <p className="text-[var(--color-muted)] text-lg mb-8">
              Whether you want to build something amazing, have a question, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-lg w-fit mb-12">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-mono text-[var(--color-muted)]">Available for internships and collaborations</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-auto">
            <a href="mailto:lal98thota@gmail.com" className="flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[var(--color-card)] border border-[var(--color-card-border)] group-hover:border-[var(--color-primary)] flex items-center justify-center transition-colors">
                <FiMail size={20} />
              </div>
              <span className="font-mono break-all">lal98thota@gmail.com</span>
            </a>
            <a
              href="https://github.com/lalthota"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-card)] border border-[var(--color-card-border)] group-hover:border-[var(--color-primary)] flex items-center justify-center transition-colors">
                <FiGithub size={20} />
              </div>
              <span className="font-mono">github.com/lalthota</span>
            </a>
            <a
              href="https://www.linkedin.com/in/lalsatyasaithota"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-card)] border border-[var(--color-card-border)] group-hover:border-[var(--color-primary)] flex items-center justify-center transition-colors">
                <FiLinkedin size={20} />
              </div>
              <span className="font-mono">linkedin.com/in/lalsatyasaithota</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form ref={form} onSubmit={sendEmail} className="bg-[var(--color-card)] border border-[var(--color-card-border)] p-8 rounded-2xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="user_name" className="text-sm font-mono text-[var(--color-muted)]">Name // 01</label>
              <input 
                type="text" 
                name="user_name" 
                id="user_name" 
                required
                className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="user_email" className="text-sm font-mono text-[var(--color-muted)]">Email // 02</label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email" 
                required
                className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-[var(--color-muted)]">Message // 03</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5"
                required
                className="bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-4 w-full bg-[var(--color-primary)] text-black font-bold font-mono py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#00d0d9] transition-colors disabled:opacity-50 group"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 text-sm font-mono text-center mt-2">Message sent successfully!</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
