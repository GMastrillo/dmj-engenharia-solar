"use client";

import React, { useState } from "react";
import { MapPin, Zap, TrendingUp, ExternalLink } from "lucide-react";

interface ProjectCase {
  id: string;
  category: "residencial" | "comercial" | "agro";
  title: string;
  location: string;
  kwp: string;
  modules: string;
  hardware: string;
  savings: string;
  status: string;
}

const projects: ProjectCase[] = [
  {
    id: "1",
    category: "residencial",
    title: "Residência Sobrado",
    location: "Samambaia Sul — Brasília, DF",
    kwp: "5.50 kWp",
    modules: "10x Módulos 550W Monocristalinos",
    hardware: "Inversor Growatt WiFi 5kW",
    savings: "R$ 680,00 / mês economizados",
    status: "Conectado à Neoenergia DF",
  },
  {
    id: "2",
    category: "comercial",
    title: "Panificadora & Confeitaria",
    location: "Taguatinga Norte — DF",
    kwp: "18.20 kWp",
    modules: "34x Módulos Canadian Solar",
    hardware: "Inversor Trifásico Deye 15kW",
    savings: "R$ 2.250,00 / mês economizados",
    status: "Conectado à Neoenergia DF",
  },
  {
    id: "3",
    category: "agro",
    title: "Granja & Bombeamento Rural",
    location: "Cristalina — Entorno DF/GO",
    kwp: "45.00 kWp",
    modules: "82x Módulos Bifaciais de Solo",
    hardware: "Inversor Central WEG Solar",
    savings: "R$ 5.800,00 / mês economizados",
    status: "Operação Contínua Agro",
  },
  {
    id: "4",
    category: "comercial",
    title: "Clínica Médica Integrada",
    location: "Asa Sul — Plano Piloto, DF",
    kwp: "12.60 kWp",
    modules: "24x Módulos Tier 1 de Alta Eficiência",
    hardware: "Microinversores Hoymiles",
    savings: "R$ 1.540,00 / mês economizados",
    status: "Conectado à Neoenergia DF",
  },
  {
    id: "5",
    category: "residencial",
    title: "Condomínio Residencial Fechado",
    location: "Vicente Pires — DF",
    kwp: "8.80 kWp",
    modules: "16x Módulos Jinko Solar",
    hardware: "Inversor Growatt Híbrido",
    savings: "R$ 1.050,00 / mês economizados",
    status: "Conectado à Neoenergia DF",
  },
  {
    id: "6",
    category: "agro",
    title: "Pivô de Irrigação & Chácara",
    location: "Luziânia — Entorno de Brasília",
    kwp: "32.00 kWp",
    modules: "58x Módulos Estrutura Metálica",
    hardware: "Inversor Deye Industrial",
    savings: "R$ 3.900,00 / mês economizados",
    status: "Operação Contínua Agro",
  },
];

export function DfPortfolio() {
  const [filter, setFilter] = useState<string>("todos");

  const filtered = filter === "todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#070B14] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>USINAS EM OPERAÇÃO NO DF E GOIÁS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Projetos Reais Conectados à Rede.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 font-light">
              Mais de 300 usinas instaladas com responsabilidade técnica por engenheiros da DMJ em todo o Planalto Central.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "todos", label: "Todas as Usinas" },
              { id: "residencial", label: "Residencial DF" },
              { id: "comercial", label: "Comércio DF" },
              { id: "agro", label: "Agronegócio GO/DF" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  filter === btn.id
                    ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40"
                    : "bg-[#0F172A]/80 text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0A0F1D]/90 border border-white/[0.08] p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-amber-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.kwp}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-300 font-light mb-5">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.hardware}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{item.modules}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.savings}</span>
                </div>

                <a
                  href={`https://wa.me/556198086011?text=Ol%C3%A1%20DMJ!%20Vi%20o%20projeto%20de%20${encodeURIComponent(item.location)}%20e%20gostaria%20de%20um%20similar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/[0.04] text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-all"
                  aria-label="Ver similar no WhatsApp"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
