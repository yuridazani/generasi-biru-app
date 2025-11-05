import React from 'react';
import { Link } from 'react-router-dom'; 
import { ArrowRight, Mountain, Leaf } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative bg-alice-blue 
                        flex items-center 
                        py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-xs sm:text-sm font-bold text-safety-orange uppercase tracking-widest mb-2">
              Generasi Biru
            </p>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-dark">
              <span className="relative inline-block">
                Garda Depan
                <span className="absolute left-0 bottom-0 w-full h-1.5 bg-safety-orange opacity-70 -rotate-2"></span>
              </span>
              <br />Gerakan Iklim
              <br />Indonesia.
            </h1>

            <p className="mt-6 text-base md:text-lg text-steel-blue max-w-xl font-medium leading-relaxed">
              Kami adalah anak muda yang berdiri di garis terdepan, 
              memimpin aksi nyata untuk masa depan Bumi yang lebih baik.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link 
                to="/join"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 
                           bg-safety-orange text-white font-bold uppercase tracking-wider text-sm
                           rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 
                           transition-all duration-300 transform hover:-translate-y-1"
              >
                Gabung Gerak Kami
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link 
                to="/manifesto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 
                           bg-transparent text-brand-dark font-bold uppercase tracking-wider text-sm
                           rounded-full border-2 border-brand-dark hover:bg-brand-dark hover:text-white 
                           transition-all duration-300 transform hover:-translate-y-1"
              >
                Kenapa Kami Ada
                <Leaf className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 hidden md:block">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-steel-blue to-brand-dark opacity-90"></div>
              <div className="absolute w-3/4 h-3/4 bg-safety-orange rounded-full -top-1/4 -right-1/4 mix-blend-multiply opacity-30 animate-pulse-slow"></div>
              <div className="absolute w-2/3 h-2/3 bg-vista-blue rounded-xl bottom-1/4 left-1/4 mix-blend-overlay opacity-40 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Mountain className="w-32 h-32 text-white opacity-20" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
