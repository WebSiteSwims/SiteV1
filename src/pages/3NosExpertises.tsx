import React from 'react';
import Preloader from '../components/ui/Preloader';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeadExpert from '../components/sections/3HeadExpert';
import Force from '../components/sections/3Force';
import Ref from '../components/sections/3NosReferences';
import Card from '../components/sections/3Cards';



const HomePage: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#ff7300] via-[#fb7403] to-[#f8e2ad] opacity-50 pointer-events-none"></div>
     <Preloader />
      <Header />
      <main>
        <HeadExpert />
        <Force />
        <Card />
        <Ref />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;