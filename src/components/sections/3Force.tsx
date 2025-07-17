import React, { useState } from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import propulserImg from "../images/Integrateur_AVEVA.png";

const forces = [
  {
    key: "ecouter",
    title: "Écouter",
    desc: "Une approche centrée sur vos besoins terrain.",
    content: (
      <div className="w-full bg-[#ff7300] rounded-3xl p-6 md:p-10 mt-4 text-white relative">
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Propulser
          </span>
          <span className="ml-4 font-bold text-base md:text-lg" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
            Intégration fluide et accompagnement durable.
          </span>
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
  {
    key: "creer",
    title: "Créer",
    desc: "Des solutions d’ingénierie sur-mesure et évolutives.",
    content: (
      <div className="w-full bg-[#ff7300] rounded-3xl p-6 md:p-10 mt-4 text-white relative">
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Propulser
          </span>
          <span className="ml-4 font-bold text-base md:text-lg" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
            Intégration fluide et accompagnement durable.
          </span>
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
  {
    key: "propulser",
    title: "Propulser",
    desc: "Intégration fluide et accompagnement durable.",
    content: (
      <div className="w-full bg-[#ff7300] rounded-3xl p-6 md:p-10 mt-4 text-white relative">
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Propulser
          </span>
          <span className="ml-4 font-bold text-base md:text-lg" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
            Intégration fluide et accompagnement durable.
          </span>
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

// ...existing code...
return (
  <section className="w-full bg-white min-h-[900px] px-0 pt-0 mt-0">
    <div className="divide-y divide-[#e5e5e5]">
      {forces.map((force, idx) => (
        <div key={force.key}>
          {/* Barre */}
          <div
            className={`flex items-center justify-between px-6 md:px-16 py-6 transition-colors duration-200 cursor-pointer
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
              <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
              <span
                className="font-bold text-2xl md:text-3xl"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                {force.title}
              </span>
            </div>
            <div className="flex-1 ml-4 text-left text-base md:text-lg font-normal" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
              {force.desc}
            </div>
            <span
              className="ml-4 text-3xl font-bold select-none"
              style={{
                color: open === force.key && force.content ? "#fff" : "#ff7300",
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                width: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                lineHeight: 1,
              }}
            >
              {open === force.key && force.content ? "−" : "+"}
            </span>
          </div>
          {/* Contenu déroulant */}
          {open === force.key && force.content && (
            <div>{force.content}</div>
          )}
        </div>
      ))}
    </div>
  </section>
);
// ...existing code...
};

export default Force;