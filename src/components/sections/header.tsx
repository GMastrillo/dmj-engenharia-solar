"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
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
    { label: "Simulador", href: "#simulador" },
    { label: "Usinas DF", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070B14]/90 backdrop-blur-xl border-b border-white/[0.08] py-2.5 shadow-2xl shadow-black/80"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Real Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <DmjLogo size="md" />
        </a>

        {/* Centered Desktop Nav Pill */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 px-3 xl:px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-inner shadow-white/[0.02]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 xl:px-3 py-1 text-xs xl:text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-white/[0.05] rounded-full transition-all duration-200 tracking-tight whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons Group (Isolated on the Right) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <a
            href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-emerald-500/40 transition-all shadow-sm whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>(61) 9808-6011</span>
          </a>

          <a
            href="#simulador"
            className="group relative inline-flex items-center gap-1.5 px-3.5 xl:px-5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all active:scale-95 tracking-tight whitespace-nowrap"
          >
            <span>Simular Economia</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-[#0F172A] border border-white/[0.1]"
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
