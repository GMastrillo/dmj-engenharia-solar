"use client";

import React, { useState } from "react";
import { ArrowUpRight, MapPin, Calculator, PhoneCall, ShieldCheck, Award, Sparkles } from "lucide-react";
import { SolarPanelReflector } from "@/components/ui/solar-panel-reflector";
import { TelemetryBar } from "./telemetry-bar";

export function HeroSection() {
  const [isReflecting, setIsReflecting] = useState(false);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 md:pt-36 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Radiant Solar Background Glows for Light Theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-amber-300/30 via-sky-200/25 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-200/30 blur-[130px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Brand Statement & Authority */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-700 font-semibold">
                Engenharia Homologada CREA-DF
              </span>
              <span className="text-slate-300">|</span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-amber-600 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3 stroke-[2]" />
                Samambaia Sul • DF
              </span>
            </div>

            {/* Main Headline with Solar Reflection Target */}
            <div className="relative">
              {/* Dynamic Luminous Sheen Sweeping Across the Title from the Solar Panel */}
              <div
                className={`absolute -inset-x-6 -inset-y-3 pointer-events-none transition-opacity duration-500 rounded-3xl ${
                  isReflecting ? "opacity-100" : "opacity-35"
                }`}
                style={{
                  background:
                    "radial-gradient(ellipse at 85% 50%, rgba(251, 191, 36, 0.35) 0%, rgba(255, 255, 255, 0.6) 35%, transparent 75%)",
                  filter: "blur(8px)",
                }}
              />

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-[54px] font-display font-black tracking-tight text-slate-900 leading-[1.1] relative">
                <span className="block text-slate-900">ENGENHARIA SOLAR</span>
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">
                  DE PRECISÃO.
                  {/* Subtle Interactive Solar Flare Ping on the Word */}
                  {isReflecting && (
                    <Sparkles className="inline-block ml-2 w-5 h-5 text-amber-500 animate-bounce" />
                  )}
                </span>
              </h1>

              <div className="mt-3 text-lg sm:text-xl md:text-2xl font-display font-medium text-slate-700">
                Energia que Transforma. Economia que Dura.
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Projetamos e instalamos usinas fotovoltaicas com responsabilidade técnica no{" "}
              <strong className="text-slate-900 font-semibold">Distrito Federal e Goiás</strong>. Reduza até{" "}
              <strong className="text-emerald-600 font-mono font-bold">95%</strong> da sua conta de energia com homologação ágil junto à Neoenergia Distribuição Brasília e componentes Tier-1.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#simulador"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-bold text-sm sm:text-base font-mono tracking-tight shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <Calculator className="w-4 h-4 stroke-[2]" />
                <span>Simular Meu Projeto</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Gostaria%20de%20um%20estudo%20t%C3%A9cnico%20para%20meu%20im%C3%B3vel."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300/90 hover:border-emerald-500/80 text-slate-800 font-mono text-sm sm:text-base shadow-sm transition-all duration-300 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600 stroke-[1.5]" />
                <span>WhatsApp: (61) 9808-6011</span>
              </a>
            </div>

            {/* Trust Chips */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                ART emitida no CREA-DF
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-600" />
                Kits a partir de R$ 12.900
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Até 21x no Cartão
              </span>
            </div>
          </div>

          {/* Right Column: 3D Solar Panel Reflector with Beam onto Name */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md xl:max-w-lg">
              <SolarPanelReflector onHoverReflection={setIsReflecting} />
            </div>
          </div>
        </div>
      </div>

      {/* Real DMJ Performance Telemetry Bar */}
      <TelemetryBar />
    </section>
  );
}
