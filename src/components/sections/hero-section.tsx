"use client";

import React from "react";
import { ArrowUpRight, MapPin, Calculator, PhoneCall, ShieldCheck, Award } from "lucide-react";
import { SolarCommandHud } from "@/components/ui/solar-command-hud";
import { TelemetryBar } from "./telemetry-bar";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-36 bg-[#070B14] overflow-hidden"
    >
      {/* Radiant Solar Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-amber-500/15 via-sky-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-sky-500/10 blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Statement & Authority */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-300">
                Engenharia Homologada CREA-DF
              </span>
              <span className="text-white/20">|</span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 stroke-[1.5]" />
                Samambaia Sul • DF
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                ENGENHARIA SOLAR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                  DE PRECISÃO.
                </span>
              </h1>
              <div className="mt-2 text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300">
                Energia que Transforma. Economia que Dura.
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
              Projetamos e instalamos usinas fotovoltaicas com responsabilidade técnica no{" "}
              <strong className="text-white font-medium">Distrito Federal e Goiás</strong>. Reduza até{" "}
              <strong className="text-emerald-400 font-mono font-bold">95%</strong> da sua conta de energia com homologação ágil junto à Neoenergia Distribuição Brasília e componentes Tier-1.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#simulador"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-bold text-sm sm:text-base font-mono tracking-tight shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <Calculator className="w-4 h-4 stroke-[2]" />
                <span>Simular Meu Projeto</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Gostaria%20de%20um%20estudo%20t%C3%A9cnico%20para%20meu%20im%C3%B3vel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.12] hover:border-amber-400/30 text-white font-mono text-sm sm:text-base transition-all duration-300 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400 stroke-[1.5]" />
                <span>WhatsApp: (61) 9808-6011</span>
              </a>
            </div>

            {/* Trust Chips */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ART emitida no CREA-DF
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Kits a partir de R$ 12.900
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                Até 21x no Cartão
              </span>
            </div>
          </div>

          {/* Right Column: Solar Command Console HUD */}
          <div className="lg:col-span-5">
            <SolarCommandHud />
          </div>
        </div>
      </div>

      {/* Real DMJ Performance Telemetry Bar */}
      <TelemetryBar />
    </section>
  );
}
