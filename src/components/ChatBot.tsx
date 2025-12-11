import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your FAQ assistant. Ask me anything about Nadhif\'s skills, projects, or experience!',
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

  const faqData = {
    skills: "Nadhif has expertise in Programming (HTML, TypeScript, React, Node.js, Python), Design (Canva, Adobe Photoshop, Adobe Illustrator, Figma), and Video Editing (CapCut, After Effects, Premiere Pro, Vegas Pro).",
    experience: "Nadhif has 5+ years of experience in web development, graphic design, and video editing. He has worked on various projects including websites, mobile app UI/UX, video content, and branding materials.",
    projects: "Some notable projects include: Graduation Film Class XVII 2021, INACOM Modern Logo Concept, Bank Indonesia Investment Program video, NDComps10 Football Website UI, Byon Combat Website, Gamified Qur'an Learning App UI/UX, and many more across programming, design, and video editing.",
    education: "Nadhif is currently pursuing his education while actively working on various creative and technical projects. He has completed multiple certifications including Building a .NET ChatBot, AI Powered Code Generation, and UI/UX Design with Figma.",
    contact: "You can reach Nadhif at nadhiffathur@gmail.com or connect with him on GitHub (github.com/Nadhifxfx), LinkedIn (linkedin.com/in/nadhifxfx/), or Instagram (@nd10.mp4).",
    certificates: "Nadhif has earned multiple certifications including Building a .NET ChatBot from Staya.Dev, AI Powered Code Generation, UI/UX Design website with Figma from BuildWithAngga, and several competition awards including 2nd Winner of Instagram Reels Contest."
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword matching for FAQ
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('programming')) {
      return faqData.skills;
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('career')) {
      return faqData.experience;
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work samples')) {
      return faqData.projects;
    } else if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('school')) {
      return faqData.education;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return faqData.contact;
    } else if (lowerMessage.includes('certificate') || lowerMessage.includes('certification') || lowerMessage.includes('award')) {
      return faqData.certificates;
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn more about Nadhif. You can ask me about his skills, projects, experience, education, or how to contact him.";
    } else {
      return "I can help you with information about Nadhif's skills, projects, experience, education, certifications, or contact details. What would you like to know?";
    }
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
      const botResponse = await generateBotResponse(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
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

  const suggestedQuestions = [
    "Tell me about Nadhif's skills",
    "What projects has he worked on?",
    "What certifications does he have?",
    "How can I contact him?",
    "What's his experience?"
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 border-b-2 border-blue-300 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Bot className="text-blue-600" size={24} />
          </div>
          <div>
            <h2 className="text-lg font-bold">FAQ Assistant</h2>
            <p className="text-xs text-blue-100">Ask me anything about Nadhif</p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
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
                    ? 'bg-white border-gray-200 text-gray-800'
                    : 'bg-blue-500 border-blue-600 text-white'
                }`}
              >
                <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
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
        <div className="px-4 pb-2 bg-white border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2 font-medium">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInputValue(question)}
                className="text-xs bg-blue-50 border border-blue-300 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors shadow-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t-2 border-gray-200 bg-white shadow-lg">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about Nadhif..."
            className="flex-1 p-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        <p className="text-xs text-gray-500 mt-2">Press Enter to send</p>
      </div>
    </div>
  );
};

export default ChatBot;