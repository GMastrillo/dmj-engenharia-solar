"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { SectorType } from "@/types/solar";

interface CalculatorControlsProps {
  billValue: number;
  setBillValue: (val: number) => void;
  sector: SectorType;
  setSector: (sec: SectorType) => void;
  loadingAi: boolean;
  handleRequestAi: () => void;
  aiInsight: { analysis: string; recommendation: string } | null;
}

export function CalculatorControls({
  billValue,
  setBillValue,
  sector,
  setSector,
  loadingAi,
  handleRequestAi,
  aiInsight,
}: CalculatorControlsProps) {
  const sectors: SectorType[] = ["residencial", "comercial", "rural", "industrial"];

  return (
    <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          1. Selecione a Categoria
        </label>
        <div className="grid grid-cols-2 gap-2">
          {sectors.map((item) => (
            <button
              key={item}
              onClick={() => setSector(item)}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                sector === item
                  ? "bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20"
                  : "bg-slate-950/60 text-slate-300 border-slate-800 hover:border-slate-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            2. Valor Médio da Fatura
          </label>
          <span className="text-xl sm:text-2xl font-black text-amber-400">
            R$ {billValue.toLocaleString("pt-BR")}
          </span>
        </div>
        <input
          type="range"
          min={250}
          max={20000}
          step={50}
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>R$ 250</span>
          <span>R$ 5.000</span>
          <span>R$ 10.000</span>
          <span>R$ 20.000+</span>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={handleRequestAi}
          disabled={loadingAi}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 transition-all active:scale-95 disabled:opacity-50"
        >
          {loadingAi ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
              <span>Processando Parecer Técnico com IA...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Gerar Parecer de Engenharia com Gemini IA</span>
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {aiInsight && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-4 text-xs space-y-2 text-slate-300"
          >
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnóstico da IA DJM Solar</span>
            </div>
            <p className="leading-relaxed">{aiInsight.analysis}</p>
            <p className="text-[11px] text-amber-200/80 font-medium">
              ⚙️ {aiInsight.recommendation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
