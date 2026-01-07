import { GoogleGenAI } from "@google/genai";

// Fix: Upgraded to gemini-3-pro-preview for complex engineering/STEM reasoning and aligned with API key guidelines
export const askTechnicalAdvisor = async (userQuery: string) => {
  try {
    // Initialize the AI client with the API key directly from environment variables as required
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: userQuery,
      config: {
        systemInstruction: `Você é o Especialista em Engenharia da Gradilcolor Soluções. 
        Seu objetivo é ajudar parceiros técnicos (engenheiros, arquitetos, construtores) a especificarem cercamentos.
        Baseie suas respostas em: 
        1. Gradil 3D (largura 2,50m, alturas de 1,03m a 2,43m, modelos Slim/Standard/Premium).
        2. Totens de Desnível: solução exclusiva para terrenos irregulares e taludes.
        3. Portões e Postes: integração total, corte a laser e encaixes precisos.
        Enfatize que a Gradilcolor fornece o sistema e orientação técnica, mas NÃO realiza instalação.
        Mantenha um tom altamente técnico, consultivo e profissional.`,
        temperature: 0.7,
      },
    });

    // Directly access the text property as per GenerateContentResponse guidelines
    return response.text || "Desculpe, não consegui processar sua dúvida técnica no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro de conexão com o consultor técnico. Por favor, tente novamente mais tarde.";
  }
};