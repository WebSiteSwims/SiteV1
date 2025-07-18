import React from 'react';
import feuilleIcon from '../images/fusee blanche.png';
import fuseeImg from '../images/Integrateur_AVEVA.png';

const NotreHistoire: React.FC = () => {
  return (
    <section className="w-full bg-[#ff7300] pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12 pt-8">
          <img src={feuilleIcon} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="text-lg md:text-xl font-bold text-white"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Notre histoire
          </span>
        </div>
        <div className="w-full flex justify-end max-w-5xl mx-auto px-4 sm:px-8 md:px-16 mb-8">
          <span
            className="block text-white font-semibold text-right"
            style={{
              fontFamily: "'CO HEADLINE LIGHT', Arial, sans-serif",
              fontWeight: 400,
              lineHeight: 1.3,
              maxWidth: 900,
              fontSize: '2.3rem',
            }}
          >
            Swims, c'est l'histoire d'ingénieurs terrain qui<br className="hidden md:block" />
            voulaient faire bouger les lignes.
          </span>
        </div>
      </div>

      {/* Image fusée centrée, à cheval sur orange et blanc */}
      <div
        className="w-full flex justify-center relative z-30 px-4 sm:px-8 md:px-16"
        style={{
          pointerEvents: 'none',
          marginTop: '0px', // remonte l'image pour réduire la zone orange
        }}
      >
        <img
          src={fuseeImg}
          alt="Lancement de fusée"
          className="w-full max-w-5xl h-[340px] sm:h-[440px] md:h-[560px] lg:h-[700px] object-cover object-center rounded-[40px] sm:rounded-[60px] shadow-lg"
          style={{
            background: '#fff',
            borderRadius: 48,
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            position: 'relative',
            top: '0px', // image centrée verticalement
            zIndex: 30,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Partie blanche arrondie en haut, commence juste sous la moitié de l'image */}
      <div
        className="w-full bg-white pb-32 px-4 md:px-0 flex justify-center relative z-20"
        style={{
          borderTopLeftRadius: 48,
          borderTopRightRadius: 48,
          marginTop: '-200px',
          paddingTop: '260px',
          minHeight: 'calc(100vh - 200px)', // le blanc recouvre tout le bas
        }}
      >
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <p
            className="text-black text-base sm:text-lg md:text-2xl lg:text-3xl"
            style={{
              fontFamily: "'CO Text', Arial, sans-serif",
              lineHeight: 1.7,
              textAlign: 'left',
              maxWidth: 1000,
              fontWeight: 400,
            }}
          >
            <span className="font-bold">Lancée en <span style={{ fontWeight: 700 }}>2018</span></span>, notre structure s’est construite avec une idée simple : quand un projet stagne, c’est qu’il manque de méthode, d’expertise… ou de vision.<br /><br />
            Notre mission ? On structure, on <span className="font-bold">digitalise</span>, on <span className="font-bold">fiabilise</span>. Et surtout, on s’adapte. Toujours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotreHistoire;