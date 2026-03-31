"use client";

import { motion } from "framer-motion";

export default function FinalCTABlock() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Quero%20fazer%20uma%20revisão%20completa%20agora";

  return (
    <section className="w-full bg-[#FF6A00] py-24 px-4 flex flex-col items-center justify-center text-center relative overflow-hidden" id="cta">
      {/* Texture overlay (CSS simulated noise/pattern can also be used if no image) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-headline text-6xl md:text-8xl lg:text-9xl text-[#0D0D0D] uppercase leading-[0.8] tracking-tighter"
        >
          Não espera sua moto <br className="hidden md:block"/> te deixar na mão.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl md:text-3xl text-black font-extrabold mt-8 uppercase tracking-wide"
        >
          Quanto mais você adia, maior o prejuízo.
        </motion.p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto mt-16 bg-[#0D0D0D] text-white font-headline text-3xl md:text-4xl uppercase py-6 px-12 md:px-20 block mx-auto border-b-8 border-black hover:bg-[#1A1A1A] transition-colors shadow-2xl"
        >
          👉 Quero fazer uma revisão completa agora
        </motion.a>
      </div>
    </section>
  );
}
