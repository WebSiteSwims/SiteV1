import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Preloader from '../components/ui/Preloader';
import Head from '../components/sections/6HeadAssist';
import Focus from '../components/sections/6Focus';
import Approche from '../components/sections/6NotreApproche';
import Reference from '../components/sections/6Reference';
import Mission from '../components/sections/6Mission';

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
        <Approche />
        <Mission />
        <Reference />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;