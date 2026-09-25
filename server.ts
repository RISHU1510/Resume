import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { CHATBOT_SYSTEM_PROMPT, generateLocalAssistantResponse } from './src/data/chatbotKnowledge.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI client server-side
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

if (!apiKey) {
  console.warn('[AI Assistant] Notice: GEMINI_API_KEY is not set in environment.');
} else {
  console.log('[AI Assistant] Server-side Gemini API initialized with gemini-3.8-flash.');
}

/**
 * Chatbot API Endpoint
 * Handles conversation turns with gemini-3.8-flash and falls back to deterministic portfolio knowledge.
 */
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, message } = req.body;
    const incomingText = typeof message === 'string' ? message.trim() : '';

    if (!incomingText && (!Array.isArray(messages) || messages.length === 0)) {
      return res.status(400).json({ error: 'Message cannot be empty' });
    }

    const conversationHistory: Array<{ role: string; text: string }> = Array.isArray(messages)
      ? messages
      : [];

    const latestQuery = incomingText || (conversationHistory[conversationHistory.length - 1]?.text ?? '');

    // 1. If Gemini AI client is initialized
    if (ai) {
      try {
        const contents = conversationHistory
          .filter((m) => m && typeof m.text === 'string' && m.text.trim().length > 0)
          .map((m) => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }],
          }));

        if (incomingText && (!contents.length || contents[contents.length - 1].parts[0].text !== incomingText)) {
          contents.push({
            role: 'user',
            parts: [{ text: incomingText }],
          });
        }

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: contents.length > 0 ? contents : latestQuery,
          config: {
            systemInstruction: CHATBOT_SYSTEM_PROMPT,
            temperature: 0.6,
          },
        });

        const reply = response.text?.trim();
        if (reply) {
          return res.json({ reply });
        }
      } catch (geminiError) {
        console.warn('[AI Assistant] Gemini API call encountered an issue, deploying portfolio knowledge fallback:', geminiError);
      }
    }

    // 2. Intelligent verified local fallback
    const fallbackReply = generateLocalAssistantResponse(latestQuery, conversationHistory);
    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('[AI Assistant] Error handling chat request:', error);
    return res.status(500).json({
      reply: "I don't have that information yet, but you can contact Rishu directly for more details at rishusingh627h@gmail.com or +91 8375050619.",
    });
  }
});

/**
 * Health check endpoint
 */
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    hasGeminiKey: Boolean(apiKey),
    assistant: "Rishu's AI Assistant",
    firebaseProject: 'valid-grail-njq9c',
  });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: HOST, port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`🚀 Portfolio server running at http://${HOST}:${PORT}`);
  });
}

startServer();
