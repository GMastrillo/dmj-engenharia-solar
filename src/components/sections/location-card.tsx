import React from "react";
import { MapPin, ExternalLink, Phone } from "lucide-react";

export function LocationCard() {
  return (
    <div id="localizacao" className="mt-8 p-6 rounded-3xl bg-[#0F172A]/80 border border-white/[0.08] space-y-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Sede DMJ Engenharia Solar</span>
        </div>
        <a
          href="https://www.google.com/maps/place/DMJ+ENGENHARIA+SOLAR+LTDA/@-15.8848774,-48.0858899,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-amber-400 hover:text-amber-300"
        >
          <span>Abrir no Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed font-light">
        QS 120, Samambaia Sul (Edifício Fast Cowork) — Brasília, DF. Atendemos todo o Distrito Federal e Entorno.
      </p>
      <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-300 pt-1">
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-emerald-400" /> (61) 9808-6011
        </span>
        <span className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-emerald-400" /> (61) 98356-1786
        </span>
      </div>
    </div>
  );
}
