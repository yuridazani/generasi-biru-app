// src/components/ManifestoSection.jsx

import React from 'react';
import { Zap, CheckCircle, Users } from 'lucide-react';

// Komponen Card (Reusable untuk poin-poin)
const ManifestoCard = ({ icon, title, children }) => (
  <div className="bg-alice-blue p-8 rounded-2xl shadow-lg 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="font-display text-2xl font-bold text-brand-dark mt-5">
      {title}
    </h3>
    <p className="mt-3 text-steel-blue font-medium">
      {children}
    </p>
  </div>
);

// Komponen Pull-Quote (WAH Factor Tipografi)
const PullQuote = ({ children }) => (
  <div className="md:col-span-2 bg-brand-dark text-white p-10 rounded-2xl 
                  shadow-2xl flex items-center justify-center 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <blockquote className="relative">
      {/* Tanda kutip dekoratif menggunakan font display */}
      <span className="absolute -top-8 -left-8 font-display text-8xl text-steel-blue opacity-30">“</span>
      <p className="font-stats text-2xl md:text-3xl leading-snug z-10 relative">
        {children}
      </p>
      <span className="absolute -bottom-8 -right-8 font-display text-8xl text-steel-blue opacity-30">”</span>
    </blockquote>
  </div>
);

export function ManifestoSection() {
  return (
    // Kita gunakan 'bg-white' untuk kontras dari Hero 'bg-alice-blue'
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header (Profesional & Clean) */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-stats text-sm text-safety-orange uppercase tracking-widest">
            Poin Kami
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-brand-dark mt-4">
            Kenapa Kami Ada
          </h2>
          <p className="mt-6 text-lg md:text-xl text-steel-blue font-medium">
            Kami bukan organisasi nirlaba biasa. Kami adalah gerakan kolektif 
            yang percaya pada aksi radikal namun terukur, didukung oleh data 
            dan didorong oleh urgensi.
          </p>
        </div>

        {/* 2. Modular Asymmetrical Grid (WAH Factor) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          
          {/* Poin 1: Aksi Nyata */}
          <ManifestoCard 
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Aksi > Narasi"
          >
            Waktu untuk bicara sudah habis. Kami fokus pada aksi nyata di lapangan. 
            'Bukti Kerja' kami adalah manifesto kami.
          </ManifestoCard>

          {/* Poin 2: Pull-Quote (Tipografi Dramatis) */}
          <PullQuote>
            Kita tidak mewarisi Bumi dari leluhur,
            kita meminjamnya dari anak cucu kita.
          </PullQuote>

          {/* Poin 3: Pull-Quote (Tipografi Dramatis) */}
          <PullQuote>
            Kredibel di mata donatur,
            radikal di mata aktivis.
          </PullQuote>

          {/* Poin 4: Kredibilitas (Profesional) */}
          <ManifestoCard 
            icon={<CheckCircle className="w-6 h-6 text-white" />}
            title="Profesional & Kredibel"
          >
            Gerakan kami *bold*, tapi data kami valid. Kami transparan
            dan profesional untuk membangun kepercayaan jangka panjang.
          </ManifestoCard>
          
          {/* Poin 5: Komunitas (Gen-Z) */}
          <ManifestoCard 
            icon={<Users className="w-6 h-6 text-white" />}
            title="Kekuatan Kolektif"
          >
            Kami percaya pada kekuatan 'Kru'. Gerakan ini 
            dibangun di atas solidaritas, bukan hierarki.
          </ManifestoCard>
        </div>
      </div>
    </section>
  );
}