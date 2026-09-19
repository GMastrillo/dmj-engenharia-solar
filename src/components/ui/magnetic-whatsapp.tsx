"use client";

import React, { useRef, useState } from "react";
import { MessageSquareShare } from "lucide-react";

export function MagneticWhatsApp() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const whatsappUrl =
    "https://wa.me/556198086011?text=Ol%C3%A1!%20Estou%20no%20site%20da%20DMJ%20Engenharia%20Solar%20e%20gostaria%20de%20um%20atendimento%20r%C3%A1pido.";

  return (
    <aside aria-label="Atendimento Direto WhatsApp" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        ref={buttonRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-2xl shadow-emerald-950/60 border border-emerald-300/30 transition-all duration-300 active:scale-95"
        aria-label="Falar no WhatsApp com DMJ Engenharia Solar"
      >
        <span className="absolute -inset-1 rounded-2xl bg-emerald-500/25 animate-ping -z-10 pointer-events-none" />

        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111419] border border-white/[0.1] text-xs font-mono text-white whitespace-nowrap shadow-xl pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Falar com Engenharia (61) 9808-6011</span>
        </div>

        <MessageSquareShare className="w-5 h-5 text-zinc-950 stroke-[1.5]" />
      </a>
    </aside>
  );
}
