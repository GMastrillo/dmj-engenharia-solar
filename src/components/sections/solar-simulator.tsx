"use client";

import React, { useState, useMemo } from "react";
import { Calculator, TrendingUp, Leaf, Clock, Send, Zap, CheckCircle2, Sparkles, Loader2 } from "lucide-react";
import { logger } from "@/lib/logger";

interface SimulatorControlsProps {
  billValue: number;
  setBillValue: (val: number) => void;
  formattedBill: string;
  loadingAi: boolean;
  onAiRequest: () => void;
  aiInsight: { analysis: string; recommendation: string } | null;
}

function SimulatorControls({
  billValue,
  setBillValue,
  formattedBill,
  loadingAi,
  onAiRequest,
  aiInsight,
}: SimulatorControlsProps) {
  return (
    <div className="lg:col-span-5 rounded-2xl bg-[#171B22]/80 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Gasto Mensal de Energia
          </span>
          <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-400">
            {formattedBill}
          </span>
        </div>
        <input
          type="range"
          min={300}
          max={25000}
          step={100}
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
        />
        <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
          <span>R$ 300</span>
          <span>R$ 5.000</span>
          <span>R$ 15.000</span>
          <span>R$ 25.000+</span>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={onAiRequest}
          disabled={loadingAi}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all active:scale-95 disabled:opacity-50"
        >
          {loadingAi ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
              <span>Processando Parecer Técnico com IA...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Parecer de Engenharia com Gemini IA</span>
            </>
          )}
        </button>
      </div>

      {aiInsight && (
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-2 text-slate-300">
          <div className="font-mono font-bold text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Parecer de Viabilidade
          </div>
          <p className="leading-relaxed font-light">{aiInsight.analysis}</p>
          <p className="text-[11px] font-mono text-amber-200/90 font-medium">⚙️ {aiInsight.recommendation}</p>
        </div>
      )}
    </div>
  );
}

interface SimulatorResultsProps {
  formattedAnnual: string;
  formatted25Years: string;
  calculations: {
    estimatedKwp: string;
    panelsCount: number;
    paybackYears: number;
    co2TonsAvoided: number;
  };
  whatsappMessage: string;
}

function SimulatorResults({
  formattedAnnual,
  formatted25Years,
  calculations,
  whatsappMessage,
}: SimulatorResultsProps) {
  return (
    <div className="lg:col-span-7 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-[#171B22]/80 border border-emerald-500/30">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> Economia em 1 Ano
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400 mt-2">
            {formattedAnnual}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Capital livre gerado no primeiro ano</p>
        </div>

        <div className="p-6 rounded-2xl bg-[#171B22]/80 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Zap className="w-4 h-4 text-amber-400" /> Economia em 25 Anos
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-bold text-white mt-2">
            {formatted25Years}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Considerando a inflação média da energia</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#171B22]/50 border border-white/[0.06] text-center">
        <div>
          <span className="text-[11px] font-mono text-slate-400 block">Potência Média</span>
          <span className="text-lg font-mono font-bold text-amber-400 mt-1 block">
            {calculations.estimatedKwp} kWp
          </span>
        </div>
        <div>
          <span className="text-[11px] font-mono text-slate-400 block">Qtd. de Módulos</span>
          <span className="text-lg font-mono font-bold text-white mt-1 block">
            {calculations.panelsCount} un (550W)
          </span>
        </div>
        <div>
          <span className="text-[11px] font-mono text-slate-400 block">Payback Estimado</span>
          <span className="text-lg font-mono font-bold text-emerald-400 mt-1 block flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5" /> ~{calculations.paybackYears} anos
          </span>
        </div>
        <div>
          <span className="text-[11px] font-mono text-slate-400 block">CO₂ Evitado/Ano</span>
          <span className="text-lg font-mono font-bold text-sky-400 mt-1 block flex items-center justify-center gap-1">
            <Leaf className="w-3.5 h-3.5" /> {calculations.co2TonsAvoided} t
          </span>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#171B22] to-emerald-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            Solicitar Estudo Técnico de Engenharia
          </span>
          <p className="text-xs text-slate-400 font-light mt-1">
            Orçamento executivo gratuito com simulação de irradiação solar para seu telhado no DF.
          </p>
        </div>

        <a
          href={`https://wa.me/556198086011?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-zinc-950 font-bold text-xs sm:text-sm font-mono tracking-tight shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
        >
          <Send className="w-4 h-4" />
          <span>Receber Estudo Formal</span>
        </a>
      </div>
    </div>
  );
}

export function SolarSimulator() {
  const [billValue, setBillValue] = useState<number>(1200);
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [aiInsight, setAiInsight] = useState<{ analysis: string; recommendation: string } | null>(null);

  const calculations = useMemo(() => {
    const monthlyEconomy = billValue * 0.93;
    const annualEconomy = monthlyEconomy * 12;
    const cumulativeSavings25Y = annualEconomy * 25 * 1.15;
    const estimatedKwp = (billValue / 1.02) / (5.4 * 30 * 0.82);
    const panelsCount = Math.max(2, Math.ceil((estimatedKwp * 1000) / 550));
    const paybackYears = Number((3.2 - Math.min(0.6, (billValue / 15000) * 0.4)).toFixed(1));
    const annualKwhGenerated = (monthlyEconomy / 1.02) * 12;
    const co2TonsAvoided = Number(((annualKwhGenerated * 0.12) / 1000).toFixed(1));

    return {
      monthlyEconomy,
      annualEconomy,
      cumulativeSavings25Y,
      paybackYears,
      co2TonsAvoided: Math.max(0.6, co2TonsAvoided),
      estimatedKwp: estimatedKwp.toFixed(1),
      panelsCount,
    };
  }, [billValue]);

  const formattedBill = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(billValue);

  const formattedAnnual = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(calculations.annualEconomy);

  const formatted25Years = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(calculations.cumulativeSavings25Y);

  const handleRequestAi = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch("/api/solar-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monthlyBill: billValue,
          sector: "residencial/comercial",
          recommendedKwPeak: Number(calculations.estimatedKwp),
          annualSavings: calculations.annualEconomy,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAiInsight({ analysis: data.analysis, recommendation: data.recommendation });
      }
    } catch (err) {
      logger.error("Erro ao consultar IA", err);
    } finally {
      setLoadingAi(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá DMJ Engenharia Solar! Fiz a simulação no site com uma conta de ${formattedBill}/mês.\n` +
    `Economia anual estimada: ${formattedAnnual} (R$ ${calculations.cumulativeSavings25Y.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} em 25 anos).\n` +
    `Gostaria de receber o estudo técnico sem compromisso para meu imóvel em Brasília/DF.`
  );

  return (
    <section id="simulador" className="py-16 sm:py-24 md:py-32 bg-[#090A0C] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-3 sm:mb-4">
            <Calculator className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>ENGENHARIA FINANCEIRA & TARIFÁRIA DF</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Simulador de Rentabilidade Fotovoltaica.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 font-light">
            Descubra o potencial de corte de custos para residências, condomínios e empresas sob as tarifas da Neoenergia Brasília.
          </p>
        </div>

        {/* Real Proof Card */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#171B22]/80 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                Caso Real Comprovado • DMJ Solar
              </span>
              <div className="text-xs sm:text-sm text-slate-300">
                Conta de <strong className="text-rose-400 line-through">R$ 567,48</strong> caiu para taxa mínima de{" "}
                <strong className="text-emerald-400 font-mono font-bold">R$ 28,37</strong> (95% de economia líquida)
              </div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-950 bg-emerald-400 px-3 py-1 rounded-full whitespace-nowrap">
            ECONOMIA DE 95%
          </span>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <SimulatorControls
            billValue={billValue}
            setBillValue={setBillValue}
            formattedBill={formattedBill}
            loadingAi={loadingAi}
            onAiRequest={handleRequestAi}
            aiInsight={aiInsight}
          />

          <SimulatorResults
            formattedAnnual={formattedAnnual}
            formatted25Years={formatted25Years}
            calculations={calculations}
            whatsappMessage={whatsappMessage}
          />
        </div>
      </div>
    </section>
  );
}
