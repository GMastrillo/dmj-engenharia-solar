import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { logger } from "@/lib/logger";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { monthlyBill, sector, recommendedKwPeak, annualSavings } = body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback intelligent diagnostic if API key is not yet set in environment
      return NextResponse.json({
        success: true,
        source: "engine",
        analysis: `Para um consumo no segmento ${sector} com fatura de R$ ${monthlyBill.toLocaleString(
          "pt-BR"
        )}, um sistema de ${recommendedKwPeak} kWp anula praticamente toda a dependência da tarifa da concessionária. Sua economia anual projetada de R$ ${annualSavings.toLocaleString(
          "pt-BR"
        )} garante um retorno sobre o investimento superior a 28% ao ano, protegendo seu patrimônio contra os constantes aumentos de bandeira tarifária e inflação energética.`,
        recommendation:
          "Recomendamos módulos Tier-1 monocristalinos bifaciais com microinversores ou inversor string de alta eficiência com monitoramento WiFi integrado.",
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Você é o consultor de engenharia sênior da DJM Energia Solar.
Gere um parecer executivo ultracurto (máximo 3 frases) e uma recomendação técnica específica para um cliente com os seguintes dados:
- Segmento: ${sector}
- Fatura Mensal: R$ ${monthlyBill}
- Potência Recomendada: ${recommendedKwPeak} kWp
- Economia Anual Prevista: R$ ${annualSavings}

Responda em formato JSON com as chaves: "analysis" (parecer de viabilidade e impacto financeiro) e "recommendation" (sugestão de equipamento e estratégia de conexão).`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim();
    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    const parsed = JSON.parse(text);
    return NextResponse.json({
      success: true,
      source: "gemini",
      analysis: parsed.analysis,
      recommendation: parsed.recommendation,
    });
  } catch (error) {
    logger.error("Error in solar-ai route:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Falha ao processar análise inteligente.",
      },
      { status: 500 }
    );
  }
}
