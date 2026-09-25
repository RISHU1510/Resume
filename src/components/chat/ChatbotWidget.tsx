import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  User,
  ChevronDown,
  ExternalLink,
  Minimize2,
} from 'lucide-react';
import {
  ChatMessage,
  getSavedMessages,
  saveMessages,
  clearChatHistory,
  sendChatMessage,
  QUICK_SUGGESTIONS,
} from '../../services/chatService';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize stored history
  useEffect(() => {
    const loaded = getSavedMessages();
    setMessages(loaded);
  }, []);

  // Save changes to storage
  useEffect(() => {
    if (messages.length > 0) {
      saveMessages(messages);
    }
  }, [messages]);

  // Auto-scroll to bottom
  const scrollToBottom = (smooth = true) => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'end',
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(true);
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    setHasInteracted(true);
    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const replyText = await sendChatMessage(messages, text);
      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newHistory, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err_${Date.now()}`,
        role: 'model',
        text: "I don't have that information yet, but you can contact Rishu directly for more details at rishusingh627h@gmail.com or +91 8375050619.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...newHistory, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    const reset = clearChatHistory();
    setMessages(reset);
    setHasInteracted(false);
  };

  // Safe formatting helper for bold, bullet points, and links
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      // Process markdown bold **text** and links [text](url)
      const renderInline = (str: string) => {
        // Regex to split by bold (**...**) and links ([...](...))
        const parts = str.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
        return parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} className="font-semibold text-[#f7f4ed]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (linkMatch) {
            return (
              <a
                key={pIdx}
                href={linkMatch[2]}
                target={linkMatch[2].startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-rose-400 hover:text-rose-300 underline underline-offset-2 transition-colors"
              >
                {linkMatch[1]}
                {linkMatch[2].startsWith('http') && <ExternalLink className="w-2.5 h-2.5 ml-0.5 inline" />}
              </a>
            );
          }
          return part;
        });
      };

      if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
        const bulletContent = line.replace(/^[\s•\-]+/, '');
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-xs leading-relaxed text-[#ded8cb]">
            <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
            <span>{renderInline(bulletContent)}</span>
          </div>
        );
      }

      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }

      return (
        <p key={idx} className="text-xs leading-relaxed text-[#ded8cb] my-0.5">
          {renderInline(line)}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none">
      {/* 1. Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            className="w-[calc(100vw-2.5rem)] sm:w-[380px] h-[520px] max-h-[82vh] mb-3.5 bg-[#0e0c0b]/95 backdrop-blur-xl border border-rose-950/60 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(136,19,55,0.25)] flex flex-col overflow-hidden text-[#f7f4ed]"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-gradient-to-r from-[#171312] via-[#1c1214] to-[#171312] border-b border-rose-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-950 to-rose-700 p-0.5 shadow-[0_0_12px_rgba(225,29,72,0.4)] flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0e0c0b] animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-sans font-semibold text-xs tracking-wide text-[#f7f4ed]">
                      Rishu's AI Assistant
                    </h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-rose-950/80 text-rose-300 font-mono border border-rose-800/40">
                      Portfolio
                    </span>
                  </div>
                  <p className="text-[10px] text-[#9c9485] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online • Verified Knowledge
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 rounded-lg text-[#9c9485] hover:text-[#f7f4ed] hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize chat"
                  aria-label="Minimize chat"
                  className="p-1.5 rounded-lg text-[#9c9485] hover:text-[#f7f4ed] hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto px-3.5 py-3 space-y-3.5 scrollbar-thin scrollbar-thumb-zinc-800">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-start gap-2 max-w-[88%]">
                      {!isUser && (
                        <div className="w-5 h-5 rounded-full bg-rose-950/70 border border-rose-800/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-2.5 h-2.5 text-rose-400" />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-3.5 py-2.5 text-xs shadow-sm ${
                          isUser
                            ? 'bg-gradient-to-r from-[#881337] to-[#9f1239] text-white rounded-tr-xs border border-rose-500/20'
                            : 'bg-[#181514] text-[#f7f4ed] rounded-tl-xs border border-rose-950/40 shadow-inner'
                        }`}
                      >
                        {renderFormattedText(msg.text)}
                      </div>
                      {isUser && (
                        <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700/60 flex items-center justify-center shrink-0 mt-0.5">
                          <User className="w-2.5 h-2.5 text-zinc-300" />
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-[#716a5d] mt-1 px-1 font-mono">
                      {msg.timestamp}
                    </span>
                  </motion.div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 max-w-[85%]"
                >
                  <div className="w-5 h-5 rounded-full bg-rose-950/70 border border-rose-800/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-2.5 h-2.5 text-rose-400" />
                  </div>
                  <div className="bg-[#181514] border border-rose-950/40 rounded-2xl rounded-tl-xs px-3.5 py-2.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 pt-2 pb-1.5 bg-[#120f0e]/80 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              <span className="text-[10px] text-[#716a5d] uppercase tracking-wider shrink-0 font-medium pl-1">
                Ask:
              </span>
              {QUICK_SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSendMessage(suggestion)}
                  disabled={isLoading}
                  className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-[#1e1918] hover:bg-[#2c1c20] text-[#c7beaf] hover:text-[#f7f4ed] border border-rose-950/40 hover:border-rose-700/50 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Message Input Box */}
            <div className="p-3 bg-[#0e0c0b] border-t border-rose-950/40">
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, contact..."
                  disabled={isLoading}
                  className="w-full pl-3.5 pr-10 py-2.5 text-xs bg-[#171413] border border-rose-950/60 focus:border-rose-600/60 rounded-xl text-[#f7f4ed] placeholder-[#716a5d] outline-none transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  aria-label="Send message"
                  className="absolute right-1.5 p-1.5 rounded-lg bg-gradient-to-r from-rose-800 to-rose-600 hover:from-rose-700 hover:to-rose-500 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_0_10px_rgba(225,29,72,0.3)] active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1 text-[9px] text-[#716a5d]">
                <span>Press Enter to send</span>
                <span className="text-rose-400/80">Rishu Singh's Portfolio AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Circular Chat Button */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close AI Assistant' : 'Open AI Assistant'}
        className="relative group p-3.5 rounded-full bg-gradient-to-tr from-[#151211] via-[#211115] to-[#151211] border border-rose-600/40 text-white shadow-[0_0_25px_rgba(159,18,57,0.45),0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-300 hover:border-rose-500 hover:shadow-[0_0_35px_rgba(225,29,72,0.6)] flex items-center justify-center"
      >
        {/* Soft glowing pulse ring */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-rose-600/20 blur-sm animate-pulse group-hover:bg-rose-600/35 transition-all" />
        )}

        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-5 h-5 text-rose-300" />
          ) : (
            <div className="relative">
              <Bot className="w-5 h-5 text-rose-200 group-hover:text-white transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500" />
            </div>
          )}
        </div>

        {/* Floating tooltip on hover when closed */}
        {!isOpen && !hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-3 whitespace-nowrap hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181413]/95 border border-rose-900/50 text-[11px] font-medium text-[#f7f4ed] shadow-xl pointer-events-none"
          >
            <Sparkles className="w-3 h-3 text-rose-400" />
            <span>Ask Rishu's AI Assistant</span>
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};
