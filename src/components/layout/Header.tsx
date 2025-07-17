import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactPopup from '../ui/ContactPopup';
import logoSwims from '../images/SWIMS.NOIR-ORANGE@3x.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Swims', path: '/qui-sommes-nous' },
  {
    name: 'Expertises',
    subMenu: [
      { name: 'Intégrateur AVEVA', path: '/integrateur-aveva' },
      { name: "Bureau d'étude", path: '/bureau-detude' },
      { name: 'Assistance technique', path: '/assistance-technique' },
    ],
  },
  { name: 'DMDS', path: '/nos-expertises' },
];

const Header: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExpertises, setShowExpertises] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNavClick = (path: string, name: string) => {
    window.location.href = path;
    setActive(name);
    setMenuOpen(false);
    setShowExpertises(false);
  };

  if (!isMounted) return null;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 md:py-8 md:px-8 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', 'Home');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={logoSwims}
            alt="Swims logo"
            className="h-10 w-auto md:h-12"
            style={{ display: 'block' }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex bg-[#f7f7f7] rounded-full px-6 py-2 gap-4 items-center shadow-lg mt-0 relative">
          {navLinks.map((link) =>
            link.subMenu ? (
              <div key={link.name} className="relative">
                <button
                  onClick={() => setShowExpertises((v) => !v)}
                  className={`text-base font-medium px-4 py-1 rounded-full transition-all
                    ${active === link.name
                      ? 'bg-[#ff7300] text-white font-extrabold shadow'
                      : 'text-black hover:bg-orange-50'
                    }`}
                  style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
                >
                  {link.name}
                </button>
                {showExpertises && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg flex flex-col min-w-[220px] z-50">
                    {link.subMenu.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavClick(sub.path, link.name)}
                        className="text-left px-4 py-2 hover:bg-orange-50"
                        style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path, link.name)}
                className={`text-base font-medium px-4 py-1 rounded-full transition-all
                  ${active === link.name
                    ? 'bg-[#ff7300] text-white font-extrabold shadow'
                    : 'text-black hover:bg-orange-50'
                  }`}
                style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
              >
                {link.name}
              </button>
            )
          )}
        </nav>

        {/* Desktop Contact Button */}
        <button
          className="hidden md:block bg-orange-100 text-black font-bold px-8 py-2 rounded-full hover:bg-orange-200 transition-all text-base shadow"
          onClick={() => setShowContactPopup(true)}
          style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
        >
          Contactez-nous
        </button>

        {/* Burger menu for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-[#f7f7f7] shadow-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span className="block w-6 h-0.5 bg-[#ff7300] mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-[#ff7300] mb-1 rounded"></span>
          <span className="block w-6 h-0.5 bg-[#ff7300] rounded"></span>
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl z-50 flex flex-col pt-24 px-6 gap-6"
          >
            <button
              className="self-end mb-8 text-3xl text-[#ff7300] font-bold"
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              &times;
            </button>
            {navLinks.map((link) =>
              link.subMenu ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() => setShowExpertises((v) => !v)}
                    className={`text-lg font-bold px-4 py-3 rounded-full transition-all text-left w-full
                      ${active === link.name
                        ? 'bg-[#ff7300] text-white shadow'
                        : 'text-black hover:bg-orange-50'
                      }`}
                    style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
                  >
                    {link.name}
                  </button>
                  {showExpertises && (
                    <div className="flex flex-col bg-orange-50 rounded shadow-inner mb-2">
                      {link.subMenu.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavClick(sub.path, link.name)}
                          className="text-left px-6 py-2 hover:bg-orange-100"
                          style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path, link.name)}
                  className={`text-lg font-bold px-4 py-3 rounded-full transition-all text-left w-full
                    ${active === link.name
                      ? 'bg-[#ff7300] text-white shadow'
                      : 'text-black hover:bg-orange-50'
                    }`}
                  style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
                >
                  {link.name}
                </button>
              )
            )}
            <button
              className="bg-orange-100 text-black font-bold px-4 py-3 rounded-full hover:bg-orange-200 transition-all text-lg shadow w-full"
              onClick={() => {
                setShowContactPopup(true);
                setMenuOpen(false);
              }}
              style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
            >
              Contactez-nous
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Contact Popup */}
      {showContactPopup && (
        <ContactPopup isOpen={showContactPopup} onClose={() => setShowContactPopup(false)} />
      )}
    </>
  );
};

export default Header;