"use client";

import { motion } from "framer-motion";

export default function RealityConnection() {
  const painPoints = [
    "Um barulho estranho que apareceu",
    "A moto falhando de vez em quando",
    "Freio já não responde como antes",
    "Ou simplesmente já passou da hora da revisão"
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4 border-t border-[#333]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <span className="text-[#FF6A00] font-headline text-2xl uppercase tracking-wider mb-2 block">Seja sincero…</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase">
            Você usa sua moto todo dia. Mas sabe que ela não está 100%.
          </h2>
          <div className="mt-8 relative w-full h-48 md:h-64 rounded-xl overflow-hidden border border-[#333]">
            <img src="/images/worn-chain.png" alt="Corrente de moto desgastada" className="object-cover w-full h-full opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3 border-l-4 border-[#FFD166] pl-6 md:pl-10"
        >
          <ul className="space-y-4 font-body text-xl md:text-2xl text-[#E4E4E7]">
            {painPoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-[#FFD166]/50 shrink-0">—</span> {point}
              </li>
            ))}
          </ul>
          
          <p className="mt-8 text-white font-bold text-lg md:text-xl">
            👉 E mesmo assim você continua rodando… esperando piorar.
          </p>

          <a 
            href="#cta" 
            className="mt-8 block w-full md:w-max bg-transparent border-2 border-[#FF6A00] text-[#FF6A00] font-bold font-body py-4 px-6 uppercase text-center hover:bg-[#FF6A00] hover:text-white transition-colors duration-300"
          >
            👉 Quero evitar dor de cabeça com minha moto
          </a>
        </motion.div>

      </div>
    </section>
  );
}
