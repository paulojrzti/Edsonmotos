"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function SecurityAftersales() {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4 border-t border-[#333] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-[#333]"
        >
          <img src="/images/mechanic.png" alt="Mecânico confiante" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start text-left"
        >
          <div className="w-16 h-16 bg-[#FFD166]/10 flex items-center justify-center rounded-full mb-8">
            <ShieldCheck size={32} className="text-[#FFD166]" />
          </div>

          <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white uppercase mb-6 leading-tight">
            E não acaba quando você sai da oficina.
          </h3>

          <p className="font-body text-xl md:text-2xl text-[#E4E4E7]">
            A gente entra em contato depois pra garantir que sua moto continua rodando bem.
          </p>

          <div className="mt-8 border-l-4 border-[#FF6A00] pl-6 py-2">
            <p className="font-body font-bold text-lg md:text-xl text-white uppercase tracking-wide">
              👉 Porque serviço bem feito
              <br className="hidden md:block" /> não dá dor de cabeça depois.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
