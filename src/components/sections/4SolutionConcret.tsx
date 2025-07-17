import React from "react";
import { motion } from "framer-motion";
import iconeFlamme from "../images/FUSEE-18.png";
import imgCatalogue from "../images/Assistance_technique.png";
import imgAutomatisation from "../images/Assistance_technique.png";
import imgMaquette from "../images/Assistance_technique.png";
import imgSecurite from "../images/Assistance_technique.png";
import imgFormation from "../images/Assistance_technique.png";

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
    <section className="w-full bg-white pt-10 pb-0 px-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-6">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-3" />
          <span
            className="text-lg font-bold"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              color: "#111",
            }}
          >
            Nos solutions concrètes
          </span>
        </div>
        <h2
          className="font-bold mb-10"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            fontSize: "2.7rem",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#111",
          }}
        >
          DE LA TECHNIQUE MAIS<br />
          SURTOUT DE <span style={{ color: "#7b2ff2" }}>L’IMPACT</span>
        </h2>
        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
              <div className="p-6 flex-1 flex flex-col">
                <div
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    color: "#111",
                  }}
                >
                  {card.title}
                </div>
                <div
                  className="text-base"
                  style={{
                    fontFamily: "'CO Text', Arial, sans-serif",
                    color: "#222",
                  }}
                >
                  {card.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
              <div className="p-6 flex-1 flex flex-col">
                <div
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    color: "#111",
                  }}
                >
                  {card.title}
                </div>
                <div
                  className="text-base"
                  style={{
                    fontFamily: "'CO Text', Arial, sans-serif",
                    color: "#222",
                  }}
                >
                  {card.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Bas violet arrondi + citation */}
      <div className="w-full bg-[#7b2ff2] rounded-t-[60px] pt-16 pb-12 mt-12 flex flex-col items-center justify-center">
        <div className="text-4xl text-white mb-6">❝❞</div>
        <div
          className="text-center text-white font-bold max-w-3xl mx-auto"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            fontSize: "1.6rem",
            lineHeight: 1.3,
          }}
        >
          On ne se contente pas <span style={{ fontWeight: 700 }}>de paramétrer AVEVA.</span><br />
          On livre des outils qui vous font <span style={{ fontWeight: 700 }}>gagner du temps, fiabilisent vos données et&nbsp;améliorent la vie de vos équipes</span> au quotidien.
        </div>
      </div>
    </section>
  );
};

export default SolutionConcret;