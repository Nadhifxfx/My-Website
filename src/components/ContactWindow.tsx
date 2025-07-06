import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xzzgkkrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-6 h-full flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="text-center max-w-md">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-600 text-sm mb-4">
            Thank you for your message! I'll get back to you as soon as possible.
          </p>
          <div className="bg-white p-3 rounded-lg border border-gray-300 shadow-sm">
            <span className="text-blue-600 font-semibold text-sm">Usually within 24 hours</span>
          </div>
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
              <a 
                href="mailto:nadhiffathur@gmail.com" 
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                nadhiffathur@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border border-green-300">
                <Phone size={16} className="text-green-600" />
              </div>
              <a 
                href="tel:+6208136061328" 
                className="text-sm text-green-600 hover:text-green-800 hover:underline transition-colors"
              >
                +62 813-6061-328
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border border-purple-300">
                <MapPin size={16} className="text-purple-600" />
              </div>
              <span className="text-sm text-gray-700">Sidoarjo, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-center space-x-2">
            <AlertCircle size={16} className="text-red-500" />
            <span className="text-sm text-red-700">{error}</span>
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
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
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
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
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject <span className="text-red-500">*</span>
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
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
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
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-3 px-4 rounded border-2 shadow-lg transition-all flex items-center justify-center space-x-2 ${
                isSubmitting
                  ? 'bg-gray-400 border-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white border-blue-600 active:from-blue-600 active:to-blue-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;