import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";

const Contact: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-0 rounded-[24px]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        {/* Bloc gauche */}
        <div className="flex-1 mb-10 md:mb-0">
          <div className="flex items-center mb-8">
            <img src={iconeFlamme} alt="" className="w-7 h-7 mr-3" />
            <span
              className="text-xl font-bold"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                color: "#222",
              }}
            >
              Travaillons ensemble
            </span>
          </div>
          <h2
            className="text-black font-bold mb-0"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              fontSize: "2.8rem",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Un projet AVEVA ?<br />
            <span
              style={{
                fontFamily: "'CO HEADLINE LIGHT', Arial, sans-serif",
                fontWeight: 300,
                display: "block",
                marginTop: 8,
              }}
            >
              Nous sommes à<br />votre écoute
            </span>
          </h2>
        </div>
        {/* Bloc formulaire */}
        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full">
          <div className="flex flex-col col-span-2 md:col-span-2">
            <label className="font-bold mb-1" htmlFor="societe"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
              Nom de votre société*
            </label>
            <input
              id="societe"
              name="societe"
              type="text"
              required
              placeholder="Swims"
              className="bg-transparent border-b border-black outline-none py-2 px-0 text-base"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1" htmlFor="prenom"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
              Prénom*
            </label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              required
              placeholder="Pierre"
              className="bg-transparent border-b border-black outline-none py-2 px-0 text-base"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1" htmlFor="nom"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
              Nom*
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              placeholder="Lafond"
              className="bg-transparent border-b border-black outline-none py-2 px-0 text-base"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1" htmlFor="email"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
              E-mail*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="pierre.dupond@gmail.com"
              className="bg-transparent border-b border-black outline-none py-2 px-0 text-base"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1" htmlFor="tel"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
              Numéro de téléphone*
            </label>
            <input
              id="tel"
              name="tel"
              type="tel"
              required
              placeholder="06.85.79.26.35"
              className="bg-transparent border-b border-black outline-none py-2 px-0 text-base"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="font-bold mb-1" htmlFor="message"
              style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Écrivez-nous"
              className="bg-transparent border-b border-black outline-none py-2 px-0 text-base resize-none"
              style={{ fontFamily: "'CO Text', Arial, sans-serif" }}
            />
          </div>
          <div className="col-span-2 flex justify-start mt-4">
            <button
              type="submit"
              className="bg-[#7b2ff2] hover:bg-[#5a1fa1] text-white font-bold rounded-full px-10 py-3 transition"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
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

export default Contact;