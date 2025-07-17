import React from "react";
import integrateurImg from "../images/Integrateur_AVEVA.png";
import bureauImg from "../images/Bureau_d'etude.png";
import assistanceImg from "../images/Assistance_technique.png";

const cards = [
  {
    title: "Intégrateur AVEVA",
    subtitle: "Vos données techniques méritent mieux qu’un copier-coller.",
    desc: (
      <>
        <p>
          Experts de la suite AVEVA, on connecte vos environnements pour les rendre plus fluides, performants et adaptés à vos méthodes.
        </p>
        <p>
          Grâce à notre maîtrise complète des workflows, on automatise vos tâches, on fiabilise vos données et on simplifie la complexité.
        </p>
      </>
    ),
    button: "INTÉGRATEUR AVEVA",
    img: integrateurImg,
    bg: "from-[#7b2ff2] to-[#f357a8]",
  },
  {
    title: "Bureau d’étude",
    subtitle: "L’innovation technique au service de vos projets.",
    desc: (
      <>
        <p>
          Notre bureau d’étude, c’est un concentré de cerveau tech qui développe des solutions sur-mesure pour vos environnements complexes.
        </p>
        <p>
          Outils métiers, scripts d’automatisation, extension AVEVA.<br />
          On crée, on code et on connecte pour simplifier le quotidien de vos équipes. On maîtrise la technique, mais on l’adapte surtout à vos véritables enjeux terrain.
        </p>
      </>
    ),
    button: "BUREAU D’ÉTUDE",
    img: bureauImg,
    bg: "from-[#7f7fd5] to-[#86a8e7]",
  },
  {
    title: "Assistance technique",
    subtitle: "L’ingénierie qui questionne pour mieux innover.",
    desc: (
      <>
        <p>
          Nos experts s’intègrent à vos équipes et apportent de la valeur dès le premier jour.
        </p>
        <p>
          Support MOA/MOE, pilotage technique, coordination terrain ou transfert de compétences : on s’adapte à votre contexte et on fait avancer vos projets sans friction. Sérieux, dispo, et toujours partants pour trouver des solutions concrètes.
        </p>
      </>
    ),
    button: "ASSISTANCE TECHNIQUE",
    img: assistanceImg,
    bg: "from-[#a18cd1] to-[#fbc2eb]",
  },
];

const CardsStack: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-12 py-16 px-0">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`w-full rounded-3xl px-4 md:px-24 py-12 flex flex-col md:flex-row items-center bg-gradient-to-br ${card.bg} shadow-xl`}
          style={{
            minHeight: 480,
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] object-cover rounded-2xl mb-8 md:mb-0 md:mr-14 flex-shrink-0"
            style={{ background: "#fff" }}
          />
          <div className="flex-1 text-white">
            <h2
              className="font-bold text-3xl md:text-4xl mb-2"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
            >
              {card.title}
            </h2>
            <div className="font-semibold text-lg md:text-xl mb-3" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              {card.subtitle}
            </div>
            <div className="mb-6 text-base md:text-lg" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
              {card.desc}
            </div>
            <button
              className="mt-2 px-6 py-2 rounded-full border border-white bg-white/10 text-white font-bold text-sm transition hover:bg-white hover:text-[#7b2ff2]"
              style={{
                fontFamily: "'CO Text Bold', Arial, sans-serif",
                letterSpacing: 1,
              }}
            >
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsStack;