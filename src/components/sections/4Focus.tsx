import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import integrateurImg from "../images/Integrateur_AVEVA.png";

const Focus: React.FC = () => {
  return (
    <section className="w-full bg-white pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12 pt-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-black"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Focus
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 pb-12">
          {/* Bloc texte */}
          <div className="flex-1">
            <div
              className="text-base md:text-lg"
              style={{
                fontFamily: "'CO Text', Arial, sans-serif",
                color: "#111",
                lineHeight: 1.6,
              }}
            >
              <p className="mb-6">
                Dans de nombreux projets industriels, les outils AVEVA sont sous-exploités.
              </p>
              <p className="mb-6">
                Entre les catalogues incomplets, les doublons de données ou les paramétrages flous, les équipes perdent du temps et de la cohérence. Résultat&nbsp;? Des projets ralentis, des erreurs coûteuses, et une frustration généralisée.
              </p>
              <p>
                Chez Swims, on sait que l'environnement AVEVA doit s'adapter à vos réalités métier, pas l'inverse. C'est là qu'on intervient, en tant que <span className="font-bold" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>qu'intégrateur certifié, avec une approche ancrée dans vos enjeux industriels.</span>
              </p>
            </div>
          </div>

          {/* Bloc image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={integrateurImg}
              alt="Intégrateur AVEVA"
              className="w-full max-w-md rounded-[40px] object-cover"
              style={{ 
                minWidth: "280px", 
                minHeight: "320px",
                maxWidth: "400px",
                height: "auto"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
