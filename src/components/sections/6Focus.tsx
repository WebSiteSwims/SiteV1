import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import imgFocus from "../images/Assistance_technique.png";

const Focus: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Bloc gauche */}
          <div className="flex-1 min-w-[320px]">
            <div className="flex items-center mb-6 lg:mb-8">
              <img src={iconeFlamme} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
              <span
                className="font-bold text-2xl sm:text-3xl md:text-4xl text-black"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Focus
              </span>
            </div>
            <div
              className="mb-6 lg:mb-8"
              style={{
                fontFamily: "'CO Text', Arial, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#222",
                lineHeight: 1.7,
              }}
            >
              Nos consultants s'intègrent à vos équipes avec une vraie maîtrise de vos outils, et un sens concret des enjeux industriels.
            </div>
            <div
              style={{
                fontFamily: "'CO Text', Arial, sans-serif",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                color: "#222",
                lineHeight: 1.7,
              }}
            >
              Pas besoin de long brief : <span className="font-bold" style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>on est là pour faire avancer les projets, tout de suite.</span>
            </div>
          </div>
          {/* Bloc droit */}
          <div className="flex-1 flex items-center justify-center mt-6 lg:mt-0">
            <img
              src={imgFocus}
              alt="Consultant Swims sur logiciel industriel"
              className="w-full max-w-[420px] rounded-3xl object-cover shadow-lg"
              style={{ 
                minHeight: "clamp(250px, 40vh, 400px)",
                maxHeight: "clamp(300px, 50vh, 500px)",
                background: "#fff" 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
