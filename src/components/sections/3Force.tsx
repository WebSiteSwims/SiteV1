import React, { useState } from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import propulserImg from "../images/BlocPropulser.png";
import creerImg from "../images/BlocCreer.png";
import ecouterImg from "../images/BlocEcoute.png";

const forces = [
  {
    key: "ecouter",
    title: "Écouter",
    desc: "Une approche centrée sur vos besoins terrain.",
    content: (
      <div className="w-full bg-[#ff7300] rounded-b-3xl p-6 md:p-10 text-white relative">
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
        </div>
        <div className="mb-6" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: 18, lineHeight: 1.7 }}>
          <div>
            Chez Swims , on commence par une vraie phase d’écoute. <br />
            On analyse vos enjeux industriels, vos outils digitaux (AVEVA, E3D, PML, etc.), vos contraintes et irritants métier. <br />
            Notre force : transformer des environnements complexes en diagnostics clairs pour construire une réponse pertinente et efficace.
          </div>
        </div>
        <img
          src={ecouterImg}
          alt="Propulser"
          className="w-full rounded-2xl object-cover mt-2"
          style={{ maxHeight: 220, objectFit: "cover" }}
        />
      </div>
    ),
  },
  {
    key: "creer",
    title: "Créer",
    desc: "Des solutions d’ingénierie sur-mesure et évolutives.",
    content: (
      <div className="w-full bg-[#ff7300] rounded-b-3xl p-6 md:p-10 text-white relative">
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
        </div>
        <div className="mb-6" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: 18, lineHeight: 1.7 }}>
          <div>
            On conçoit des solutions techniques qui collent à la réalité opérationnelle. <br />
            Nos experts mixent ingénierie 3D, gestion de données, automatisation des workflows, et développement d’outils digitaux sur-mesure pour optimiser vos projets industriels. <br />
            Nos réponses sont modulaires, efficaces et taillées pour vos objectifs.
          </div>
        </div>
        <img
          src={creerImg}
          alt="Propulser"
          className="w-full rounded-2xl object-cover mt-2"
          style={{ maxHeight: 220, objectFit: "cover" }}
        />
      </div>
    ),
  },
  {
    key: "propulser",
    title: "Propulser",
    desc: "Intégration fluide et accompagnement durable.",
    content: (
      <div className="w-full bg-[#ff7300] rounded-b-3xl p-6 md:p-10 text-white relative">
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
        </div>
        <div className="mb-6" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: 18, lineHeight: 1.7 }}>
          <div>
            On s’intègre dans vos écosystèmes sans friction.<br />
            On livre des outils opérationnels, bien documentés, faciles à maintenir.<br />
            Et on ne disparaît pas à la fin du projet : support, formation, mises à jour… on vous accompagne dans le temps, pour faire évoluer vos systèmes avec vous.
          </div>
        </div>
        <img
          src={propulserImg}
          alt="Propulser"
          className="w-full rounded-2xl object-cover mt-2"
          style={{ maxHeight: 220, objectFit: "cover" }}
        />
      </div>
    ),
  },
];

const Force: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-[#e5e5e5] rounded-3xl overflow-hidden shadow-sm">
          {forces.map((force) => (
            <div key={force.key} className="transition-all duration-300">
              {/* Barre */}
              <div
                className={`flex items-center justify-between px-8 md:px-12 py-8 transition-all duration-300 cursor-pointer hover:bg-gray-50
                  ${open === force.key && force.content
                    ? "bg-[#ff7300] text-white rounded-t-3xl"
                    : "bg-white text-black"}
                  `}
                style={{
                  borderTopLeftRadius: open === force.key && force.content ? 24 : 0,
                  borderTopRightRadius: open === force.key && force.content ? 24 : 0,
                  fontFamily: "'CO Text', Arial, sans-serif",
                  fontWeight: open === force.key && force.content ? 700 : 400,
                }}
                onClick={() => handleToggle(force.key)}
              >
                <div className="flex items-center">
                  <img src={iconeFlamme} alt="" className="w-6 h-6 mr-3" />
                  <span
                    className="font-bold text-2xl sm:text-3xl md:text-4xl"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    {force.title}
                  </span>
                </div>
                <div className="flex-1 ml-6 text-left text-lg md:text-xl lg:text-2xl font-normal" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                  {force.desc}
                </div>
                <span
                  className="ml-6 text-4xl font-bold select-none transition-transform duration-300 hover:scale-110"
                  style={{
                    color: open === force.key && force.content ? "#fff" : "#ff7300",
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    width: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    lineHeight: 1,
                    transform: open === force.key ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {open === force.key && force.content ? "−" : "+"}
                </span>
              </div>
              {/* Contenu déroulant */}
              {open === force.key && force.content && (
                <div className="transition-all duration-500 ease-in-out">{force.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Force;
