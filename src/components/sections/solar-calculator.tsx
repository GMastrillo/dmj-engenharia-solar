"use client";

import React, { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { SectorType, SolarSimulationResult } from "@/types/solar";
import { logger } from "@/lib/logger";
import { CalculatorControls } from "./calculator/calculator-controls";
import { CalculatorResults } from "./calculator/calculator-results";

export function SolarCalculator() {
  const [billValue, setBillValue] = useState<number>(850);
  const [sector, setSector] = useState<SectorType>("residencial");
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [aiInsight, setAiInsight] = useState<{
    analysis: string;
    recommendation: string;
  } | null>(null);

  const results: SolarSimulationResult = useMemo(() => {
    const monthlySavings = Math.round(billValue * 0.93);
    const annualSavings = monthlySavings * 12;
    const estimatedKwh = billValue / 0.95;
    const recommendedKwPeak = Number((estimatedKwh / (30 * 4.4 * 0.8)).toFixed(2));
    const panelsCount = Math.max(2, Math.ceil((recommendedKwPeak * 1000) / 550));
    const paybackYears = Number((3.2 - Math.min(0.6, (billValue / 15000) * 0.4)).toFixed(1));
    const co2TonsAvoided = Number(((estimatedKwh * 12 * 0.084) / 1000).toFixed(1));
    const twentyFiveYearSavings = annualSavings * 25;

    return {
      monthlySavings,
      annualSavings,
      paybackYears,
      recommendedKwPeak,
      panelsCount,
      co2TonsAvoided,
      twentyFiveYearSavings,
    };
  }, [billValue]);

  const handleRequestAi = async () => {
    setLoadingAi(true);
    try {
      const res = await fetch("/api/solar-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          monthlyBill: billValue,
          sector,
          recommendedKwPeak: results.recommendedKwPeak,
          annualSavings: results.annualSavings,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setAiInsight({
          analysis: data.analysis,
          recommendation: data.recommendation,
        });
      }
    } catch (err) {
      logger.error("Erro ao consultar IA", err);
    } finally {
      setLoadingAi(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá DMJ Engenharia Solar! Fiz a simulação no site para meu imóvel em Brasília/DF (${sector}):\n- Conta de Luz: R$ ${billValue}\n- Potência sugerida: ${results.recommendedKwPeak} kWp (${results.panelsCount} painéis)\n- Economia anual estimada: R$ ${results.annualSavings.toLocaleString("pt-BR")}\nGostaria de receber uma proposta formal com a equipe técnica!`
  );

  return (
    <section id="simulador" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Alta Precisão • Neoenergia DF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Descubra Quanto Você Vai Economizar
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ajuste o valor médio da sua conta de luz e veja a estimativa imediata para Brasília e região.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <CalculatorControls
            billValue={billValue}
            setBillValue={setBillValue}
            sector={sector}
            setSector={setSector}
            loadingAi={loadingAi}
            handleRequestAi={handleRequestAi}
            aiInsight={aiInsight}
          />
          <CalculatorResults
            results={results}
            whatsappMessage={whatsappMessage}
          />
        </div>
      </div>
    </section>
  );
}
