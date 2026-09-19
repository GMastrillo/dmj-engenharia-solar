import React from "react";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { DmjLogo } from "@/components/ui/dmj-logo";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-100/90 border-t border-slate-200/90 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <DmjLogo size="sm" variant="light" />
            <p className="text-slate-600 font-normal leading-relaxed">
              Energia que Transforma. Economia que Dura. Soluções completas de engenharia solar fotovoltaica para residências, comércio e zona rural no Distrito Federal e Goiás.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Engenharia Homologada • CREA-DF</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              CNPJ: 63.311.074/0001-69 • D M J ENGENHARIA SOLAR LTDA
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="font-mono font-bold text-slate-900 uppercase tracking-wider text-xs">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#pilares" className="hover:text-amber-600 transition-colors">
                  Os 4 Pilares da Engenharia
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-amber-600 transition-colors">
                  Projeto R$ 12.900 (21x Cartão)
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-600 transition-colors">
                  Simulador & Arquiteto Solar
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-600 transition-colors">
                  Usinas Conectadas no DF
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-600 transition-colors">
                  Avaliações Google Maps (5.0)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-600 transition-colors">
                  Sede em Samambaia Sul / DF
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-600 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Segmentos */}
          <div className="space-y-3">
            <div className="font-mono font-bold text-slate-900 uppercase tracking-wider text-xs">
              Especialidades
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>Energia Solar Residencial (Casas & Sobrados)</li>
              <li>Comércio, Padarias, Mercados & Clínicas</li>
              <li>Zona Rural, Pivôs de Irrigação & Granjas</li>
              <li>Projetos Personalizados & Manutenção</li>
            </ul>
          </div>

          {/* Col 4: Contato Oficial */}
          <div className="space-y-3">
            <div className="font-mono font-bold text-slate-900 uppercase tracking-wider text-xs">
              Contatos Oficiais
            </div>
            <ul className="space-y-2.5 font-mono text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>(61) 9808-6011 (WhatsApp Matriz)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span>(61) 98356-1786 (Vendas DF)</span>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-600 shrink-0" />
                <a
                  href="https://instagram.com/dmjengenhariasolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600"
                >
                  @dmjengenhariasolar
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-sans">contato@dmjengenhariasolar.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="font-sans">QS 120, Samambaia Sul (Fast Cowork) — Brasília, DF</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} DMJ Engenharia Solar Ltda. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-slate-600 font-medium">
            Brasília - DF • Energia que Transforma. Economia que Dura.
          </p>
        </div>
      </div>
    </footer>
  );
}
