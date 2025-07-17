import React, { useRef } from "react";
import iconeFlamme from "../images/FUSEE-18.png";

const cards = [
  {
    title: "Intégration",
    desc: "On intègre l’ensemble des modules AVEVA à vos environnements métier pour garantir continuité, cohérence et performance projet.",
  },
  {
    title: "Structuration",
    desc: "On définit des structures claires, des nomenclatures fiables et des référentiels adaptés à vos exigences industrielles.",
  },
  {
    title: "Gouvernance",
    desc: "On met en place un administrateur de vos outils : droit d’accès, sauvegardes, versions, archivage. Tout est sous contrôle.",
  },
  {
    title: "Automatisation",
    desc: "On automatise vos workflows et tâches répétitives pour gagner en efficacité et fiabilité sur l’ensemble du cycle projet.",
  },
  {
    title: "Sécurité",
    desc: "On sécurise vos données et vos accès pour garantir la confidentialité et l’intégrité de vos environnements AVEVA.",
  },
];

const ExpertiseAVEVA: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#6c19be] pt-10 pb-0 px-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          {/* Left */}
          <div className="flex-1 min-w-[300px]">
            <div className="flex items-center mb-6">
              <img src={iconeFlamme} alt="" className="w-7 h-7 mr-3" />
              <span
                className="text-lg font-bold text-white"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Notre expertise AVEVA
              </span>
            </div>
            <h2
              className="text-white font-bold mb-0"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                fontSize: "2.7rem",
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
          {/* Right */}
          <div className="flex-1 min-w-[320px] mt-6 md:mt-0">
            <div
              className="mb-4 text-white font-bold"
              style={{
                fontFamily: "'CO Text Bold', Arial, sans-serif",
                fontSize: 17,
              }}
            >
              Notre rôle : faire d’AVEVA un moteur de performance industrielle.
            </div>
            <div
              className="text-white"
              style={{
                fontFamily: "'CO Text', Arial, sans-serif",
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              Nos ingénieurs, certifiés et issus du terrain, interviennent à chaque étape du cycle projet pour structurer, automatiser et sécuriser vos environnements AVEVA, au plus proche de vos besoins métiers.
            </div>
          </div>
        </div>
      </div>
      {/* Wave bottom */}
      <div className="w-full h-20 bg-white rounded-t-[60px] mt-12 relative z-10" style={{ marginBottom: -40 }} />
      {/* Slider */}
      <div className="w-full bg-white pb-16 pt-8 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Sous-titre */}
          <div className="flex items-center mb-8">
            <img src={iconeFlamme} alt="" className="w-6 h-6 mr-2" />
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                color: "#222",
              }}
            >
              Ce qu’on maîtrise
            </span>
          </div>
          {/* Cartes slider */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#d1c4e9] scrollbar-track-transparent pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {cards.map((card, idx) => (
              <div
                key={card.title}
                className="min-w-[320px] max-w-[340px] flex-shrink-0 rounded-2xl px-7 py-7 bg-white border-2 border-[#e5e5f7] transition-all duration-300 shadow-md cursor-pointer hover:bg-[#7b2ff2] hover:border-[#7b2ff2] group"
                style={{
                  scrollSnapAlign: "start",
                  boxShadow: "0 4px 24px 0 rgba(80,40,120,0.08)",
                }}
              >
                <div
                  className="font-bold mb-2 text-xl transition-colors duration-300 group-hover:text-white"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  {card.title}
                </div>
                <div
                  className="text-base transition-colors duration-300 group-hover:text-white"
                  style={{
                    fontFamily: "'CO Text', Arial, sans-serif",
                  }}
                >
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            <span className="w-4 h-2 rounded-full bg-[#7b2ff2] opacity-80 inline-block" />
            <span className="w-4 h-2 rounded-full bg-[#e5e5f7] opacity-80 inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAVEVA;