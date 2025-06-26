import React, { useRef, useEffect, useState } from 'react';
import { DivideIcon as LucideIcon, Power, Settings } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: typeof LucideIcon;
}

interface StartMenuProps {
  items: MenuItem[];
  onItemClick: (id: string) => void;
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ items, onItemClick, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleItemClick = (id: string) => {
    const clickedButton = document.querySelector(`[data-menu-item="${id}"]`);
    if (clickedButton) {
      clickedButton.classList.add('animate-pulse');
      setTimeout(() => {
        clickedButton.classList.remove('animate-pulse');
      }, 200);
    }

    setTimeout(() => {
      onItemClick(id);
    }, 100);
  };

  const handleShutdownClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmShutdown = () => {
    // Add shutdown animation effect
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
      // Try multiple methods to close the tab
      try {
        // Method 1: Close current window/tab
        window.close();
        
        // Method 2: If window.close() doesn't work, try to navigate away
        setTimeout(() => {
          window.location.href = 'about:blank';
        }, 100);
        
        // Method 3: As a fallback, show a message
        setTimeout(() => {
          alert('Silakan tutup tab ini secara manual dengan menekan Ctrl+W atau mengklik tombol X pada tab.');
        }, 500);
      } catch (error) {
        // If all methods fail, show instruction
        alert('Silakan tutup tab ini secara manual dengan menekan Ctrl+W atau mengklik tombol X pada tab.');
      }
    }, 500);
  };

  const handleCancelShutdown = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <div
        ref={menuRef}
        className="absolute bottom-10 left-0 w-80 bg-white border-2 border-gray-400 rounded-tr-lg shadow-xl z-50 animate-slide-up"
        style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}
      >
        {/* Start Menu Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex items-center space-x-3">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-2 border-white border-opacity-30">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <img 
          src="/Profile.png" 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full" 
          />
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">Welcome</div>
            <div className="text-sm opacity-90">Nadhif</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              data-menu-item={item.id}
              className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-blue-100 text-left transition-all transform hover:scale-105 active:scale-95 hover:shadow-sm"
              onClick={() => handleItemClick(item.id)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-8 h-8 bg-blue-50 rounded border border-blue-200 flex items-center justify-center transition-all hover:bg-blue-100 hover:border-blue-300">
                <item.icon size={16} className="text-blue-600" />
              </div>
              <span className="font-medium text-gray-800">{item.label}</span>
            </button>
          ))}

          <hr className="my-2 border-gray-300" />
          <button 
            className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-100 text-left transition-all transform hover:scale-105 active:scale-95"
            onClick={handleShutdownClick}
          >
            <div className="w-8 h-8 bg-red-50 rounded border border-red-200 flex items-center justify-center hover:bg-red-100">
              <Power size={16} className="text-red-600" />
            </div>
            <span className="font-medium text-gray-800">Shut Down</span>
          </button>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes slide-up {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
        `}</style>
      </div>

      {/* Modal Confirm */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 border-2 border-gray-300 animate-bounce-in">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Power size={24} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Konfirmasi Shutdown</h2>
                <p className="text-sm text-gray-600">Website akan ditutup</p>
              </div>
            </div>
            <p className="mb-6 text-gray-700">Apakah Anda yakin ingin menutup tab ini?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelShutdown}
                className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-all transform hover:scale-105 active:scale-95"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmShutdown}
                className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg"
              >
                Tapi Bohong
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Additional CSS for bounce-in animation */}
      <style>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default StartMenu;