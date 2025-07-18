import React, { useRef, useEffect, useState } from 'react';
import fuseeImg from '../images/FUSEE-18.png';

const plusData = [
  {
    title: 'Réactivité',
    description: 'On bouge vite sans jamais bâcler. Vos délais sont les nôtres',
    gradient: 'bg-gradient-to-r from-[#ff7300] to-[#ffb347]',
    textColor: 'text-white',
    border: '',
  },
  {
    title: 'Proximité',
    description: 'Ici, pas de sous-traitance : on bosse main dans la main avec vous.',
    gradient: '',
    textColor: 'text-black',
    border: 'border-2 border-[#ff7300]',
  },
  {
    title: 'Fiabilité',
    description: 'On tient nos engagements, sur la qualité comme sur les délais.',
    gradient: '',
    textColor: 'text-black',
    border: 'border-2 border-[#ff7300]',
  },
];

const cardWidth = 420;
const gap = 32;

const NosPlus: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  // Scroll to card on dot click
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: current * (cardWidth + gap),
        behavior: 'smooth',
      });
    }
  }, [current]);

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12">
          <img src={fuseeImg} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="text-lg md:text-xl font-bold text-zinc-800"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Nos plus
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-0 relative">
          {/* Ligne centrale de séparation */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-[#f2f2f2] z-10 pointer-events-none" style={{ transform: 'translateX(-50%)' }} />
          <div className="flex-1 flex items-center z-20 pr-0 md:pr-12">
            <div>
              <h2
                className="font-extrabold mb-0 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  lineHeight: 1.05,
                  color: "#111",
                  letterSpacing: -2,
                }}
              >
                POURQUOI NOS<br />
                CLIENTS NOUS<br />
                RECOMMANDENT
              </h2>
            </div>
          </div>
          {/* Slider à droite */}
          <div className="flex-[2] w-full flex flex-col z-20 overflow-x-visible min-w-0">
            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-2 justify-start"
              style={{
                scrollSnapType: 'x mandatory',
                width: '100%',
                maxWidth: '100%',
              }}
            >
              {plusData.map((item, idx) => (
                <div
                  key={idx}
                  className={`
                    min-w-[420px] max-w-[420px] h-[220px] rounded-3xl p-8 flex flex-col justify-center
                    border-2 border-[#ff7300]
                    shadow-md
                    transition-all duration-300
                    cursor-pointer
                    ${hovered === idx ? 'bg-gradient-to-r from-[#ff7300] to-[#ffb347] text-white' : 'bg-white text-black'}
                  `}
                  style={{
                    scrollSnapAlign: 'start',
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    marginRight: idx === plusData.length - 1 ? 0 : gap,
                  }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setCurrent(idx)}
                >
                  <div className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{item.title}</div>
                  <div
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal"
                    style={{
                      fontFamily: "'CO Text', Arial, sans-serif",
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            {/* Dots alignés à gauche sous les cartes */}
            <div className="flex gap-2 mt-6 ml-0 md:ml-0 justify-start w-[420px]">
              {plusData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-6 h-3 rounded-full border border-[#ff7300] transition-all duration-200
                    ${current === idx ? 'bg-[#ff7300]' : 'bg-white'}
                  `}
                  aria-label={`Go to card ${idx + 1}`}
                  style={{
                    boxShadow: current === idx ? '0 0 0 2px #fff, 0 0 0 4px #ff7300' : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosPlus; 