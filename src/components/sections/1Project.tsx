import React from "react";
import fuseeImg from '../images/FUSEE-18.png';

const Project: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}

        {/* Contenu centré */}
        <div className="flex flex-col items-center text-center">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 md:mb-12"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              color: "#111",
              letterSpacing: '-0.02em',
            }}
          >
            Vous avez un projet&nbsp;?
          </h2>
          <div className="flex justify-center">
            <span className="btn-gradient-wrapper">
              <button 
                className="dmds-btn px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300" 
                data-testid="dmds-btn"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Travaillons ensemble
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
