"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { DmjLogo } from "@/components/ui/dmj-logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "4 Pilares", href: "#pilares" },
    { label: "Oferta R$ 12.900", href: "#oferta" },
    { label: "Simulador Solar", href: "#simulador" },
    { label: "Usinas no DF", href: "#portfolio" },
    { label: "Avaliações Google", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070B14]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Real Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <DmjLogo size="md" />
          <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 pl-3 border-l border-white/[0.1]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Engenharia Homologada • CREA-DF</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.1] hover:border-amber-500/40 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>(61) 9808-6011</span>
          </a>

          <a
            href="#simulador"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all active:scale-95 tracking-tight"
          >
            <span>Simular Economia</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-zinc-300 hover:text-white bg-[#171B22] border border-white/[0.1]"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090A0C]/98 backdrop-blur-2xl border-b border-white/[0.1] px-5 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-zinc-200 hover:text-amber-400 py-1.5 border-b border-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Vim%20pelo%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-[#171B22] border border-white/[0.1]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>(61) 9808-6011</span>
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3.5 rounded-xl font-bold text-zinc-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-xl shadow-amber-500/20"
          >
            Simular Economia Agora
          </a>
        </div>
      )}
    </header>
  );
}
