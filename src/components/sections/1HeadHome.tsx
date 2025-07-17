import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSmoothScroll } from '../../contexts/SmoothScrollContext';
import fuseeHome from '../images/FUSEE-Home.png';
import degradeGrain from '../images/DEGRADE GRAIN.jpg'; // Ajoute cet import

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollTo, registerSection } = useSmoothScroll();

  useEffect(() => {
    if (containerRef.current) {
      registerSection('hero', containerRef);
    }
  }, [registerSection]);

  // Animation fluide pour disparition progressive du texte
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-start justify-start relative overflow-hidden"
      style={{
        background: `url(${degradeGrain}) center center / cover no-repeat`,
      }}
    >
      <motion.div
        className="z-10 pt-30 pl-10 md:pt-60 md:pl-20"
        style={{ opacity, y }}
      >
        <h1
          className="mb-6 text-white drop-shadow-lg text-left"
          style={{
            fontFamily: "'CO Text Light', sans-serif",
            fontWeight: 300,
            fontSize: '4.5rem',
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              fontFamily: "'CO HEADLINE LIGHT'",
              fontWeight: 300,
              fontSize: '9rem',
              lineHeight: 1.00, 
              display: 'inline',
            }}
          >
            L'expertise qui vous <br />
          </span>
          <span
            style={{
              fontFamily: "'CO HEADLINE BOLD'",
              fontWeight: 700,
              fontSize: '9rem',
              lineHeight: 1.00, 
              display: 'inline',
            }}
          >
            propulse <span className="text-white">!</span>
          </span>
        </h1>
      </motion.div>

      <img
        src={fuseeHome}
        alt="Fusée Home"
        className="absolute bottom-[-310px] right-[-450px] w-[1400px] h-[1150px] object-contain z-10"
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 1,
          transform: 'rotate(-12deg)',
        }}
      />
    </section>
  );
};

export default Hero;