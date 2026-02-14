import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useI18n } from '../config/i18n';

const ContactWindow: React.FC = () => {
  const { t } = useI18n();
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
    } catch {
      setError(t('contact.error.sendFailed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-6 h-full flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="text-center max-w-md">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t('contact.success.title')}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {t('contact.success.body')}
          </p>
          <div className="bg-white p-3 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-900 dark:border-gray-700">
            <span className="text-blue-600 font-semibold text-sm">{t('contact.success.eta')}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center space-x-2">
            <Mail className="text-blue-600" />
            <span>{t('contact.title')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{t('contact.subtitle')}</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-4 rounded-lg border-2 border-gray-300 shadow-lg mb-6 dark:bg-gray-900 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2 dark:text-gray-100 dark:border-gray-700">{t('contact.infoTitle')}</h3>
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
              <span className="text-sm text-gray-700 dark:text-gray-200">{t('contact.location')}</span>
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
        <div className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                {t('contact.form.name')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                placeholder={t('contact.form.placeholder.name')}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                {t('contact.form.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                placeholder={t('contact.form.placeholder.email')}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                {t('contact.form.subject')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                placeholder={t('contact.form.placeholder.subject')}
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                {t('contact.form.message')} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 shadow-inner text-sm resize-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                placeholder={t('contact.form.placeholder.message')}
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
                  <span>{t('contact.form.sending')}</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>{t('contact.form.send')}</span>
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