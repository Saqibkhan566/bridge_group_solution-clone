import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AwardsSection from './components/AwardsSection/AwardsSection';
import GuidanceSection from './components/GuidanceSection/GuidanceSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import Footer from './components/Footer/Footer';
// import './App.css';

function App() {
  return (
    <>
      <HeaderBar />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <AwardsSection />
      <GuidanceSection />
      <PartnersSection />
      <Footer />
    </>
  );
}

export default App;