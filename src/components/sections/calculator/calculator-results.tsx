"use client";

import React from "react";
import { TrendingUp, Zap, Leaf, MessageCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import { SolarSimulationResult } from "@/types/solar";

interface CalculatorResultsProps {
  results: SolarSimulationResult;
  whatsappMessage: string;
}

export function CalculatorResults({
  results,
  whatsappMessage,
}: CalculatorResultsProps) {
  return (
    <div className="lg:col-span-7 space-y-4">
      {/* Real Proof Case Card from DMJ Collateral */}
      <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
              Caso Real Comprovado DMJ Solar
            </span>
            <div className="text-xs sm:text-sm text-slate-300">
              Conta de <strong className="text-rose-400 line-through">R$ 567,48</strong> caiu para taxa mínima de{" "}
              <strong className="text-emerald-400 font-bold">R$ 28,37</strong> (95% de economia líquida)
            </div>
          </div>
        </div>
        <span className="text-xs font-bold text-slate-950 bg-emerald-400 px-3 py-1 rounded-full whitespace-nowrap">
          Economia de 95%
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> Economia Mensal Estimada
          </div>
          <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-2">
            R$ {results.monthlySavings.toLocaleString("pt-BR")}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Redução de até 95% do custo direto da concessionária
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" /> Economia em 1 Ano
          </div>
          <div className="text-3xl sm:text-4xl font-black text-white mt-2">
            R$ {results.annualSavings.toLocaleString("pt-BR")}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Capital que permanece no seu bolso ou negócio
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 text-center">
        <div>
          <div className="text-xs text-slate-400">Potência Recomendada</div>
          <div className="text-lg font-black text-amber-400 mt-1">
            {results.recommendedKwPeak} kWp
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400">Qtd. de Painéis (550W)</div>
          <div className="text-lg font-black text-white mt-1">
            {results.panelsCount} módulos
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400">Tempo de Retorno</div>
          <div className="text-lg font-black text-emerald-400 mt-1">
            ~{results.paybackYears} anos
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400">CO₂ Evitado / Ano</div>
          <div className="text-lg font-black text-sky-400 mt-1 flex items-center justify-center gap-1">
            <Leaf className="w-3.5 h-3.5" /> {results.co2TonsAvoided} t
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-500/30 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Projeção de Vida Útil (25 anos)
          </span>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1">
            R$ {results.twentyFiveYearSavings.toLocaleString("pt-BR")}
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Considerando a inflação energética acumulada média de 8,5% a.a.
          </p>
        </div>

        <a
          href={`https://wa.me/556198086011?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Falar com Consultor DMJ</span>
        </a>
      </div>

      <div className="flex items-center justify-center gap-2 text-slate-500 text-xs text-center">
        <HelpCircle className="w-3.5 h-3.5" />
        <span>Simulação preliminar com base nas tarifas vigentes da Neoenergia Brasília.</span>
      </div>
    </div>
  );
}
