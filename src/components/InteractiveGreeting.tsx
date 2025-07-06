import React, { useState, useEffect } from 'react';
import { Code, Zap, Star, Heart, Sparkles, Rocket, Trophy, Target } from 'lucide-react';

const InteractiveGreeting: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const greetingPhrases = [
    "Not just visuals but a way of thinking",
  ];

  const floatingIcons = [
    { Icon: Code, color: 'text-blue-400', delay: 0 },
    { Icon: Zap, color: 'text-yellow-400', delay: 0.5 },
    { Icon: Star, color: 'text-purple-400', delay: 1 },
    { Icon: Heart, color: 'text-red-400', delay: 1.5 },
    { Icon: Sparkles, color: 'text-pink-400', delay: 2 },
    { Icon: Rocket, color: 'text-green-400', delay: 2.5 },
    { Icon: Trophy, color: 'text-orange-400', delay: 3 },
    { Icon: Target, color: 'text-cyan-400', delay: 3.5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % greetingPhrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGreetingClick = () => {
    setClickCount(prev => prev + 1);
    const ripple = document.createElement('div');
    ripple.className = 'absolute rounded-full bg-white bg-opacity-30 animate-ping pointer-events-none';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.left = `${mousePosition.x - 50}px`;
    ripple.style.top = `${mousePosition.y - 50}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <div 
        className="relative text-center pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleGreetingClick}
      >
        {/* Teks utama */}
        <h1 className="text-7xl font-bold text-white mb-4 select-none"
          style={{
            fontFamily: 'Tahoma, Verdana, sans-serif',
            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.8)'
          }}
        >
          <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>H</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>e</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>l</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>l</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>o</span>
          <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.0s' }}></span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>W</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>o</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>r</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>l</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>d</span>
          <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.0s' }}></span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '1.0s' }}>!</span>
          <span className="inline-block animate-bounce mx-2" style={{ animationDelay: '0.4s' }}>👋</span>
        </h1>

        {/* Subtitle dengan gradasi dan animasi */}
        <p className="text-2xl font-semibold mb-6 bg-gradient-to-r from-red-700 via-yellow-700 to-blue-700 bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundSize: '300% 300%',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255,255,255,0.2)'
          }}
        >
          {greetingPhrases[currentPhase]}
        </p>

        {/* Tombol interaktif */}
        <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-bold text-sm shadow-lg select-none">
          ✨ Double-click the icon or press the Start menu located at the bottom ✨
        </div>

        {/* Floating Icons */}
        {floatingIcons.slice(0, 4).map(({ Icon, color, delay }, index) => (
          <div
            key={index}
            className={`absolute ${color} opacity-60 animate-float`}
            style={{
              left: `${50 + Math.cos((index * Math.PI * 2) / 4) * 120}%`,
              top: `${50 + Math.sin((index * Math.PI * 2) / 4) * 80}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${3 + index * 0.2}s`
            }}
          >
            <Icon size={28} className="drop-shadow-lg" />
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.6; }
          50% { transform: translateY(-25px) rotate(180deg) scale(1.2); opacity: 1; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default InteractiveGreeting;
