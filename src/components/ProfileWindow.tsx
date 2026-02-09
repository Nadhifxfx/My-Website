import React from 'react';
import { User, MapPin, Calendar, Mail, Download, Github, Linkedin, Instagram } from 'lucide-react';

// Custom Social Media Icons
const BehanceIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const DribbbleIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
    <path d="M8.56 2.75c4.37 6 6 9.42 6 17.5"/>
  </svg>
);

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const ProfileWindow: React.FC = () => {
  const handleDownloadPDF = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1RXOyUrih2IjAOFR6jfLkvzodPbynx9n0/view?usp=sharing'; // In real implementation, this would be the actual PDF URL
    link.download = 'Nadhif_Portofolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download notification
    alert('Portfolio has been successfully opened!');
  };

  const handleDownloadCV = () => {
    // Simulate CV download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1ubPGlz7I35VuiXlNot5v1x0tuXKeLJVb/view?usp=sharing';
    link.download = 'Nadhif_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download notification
    alert('CV has been successfully opened!');
  };

  const socialMediaLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Nadhifxfx',
      color: 'text-gray-700',
      bgColor: 'bg-gray-100',
      hoverColor: 'hover:bg-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/nadhifxfx/',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/nadhifxfx/',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      hoverColor: 'hover:bg-pink-200'
    },
    {
      name: 'Behance',
      icon: BehanceIcon,
      url: 'https://www.behance.net/nadhifxfx',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      name: 'Dribbble',
      icon: DribbbleIcon,
      url: 'https://dribbble.com/nadhifxfx',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@nadhifxfx',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100'
    }
  ];

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-md mx-auto">
        {/* Profile Image */}
        <div className="text-center mb-6">
          <div className="w-32 h-32 mx-auto bg-gradient-to-b from-blue-200 to-blue-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <img 
          src="/Profile.png" 
          alt="Profile" 
          className="w-full h-full object-cover rounded-full" 
          />
            <User size={64} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">Nadhif Fathur Rahman</h2>
          <p className="text-blue-600 font-semibold">Sang Pencari Loker</p>
        </div>

        {/* Download Buttons */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleDownloadPDF}
            className="bg-gradient-to-b from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold py-3 px-4 rounded border-2 border-red-600 shadow-lg transition-all active:from-red-600 active:to-red-700 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
          >
            <Download size={20} />
            <span>Portfolio</span>
          </button>
          <button
            onClick={handleDownloadCV}
            className="bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-3 px-4 rounded border-2 border-blue-600 shadow-lg transition-all active:from-blue-600 active:to-blue-700 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
          >
            <Download size={20} />
            <span>Curriculum Vitae </span>
          </button>
        </div>

        {/* Social Media Links */}
        <div className="bg-white p-4 rounded border-2 border-gray-300 shadow-inner mb-4">
          <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2 text-center">Connect With Me</h3>
          <div className="grid grid-cols-3 gap-3">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.bgColor} ${social.hoverColor} p-3 rounded-lg border-2 border-gray-200 shadow-sm transition-all transform hover:scale-110 active:scale-95 flex flex-col items-center space-y-1 hover:shadow-md`}
                title={social.name}
              >
                <social.icon size={20} className={social.color} />
                <span className="text-xs font-medium text-gray-700">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="bg-white p-4 rounded border-2 border-gray-300 shadow-inner mb-4">
          <h3 className="font-bold text-gray-800 mb-2 border-b border-gray-200 pb-1">About Me</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Hello! I am Nadhif Fathur Rahman, an enthusiastic and committed individual who enjoys continuous learning and solving problems creatively. With a strong interest in design and editing, I strive to make a meaningful impact through collaboration and meaningful work.  
            I am enthusiastic about trying new things and continuously strive to learn and improve my skills every day.Currently, I am focused on developing my skills in programming and am open to new opportunities where I can grow, contribute, and connect with like-minded individuals.   
          </p>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 bg-white p-3 rounded border border-gray-300 shadow-sm">
            <MapPin size={16} className="text-blue-600" />
            <span className="text-gray-700 text-sm">Indonesia</span>
          </div>
          
          <div className="flex items-center space-x-3 bg-white p-3 rounded border border-gray-300 shadow-sm">
            <Calendar size={16} className="text-blue-600" />
            <span className="text-gray-700 text-sm">5+ Years Experience</span>
          </div>
          
          <div className="flex items-center space-x-3 bg-white p-3 rounded border border-gray-300 shadow-sm">
            <Mail size={16} className="text-blue-600" />
            <span className="text-gray-700 text-sm">nadhiffathur@gmail.com</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 bg-white p-4 rounded border-2 border-gray-300 shadow-inner">
          <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-1">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-xs text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">5+</div>
              <div className="text-xs text-gray-600">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWindow;