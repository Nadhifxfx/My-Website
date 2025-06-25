import React, { useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
  category: string;
}

const CertificatesWindow: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Building a .NET ChatBot',
      issuer: 'Staya.Dev',
      date: 'March 2024',
      credentialId: 'AWS-SAA-123456',
      verifyUrl: 'https://drive.google.com/file/d/1QOPGvG3oj6tIqJao-0IB9tG3qrG1ZHxl/view?usp=sharing',
      image: 'https://drive.google.com/uc?export=view&id=1QOPGvG3oj6tIqJao-0IB9tG3qrG1ZHxl',
      category: 'AI & Cloud',
    },
    {
      id: '2',
      title: 'AI Powered Code Generation',
      issuer: 'Staya.Dev',
      date: 'January 2024',
      credentialId: 'GCP-PD-789012',
      verifyUrl: 'https://drive.google.com/file/d/1kO68w30q24bWXNSCH1l2rVgYNbmfHc7_/view?usp=sharing',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'AI & Cloud',
    },
    {
      id: '3',
      title: 'Frontend (Kelola paketmu dengan npm)',
      issuer: 'Dev Coach',
      date: 'November 2022',
      credentialId: 'MDB-DEV-345678',
      verifyUrl: 'https://drive.google.com/file/d/12zuCJXM_Qytjrl7r0TbSLHegmYWe7Aeq/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=12zuCJXM_Qytjrl7r0TbSLHegmYWe7Aeq',
      category: 'Frontend Development',
    },
    {
      id: '4',
      title: 'Backend (Meningkatkan performa rest api dengan cache)',
      issuer: 'Dev Coach',
      date: 'September 2022',
      credentialId: 'CSM-901234',
      verifyUrl: 'https://drive.google.com/file/d/1FV6WIIu3QDeLY-CUJGMWFYkOJaJzMwDz/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1FV6WIIu3QDeLY-CUJGMWFYkOJaJzMwDz',
      category: 'Backend Development',
    },
    {
      id: '5',
      title: 'UI/UX Design website with Figma',
      issuer: 'Meta (Facebook)',
      date: 'July 2022',
      credentialId: 'META-REACT-567890',
      verifyUrl: 'https://drive.google.com/file/d/1bpu8XXBZEbw7AENUBa8FnSOi-GrIA0Nd/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1bpu8XXBZEbw7AENUBa8FnSOi-GrIA0Nd',
      category: 'Frontend Development',
    },
    {
      id: '6',
      title: 'Sertifikat Karirnex Bootcamp Excel 2',
      issuer: 'Karirnex.',
      date: 'May 2022',
      credentialId: 'DOCKER-DCA-234567',
      verifyUrl: 'https://drive.google.com/file/d/17OR6Wbm3hIh90Ue85WJ5GM0TuBQcojua/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=17OR6Wbm3hIh90Ue85WJ5GM0TuBQcojua',
      category: 'Class',
    },
    {
      id: '7',
      title: 'Content Creator Class Participants',
      issuer: 'Hipwee x Kominfo',
      date: 'March 2022',
      credentialId: 'K8S-ADMIN-345678',
      verifyUrl: 'https://drive.google.com/file/d/1XielsJPOKzCgB_w2xOui_D8f7q0r4aAu/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1XielsJPOKzCgB_w2xOui_D8f7q0r4aAu',
      category: 'Content Creation',
    },
    {
      id: '8',
      title: '2nd Winner of Instagram Reels Contest',
      issuer: 'CitraLand Driyorejo CBD',
      date: 'October 2021',
      credentialId: 'PYTHON-DEV-456789',
      verifyUrl: 'https://drive.google.com/file/d/1-dtOvaMsNbdTVigTKvvKbtlhxhqX5FIa/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1-dtOvaMsNbdTVigTKvvKbtlhxhqX5FIa',
      category: 'Competition',
    },
    {
      id: '9',
      title: 'Creative Video Competition Participants',
      issuer: 'PPIM UIN Jakarta',
      date: 'November 2021',
      credentialId: 'COMPTIA-CYSA-567890',
      verifyUrl: 'https://drive.google.com/file/d/1LhqpukutbwbQAHHI4XV6HCKSe5AlC51O/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1LhqpukutbwbQAHHI4XV6HCKSe5AlC51O',
      category: 'Competition',
    },
    {
      id: '10',
      title: 'Finalist Video Contest Competition',
      issuer: 'CitraGarden Sidoarjo',
      date: 'September 2021',
      credentialId: 'IBM-DS-678901',
      verifyUrl: 'https://drive.google.com/file/d/1NAW66izTinVlFZC_kZ2R5PY9HrhWaObq/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1NAW66izTinVlFZC_kZ2R5PY9HrhWaObq',
      category: 'Competition',
    },
  ];

  const categories = [...new Set(certificates.map((cert) => cert.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center space-x-2">
            <Award className="text-yellow-600" />
            <span>Professional Certificates</span>
          </h2>
          <p className="text-gray-600 text-sm mt-2">My professional certifications and achievements</p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium border-2 shadow-sm ${
              selectedCategory === 'All'
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 shadow-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center border-b-2 border-gray-200">
                <div className="w-16 h-16 bg-white rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-lg">
                  <Award size={32} className="text-yellow-600" />
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium border border-blue-200">
                    {cert.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{cert.title}</h3>
                <p className="text-gray-600 text-xs mb-2">{cert.issuer}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500 mb-3">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 text-xs hover:underline"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Verify Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-4 text-center">Certification Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-600">{certificates.length}</div>
              <div className="text-xs text-gray-600">Total Certificates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{categories.length}</div>
              <div className="text-xs text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">2024</div>
              <div className="text-xs text-gray-600">Latest Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-xs text-gray-600">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesWindow;
