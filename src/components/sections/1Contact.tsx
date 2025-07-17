import React, { useRef, useEffect, useState } from 'react';

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
    <section id="contact" ref={sectionRef} className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
        {/* Colonne gauche */}
        <div className="flex flex-col justify-center">
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-[#ff7300] text-[#ff7300] font-semibold text-sm bg-white/80 w-fit">ON VOUS ÉCOUTE</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nous <span className="text-[#ff7300]">contacter</span>
          </h2>
          <p className="mb-6 text-black text-base">
            Un idée, un besoin, une mission un peu folle ?<br />
            On adore les challenges : écris-nous, on répond vite.
          </p>
          <div className="mb-4">
            <p className="font-bold text-black">Par mail</p>
            <p className="text-black">aurelie.salvat@swims-france.com</p>
          </div>
          <div>
            <p className="font-bold text-black">Par téléphone</p>
            <p className="text-black">07 86 97 22 48</p>
          </div>
        </div>
        {/* Colonne droite : Formulaire */}
        <div className="bg-[#ff7300] rounded-[36px] p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-8">Nous sommes à l’écoute</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nom de la société - toute la ligne */}
              <div className="md:col-span-2">
                <label className="block text-white font-semibold mb-1">Nom de votre société*</label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleInputChange}
                  required
                  placeholder="Swims"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                />
              </div>
              {/* Prénom à gauche, Nom à droite */}
              <div>
                <label className="block text-white font-semibold mb-1">Prénom*</label>
                <input
                  type="text"
                  name="firstname"
                  value={formState.firstname}
                  onChange={handleInputChange}
                  required
                  placeholder="Pierre"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Nom*</label>
                <input
                  type="text"
                  name="lastname"
                  value={formState.lastname}
                  onChange={handleInputChange}
                  required
                  placeholder="Lafond"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                />
              </div>
              {/* Email à gauche, Numéro à droite */}
              <div>
                <label className="block text-white font-semibold mb-1">E-mail*</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  placeholder="pierre.dupond@gmail.com"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-1">Numéro de téléphone*</label>
                <input
                  type="text"
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="06.85.79.26.35"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2"
                />
              </div>
              {/* Message - toute la ligne */}
              <div className="md:col-span-2">
                <label className="block text-white font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Ecrivez-nous"
                  rows={2}
                  className="w-full bg-transparent border-b border-white text-white placeholder-white focus:outline-none py-2 resize-none"
                />
              </div>
            </div>
            {/* Bouton à gauche */}
            <div className="flex">
              <button
                type="submit"
                className="mt-6 bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-100 transition"
                disabled={status === 'submitting'}
              >
                ENVOYER
              </button>
            </div>
            {status === 'success' && (
              <div className="text-white text-center mt-4">Merci, votre message a bien été envoyé !</div>
            )}
            {status === 'error' && (
              <div className="text-red-200 text-center mt-4">Une erreur est survenue, veuillez réessayer.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;