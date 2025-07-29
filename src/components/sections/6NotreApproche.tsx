import React, { useState } from "react";
import iconeFlamme from "../images/FUSEE-18.png";

const approches = [
  {
    key: "comprendre",
    title: "Comprendre",
    desc: "On comprend vos enjeux",
    content: (
      <div className="w-full bg-[#bdb7f7] rounded-b-3xl p-6 md:p-10 text-white relative" style={{ background: "linear-gradient(120deg, #bdb7f7 0%, #a18cd1 100%)" }}>
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Comprendre
          </span>
        </div>
        <div className="mb-4" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: "clamp(16px, 2.5vw, 18px)", lineHeight: 1.7 }}>
          <div>
            Avant de proposer quoi que ce soit, on prend le temps de comprendre votre environnement, vos contraintes et vos objectifs.
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "composer",
    title: "Composer",
    desc: "On compose l'équipe qu'il vous faut",
    content: (
      <div className="w-full bg-[#bdb7f7] rounded-b-3xl p-6 md:p-10 text-white relative" style={{ background: "linear-gradient(120deg, #bdb7f7 0%, #a18cd1 100%)" }}>
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Composer
          </span>
        </div>
        <div className="mb-4" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: "clamp(16px, 2.5vw, 18px)", lineHeight: 1.7 }}>
          <div>
            Nous composons l'équipe parfaite selon vos besoins spécifiques, avec les bonnes compétences au bon moment.
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "accompagner",
    title: "Accompagner",
    desc: "On accompagne avec souplesse et réactivité",
    content: (
      <div className="w-full bg-[#bdb7f7] rounded-b-3xl p-6 md:p-10 text-white relative" style={{ background: "linear-gradient(120deg, #bdb7f7 0%, #a18cd1 100%)" }}>
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Accompagner
          </span>
        </div>
        <div className="italic mb-2" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: "clamp(16px, 2.5vw, 18px)" }}>
          Une fois en mission, on ne vous laisse pas seuls.
        </div>
        <div className="mb-4" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: "clamp(16px, 2.5vw, 18px)", lineHeight: 1.7 }}>
          Nos consultants avancent avec le soutien permanent de l'équipe Swims : échanges réguliers, partage de retours d'expérience, ajustements en continu.
        </div>
        <div className="mb-2 font-bold" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif", fontSize: "clamp(16px, 2.5vw, 18px)" }}>
          Ce que qu'on vous garantit :
        </div>
        <ul className="list-disc pl-5" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: "clamp(16px, 2.5vw, 18px)" }}>
          <li>de la fluidité dans la collaboration,</li>
          <li>une vraie capacité d'adaptation aux aléas du terrain,</li>
          <li>et une présence qui s'ajuste à vos besoins, sans superflu.</li>
        </ul>
      </div>
    ),
  },
];

const NotreApproche: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <section className="w-full bg-white py-12 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center mb-6 lg:mb-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-black"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Notre approche
          </span>
        </div>
        <h2
          className="font-bold mb-8 lg:mb-12"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            fontSize: "clamp(1.8rem, 6vw, 2.2rem)",
            lineHeight: 1.1,
            color: "#111",
          }}
        >
          L'ASSISTANCE<br />
          TECHNIQUE<br />
          VERSION <span className="text-[#bdb7f7]">SWIMS</span>
        </h2>
        
        <div className="divide-y divide-[#e5e5e5] rounded-3xl overflow-hidden shadow-sm">
          {approches.map((approche) => (
            <div key={approche.key} className="transition-all duration-300">
              {/* Barre */}
              <div
                className={`flex items-center justify-between px-8 md:px-12 py-8 transition-all duration-300 cursor-pointer hover:bg-gray-50
                  ${open === approche.key && approche.content
                    ? "bg-[#bdb7f7] text-white rounded-t-3xl"
                    : "bg-white text-black"}
                  `}
                style={{
                  borderTopLeftRadius: open === approche.key && approche.content ? 24 : 0,
                  borderTopRightRadius: open === approche.key && approche.content ? 24 : 0,
                  fontFamily: "'CO Text', Arial, sans-serif",
                  fontWeight: open === approche.key && approche.content ? 700 : 400,
                }}
                onClick={() => handleToggle(approche.key)}
              >
                <div className="flex items-center">
                  <img src={iconeFlamme} alt="" className="w-6 h-6 mr-3" />
                  <span
                    className="font-bold text-2xl sm:text-3xl md:text-4xl"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    {approche.title}
                  </span>
                </div>
                <div className="flex-1 ml-6 text-left text-lg md:text-xl lg:text-2xl font-normal" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                  {approche.desc}
                </div>
                <span
                  className="ml-6 text-4xl font-bold select-none transition-transform duration-300 hover:scale-110"
                  style={{
                    color: open === approche.key && approche.content ? "#fff" : "#bdb7f7",
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    width: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 36,
                    lineHeight: 1,
                    transform: open === approche.key ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {open === approche.key && approche.content ? "−" : "+"}
                </span>
              </div>
              {/* Contenu déroulant */}
              {open === approche.key && approche.content && (
                <div className="transition-all duration-500 ease-in-out">{approche.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotreApproche;
