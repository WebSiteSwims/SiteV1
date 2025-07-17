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
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-3" />
          <span
            className="text-lg font-bold text-white"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Notre offre
          </span>
        </div>
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bloc gauche */}
          <div className="flex flex-col gap-12">
            <h2
              className="text-white font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "2.5rem",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              OUTILS SUR-<br />
              MESURE, VOTRE<br />
              PROPRIÉTÉ
            </h2>
            <div className="mt-8">
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
              <div
                className="bg-white rounded-2xl p-6 shadow-md"
                style={{
                  fontFamily: "'CO Text', Arial, sans-serif",
                  fontSize: 16,
                  color: "#222",
                  lineHeight: 1.6,
                }}
              >
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
            </div>
          </div>
          {/* Bloc droite */}
          <div className="flex flex-col gap-12">
            <div
              className="bg-white rounded-2xl p-6 shadow-md mb-8"
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
                Chaque projet a ses spécificités. C’est pourquoi on développe <b>des outils parfaitement adaptés à votre environnement</b> technique et à vos méthodes de travail.
              </p>
              <p>
                Vous définissez le besoin, on le transforme en solution robuste, ergonomique, évolutive.
              </p>
              <p className="font-bold" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
                L’outil vous appartient, il est intégré à vos processus <span className="font-normal" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>et vous pouvez le faire évoluer librement.</span>
              </p>
            </div>
            <h2
              className="text-white font-bold mt-8"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "2.2rem",
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