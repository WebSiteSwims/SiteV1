import React from 'react';
import degradeGrain from '../images/DEGRADE GRAIN.jpg';
import imageProjet from '../images/FUSEE-Home.png';

const HeadNous: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-start justify-start relative overflow-hidden"
      style={{
        background: `url(${degradeGrain}) center center / cover no-repeat`,
      }}
    >
      {/* Texte principal */}
      <div className="z-10 pt-32 pl-10 md:pt-60 md:pl-20">
        <h1
          className="mb-6 text-white drop-shadow-lg text-left"
          style={{
            fontFamily: "'CO Text Light', sans-serif",
            fontWeight: 300,
            lineHeight: 1.1,
          }}
        >
          <span
            style={{
              fontFamily: "'CO HEADLINE LIGHT'",
              fontWeight: 300,
              lineHeight: 1.00,
              display: 'inline',
            }}
            className="block text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            On ne fait pas que<br />
            suivre les projets.
          </span>
          <br />
          <span
            style={{
              fontFamily: "'CO HEADLINE BOLD'",
              fontWeight: 700,
              lineHeight: 1.00,
              display: 'inline',
            }}
            className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[9rem]"
          >
            On les propulse
          </span>
        </h1>
        <button
          className="border-2 border-white text-white font-bold rounded-full px-8 py-3 text-2xl transition w-fit"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            letterSpacing: '0.03em',
            background: 'transparent',
            marginBottom: '1.5rem',
            borderColor: 'white',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            (e.currentTarget.style.background = 'white');
            (e.currentTarget.style.color = '#ff7300');
          }}
          onMouseLeave={e => {
            (e.currentTarget.style.background = 'transparent');
            (e.currentTarget.style.color = 'white');
          }}
        >
          UN PROJET ? CONTACTEZ NOUS.
        </button>
      </div>
      {/* Image projet à droite, positionnée comme sur HeadHome */}
      <img
        src={imageProjet}
        alt="Projet tablette"
        className="
          absolute object-contain z-10
          right-[-40px] bottom-[-40px]
          w-[300px] h-[220px]
          sm:w-[600px] sm:h-[400px] sm:right-[-120px] sm:bottom-[-120px]
          md:w-[900px] md:h-[700px] md:right-[-250px] md:bottom-[-200px]
          lg:w-[1200px] lg:h-[950px] lg:right-[-350px] lg:bottom-[-250px]
          xl:w-[1400px] xl:h-[1150px] xl:right-[-450px] xl:bottom-[-310px]
        "
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 1,
          transform: 'rotate(-12deg)',
        }}
        draggable={false}
      />
    </section>
  );
};

export default HeadNous;