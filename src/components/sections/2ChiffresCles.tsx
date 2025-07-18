import React, { useRef, useState, useEffect } from "react";
import NumbersCard from "../ui/NumbersCard";
import iconeChiffres from "../images/FUSEE-18.png";
import flamme from "../images/FUSEE-18.png";

const chiffres = [
  {
    year: "2018",
    title: "L’aventure commence",
    description:
      "Swims naît avec une idée simple : apporter des solutions concrètes et efficaces aux défis de l’ingénierie technique.",
  },
  {
    year: "2021",
    title: "Collaboration AVEVA",
    description:
      "On devient partenaire d’un outil aussi complexe que puissant. Résultat : une maîtrise pointue, de l’intégration à l’optimisation.",
  },
  {
    year: "2023",
    title: "Intégration du GIFEN",
    description:
      "Une reconnaissance du secteur. On s’engage encore plus dans l’écosystème nucléaire.",
  },
  // Cartes de test en latin
  {
    year: "2024",
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae.",
  },
  {
    year: "2025",
    title: "Dolor Sit",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2026",
    title: "Amet Consectetur",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    year: "2027",
    title: "Adipiscing Elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    year: "2028",
    title: "Tempor Incididunt",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    year: "2029",
    title: "Labore Et Dolore",
    description:
      "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
  },
];

const CARD_WIDTH_DESKTOP = 420;
const CARD_WIDTH_MOBILE = 320;
const CARD_GAP_DESKTOP = 40;
const CARD_GAP_MOBILE = 16;

const ChiffresCles: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPos(scrollRef.current.scrollLeft);
        setMaxScroll(
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const CARD_WIDTH = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
  const CARD_GAP = isMobile ? CARD_GAP_MOBILE : CARD_GAP_DESKTOP;

  // Position de la flamme sur la barre
  const flamePercent =
    maxScroll === 0 ? 0 : Math.min(1, scrollPos / maxScroll);

  // Scroll à la carte suivante/précédente
  const scrollTo = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const offset = dir === "left" ? -CARD_WIDTH - CARD_GAP : CARD_WIDTH + CARD_GAP;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12">
          <img src={iconeChiffres} alt="" className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2" />
          <span
            className="text-lg md:text-xl font-bold text-zinc-800"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Chiffres clés
          </span>
        </div>

        {/* Titre principal */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            NOTRE TRAJECTOIRE EN<br />
            <span style={{ color: "#ff7300" }}>QUELQUES CHIFFRES</span>
          </h2>
        </div>
        {/* Cartes */}
        <div className="relative w-full">
          {/* Flèches navigation */}
          <button
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2"
            onClick={() => scrollTo("left")}
            aria-label="Précédent"
            style={{ border: "1px solid #eee" }}
          >
            <svg width="28" height="28" fill="#ff7300" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </button>
          <button
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2"
            onClick={() => scrollTo("right")}
            aria-label="Suivant"
            style={{ border: "1px solid #eee" }}
          >
            <svg width="28" height="28" fill="#ff7300" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-8 pb-10 md:pb-16 overflow-x-auto scrollbar-hide w-full"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {chiffres.map((item, idx) => (
              <div
                key={item.year}
                className="flex-shrink-0 bg-white border-2 border-[#ff7300] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-md"
                style={{
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                  height: isMobile ? 300 : 340,
                }}
              >
                {/* Flamme badge */}
                <div className="relative -mt-4 mb-4">
                  <img
                    src={flamme}
                    alt=""
                    className="w-16 h-8 md:w-20 md:h-10 object-contain"
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm md:text-base"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  className="text-[#ff7300] font-bold text-lg md:text-xl mb-3"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  {item.title}
                </div>
                <div
                  className="text-gray-600 text-sm md:text-base"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          {/* Barre de scroll custom avec flamme */}
          <div className="relative flex items-center justify-center" style={{ height: 32 }}>
            <div className="w-full max-w-md h-2 bg-gray-200 rounded-full relative">
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer"
                style={{
                  left: `${flamePercent * 100}%`,
                  transition: "left 0.2s",
                }}
                onMouseDown={(e) => {
                  const bar = e.currentTarget.parentElement!;
                  const onMove = (moveEvent: MouseEvent) => {
                    if (scrollRef.current) {
                      const rect = bar.getBoundingClientRect();
                      const x = moveEvent.clientX - rect.left;
                      const percent = Math.max(0, Math.min(1, x / rect.width));
                      scrollRef.current.scrollLeft = percent * maxScroll;
                    }
                  };
                  const onUp = () => {
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mouseup", onUp);
                  };
                  window.addEventListener("mousemove", onMove);
                  window.addEventListener("mouseup", onUp);
                }}
              >
                <img src={flamme} alt="flamme" className="w-12 h-6 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiffresCles;