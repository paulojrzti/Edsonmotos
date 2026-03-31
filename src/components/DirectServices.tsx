"use client";

import { motion } from "framer-motion";

export default function DirectServices() {
  const services = [
    "Troca de óleo",
    "Revisão geral",
    "Pneus",
    "Embreagem",
    "Cabos e ajustes"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section className="w-full bg-[#0D0D0D] py-24 px-4 border-t border-[#333]">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white uppercase text-center md:text-left mb-16 leading-tight">
          Atendemos os principais serviços<br className="hidden md:block"/> pra manter sua moto segura:
        </h3>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {services.map((srv, idx) => (
            <motion.div key={idx} variants={itemVariants} className="border-l-4 border-[#FF6A00] pl-6 py-2 group cursor-default">
              <p className="font-headline text-3xl md:text-4xl text-[#E4E4E7] uppercase group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                {srv}
              </p>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="border-l-4 border-[#333] pl-6 py-2 flex items-center h-full">
            <p className="font-body text-[#E4E4E7] italic cursor-default group-hover:text-white transition-colors">
              + Outros serviços essenciais sob consulta
            </p>
          </motion.div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center text-[#FFD166] font-bold font-body text-xl md:text-2xl"
        >
          👉 Tudo com foco em evitar problemas futuros, não só resolver o atual.
        </motion.p>
      </div>
    </section>
  );
}
