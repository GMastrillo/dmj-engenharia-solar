"use client";

import React from "react";
import {
  ShieldAlert,
  Cpu,
  Smartphone,
  Award,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";

export function BenefitsSection() {
  const cards = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Módulos Tier 1 Globais",
      description:
        "Utilizamos exclusivamente painéis dos fabricantes líderes mundiais (Bloomberg NEF Tier 1), com tecnologia monocristalina bifacial de até 22,8% de eficiência.",
      badge: "Garantia 25 Anos",
    },
    {
      icon: <Cpu className="w-6 h-6 text-sky-400" />,
      title: "Inversores de Alta Performance",
      description:
        "Eletrônica de ponta com rastreamento MPPT múltiplo, proteção anti-ilhamento e suporte a sistemas híbridos com bancos de baterias para backup.",
      badge: "Eficiência 98.6%",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-emerald-400" />,
      title: "Homologação Concessionária 100%",
      description:
        "Nossa engenharia cuida de tudo: projeto elétrico, emissão de ART/RRT, protocolo e vistoria junto à concessionária local até a troca do medidor.",
      badge: "Zero Burocracia",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-yellow-400" />,
      title: "Telemetria & App 24/7",
      description:
        "Acompanhe pelo celular a produção em tempo real, economia financeira diária acumulada e status de saúde de cada painel do seu sistema.",
      badge: "Monitoramento em Nuvem",
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "Instalação Ágil e Limpa",
      description:
        "Equipes próprias certificadas nas normas NR-10 (segurança em eletricidade) e NR-35 (trabalho em altura), garantindo estanqueidade total do telhado.",
      badge: "Instalação Segura",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Financiamento em até 84x",
      description:
        "Linhas especiais de crédito solar onde a parcela mensal é paga com a própria economia gerada na conta de luz. Sem desembolso inicial.",
      badge: "Carência até 120 dias",
    },
  ];

  return (
    <section id="tecnologia" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Padrão de Excelência DJM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia que Protege Seu Investimento
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Não vendemos apenas equipamentos fotovoltaicos: entregamos usinas solares de máxima rentabilidade e segurança estrutural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 rounded-3xl p-7 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span className="text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                  {card.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
