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
      className="min-h-screen flex items-center justify-between relative overflow-hidden"
      style={{
        background: `url(${degradeGrain}) center center / cover no-repeat`,
      }}
    >
      <motion.div
        className="z-10 pl-10 md:pl-20 flex-1 flex items-center"
        style={{ opacity, y }}
      >
        <h1
          className="mb-6 text-white drop-shadow-lg text-left"
          style={{
            fontFamily: "'CO HEADLINE LIGHT', Arial, sans-serif",
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
            L’ingénierie,<br />
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
            simplifiée
          </span>
          <br />
          <span
            style={{
              fontFamily: "'CO HEADLINE LIGHT'",
              fontWeight: 300,
              fontSize: '9rem',
              lineHeight: 1.00,
              display: 'inline',
            }}
          >
            L’impact,<br />
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
            amplifié
          </span>
        </h1>
      </motion.div>
      <motion.div
        className="z-10 pr-10 md:pr-20 flex-1 flex flex-col justify-center items-end"
        style={{ opacity, y }}
      >
        <div
          style={{
            maxWidth: 500,
            color: "#fff",
            fontFamily: "'CO Text', Arial, sans-serif",
            marginTop: 0,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: "#fff",
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              marginBottom: 16,
              textAlign: "right",
            }}
          >
            On connecte les expertises pour créer un impact réel sur vos projets industriels.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: 15,
              color: "#fff",
              fontFamily: "'CO Text', Arial, sans-serif",
              lineHeight: 1.6,
              marginBottom: 32,
              textAlign: "right",
            }}
          >
            Des maquettes 3D aux outils AVEVA, on ne fait pas juste de l’ingénierie. On la rend agile, humaine et sur-mesure. On transforme des environnements techniques complexes en solutions fluides, utiles et parfaitement alignées avec la réalité du terrain.
          </p>
          <button
            className="border border-white text-white font-bold rounded-full px-8 py-3 transition hover:bg-white hover:text-[#ff7300]"
            style={{
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              fontSize: 16,
              background: "transparent",
              cursor: "pointer",
              border: "2px solid #fff",
              float: "right",
            }}
          >
            UN PROJET ? BRIEFEZ-NOUS
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeadExpert;