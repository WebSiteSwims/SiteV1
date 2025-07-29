import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import imgBureau from "../images/Bureau_d'etude.png";
import guillemets from "../images/guillemets orange-24.png";

const FocusBureau: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-10 md:gap-12">
        {/* Bloc texte */}
        <div className="flex-1">
          <div className="flex items-center mb-6">
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
            className="text-lg md:text-xl lg:text-2xl"
            style={{
              fontFamily: "'MADE TOMMY SOFT REGULAR', Arial, sans-serif",
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
            className="w-full max-w-lg lg:max-w-xl rounded-[32px] object-cover"
            style={{ minWidth: 400, minHeight: 320 }}
          />
        </div>
      </div>
      {/* Citation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center relative">
        <div className="flex justify-center mb-6">
          <img
            src={guillemets}
            alt="Guillemets"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
          />
        </div>
        <div
          className="font-bold text-xl md:text-2xl lg:text-3xl"
          style={{
            fontFamily: "'MADE TOMMY SOFT BOLD', Arial, sans-serif",
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