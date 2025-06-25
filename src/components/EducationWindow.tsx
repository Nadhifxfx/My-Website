import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  gpa?: string;
  highlights: string[];
}

const EducationWindow: React.FC = () => {
  const education: Education[] = [
    {
      degree: 'Inofrmatika',
      institution: 'Universitas Nahdlatul Ulama',
      location: 'Sidoarjo',
      year: '2022-2025',
      highlights: [
        'Specialized in Machine Learning and AI',
        'Graduate Teaching Assistant for Data Structures',
        'Published research on distributed systems'
      ]
    },
    {
      degree: 'Multimedia',
      institution: 'SMK Antartika 2',
      location: 'Sidoarjo',
      year: '2018-2021',
      highlights: [
        'Summa Cum Laude graduate',
        'President of Computer Science Society',
        'Winner of Annual Hackathon 2018'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Scrum Master Certification'
  ];

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center space-x-2">
          <GraduationCap className="text-blue-600" />
          <span>Education</span>
        </h2>

        {/* Education Section */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-700 mb-4 border-b-2 border-blue-200 pb-2">Academic Background</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-300">
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold">{edu.institution}</p>
                    
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
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
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <h5 className="font-semibold text-gray-700 text-sm mb-2">Key Highlights:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
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
          <h3 className="font-bold text-gray-700 mb-4 border-b-2 border-green-200 pb-2">Education Certifications</h3>
          <div className="bg-white p-5 rounded-lg border-2 border-gray-300 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded border border-green-200">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border border-green-300">
                    <Award size={16} className="text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{cert}</span>
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