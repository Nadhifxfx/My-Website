import React, { useState, useEffect } from 'react';
import { User, X } from 'lucide-react';

interface WelcomeDialogProps {
  onClose: () => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show dialog with animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className={`bg-white border-2 border-gray-400 rounded shadow-2xl max-w-md w-full transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{ fontFamily: 'Tahoma, Verdana, sans-serif' }}
      >
        {/* Dialog Title Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-2 flex items-center justify-between border-b-2 border-blue-400">
          <div className="flex items-center space-x-2">
            
            <div className="w-4 h-4 bg-white bg-opacity-20 rounded border border-white border-opacity-30 flex items-center justify-center">
              <User size={10} className="text-white" />
              
            </div>
            <span className="font-bold text-sm">Welcome</span>
          </div>
          <button
            className="w-6 h-6 bg-red-500 hover:bg-red-400 border border-red-600 rounded-sm flex items-center justify-center shadow-sm active:shadow-inner transition-colors"
            onClick={handleClose}
            title="Close"
          >
            <X size={12} className="text-white" />
          </button>
        </div>

        {/* Dialog Content */}
        <div className="p-6">
          {/* Welcome Icon */}
          <div className="text-center mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-b from-blue-200 to-blue-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-3">
              <User size={32} className="text-blue-600" />
              <img 
          src="/Profile.png" 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full" 
          />
            </div>
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-yellow-300 shadow-lg flex items-center justify-center -mt-8 ml-8">
              <span className="text-white font-bold text-lg">!</span>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Welcome to my Website!
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Hello! Thank you for visiting my personal website. 
              I am Nadhif Fathur Rahman, an unemployed person with over 5 years of experience 
              in accepting freelance jobs.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
             Please feel free to explore the various features on the desktop to view my profile, skills, 
            education, portfolio, certificates, and how to contact me. cara menghubungi saya.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="bg-gray-50 p-4 rounded border border-gray-300 mb-4">
            <h3 className="font-bold text-gray-700 text-sm mb-2">Quick Navigation:</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Click “Start” for the menu</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Double-click icon desktop</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Use the bottom taskbar</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Minimize/Close window</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button
              className="flex-1 bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded border-2 border-blue-600 shadow-lg transition-all active:from-blue-600 active:to-blue-700 text-sm"
              onClick={handleClose}
            >
              Mulai Jelajahi
            </button>
            <button
              className="bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-bold py-2 px-4 rounded border-2 border-gray-400 shadow-lg transition-all active:from-gray-400 active:to-gray-500 text-sm"
              onClick={handleClose}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDialog;