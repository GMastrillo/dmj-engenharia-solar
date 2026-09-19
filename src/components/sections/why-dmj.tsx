"use client";

import React from "react";
import { Check, X, ShieldCheck, MapPin } from "lucide-react";

interface ComparisonRow {
  criterion: string;
  others: string;
  dmj: string;
}

const rows: ComparisonRow[] = [
  {
    criterion: "Sede Física & Presença Local",
    others: "Sem endereço no DF; operam à distância ou por intermediários",
    dmj: "Sede própria no Fast Cowork (QS 120, Samambaia Sul) com atendimento presencial",
  },
  {
    criterion: "Responsabilidade Técnica (CREA-DF)",
    others: "Terceirizam engenheiros ou assinam sem vistoriar o local",
    dmj: "Engenheiros eletricistas próprios e ART formal emitida no CREA-DF",
  },
  {
    criterion: "Homologação na Neoenergia DF",
    others: "Atrasos recorrentes e processos travados por pendências técnicas",
    dmj: "Trâmite 100% digital, rápido e com garantia de aprovação contratual",
  },
  {
    criterion: "Padrão dos Equipamentos",
    others: "Módulos de marcas secundárias ou de sobra de estoque",
    dmj: "Componentes globais Tier-1 (WEG, Canadian, Growatt, Deye) com 25 anos de garantia",
  },
  {
    criterion: "Suporte Pós-Instalação",
    others: "Dificuldade de contato e suporte inexistente após a venda",
    dmj: "Telemetria 24/7, suporte técnico local e equipe própria de manutenção",
  },
];

export function WhyDmj() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono text-amber-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>SEGURANÇA DO SEU INVESTIMENTO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Por Que a DMJ é Referência no Distrito Federal.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Energia solar é um investimento de mais de duas décadas. Veja a diferença entre amadores e uma engenharia consolidada.
          </p>
        </div>

        {/* Comparison Table / Matrix */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-slate-600 uppercase tracking-wider w-1/3">
                  Critério de Decisão
                </th>
                <th className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider w-1/3">
                  Instaladores Comuns
                </th>
                <th className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-amber-800 uppercase tracking-wider w-1/3 bg-amber-50/70 border-l border-amber-200 font-bold">
                  <div className="flex items-center gap-1.5">
                    <span>DMJ Engenharia Solar</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4 sm:p-6 font-semibold text-slate-900">
                    {row.criterion}
                  </td>
                  <td className="p-4 sm:p-6 text-slate-600 font-normal">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-slate-800 font-medium bg-amber-50/20 border-l border-amber-200">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.dmj}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Localized Bottom Assurance */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Sede física em Samambaia Sul aberta para visitas técnicas com engenheiro credenciado.</span>
          </div>
          <a
            href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ!%20Gostaria%20de%20agendar%20uma%20conversa%20t%C3%A9cnica."
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 hover:text-amber-700 font-bold underline whitespace-nowrap"
          >
            Falar com a Engenharia no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
