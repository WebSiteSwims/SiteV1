import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import bgOffre from "../images/FONDDEGRADEASSISTANCEVioletClaire.jpg";

const NosOffres: React.FC = () => {
  return (
    <section
      className="w-full py-16 px-0 relative overflow-hidden"
      style={{
        background: `url(${bgOffre}) center center / cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-white"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Notre offre
          </span>
        </div>

        {/* Première ligne : OUTILS SUR-MESURE + Case Conçus pour */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "3.2rem",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              OUTILS SUR-<br />
              MESURE, VOTRE<br />
              PROPRIÉTÉ
            </h2>
          </div>
          <div
            className="bg-white rounded-2xl p-6 shadow-md"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              fontSize: 16,
              color: "#222",
              lineHeight: 1.6,
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "1.3rem",
                color: "#111",
              }}
            >
              Conçus pour, et à vous
            </h3>
            <p>
              Chaque projet a ses spécificités. C'est pourquoi on développe <b>des outils parfaitement adaptés à votre environnement</b> technique et à vos méthodes de travail.
            </p>
            <p>
              Vous définissez le besoin, on le transforme en solution robuste, ergonomique, évolutive.
            </p>
            <p className="font-bold" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              L'outil vous appartient, il est intégré à vos processus <span className="font-normal" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>et vous pouvez le faire évoluer librement.</span>
            </p>
          </div>
        </div>

        {/* Deuxième ligne : Case Outil by Swims + OUTILS INNOVANTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="bg-white rounded-2xl p-6 shadow-md"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              fontSize: 16,
              color: "#222",
              lineHeight: 1.6,
            }}
          >
            <h3
              className="font-bold mb-2"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "1.3rem",
                color: "#111",
              }}
            >
              Outil by Swims
            </h3>
            <p className="mb-2">
              Grâce à nos retours terrain et notre expertise <b>AVEVA</b>, on a aussi développé notre propre outil.
            </p>
            <p className="mb-2">
              Pensé pour répondre à des irritants récurrents, il permet de gagner du temps, fiabiliser les données et fluidifier la production.
            </p>
            <p className="mb-4 font-bold" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              Disponible en licence, notre solution DMDS, améliore la qualité de vos maquettes.
            </p>
            <button
              className="bg-[#bcaaff] hover:bg-[#7b2ff2] text-white font-bold rounded-full px-6 py-2 transition"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: 15,
              }}
            >
              DÉCOUVREZ DMDS
            </button>
          </div>
          <div>
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "3.2rem",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              OUTILS<br />
              INNOVANTS<br />
              DÉVELOPPÉS<br />
              PAR NOUS
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosOffres;
