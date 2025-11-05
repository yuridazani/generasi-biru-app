import React from 'react';
import { Navbar } from './components/Navbar';
import HeroSection from './components/HeroSection'; 
import { ManifestoSection } from './components/ManifestoSection';
import { ImpactSection } from './components/ImpactSection';
import { KruSection } from './components/KruSection';
import { JoinSection } from './components/JoinSection';   
import { Footer } from './components/Footer';         

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection /> 
      <ManifestoSection />
      <ImpactSection />
      <KruSection />
      <JoinSection />  
      <Footer />         
    </div>
  );
}

export default App;