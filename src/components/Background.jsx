import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5,
            color: '#00F5FF'
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#00F5FF', '#8B5CF6'],
      },
      links: {
        color: '#1A1A1A',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 40,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-noise">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(8,8,8,0.5)] to-[#080808] z-10" />
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="w-full h-full"
        />
      )}
      {/* Blurred Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#00F5FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#8B5CF6] rounded-full mix-blend-screen filter blur-[180px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Background;
