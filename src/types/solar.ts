export type SectorType = "residencial" | "comercial" | "rural" | "industrial";

export interface SolarSimulationInput {
  monthlyBill: number;
  consumptionKwh: number;
  sector: SectorType;
  state: string;
}

export interface SolarSimulationResult {
  monthlySavings: number;
  annualSavings: number;
  paybackYears: number;
  recommendedKwPeak: number;
  panelsCount: number;
  co2TonsAvoided: number;
  twentyFiveYearSavings: number;
}

export interface SolarSolutionItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  benefits: string[];
  metrics: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
