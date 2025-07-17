import React from "react";
import fuseeImg from '../images/FUSEE-18.png';

const Project: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-[#f5f5f5]">
      <div className="flex items-center justify-center mb-8">
        {/* Image fusée à la place du motif orange */}
        <img
          src={fuseeImg}
          alt="Fusée"
          className="w-10 h-10 md:w-12 md:h-12 object-contain mr-2"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold text-black">
          Vous avez un projet&nbsp;?
        </h2>
      </div>
        <div className="dmds-buttons flex gap-4 mt-4">
          <span className="btn-gradient-wrapper">
            <button className="dmds-btn" data-testid="dmds-btn">Travaillons ensemble</button>
          </span>
        </div>
    </section>
  );
};

export default Project;
