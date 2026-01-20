
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Chief AI Strategist for MH AI Agency.
Your goal is to provide high-level technical and strategic guidance to business owners and executives.

Core Expertise:
- Autonomous AI Agents, RAG Pipelines, WhatsApp Ecosystems, Enterprise Automation.

Interaction Protocol:
1. Be clinical yet helpful. Use terms like "Operational Efficiency" and "ROI Projection."
2. Subtly nudge towards a direct consultation at 89707 321 47.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
      },
    });
    return response.text || "Contact our strategist at +91 89707 321 47.";
  } catch (error) {
    return "Please reach out directly to 89707 321 47 for assistance.";
  }
};

/**
 * Specialized function to extract user details from unstructured text.
 * Used for the "Smart-Fill" feature in the Audit form.
 */
export const parseUnstructuredData = async (text: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Extract the following details from this text: Name, Email, Phone, Company, Job Title. Text: "${text}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            email: { type: Type.STRING },
            phone: { type: Type.STRING },
            company: { type: Type.STRING },
            title: { type: Type.STRING },
          },
          required: ["name"]
        },
      },
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Smart Fill Error:", error);
    return null;
  }
};
