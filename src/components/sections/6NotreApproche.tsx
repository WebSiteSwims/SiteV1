import React, { useState } from "react";
import iconeFlamme from "../images/FUSEE-18.png";

const approches = [
  {
    key: "comprendre",
    title: "Comprendre",
    desc: "On comprend vos enjeux",
    content: null,
  },
  {
    key: "composer",
    title: "Composer",
    desc: "On compose l’équipe qu’il vous faut",
    content: null,
  },
  {
    key: "accompagner",
    title: "Accompagner",
    desc: "On accompagne avec souplesse et réactivité",
    content: (
      <div className="w-full bg-[#bdb7f7] bg-opacity-80 rounded-3xl p-6 md:p-10 mt-4 text-white relative" style={{ background: "linear-gradient(120deg, #bdb7f7 0%, #a18cd1 100%)" }}>
        <div className="flex items-center mb-4">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
          <span
            className="font-bold text-2xl md:text-3xl"
            style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Accompagner
          </span>
          <span className="ml-4 font-bold text-base md:text-lg" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
            On accompagne avec<br />souplesse et réactivité
          </span>
        </div>
        <div className="italic mb-2" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: 17 }}>
          Une fois en mission, on ne vous laisse pas seuls.
        </div>
        <div className="mb-4" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: 17, lineHeight: 1.7 }}>
          Nos consultants avancent avec le soutien permanent de l’équipe Swims : échanges réguliers, partage de retours d’expérience, ajustements en continu.
        </div>
        <div className="mb-2 font-bold" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif", fontSize: 17 }}>
          Ce que qu’on vous garantit :
        </div>
        <ul className="list-disc pl-5" style={{ fontFamily: "'CO Text', Arial, sans-serif", fontSize: 17 }}>
          <li>de la fluidité dans la collaboration,</li>
          <li>une vraie capacité d’adaptation aux aléas du terrain,</li>
          <li>et une présence qui s’ajuste à vos besoins, sans superflu.</li>
        </ul>
      </div>
    ),
  },
];

const NotreApproche: React.FC = () => {
  const [open, setOpen] = useState<string | null>("accompagner");

  const handleToggle = (key: string) => {
    setOpen(open === key ? null : key);
  };

  return (
    <section className="w-full bg-white px-0 pt-0 mt-0">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-2 mt-8">
          <img src={iconeFlamme} alt="" className="w-6 h-6 mr-2" />
          <span
            className="text-lg font-bold"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              color: "#222",
            }}
          >
            Notre approche
          </span>
        </div>
        <h2
          className="font-bold mb-8"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            fontSize: "2.2rem",
            lineHeight: 1.1,
            color: "#111",
          }}
        >
          L’ASSISTANCE<br />
          TECHNIQUE<br />
          VERSION <span className="text-[#bdb7f7]">SWIMS</span>
        </h2>
        <div className="divide-y divide-[#e5e5e5]">
          {approches.map((approche, idx) => (
            <div key={approche.key}>
              {/* Barre */}
              <div
                className={`flex items-center justify-between px-2 md:px-6 py-6 transition-colors duration-200 cursor-pointer
                  ${open === approche.key && approche.content
                    ? "bg-[#bdb7f7] bg-opacity-80 text-white rounded-t-3xl"
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
                  <img src={iconeFlamme} alt="" className="w-7 h-7 mr-2" />
                  <span
                    className="font-bold text-2xl md:text-3xl"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    {approche.title}
                  </span>
                </div>
                <div className="flex-1 ml-4 text-left text-base md:text-lg font-normal" style={{ fontFamily: "'CO Text', Arial, sans-serif" }}>
                  {approche.desc}
                </div>
                <span
                  className="ml-4 text-3xl font-bold select-none"
                  style={{
                    color: open === approche.key && approche.content ? "#fff" : "#bdb7f7",
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    width: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 32,
                    lineHeight: 1,
                  }}
                >
                  {open === approche.key && approche.content ? "−" : "+"}
                </span>
              </div>
              {/* Contenu déroulant */}
              {open === approche.key && approche.content && (
                <div>{approche.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotreApproche;