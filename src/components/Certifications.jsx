import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

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

const Certifications = () => {
  // Placeholder certifications - user will provide the list
  const certs = [
    {
      id: 1,
      title: "AICTE–IBM SkillBuild AIML Internship",
      issuer: "AICTE & IBM",
      date: "Recent",
      link: "#"
    },
    {
      id: 2,
      title: "Generative AI Mastermind",
      issuer: "OutSkill",
      date: "Recent",
      link: "#"
    },
    {
      id: 3,
      title: "Python Certification",
      issuer: "Eduskills",
      date: "Recent",
      link: "#"
    },
    {
      id: 4,
      title: "JavaScript",
      issuer: "Scaler Topics",
      date: "Recent",
      link: "#"
    },
    {
      id: 5,
      title: "HTML & CSS",
      issuer: "Infosys Springboard",
      date: "Recent",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      <SectionHeading>Certifications</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl hover:border-[var(--color-primary)] transition-all flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-primary)]/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
            
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-white/5 rounded-lg text-[var(--color-primary)]">
                <FiAward size={24} />
              </div>
              <a href={cert.link} className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors p-2">
                <FiExternalLink size={20} />
              </a>
            </div>

            <h3 className="text-xl font-bold font-heading mb-2 text-[var(--color-tertiary)] group-hover:text-[var(--color-primary)] transition-colors">
              {cert.title}
            </h3>
            
            <div className="mt-auto pt-4 flex flex-col gap-1">
              <span className="text-sm font-mono text-[var(--color-muted)]">
                {cert.issuer}
              </span>
              <span className="text-xs font-mono text-[var(--color-card-border)]">
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
