import React from 'react';
import { Link } from 'react-router-dom'; 
import { ArrowRight, Mail } from 'lucide-react';

const ActionCard = ({ to, title, description, buttonText, icon, isPrimary }) => (
  <div 
    className={`
      p-10 rounded-2xl shadow-xl transform transition-all duration-300
      hover:shadow-2xl hover:-translate-y-2
      ${isPrimary 
        ? 'bg-safety-orange text-white' 
        : 'bg-white text-brand-dark'}
    `}
  >
    <div className={`
      w-12 h-12 rounded-full flex items-center justify-center
      ${isPrimary ? 'bg-white' : 'bg-alice-blue'}
    `}>
      {icon}
    </div>
    
    <h3 className="font-display text-3xl font-bold mt-6">
      {title}
    </h3>
    <p className={`mt-3 font-medium ${isPrimary ? 'text-white' : 'text-steel-blue'}`}>
      {description}
    </p>
    
    <Link 
      to={to}
      className={`
        inline-flex items-center justify-center gap-3 w-full 
        px-8 py-3.5 mt-8 font-bold uppercase tracking-wider rounded-full 
        transition-all duration-300
        ${isPrimary 
          ? 'bg-white text-safety-orange hover:bg-opacity-90' 
          : 'bg-brand-dark text-white hover:bg-opacity-80'}
      `}
    >
      {buttonText}
      <ArrowRight className="w-5 h-5" />
    </Link>
  </div>
);

export function JoinSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-stats text-xs text-safety-orange uppercase tracking-widest">
            Titik Kumpul
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark mt-3">
            Masuk Barisan.<br/>Gabung Gerak.
          </h2>
          <p className="mt-4 text-base md:text-lg text-steel-blue font-medium">
            Gerakan ini membutuhkan semua orang. Pilih caramu 
            untuk berkontribusi dan menjadi bagian dari perubahan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <ActionCard
            to="/join-form"
            title="Saya Siap Aksi"
            description="Gabung sebagai relawan di 'Misi Aktif' berikutnya. 
                         Daftarkan dirimu di 'Pasukan' Garda Depan."
            buttonText="Daftar Relawan"
            icon={<ArrowRight className="w-6 h-6 text-safety-orange" />}
            isPrimary={true}
          />
          
          <ActionCard
            to="/newsletter"
            title="Kirim Saya 'Transmisi'"
            description="Belum siap turun ke lapangan? Tetap terhubung. 
                         Dapatkan 'Laporan Medan' dan info aksi terbaru."
            buttonText="Daftar Newsletter"
            icon={<Mail className="w-6 h-6 text-brand-dark" />}
            isPrimary={false}
          />
        </div>
      </div>
    </section>
  );
}

export default JoinSection;
