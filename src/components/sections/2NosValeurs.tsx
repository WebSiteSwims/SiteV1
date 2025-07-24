import React from "react";
import iconeValeurs from "../images/FUSEE-18.png";
import collaborationImg from "../images/Collaboration.png";
import excellenceImg from "../images/ExcellenceTechnique.png";
import innovationImg from "../images/Confiance.png";

const valeurs = [
  {
    img: collaborationImg,
    alt: "Collaboration",
    title: "Collaboration",
    text: "On avance ensemble, en équipe, avec nos clients et partenaires.",
  },
  {
    img: excellenceImg,
    alt: "Excellence Technique",
    title: "Excellence Technique",
    text: "On vise l’excellence sur chaque projet, avec rigueur et expertise.",
  },
  {
    img: innovationImg,
    alt: "Confiance",
    title: "Confiance",
    text: "On casse les codes et on innove pour propulser vos projets.",
  },
];

const NosValeurs: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-0">
      {/* Bandeau titre + Titre principal + Valeurs dans le même container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 pt-6 pb-2">
          <img src={iconeValeurs} alt="" className="w-6 h-6" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}
          >
            Nos valeurs
          </span>
        </div>
        <div className="mb-12 md:mb-16">
          <h2
            className="font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            ON MIXE L’EXPERTISE D’INGÉNIEUR<br />
            AVEC L’ÉNERGIE <span style={{ color: "#FF7900" }}>STARTUP</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {valeurs.map((valeur) => (
          <div
            key={valeur.title}
            className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={valeur.img}
              alt={valeur.alt}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
            />
            {/* Overlay avec dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-[#ff7300]/90 group-hover:via-[#ff7300]/60 group-hover:to-[#ff7300]/30 transition-all duration-300"></div>
            
            {/* Contenu */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3
                className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 transition-all duration-300"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  textShadow: "0 2px 16px rgba(0,0,0,0.5)",
                }}
              >
                {valeur.title}
              </h3>
              <p
                className="text-white text-base md:text-lg lg:text-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  lineHeight: 1.4,
                  textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                }}
              >
                {valeur.text}
              </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default NosValeurs;