"use client";

import React, { useRef, useState } from "react";
import { Home, Tractor, ShieldCheck, Activity, CheckCircle2, ArrowRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  badge: string;
  className?: string;
  roiTag: string;
}

function BentoCard({
  title,
  category,
  description,
  features,
  icon,
  badge,
  className = "",
  roiTag,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-[#171B22]/70 border border-white/[0.08] p-5 sm:p-7 md:p-8 transition-all duration-300 backdrop-blur-xl group hover:border-amber-500/40 hover:-translate-y-1 ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.12), transparent 80%)`,
          }}
        />
      )}

      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6">
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-300">
              {icon}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {badge}
              </span>
            </div>
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-1">
            {category}
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-5">
            {description}
          </p>

          <ul className="space-y-2 mb-6">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-[11px] font-mono text-emerald-400 font-medium">
            {roiTag}
          </span>
          <a
            href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 group-hover:text-amber-400 transition-colors"
          >
            <span>Consultar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section id="setores" className="py-16 sm:py-24 md:py-32 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-amber-400 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>SOLUÇÕES DE ENGENHARIA DMJ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Engenharia Customizada para Cada Demanda no DF.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 font-light">
            De residências e comércios a usinas agroindustriais, dimensionamos a planta exata para o seu consumo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          <BentoCard
            className="lg:col-span-7"
            category="ALTA PERFORMANCE RESIDENCIAL & COMERCIAL"
            title="Economia Imediata de até 95% na Fatura"
            description="Dimensionamento personalizado para residências, clínicas, mercados e comércios em Brasília e Entorno. Livre-se da dependência de bandeiras tarifárias e aumentos da concessionária."
            features={[
              "Projeto completo instalado e homologado por apenas R$ 12.900,00",
              "Parcelamento facilitado em até 21x no cartão de crédito",
              "Inversores de alta eficiência com telemetria WiFi integrada",
            ]}
            icon={<Home className="w-6 h-6" />}
            badge="+300 PROJETOS"
            roiTag="PAYBACK MÉDIO ~3 ANOS"
          />

          <BentoCard
            className="lg:col-span-5"
            category="AGRONEGÓCIO DF & GO"
            title="Linha Especial para a Zona Rural"
            description="Robustez para pivôs de irrigação, granjas de aves e suínos, ordenhas e bombeamento solar. Elimine o custo elevado de geradores a diesel."
            features={[
              "Linhas de crédito facilitadas (Pronaf, FCO e Plano Safra)",
              "Sistemas de solo e coberturas com estrutura resistente",
              "Engenheiros eletricistas presentes na execução",
            ]}
            icon={<Tractor className="w-6 h-6" />}
            badge="AGRO FORTE"
            roiTag="REDUÇÃO DE CUSTO FIXO"
          />

          <BentoCard
            className="lg:col-span-5"
            category="HOMOLOGAÇÃO EXPRESS"
            title="100% Homologado na Neoenergia DF"
            description="Assumimos todo o processo: projeto elétrico com ART no CREA-DF, protocolo digital, acompanhamento da vistoria e troca do medidor bidirecional sem burocracia."
            features={[
              "Responsabilidade técnica por Engenheiro Eletricista",
              "Trâmite 100% digital e ágil com a concessionária",
              "Garantia formal de aprovação sem pendências",
            ]}
            icon={<ShieldCheck className="w-6 h-6" />}
            badge="CREA-DF"
            roiTag="ZERO BUROCRACIA"
          />

          <BentoCard
            className="lg:col-span-7"
            category="TELEMETRIA EM TEMPO REAL"
            title="Monitoramento Inteligente na Palma da Mão"
            description="Acompanhe pelo celular a produção de energia, economia diária acumulada em Reais e o status de saúde de cada painel do seu sistema com suporte técnico local no DF."
            features={[
              "Módulos fotovoltaicos Tier-1 com 25 anos de garantia linear",
              "Assistência técnica com frota própria em Brasília e Entorno",
              "Manutenção preventiva e limpeza técnica especializada",
            ]}
            icon={<Activity className="w-6 h-6" />}
            badge="APP MOBILE 24/7"
            roiTag="25 ANOS DE GARANTIA"
          />
        </div>
      </div>
    </section>
  );
}
