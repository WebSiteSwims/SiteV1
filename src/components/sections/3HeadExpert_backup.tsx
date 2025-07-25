import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSmoothScroll } from "../../contexts/SmoothScrollContext";
import degradeGrain from "../images/DEGRADE GRAIN.jpg";

const HeadExpert: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSmoothScroll();

  useEffect(() => {
    if (containerRef.current) {
      registerSection("expert", containerRef);
    }
  }, [registerSection]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      id="expert"
      ref={containerRef}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-0"
      style={{
        background: `url(${degradeGrain}) center center / cover no-repeat`,
      }}
    >
      <motion.div
        className="z-10 lg:pl-10 xl:pl-20 flex-1 flex items-center w-full lg:w-auto mb-8 lg:mb-0"
        style={{ opacity, y }}
      >
        <h1
          className="mb-6 text-white drop-shadow-lg text-left"
          style={{
            fontFamily: "'CO HEADLINE LIGHT', Arial, sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(2.5rem, 8vw, 9rem)',
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              fontFamily: "'CO HEADLINE LIGHT'",
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 8vw, 9rem)',
              lineHeight: 1.00,
              display: 'inline',
            }}
          >
            L'ingénierie,<br />
          </span>
          <span
            style={{
              fontFamily: "'CO HEADLINE BOLD'",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 8vw, 9rem)',
              lineHeight: 1.00,
              display: 'inline',
            }}
          >
            simplifiée
          </span>
          <br />
          <span
            style={{
              fontFamily: "'CO HEADLINE LIGHT'",
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 8vw, 9rem)',
              lineHeight: 1.00,
              display: 'inline',
            }}
          >
            L'impact,<br />
          </span>
          <span
            style={{
              fontFamily: "'CO HEADLINE BOLD'",
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 8vw, 9rem)',
              lineHeight: 1.00,
              display: 'inline',
            }}
          >
            amplifié
          </span>
        </h1>
      </motion.div>
      <motion.div
        className="z-10 lg:pr-10 xl:pr-20 flex-1 flex flex-col justify-center items-start lg:items-end w-full lg:w-auto"
        style={{ opacity, y }}
      >
        <div
          style={{
            maxWidth: 500,
            color: "#fff",
            fontFamily: "'CO Text', Arial, sans-serif",
            marginTop: 0,
            width: "100%",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 'clamp(14px, 2vw, 16px)',
              color: "#fff",
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              marginBottom: 16,
              textAlign: "left",
            }}
          >
            On connecte les expertises pour créer un impact réel sur vos projets industriels.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              color: "#fff",
              fontFamily: "'CO Text', Arial, sans-serif",
              lineHeight: 1.6,
              marginBottom: 32,
              textAlign: "left",
            }}
          >
            Des maquettes 3D aux outils AVEVA, on ne fait pas juste de l'ingénierie. On la rend agile, humaine et sur-mesure. On transforme des environnements techniques complexes en solutions fluides, utiles et parfaitement alignées avec la réalité du terrain.
          </p>
          <div className="w-full flex justify-start lg:justify-end">
            <button
              className="border border-white text-white font-bold rounded-full px-6 sm:px-8 py-3 transition hover:bg-white hover:text-[#ff7300]"
              style={{
                fontFamily: "'CO Text Bold', Arial, sans-serif",
                fontSize: 'clamp(14px, 2vw, 16px)',
                background: "transparent",
                cursor: "pointer",
                border: "2px solid #fff",
              }}
            >
              UN PROJET ? BRIEFEZ-NOUS
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeadExpert;
