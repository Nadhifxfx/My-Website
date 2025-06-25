import React, { useState, useRef, useEffect } from 'react';
import { X, Minus } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isAnimating?: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onBringToFront: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  zIndex,
  isAnimating = false,
  onClose,
  onMinimize,
  onBringToFront,
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show window with animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Always fullscreen style with animations
  const windowStyle = {
    position: 'fixed' as const,
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '40px', // Account for taskbar
    width: '100vw',
    height: 'calc(100vh - 40px)',
    zIndex
  };

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      className={`bg-gray-100 border-2 border-gray-400 shadow-lg overflow-hidden transition-all duration-300 ${
        isVisible && !isAnimating 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'
      } ${isAnimating ? 'animate-pulse' : ''}`}
      onClick={onBringToFront}
    >
      {/* Title Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 flex items-center justify-between select-none border-b-2 border-blue-400">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white bg-opacity-20 rounded border border-white border-opacity-30"></div>
          <span className="font-bold text-sm">{title}</span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            className="w-6 h-6 bg-gray-300 hover:bg-gray-200 border border-gray-400 rounded-sm flex items-center justify-center shadow-sm active:shadow-inner transition-all transform hover:scale-110 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            title="Minimize"
          >
            <Minus size={14} className="text-gray-700" />
          </button>
          <button
            className="w-6 h-6 bg-red-500 hover:bg-red-400 border border-red-600 rounded-sm flex items-center justify-center shadow-sm active:shadow-inner transition-all transform hover:scale-110 active:scale-95"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            title="Close"
          >
            <X size={14} className="text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-full overflow-auto bg-white transition-all duration-300" style={{ height: 'calc(100% - 36px)' }}>
        {children}
      </div>
    </div>
  );
};

export default Window;