"use client";

import React from "react";
import { SunMedium, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function TelemetryBar() {
  return (
    <div className="w-full border-t border-white/[0.08] bg-[#070B14]/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
        {/* Metric 1: +300 Usinas */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
            <SunMedium className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
              +300
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Usinas Instaladas no DF e GO
            </p>
          </div>
        </div>

        {/* Metric 2: +1 MW */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
            <Zap className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
              +1 MW
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Potência Solar Conectada
            </p>
          </div>
        </div>

        {/* Metric 3: 100% Homologado */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
            <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
              100%
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Homologado Neoenergia & CREA
            </p>
          </div>
        </div>

        {/* Metric 4: Até 95% de Economia */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
            <TrendingUp className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400 tracking-tight">
              Até 95%
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Redução Líquida na Conta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
