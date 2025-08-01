import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSmoothScroll } from '../../contexts/SmoothScrollContext';
import integrateurImg from '../images/Integrateur_AVEVA.png';
import bureauImg from '../images/Bureau_d\'etude.png';
import assistanceImg from '../images/Assistance_technique.png';
import fuseeImg from '../images/FUSEE-18.png';

interface ExpertiseCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  borderColor: string;
  buttonColor: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title, description, image, index, borderColor, buttonColor
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      className={`bg-white border-2 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${borderColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1]
      }}
      whileHover={{ y: -10 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col justify-between min-h-[200px]">
        <h3 
          className="text-xl font-semibold mb-2 text-zinc-800"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
          }}
        >
          {title}
        </h3>
        <p 
          className="text-gray-600 flex-grow"
          style={{
            fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
          }}
        >
          {description}
        </p>
        <div className="mt-4 text-right">
          <button
            className={`px-5 py-2 rounded-full font-bold shadow-sm transition ${buttonColor}`}
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Découvrir
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Expertise: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerSection } = useSmoothScroll();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (sectionRef.current) {
      registerSection('expertise', sectionRef);
    }
  }, [registerSection]);

  const expertiseData = [
    {
      title: 'Intégrateur AVEVA',
      description: 'On connecte vos données techniques à la performance terrain grâce à une maîtrise 360° de la suite AVEVA.',
      image: integrateurImg, 
    },
    {
      title: 'Bureau d’étude',
      description: 'Des cerveaux agiles pour concevoir vos projets les plus complexes, du plan à l’action.',
      image: bureauImg,
    },
    {
      title: 'Assistance Technique',
      description: 'Besoin de renfort ? On intègre vos équipes comme si on y était, avec expertise et flexibilité.',
      image: assistanceImg,
    },
  ];

  return (
    <section id="expertise" ref={sectionRef} className="w-full py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <motion.div
          className="flex items-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={fuseeImg}
            alt="Fusée"
            className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2"
          />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            Nos expertises
          </span>
        </motion.div>
        
        <div className="mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            FAIRE <span style={{ color: '#ff7300' }}>DÉCOLLER VOS IDÉES&nbsp;?</span>
          </h2>
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            C'EST NOTRE SPÉCIALITÉ
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => {
            const borderColors = [
              'border-purple-700',
              'border-purple-500',
              'border-purple-300'
            ];
            const buttonColors = [
              'bg-purple-700 hover:bg-purple-800 text-white',
              'bg-purple-500 hover:bg-purple-600 text-white',
              'bg-purple-300 hover:bg-purple-400 text-purple-900'
            ];
            return (
              <ExpertiseCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                index={index}
                borderColor={borderColors[index]}
                buttonColor={buttonColors[index]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
