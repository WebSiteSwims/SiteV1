import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f5] pt-0">
      {/* Partie orange avec double arrondi au centre */}
      <div className="relative flex justify-center items-stretch w-full overflow-hidden" style={{ minHeight: 320 }}>
        {/* Carte gauche */}
        <div className="bg-[#ff7300] text-white flex-1 flex flex-col justify-between px-8 pt-10 pb-8 rounded-tr-[120px]">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Logo */}
            <div className="bg-white text-[#ff7300] rounded-full w-20 h-20 flex items-center justify-center text-4xl font-bold mb-6">
              SWIMS
            </div>
            {/* Accès rapide */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block rotate-[-20deg] text-lg">➤</span>
                <span className="font-bold text-lg">Accès rapide</span>
              </div>
              <ul className="space-y-3 text-white/90 font-medium text-base">
                <li><a href="#hero" className="hover:underline">Swims</a></li>
                <li><a href="#expertise" className="hover:underline">Expertises</a></li>
                <li><a href="#dmds" className="hover:underline">DMDS</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Carte droite */}
        <div className="bg-[#ff7300] text-white flex-1 flex flex-col justify-between px-8 pt-10 pb-8 rounded-tl-[120px]">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Nous contactez */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block rotate-[-20deg] text-lg">➤</span>
                <span className="font-bold text-lg">Nous contactez</span>
              </div>
              <div className="flex flex-col gap-1 text-white/90 font-medium text-base">
                <span>06 60 78 90 30</span>
                <span>contact@swims-france.com</span>
              </div>
            </div>
            {/* Restez informé */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block rotate-[-20deg] text-lg">➤</span>
                <span className="font-bold text-lg">Restez informé</span>
              </div>
              <form className="flex w-full max-w-xs">
                <input
                  type="email"
                  placeholder="e-mail"
                  className="rounded-l-full px-4 py-2 text-[#ff7300] bg-white placeholder-[#ff7300] focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-white text-[#ff7300] font-bold px-5 rounded-r-full hover:bg-orange-100 transition tracking-wide"
                >
                  S’INSCRIRE
                </button>
              </form>
            </div>
            {/* LinkedIn */}
            <div className="flex flex-col items-end w-12 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-[#e5e5e5]">
                <Linkedin size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bas de footer */}
      <div className="bg-[#ededed] text-center py-4 px-2">
        <div className="text-[#ff7300] font-medium mb-1">
          Conseil, ingénierie et innovation au service des projets les plus ambitieux.
        </div>
        <div className="text-slate-500 text-xs flex flex-wrap justify-center gap-2">
          <span>Mentions légales</span>
          <span>•</span>
          <span>Politique de confidentialité</span>
          <span>•</span>
          <span>Plan du site</span>
          <span>•</span>
          <span>Mon consentement</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;