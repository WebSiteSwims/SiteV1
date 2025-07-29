import React from "react";
import { motion } from "framer-motion";
import iconeFlamme from "../images/FUSEE-18.png";
import imgCatalogue from "../images/Assistance_technique.png";
import imgAutomatisation from "../images/Assistance_technique.png";
import imgMaquette from "../images/Assistance_technique.png";
import imgSecurite from "../images/Assistance_technique.png";
import imgFormation from "../images/Assistance_technique.png";
import guillements from "../images/guillemets orange-24.png";

const cards = [
  {
    title: "Catalogue",
    desc: "On conçoit des catalogues évolutifs, organisés et connectés à vos besoins réels. Fini les éléments manquants ou en doublon.",
    img: imgCatalogue,
  },
  {
    title: "Automatisation",
    desc: "On développe des scripts et workflows sur mesure pour fluidifier les tâches répétitives et vous faire gagner un temps précieux.",
    img: imgAutomatisation,
  },
  {
    title: "Maquette",
    desc: "On organise vos projets dans E3D avec des arborescences, nomenclatures et repères visuels clairs pour tous les intervenants.",
    img: imgMaquette,
  },
  {
    title: "Sécurité",
    desc: "On met en place une gestion fine des droits, pour sécuriser vos données et garantir un usage maîtrisé de vos outils.",
    img: imgSecurite,
  },
  {
    title: "Formation",
    desc: "On forme vos équipes à partir de leur quotidien, pour une adoption rapide, durable et réellement utile sur le terrain.",
    img: imgFormation,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring", stiffness: 60 },
  }),
};

const SolutionConcret: React.FC = () => {
  return (
    <section className="w-full bg-white pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12 pt-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-black"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Nos solutions concrètes
          </span>
        </div>

        {/* Titre principal */}
        <h2
          className="font-bold mb-10"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            fontSize: "clamp(2rem, 4vw, 2.7rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#111",
          }}
        >
          DE LA TECHNIQUE MAIS<br />
          SURTOUT DE <span style={{ color: "#7b2ff2" }}>L'IMPACT</span>
        </h2>

        {/* Cartes - Première ligne (3 cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl border-2 border-[#a78bfa] bg-white shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover"
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <div className="p-6 flex-1">
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    fontSize: "1.3rem",
                    color: "#7b2ff2",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'CO Text', Arial, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.5,
                    color: "#444",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cartes - Deuxième ligne (2 cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {cards.slice(3).map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl border-2 border-[#a78bfa] bg-white shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
              custom={i + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover"
                style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <div className="p-6 flex-1">
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    fontSize: "1.3rem",
                    color: "#7b2ff2",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'CO Text', Arial, sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.5,
                    color: "#444",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave top - transition blanc arrondi vers le haut */}
      <div className="w-full h-20 bg-white rounded-b-[60px] relative z-10" style={{ marginBottom: -40 }} />

      {/* Bas violet arrondi + citation */}
      <div className="w-full bg-[#7b2ff2] pt-16 pb-12 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={guillements}
              alt="Guillemets"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
          <div
            className="text-center text-white font-bold max-w-4xl mx-auto"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              lineHeight: 1.3,
            }}
          >
            On ne se contente pas <span style={{ fontWeight: 700 }}>de paramétrer AVEVA.</span><br />
            On livre des outils qui vous font <span style={{ fontWeight: 700 }}>gagner du temps, fiabilisent vos données et&nbsp;améliorent la vie de vos équipes</span> au quotidien.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionConcret;
