// src/components/KruSection.jsx

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';

const KruCard = ({ name, role, imgPlaceholder }) => (
  <div className="flex-shrink-0 w-72 md:w-80 rounded-2xl shadow-xl 
                  overflow-hidden bg-white 
                  transform transition-all duration-300 
                  hover:-translate-y-2 hover:shadow-2xl">
    

    <div className={`
      w-full h-48 bg-gradient-to-br from-steel-blue to-brand-dark 
      flex items-center justify-center
    `}>
      <Users className="w-20 h-20 text-alice-blue opacity-30" />
    </div>
    
    <div className="p-6">
      <h3 className="font-display text-2xl font-bold text-brand-dark">
        {name}
      </h3>
      <p className="font-body font-bold text-safety-orange uppercase tracking-wider text-sm mt-1">
        {role}
      </p>
    </div>
  </div>
);

const JoinCard = () => (
  <div className="flex-shrink-0 w-72 md:w-80 rounded-2xl shadow-xl 
                  overflow-hidden bg-brand-dark 
                  flex flex-col items-center justify-center p-8 
                  text-center text-white transform hover:shadow-2xl">
    <h3 className="font-display text-2xl font-bold">
      Kamu Berikutnya?
    </h3>
    <p className="font-body text-alice-blue mt-3 mb-6">
      Kami selalu mencari 'Kru' baru yang siap bergerak.
    </p>
    <a 
      href="/join"
      className="
        inline-flex items-center justify-center gap-3 w-full 
        px-6 py-3 bg-safety-orange text-white 
        font-bold uppercase tracking-wider rounded-full 
        shadow-lg hover:shadow-xl hover:bg-opacity-90 
        transition-all duration-300"
    >
      Gabung Gerak
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
);


export function KruSection() {
  const constraintsRef = useRef(null);

  return (
    <section className="bg-alice-blue py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-stats text-xs text-safety-orange uppercase tracking-widest">
            Solidaritas
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark mt-3">
            KRU Kami
          </h2>
          <p className="mt-4 text-base md:text-lg text-steel-blue font-medium">
            Gerakan ini adalah 'Pasukan'. 
            Bertemu dengan para penggerak inti yang mendedikasikan 
            waktu mereka di garda depan.
          </p>
          <p className="font-body font-semibold text-brand-dark text-sm mt-3 animate-pulse">
            (Geser untuk melihat semua ➔)
          </p>
        </div>
      </div>
      <motion.div 
        className="w-full mt-16 cursor-grab" 
        ref={constraintsRef}
      >
        <motion.div 
          className="flex gap-6 md:gap-8 px-4 sm:px-6 lg:px-8"
          drag="x"
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          <KruCard 
            name="Alifia 'Lifi' R." 
            role="Koordinator Garda Depan" 
          />
          <KruCard 
            name="Bima Sakti" 
            role="Analis Data Lapangan" 
          />
          <KruCard 
            name="Citra Lestari" 
            role="Penggerak Komunitas" 
          />
          <KruCard 
            name="Deni 'Echo' P." 
            role="Visual Storyteller" 
          />
          <KruCard 
            name="Elang Mahesa" 
            role="Advokasi & Kebijakan" 
          />
          <JoinCard />

        </motion.div>
      </motion.div>
    </section>
  );
}