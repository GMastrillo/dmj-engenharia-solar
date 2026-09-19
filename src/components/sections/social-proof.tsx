"use client";

import React from "react";
import { Star, Award, MapPin, ExternalLink } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  savings: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Eduardo Mendonça",
    role: "Residencial",
    location: "Samambaia Sul — Brasília, DF",
    text: "O calor em Brasília exigia ar-condicionado direto e a conta vinha quase R$ 700 todo mês. A DMJ instalou o kit em 2 dias e cuidou de toda a papelada na Neoenergia. A conta caiu para a taxa mínima de R$ 30.",
    savings: "R$ 7.700/ano economizados",
    rating: 5,
  },
  {
    name: "Renato Alencar",
    role: "Proprietário de Panificadora",
    location: "Taguatinga Norte — DF",
    text: "Forno elétrico e balcões refrigerados consumiam boa parte do lucro. Parcelamos em 21x e a economia na conta já cobre a parcela com folga. Empresa com sede física e equipe muito séria.",
    savings: "R$ 26.400/ano economizados",
    rating: 5,
  },
  {
    name: "Geraldo Magela",
    role: "Produtor Rural & Avicultor",
    location: "Zona Rural — Entorno do DF",
    text: "Nossos aviários e o bombeamento de água dependiam de energia instável e cara. A DMJ fez o projeto de solo com financiamento facilitado. Usina de altíssima produção e suporte técnico de primeira.",
    savings: "R$ 48.000/ano economizados",
    rating: 5,
  },
];

const partners = [
  "WEG Solar",
  "Canadian Solar",
  "Growatt",
  "Deye Inverters",
  "Hoymiles",
  "Jinko Solar",
  "Neoenergia DF",
];

export function SocialProof() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#F8FAFC] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with Google 5-Star Card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono text-amber-700 mb-3 sm:mb-4">
              <Award className="w-3.5 h-3.5 stroke-[2] text-amber-600" />
              <span>REPUTAÇÃO REGIONAL NO DF</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
              A Escolha de Quem Investe em Brasília.
            </h2>
          </div>

          {/* Google Review Card */}
          <a
            href="https://www.google.com/maps/place/DMJ+ENGENHARIA+SOLAR+LTDA/@-15.8848774,-48.0858899,17z/data=!3m1!4b1!4m6!3m5!1s0x935bcdfef3d73e43:0xed370ec8da53de5f!8m2!3d-15.8848774!4d-48.0858899!16s%2Fg%2F11njtndc75?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto p-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-amber-400/80 flex items-center gap-4 shrink-0 shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center font-bold text-white text-xl font-display group-hover:scale-105 transition-transform shrink-0 shadow">
              G
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs text-slate-900 font-bold mt-1 font-mono flex items-center gap-1.5">
                <span>5.0 de Avaliação no Google Maps</span>
              </p>
              <p className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                <span>Ver avaliações no Google Maps</span>
                <ExternalLink className="w-3 h-3 text-amber-600" />
              </p>
            </div>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {item.savings}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 font-mono">{item.role}</p>
                </div>
                <div className="text-[10px] font-mono text-amber-700 flex items-center gap-1 font-semibold">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate max-w-[120px]">{item.location.split("—")[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hardware Tier 1 Partners Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 text-center shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block mb-4 font-semibold">
            EQUIPAMENTOS HOMOLOGADOS & FABRICANTES TIER 1 GLOBAIS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {partners.map((p, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
