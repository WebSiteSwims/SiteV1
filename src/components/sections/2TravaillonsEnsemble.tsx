import React from "react";
import iconeContact from "../images/FUSEE-18.png";

const TravaillonsEnsemble: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12">
          <img src={iconeContact} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="text-lg md:text-xl font-bold text-zinc-800"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Travaillons ensemble
          </span>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Bloc gauche - Titre */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#111',
              }}
            >
              Un projet ?<br />
              Nous sommes à<br />
              votre écoute
            </h2>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="flex-1">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Société */}
              <div className="md:col-span-2">
                <label 
                  className="block font-semibold mb-2 text-zinc-800"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  Nom de votre société*
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-zinc-300 bg-transparent py-3 px-0 outline-none focus:border-[#ff7300] transition-colors"
                  placeholder="Swims"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                />
              </div>

              {/* Prénom */}
              <div>
                <label 
                  className="block font-semibold mb-2 text-zinc-800"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  Prénom*
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-zinc-300 bg-transparent py-3 px-0 outline-none focus:border-[#ff7300] transition-colors"
                  placeholder="Pierre"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                />
              </div>

              {/* Nom */}
              <div>
                <label 
                  className="block font-semibold mb-2 text-zinc-800"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  Nom*
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-zinc-300 bg-transparent py-3 px-0 outline-none focus:border-[#ff7300] transition-colors"
                  placeholder="Lafond"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                />
              </div>

              {/* Email */}
              <div>
                <label 
                  className="block font-semibold mb-2 text-zinc-800"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  E-mail*
                </label>
                <input
                  type="email"
                  className="w-full border-b-2 border-zinc-300 bg-transparent py-3 px-0 outline-none focus:border-[#ff7300] transition-colors"
                  placeholder="pierre.dupont@gmail.com"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                />
              </div>

              {/* Téléphone */}
              <div>
                <label 
                  className="block font-semibold mb-2 text-zinc-800"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  Numéro de téléphone*
                </label>
                <input
                  type="tel"
                  className="w-full border-b-2 border-zinc-300 bg-transparent py-3 px-0 outline-none focus:border-[#ff7300] transition-colors"
                  placeholder="06.85.79.26.35"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label 
                  className="block font-semibold mb-2 text-zinc-800"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  Message
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-zinc-300 bg-transparent py-3 px-0 outline-none focus:border-[#ff7300] transition-colors"
                  placeholder="Écrivez-nous"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                />
              </div>

              {/* Bouton */}
              <div className="md:col-span-2 mt-6">
                <button
                  type="submit"
                  className="bg-[#ff7300] text-white font-bold rounded-full px-8 py-3 text-base md:text-lg transition-all duration-300 hover:bg-[#ff8c1a] shadow-md"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravaillonsEnsemble;