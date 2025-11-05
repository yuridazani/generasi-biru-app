import React from 'react';
import { ArrowRight, Mountain, Leaf } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-alice-blue 
                        flex items-center 
                        min-h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative z-10 overflow-hidden">
            <p className="text-sm md:text-base font-bold text-safety-orange uppercase tracking-widest mb-3">
              Generasi Biru
            </p>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-brand-dark">
              <span className="relative">
                Garda Depan
                <span className="absolute left-0 bottom-1 w-full h-2 bg-safety-orange opacity-70 -rotate-2"></span>
              </span>
              <br className="hidden md:block"/> Gerakan Iklim
              <br className="hidden md:block"/> Indonesia.
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-steel-blue max-w-2xl font-medium">
              Kami adalah anak muda yang berdiri di garis terdepan, 
              memimpin aksi nyata untuk masa depan Bumi yang lebih baik.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="/join"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 
                           bg-safety-orange text-white font-bold uppercase tracking-wider 
                           rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 
                           transition-all duration-300 transform hover:-translate-y-1"
              >
                Gabung Gerak Kami
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/manifesto"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 
                           bg-transparent text-brand-dark font-bold uppercase tracking-wider 
                           rounded-full border-2 border-brand-dark hover:bg-brand-dark hover:text-white 
                           transition-all duration-300 transform hover:-translate-y-1"
              >
                Kenapa Kami Ada
                <Leaf className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block relative z-0">
            <div className="relative w-full h-96 xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-steel-blue to-brand-dark opacity-90"></div>
              <div className="absolute w-3/4 h-3/4 bg-safety-orange rounded-full -top-1/4 -right-1/4 mix-blend-multiply opacity-30 animate-pulse-slow"></div>
              <div className="absolute w-2/3 h-2/3 bg-vista-blue rounded-xl bottom-1/4 left-1/4 mix-blend-overlay opacity-40 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Mountain className="w-48 h-48 text-white opacity-20" strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;