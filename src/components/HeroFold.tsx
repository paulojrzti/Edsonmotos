"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroFold() {
  return (
    <section 
      className="relative w-full min-h-[90vh] bg-[#0D0D0D] flex items-center overflow-hidden px-4 py-16 pt-24"
      style={{ backgroundImage: "url('/images/hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black/70 lg:bg-gradient-to-r lg:from-[#0D0D0D] lg:via-[#0D0D0D]/75 lg:to-black/10 z-0"></div>
      
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 relative">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <img 
              src="/images/logo.png" 
              alt="Edson Moto Peças" 
              className="h-16 md:h-24 lg:h-28 w-auto object-contain" 
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headline text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[0.9] tracking-tighter uppercase"
          >
            Sua moto não quebra do nada.
            <br />
            <span className="text-gray-100">Ela vai te dando sinais…<br/>até virar um prejuízo caro.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-[#E4E4E7] mt-6 max-w-xl"
          >
            Faça uma revisão completa agora e evite gastar muito mais depois ou ficar parado quando mais precisa.
          </motion.p>

          <motion.ul 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 space-y-4 font-body text-white font-medium text-base md:text-lg"
          >
            {[
              "Revisão completa da moto (não só o problema)",
              "Identificação de falhas antes de virar prejuízo",
              "Atendimento rápido + acompanhamento após o serviço"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="text-[#FF6A00] shrink-0 mt-1" size={24} />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            href="#cta"
            className="mt-10 w-full md:w-max bg-[#FF6A00] text-white font-bold font-body uppercase py-5 px-8 text-center hover:scale-105 hover:shadow-[4px_4px_0px_#FFD166] active:translate-y-1 active:shadow-none transition-all duration-200"
          >
            👉 Quero revisar minha moto antes que dê problema
          </motion.a>
        </div>
      </div>
    </section>
  );
}
