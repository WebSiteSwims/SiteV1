import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Preloader from '../components/ui/Preloader';
import Head from '../components/sections/5HeadBureau';
import Focus from '../components/sections/5Focus';
import Offres from '../components/sections/5NosOffres';
import Valeur from '../components/sections/5ValeurAjoute';
import Contact from '../components/ui/Contact';


const HomePage: React.FC = () => {
  return (
    <>
      <div ></div>
      <Preloader />
      <Header />
      <main>
        <Head />
        <Focus />
        <Offres />
        <Valeur />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;