import React from 'react';
import HeroSection from '../components/HeroSection'; 
import { ManifestoSection } from '../components/ManifestoSection';
import { ImpactSection } from '../components/ImpactSection';
import { KruSection } from '../components/KruSection';
import { JoinSection } from '../components/JoinSection';


export function HomePage() {
  return (
    <>
      <HeroSection /> 
      <ManifestoSection />
      <ImpactSection />
      <KruSection />
      <JoinSection />
    </>
  );
}

export default HomePage;