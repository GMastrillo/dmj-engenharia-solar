"use client";

import React, { useState } from "react";
import { Sparkles, Sun, ShieldCheck, Zap } from "lucide-react";

interface SolarPanelReflectorProps {
  onHoverReflection?: (isHovered: boolean) => void;
}

export function SolarPanelReflector({ onHoverReflection }: SolarPanelReflectorProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCellIndex, setActiveCellIndex] = useState<number | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverReflection?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveCellIndex(null);
    onHoverReflection?.(false);
  };

  // 6x10 Half-cell Photovoltaic Grid Array
  const cells = Array.from({ length: 60 });

  return (
    <div
      className="relative group w-full max-w-lg mx-auto select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Solar Glow Behind the Module */}
      <div
        className={`absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-400/20 via-sky-400/25 to-yellow-300/30 blur-2xl transition-all duration-700 pointer-events-none ${
          isHovered ? "opacity-100 scale-105" : "opacity-60"
        }`}
      />

      {/* Luminous Directional Light Beam / Ray Projecting towards the Headline on the Left */}
      <div
        className={`absolute top-1/3 -left-32 sm:-left-56 md:-left-72 w-56 sm:w-80 md:w-96 h-28 sm:h-36 pointer-events-none transition-all duration-700 z-20 ${
          isHovered ? "opacity-100 scale-105" : "opacity-75"
        }`}
        style={{
          transform: "rotate(-12deg)",
          background:
            "linear-gradient(90deg, rgba(251,191,36,0) 0%, rgba(245,158,11,0.18) 40%, rgba(255,255,255,0.7) 95%, rgba(255,255,255,0.95) 100%)",
          filter: "blur(14px)",
        }}
      />

      {/* Secondary Concentrated Sun Flare Core */}
      <div
        className={`absolute top-1/4 -left-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 shadow-[0_0_40px_rgba(251,191,36,0.9)] transition-all duration-500 z-30 pointer-events-none ${
          isHovered ? "scale-125 opacity-100" : "scale-100 opacity-80"
        }`}
      />

      {/* 3D Angled Photovoltaic Solar Panel Module Container */}
      <div
        className="relative rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 p-2.5 sm:p-3.5 shadow-2xl shadow-slate-900/15 border border-slate-300/80 transition-transform duration-500 ease-out"
        style={{
          transform: isHovered
            ? "perspective(1000px) rotateX(8deg) rotateY(-10deg) scale(1.02)"
            : "perspective(1000px) rotateX(12deg) rotateY(-14deg)",
        }}
      >
        {/* Anodized Aluminum Outer Bezel / Frame */}
        <div className="relative rounded-xl overflow-hidden bg-[#0A1128] border-2 border-slate-400/60 shadow-inner">
          {/* Glass Surface Specular Reflection Sheen */}
          <div
            className={`absolute inset-0 pointer-events-none z-10 transition-transform duration-1000 bg-gradient-to-tr from-transparent via-white/25 to-amber-200/30 ${
              isHovered ? "translate-x-full -translate-y-full" : "-translate-x-full translate-y-full"
            }`}
            style={{
              transitionDuration: "1200ms",
            }}
          />

          {/* Sun Ray Diagonal Glare Overlay */}
          <div className="absolute -inset-10 bg-gradient-to-b from-sky-400/10 via-amber-300/15 to-transparent pointer-events-none z-10" />

          {/* Photovoltaic Cells Grid (Monocrystalline Silicon Look) */}
          <div className="grid grid-cols-6 gap-[2px] p-2 bg-slate-900/90 relative">
            {cells.map((_, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveCellIndex(i)}
                className={`relative h-7 sm:h-9 rounded-[2px] transition-all duration-200 overflow-hidden cursor-crosshair ${
                  activeCellIndex === i
                    ? "bg-gradient-to-b from-sky-500 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.8)]"
                    : "bg-gradient-to-b from-[#0F1D38] via-[#0A162C] to-[#070F20]"
                }`}
              >
                {/* Cell Conductive Busbars (Silver Micro-Traces) */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-400/30" />
                <div className="absolute inset-y-0 left-1/3 -translate-x-1/2 w-[1px] bg-slate-400/35" />
                <div className="absolute inset-y-0 left-2/3 -translate-x-1/2 w-[1px] bg-slate-400/35" />

                {/* Anti-reflective silicon texture shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-400/5 to-transparent opacity-70" />
              </div>
            ))}
          </div>

          {/* Central Module Junction Rib */}
          <div className="h-1 w-full bg-slate-700/80 border-y border-slate-600/40" />

          {/* Technical Specifications Badge on the Aluminum Bezel */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 text-[10px] font-mono text-slate-300 border-t border-slate-700/60">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Sun className="w-3.5 h-3.5 animate-spin-slow" />
              <span>MÓDULO TIER-1 N-TYPE 580W</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Sparkles className="w-3 h-3" />
              <span>Eficiência 22.8%</span>
            </span>
          </div>
        </div>

        {/* Realistic Module Corner Mount Clamps */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 rounded-sm bg-slate-400 border border-slate-500 shadow" />
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-sm bg-slate-400 border border-slate-500 shadow" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-sm bg-slate-400 border border-slate-500 shadow" />
        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-sm bg-slate-400 border border-slate-500 shadow" />
      </div>

      {/* Floating Interactive Micro-HUD Under the Panel */}
      <div className="mt-4 flex items-center justify-between px-3 py-2 rounded-xl bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md text-xs font-mono text-slate-600">
        <span className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          <span>Reflexão Solar Ativa</span>
        </span>
        <span className="flex items-center gap-1.5 text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Garantia 25 Anos DMJ</span>
        </span>
      </div>
    </div>
  );
}
