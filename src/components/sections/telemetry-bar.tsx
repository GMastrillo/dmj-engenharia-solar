"use client";

import React from "react";
import { SunMedium, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function TelemetryBar() {
  return (
    <div className="w-full border-t border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
        {/* Metric 1: +300 Usinas */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0">
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 shrink-0">
            <SunMedium className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 tracking-tight">
              +300
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Usinas Instaladas no DF e GO
            </p>
          </div>
        </div>

        {/* Metric 2: +1 MW */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
          <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200/60 text-sky-600 shrink-0">
            <Zap className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 tracking-tight">
              +1 MW
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Potência Solar Conectada
            </p>
          </div>
        </div>

        {/* Metric 3: 100% Homologado */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-600 shrink-0">
            <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-slate-900 tracking-tight">
              100%
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Homologado Neoenergia & CREA
            </p>
          </div>
        </div>

        {/* Metric 4: Até 95% de Economia */}
        <div className="flex items-center space-x-3 pt-2 md:pt-0 md:pl-6">
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-600 shrink-0">
            <TrendingUp className="w-5 h-5 stroke-[1.5]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-600 tracking-tight">
              Até 95%
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Redução Líquida na Conta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
