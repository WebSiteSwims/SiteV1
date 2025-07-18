import fuseeImg from '../images/FUSEE-18.png';

const SwimsTools = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#f8f5ef' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <div className="flex items-center mb-8 md:mb-12">
          <img
            src={fuseeImg}
            alt="Fusée"
            className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2"
          />
          <span
            className="text-lg md:text-xl font-bold text-zinc-800"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Outils signés Swims
          </span>
        </div>

        {/* Contenu centré */}
        <div className="flex flex-col items-center justify-center text-center">
          <div 
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold mb-8 md:mb-12"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            DMDS
          </div>
          <p 
            className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.4,
              color: '#555',
            }}
          >
            Notre outil magique pour fiabiliser vos modèles 3D en un temps record.<br />
            Fiabilité, rapidité, tranquilleté d'esprit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="btn-gradient-wrapper">
              <button 
                className="dmds-btn px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300" 
                data-testid="dmds-btn"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Découvrir DMDS
              </button>
            </span>
            <span className="btn-gradient-wrapper">
              <button 
                className="dmds-btn px-6 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300" 
                data-testid="dmds-btn"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Demander une démo
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwimsTools;