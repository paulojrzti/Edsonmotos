"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function IndustryEnemy() {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-4 border-t border-[#333]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* We can use an empty space or a placeholder image box for the asymmetric feel since they didn't provide image yet */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-[500px] bg-[#0D0D0D] border border-[#333] relative flex items-center justify-center grayscale opacity-80"
        >
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558227031-6058dbbda2e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
           <p className="z-10 text-[#333] font-headline text-5xl rotate-[-10deg] opacity-50 uppercase tracking-widest text-center border-4 border-[#333] p-4">Erro<br/>Comum</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="font-headline text-4xl lg:text-6xl text-white uppercase leading-none tracking-tight">
            E tem um erro que quase toda oficina comete:
            <span className="block text-[#FFD166] mt-4">Resolver só o que você pediu.</span>
          </h2>

          <ul className="mt-8 space-y-4 font-body text-[#E4E4E7] text-lg md:text-xl font-medium">
            {["Troca uma peça", "Entrega a moto", "E o resto… fica por conta da sorte"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <X className="text-red-500 shrink-0" size={28} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 font-body font-bold text-white text-lg md:text-xl p-6 bg-[#0D0D0D] border-l-4 border-red-600 shadow-xl">
            <span className="text-red-500 block mb-2">👉 Resultado?</span>
            Você volta dias depois com outro problema.<br/>
            <span className="text-[#FF6A00]">E gasta tudo de novo.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
