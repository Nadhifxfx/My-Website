import React, { useState, useRef, useEffect } from 'react';
import { Monitor, User, BookOpen, FolderOpen, Award, Mail, Clock, MessageCircle, Sun, Moon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Window from './Window';
import StartMenu from './StartMenu';
import AnimatedWallpaper from './AnimatedWallpaper';
import InteractiveGreeting from './InteractiveGreeting';
import LoadingScreen from './LoadingScreen';
import WelcomeDialog from './WelcomeDialog';
import ChatBot from './ChatBot';
import ProfileWindow from './ProfileWindow';
import SkillsWindow from './SkillsWindow';
import EducationWindow from './EducationWindow';
import PortfolioWindow from './PortfolioWindow';
import CertificatesWindow from './CertificatesWindow';
import ContactWindow from './ContactWindow';
import { useI18n } from '../config/i18n';
import { useTheme } from '../config/theme';

interface WindowState {
  id: string;
  titleKey: string;
  component: React.ComponentType;
  isOpen: boolean;
  isMinimized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isAnimating?: boolean;
}

interface StartMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const Desktop: React.FC = () => {
  const { t, toggleLang, lang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession') === 'true';

  // Check if this is the first visit in this session
  const [isLoading, setIsLoading] = useState(() => {
    return !hasVisitedThisSession;
  });
  const [showWelcome, setShowWelcome] = useState(false);
  const [showGreeting, setShowGreeting] = useState(() => {
    if (!hasVisitedThisSession) {
      return true;
    }
    // Check if any windows were open before
    const savedState = localStorage.getItem('windowsState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        const hasOpenWindows = parsedState.some((w: { isOpen?: boolean }) => Boolean(w?.isOpen));
        return !hasOpenWindows; // Hide greeting if windows were open
      } catch {
        return true;
      }
    }
    return true;
  });
  const [time, setTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  useEffect(() => {
    const closeStartMenu = () => setIsStartMenuOpen(false);
    const handleVisibilityChange = () => {
      if (document.hidden) {
        closeStartMenu();
      }
    };

    window.addEventListener('blur', closeStartMenu);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.removeEventListener('blur', closeStartMenu);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  // Default windows configuration
  const defaultWindows: WindowState[] = [
    {
      id: 'profile',
      titleKey: 'window.profile',
      component: ProfileWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'skills',
      titleKey: 'window.skills',
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
      titleKey: 'window.education',
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
      titleKey: 'window.projects',
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
      titleKey: 'window.certificates',
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
      titleKey: 'window.contact',
      component: ContactWindow,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    },
    {
      id: 'faq',
      titleKey: 'window.faq',
      component: ChatBot,
      isOpen: false,
      isMinimized: false,
      position: { x: 0, y: 0 },
      size: { width: 0, height: 0 },
      zIndex: 1,
      isAnimating: false
    }
  ];

  // Restore windows state from localStorage
  const [windows, setWindows] = useState<WindowState[]>(() => {
    // On first visit in a new session, always start clean (desktop only).
    // On refresh (same session), restore the currently open windows.
    if (!hasVisitedThisSession) {
      return defaultWindows;
    }

    const savedState = localStorage.getItem('windowsState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        // Merge saved state with default windows to restore components
        return defaultWindows.map(defaultWindow => {
          const savedWindow = parsedState.find((w: { id?: string }) => w.id === defaultWindow.id);
          if (savedWindow) {
            return {
              ...defaultWindow,
              isOpen: Boolean(savedWindow.isOpen),
              isMinimized: Boolean(savedWindow.isMinimized),
              zIndex: typeof savedWindow.zIndex === 'number' ? savedWindow.zIndex : defaultWindow.zIndex,
              position: savedWindow.position ?? defaultWindow.position,
              size: savedWindow.size ?? defaultWindow.size
            };
          }
          return defaultWindow;
        });
      } catch {
        return defaultWindows;
      }
    }
    return defaultWindows;
  });

  const maxZIndex = useRef((() => {
    // Restore maxZIndex from localStorage if available
    if (!hasVisitedThisSession) {
      return 10;
    }
    const savedState = localStorage.getItem('windowsState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        const maxZ = Math.max(
          ...parsedState.map((w: { zIndex?: number }) => (typeof w?.zIndex === 'number' ? w.zIndex : 0)),
          10
        );
        return maxZ;
      } catch {
        return 10;
      }
    }
    return 10;
  })());

  // Save windows state to localStorage whenever it changes
  useEffect(() => {
    const stateToSave = windows.map(({ id, isOpen, isMinimized, position, size, zIndex }) => ({
      id,
      isOpen,
      isMinimized,
      position,
      size,
      zIndex
    }));
    localStorage.setItem('windowsState', JSON.stringify(stateToSave));
  }, [windows]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Mark that user has visited in this session
    sessionStorage.setItem('hasVisitedThisSession', 'true');
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

  const updateWindowPosition = () => {
    // Not used in fullscreen mode, but keeping for interface compatibility
  };

  const startMenuItems: StartMenuItem[] = [
    { id: 'profile', label: t('window.profile'), icon: User },
    { id: 'skills', label: t('window.skills'), icon: Monitor },
    { id: 'education', label: t('window.education'), icon: BookOpen },
    { id: 'projects', label: t('window.projects'), icon: FolderOpen },
    { id: 'certificates', label: t('window.certificates'), icon: Award },
    { id: 'contact', label: t('window.contact'), icon: Mail },
    { id: 'faq', label: t('window.faq'), icon: MessageCircle }
  ];

  const getWindowIcon = (windowId: string) => startMenuItems.find((item) => item.id === windowId)?.icon;

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
      <div className="absolute top-4 left-4 hidden md:block z-0">
        <div className="space-y-4">
          {startMenuItems.slice(0, 7).map((item) => (
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
            title={t(window.titleKey)}
            icon={getWindowIcon(window.id)}
            position={window.position}
            size={window.size}
            zIndex={window.zIndex}
            isAnimating={window.isAnimating}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onBringToFront={() => bringToFront(window.id)}
            onPositionChange={() => updateWindowPosition()}
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
        <div className="flex items-center h-full px-1 sm:px-2 gap-1 sm:gap-2">
          {/* Start Button */}
          <button
            className="shrink-0 flex items-center space-x-2 px-2 sm:px-3 py-1 bg-gradient-to-b from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 
                       border-2 border-green-300 rounded shadow-inner text-white font-bold text-sm transition-all transform
                       active:from-green-500 active:to-green-600 active:scale-95 hover:scale-105"
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          >
            <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-br from-red-500 to-yellow-500 rounded-sm"></div>
            </div>
            <span>{t('start.start')}</span>
          </button>

          {/* Taskbar Windows */}
          <div className="flex-1 min-w-0">
            <div className="h-full flex items-center gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide touch-pan-x">
              {windows.filter(w => w.isOpen).map((window) => (
                <button
                  key={window.id}
                  className={`shrink-0 whitespace-nowrap flex items-center space-x-2 px-2 sm:px-3 py-1 text-white text-xs sm:text-sm font-medium rounded transition-all transform hover:scale-105 active:scale-95
                             ${window.isMinimized 
                               ? 'bg-blue-700 hover:bg-blue-600 shadow-inner' 
                               : 'bg-blue-800 hover:bg-blue-700 shadow-sm'}`}
                  onClick={() => window.isMinimized ? restoreWindow(window.id) : minimizeWindow(window.id)}
                >
                  <span className="truncate max-w-24 sm:max-w-32">{t(window.titleKey)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* System Tray */}
          <div className="shrink-0 flex items-center space-x-1 sm:space-x-2">
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center space-x-1 text-white text-xs font-bold bg-blue-700 px-1.5 sm:px-2 py-1 rounded border border-blue-500 shadow-inner hover:bg-blue-600 transition-colors"
              title={t('tray.changeLanguage')}
              aria-label={t('tray.changeLanguage')}
            >
              <span>{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center text-white text-xs font-bold bg-blue-700 px-1.5 sm:px-2 py-1 rounded border border-blue-500 shadow-inner hover:bg-blue-600 transition-colors"
              title={theme === 'dark' ? t('tray.themeToLight') : t('tray.themeToDark')}
              aria-label={theme === 'dark' ? t('tray.themeToLight') : t('tray.themeToDark')}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <div className="flex items-center space-x-1 text-white text-xs sm:text-sm font-medium bg-blue-700 px-1.5 sm:px-2 py-1 rounded border border-blue-500 shadow-inner hover:bg-blue-600 transition-colors">
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