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
      className="bg-[#ff7300] text-white py-12 px-4 md:px-12 flex flex-col items-stretch justify-center min-h-screen w-full"
    >
      <motion.div
        className="flex items-center gap-2 mb-2"
        style={{ opacity }}
      >
        <img
          src={fuseeImg}
          alt="Fusée"
          className="w-6 h-6 md:w-7 md:h-7 object-contain"
        />
        <span className="font-bold text-base md:text-lg">FAQ</span>
      </motion.div>
      {/* Bloc titre + description sur deux colonnes, centrés */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center mb-8 gap-8 relative">
        {/* Ligne centrale de séparation */}
        <div className="flex-1 flex justify-end md:pr-8 min-w-0 z-20">
          <h2
            className="font-extrabold text-left
              text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              mb-2 leading-tight w-full"
            style={{
              fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            BESOINS D’AIDE ?<br />
            ON VOUS VOIT<br />
            VENIR
          </h2>
        </div>
        <div className="flex-1 flex justify-start md:pl-8 min-w-0 z-20">
          <div className="md:max-w-md w-full">
            <div className="font-bold text-base md:text-lg lg:text-xl mb-2 text-center md:text-left">
              Tout savoir sur notre métier ?
            </div>
            <div
              className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl text-center md:text-left"
              style={{ lineHeight: 2 }}
            >
              Une société d’ingénierie spécialisée dans les environnements techniques complexes. On conçoit, on modélise, on forme, et on développe des outils qui font gagner du temps. Et oui, on est vraiment bons.
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
            >
              <span>{item.question}</span>
              <span className="ml-4">
                {open === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-white/90 text-sm md:text-base">{item.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;