import React, { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('Starting Windows...');
  const [showWelcome, setShowWelcome] = useState(false);

  const loadingMessages = [
    'Starting Windows...',
    'Loading system files...',
    'Initializing components...',
    'Loading user profile...',
    'Preparing desktop...',
    'Almost ready...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update loading message based on progress
        const messageIndex = Math.floor((newProgress / 100) * loadingMessages.length);
        if (messageIndex < loadingMessages.length) {
          setCurrentMessage(loadingMessages[messageIndex]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setShowWelcome(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 2000);
          return 100;
        }
        
        return newProgress;
      });
    }, 200 + Math.random() * 300);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-blue-600 to-blue-800 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center animate-pulse">
          <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-4 border-white border-opacity-30">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg"></div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}>
            Welcome
          </h1>
          <p className="text-xl text-blue-100">Nadhif Website</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center z-50" 
         style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}>
      
      {/* Windows XP Logo */}
      <div className="mb-12 text-center">
        <div className="w-32 h-32 mx-auto mb-6 bg-white bg-opacity-10 rounded-full flex items-center justify-center border-4 border-white border-opacity-20 backdrop-blur-sm">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 rounded-lg shadow-lg flex items-center justify-center">
            <Monitor size={32} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">
          Loading
        </h1>
        <p className="text-xl text-blue-100 drop-shadow-md">Nadhif Website</p>
      </div>

      {/* Loading Animation */}
      <div className="w-80 max-w-sm mx-auto">
        {/* Progress Bar Container */}
        <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-30 shadow-2xl">
          <div className="mb-4">
            <p className="text-white text-sm mb-2 font-medium">{currentMessage}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-blue-900 bg-opacity-50 rounded-full h-6 border-2 border-blue-400 border-opacity-30 shadow-inner overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-green-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                
                {/* Moving highlight */}
                <div 
                  className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-slide"
                  style={{ 
                    animation: progress > 0 ? 'slide 2s ease-in-out infinite' : 'none'
                  }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-2">
              <span className="text-blue-100 text-xs">{Math.round(progress)}% complete</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-6 text-center">
          <p className="text-blue-200 text-xs opacity-75">
            Microsoft Windows XP Professional<br/>
            Version 2025 (Under Maintence)<br/>
            Website Edition
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.4; }
        }
        
        @keyframes fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .animate-fade-out {
          animation: fade-out 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;