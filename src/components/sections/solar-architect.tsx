"use client";

import React, { useState, useMemo } from "react";
import { Calculator, TrendingUp, Clock, Zap, CheckCircle2, Send, ShieldAlert, Sparkles, Loader2 } from "lucide-react";
import { logger } from "@/lib/logger";

interface RoofVisualProps {
  panelsCount: number;
  kwp: string;
}

function RoofVisual({ panelsCount, kwp }: RoofVisualProps) {
  // Show up to 18 visual mini panels for rendering representation
  const displayPanels = Math.min(panelsCount, 18);

  return (
    <div className="p-4 rounded-2xl bg-[#070B14]/80 border border-white/[0.08] mb-6">
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
        <span>Arranjo Visual Estimado no Telhado</span>
        <span className="text-amber-400 font-bold">{kwp} kWp ({panelsCount} módulos)</span>
      </div>

      <div className="grid grid-cols-6 sm:grid-cols-9 gap-1.5 p-3 rounded-xl bg-slate-950 border border-white/[0.04]">
        {[...Array(displayPanels)].map((_, i) => (
          <div
            key={i}
            className="h-8 rounded-sm bg-gradient-to-br from-sky-900 to-slate-900 border border-sky-400/40 flex items-center justify-center shadow-inner"
            title="Módulo Fotovoltaico Tier 1"
          >
            <div className="w-full h-px bg-sky-400/20" />
          </div>
        ))}
      </div>
      {panelsCount > 18 && (
        <div className="text-[10px] font-mono text-slate-500 text-right mt-1.5">
          + {panelsCount - 18} módulos em strings adicionais
        </div>
      )}
    </div>
  );
}

interface BillComparisonProps {
  billValue: number;
  monthlySavings: number;
  formattedBill: string;
}

function BillComparison({ billValue, monthlySavings, formattedBill }: BillComparisonProps) {
  const newBill = Math.max(28, billValue - monthlySavings);
  const formattedNew = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(newBill);
  const formattedSave = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(monthlySavings);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
      <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20">
        <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 mb-1">
          <ShieldAlert className="w-3.5 h-3.5" /> Sem Energia Solar (Neoenergia)
        </div>
        <div className="text-2xl font-mono font-bold text-white line-through opacity-80">
          {formattedBill}
        </div>
        <p className="text-[11px] text-slate-400 mt-1 font-light">Custo mensal perdido com tarifas e bandeiras</p>
      </div>

      <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Com Usina DMJ Solar
        </div>
        <div className="text-2xl font-mono font-bold text-emerald-400">
          {formattedNew} <span className="text-xs font-normal text-slate-400">taxa mínima</span>
        </div>
        <p className="text-[11px] text-emerald-300/80 mt-1 font-mono">Economia livre de {formattedSave}/mês</p>
      </div>
    </div>
  );
}

interface ArchitectControlsProps {
  billValue: number;
  setBillValue: (val: number) => void;
  formattedBill: string;
  panelsCount: number;
  estimatedKwp: string;
  loadingAi: boolean;
  onAiRequest: () => void;
  aiInsight: { analysis: string; recommendation: string } | null;
}

function ArchitectControls({
  billValue,
  setBillValue,
  formattedBill,
  panelsCount,
  estimatedKwp,
  loadingAi,
  onAiRequest,
  aiInsight,
}: ArchitectControlsProps) {
  return (
    <div className="lg:col-span-6 rounded-3xl bg-[#0F172A]/80 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Gasto Mensal de Energia</span>
          <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-400">{formattedBill}</span>
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

      <RoofVisual panelsCount={panelsCount} kwp={estimatedKwp} />

      <button
        onClick={onAiRequest}
        disabled={loadingAi}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-mono font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all active:scale-95 disabled:opacity-50"
      >
        {loadingAi ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
            <span>Elaborando Parecer de Engenharia com IA...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Parecer Técnico Preliminar (Gemini IA)</span>
          </>
        )}
      </button>

      {aiInsight && (
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-1.5 text-slate-300">
          <div className="font-mono font-bold text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Análise de Viabilidade
          </div>
          <p className="leading-relaxed font-light">{aiInsight.analysis}</p>
          <p className="text-[11px] font-mono text-amber-200 font-medium">⚙️ {aiInsight.recommendation}</p>
        </div>
      )}
    </div>
  );
}

interface ArchitectResultsProps {
  billValue: number;
  monthlyEconomy: number;
  formattedBill: string;
  formattedAnnual: string;
  formatted25Y: string;
  paybackYears: number;
  whatsappMessage: string;
}

function ArchitectResults({
  billValue,
  monthlyEconomy,
  formattedBill,
  formattedAnnual,
  formatted25Y,
  paybackYears,
  whatsappMessage,
}: ArchitectResultsProps) {
  return (
    <div className="lg:col-span-6 space-y-4">
      <BillComparison billValue={billValue} monthlySavings={monthlyEconomy} formattedBill={formattedBill} />

      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-[#0F172A]/80 border border-emerald-500/30">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> Economia em 1 Ano
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 mt-2">
            {formattedAnnual}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#0F172A]/80 border border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Zap className="w-4 h-4 text-amber-400" /> Economia em 25 Anos
          </div>
          <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-2">
            {formatted25Y}
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-emerald-400" /> Payback Médio Estimado
        </span>
        <span className="text-emerald-400 font-bold">~{paybackYears} Anos</span>
      </div>

      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[#0F172A] to-emerald-500/10 border border-amber-500/30 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
            Estudo Técnico Formal Gratuito
          </span>
          <p className="text-xs text-slate-300 font-light mt-1">
            Receba o memorial executivo com mapa de sombreamento do seu telhado em Brasília ou Goiás.
          </p>
        </div>

        <a
          href={`https://wa.me/556198086011?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm font-mono tracking-tight shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          <Send className="w-4 h-4" />
          <span>Receber Estudo Formal no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export function SolarArchitect() {
  const [billValue, setBillValue] = useState<number>(1200);
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [aiInsight, setAiInsight] = useState<{ analysis: string; recommendation: string } | null>(null);

  const stats = useMemo(() => {
    const monthlyEconomy = billValue * 0.93;
    const annualEconomy = monthlyEconomy * 12;
    const cumulativeSavings25Y = annualEconomy * 25 * 1.15;
    const estimatedKwp = (billValue / 1.02) / (5.42 * 30 * 0.82);
    const panelsCount = Math.max(2, Math.ceil((estimatedKwp * 1000) / 550));
    const paybackYears = Number((3.2 - Math.min(0.6, (billValue / 15000) * 0.4)).toFixed(1));

    return {
      monthlyEconomy,
      annualEconomy,
      cumulativeSavings25Y,
      paybackYears,
      estimatedKwp: estimatedKwp.toFixed(1),
      panelsCount,
    };
  }, [billValue]);

  const formattedBill = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(billValue);
  const formattedAnnual = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(stats.annualEconomy);
  const formatted25Y = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(stats.cumulativeSavings25Y);

  const handleRequestAi = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch("/api/solar-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ monthlyBill: billValue, sector: "residencial/comercial", recommendedKwPeak: Number(stats.estimatedKwp), annualSavings: stats.annualEconomy }),
      });
      const data = await res.json();
      if (data.success) setAiInsight({ analysis: data.analysis, recommendation: data.recommendation });
    } catch (err) {
      logger.error("Erro ao consultar IA", err);
    } finally {
      setLoadingAi(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá DMJ Engenharia Solar! Simulei meu imóvel no site com conta de ${formattedBill}/mês.\n` +
    `Potência recomendada: ${stats.estimatedKwp} kWp (${stats.panelsCount} painéis).\n` +
    `Economia prevista: ${formattedAnnual}/ano.\n` +
    `Gostaria de solicitar o estudo técnico formal sem custo para Brasília/DF.`
  );

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-[#070B14] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>DIMENSIONAMENTO EXECUTIVO DF</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Arquiteto Solar & Simulador de Economia.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-light">
            Descubra a quantidade de módulos ideal e o ganho patrimonial acumulado sob as tarifas da Neoenergia Brasília.
          </p>
        </div>

        {/* Real Verified Proof Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-[#0F172A] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                Caso Real Auditado • DMJ Solar Samambaia Sul
              </span>
              <p className="text-xs sm:text-sm text-slate-200">
                Fatura de <strong className="text-rose-400 line-through">R$ 567,48</strong> caiu para taxa mínima de{" "}
                <strong className="text-emerald-400 font-mono font-bold">R$ 28,37</strong> (95% de corte líquido)
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-emerald-400 text-slate-950 px-3.5 py-1 rounded-full whitespace-nowrap">
            ECONOMIA DE 95%
          </span>
        </div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <ArchitectControls
            billValue={billValue}
            setBillValue={setBillValue}
            formattedBill={formattedBill}
            panelsCount={stats.panelsCount}
            estimatedKwp={stats.estimatedKwp}
            loadingAi={loadingAi}
            onAiRequest={handleRequestAi}
            aiInsight={aiInsight}
          />

          <ArchitectResults
            billValue={billValue}
            monthlyEconomy={stats.monthlyEconomy}
            formattedBill={formattedBill}
            formattedAnnual={formattedAnnual}
            formatted25Y={formatted25Y}
            paybackYears={stats.paybackYears}
            whatsappMessage={whatsappMessage}
          />
        </div>
      </div>
    </section>
  );
}
