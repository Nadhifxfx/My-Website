import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useI18n } from '../config/i18n';

interface Message {
  id: string;
  text: string;
  textKey?: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '',
      textKey: 'chatbot.a.intro',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const includesAny = (text: string, needles: string[]) => needles.some((needle) => text.includes(needle));

  const generateBotResponseKey = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword matching for FAQ
    if (includesAny(lowerMessage, ['skill', 'skills', 'tech', 'technology', 'programming', 'keahlian', 'skill', 'teknologi', 'pemrograman'])) return 'chatbot.a.skills';
    if (includesAny(lowerMessage, ['experience', 'work', 'career', 'pengalaman', 'kerja', 'karier'])) return 'chatbot.a.experience';
    if (includesAny(lowerMessage, ['project', 'projects', 'portfolio', 'work samples', 'portofolio', 'proyek', 'project'])) return 'chatbot.a.projects';
    if (includesAny(lowerMessage, ['education', 'study', 'school', 'pendidikan', 'kuliah', 'sekolah', 'studi'])) return 'chatbot.a.education';
    if (includesAny(lowerMessage, ['contact', 'email', 'reach', 'kontak', 'hubungi', 'dm'])) return 'chatbot.a.contact';
    if (includesAny(lowerMessage, ['certificate', 'certificates', 'certification', 'award', 'sertifikat', 'sertifikasi', 'penghargaan', 'juara'])) return 'chatbot.a.certificates';
    if (includesAny(lowerMessage, ['hello', 'hi', 'hey', 'halo', 'hai'])) return 'chatbot.a.greeting';
    return 'chatbot.a.default';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(async () => {
      const botResponseKey = await generateBotResponseKey(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '',
        textKey: botResponseKey,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestionKeys = [
    'chatbot.q.skills',
    'chatbot.q.projects',
    'chatbot.q.certificates',
    'chatbot.q.contact',
    'chatbot.q.experience',
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 border-b-2 border-blue-300 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Bot className="text-blue-600" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">{t('chatbot.title')}</h2>
            <p className="text-xs text-blue-100">{t('chatbot.subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[75%] ${
              message.isBot ? '' : 'flex-row-reverse space-x-reverse'
            }`}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                  message.isBot
                    ? 'bg-blue-500'
                    : 'bg-gray-500'
                }`}
              >
                {message.isBot ? (
                  <Bot size={16} className="text-white" />
                ) : (
                  <User size={16} className="text-white" />
                )}
              </div>
              <div
                className={`p-3 rounded-lg text-sm shadow-md border-2 ${
                  message.isBot
                    ? 'bg-white border-gray-200 text-gray-800 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100'
                    : 'bg-blue-500 border-blue-600 text-white'
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{message.textKey ? t(message.textKey) : message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-[75%]">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-white border-2 border-gray-200 p-3 rounded-lg text-sm shadow-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-4 pb-2 bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <p className="text-xs text-gray-600 mb-2 font-medium">{t('chatbot.tryAsking')}</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestionKeys.map((questionKey, index) => (
              <button
                key={index}
                onClick={() => setInputValue(t(questionKey))}
                className="text-xs bg-blue-50 border border-blue-300 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors shadow-sm"
              >
                {t(questionKey)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t-2 border-gray-200 bg-white shadow-lg dark:bg-gray-900 dark:border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chatbot.placeholder')}
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-3 rounded-lg transition-colors shadow-md transform hover:scale-105 active:scale-95 disabled:transform-none flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{t('chatbot.pressEnter')}</p>
      </div>
    </div>
  );
};

export default ChatBot;