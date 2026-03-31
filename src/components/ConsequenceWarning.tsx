"use client";

import { motion } from "framer-motion";

export default function ConsequenceWarning() {
  return (
    <section className="w-full bg-[#0D0D0D] py-24 px-4 relative">
      <div className="absolute top-0 bottom-0 left-4 md:left-8 w-[2px] bg-[#FF6A00] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-headline text-3xl md:text-4xl text-white uppercase text-center"
        >
          O problema é que ignorar isso sai caro.
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-[#1A1A1A] border border-[#333] p-8 md:p-12 mt-10 text-left md:text-center grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/10 blur-[80px]"></div>

          <div className="relative z-10 border-b border-[#333] pb-8 md:border-b-0 md:pb-0 md:border-r md:pr-8">
            <h4 className="font-headline text-[#E4E4E7] text-2xl uppercase mb-6 tracking-wide">O que hoje é simples:</h4>
            <ul className="space-y-3 font-body text-[#E4E4E7] text-lg md:text-xl uppercase font-bold">
              <li>• Troca de peça</li>
              <li>• Ajuste básico</li>
            </ul>
          </div>

          <div className="relative z-10">
            <h4 className="font-headline text-[#FFD166] text-3xl uppercase mb-6 tracking-wide">👉 Amanhã pode virar:</h4>
            <ul className="space-y-4 font-body text-red-500 font-black text-lg md:text-xl uppercase">
              <li>Moto parada no meio do dia</li>
              <li>Prejuízo alto no conserto</li>
              <li>Perda de trabalho ou atraso</li>
            </ul>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 font-headline text-3xl md:text-5xl text-white uppercase leading-tight"
        >
          E aí não é mais revisão.
          <br />
          <span className="text-[#FF6A00] block mt-2">👉 É dor de cabeça + dinheiro indo embora.</span>
        </motion.p>
      </div>
    </section>
  );
}
