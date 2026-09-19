# DMJ Engenharia Solar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the web application to represent the real company **DMJ ENGENHARIA SOLAR LTDA** (CNPJ 63.311.074/0001-69, Brasília/DF), integrating authentic branding from the storefront, fleet, and marketing collateral (+300 projetos, +1 MW instalado, R$ 12.900 kit offer, 21x no cartão, 4 pilares de fachada, telefones (61) 9808-6011 e (61) 98356-1786, localização Samambaia Sul/DF).

**Architecture:** Next.js 16 App Router with TypeScript strict mode, Tailwind CSS luxury obsidian & solar gold theme, Lenis + GSAP ScrollTrigger, Three.js 3D solar module canvas, Framer Motion transitions, and ESLint quality gates (MAX_LINES=350, zero lint warnings).

**Tech Stack:** Next.js, React 19, TypeScript, Tailwind CSS, GSAP, Lenis, Framer Motion, Three.js, Lucide Icons, Google Gemini AI SDK.

## Global Constraints
- Maximum 350 lines per file (enforced by `quality/max-lines`).
- Zero ESLint errors and zero ESLint warnings (`npm run lint` must pass cleanly).
- TypeScript strict typing (no `any`).
- Animation and 3D layers strictly isolated within `"use client"`.
- Real company data: DMJ ENGENHARIA SOLAR LTDA, CNPJ 63.311.074/0001-69, WhatsApp (61) 9808-6011 and (61) 98356-1786, Instagram @dmjengenhariasolar, Fast Cowork QS 120 Samambaia Sul, Brasília - DF.

---

### Task 1: Update Brand Identity, Types, Config and Package Metadata
**Files:**
- Modify: `package.json`
- Modify: `src/types/solar.ts`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update package.json name to "dmj-engenharia-solar"**
- [ ] **Step 2: Update `src/types/solar.ts` with DMJ specific offer interfaces**
- [ ] **Step 3: Update `src/app/layout.tsx` with DMJ Engenharia Solar metadata, SEO titles, and schema.org markup**
- [ ] **Step 4: Verify types and linting**

### Task 2: Create Custom SVG Logo Component (`DmjLogo`)
**Files:**
- Create: `src/components/ui/dmj-logo.tsx`

- [ ] **Step 1: Implement SVG matching the physical facade & collateral (Sun radiating on the left of blue solar panel grid, bold "DMJ" with bright yellow "J", and "ENGENHARIA SOLAR" subtitle)**
- [ ] **Step 2: Add responsive size variants (sm, md, lg)**
- [ ] **Step 3: Test and ensure zero lint warnings**

### Task 3: Overhaul Header and Hero Section
**Files:**
- Modify: `src/components/sections/header.tsx`
- Modify: `src/components/sections/hero-section.tsx`
- Modify: `src/components/sections/hero-stats.tsx`

- [ ] **Step 1: Integrate `DmjLogo` and real WhatsApp numbers `(61) 9808-6011` into `Header`**
- [ ] **Step 2: Update `HeroSection` headline with official slogan ("Energia que Transforma. Economia que Dura.")**
- [ ] **Step 3: Update `HeroStats` with real verified metrics: "+300 Projetos Instalados", "+1 MW de Potência", "100% Homologado", "Até 95% de Economia"**
- [ ] **Step 4: Verify with `npm run lint`**

### Task 4: Add Special Campaign Promotion & Enhance Calculator
**Files:**
- Create: `src/components/sections/promo-banner.tsx`
- Modify: `src/components/sections/calculator/calculator-controls.tsx`
- Modify: `src/components/sections/calculator/calculator-results.tsx`
- Modify: `src/components/sections/solar-calculator.tsx`

- [ ] **Step 1: Create `promo-banner.tsx` featuring the real campaign: "Projeto Completo por apenas R$ 12.900,00 instalado e homologado • Em até 21x no cartão"**
- [ ] **Step 2: Add the real bill reduction proof card in calculator results: "Exemplo Real: De R$ 567,48 para taxa mínima de R$ 28,37 (Economia de 95%)"**
- [ ] **Step 3: Update WhatsApp direct conversion link with DMJ commercial WhatsApp `(61) 9808-6011`**

### Task 5: Align Solutions with the 4 Facade Pillars & Rural Line
**Files:**
- Modify: `src/components/sections/solutions-section.tsx`

- [ ] **Step 1: Incorporate the 4 core pillars displayed on the store facade: 1. Energia Solar Fotovoltaica, 2. Projetos Personalizados, 3. Instalação e Homologação, 4. Manutenção e Suporte**
- [ ] **Step 2: Emphasize the dedicated "Zona Rural" line (irrigação, pivôs, granjas, ordenhas, financiamento Pronaf/Plano Safra)**
- [ ] **Step 3: Ensure Framer Motion tabs stay responsive and clean under 350 lines**

### Task 6: Overhaul FAQ, Location Map, and Footer
**Files:**
- Modify: `src/components/sections/faq-contact.tsx`
- Modify: `src/components/sections/footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add interactive Google Maps iframe embed pointing to DMJ ENGENHARIA SOLAR LTDA in Samambaia Sul / Brasília DF**
- [ ] **Step 2: Update contact details in `faq-contact.tsx` and `footer.tsx`: Phones `(61) 9808-6011`, `(61) 98356-1786`, Instagram `@dmjengenhariasolar`, CNPJ `63.311.074/0001-69`**
- [ ] **Step 3: Update `page.tsx` to mount `PromoBanner` seamlessly**

### Task 7: Quality Gates Verification & Production Build
- [ ] **Step 1: Run `npm run lint` and verify 0 errors, 0 warnings, and all files <= 350 lines**
- [ ] **Step 2: Run `npm run build` and verify Turbopack production compilation succeeds**

### Task 8: End-to-End Browser Testing via Browser Subagent
- [ ] **Step 1: Launch browser subagent to visit `http://localhost:3000`**
- [ ] **Step 2: Verify DMJ logo, headline, promo banner, 3D model, calculator, solutions, and map**
- [ ] **Step 3: Capture screenshots and confirm 0 console errors**
