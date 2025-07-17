import React, { useRef } from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import refImg1 from "../images/Integrateur_AVEVA.png";
import refImg2 from "../images/Integrateur_AVEVA.png";
import refImg3 from "../images/Integrateur_AVEVA.png";

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

const Reference: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full py-12 px-0 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#d1c4e9] scrollbar-track-transparent pb-6"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {references.map((ref, idx) => (
            <div
              key={ref.title}
              className="min-w-[600px] max-w-[600px] bg-gradient-to-br from-[#7b2ff2] to-[#a18cd1] rounded-[32px] p-8 flex flex-col md:flex-row gap-8 shadow-xl scrollSnapAlign-start"
              style={{
                scrollSnapAlign: "start",
                boxShadow: "0 8px 32px 0 rgba(80,40,120,0.10)",
              }}
            >
              {/* Bloc gauche */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <img src={iconeFlamme} alt="" className="w-7 h-7 mr-3" />
                    <span
                      className="text-2xl font-bold text-white"
                      style={{
                        fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                      }}
                    >
                      Références
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ref.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full"
                        style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div
                    className="text-white font-bold mb-4"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    {ref.title}
                  </div>
                  <div className="mb-4">
                    <div className="text-white font-bold mb-1" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
                      Besoin du client
                    </div>
                    <div className="text-white text-base" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                      {ref.besoin}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-white font-bold mb-1" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
                      Ce que nous avons fait
                    </div>
                    <ul className="list-disc pl-5 text-white text-base" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                      {ref.actions.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
                      Résultats et impacts
                    </div>
                    <ul className="list-disc pl-5 text-white text-base" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                      {ref.resultats.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Bloc droit */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={ref.image}
                  alt={ref.title}
                  className="w-full max-w-[320px] rounded-2xl object-cover"
                  style={{ minHeight: 220, background: "#fff" }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-4 h-2 rounded-full bg-[#7b2ff2] opacity-80 inline-block" />
          <span className="w-4 h-2 rounded-full bg-[#e5e5f7] opacity-80 inline-block" />
          <span className="w-4 h-2 rounded-full bg-[#e5e5f7] opacity-80 inline-block" />
        </div>
        {/* Bas */}
        <div className="mt-16">
          <h2
            className="font-bold mb-2"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              fontSize: "2.2rem",
              lineHeight: 1.1,
              color: "#111",
            }}
          >
            AVEVA <span style={{ color: "#7b2ff2" }}>NOUS DIT TOUT</span><br />
            NOTRE PARTENAIRE TECH
          </h2>
          <div className="text-4xl text-[#7b2ff2] mt-4 mb-8">❝❞</div>
          <div className="text-right text-[#222] font-semibold" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
            Hamza
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reference;