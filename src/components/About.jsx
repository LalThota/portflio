import React from 'react';
import { motion } from 'framer-motion';

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

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Photo Placeholder & Terminal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {/* Terminal Card */}
          <motion.div variants={itemVariants} className="bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-lg overflow-hidden shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-card-border)] bg-[#111]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-[var(--color-muted)]">bash - 80x24</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-2">
                <span className="text-green-400">lal@portfolio:~$</span>
                <span className="text-[var(--color-tertiary)]">whoami</span>
              </div>
              <div className="mt-2 text-[var(--color-muted)] mb-4">
                &gt; CSE Student | AI/ML Enthusiast | Builder
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">lal@portfolio:~$</span>
                <span className="text-[var(--color-tertiary)]">cat location.txt</span>
              </div>
              <div className="mt-2 text-[var(--color-muted)] mb-4">
                &gt; SRKR Engineering College, Bhimavaram (2024–2028)
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">lal@portfolio:~$</span>
                <span className="text-[var(--color-tertiary)] animate-pulse">_</span>
              </div>
            </div>
          </motion.div>

          {/* Photo Placeholder */}
          <motion.div variants={itemVariants} className="relative aspect-[4/3] w-full max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden border border-[var(--color-card-border)] group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-background)] to-[var(--color-card)] z-10" />
            <img src="https://raw.githubusercontent.com/LalThota/portflio/main/WhatsApp%20Image%202026-05-14%20at%209.57.26%20AM.jpeg" alt="Lal Satya Sai" className="absolute inset-0 w-full h-full object-cover z-20 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 border-2 border-[var(--color-primary)]/0 group-hover:border-[var(--color-primary)]/30 transition-colors duration-500 z-30 pointer-events-none" />
            {/* You can replace this with an actual image tag */}
            <div className="absolute bottom-4 left-4 z-30">
              <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-xs font-mono border border-white/10 rounded">Lal Satya Sai</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content & Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-heading font-bold mb-4">Bridging AI & Web</h3>
            <p className="text-[var(--color-muted)] leading-relaxed">
              I am a 2nd-year B.Tech Computer Science student specializing in AI/ML and Full Stack Development. With a strong academic foundation (9.18 CGPA) and a passion for building, I create systems that are both intelligent and beautifully designed.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              My approach merges cutting-edge machine learning with robust web architectures, focusing on security, user experience, and scalable solutions. I thrive in hackathons, turning complex problems into award-winning products.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="mt-8 relative pl-6 border-l border-[var(--color-card-border)] flex flex-col gap-8">
            <div className="relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-primary)]" />
              <span className="text-sm font-mono text-[var(--color-primary)] mb-1 block">2024 - 2028</span>
              <h4 className="text-lg font-bold">B.Tech (Pursuing Currently)</h4>
              <p className="text-sm text-[var(--color-muted)] mt-1">SRKR Engineering College • 9.18 CGPA</p>
            </div>
            
            <div className="relative">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-secondary)]" />
              <span className="text-sm font-mono text-[var(--color-secondary)] mb-1 block">Present</span>
              <h4 className="text-lg font-bold">Associative Member</h4>
              <p className="text-sm text-[var(--color-muted)] mt-1">SRKR Coding Club • Hackathon Winner</p>
            </div>
          </motion.div>

          {/* Floating Tags */}
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3">
            {['Problem Solver', 'Fast Learner', 'Team Player', 'Security Focused'].map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded bg-[var(--color-card)] border border-[var(--color-card-border)] text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all cursor-default">
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
