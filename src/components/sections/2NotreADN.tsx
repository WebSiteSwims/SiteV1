import React from 'react';
import feuilleIcon from '../images/FUSEE-18.png';
import quoteIcon from '../images/guillemets orange-24.png';

const NotreADN: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bandeau titre */}
        <div className="flex items-center gap-2 pt-6 pb-2">
          <img src={feuilleIcon} alt="" className="w-6 h-6" />
          <span
            className="font-bold text-lg"
            style={{ color: "#FF7300", fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
          >
            Notre ADN
          </span>
        </div>
        {/* Citation et texte alignés à gauche */}
        <div className="mb-12 md:mb-16">
          <img
            src={quoteIcon}
            alt=""
            className="w-10 h-10 mb-2"
            style={{ objectFit: 'contain' }}
          />
          <h2
            className="font-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6"
            style={{
              fontFamily: "'CO HEADLINE LIGHT', Arial, sans-serif",
              lineHeight: 1.15,
              color: '#111',
            }}
          >
            Chez <span className="bold">Swims</span>, on casse les codes.<br />
            L’esprit startup agile et innovante, on propulse vos projets à toute vitesse grâce à notre maîtrise de la suite <span className="font-bold">AVEVA</span> et notre obsession de la <span className="font-bold">solution sur-mesure</span>.<br />
            Pas juste des experts, on est des partenaires qui avancent avec vous, sans blabla inutile, avec méthode et impact.
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="mt-2 bg-[#ff7300] text-white font-bold rounded-full px-8 py-3 text-base transition hover:bg-[#ff8c1a] shadow"
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
    </section>
  );
};

export default NotreADN;