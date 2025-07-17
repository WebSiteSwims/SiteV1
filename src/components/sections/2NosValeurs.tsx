import React from "react";
import iconeValeurs from "../images/FUSEE-18.png";
import collaborationImg from "../images/Assistance_technique.png";
import excellenceImg from "../images/Integrateur_AVEVA.png";
import innovationImg from "../images/FUSEE-Home.png"; // Remplace par ton image pour la 3e carte

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
    alt: "Innovation",
    title: "Innovation",
    text: "On casse les codes et on innove pour propulser vos projets.",
  },
];

const NosValeurs: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-0">
      {/* Bandeau titre */}
      <div className="flex items-center gap-2 px-8 pt-6 pb-2">
        <img src={iconeValeurs} alt="" className="w-6 h-6" />
        <span
          className="font-bold text-lg"
          style={{ color: "#FF7900", fontFamily: "'CO Text Bold', Arial, sans-serif" }}
        >
          Nos valeurs
        </span>
      </div>
      {/* Titre principal */}
      <div className="px-8 pb-8">
        <h2
          className="font-black leading-tight"
          style={{
            fontSize: 42,
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            maxWidth: 1100,
            lineHeight: 1.1,
          }}
        >
          ON MIXE L’EXPERTISE D’INGÉNIEUR<br />
          AVEC L’ÉNERGIE <span style={{ color: "#FF7900" }}>STARTUP</span>
        </h2>
      </div>
      {/* Valeurs */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 px-0 pb-12 w-full max-w-none mx-0">
        {valeurs.map((valeur) => (
          <div
            key={valeur.title}
            className="relative min-w-0 h-[520px] rounded-3xl overflow-hidden flex flex-col group transition-all duration-300 cursor-pointer"
          >
            <img
              src={valeur.img}
              alt={valeur.alt}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-40"
            />
            {/* Overlay orange + texte blanc au hover */}
            <div
              className="absolute inset-0 flex flex-col justify-end items-start p-10 transition-all duration-300
                bg-gradient-to-t from-black/60 to-transparent
                group-hover:bg-[#FF7300] group-hover:bg-opacity-100"
              style={{
                minHeight: 180,
                background: "linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 60%)",
              }}
            >
              <span
                className="font-bold text-white text-3xl md:text-4xl mb-4 transition-all duration-300"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  textShadow: "0 2px 16px rgba(0,0,0,0.35)",
                }}
              >
                {valeur.title}
              </span>
              <span
                className="opacity-0 group-hover:opacity-100 text-white text-lg md:text-xl font-semibold transition-all duration-300"
                style={{
                  fontFamily: "'CO Text Bold', Arial, sans-serif",
                  maxWidth: 350,
                  transition: "opacity 0.3s",
                }}
              >
                {valeur.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NosValeurs;