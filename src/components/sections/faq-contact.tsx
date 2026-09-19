"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare, Send, CheckCircle } from "lucide-react";
import { FaqItem } from "@/types/solar";
import { LocationCard } from "./location-card";

const faqList: FaqItem[] = [
  {
    question: "Como funciona a homologação com a Neoenergia Distribuição Brasília?",
    answer:
      "A DMJ Engenharia Solar cuida de 100% da homologação técnica: desde a elaboração do projeto elétrico e diagrama unifilar assinado por engenheiro com ART no CREA-DF, até o protocolo, vistoria técnica e a substituição do medidor convencional pelo relógio bidirecional.",
  },
  {
    question: "Qual o prazo para instalação de um sistema residencial em Brasília/DF?",
    answer:
      "Nossa equipe própria executa a montagem física dos módulos e inversores em apenas 2 a 3 dias úteis. O prazo total, incluindo a aprovação e troca do medidor pela concessionária local, costuma girar entre 15 e 30 dias.",
  },
  {
    question: "Como funciona o parcelamento em até 21x no cartão?",
    answer:
      "Oferecemos condições exclusivas com máquinas e parcerias bancárias para parcelar seu gerador solar completo em até 21x no cartão de crédito, além de financiamentos bancários com até 120 dias de carência onde a parcela se paga com a própria economia gerada.",
  },
  {
    question: "A energia solar funciona em dias chuvosos ou nublados no DF?",
    answer:
      "Sim! Os módulos fotovoltaicos operam através da irradiação da luz e não do calor. Mesmo com o céu nublado ou chuva típica de verão no Planalto Central, o sistema continua gerando eletricidade com radiação difusa.",
  },
  {
    question: "Posso instalar energia solar na minha fazenda ou chácara no Entorno?",
    answer:
      "Com certeza! Possuímos uma linha especializada para a Zona Rural (bombeamento de água, pivôs e granjas) atendendo municípios de Goiás e entorno do DF com suporte a linhas do Plano Safra e Pronaf.",
  },
];

export function FaqContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    const msg = encodeURIComponent(
      `Olá DMJ Engenharia Solar! Meu nome é ${name}, sou de ${city} (telefone: ${phone}). Gostaria de um orçamento para energia solar!`
    );
    window.open(`https://wa.me/556198086011?text=${msg}`, "_blank");
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono text-amber-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>SUPORTE & REGULATÓRIO DF</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
                Tudo o que Você Precisa Saber.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal">
                Respostas diretas sobre homologação Neoenergia, prazos e garantia de economia.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {faqList.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-sm transition-all hover:border-amber-400/60"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-slate-800 hover:text-amber-700 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-600 shrink-0 ml-4 transition-transform duration-200 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <LocationCard />
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border border-amber-300/80 rounded-3xl p-7 sm:p-9 shadow-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-medium border border-amber-300">
                <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                <span>Atendimento Consultivo DMJ</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                Solicite Seu Estudo Técnico Gratuito
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Nossa engenharia analisa sua fatura e elabora um orçamento executivo sob medida em menos de 24 horas.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 shadow-sm">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <div className="text-base font-bold text-slate-900 font-display">
                  Redirecionando para o WhatsApp!
                </div>
                <p className="text-xs text-slate-600 font-normal">
                  Você está sendo conectado com o engenheiro de plantão da DMJ Solar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Ferreira"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(61) 90000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 mb-1.5 uppercase tracking-wider font-semibold">
                    Cidade / Região Administrativa
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Samambaia Sul, Taguatinga, Plano Piloto..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-amber-500 focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 transition-colors shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 transition-all active:scale-95 text-sm tracking-tight"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar para o WhatsApp DMJ</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
