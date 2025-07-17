import React from "react";
import iconeFlamme from "../images/FUSEE-18.png";
import eiffage from "../images/guillemets orange-24.png";
import open from "../images/guillemets orange-24.png";
import assystem from "../images/guillemets orange-24.png";
import monteiro from "../images/guillemets orange-24.png";
import aveva from "../images/guillemets orange-24.png";
import edf from "../images/guillemets orange-24.png";

const clients = [
  { name: "Eiffage", logo: eiffage },
  { name: "Open", logo: open },
  { name: "Assystem", logo: assystem },
  { name: "Monteiro", logo: monteiro },
  { name: "Aveva", logo: aveva },
  { name: "Edvance", logo: edf },
];

const NosReferences: React.FC = () => {
  return (
    <section className="w-full bg-[#fafafa] py-12 px-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Titre */}
        <div className="flex items-center mb-10">
          <img src={iconeFlamme} alt="" className="w-7 h-7 mr-3" />
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              color: "#111",
            }}
          >
            Nos références
          </h2>
        </div>
        {/* Grille clients */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-4 md:gap-x-8 items-end">
          {clients.map((client, idx) => (
            <div key={client.name} className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-bold mb-4 text-center"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  color: "#111",
                  letterSpacing: "-0.02em",
                }}
              >
                NOS CLIENTS
              </div>
              <div
                className="bg-white rounded-2xl flex items-center justify-center shadow-sm"
                style={{
                  width: 110,
                  height: 70,
                  margin: "0 auto",
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-[80px] object-contain"
                  style={{ filter: "grayscale(100%)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosReferences;