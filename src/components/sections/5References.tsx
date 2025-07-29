import React, { useRef } from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import refImg1 from "../images/Référence_intégrateuur_aveva_V2.png";
import refImg2 from "../images/Référence_intégrateuur_aveva_V2.png";
import refImg3 from "../images/Référence_intégrateuur_aveva_V2.png";
import guillemets from "../images/guillemets orange-24.png";
import fondCard from "../images/FONDGRAINAVEVAVIOLET.jpg";

const references = [
  {
    title: "Migration intelligente vers E3D : zéro perte, 100% fluidité",
    tags: ["Nucléaire", "France", "EPR2"],
    image: refImg1,
    besoin: "Migrer catalogue, supports et structures de PDMS vers E3D sans perte de données, en assurant une compatibilité complète avec les nouvelles règles de modélisation.",
    actions: [
      "Développé SWSWAP, un outil sur-mesure de migration (unitaire & en masse)",
      "Analysé les conflits potentiels entre les catalogues PDMS et natifs E3D",
      "Migré 777 éléments du catalogue en conservant leurs attributs",
      "Adapté les supports/structures aux nouvelles règles E3D",
      "Corrigé les erreurs maquette en collaboration avec les équipes terrain"
    ],
    resultats: [
      "100 % des éléments migrés après corrections",
      "Plus de 4 900 objets traités",
      "Aucune perte d'attributs",
      "Un outil robuste et réutilisable pour d'autres projets E3D"
    ]
  },
  {
    title: "Automatisation des livrables AVEVA",
    tags: ["Oil & Gas", "International", "AVEVA"],
    image: refImg2,
    besoin: "Automatiser la génération des livrables AVEVA pour réduire les délais et fiabiliser les données transmises aux équipes terrain.",
    actions: [
      "Développé des scripts d'automatisation sur-mesure",
      "Intégré les outils dans l'environnement client",
      "Formé les équipes à l'utilisation des nouveaux workflows"
    ],
    resultats: [
      "Livrables générés 3x plus rapidement",
      "Réduction des erreurs humaines",
      "Adoption rapide par les équipes"
    ]
  },
  {
    title: "Sécurisation des accès et des données",
    tags: ["Industrie", "France", "Cybersécurité"],
    image: refImg3,
    besoin: "Sécuriser les accès aux environnements AVEVA et garantir la confidentialité des données sensibles.",
    actions: [
      "Audit des accès et des droits utilisateurs",
      "Mise en place d'une gestion fine des droits",
      "Déploiement de solutions de sauvegarde et de chiffrement"
    ],
    resultats: [
      "Aucune fuite de données",
      "Conformité RGPD assurée",
      "Sécurité renforcée pour tous les utilisateurs"
    ]
  }
];

const Reference: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % references.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + references.length) % references.length);
  };

  return (
    <section className="w-full bg-[#f7f7f7] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé */}
        <div className="flex items-center mb-8 md:mb-12 pt-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-black"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Références
          </span>
        </div>

        {/* Carte unique centrée */}
        <div className="flex justify-center mb-8">
          <div
            className="w-full max-w-5xl rounded-[20px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 shadow-xl relative"
            style={{
              background: `url(${fondCard}) center center / cover no-repeat`,
              boxShadow: "0 8px 32px 0 rgba(80,40,120,0.15)",
              minHeight: "clamp(400px, 50vh, 600px)",
            }}
          >
            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-lg sm:text-xl transition-all duration-200"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-lg sm:text-xl transition-all duration-200"
            >
              →
            </button>

            {/* Header avec titre et tags */}
            <div className="mb-4 sm:mb-6">
              <h3
                className="text-white font-bold mb-3 sm:mb-4"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  fontSize: "clamp(1.2rem, 4vw, 2rem)",
                  lineHeight: 1.2,
                }}
              >
                {references[currentSlide].title}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                {references[currentSlide].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 sm:px-4 sm:py-2 bg-white/20 rounded-full text-white font-medium"
                    style={{
                      fontFamily: "'CO Text Bold', Arial, sans-serif",
                      fontSize: "clamp(12px, 2vw, 14px)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Layout avec image à droite et contenu en 2 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* Colonnes de contenu (2/3) */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Colonne gauche */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4
                      className="text-white font-bold mb-2 sm:mb-3"
                      style={{
                        fontFamily: "'CO Text Bold', Arial, sans-serif",
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                      }}
                    >
                      Besoin du client
                    </h4>
                    <p
                      className="text-white/90"
                      style={{
                        fontFamily: "'CO Text', Arial, sans-serif",
                        fontSize: "clamp(14px, 2vw, 15px)",
                        lineHeight: 1.6,
                      }}
                    >
                      {references[currentSlide].besoin}
                    </p>
                  </div>

                  <div>
                    <h4
                      className="text-white font-bold mb-2 sm:mb-3"
                      style={{
                        fontFamily: "'CO Text Bold', Arial, sans-serif",
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                      }}
                    >
                      Ce que nous avons fait
                    </h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {references[currentSlide].actions.map((action, i) => (
                        <li
                          key={i}
                          className="text-white/90 flex items-start"
                          style={{
                            fontFamily: "'CO Text', Arial, sans-serif",
                            fontSize: "clamp(13px, 2vw, 15px)",
                            lineHeight: 1.5,
                          }}
                        >
                          <span className="text-white mr-2 mt-1">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Colonne droite */}
                <div className="mt-4 md:mt-0">
                  <h4
                    className="text-white font-bold mb-2 sm:mb-3"
                    style={{
                      fontFamily: "'CO Text Bold', Arial, sans-serif",
                      fontSize: "clamp(16px, 2.5vw, 18px)",
                    }}
                  >
                    Résultats et impacts
                  </h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {references[currentSlide].resultats.map((resultat, i) => (
                      <li
                        key={i}
                        className="text-white/90 flex items-start"
                        style={{
                          fontFamily: "'CO Text', Arial, sans-serif",
                          fontSize: "clamp(13px, 2vw, 15px)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span className="text-white mr-2 mt-1">•</span>
                        <span>{resultat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image à droite (1/3) */}
              <div className="lg:col-span-1 flex items-center justify-center mt-4 lg:mt-0">
                <div className="w-full max-w-xs sm:max-w-sm lg:max-w-none">
                  <img
                    src={references[currentSlide].image}
                    alt={references[currentSlide].title}
                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                    style={{
                      maxHeight: "clamp(250px, 40vh, 500px)",
                      minHeight: "clamp(200px, 30vh, 350px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicateurs */}
        <div className="flex justify-center mb-8 sm:mb-12 gap-2 sm:gap-3">
          {references.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#7b2ff2] scale-125' 
                  : 'bg-[#e5e5f7] hover:bg-[#d1c4e9]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reference;
