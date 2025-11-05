import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    mass: 0.8,
    stiffness: 100,
    damping: 20,
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [springValue]);

  const formattedValue = prefix + 
    Math.round(displayValue).toLocaleString('id-ID') + 
    suffix;

  return <span ref={ref}>{formattedValue}</span>;
}
const StatCard = ({ value, label, prefix, suffix, className, labelClassName }) => (
  <div className={`p-6 md:p-8 rounded-2xl shadow-lg ${className}`}> {/* Kurangi padding */}
    <h3 className="font-stats text-4xl md:text-5xl lg:text-6xl"> {/* Kurangi size */}
      <AnimatedNumber value={value} prefix={prefix} suffix={suffix} />
    </h3>
    <p className={`font-stats text-xs md:text-sm uppercase mt-2 ${labelClassName}`}>
      {label}
    </p>
  </div>
);

export function ImpactSection() {
  return (
    <section className="bg-brand-dark py-16 md:py-20"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-stats text-xs text-safety-orange uppercase tracking-widest">
            Aksi Nyata
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mt-3">
            Bukti Kerja Kami
          </h2>
          <p className="mt-4 text-base md:text-lg text-alice-blue font-medium">
            Kami tidak hanya bicara. Kami bertindak. Setiap angka di bawah ini 
            adalah jejak nyata dari gerakan kolektif kita di lapangan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16">
          <div className="md:col-span-2">
            <StatCard
              value={120345}
              label="Pohon TERTANAM"
              className="bg-safety-orange text-white"
              labelClassName="text-white opacity-90"
            />
          </div>
          <div>
            <StatCard
              value={47}
              label="Aksi Terlaksana"
              suffix="+"
              className="bg-alice-blue text-brand-dark"
              labelClassName="text-steel-blue"
            />
          </div>
          <div>
            <StatCard
              value={5200}
              label="Relawan Bergabung"
              suffix="+"
              className="bg-steel-blue text-white"
              labelClassName="text-alice-blue opacity-90"
            />
          </div>

          <div className="md:col-span-2">
            <StatCard
              value={31}
              label="Ton Sampah TERKELOLA"
              suffix="+"
              className="bg-white text-brand-dark"
              labelClassName="text-steel-blue"
            />
          </div>

          <div className="md:col-span-3 bg-alice-blue text-brand-dark 
                          p-10 rounded-2xl flex flex-col md:flex-row 
                          md:items-center md:justify-between gap-6">
            <div>
              <h4 className="font-display font-bold text-2xl">
                Transparansi Penuh
              </h4>
              <p className="text-steel-blue font-medium mt-2 max-w-2xl">
                Lihat 'Laporan Medan' kami untuk data lengkap,
                terbuka, dan terverifikasi dari setiap aksi.
              </p>
            </div>
            <a 
              href="/laporan"
              className="
                inline-flex items-center justify-center gap-3 w-full md:w-auto 
                px-8 py-3.5 bg-brand-dark text-white 
                font-bold uppercase tracking-wider rounded-full 
                shadow-lg hover:shadow-xl hover:bg-opacity-90 
                transition-all duration-300 transform hover:-translate-y-1"
            >
              Lihat Laporan
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}