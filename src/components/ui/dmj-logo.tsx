import React from "react";

interface DmjLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function DmjLogo({ className = "", size = "md", variant = "light" }: DmjLogoProps) {
  const sizeMap = {
    sm: { height: 34, iconSize: 32, titleClass: "text-lg", subClass: "text-[8px]" },
    md: { height: 44, iconSize: 42, titleClass: "text-2xl", subClass: "text-[10px]" },
    lg: { height: 56, iconSize: 52, titleClass: "text-3xl", subClass: "text-xs" },
  };

  const { iconSize, titleClass, subClass } = sizeMap[size];
  const isLight = variant === "light";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Sun + Solar Grid Emblem */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        {/* Sun rays */}
        <circle cx="38" cy="45" r="16" fill="#F59E0B" />
        <path d="M38 12 L41 20 L35 20 Z" fill="#FBBF24" />
        <path d="M15 28 L23 32 L20 26 Z" fill="#FBBF24" />
        <path d="M10 48 L18 50 L18 44 Z" fill="#FBBF24" />
        <path d="M16 68 L24 64 L21 70 Z" fill="#FBBF24" />
        <path d="M36 78 L39 70 L33 70 Z" fill="#FBBF24" />

        {/* Angled Solar Panel Module Grid */}
        <polygon
          points="36,36 86,26 82,68 32,74"
          fill="#1E40AF"
          stroke="#60A5FA"
          strokeWidth="2"
        />
        {/* Grid lines */}
        <line x1="52" y1="33" x2="48" y2="72" stroke="#93C5FD" strokeWidth="1.5" />
        <line x1="69" y1="29" x2="65" y2="70" stroke="#93C5FD" strokeWidth="1.5" />
        <line x1="34" y1="55" x2="84" y2="47" stroke="#93C5FD" strokeWidth="1.5" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className={`font-black tracking-wider flex items-center ${titleClass}`}>
          <span className={isLight ? "text-slate-900" : "text-white"}>DM</span>
          <span className="text-amber-500">J</span>
        </div>
        <span
          className={`font-extrabold uppercase tracking-[0.22em] ${
            isLight ? "text-amber-600" : "text-amber-400/90"
          } ${subClass} mt-0.5`}
        >
          ENGENHARIA SOLAR
        </span>
      </div>
    </div>
  );
}
