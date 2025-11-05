// src/components/Footer.jsx

import React from 'react';
import { Database, ArrowRight } from 'lucide-react';
// (Asumsi kamu akan install 'lucide-react' untuk social icons)
// npm install lucide-react
// import { Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-alice-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================
            BAGIAN 1: "BAHAN BAKAR" (CTA Donasi)
        ======================================== */}
        <div className="text-center py-20 md:py-28 border-b-2 border-steel-blue border-opacity-30">
          <div className="w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center mx-auto">
            <Database className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-stats text-4xl md:text-5xl text-white mt-8">
            Bahan Bakar
          </h2>
          <p className="mt-4 text-lg md:text-xl text-vista-blue max-w-2xl mx-auto font-medium">
            Gerakan kami transparan dan berjalan 100% dari dukungan publik. 
            Setiap donasi adalah 'amunisi' untuk aksi di lapangan.
          </p>
          
          <a 
            href="/donate"
            className="
              inline-flex items-center justify-center gap-3 w-full md:w-auto 
              px-10 py-4 bg-safety-orange text-white 
              font-bold uppercase tracking-wider rounded-full 
              shadow-lg hover:shadow-xl hover:bg-opacity-90 
              transition-all duration-300 transform hover:-translate-y-1
              mt-10 text-lg"
          >
            Donasi Sekarang
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* ========================================
            BAGIAN 2: Navigasi & Copyright
        ======================================== */}
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Logo */}
            <span className="font-display text-2xl font-black text-white uppercase">
              Generasi Biru
            </span>

            {/* Navigasi Footer (Clean UX) */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium text-vista-blue">
              <a href="/manifesto" className="hover:text-white">Kenapa Kami Ada</a>
              <a href="/impact" className="hover:text-white">Bukti Kerja</a>
              <a href="/team" className="hover:text-white">Kru</a>
              <a href="/join" className="hover:text-white">Gabung Gerak</a>
            </div>
            
            {/* (Placeholder untuk Social Icons) */}
            <div className="flex gap-6 text-vista-blue">
              {/* <a href="#" className="hover:text-white"><Twitter /></a> */}
              {/* <a href="#" className="hover:text-white"><Instagram /></a> */}
              {/* <a href="#" className="hover:text-white"><Youtube /></a> */}
            </div>
          </div>
          
          <p className="text-center text-steel-blue text-sm mt-10">
            © {new Date().getFullYear()} Generasi Biru. 
            Sebuah gerakan, bukan korporasi.
          </p>
        </div>
      </div>
    </footer>
  );
}