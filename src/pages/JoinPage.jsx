import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

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

export function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: 'onBlur' 
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Data Form:', data);
    setIsSubmitted(true); 
  };

  return (
    <section className="h-screen snap-start bg-white flex items-center justify-center pt-20 overflow-y-auto">
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
                  <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark">
                    Masuk Barisan
                  </h1>
                  <p className="mt-4 text-lg text-steel-blue max-w-lg mx-auto">
                    Data kamu adalah langkah pertama. Isi form ini untuk 
                    menjadi bagian dari 'Pasukan' Garda Depan.
                  </p>
                </div>
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="bg-white border-2 border-alice-blue shadow-2xl rounded-2xl p-8 md:p-12 space-y-6"
                >
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
                  
                  <FormInput
                    label="Nomor Telepon (WhatsApp)"
                    name="phone"
                    type="tel"
                    placeholder="0812..."
                    register={register}
                    errors={errors}
                    {...register("phone", { 
                      required: "Nomor HP wajib diisi",
                      minLength: { value: 10, message: "Nomor HP terlalu pendek" }
                    })}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting} 
                    className="
                      w-full inline-flex items-center justify-center gap-3 
                      px-8 py-4 bg-safety-orange text-white 
                      font-bold uppercase tracking-wider rounded-full 
                      shadow-lg hover:shadow-xl hover:bg-opacity-90 
                      transition-all duration-300 transform hover:-translate-y-1
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? 'MENGIRIM...' : 'Gabung Gerak'}
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
                className="text-center bg-alice-blue p-12 rounded-2xl shadow-xl"
              >
                <CheckCircle className="w-20 h-20 text-jade mx-auto" strokeWidth={1.5} />
                <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-dark mt-6">
                  Kamu Terdaftar!
                </h1>
                <p className="mt-4 text-lg text-steel-blue max-w-md mx-auto">
                  Selamat datang di 'Kru'. Koordinator kami akan segera 
                  menghubungimu via WhatsApp untuk 'Misi Aktif' berikutnya.
                </p>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}