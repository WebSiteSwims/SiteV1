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
    <div className="relative">
      {/* Partie blanche au-dessus avec bords arrondis */}
      <div 
        className="w-full h-28 bg-white"
        style={{
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      ></div>
      
      <section
        id="headassist"
        ref={containerRef}
        className="min-h-[540px] flex items-center justify-center relative overflow-hidden"
        style={{
          background: `url(${fondGrain}) center center / cover no-repeat`,
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
        }}
      >
        {/* Forme arrondie en bas */}
        <div 
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{
            borderTopLeftRadius: "60px",
            borderTopRightRadius: "60px",
          }}
        />
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-6 lg:px-8 py-20 relative z-10 gap-0"
        style={{ opacity, y }}
      >
        {/* Bloc gauche */}
        <div className="flex-1">
          <h1
            className="mb-0 text-white text-left"
            style={{
              fontFamily: "'CO Text Light', sans-serif",
              fontWeight: 300,
              lineHeight: 1.05,
            }}
          >
            <div
              style={{
                fontFamily: "'CO HEADLINE LIGHT'",
                fontWeight: 300,
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                lineHeight: 1.05,
              }}
            >
              On booste
            </div>
            <div
              style={{
                fontFamily: "'CO HEADLINE BOLD'",
                fontWeight: 700,
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                lineHeight: 1.05,
              }}
            >
              votre quotidien
            </div>
            <div
              style={{
                fontFamily: "'CO HEADLINE BOLD'",
                fontWeight: 700,
                fontSize: 'clamp(4rem, 12vw, 9rem)',
                lineHeight: 1.05,
              }}
            >
              industriel
            </div>
          </h1>
        </div>
        {/* Bloc droit */}
        <div className="flex-1 flex flex-col items-start mt-0 md:mt-0">
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
              maxWidth: 480,
            }}
          >
            Chez Swims, on vous embarque dans une dynamique d’expertise, d’agilité et de performance. Des experts opérationnels, déjà rodés à vos outils, vos projets, vos exigences industrielles.
          </div>
          <button
            className="border-2 border-white text-white rounded-full px-6 py-2 font-bold transition hover:bg-white hover:text-[#7b2ff2]"
            style={{
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              fontSize: 16,
              letterSpacing: 0.5,
            }}
          >
            BESOIN D’EXPERTS ? CONTACTEZ NOUS.
          </button>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default HeadAssist;