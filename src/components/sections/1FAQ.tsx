import React, { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import fuseeImg from '../images/fusee blanche.png';

const faqData = [
  {
    question: "Swims, c’est quoi exactement ?",
    answer: "Swims est une société d’ingénierie spécialisée dans les environnements techniques complexes..."
  },
  {
    question: "Vous êtes spécialisés dans le nucléaire ?",
    answer: "Oui, nous avons une expertise reconnue dans le secteur nucléaire, mais pas seulement."
  },
  {
    question: "C’est quoi votre différence ?",
    answer: "Notre différence : l’innovation, la réactivité et la proximité avec nos clients."
  },
  {
    question: "Vous êtes intégrateurs AVEVA ?",
    answer: "Oui, nous intégrons et personnalisons les solutions AVEVA pour vos besoins."
  },
  {
    question: "Vous développez aussi des outils ?",
    answer: "Nous développons des outils sur-mesure pour optimiser vos process."
  },
  {
    question: "Comment on travaille avec vous ?",
    answer: "Contactez-nous, on s’occupe de tout : analyse, proposition, accompagnement."
  }
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.7, 0]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 lg:py-24 bg-[#ff7300] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre standardisé en haut à gauche */}
        <motion.div
          className="flex items-center mb-8 md:mb-12"
          style={{ opacity }}
        >
          <img
            src={fuseeImg}
            alt="Fusée"
            className="w-6 h-6 md:w-7 md:h-7 object-contain mr-2"
          />
          <span
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-white"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
            }}
          >
            FAQ
          </span>
        </motion.div>
      {/* Bloc titre + description sur deux colonnes, centrés */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center mb-8 md:mb-12 gap-8">
          {/* Colonne gauche - Titre */}
          <div className="flex-1 flex justify-center lg:justify-end lg:pr-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              BESOINS D'AIDE ?<br />
              ON VOUS VOIT<br />
              VENIR
            </h2>
          </div>
          
          {/* Colonne droite - Description */}
          <div className="flex-1 flex justify-center lg:justify-start lg:pl-8">
            <div className="max-w-md w-full text-center lg:text-left">
              <div 
                className="text-lg md:text-xl font-bold mb-4"
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Tout savoir sur notre métier ?
              </div>
              <div
                className="text-white/90 text-base md:text-lg lg:text-xl"
                style={{ 
                  lineHeight: 1.6,
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                Une société d'ingénierie spécialisée dans les environnements techniques complexes. On conçoit, on modélise, on forme, et on développe des outils qui font gagner du temps. Et oui, on est vraiment bons.
              </div>
            </div>
          </div>
        </div>
        {/* Bloc FAQ */}
        <div className="w-full flex flex-col gap-4">
          {faqData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border border-white rounded-xl px-5 py-0 flex flex-col transition-all duration-300 bg-transparent w-full"
            >
              <button
                className="flex items-center justify-between w-full text-left font-semibold text-white text-base md:text-lg py-4 focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                style={{
                  fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                }}
              >
                <span>{item.question}</span>
                <span className="ml-4">
                  {open === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p 
                  className="text-white/90 text-sm md:text-base pb-4"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;