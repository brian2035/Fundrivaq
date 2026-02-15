
import { GoogleGenAI, Type } from "@google/genai";

export const generateCampaignDescription = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert copywriter for a global fundraising platform called Fundrivaq. Write a compelling, emotional, and clear fundraising campaign description based on the following notes: "${prompt}". Make it professional and persuasive.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    
    return response.text || "Could not generate description at this time.";
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Error generating description. Please try again.";
  }
};
