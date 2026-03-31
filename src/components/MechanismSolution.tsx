"use client";

import { motion } from "framer-motion";

export default function MechanismSolution() {
  return (
    <section 
      className="relative w-full bg-[#0D0D0D] py-24 px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/clean-shop.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/90 z-0"></div>
      <div className="max-w-4xl mx-auto relative group z-10">
        
        {/* Glow behind the box */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6A00] to-[#FFD166] opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1A1A1A] border border-[#FF6A00]/40 p-8 md:p-14 z-10 shadow-[0_0_40px_rgba(255,106,0,0.1)]"
        >
          <span className="inline-block bg-[#0D0D0D] text-[#E4E4E7] border border-[#333] px-3 py-1 font-body text-sm uppercase tracking-wider mb-6">
            Aqui o serviço é diferente.
          </span>

          <h2 className="font-headline text-5xl md:text-6xl text-[#FF6A00] uppercase leading-none">
            Você passa por uma Revisão Preventiva Completa
          </h2>

          <div className="mt-8 pt-8 border-t border-[#333]">
            <p className="font-body text-[#E4E4E7] mb-6 uppercase text-sm tracking-wider font-bold">Isso significa que:</p>
            <ul className="space-y-6 font-body text-white text-lg md:text-xl font-medium">
              {[
                "A gente analisa a moto como um todo",
                "Identifica peças com desgaste antes de quebrar",
                "Te orienta com clareza antes de qualquer serviço"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FF6A00]/20 flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 bg-[#FF6A00] rounded-full"></div>
                  </div>
                  <span className="mt-1">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 bg-[#0D0D0D] p-6 border-l-4 border-[#FFD166]">
            <p className="font-headline text-3xl md:text-4xl uppercase text-[#FFD166] leading-tight">
              👉 Você resolve o problema de hoje
              <br />
              👉 E evita o prejuízo de amanhã
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
