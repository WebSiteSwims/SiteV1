import React from "react";
import iconeContact from "../images/FUSEE-18.png";

const TravaillonsEnsemble: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f5f5] rounded-none px-0 py-0">
      {/* Bandeau titre */}
      <div className="flex items-center gap-2 px-8 pt-10 pb-2 max-w-7xl mx-auto">
        <img src={iconeContact} alt="" className="w-6 h-6" />
        <span
          className="font-bold text-lg"
          style={{
            color: "#000",
            fontFamily: "'CO Text Bold', Arial, sans-serif",
          }}
        >
          Travaillons ensemble
        </span>
      </div>
      {/* Contenu principal */}
      <div className="flex flex-col md:flex-row px-8 pb-14 pt-4 gap-8 max-w-7xl mx-auto">
        {/* Bloc gauche */}
        <div className="flex-1 flex items-center justify-start">
          <h2
            className="font-black leading-tight"
            style={{
              fontSize: 40,
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.1,
            }}
          >
            Un projet ?<br />
            Nous sommes à<br />
            votre écoute
          </h2>
        </div>
        {/* Formulaire */}
        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {/* Société */}
          <div className="col-span-2">
            <label className="block font-bold mb-1" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              Nom de votre société*
            </label>
            <input
              type="text"
              className="w-full border-b border-[#222] bg-transparent py-2 px-0 outline-none"
              placeholder="Swims"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          {/* Prénom */}
          <div>
            <label className="block font-bold mb-1" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              Prénom*
            </label>
            <input
              type="text"
              className="w-full border-b border-[#222] bg-transparent py-2 px-0 outline-none"
              placeholder="Pierre"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          {/* Nom */}
          <div>
            <label className="block font-bold mb-1" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              Nom*
            </label>
            <input
              type="text"
              className="w-full border-b border-[#222] bg-transparent py-2 px-0 outline-none"
              placeholder="Lafond"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          {/* Email */}
          <div>
            <label className="block font-bold mb-1" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              E-mail*
            </label>
            <input
              type="email"
              className="w-full border-b border-[#222] bg-transparent py-2 px-0 outline-none"
              placeholder="pierre.dupont@gmail.com"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          {/* Téléphone */}
          <div>
            <label className="block font-bold mb-1" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              Numéro de téléphone*
            </label>
            <input
              type="tel"
              className="w-full border-b border-[#222] bg-transparent py-2 px-0 outline-none"
              placeholder="06.85.79.26.35"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          {/* Message */}
          <div className="col-span-2">
            <label className="block font-bold mb-1" style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}>
              Message
            </label>
            <input
              type="text"
              className="w-full border-b border-[#222] bg-transparent py-2 px-0 outline-none"
              placeholder="Écrivez-nous"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          {/* Bouton */}
          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="bg-[#FF7900] text-white font-bold rounded-full px-8 py-2"
              style={{
                fontFamily: "'CO Text Bold', Arial, sans-serif",
                fontSize: 18,
              }}
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TravaillonsEnsemble;