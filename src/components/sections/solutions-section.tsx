"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Tractor,
  Wrench,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SolarSolutionItem } from "@/types/solar";

const solutionsData: Record<string, SolarSolutionItem> = {
  residencial: {
    id: "residencial",
    title: "Energia Solar Residencial",
    subtitle: "Conforto total para sua família com projeto a partir de R$ 12.900",
    iconName: "Home",
    description:
      "A solução ideal para residências em Brasília, Samambaia, Taguatinga e todo o DF. Ligue o ar-condicionado sem peso na consciência e valorize seu imóvel. Instalação rápida, limpa e segura com equipamentos Tier-1.",
    benefits: [
      "Pacote completo instalado e homologado por R$ 12.900",
      "Parcelamento exclusivo em até 21x no cartão de crédito",
      "Economia imediata de até 95% na conta de luz",
      "Monitoramento por aplicativo no smartphone 24 horas por dia",
    ],
    metrics: "Economia média: R$ 6.000 a R$ 24.000 / ano",
  },
  comercial: {
    id: "comercial",
    title: "Comércio & Serviços",
    subtitle: "Aumente sua lucratividade eliminando o segundo maior custo fixo",
    iconName: "Building2",
    description:
      "Perfeito para padarias, farmácias, clínicas, restaurantes e lojas em geral. Converta a despesa mensal com concessionária em lucro líquido reinvestido no crescimento do seu negócio.",
    benefits: [
      "Redução direta do Custo de Mercadorias Vendidas (CMV)",
      "Projetos personalizados dimensionados para o pico comercial",
      "Financiamento com parcelas menores que a conta de luz",
      "Selo de Empresa Sustentável com energia 100% limpa",
    ],
    metrics: "Economia média: R$ 20.000 a R$ 120.000 / ano",
  },
  rural: {
    id: "rural",
    title: "Linha Especial Zona Rural",
    subtitle: "Produtividade sustentável para pivôs, irrigação e granjas",
    iconName: "Tractor",
    description:
      "Soluções de alta potência para o agronegócio do Distrito Federal e Goiás. Projetos especializados para bombeamento solar, aviários, suinocultura, ordenhas e pivôs de irrigação, reduzindo custos com diesel e rede cara.",
    benefits: [
      "Linhas de crédito facilitadas (Pronaf, FCO e Plano Safra)",
      "Eliminação de geradores a diesel de alto custo",
      "Sistemas de solo ou cobertura com estrutura resistente",
      "Assistência técnica especializada em campo",
    ],
    metrics: "Economia média: R$ 35.000 a R$ 300.000+ / ano",
  },
  manutencao: {
    id: "manutencao",
    title: "Instalação, Homologação & Manutenção",
    subtitle: "Os 4 pilares de engenharia que garantem a segurança do seu patrimônio",
    iconName: "Wrench",
    description:
      "Nossa equipe de engenheiros elétricos assume todo o processo: projeto executivo, emissão de ART, protocolo na concessionária (Neoenergia), vistoria técnica e manutenção preventiva periódica.",
    benefits: [
      "Engenharia credenciada no CREA-DF",
      "Homologação express sem dor de cabeça ou burocracia",
      "Limpeza técnica e inspeção termográfica de módulos",
      "Suporte e garantia com frota técnica própria no DF",
    ],
    metrics: "100% de Aprovação em Concessionárias",
  },
};

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<string>("residencial");
  const current = solutionsData[activeTab];

  const getTabIcon = (key: string) => {
    switch (key) {
      case "residencial":
        return <Home className="w-4 h-4" />;
      case "comercial":
        return <Building2 className="w-4 h-4" />;
      case "rural":
        return <Tractor className="w-4 h-4" />;
      case "manutencao":
        return <Wrench className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section id="solucoes" className="py-20 md:py-28 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engenharia Especializada DMJ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluções Completas para Cada Perfil
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Projetos personalizados, instalação profissional e manutenção preventiva com frota própria em Brasília e Entorno.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-slate-950/80 border border-slate-800 rounded-2xl gap-1">
            {Object.keys(solutionsData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold capitalize transition-all ${
                  activeTab === key
                    ? "text-slate-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === key && (
                  <motion.div
                    layoutId="activeSolutionTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {getTabIcon(key)}
                  {key === "manutencao" ? "Engenharia & Suporte" : key}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-950 border border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {current.metrics}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {current.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/556198086011?text=${encodeURIComponent(
                    `Olá DMJ Engenharia Solar! Gostaria de consultar sobre a solução: ${current.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 group"
                >
                  <span>Solicitar estudo técnico para {current.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-center space-y-4">
              <div className="text-sm font-bold text-white border-b border-slate-800 pb-3">
                Pilares Oficiais da Fachada DMJ
              </div>
              <ul className="text-xs space-y-3 text-slate-300">
                <li className="flex justify-between">
                  <span className="text-slate-400">☀️ Tecnologia:</span>
                  <span className="font-semibold text-white">Fotovoltaica Tier-1</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">📋 Projetos:</span>
                  <span className="font-semibold text-amber-400">100% Personalizados</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">🔑 Conexão:</span>
                  <span className="font-semibold text-emerald-400">Instalação & Homologação</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">⚙️ Pós-venda:</span>
                  <span className="font-semibold text-white">Manutenção & Telemetria</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
