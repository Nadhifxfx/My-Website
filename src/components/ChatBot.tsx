import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-20 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center border-2 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600 border-red-600' 
              : 'bg-blue-500 hover:bg-blue-600 border-blue-600 animate-pulse'
          }`}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Chat Popup Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 z-50 w-80 h-96 bg-white rounded-lg border-2 border-gray-300 shadow-xl animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-t-lg border-b-2 border-blue-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <span className="font-bold text-sm">FAQ Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 h-72 bg-gray-50">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="flex items-start space-x-2 max-w-xs">
                    {message.isBot && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={12} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-lg text-sm shadow-sm border ${
                        message.isBot
                          ? 'bg-white border-gray-200 text-gray-800'
                          : 'bg-blue-500 border-blue-600 text-white'
                      }`}
                    >
                      <p className="leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {!message.isBot && (
                      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-xs">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 p-3 rounded-lg text-sm shadow-sm">
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
          </div>

          {/* Input Area */}
          <div className="p-3 border-t-2 border-gray-200 bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Nadhif..."
                className="flex-1 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white p-2 rounded-md transition-colors border border-blue-600 shadow-sm transform hover:scale-105 active:scale-95 disabled:transform-none"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;