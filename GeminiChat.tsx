import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';
import { ChatBubbleIcon, SendIcon, XIcon, SparklesIcon } from './Icons';

const CHECKOUT_LINK = "https://lastlink.com/p/C22B0616A/checkout-payment/";

const SYSTEM_INSTRUCTION = `
You are "Flora", a high-end beauty consultant for "FlexDepil".
Your tone is elegant, encouraging, and sophisticated.
Your goal is to guide the user through the AIDA funnel (Attention, Interest, Desire, Action) to buy the course.

KNOWLEDGE BASE:
1. WHAT IT IS: A luxurious, home-spa hair removal technique using a natural Thermo-Adhesive gel.
2. INGREDIENTS: Cornstarch (structure), Unflavored Gelatin (film), Honey (gold standard adhesion), Vegetable Oil (shield), Water. All natural.
3. BENEFITS: "Porcelain skin" effect, 80% less pain than wax, water-soluble (no mess), cost-effective (cents per use).
4. PROCESS: Mix -> Heat (Alchemy) -> Cool -> Apply -> Remove (satisfying peel).
5. COMPARISON: Superior to blades (lasts weeks), superior to hot wax (doesn't burn/rip skin).
6. PRICE: Special offer R$ 37,00 (One-time payment).
7. CHECKOUT LINK: ${CHECKOUT_LINK}

RULES:
- Keep answers short (under 3 sentences usually).
- Use emojis sparingly but elegantly (✨, 🌿, 💧).
- If asked about price, emphasize the value (saving money long term) before stating R$ 37,00.
- If the user expresses desire to buy, asks where to buy, or asks for the link, YOU MUST provide the CHECKOUT LINK in your response.
- Speak Portuguese.

If the user asks something unrelated, gently bring them back to "self-care" and the course.
`;

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a Flora. Quer descobrir como ter uma pele de porcelana gastando pouco? ✨' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({
                role: m.role,
                parts: [{ text: m.text }]
            })),
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          maxOutputTokens: 300,
        }
      });

      const responseText = response.text || "Desculpe, tive um breve desvio. Podemos continuar?";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Perdão, minha conexão oscilou. Poderia repetir?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to render text with embedded CTA button if link is found
  const renderMessage = (text: string) => {
    // Escape special characters for regex, although simple string check is robust enough here
    // We look for the exact checkout link to replace it
    if (text.includes(CHECKOUT_LINK)) {
      const parts = text.split(CHECKOUT_LINK);
      return (
        <>
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-pre-wrap">{part}</span>
              {index < parts.length - 1 && (
                <a 
                  href={CHECKOUT_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-3 mb-2 w-full py-3 bg-gradient-to-r from-brand-gold to-brand-primary text-white font-bold text-center text-xs uppercase tracking-widest rounded-lg shadow-lg hover:shadow-brand-gold/50 hover:scale-[1.02] transition-all duration-300"
                >
                  Garantir Minha Vaga ✨
                </a>
              )}
            </React.Fragment>
          ))}
        </>
      );
    }
    return <span className="whitespace-pre-wrap">{text}</span>;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-brand-gold/20 overflow-hidden flex flex-col h-[500px] animate-fade-in-up ring-1 ring-black/5">
          {/* Header */}
          <div className="bg-brand-dark p-4 flex justify-between items-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-primary opacity-80"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white/10">
                <SparklesIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-serif font-semibold tracking-wide">Flora AI</p>
                <p className="text-[10px] uppercase tracking-widest text-brand-gold">Consultora Flex</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="relative z-10 hover:bg-white/10 rounded-full p-2 transition">
              <XIcon className="w-5 h-5 opacity-80" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FFF8F0]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-dark text-white rounded-br-none' 
                    : 'bg-white text-stone-700 border border-brand-gold/10 rounded-bl-none'
                }`}>
                  {renderMessage(msg.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1 border border-brand-gold/10">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce delay-200"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-stone-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Pergunte sobre o método..."
                className="flex-1 px-4 py-3 bg-stone-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/30 text-stone-700 placeholder-stone-400 transition-shadow"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="p-3 bg-brand-gold text-white rounded-xl hover:bg-brand-primary transition-colors disabled:opacity-50 shadow-md shadow-brand-gold/20"
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        aria-label="chat"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-16 h-16 bg-brand-dark text-brand-gold rounded-full shadow-2xl hover:bg-brand-primary hover:text-white hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-gold/30 border-2 border-brand-gold/20"
      >
        {isOpen ? <XIcon className="w-6 h-6" /> : <ChatBubbleIcon className="w-7 h-7" />}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold"></span>
            </span>
        )}
      </button>
    </div>
  );
};

export default GeminiChat;