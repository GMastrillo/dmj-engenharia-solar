import React from "react";

export function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-lg">
      <div className="border-r border-slate-800/80 last:border-0 p-2">
        <div className="text-2xl sm:text-3xl font-black text-amber-400">+300</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Projetos Instalados</div>
      </div>
      <div className="border-r border-slate-800/80 last:border-0 p-2">
        <div className="text-2xl sm:text-3xl font-black text-white">+1 MW</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Potência Conectada</div>
      </div>
      <div className="border-r border-slate-800/80 last:border-0 p-2">
        <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Homologado na Rede</div>
      </div>
      <div className="p-2">
        <div className="text-2xl sm:text-3xl font-black text-amber-400">Até 95%</div>
        <div className="text-xs sm:text-sm text-slate-400 font-medium">Economia na Fatura</div>
      </div>
    </div>
  );
}
