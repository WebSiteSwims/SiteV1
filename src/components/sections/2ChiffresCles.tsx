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
    <section className="w-full bg-white py-10 md:py-20 px-0 overflow-x-hidden">
      {/* Bandeau titre */}
      <div className="flex items-center gap-2 px-4 md:px-12 pt-8 pb-2">
        <img src={iconeChiffres} alt="" className="w-6 h-6" />
        <span
          className="font-bold text-lg"
          style={{ color: "#FF7900", fontFamily: "'CO Text Bold', Arial, sans-serif" }}
        >
          Chiffres clés
        </span>
      </div>
      {/* Titre principal */}
      <div className="px-4 md:px-12 pb-8 md:pb-12">
        <h2
          className="font-black leading-tight"
          style={{
            fontSize: isMobile ? 32 : 54,
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            maxWidth: 1200,
            lineHeight: 1.1,
          }}
        >
          NOTRE TRAJECTOIRE EN<br />
          <span style={{ color: "#FF7900" }}>QUELQUES CHIFFRES</span>
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
          <svg width="28" height="28" fill="#FF7900" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2"
          onClick={() => scrollTo("right")}
          aria-label="Suivant"
          style={{ border: "1px solid #eee" }}
        >
          <svg width="28" height="28" fill="#FF7900" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-10 px-2 md:px-12 pb-10 md:pb-16 overflow-x-auto scrollbar-hide w-full"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          {chiffres.map((item, idx) => (
            <div
              key={item.year}
              style={{
                minWidth: CARD_WIDTH,
                maxWidth: CARD_WIDTH,
                flex: "0 0 auto",
                height: isMobile ? 300 : 340,
                borderRadius: 24,
                border: "2px solid #FF7900",
                background: "#fff",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: isMobile ? "24px 16px 20px 16px" : "36px 32px 32px 32px",
                position: "relative",
              }}
            >
              {/* Flamme badge */}
              <div
                style={{
                  position: "absolute",
                  left: isMobile ? 16 : 32,
                  top: isMobile ? -24 : -32,
                  background: "none",
                  zIndex: 2,
                }}
              >
                <img
                  src={flamme}
                  alt=""
                  style={{
                    width: isMobile ? 60 : 90,
                    height: isMobile ? 24 : 36,
                    objectFit: "contain",
                  }}
                  draggable={false}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: isMobile ? 60 : 90,
                    height: isMobile ? 24 : 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: isMobile ? 15 : 22,
                    color: "#fff",
                    fontFamily: "'CO Text Bold', Arial, sans-serif",
                  }}
                >
                  {item.year}
                </span>
              </div>
              <div style={{ height: isMobile ? 24 : 36 }} />
              <div
                style={{
                  fontWeight: 700,
                  fontSize: isMobile ? 17 : 22,
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  color: "#FF7900",
                  marginBottom: 8,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: isMobile ? 14 : 17,
                  color: "#222",
                  fontFamily: "'CO Text', Arial, sans-serif",
                  marginBottom: 0,
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
        {/* Barre de scroll custom avec flamme */}
        <div className="relative flex items-center mt-2 px-2 md:px-12" style={{ height: 32 }}>
          <div
            className="w-full h-2 rounded-full relative"
            style={{ background: "transparent", opacity: 0 }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: `calc(${flamePercent * 100}% - 24px)`,
                transition: "left 0.2s",
                width: 48,
                height: 32,
                zIndex: 10,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseDown={e => {
                const bar = e.currentTarget.parentElement!.parentElement!;
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
              <img src={flamme} alt="flamme" style={{ width: 48, height: 32, pointerEvents: "none" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiffresCles;