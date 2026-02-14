import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useI18n } from '../config/i18n';

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  gpa?: string;
  highlights: string[];
}

const EducationWindow: React.FC = () => {
  const { t } = useI18n();
  const education: Education[] = [
    {
      degree: 'Informatika',
      institution: 'Nahdlatul Ulama University Sidoarjo',
      location: 'Sidoarjo',
      year: '2022-2025',
      highlights: [
        t('education.edu1.h1'),
        t('education.edu1.h2'),
        t('education.edu1.h3'),
        t('education.edu1.h4'),
      ]
    },
    {
      degree: 'Multimedia',
      institution: 'SMK Antartika 2',
      location: 'Sidoarjo',
      year: '2018-2021',
      highlights: [
        t('education.edu2.h1'),
        t('education.edu2.h2'),
        t('education.edu2.h3'),
      ]
    }
  ];

  const certifications = [
    t('education.cert.1'),
    t('education.cert.2'),
    t('education.cert.3'),
    t('education.cert.4'),
  ];

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center flex items-center justify-center space-x-2">
          <GraduationCap className="text-blue-600" />
          <span>{t('education.title')}</span>
        </h2>

        {/* Education Section */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 border-b-2 border-blue-200 pb-2 dark:border-gray-700">{t('education.academicBackground')}</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg dark:bg-gray-900 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-300">
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold">{edu.institution}</p>
                    
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{edu.year}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center space-x-1">
                          <Award size={14} />
                          <span>{t('education.gpa')}: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <h5 className="font-semibold text-gray-700 dark:text-gray-200 text-sm mb-2">{t('education.keyHighlights')}</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="font-bold text-gray-700 dark:text-gray-200 mb-4 border-b-2 border-green-200 pb-2 dark:border-gray-700">{t('education.certificationsTitle')}</h3>
          <div className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg dark:bg-gray-900 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded border border-green-200 dark:bg-gray-800 dark:border-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border border-green-300">
                    <Award size={16} className="text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWindow;