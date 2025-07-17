import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/1HeadHome';
import Expertise from '../components/sections/1Expertise';
import ProductShowcase from '../components/sections/1NosPlus';
import Advantages from '../components/sections/1FAQ';
import Footer from '../components/layout/Footer';
import Preloader from '../components/ui/Preloader';
import SwimsTools from '../components/sections/1SwimsTools';
import Projects from '../components/sections/1Project';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#ff7300] via-[#fb7403] to-[#f8e2ad] opacity-50 pointer-events-none"></div>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Expertise />
        <SwimsTools />
        <ProductShowcase />
        <Advantages />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;