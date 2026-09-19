"use client";

import React, { useState } from "react";
import { FileSearch, Compass, Cpu, Activity, ShieldCheck, Check } from "lucide-react";

interface Step {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
}

const steps: Step[] = [
  {
    id: "01",
    number: "01",
    title: "Diagnóstico Técnico & Análise de Carga",
    subtitle: "Auditoria do Padrão e Consumo",
    description:
      "Nossa equipe de engenheiros realiza a análise do histórico de consumo, avaliação do quadro de distribuição e inspeção da estrutura do telhado para dimensionar a usina no ponto ótimo de geração no DF.",
    icon: <FileSearch className="w-5 h-5 stroke-[1.5] text-amber-400" />,
    specs: ["Termografia do quadro elétrico", "Estudo de sombreamento e irradiação no DF", "Inspeção da estrutura de fixação"],
  },
  {
    id: "02",
    number: "02",
    title: "Projeto de Engenharia & ART no CREA-DF",
    subtitle: "Conformidade Total com a Neoenergia DF",
    description:
      "Elaboração de diagramas unifilares, memorial descritivo e emissão de Anotação de Responsabilidade Técnica (ART) por Engenheiro Eletricista. Protocolamos e conduzimos 100% dos trâmites sem pendências.",
    icon: <Compass className="w-5 h-5 stroke-[1.5] text-amber-400" />,
    specs: ["Emissão de ART no CREA-DF", "Trâmite 100% digital na Neoenergia", "Garantia de aprovação técnica"],
  },
  {
    id: "03",
    number: "03",
    title: "Instalação com Componentes Tier-1",
    subtitle: "Painéis Monocristalinos & Inversores Globais",
    description:
      "Montagem executada por equipes próprias com certificações NR-10 e NR-35. Empregamos módulos fotovoltaicos Tier-1 de alta eficiência e inversores de ponta (WEG, Growatt, Deye, Canadian).",
    icon: <Cpu className="w-5 h-5 stroke-[1.5] text-emerald-400" />,
    specs: ["Módulos de alta eficiência com garantia de 25 anos", "Estruturas em alumínio anodizado", "Proteções elétricas classe II (DPS)"],
  },
  {
    id: "04",
    number: "04",
    title: "Vistoria & Troca do Medidor Bidirecional",
    subtitle: "Homologação Oficial Concluída",
    description:
      "Acompanhamos a vistoria física dos fiscais da concessionária e a substituição do relógio de luz convencional pelo medidor bidirecional homologado para injeção de créditos.",
    icon: <ShieldCheck className="w-5 h-5 stroke-[1.5] text-amber-400" />,
    specs: ["Vistoria agendada e acompanhada pela DMJ", "Instalação do relógio bidirecional", "Ativação do sistema na rede"],
  },
  {
    id: "05",
    number: "05",
    title: "Comissionamento & Monitoramento 24/7",
    subtitle: "Economia Real Ativada",
    description:
      "Ativação do aplicativo no seu smartphone. Acompanhe dia a dia a geração de cada string, a economia acumulada em Reais e conte com o suporte técnico da nossa sede em Samambaia Sul.",
    icon: <Activity className="w-5 h-5 stroke-[1.5] text-emerald-400" />,
    specs: ["App no celular com telemetria WiFi", "Suporte técnico local no DF", "Garantia de geração contínua"],
  },
];

export function EngineeringTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="metodologia" className="py-16 sm:py-24 md:py-32 bg-[#090A0C] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>METODOLOGIA DE ENGENHARIA DMJ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Do Estudo à Conexão na Rede Sem Burocracia.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 font-light">
            Segurança jurídica, técnica e regulatória em cada etapa do seu investimento.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none mb-8">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-mono transition-all duration-300 shrink-0 ${
                activeStep === idx
                  ? "bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-md shadow-amber-500/10"
                  : "bg-[#171B22]/60 border-white/[0.06] text-slate-400 hover:text-white"
              }`}
            >
              <span className="font-bold">{step.number}.</span>
              <span className="font-sans">{step.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="rounded-3xl bg-[#171B22]/80 border border-white/[0.08] p-6 sm:p-10 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                {steps[activeStep].icon}
              </div>
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  ETAPA {steps[activeStep].number} DE 05
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {steps[activeStep].specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#090A0C] border border-white/[0.08] text-center space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase">Garantia Técnica DMJ</div>
            <div className="text-2xl font-display font-bold text-white">Homologação ANEEL</div>
            <p className="text-xs text-slate-400 font-light">
              Engenharia própria credenciada no CREA-DF com mais de 300 projetos conectados com sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
