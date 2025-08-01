import React from 'react';
import degradeGrain from '../images/DEGRADE GRAIN.jpg';
import fuseeHome from '../images/FUSEE-Home.png';


const HeadNous: React.FC = () => {
  return (
    <div className="relative">
      {/* Partie blanche au-dessus avec bords arrondis */}
      <div 
        className="w-full h-28 bg-white"
        style={{
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      ></div>
      
      <section
        className="min-h-screen flex items-start justify-start relative overflow-hidden"
        style={{
          background: `url(${degradeGrain}) center center / cover no-repeat`,
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
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
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            lineHeight: 1.00,
            display: 'block',
          }}
        >
          On ne fait pas que<br />
          suivre les projets.
        </span>
        <br />
        <span
          style={{
            fontFamily: "'CO HEADLINE BOLD'",
            fontWeight: 700,
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            lineHeight: 1.00,
            display: 'block',
          }}
        >
          On les propulse
        </span>
      </h1>
      <button
        className="border-2 border-white text-white font-bold rounded-full px-8 py-3 transition w-fit"
        style={{
          fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
          fontSize: 'clamp(14px, 2vw, 16px)',
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
      className="absolute object-contain z-10 hidden lg:block"
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
        opacity: 1,
        transform: 'rotate(-12deg)',
        right: 'clamp(-350px, -25vw, -150px)',
        bottom: 'clamp(-250px, -18vw, -120px)',
        width: 'clamp(600px, 60vw, 1200px)',
        height: 'clamp(450px, 45vw, 900px)',
      }}
      draggable={false}
    />
  </section>
  </div>
  );
};

export default HeadNous;