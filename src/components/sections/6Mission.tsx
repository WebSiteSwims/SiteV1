import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import guillemets from "../images/guillemets orange-24.png";

const missions = [
  {
    title: "Un accompagnement personnalisé",
    description: "Un point de contact dédié, des échanges réguliers, une vraie écoute de vos enjeux."
  },
  {
    title: "Tout l'écosystème Swims à vos côtés",
    description: "Accès à nos retours d'expérience, à nos outils maison et à un support réactif."
  },
  {
    title: "Une agilité permanente",
    description: "On s'adapte à l'évolution de vos besoins, même en cours de mission"
  }
];

const Mission: React.FC = () => {
  return (
    <section className="w-full bg-[#B8B8FF] py-16 relative">
      {/* Formes arrondies en haut et en bas */}
      <div 
        className="absolute top-0 left-0 w-full h-16 bg-white"
        style={{
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-16"
        style={{
          backgroundColor: "#f7f7f7",
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        {/* Header avec titre */}
        <div className="flex items-center mb-8 md:mb-12">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-white"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Mission
          </span>
        </div>

        {/* Titre principal */}
        <h2
          className="font-bold mb-12 lg:mb-16 text-white"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
            lineHeight: 1.1,
          }}
        >
          UNE MISSION, UNE<br />
          VRAIE RELATION
        </h2>

        {/* Cartes en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.05)",
              }}
            >
              <h3
                className="font-bold mb-4 text-center"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                  lineHeight: 1.2,
                  color: "#111",
                }}
              >
                {mission.title}
              </h3>
              <p
                className="text-center text-gray-700"
                style={{
                  fontFamily: "'CO Text', Arial, sans-serif",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  lineHeight: 1.6,
                }}
              >
                {mission.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section citation avec guillemets */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img src={guillemets} alt="Guillemets" className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          
          <p
            className="font-medium mb-8 max-w-4xl mx-auto text-white"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
              lineHeight: 1.4,
            }}
          >
            Parce que réussir, c'est bien plus que livrer une<br />
            prestation : c'est créer un vrai partenariat qui accélère<br />
            vos résultats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
