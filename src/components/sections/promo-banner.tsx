import React from "react";
import { Sparkles, CreditCard, CheckCircle2, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function PromoBanner() {
  const whatsappOffer = encodeURIComponent(
    "Olá DMJ Engenharia Solar! Vi a oferta do Projeto Completo por R$ 12.900,00 instalado e homologado em até 21x no cartão. Gostaria de saber se meu telhado é compatível!"
  );

  return (
    <section id="oferta" className="py-12 sm:py-16 bg-white border-y border-slate-200/80 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 border border-amber-300/70 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-800 text-xs font-mono font-medium tracking-wide border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>OPORTUNIDADE REGIONAL • DMJ SOLAR</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Projeto Completo Instalado e Homologado por apenas{" "}
              <span className="text-amber-600">R$ 12.900,00</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              Chega de pagar caro na conta de energia! Garanta seu gerador solar residencial completo, com instalação profissional pela equipe técnica da DMJ e homologação 100% inclusa junto à concessionária.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
                <CreditCard className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Até <strong>21x no cartão</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Homologação inclusa</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
                <Zap className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Retorno garantido</span>
              </div>
            </div>
          </div>

          {/* Right Column: CTA Card */}
          <div className="lg:col-span-4 bg-white border border-amber-300/90 rounded-2xl p-6 text-center space-y-4 shadow-lg">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Condições Exclusivas de Engenharia
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-amber-600">
              R$ 12.900<span className="text-sm font-normal text-slate-500">,00</span>
            </div>
            <div className="text-xs font-mono text-slate-600 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Pronto para gerar economia imediata</span>
            </div>

            <a
              href={`https://wa.me/556198086011?text=${whatsappOffer}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-slate-950 font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95 text-xs sm:text-sm font-mono tracking-tight"
            >
              <span>Garantir Condição no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="text-[11px] font-mono text-slate-500">
              Atendimento ágil: (61) 9808-6011 ou (61) 98356-1786
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
