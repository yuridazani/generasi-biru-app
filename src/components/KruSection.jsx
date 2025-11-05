// src/components/KruSection.jsx

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';

const KruCard = ({ name, role, imgPlaceholder }) => (
  // 'flex-shrink-0' sangat penting untuk horizontal scroll
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
      {/* Kita gunakan 'Unbounded' (font-display) tapi lebih kecil */}
      <h3 className="font-display text-2xl font-bold text-brand-dark">
        {name}
      </h3>
      {/* Kita gunakan 'safety-orange' untuk 'role' agar menonjol */}
      <p className="font-body font-bold text-safety-orange uppercase tracking-wider text-sm mt-1">
        {role}
      </p>
    </div>
  </div>
);

// Card CTA di akhir scroll
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
  // Ref untuk mengukur 'constraints' drag
  const constraintsRef = useRef(null);

  return (
    // Kita gunakan 'bg-alice-blue' untuk kontras dari section 'Impact'
    <section className="bg-alice-blue py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-stats text-sm text-safety-orange uppercase tracking-widest">
            Solidaritas
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-brand-dark mt-4">
            KRU Kami
          </h2>
          <p className="mt-6 text-lg md:text-xl text-steel-blue font-medium">
            Gerakan ini adalah 'Pasukan'. 
            Bertemu dengan para penggerak inti yang mendedikasikan 
            waktu mereka di garda depan.
          </p>
<p className="font-body font-semibold text-brand-dark mt-4 
              text-sm sm:text-base
              animate-pulse">
  (Geser untuk melihat semua ➔)
</p>
        </div>
      </div>

      {/* 2. Draggable Horizontal Scroll (WAH Factor) */}
      <motion.div 
        className="w-full mt-16 cursor-grab" 
        ref={constraintsRef}
      >
        <motion.div 
          className="flex gap-6 md:gap-8 px-4 sm:px-6 lg:px-8"
          // Ini adalah kuncinya:
          drag="x"
          dragConstraints={constraintsRef}
          // 'stiffness' memberi 'feel' Gen-Z yang responsif
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          {/* Data Kru Fiktif */}
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
          
          {/* CTA Card di akhir */}
          <JoinCard />

        </motion.div>
      </motion.div>
    </section>
  );
}