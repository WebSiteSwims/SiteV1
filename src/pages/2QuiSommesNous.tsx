import React from 'react';
import Preloader from '../components/ui/Preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeadNous from '../components/sections/2HeadNous';
import NotreADN from '../components/sections/2NotreADN';
import NotreHistoire from '../components/sections/2NotreHistoire';
import NosValeurs from '../components/sections/2NosValeurs';
import ChiffresCles from '../components/sections/2ChiffresCles';
import TravaillonsEnsemble from '../components/sections/2TravaillonsEnsemble';
import Contact from '../components/ui/Contact';


const HomePage: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#ff7300] via-[#fb7403] to-[#f8e2ad] opacity-50 pointer-events-none"></div>
      <Preloader />
      <Header />
      <main>
        <HeadNous />
        <NotreADN />
        <NotreHistoire />
        <NosValeurs />
        <ChiffresCles />
        <TravaillonsEnsemble />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;