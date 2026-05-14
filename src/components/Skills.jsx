import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  FaPython, FaJs, FaJava, FaDatabase, 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
  FaRobot, FaChartBar, FaCalculator, FaCloud, FaLaptopCode, FaTools
} from 'react-icons/fa';
import { 
  SiFramer, SiMongodb 
} from 'react-icons/si';

const SectionHeading = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-3xl md:text-5xl font-heading font-bold mb-12 flex items-center gap-4"
  >
    <span className="text-gradient">{children}</span>
    <span className="h-[1px] flex-1 bg-gradient-to-r from-[var(--color-secondary)]/50 to-transparent max-w-[200px]" />
  </motion.h2>
);

const TiltCard = ({ title, items, className, accentColor }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-2xl bg-[var(--color-card)] border border-[var(--color-card-border)] p-6 group transition-colors duration-500 hover:border-${accentColor}/50 ${className}`}
    >
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${accentColor}, transparent 70%)` }}
      />
      
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-6 font-heading flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
          {title}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-auto">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex flex-col items-center gap-2 p-3 rounded bg-[#111] border border-white/5 hover:bg-white/5 transition-colors"
            >
              <item.icon size={24} style={{ color: item.color || accentColor }} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
              <span className="text-xs font-mono text-center text-[var(--color-muted)] group-hover:text-white transition-colors">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      accent: "#EAB308", // Yellow
      className: "md:col-span-2 lg:col-span-1 lg:row-span-2",
      items: [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      ]
    },
    {
      title: "Frontend",
      accent: "#00F5FF", // Cyan
      className: "md:col-span-1 lg:col-span-1",
      items: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Framer", icon: SiFramer, color: "#0055FF" },
      ]
    },
    {
      title: "Backend & DB",
      accent: "#22C55E", // Green
      className: "md:col-span-1 lg:col-span-1",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ]
    },
    {
      title: "AI & ML",
      accent: "#8B5CF6", // Violet
      className: "md:col-span-2 lg:col-span-1",
      items: [
        { name: "Scikit-learn", icon: FaRobot, color: "#F7931E" },
        { name: "Pandas", icon: FaChartBar, color: "#150458" },
        { name: "NumPy", icon: FaCalculator, color: "#013243" },
        { name: "Gemini API", icon: FaCloud, color: "#4285F4" }, // Proxy icon
      ]
    },
    {
      title: "Tools",
      accent: "#F43F5E", // Rose
      className: "md:col-span-2 lg:col-span-2",
      items: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        { name: "VS Code", icon: FaLaptopCode, color: "#007ACC" },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10 perspective-[2000px]">
      <SectionHeading>Technical Arsenal</SectionHeading>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((cat, i) => (
          <TiltCard 
            key={i} 
            title={cat.title} 
            items={cat.items} 
            className={cat.className} 
            accentColor={cat.accent}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
