import React from 'react';
import degradeGrain from '../images/DEGRADE GRAIN.jpg';
import fuseeHome from '../images/FUSEE-Home.png';


const HeadNous: React.FC = () => {
  return (
    <section
      className="min-h-screen flex items-start justify-start relative overflow-hidden"
      style={{
        background: `url(${degradeGrain}) center center / cover no-repeat`,
      }}
    >
      {/* Texte principal */}
      <div className="z-10 pt-16 pl-10 md:pt-32 md:pl-20">
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
    {/* Image projet à droite, qui rétrécit selon la taille d'écran */}
    <img
      src={fuseeHome}
      alt="Fusée Home"
      className="
        absolute object-contain z-10
        right-[-40px] bottom-[-40px]
        w-[200px] h-[150px]
        sm:w-[400px] sm:h-[280px] sm:right-[-80px] sm:bottom-[-60px]
        md:w-[600px] md:h-[450px] md:right-[-150px] md:bottom-[-120px]
        lg:w-[900px] lg:h-[680px] lg:right-[-250px] lg:bottom-[-200px]
        xl:w-[1200px] xl:h-[900px] xl:right-[-350px] xl:bottom-[-250px]
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