"use client";

import React from "react";
import { Sun, FileText, ShieldCheck, Tractor, CheckCircle2, ArrowUpRight } from "lucide-react";

interface Pillar {
  number: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaUrl: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    icon: <Sun className="w-6 h-6 text-amber-400" />,
    title: "Energia Solar Fotovoltaica",
    subtitle: "Residencial & Comercial",
    badge: "Economia até 95%",
    description:
      "Usinas conectadas à rede (On-Grid) para residências, comércios, padarias, clínicas e galpões no DF. Livre-se dos aumentos tarifários com kit completo a partir de R$ 12.900.",
    highlights: [
      "Módulos monocristalinos Tier-1 com 25 anos de garantia",
      "Inversores de alta eficiência com telemetria WiFi integrada",
      "Parcelamento flexível em até 21x no cartão de crédito",
    ],
    ctaText: "Consultar Residencial / Comercial",
    ctaUrl: "https://wa.me/556198086011?text=Ol%C3%A1%20DMJ!%20Gostaria%20de%20um%20projeto%20fotovoltaico%20para%20meu%20im%C3%B3vel.",
  },
  {
    number: "02",
    icon: <FileText className="w-6 h-6 text-sky-400" />,
    title: "Projetos Personalizados",
    subtitle: "Engenharia & ART no CREA-DF",
    badge: "Engenharia Própria",
    description:
      "Dimensionamento milimétrico do sistema elétrico. Realizamos estudo de sombreamento, diagramas unifilares e emissão de Anotação de Responsabilidade Técnica (ART) por engenheiro habilitado.",
    highlights: [
      "Auditoria do quadro elétrico e padrão de entrada",
      "Cálculo de geração baseado na irradiação do Planalto Central",
      "Conformidade técnica integral com normas ABNT e NR",
    ],
    ctaText: "Solicitar Análise de Carga",
    ctaUrl: "https://wa.me/556198086011?text=Ol%C3%A1%20DMJ!%20Quero%20uma%20an%C3%A1lise%20de%20carga%20e%20projeto%20personalizado.",
  },
  {
    number: "03",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "Instalação & Homologação",
    subtitle: "Neoenergia Distribuição Brasília",
    badge: "Zero Burocracia",
    description:
      "A DMJ assume 100% da tramitação com a concessionária: envio do parecer de acesso, agendamento de vistoria e substituição do relógio de luz pelo medidor bidirecional homologado.",
    highlights: [
      "Montagem física com equipe própria (NR-10 e NR-35)",
      "Trâmite 100% digital com a Neoenergia DF",
      "Garantia formal de conexão sem pendências regulatórias",
    ],
    ctaText: "Entender Homologação",
    ctaUrl: "https://wa.me/556198086011?text=Ol%C3%A1%20DMJ!%20Como%20funciona%20a%20homologa%C3%A7%C3%A3o%20na%20Neoenergia?",
  },
  {
    number: "04",
    icon: <Tractor className="w-6 h-6 text-amber-500" />,
    title: "Linha Rural & Manutenção",
    subtitle: "Agronegócio & Telemetria 24/7",
    badge: "DF & Goiás",
    description:
      "Usinas de solo e bombeamento solar para fazendas, pivôs de irrigação, granjas de aves e suínos. Acompanhamento preventivo e suporte técnico local com base em Samambaia Sul.",
    highlights: [
      "Atendimento a linhas de crédito (Pronaf, FCO e Plano Safra)",
      "Monitoramento diário de geração e alertas em tempo real",
      "Limpeza técnica e manutenção corretiva especializada",
    ],
    ctaText: "Soluções para Agro & Manutenção",
    ctaUrl: "https://wa.me/556198086011?text=Ol%C3%A1%20DMJ!%20Tenho%20uma%20propriedade%20rural%20e%20preciso%20de%20energia%20solar.",
  },
];

export function FourPillars() {
  return (
    <section id="pilares" className="py-20 sm:py-28 bg-[#F8FAFC] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono text-amber-700 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>ESTRUTURA DE ENGENHARIA DMJ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Os 4 Pilares da Nossa Engenharia no DF.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 font-normal">
            Soluções completas e integradas, desde a concepção elétrica com ART até a conexão na rede e manutenção contínua.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                      {pillar.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                  {pillar.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                {pillar.description}
              </p>

              <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-5">
                {pillar.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Pilar {pillar.number}</span>
                <a
                  href={pillar.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
