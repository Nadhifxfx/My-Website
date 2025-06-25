import React from 'react';
import { User, MapPin, Calendar, Mail, Download, Github, Linkedin, Twitter, Instagram, Globe,  } from 'lucide-react';

const ProfileWindow: React.FC = () => {
  const handleDownloadPDF = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/19HFh1wDUeZ-ZNdYP5xD2UvO_4KYM3M8L/view?usp=sharing'; // In real implementation, this would be the actual PDF URL
    link.download = 'Nadhif_Portofolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download notification
    alert('Portfolio PDF download started! (Demo version)');
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
      url: 'https://www.instagram.com/nd10.mp4/',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      hoverColor: 'hover:bg-pink-200'
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

        {/* Download Portfolio Button */}
        <div className="mb-6">
          <button
            onClick={handleDownloadPDF}
            className="w-full bg-gradient-to-b from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold py-3 px-4 rounded border-2 border-red-600 shadow-lg transition-all active:from-red-600 active:to-red-700 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95"
          >
            <Download size={20} />
            <span>Download Portfolio PDF</span>
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