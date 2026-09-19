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
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-2.5 shadow-sm shadow-slate-900/5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Real Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <DmjLogo size="md" variant="light" />
        </a>

        {/* Centered Desktop Nav Pill */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 px-3 xl:px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/90 backdrop-blur-md shadow-inner shadow-slate-900/5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 xl:px-3 py-1 text-xs xl:text-sm font-medium text-slate-700 hover:text-amber-600 hover:bg-white rounded-full transition-all duration-200 tracking-tight whitespace-nowrap"
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
            className="inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs font-mono text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300/90 hover:border-emerald-500/80 transition-all shadow-sm whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
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
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-sm"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-5 pt-4 pb-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-800 hover:text-amber-600 py-1.5 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/556198086011?text=Ol%C3%A1%20DMJ%20Engenharia%20Solar!%20Vim%20pelo%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-mono text-sm font-semibold text-slate-800 bg-slate-50 border border-slate-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>(61) 9808-6011</span>
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-xl shadow-amber-500/20"
          >
            Simular Economia Agora
          </a>
        </div>
      )}
    </header>
  );
}
