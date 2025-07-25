import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSmoothScroll } from '../../contexts/SmoothScrollContext';
import fondGrain from '../images/FONDGRAINASSISTANCEVioletClaire.jpg';

const HeadAssist: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSmoothScroll();

  useEffect(() => {
    if (containerRef.current) {
      registerSection('headassist', containerRef);
    }
  }, [registerSection]);

  // Animation fluide pour disparition progressive du texte
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.7]);
  const y = useTransform(scrollY, [0, 200], [0, -30]);

  return (
    <section
      id="headassist"
      ref={containerRef}
      className="min-h-[540px] flex items-center justify-center relative overflow-hidden"
      style={{
        background: `url(${fondGrain}) center center / cover no-repeat`,
        borderRadius: '36px',
      }}
    >
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-8 py-20"
        style={{ opacity, y }}
      >
        {/* Bloc gauche */}
        <div className="flex-1">
          <h1
            className="mb-0 text-white text-left"
            style={{
              fontFamily: "'CO Text Light', sans-serif",
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            <span
              style={{
                fontFamily: "'CO HEADLINE LIGHT'",
                fontWeight: 300,
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                lineHeight: 1.05,
                display: 'block',
              }}
            >
              On booste
            </span>
            <span
              style={{
                fontFamily: "'CO HEADLINE BOLD'",
                fontWeight: 700,
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                lineHeight: 1.05,
                display: 'block',
              }}
            >
              votre quotidien<br />industriel
            </span>
          </h1>
        </div>
        {/* Bloc droit */}
        <div className="flex-1 flex flex-col items-end mt-10 md:mt-0 md:pl-16">
          <div
            className="text-white font-bold mb-2 text-right"
            style={{
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              fontSize: 15,
            }}
          >
            L’assistance technique, mais pas comme vous l’imaginez.
          </div>
          <div
            className="text-white text-right mb-8"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 370,
            }}
          >
            Chez Swims, on vous embarque dans une dynamique d’expertise, d’agilité et de performance. Des experts opérationnels, déjà rodés à vos outils, vos projets, vos exigences industrielles.
          </div>
          <button
            className="border-2 border-white text-white rounded-full px-6 py-2 font-bold transition hover:bg-white hover:text-[#7b2ff2]"
            style={{
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              fontSize: 15,
              letterSpacing: 0.5,
            }}
          >
            BESOIN D’EXPERTS ? CONTACTEZ NOUS.
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeadAssist;