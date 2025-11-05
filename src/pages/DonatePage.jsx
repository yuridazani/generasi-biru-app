import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Database, AlertCircle } from 'lucide-react';

const FormInput = ({ label, name, register, errors, ...props }) => {
  const error = errors[name];
  return (
    <div className="w-full">
      <label 
        htmlFor={name} 
        className="font-body font-semibold text-brand-dark text-sm"
      >
        {label}
      </label>
      <input
        id={name}
        className={`
          w-full px-4 py-3 mt-2 bg-alice-blue rounded-lg
          font-medium text-brand-dark placeholder-steel-blue
          border-2 border-transparent 
          focus:outline-none focus:border-steel-blue
          transition-colors duration-200
          ${error ? 'border-red-500' : ''}
        `}
        {...register(name)}
        {...props}
      />
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-1.5 mt-1.5 text-red-600"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="font-medium text-sm">{error.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function DonatePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(100000); 
  const presetAmounts = [50000, 100000, 250000, 500000];

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Data Donasi:', { 
      ...data, 
      amount: selectedAmount 
    });
    setIsSubmitted(true);
  };

  return (
    <section className="h-screen snap-start bg-alice-blue flex items-center justify-center pt-20 overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="font-stats text-3xl sm:text-4xl md:text-5xl text-brand-dark">
                    Bahan Bakar
                  </h1>
                  <p className="mt-4 text-lg text-steel-blue max-w-lg mx-auto">
                    Setiap donasi adalah 'amunisi' untuk aksi di lapangan.
                    Pilih nominal dukunganmu.
                  </p>
                </div>

                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="bg-white border-2 border-white shadow-2xl rounded-2xl p-8 md:p-12 space-y-6"
                >
                  <div>
                    <label className="font-body font-semibold text-brand-dark text-sm">
                      Pilih Nominal (IDR)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                      {presetAmounts.map((amount) => (
                        <button
                          type="button"
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={`
                            p-4 rounded-lg font-stats text-lg
                            border-2 transition-all duration-200
                            ${selectedAmount === amount 
                              ? 'bg-safety-orange text-white border-safety-orange' 
                              : 'bg-alice-blue text-brand-dark border-alice-blue hover:border-steel-blue'}
                          `}
                        >
                          {amount.toLocaleString('id-ID')}
                        </button>
                      ))}
                    </div>
                  </div>


                  <hr className="border-alice-blue" />
                  
                  <FormInput
                    label="Nama Lengkap"
                    name="fullName"
                    placeholder="Nama kamu..."
                    register={register}
                    errors={errors}
                    {...register("fullName", { required: "Nama lengkap wajib diisi" })}
                  />

                  <FormInput
                    label="Alamat Email"
                    name="email"
                    type="email"
                    placeholder="email@kamu.com"
                    register={register}
                    errors={errors}
                    {...register("email", { 
                      required: "Email wajib diisi",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Format email tidak valid"
                      }
                    })}
                  />
                  
                  <div>
                    <label className="font-body font-semibold text-brand-dark text-sm">
                      Metode Pembayaran (Fake)
                    </label>
                    <div className="mt-2 p-4 bg-alice-blue rounded-lg">
                      <p className="font-medium text-steel-blue">
                        Untuk demo ini, metode pembayaran
                        ini adalah 'VA / E-Wallet'.
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full inline-flex items-center justify-center gap-3 
                      px-8 py-4 bg-brand-dark text-white 
                      font-bold uppercase tracking-wider rounded-full 
                      shadow-lg hover:shadow-xl hover:bg-opacity-90 
                      transition-all duration-300 transform hover:-translate-y-1
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting 
                      ? 'MEMPROSES...' 
                      : `Donasi Rp ${selectedAmount.toLocaleString('id-ID')}`}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            
            ) : (

              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring' }}
                className="text-center bg-white p-12 rounded-2xl shadow-xl"
              >
                <CheckCircle className="w-20 h-20 text-jade mx-auto" strokeWidth={1.5} />
                <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-dark mt-6">
                  Donasi Diterima!
                </h1>
                <p className="font-stats text-2xl text-safety-orange mt-2">
                  Rp {selectedAmount.toLocaleString('id-ID')}
                </p>
                <p className="mt-4 text-lg text-steel-blue max-w-md mx-auto">
                  Terima kasih, {`Donatur`}. Kamu adalah 'Bahan Bakar'
                  sesungguhnya dari gerakan ini. Laporan transparansi 
                  akan kami kirimkan ke emailmu.
                </p>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}