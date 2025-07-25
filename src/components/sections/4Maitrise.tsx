import React, { useRef } from "react";
import iconeFlamme from "../images/FUSEE-18.png";

const cards = [
  {
    title: "Intégration",
    desc: "On intègre l'ensemble des modules AVEVA à vos environnements métier pour garantir continuité, cohérence et performance projet.",
  },
  {
    title: "Structuration",
    desc: "On définit des structures claires, des nomenclatures fiables et des référentiels adaptés à vos exigences industrielles.",
  },
  {
    title: "Gouvernance",
    desc: "On met en place un administrateur de vos outils : droit d'accès, sauvegardes, versions, archivage. Tout est sous contrôle.",
  },
  {
    title: "Automatisation",
    desc: "On automatise vos workflows et tâches répétitives pour gagner en efficacité et fiabilité sur l'ensemble du cycle projet.",
  },
  {
    title: "Sécurité",
    desc: "On sécurise vos données et vos accès pour garantir la confidentialité et l'intégrité de vos environnements AVEVA.",
  },
];

const Maitrise: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white pb-16 pt-8 relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé */}
        <div className="flex items-center mb-8 md:mb-12">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              color: "#222",
            }}
          >
            Ce qu'on maîtrise
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
              className="min-w-[280px] max-w-[320px] bg-white rounded-2xl border-2 border-[#a78bfa] p-6 shadow-lg flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:bg-[#7b2ff2] hover:border-[#7b2ff2] group cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              <h3
                className="font-bold mb-3 transition-colors duration-300 text-[#7b2ff2] group-hover:text-white"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  fontSize: "1.2rem",
                }}
              >
                {card.title}
              </h3>
              <p
                className="transition-colors duration-300 text-[#444] group-hover:text-white"
                style={{
                  fontFamily: "'CO Text', Arial, sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.5,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-4 h-2 rounded-full bg-[#7b2ff2] opacity-80 inline-block" />
          <span className="w-4 h-2 rounded-full bg-[#e5e5f7] opacity-80 inline-block" />
        </div>
      </div>
    </section>
  );
};

export default Maitrise;
