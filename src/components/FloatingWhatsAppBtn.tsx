"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppBtn() {
  const whatsappUrl = "https://wa.me/5511999999999?text=Quero%20fazer%20uma%20revisão%20completa%20agora";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#FF6A00] text-white p-4 rounded-full shadow-[0_0_20px_rgba(255,106,0,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
