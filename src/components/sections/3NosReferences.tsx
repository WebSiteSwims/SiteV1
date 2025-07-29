import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import eiffage from "../images/LogoEiffage.png";
import open from "../images/LogoOpen.png";
import assystem from "../images/LogoAssystem.png";
import monteiro from "../images/LogoMonteiro.png";
import aveva from "../images/LogoAVEVA.png";
import edvance from "../images/LogoEdvance.png";
import dalkia from "../images/LogoDalkia.png";
import abmi from "../images/LogoABMI.png";
import alten from "../images/LogoAlten.png";
import vulcan from "../images/LogoVulcan.png";

const clients = [
  { name: "Eiffage", logo: eiffage },
  { name: "Open", logo: open },
  { name: "Assystem", logo: assystem },
  { name: "Monteiro", logo: monteiro },
  { name: "Aveva", logo: aveva },
  { name: "Edvance", logo: edvance },
  { name: "Dalkia", logo: dalkia },
  { name: "ABMI", logo: abmi },
  { name: "Alten", logo: alten },
  { name: "Vulcan", logo: vulcan },
];

const NosReferences: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        /* Responsive animations */
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
        }
      `}</style>
      
      <section className="w-full bg-[#fafafa] py-12 md:py-16 lg:py-20 xl:py-24 px-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bandeau titre standardisé */}
          <div className="flex items-center gap-2 pt-4 md:pt-6 pb-2 mb-8 md:mb-12 lg:mb-16">
            <img src={iconeFlamme} alt="" className="w-5 h-5 md:w-6 md:h-6" />
            <span
              className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ 
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" 
              }}
            >
              Nos références
            </span>
          </div>

          {/* Banderole "NOS CLIENTS" qui défile */}
          <div className="mb-6 md:mb-8 overflow-hidden">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block mx-6 md:mx-8 text-lg md:text-xl lg:text-2xl font-bold text-[#ff7300] opacity-60"
                  style={{ fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif" }}
                >
                  NOS CLIENTS
                </span>
              ))}
            </div>
          </div>

          {/* Bande de logos - défile de gauche à droite */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={`logos-${idx}`}
                  className="flex-shrink-0 mx-4 md:mx-8 bg-white rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ 
                    width: "clamp(180px, 20vw, 240px)", 
                    height: "clamp(120px, 15vw, 160px)" 
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 md:max-h-20 lg:max-h-28 xl:max-h-32 max-w-[75%] md:max-w-[85%] object-contain"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NosReferences;