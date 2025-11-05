import React from 'react';
import { Zap, CheckCircle, Users } from 'lucide-react';
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

const PullQuote = ({ children }) => (
  <div className="md:col-span-2 bg-brand-dark text-white p-10 rounded-2xl 
                  shadow-2xl flex items-center justify-center 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                  overflow-hidden"> 
    <blockquote className="relative">
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
    <section className="bg-white py-16 md:py-20"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12"> 
          <p className="font-stats text-xs text-safety-orange uppercase tracking-widest">
            Poin Kami
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark mt-3">
            Kenapa Kami Ada
          </h2>
          <p className="mt-4 text-base md:text-lg text-steel-blue font-medium">
            Kami bukan organisasi nirlaba biasa. Kami adalah gerakan kolektif 
            yang percaya pada aksi radikal namun terukur, didukung oleh data 
            dan didorong oleh urgensi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ManifestoCard 
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Aksi > Narasi"
          >
            Waktu untuk bicara sudah habis. Kami fokus pada aksi nyata di lapangan. 
            'Bukti Kerja' kami adalah manifesto kami.
          </ManifestoCard>
          <PullQuote>
            Kita tidak mewarisi Bumi dari leluhur,
            kita meminjamnya dari anak cucu kita.
          </PullQuote>
          <PullQuote>
            Kredibel di mata donatur,
            radikal di mata aktivis.
          </PullQuote>
          <ManifestoCard 
            icon={<CheckCircle className="w-6 h-6 text-white" />}
            title="Profesional & Kredibel"
          >
            Gerakan kami *bold*, tapi data kami valid. Kami transparan
            dan profesional untuk membangun kepercayaan jangka panjang.
          </ManifestoCard>
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