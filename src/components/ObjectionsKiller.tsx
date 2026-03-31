"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ObjectionsKiller() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "“Já levei em oficina e não resolveu”",
      a: "→ Aqui a gente não trata só o sintoma, analisa a moto inteira para achar a causa real."
    },
    {
      q: "“Parece caro”",
      a: "→ Mais caro é ter que consertar a mesma coisa duas vezes porque o serviço foi mal feito."
    },
    {
      q: "“Não tenho tempo”",
      a: "→ Atendimento rápido pra você não ficar sem moto justo quando mais precisa ir pro corre."
    },
    {
      q: "“Não confio em mecânico”",
      a: "→ Você só aprova o que for feito. Tudo é explicado e documentado antes de mexer na sua moto."
    }
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-24 px-4 border-t border-[#333]">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-headline text-4xl md:text-5xl text-white uppercase mb-12 text-center tracking-wide">
          Ainda na dúvida?
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-[#0D0D0D] border ${isOpen ? 'border-[#FF6A00]' : 'border-[#333]'} transition-colors duration-300`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-body font-bold text-white text-lg md:text-xl pr-4">{faq.q}</span>
                  <ChevronDown className={`text-[#FF6A00] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 font-body text-[#E4E4E7] text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
