import React, { useState, useRef, useEffect } from 'react';
import { Monitor, User, BookOpen, FolderOpen, Award, Mail, Clock } from 'lucide-react';
import Window from './Window';
import StartMenu from './StartMenu';
import AnimatedWallpaper from './AnimatedWallpaper';
import InteractiveGreeting from './InteractiveGreeting';
import LoadingScreen from './LoadingScreen';
import WelcomeDialog from './WelcomeDialog';
import ProfileWindow from './ProfileWindow';
import SkillsWindow from './SkillsWindow';
import EducationWindow from './EducationWindow';
import PortfolioWindow from './PortfolioWindow';
import CertificatesWindow from './CertificatesWindow';
import ContactWindow from './ContactWindow';

interface WindowState {
  id: string;
  title: string;
  component: React.ComponentType;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isAnimating?: boolean;
}

const Desktop: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [time, setTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'profile',
      title: 'Profile',
      component: ProfileWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 }, // Not used in fullscreen mode
      size: { width: 0, height: 0 }, // Not used in fullscreen mode
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'skills',
      title: 'Skills',
      component: SkillsWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'education',
      title: 'Education',
      component: EducationWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'projects',
      title: 'Projects',
      component: PortfolioWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'certificates',
      title: 'Certificates',
      component: CertificatesWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'contact',
      title: 'Contact Me',
      component: ContactWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    }
  ]);

  const maxZIndex = useRef(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show welcome dialog after loading is complete
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  };

  const openWindow = (windowId: string) => {
    // Hide greeting when first window opens
    if (showGreeting) {
      setShowGreeting(false);
    }

    // Add click animation effect
    const clickedElement = document.querySelector(`[data-window-id="${windowId}"]`);
    if (clickedElement) {
      clickedElement.classList.add('animate-pulse');
      setTimeout(() => {
        clickedElement.classList.remove('animate-pulse');
      }, 200);
    }

    // Set window as animating
    setWindows(prev => prev.map(window => 
      window.id === windowId 
        ? { ...window, isAnimating: true }
        : window
    ));

    // Open window with animation delay
    setTimeout(() => {
      setWindows(prev => prev.map(window => 
        window.id === windowId 
          ? { ...window, isOpen: true, isMinimized: false, zIndex: ++maxZIndex.current, isAnimating: false }
          : window
      ));
    }, 150);

    setIsStartMenuOpen(false);
  };

  const closeWindow = (windowId: string) => {
    // Add closing animation
    setWindows(prev => prev.map(window => 
      window.id === windowId ? { ...window, isAnimating: true } : window
    ));

    setTimeout(() => {
      setWindows(prev => prev.map(window => 
        window.id === windowId ? { ...window, isOpen: false, isAnimating: false } : window
      ));
      
      // Show greeting again if no windows are open
      const hasOpenWindows = windows.some(w => w.isOpen && w.id !== windowId);
      if (!hasOpenWindows) {
        setTimeout(() => setShowGreeting(true), 300);
      }
    }, 200);
  };

  const minimizeWindow = (windowId: string) => {
    // Add minimize animation
    setWindows(prev => prev.map(window => 
      window.id === windowId ? { ...window, isAnimating: true } : window
    ));

    setTimeout(() => {
      setWindows(prev => prev.map(window => 
        window.id === windowId ? { ...window, isMinimized: true, isAnimating: false } : window
      ));
      
      // Show greeting again if all windows are minimized
      const hasVisibleWindows = windows.some(w => w.isOpen && !w.isMinimized && w.id !== windowId);
      if (!hasVisibleWindows) {
        setTimeout(() => setShowGreeting(true), 300);
      }
    }, 200);
  };

  const restoreWindow = (windowId: string) => {
    // Hide greeting when restoring window
    if (showGreeting) {
      setShowGreeting(false);
    }
    
    setWindows(prev => prev.map(window => 
      window.id === windowId 
        ? { ...window, isMinimized: false, zIndex: ++maxZIndex.current, isAnimating: false }
        : window
    ));
  };

  const bringToFront = (windowId: string) => {
    setWindows(prev => prev.map(window => 
      window.id === windowId ? { ...window, zIndex: ++maxZIndex.current } : window
    ));
  };

  const updateWindowPosition = (windowId: string, position: { x: number; y: number }) => {
    // Not used in fullscreen mode, but keeping for interface compatibility
  };

  const startMenuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'skills', label: 'Skills', icon: Monitor },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact Me', icon: Mail }
  ];

  // Show loading screen first
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative font-sans" 
         style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}>
      {/* Animated Technology Wallpaper */}
      <AnimatedWallpaper />
      <div className="absolute inset-0 z-0">
        <InteractiveGreeting />
      </div>

      {/* Welcome Dialog */}
      {showWelcome && (
        <WelcomeDialog onClose={() => setShowWelcome(false)} />
      )}

      {/* Desktop Icons - Hidden on mobile */}
      <div className="absolute top-4 left-4 hidden md:block z-10">
        <div className="space-y-4">
          {startMenuItems.slice(0, 5).map((item) => (
            <div key={item.id}
                 className="flex flex-col items-center cursor-pointer group w-20 transition-all duration-200 hover:scale-105"
                 data-window-id={item.id}
                 onDoubleClick={() => openWindow(item.id)}>
              <div className="bg-white bg-opacity-90 p-2 rounded border border-gray-300 shadow-lg group-hover:bg-opacity-100 group-hover:shadow-xl transition-all backdrop-blur-sm transform group-active:scale-95">
                <item.icon size={32} className="text-blue-600" />
              </div>
              <span className="text-white text-xs mt-1 text-center drop-shadow-lg font-semibold bg-black bg-opacity-30 px-2 py-1 rounded backdrop-blur-sm group-hover:bg-opacity-50 transition-all">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Windows - All fullscreen */}
      {windows.map((window) => (
        window.isOpen && !window.isMinimized && (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            position={window.position}
            size={window.size}
            zIndex={window.zIndex}
            isAnimating={window.isAnimating}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onBringToFront={() => bringToFront(window.id)}
            onPositionChange={(position) => updateWindowPosition(window.id, position)}
          >
            <window.component />
          </Window>
        )
      ))}
  
      {/* Start Menu */}
      {isStartMenuOpen && (
        <StartMenu
          items={startMenuItems}
          onItemClick={openWindow}
          onClose={() => setIsStartMenuOpen(false)}
        />
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-blue-600 to-blue-500 border-t-2 border-blue-300 shadow-lg backdrop-blur-sm bg-opacity-95 z-50">
        <div className="flex items-center justify-between h-full px-2">
          {/* Start Button */}
          <button
            className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-b from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 
                       border-2 border-green-300 rounded shadow-inner text-white font-bold text-sm transition-all transform
                       active:from-green-500 active:to-green-600 active:scale-95 hover:scale-105"
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          >
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-br from-red-500 to-yellow-500 rounded-sm"></div>
            </div>
            <span>Start</span>
          </button>

          {/* Taskbar Windows */}
          <div className="flex-1 flex space-x-1 mx-2">
            {windows.filter(w => w.isOpen).map((window) => (
              <button
                key={window.id}
                className={`flex items-center space-x-2 px-3 py-1 text-white text-sm font-medium rounded transition-all transform hover:scale-105 active:scale-95
                           ${window.isMinimized 
                             ? 'bg-blue-700 hover:bg-blue-600 shadow-inner' 
                             : 'bg-blue-800 hover:bg-blue-700 shadow-sm'}`}
                onClick={() => window.isMinimized ? restoreWindow(window.id) : minimizeWindow(window.id)}
              >
                <span className="truncate max-w-32">{window.title}</span>
              </button>
            ))}
          </div>

          {/* System Tray */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-white text-sm font-medium bg-blue-700 px-2 py-1 rounded border border-blue-500 shadow-inner hover:bg-blue-600 transition-colors">
              <Clock size={12} />
              <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;