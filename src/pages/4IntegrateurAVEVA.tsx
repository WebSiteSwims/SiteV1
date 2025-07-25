import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Preloader from '../components/ui/Preloader';
import Head from '../components/sections/4HeadInte';
import Focus from '../components/sections/4Focus';
import Expert from '../components/sections/4ExpertiseAVEVA';
import Solution from '../components/sections/4SolutionConcret';
import Reference from '../components/sections/4Reference';
import Contact from '../components/ui/Contact';
import Maitrise from '../components/sections/4Maitrise';

const HomePage: React.FC = () => {
  return (
    <>
      <div ></div>
      <Preloader />
      <Header />
      <main>
          <Head />
          <Focus />
          <Expert />
          <Maitrise />
          <Solution />
          <Reference />
          <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;