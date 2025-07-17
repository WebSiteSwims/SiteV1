import React from 'react';
import feuilleIcon from '../images/FUSEE-18.png';
import quoteIcon from '../images/guillemets orange-24.png';

const NotreADN: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 md:py-16 flex justify-center">
      <div className="bg-white rounded-3xl shadow-sm w-full max-w-5xl px-4 sm:px-8 md:px-16 py-8 md:py-14">
        {/* Bandeau titre aligné au texte */}
        <div className="flex items-center gap-2 mb-4">
          <img src={feuilleIcon} alt="" className="w-6 h-6" />
          <h2
            className="text-black font-bold text-xl md:text-2xl"
            style={{ fontFamily: "'CO Text Bold', Arial, sans-serif" }}
          >
            Notre ADN
          </h2>
        </div>
        {/* Citation et texte alignés à gauche */}
        <div className="flex flex-col items-start gap-4 mt-2 w-full">
          <img
            src={quoteIcon}
            alt=""
            className="w-10 h-10 mb-2"
            style={{ objectFit: 'contain' }}
          />
           <p
            className="text-black text-left w-full text-lg sm:text-xl md:text-2xl lg:text-3xl"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              lineHeight: 1.7,
              maxWidth: 980,
              fontWeight: 400,
            }}
          >
            Chez <span className="font-bold">Swims</span>, on casse les codes.<br />
            L’esprit startup agile et innovante, on propulse vos projets à toute vitesse grâce à notre maîtrise de la suite <span className="font-bold">AVEVA</span> et notre obsession de la <span className="font-bold">solution sur-mesure</span>. Pas juste des experts, on est des partenaires qui avancent avec vous, sans blabla inutile, avec méthode et impact.
          </p>
          <div className="w-full flex justify-center">
            <button
              className="mt-8 bg-[#ff7300] text-white font-bold rounded-full px-8 py-3 text-base transition hover:bg-[#ff8c1a] shadow"
              style={{
                fontFamily: "'CO Text Bold', Arial, sans-serif",
                letterSpacing: '0.02em',
                fontSize: '1rem',
                minWidth: 220,
              }}
            >
              INTÉGRATEUR AVEVA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotreADN;