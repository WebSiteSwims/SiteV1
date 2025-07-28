import React, { useRef } from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import refImg1 from "../images/AssistanceTechnique .png";
import refImg2 from "../images/AssistanceTechnique .png";
import refImg3 from "../images/AssistanceTechnique .png";

const valeurs = [
  {
    title: "Pertinence",
    desc: "Des outils conçus pour répondre à des vrais irritants terrain.",
  },
  {
    title: "Expertise",
    desc: "Une maîtrise complète d’AVEVA et développement logiciel, au service de vos projets.",
  },
  {
    title: "Écoute",
    desc: "Une écoute fine des utilisateurs finaux, pas uniquement des chefs de projets.",
  },
  {
    title: "Réactivité",
    desc: "Des réponses rapides et adaptées à chaque situation terrain.",
  },
];

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
      "Aucune perte d’attributs",
      "Un outil robuste et réutilisable pour d’autres projets E3D"
    ]
  },
  {
    title: "Automatisation des livrables AVEVA",
    tags: ["Oil & Gas", "International", "AVEVA"],
    image: refImg2,
    besoin: "Automatiser la génération des livrables AVEVA pour réduire les délais et fiabiliser les données transmises aux équipes terrain.",
    actions: [
      "Développé des scripts d’automatisation sur-mesure",
      "Intégré les outils dans l’environnement client",
      "Formé les équipes à l’utilisation des nouveaux workflows"
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
      "Mise en place d’une gestion fine des droits",
      "Déploiement de solutions de sauvegarde et de chiffrement"
    ],
    resultats: [
      "Aucune fuite de données",
      "Conformité RGPD assurée",
      "Sécurité renforcée pour tous les utilisateurs"
    ]
  }
];

const ValeurAjoute: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#f7f7f7] py-12 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-2 items-center mb-8 lg:mb-12">
          {/* Left - Texte */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 lg:mb-6">
              <img src={iconeFlamme} alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain mr-2" />
              <span
                className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Notre valeur ajoutée
              </span>
            </div>
            <h2
              className="font-bold mb-0"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                lineHeight: 1.1,
                color: "#111",
              }}
            >
              <span className="text-[#7b2ff2]" style={{ fontSize: "clamp(2.5rem, 9vw, 4rem)" }}>4</span>{" "}
              RAISONS DE<br />
              NE PAS PASSER<br />
              À CÔTÉ DE NOUS
            </h2>
          </div>

          {/* Right - Cartes slider rapprochées */}
          <div className="lg:col-span-3 flex justify-start mt-6 lg:mt-0">
            <div
              ref={scrollRef}
              className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#d1c4e9] scrollbar-track-transparent pb-4 w-full"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {valeurs.map((valeur, idx) => (
                <div
                  key={valeur.title}
                  className="min-w-[220px] sm:min-w-[240px] lg:min-w-[260px] max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] bg-white rounded-2xl border-2 border-[#a78bfa] p-4 lg:p-5 shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:bg-[#7b2ff2] hover:border-[#7b2ff2] group cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <h3
                    className="font-bold mb-2 lg:mb-3 transition-colors duration-300 text-[#7b2ff2] group-hover:text-white"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                      fontSize: "clamp(1rem, 3vw, 1.2rem)",
                    }}
                  >
                    {valeur.title}
                  </h3>
                  <p
                    className="transition-colors duration-300 text-[#444] group-hover:text-white"
                    style={{
                      fontFamily: "'CO Text', Arial, sans-serif",
                      fontSize: "clamp(12px, 2.5vw, 14px)",
                      lineHeight: 1.5,
                    }}
                  >
                    {valeur.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValeurAjoute;