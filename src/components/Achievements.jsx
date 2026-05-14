import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiAward, FiStar, FiTrendingUp, FiCode } from 'react-icons/fi';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const SectionHeading = ({ children }) => (
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-3xl md:text-5xl font-heading font-bold mb-12 flex items-center gap-4"
  >
    <span className="text-gradient">{children}</span>
    <span className="h-[1px] flex-1 bg-gradient-to-r from-[#EAB308]/50 to-transparent max-w-[200px]" />
  </motion.h2>
);

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseFloat(value);
      if (start === end) return;
      const totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end) * 10;
      if (incrementTime > 50) incrementTime = 50;

      const timer = setInterval(() => {
        start += (end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [value, duration, inView]);

  const displayValue = Number.isInteger(parseFloat(value)) ? Math.floor(count) : count.toFixed(2);

  return <span ref={ref}>{displayValue}</span>;
};

const Achievements = () => {
  const achievements = [
    {
      title: "1st Prize",
      event: "Prajwalan 2K26 Hackathon",
      icon: FaTrophy,
      color: "#EAB308",
      desc: "Secured first prize at the National Level Hackathon."
    },
    {
      title: "1st Place & Certificate of Appreciation",
      event: "Product Expo Samagra 2K26",
      icon: FiStar,
      color: "#00F5FF",
      desc: "Achieved first place and received a certificate of appreciation."
    },
    {
      title: "1st Place & Certificate of Appreciation",
      event: "Technical Presentation Samagra 2K26",
      icon: FiTrendingUp,
      color: "#8B5CF6",
      desc: "Achieved first place and received a certificate of appreciation."
    },
    {
      title: "Top 10 Nationally",
      event: "National Hackathon",
      icon: FaMedal,
      color: "#F43F5E",
      desc: "Developed LateralShield, competing against top teams nationwide."
    }
  ];

  const stats = [
    { label: "CGPA", value: 9.18, suffix: "" },
    { label: "Hackathon Wins", value: 1, suffix: "" },
    { label: "Projects Built", value: 5, suffix: "+" },
    { label: "National Top 10s", value: 2, suffix: "" }
  ];

  return (
    <section id="achievements" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
      <SectionHeading>Milestones & Awards</SectionHeading>

      {/* Stats Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-xl text-center relative overflow-hidden group hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="absolute inset-0 bg-[var(--color-primary)]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <div className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-tertiary)] mb-2 relative z-10">
              <AnimatedCounter value={stat.value} />
              <span className="text-[var(--color-primary)]">{stat.suffix}</span>
            </div>
            <div className="text-sm font-mono text-[var(--color-muted)] relative z-10">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Trophy Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[var(--color-card)] to-[#0a0a0a] border border-[var(--color-card-border)] p-8 rounded-2xl relative overflow-hidden group"
          >
            {/* Sparkle effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full" style={{ backgroundColor: item.color }} />
            
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 border border-white/10 group-hover:scale-110 transition-transform duration-500" style={{ backgroundColor: `${item.color}15` }}>
              <item.icon size={28} style={{ color: item.color }} />
            </div>

            <h3 className="text-2xl font-bold font-heading mb-2 text-white group-hover:text-[var(--color-tertiary)] transition-colors">{item.title}</h3>
            <h4 className="text-sm font-mono mb-4" style={{ color: item.color }}>{item.event}</h4>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">{item.desc}</p>

            <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
