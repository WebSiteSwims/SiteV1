import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";

const ExpertiseAVEVA: React.FC = () => {

  return (
    <section className="w-full bg-[#6c19be] pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12 pt-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-white"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Notre expertise AVEVA
          </span>
        </div>

        {/* Header content */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 mb-12">
          {/* Left - Titre principal */}
          <div className="flex-1">
            <h2
              className="text-white font-bold mb-8"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "clamp(2rem, 4vw, 2.7rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              DES OUTILS<br />
              PUISSANTS,<br />
              MAÎTRISÉS<br />
              À 100%
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex-1">
            <div
              className="mb-4 text-white font-bold"
              style={{
                fontFamily: "'CO Text Bold', Arial, sans-serif",
                fontSize: "clamp(16px, 2vw, 17px)",
              }}
            >
              Notre rôle : faire d'AVEVA un moteur de performance industrielle.
            </div>
            <div
              className="text-white"
              style={{
                fontFamily: "'CO Text', Arial, sans-serif",
                fontSize: "clamp(15px, 1.8vw, 16px)",
                lineHeight: 1.6,
              }}
            >
              Nos ingénieurs, certifiés et issus du terrain, interviennent à chaque étape du cycle projet pour structurer, automatiser et sécuriser vos environnements AVEVA, au plus proche de vos besoins métiers.
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="w-full h-20 bg-white rounded-t-[60px] relative z-10" style={{ marginBottom: -40 }} />
    </section>
  );
};

export default ExpertiseAVEVA;
