import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 h-full flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="text-center">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
          <p className="text-gray-600 text-sm">Thank you for your message. I'll get back to you soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center space-x-2">
            <Mail className="text-blue-600" />
            <span>Get In Touch</span>
          </h2>
          <p className="text-gray-600 text-sm mt-2">I'd love to hear from you. Send me a message!</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-4 rounded-lg border-2 border-gray-300 shadow-lg mb-6">
          <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Mail size={16} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-700">nadhiffathur@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border border-green-300">
                <Phone size={16} className="text-green-600" />
              </div>
              <span className="text-sm text-gray-700">08136061328</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border border-purple-300">
                <MapPin size={16} className="text-purple-600" />
              </div>
              <span className="text-sm text-gray-700">Indonesia</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold py-3 px-4 rounded border-2 border-blue-600 shadow-lg transition-all active:from-blue-600 active:to-blue-700 flex items-center justify-center space-x-2"
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;