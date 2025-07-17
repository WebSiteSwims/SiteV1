import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import imgBureau from "../images/Bureau_d'etude.png";

const FocusBureau: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-0">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10 md:gap-12">
        {/* Bloc texte */}
        <div className="flex-1">
          <div className="flex items-center mb-6">
            <img src={iconeFlamme} alt="" className="w-6 h-6 mr-2" />
            <span
              className="text-lg font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                color: "#111",
              }}
            >
              Focus
            </span>
          </div>
          <div
            className="text-base md:text-lg"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              color: "#111",
              lineHeight: 1.6,
            }}
          >
            <p className="mb-4">
              Dans beaucoup d’ingénieries, on bricole avec des outils génériques ou des macros vieillissantes. Les équipes perdent un temps fou à structurer, contrôler, vérifier.
            </p>
            <p className="mb-4">
              Résultat ? Moins de temps pour concevoir, plus de risques d’erreurs, et une frustration croissante côté terrain.
            </p>
            <p>
              On l’a vu, vécu, et compris : <span className="font-bold" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>les outils doivent s’adapter à vos méthodes de travail, pas l’inverse.</span> C’est là que notre bureau d’étude intervient
            </p>
          </div>
        </div>
        {/* Bloc image */}
        <div className="flex-1 flex justify-end">
          <img
            src={imgBureau}
            alt="Bureau d'étude"
            className="w-full max-w-md rounded-[32px] object-cover"
            style={{ minWidth: 320, minHeight: 260 }}
          />
        </div>
      </div>
      {/* Citation */}
      <div className="max-w-3xl mx-auto mt-16 text-center relative">
        <div className="text-4xl text-[#7b2ff2] mb-4">❝❞</div>
        <div
          className="font-bold text-lg md:text-xl"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            color: "#111",
            lineHeight: 1.4,
          }}
        >
          Notre bureau d’étude, c’est n’est pas juste un support technique. C’est un laboratoire d’ingéniosité, au service de vos projets les plus complexes.
        </div>
      </div>
    </section>
  );
};

export default FocusBureau;