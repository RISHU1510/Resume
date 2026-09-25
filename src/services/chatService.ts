import { generateLocalAssistantResponse } from '../data/chatbotKnowledge';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const STORAGE_KEY = 'rishu_ai_chat_history_v1';

export const INITIAL_GREETING: ChatMessage = {
  id: 'greeting_msg_001',
  role: 'model',
  text: "Hey! 👋 I'm Rishu's AI Assistant. Ask me anything about Rishu, his skills, projects, experience, education, achievements, or portfolio.",
  timestamp: 'Just now',
};

export const QUICK_SUGGESTIONS = [
  'About Rishu',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Contact',
];

/**
 * Loads stored chat history or initializes with greeting
 */
export function getSavedMessages(): ChatMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [INITIAL_GREETING];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.warn('Could not read saved chat history:', err);
  }
  return [INITIAL_GREETING];
}

/**
 * Persists messages to localStorage
 */
export function saveMessages(messages: ChatMessage[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (err) {
    console.warn('Could not save chat history:', err);
  }
}

/**
 * Clears chat history and restores greeting
 */
export function clearChatHistory(): ChatMessage[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Could not clear chat history:', err);
  }
  return [INITIAL_GREETING];
}

/**
 * Sends conversation to server-side Gemini API (/api/chat)
 * Falls back gracefully to local knowledge base if offline or key is unconfigured.
 */
export async function sendChatMessage(
  messages: ChatMessage[],
  newUserMessage: string
): Promise<string> {
  const formattedHistory = messages.map((m) => ({
    role: m.role,
    text: m.text,
  }));

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: formattedHistory,
        message: newUserMessage,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && typeof data.reply === 'string' && data.reply.trim().length > 0) {
        return data.reply.trim();
      }
    }
  } catch (err) {
    console.warn('Server chat endpoint failed or unavailable, using local intelligence:', err);
  }

  // Graceful client-side fallback with exact portfolio knowledge
  return generateLocalAssistantResponse(newUserMessage, formattedHistory);
}
