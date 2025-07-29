import React, { useEffect, useState } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-white py-0 px-0 relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          // Animation séquentielle : chaque carte arrive et reste au centre
          const baseOffset = 200;
          const cardSpacing = index * 1000; // Encore plus d'espace entre chaque déclenchement
          const triggerPoint = baseOffset + cardSpacing;
          const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 600));
          
          let translateY, scale, opacity, zIndex;
          
          if (index === 0) {
            // Première carte : arrive du bas et reste au centre
            translateY = 500 - progress * 500; // Monte jusqu'au centre
            scale = 0.8 + progress * 0.2; // Grandit jusqu'à taille normale
            opacity = 1;
            zIndex = 10;
          } else if (index === 1) {
            // Deuxième carte : commence beaucoup plus bas et n'arrive que quand la première est en place ET après plus de scroll
            const firstCardProgress = Math.max(0, Math.min(1, (scrollY - 200) / 600));
            const extraScrollDelay = scrollY > 1500; // AUGMENTÉ : Attend encore plus de scroll (1500 au lieu de 1000)
            if (firstCardProgress < 1 || !extraScrollDelay) {
              translateY = 1000; // Beaucoup plus bas, hors de l'écran
              scale = 0.8;
              opacity = 1;
            } else {
              // RALENTI : Animation plus lente avec une zone plus grande (1200 au lieu de 600)
              const slowProgress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 1200));
              translateY = 1000 - slowProgress * 1000; // Monte depuis très bas jusqu'au centre
              scale = 0.8 + slowProgress * 0.2;
              opacity = 1;
            }
            zIndex = 20; // Au-dessus de la première
          } else {
            // Troisième carte : commence encore plus bas et n'arrive que quand la deuxième est en place
            const secondCardProgress = Math.max(0, Math.min(1, (scrollY - 1400) / 600));
            const extraScrollDelay = scrollY > 2000; // Attend encore plus de scroll pour la troisième
            if (secondCardProgress < 1 || !extraScrollDelay) {
              translateY = 1500; // Encore plus bas, complètement hors de l'écran
              scale = 0.8;
              opacity = 1;
            } else {
              // RALENTI : Animation plus lente avec une zone plus grande (1200 au lieu de 600)
              const slowProgress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / 1200));
              translateY = 1500 - slowProgress * 1500; // Monte depuis très très bas jusqu'au centre
              scale = 0.8 + slowProgress * 0.2;
              opacity = 1;
            }
            zIndex = 30; // Au-dessus de toutes les autres
          }
          
          return (
            <div
              key={card.title}
              className={`absolute w-full max-w-none rounded-3xl p-6 md:p-8 flex flex-col md:flex-row bg-gradient-to-br ${card.bg} shadow-2xl transition-all duration-200 ease-out`}
              style={{
                height: '90vh',
                maxHeight: '750px',
                minHeight: '650px',
                margin: '0',
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                left: '3%',
                right: '3%',
                width: '94%',
                top: '50%',
                marginTop: '-45vh', // Centre verticalement (-45vh car height = 90vh)
              }}
            >
              {/* Image à gauche - prend toute la hauteur */}
              <div className="w-full md:w-2/5 h-48 md:h-full flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ background: "#fff" }}
                />
              </div>
              
              {/* Contenu texte à droite */}
              <div className="flex-1 text-white flex flex-col justify-center text-center md:text-left">
                <h2
                  className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  {card.title}
                </h2>
                <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
                  {card.subtitle}
                </div>
                <div className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                  {card.desc}
                </div>
                <div className="flex justify-center md:justify-start">
                  <button
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white bg-white/10 text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-white hover:text-gray-800 hover:scale-105 active:scale-95"
                    style={{
                      fontFamily: "'CO Text Bold', Arial, sans-serif",
                      letterSpacing: 1,
                    }}
                  >
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardsStack;