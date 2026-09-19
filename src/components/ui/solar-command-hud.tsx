"use client";

import React, { useState } from "react";
import { Zap, Sun, Activity, ShieldCheck, ArrowUpRight, BarChart3 } from "lucide-react";

interface Preset {
  id: string;
  name: string;
  region: string;
  kwp: string;
  modules: number;
  monthlyGen: string;
  monthlySave: string;
  curvePoints: string;
}

const presets: Preset[] = [
  {
    id: "res",
    name: "Residencial DF",
    region: "Samambaia / Taguatinga",
    kwp: "5.5 kWp",
    modules: 10,
    monthlyGen: "740 kWh",
    monthlySave: "R$ 690/mês",
    curvePoints: "M 0,90 Q 60,85 110,45 T 200,15 T 290,45 T 360,90",
  },
  {
    id: "com",
    name: "Comércio & Clínicas",
    region: "Plano Piloto / Vicente Pires",
    kwp: "18.2 kWp",
    modules: 34,
    monthlyGen: "2.450 kWh",
    monthlySave: "R$ 2.280/mês",
    curvePoints: "M 0,90 Q 60,78 110,32 T 200,8 T 290,32 T 360,90",
  },
  {
    id: "agro",
    name: "Agronegócio",
    region: "Cristalina / Entorno DF-GO",
    kwp: "45.0 kWp",
    modules: 82,
    monthlyGen: "6.200 kWh",
    monthlySave: "R$ 5.850/mês",
    curvePoints: "M 0,90 Q 60,70 110,22 T 200,4 T 290,22 T 360,90",
  },
];

export function SolarCommandHud() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = presets[activeTab];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0A0F1D]/90 border border-sky-500/20 p-5 sm:p-7 backdrop-blur-2xl shadow-2xl shadow-sky-950/40">
      {/* Decorative Top Accent Glow */}
      <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
            <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <span>CONSOLE TELEMETRIA DF</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-xs font-semibold text-white">
              Irradiação: 5.42 kWh/m²/dia (DF)
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
          <ShieldCheck className="w-3 h-3" />
          <span>Neoenergia Sincronizada</span>
        </div>
      </div>

      {/* Sector Switcher Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#070B14]/80 rounded-xl border border-white/[0.06] my-4">
        {presets.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(idx)}
            className={`py-2 px-2 text-center rounded-lg text-xs font-mono transition-all duration-200 ${
              activeTab === idx
                ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Dynamic Solar Generation Curve Visualization */}
      <div className="p-4 rounded-2xl bg-[#070B14]/60 border border-white/[0.06] mb-4">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
          <span className="flex items-center gap-1 text-amber-400">
            <Activity className="w-3 h-3" /> Curva Diária de Geração (06h - 18h)
          </span>
          <span className="text-emerald-400 font-medium">Pico às 12:30</span>
        </div>

        <div className="relative h-24 w-full flex items-end">
          <svg viewBox="0 0 360 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d={`${current.curvePoints} L 360,100 L 0,100 Z`}
              fill="url(#curveGradient)"
              className="transition-all duration-500"
            />
            <path
              d={current.curvePoints}
              fill="none"
              stroke="#FBBF24"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="transition-all duration-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
            />
            {/* Photon Pulse on Zenith Peak */}
            <circle cx="200" cy="14" r="5" fill="#FBBF24" className="animate-ping" />
            <circle cx="200" cy="14" r="3.5" fill="#FFFFFF" />
          </svg>
        </div>

        <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2 border-t border-white/[0.04] pt-1">
          <span>06:00 (Amanhecer)</span>
          <span>12:00 (Pico Solar DF)</span>
          <span>18:00 (Crepúsculo)</span>
        </div>
      </div>

      {/* Real Performance Metrics for the Selected Preset */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-4">
        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">Potência</span>
          <span className="text-sm font-mono font-bold text-amber-400 block mt-0.5">
            {current.kwp}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">Módulos</span>
          <span className="text-sm font-mono font-bold text-white block mt-0.5">
            {current.modules} un (Tier 1)
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 block">Geração/Mês</span>
          <span className="text-sm font-mono font-bold text-sky-400 block mt-0.5">
            {current.monthlyGen}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-[10px] font-mono text-emerald-400 block">Economia</span>
          <span className="text-sm font-mono font-bold text-emerald-400 block mt-0.5">
            {current.monthlySave}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>{current.region}</span>
        </span>

        <a
          href="#simulador"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Dimensionar Meu Telhado</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
