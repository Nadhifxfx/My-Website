import React from 'react';
import { Monitor, Cpu, HardDrive, Wifi, Code, Database, Cloud, Smartphone, Laptop, Server } from 'lucide-react';

const AnimatedWallpaper: React.FC = () => {
  const techIcons = [
    { Icon: Monitor, delay: 0, duration: 20 },
    { Icon: Cpu, delay: 2, duration: 25 },
    { Icon: HardDrive, delay: 4, duration: 18 },
    { Icon: Wifi, delay: 6, duration: 22 },
    { Icon: Code, delay: 8, duration: 24 },
    { Icon: Database, delay: 10, duration: 19 },
    { Icon: Cloud, delay: 12, duration: 21 },
    { Icon: Smartphone, delay: 14, duration: 23 },
    { Icon: Laptop, delay: 16, duration: 20 },
    { Icon: Server, delay: 18, duration: 26 }
  ];

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    animationDelay: Math.random() * 10,
    animationDuration: Math.random() * 10 + 15
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-400 to-blue-500">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%),
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
            `
          }}
        />
      </div>

      {/* Animated circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Horizontal circuit lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
          <path d="M0,200 L300,200 L320,180 L340,200 L1000,200" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <path d="M0,400 L200,400 L220,420 L240,400 L600,400 L620,380 L640,400 L1000,400" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <path d="M0,600 L400,600 L420,580 L440,600 L800,600 L820,620 L840,600 L1000,600" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
          <path d="M0,800 L150,800 L170,780 L190,800 L500,800 L520,820 L540,800 L1000,800" className="animate-pulse" style={{ animationDelay: '3s', animationDuration: '4.5s' }} />
        </g>
        
        {/* Vertical circuit lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
          <path d="M200,0 L200,300 L180,320 L200,340 L200,1000" className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '5.5s' }} />
          <path d="M500,0 L500,200 L520,220 L500,240 L500,600 L480,620 L500,640 L500,1000" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.8s' }} />
          <path d="M800,0 L800,400 L780,420 L800,440 L800,800 L820,820 L800,840 L800,1000" className="animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '5.2s' }} />
        </g>
        
        {/* Circuit nodes */}
        <g fill="url(#circuitGradient)">
          <circle cx="200" cy="200" r="4" className="animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <circle cx="500" cy="400" r="4" className="animate-ping" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
          <circle cx="800" cy="600" r="4" className="animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          <circle cx="320" cy="800" r="4" className="animate-ping" style={{ animationDelay: '3s', animationDuration: '3.2s' }} />
          <circle cx="640" cy="400" r="4" className="animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
        </g>
      </svg>

      {/* Floating tech icons */}
      <div className="absolute inset-0">
        {techIcons.map(({ Icon, delay, duration }, index) => (
          <div
            key={index}
            className="absolute opacity-10 text-white"
            style={{
              left: `${(index * 11 + 5) % 90}%`,
              top: `${(index * 13 + 10) % 80}%`,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`
            }}
          >
            <Icon size={24 + (index % 3) * 8} />
          </div>
        ))}
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute bg-white bg-opacity-5 rounded-full border border-white border-opacity-10"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.left}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatSlow ${element.animationDuration}s ease-in-out infinite`,
              animationDelay: `${element.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Data stream effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-30"
            style={{
              height: '100px',
              left: `${(i * 12.5) + 5}%`,
              animation: `dataStream ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Binary code rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute text-green-300 font-mono text-xs whitespace-nowrap"
            style={{
              left: `${i * 5}%`,
              animation: `binaryRain ${8 + i * 0.2}s linear infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            {Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>

      {/* Particle system */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-30px) translateX(0px); }
          75% { transform: translateY(-15px) translateX(-5px); }
        }
        
        @keyframes dataStream {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes binaryRain {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes particle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AnimatedWallpaper;