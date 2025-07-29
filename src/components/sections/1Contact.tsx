import React, { useRef, useEffect, useState } from 'react';
import fuseeImg from '../images/FUSEE-18.png';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formState, setFormState] = useState({
    company: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setFormState({
      company: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="w-full py-16 md:py-20 lg:py-24 bg-[#f5f5f5]">
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
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche */}
          <div className="flex flex-col justify-center">
            <span 
              className="inline-block mb-4 px-4 py-2 rounded-full border border-[#ff7300] text-[#ff7300] font-semibold text-sm bg-white/80 w-fit"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              }}
            >
              ON VOUS ÉCOUTE
            </span>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Nous <span className="text-[#ff7300]">contacter</span>
            </h2>
            <p 
              className="mb-8 text-gray-600 text-base md:text-lg"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              }}
            >
              Un idée, un besoin, une mission un peu folle ?<br />
              On adore les challenges : écris-nous, on répond vite.
            </p>
            <div className="space-y-4">
              <div>
                <p 
                  className="font-bold text-black"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  Par mail
                </p>
                <p 
                  className="text-gray-600"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  aurelie.salvat@swims-france.com
                </p>
              </div>
              <div>
                <p 
                  className="font-bold text-black"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  Par téléphone
                </p>
                <p 
                  className="text-gray-600"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  07 86 97 22 48
                </p>
              </div>
            </div>
          </div>
        {/* Colonne droite : Formulaire */}
          <div className="bg-[#ff7300] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <h3 
              className="text-white font-bold text-2xl md:text-3xl mb-8"
              style={{
                fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
              }}
            >
              Nous sommes à l'écoute
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom de la société - toute la ligne */}
                <div className="md:col-span-2">
                  <label 
                    className="block text-white font-semibold mb-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    Nom de votre société*
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Swims"
                    className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  />
                </div>
                {/* Prénom à gauche, Nom à droite */}
                <div>
                  <label 
                    className="block text-white font-semibold mb-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    Prénom*
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formState.firstname}
                    onChange={handleInputChange}
                    required
                    placeholder="Pierre"
                    className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block text-white font-semibold mb-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    Nom*
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formState.lastname}
                    onChange={handleInputChange}
                    required
                    placeholder="Lafond"
                    className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  />
                </div>
                {/* Email à gauche, Numéro à droite */}
                <div>
                  <label 
                    className="block text-white font-semibold mb-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    E-mail*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="pierre.dupond@gmail.com"
                    className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label 
                    className="block text-white font-semibold mb-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    Numéro de téléphone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="06.85.79.26.35"
                    className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  />
                </div>
                {/* Message - toute la ligne */}
                <div className="md:col-span-2">
                  <label 
                    className="block text-white font-semibold mb-2"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Ecrivez-nous"
                    rows={3}
                    className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2 resize-none"
                    style={{
                      fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                    }}
                  />
                </div>
              </div>
              {/* Bouton à gauche */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="mt-6 bg-white text-[#ff7300] font-bold py-3 px-8 rounded-full text-base md:text-lg hover:bg-gray-100 transition-all duration-300"
                  disabled={status === 'submitting'}
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  {status === 'submitting' ? 'ENVOI...' : 'ENVOYER'}
                </button>
              </div>
              {status === 'success' && (
                <div 
                  className="text-white text-center mt-4"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  Merci, votre message a bien été envoyé !
                </div>
              )}
              {status === 'error' && (
                <div 
                  className="text-red-200 text-center mt-4"
                  style={{
                    fontFamily: "'CO HEADLINE BOLD', Arial, sans-serif",
                  }}
                >
                  Une erreur est survenue, veuillez réessayer.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;