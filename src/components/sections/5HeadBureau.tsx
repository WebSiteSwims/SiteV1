import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSmoothScroll } from "../../contexts/SmoothScrollContext";
import bgBureau from "../images/FONDGRAINASSISTANCEVioletClaire.jpg";

const HeadBureau: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSmoothScroll();

  useEffect(() => {
    if (containerRef.current) {
      registerSection("headbureau", containerRef);
    }
  }, [registerSection]);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -40]);

  return (
    <section
      id="headbureau"
      ref={containerRef}
      className="min-h-screen flex items-start justify-start relative overflow-hidden rounded-[40px] md:rounded-[48px] mt-8"
      style={{
        background: `url(${bgBureau}) center center / cover no-repeat`,
      }}
    >
      <motion.div
        className="z-10 pt-32 pl-10 md:pt-60 md:pl-20 flex-1 flex items-center"
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
              fontSize: '4.5rem',
              lineHeight: 1.00,
              display: 'block',
            }}
          >
            Le bureau<br />d’étude
          </span>
          <span
            style={{
              fontFamily: "'CO HEADLINE BOLD'",
              fontWeight: 700,
              fontSize: '4.5rem',
              lineHeight: 1.00,
              display: 'block',
            }}
          >
            qui code vos idées
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
              fontSize: 16,
              color: "#fff",
              fontFamily: "'CO Text Bold', Arial, sans-serif",
              marginBottom: 16,
              textAlign: "left",
            }}
          >
            Un bureau d’étude qui ne livre pas que des livrables
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: 15,
              color: "#fff",
              fontFamily: "'CO Text', Arial, sans-serif",
              lineHeight: 1.6,
              marginBottom: 32,
              textAlign: "left",
            }}
          >
            On conçoit des outils. Notre BE est un catalyseur de performance industrielle : il transforme vos problématiques en solutions concrètes, robustes et durables en exploitant le plein potentiel d’AVEVA et de vos données techniques.
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
            UN OUTIL A DEV ? CONTACTEZ NOUS.
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeadBureau;