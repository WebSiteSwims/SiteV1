import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import imgFocus from "../images/Assistance_technique.png";

const Focus: React.FC = () => {
  return (
    <section className="w-full py-12 px-0 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Bloc gauche */}
        <div className="flex-1 min-w-[320px]">
          <div className="flex items-center mb-4">
            <img src={iconeFlamme} alt="" className="w-6 h-6 mr-2" />
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                color: "#222",
              }}
            >
              Focus
            </span>
          </div>
          <div
            className="text-[1.25rem] mb-6"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              color: "#222",
              lineHeight: 1.7,
            }}
          >
            Nos consultants s’intègrent à vos équipes avec une vraie maîtrise de vos outils, et un sens concret des enjeux industriels.
          </div>
          <div
            className="text-[1.25rem]"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              color: "#222",
              lineHeight: 1.7,
            }}
          >
            Pas besoin de long brief : <span className="font-bold" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>on est là pour faire avancer les projets, tout de suite.</span>
          </div>
        </div>
        {/* Bloc droit */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={imgFocus}
            alt="Consultant Swims sur logiciel industriel"
            className="w-full max-w-[420px] rounded-3xl object-cover"
            style={{ minHeight: 220, background: "#fff" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Focus;