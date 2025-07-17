import fuseeImg from '../images/FUSEE-18.png';

const SwimsTools = () => {
  return (
    <section className="swims-tools-bg relative min-h-[60vh]">
      <div className="absolute top-8 left-8 flex items-center gap-2">
        <img
          src={fuseeImg}
          alt="Fusée"
          className="w-6 h-6 md:w-8 md:h-8 object-contain"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 m-0 p-0 leading-tight">
          Outils signés Swims
        </h2>
      </div>
      <div className="swims-tools-content flex flex-col items-center justify-center min-h-[60vh]">
        <div className="dmds-big">DMDS</div>
        <p className="dmds-text text-center">
          Notre outil magique pour fiabiliser vos modèles 3D en un temps record.<br />
          Fiabilité, rapidité, tranquilleté d'esprit.
        </p>
        <div className="dmds-buttons flex gap-4 mt-4">
          <span className="btn-gradient-wrapper">
            <button className="dmds-btn" data-testid="dmds-btn">Découvrir DMDS</button>
          </span>
          <span className="btn-gradient-wrapper">
            <button className="dmds-btn" data-testid="dmds-btn">Demander une démo</button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SwimsTools;