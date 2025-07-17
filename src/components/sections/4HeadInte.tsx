import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSmoothScroll } from "../../contexts/SmoothScrollContext";
import bgImage from "../images/FONDGRAINAVEVAVIOLET.jpg";

const HeadInte: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSmoothScroll();

  useEffect(() => {
    if (containerRef.current) {
      registerSection("headinte", containerRef);
    }
  }, [registerSection]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      id="headinte"
      ref={containerRef}
      className="min-h-screen flex items-start justify-start relative overflow-hidden"
      style={{
        background: `url(${bgImage}) center center / cover no-repeat`,
      }}
    >
      <motion.div
        className="z-10 pt-32 pl-10 md:pt-60 md:pl-20"
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
            On connecte<br />
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
            AVEVA à la<br />réalité terrain
          </span>
        </h1>
      </motion.div>
      <motion.div
        className="z-10 pt-32 pr-10 md:pt-60 md:pr-20 flex-1 flex flex-col justify-center items-start"
        style={{ opacity, y }}
      >
        <div
          style={{
            maxWidth: 520,
            color: "#fff",
            fontFamily: "'CO Text', Arial, sans-serif",
            marginLeft: "auto",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: "#fff",
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              marginBottom: 18,
              textAlign: "left",
            }}
          >
            Intégrer AVEVA, c’est bien. En faire un levier de performance, c’est mieux.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: 17,
              color: "#fff",
              fontFamily: "'CO Text', Arial, sans-serif",
              lineHeight: 1.6,
              marginBottom: 36,
              textAlign: "left",
            }}
          >
            On connecte les outils, les données et les équipes pour transformer AVEVA en un système robuste, fluide et taillé pour vos objectifs industriels. Avec nous, AVEVA devient un terrain de jeu optimisé pour votre industrie.
          </p>
          <button
            className="border border-white text-white font-bold rounded-full px-8 py-3 transition hover:bg-white hover:text-[#7b2ff2]"
            style={{
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              fontSize: 16,
              background: "transparent",
              cursor: "pointer",
              border: "2px solid #fff",
            }}
          >
            UN PROJET AVEVA ? CONTACTEZ NOUS.
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeadInte;