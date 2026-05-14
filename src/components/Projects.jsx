import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiAward } from 'react-icons/fi';

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

const projectsData = [
  {
    id: 1,
    title: "LateralShield",
    subtitle: "Honeypot Intrusion Detection System",
    description: "Cybersecurity tool that detects lateral movement attacks using honeypot traps. Analyzes network traffic patterns to identify malicious actors within a network perimeter.",
    tech: ["Python", "Network Security"],
    category: ["Hackathon", "AI/ML"],
    featured: true,
    badgeText: "🏆 National Top 10",
    links: { github: "#", live: "https://lateral-yo4y.vercel.app/" },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },

  {
    id: 3,
    title: "AI Agent Gym Planner",
    subtitle: "Personalized Workout Generator",
    description: "Multi-agent system that acts as a virtual personal trainer. Generates custom workout plans based on user goals, body metrics, and equipment availability.",
    tech: ["Python", "React.js"],
    category: ["AI/ML", "Full Stack"],
    featured: false,
    links: { github: "#", live: "#" },
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "FairLens",
    subtitle: "Predictive Analytics Model",
    description: "Machine learning model predicting organizational decision failures using behavioral and historical data. Built for Smart India Hackathon to assist management boards.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    category: ["AI/ML", "Hackathon"],
    featured: false,
    links: { github: "https://github.com/bhanusai06/FairLens", live: "https://fair-lens.vercel.app" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "College Utility Portal",
    subtitle: "Campus Management System",
    description: "Comprehensive full-stack portal for SRKR Engineering College students. Features include timetable management, official notices, resource sharing, and a student dashboard.",
    tech: ["React.js", "Node.js", "MongoDB"],
    category: ["Full Stack"],
    featured: false,
    links: { github: "https://github.com/LalThota/SRKRCUP.git", live: "https://srkrcupp.vercel.app/" },
    image: "https://raw.githubusercontent.com/LalThota/portflio/main/Screenshot%20From%202026-05-14%2010-47-43.png"
  },

  {
    id: 6,
    title: "AI Diet Planner",
    subtitle: "AI Powered Diet Planner",
    description: "An intelligent platform that generates highly personalized diet plans based on user health metrics and nutritional goals.",
    tech: ["React.js", "AI/ML"],
    category: ["Full Stack", "AI/ML"],
    featured: false,
    links: { github: "https://github.com/LalThota/ai-dietplanner.git", live: "https://ai-dietplanner.vercel.app/" },
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "SkillBridge",
    subtitle: "Skill Bridging Platform",
    description: "A comprehensive platform designed to bridge the gap between academic learning and industry requirements through structured courses.",
    tech: ["React.js", "Full Stack"],
    category: ["Full Stack"],
    featured: false,
    links: { github: "https://github.com/LalThota/SkillBridge.git", live: "https://skill-bridge-pied.vercel.app/" },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Finora Business Analysis",
    subtitle: "Business Analytics Dashboard",
    description: "A business analytics dashboard designed to process and provide interactive reporting insights for enterprise data.",
    tech: ["React.js", "Data Analytics"],
    category: ["Full Stack"],
    featured: false,
    links: { github: "https://github.com/LalThota/Finora.git", live: "https://finora-pied.vercel.app/" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Ecowipe",
    subtitle: "E-Waste Management",
    description: "An environmental sustainability platform aimed at tracking, managing, and promoting the proper disposal of electronic waste.",
    tech: ["HTML", "JavaScript"],
    category: ["Full Stack", "Hackathon"],
    featured: true,
    badgeText: "🏆 1st Prize Prajwalan",
    links: { github: "#", live: "https://charan242726.github.io/e-waste/" },
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "AI/ML", "Full Stack", "Hackathon"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      <SectionHeading>Featured Work</SectionHeading>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-12">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 border ${
              filter === f 
                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-black font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)]' 
                : 'bg-transparent border-[var(--color-card-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className={`group relative rounded-xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-card-border)] hover:border-[var(--color-primary)]/50 transition-colors ${
                project.featured ? 'md:col-span-2 xl:col-span-2' : ''
              }`}
            >
              {/* Image background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10 mix-blend-multiply" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-30 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Content overlay */}
              <div className="relative z-20 h-full flex flex-col p-8 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/80 to-transparent">
                
                {/* Badges */}
                <div className="flex justify-between items-start mb-auto">
                  {project.featured && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border border-[var(--color-secondary)]/30 rounded-full text-xs font-bold backdrop-blur-md">
                      <FiAward /> {project.badgeText}
                    </span>
                  )}
                  <div className="flex gap-2 ml-auto">
                    <a href={project.links.github} className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all backdrop-blur-md">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.links.live} className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:text-black hover:border-[var(--color-primary)] transition-all backdrop-blur-md">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="mt-32">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-mono text-[var(--color-muted)] mb-4 uppercase tracking-wider">
                    {project.subtitle}
                  </h4>
                  
                  {/* Hover Reveal Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-[var(--color-tertiary)]/80 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated Border Reveal on Hover */}
              <div className="absolute inset-0 border-2 border-[var(--color-primary)] opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-500 pointer-events-none rounded-xl z-30" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
