import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

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
      verifyUrl: 'https://drive.google.com/file/d/1QOPGvG3oj6tIqJao-0IB9tG3qrG1ZHxl/view?usp=sharing',
      image: 'https://drive.google.com/uc?export=view&id=1QOPGvG3oj6tIqJao-0IB9tG3qrG1ZHxl',
      category: 'Class',
    },
    {
      id: '2',
      title: 'AI Powered Code Generation',
      issuer: 'Staya.Dev',
      date: 'January 2024',
      verifyUrl: 'https://drive.google.com/file/d/1kO68w30q24bWXNSCH1l2rVgYNbmfHc7_/view?usp=sharing',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150',
      category: 'Class',
    },
    {
      id: '3',
      title: 'Frontend (Kelola paketmu dengan npm)',
      issuer: 'Dev Coach',
      date: 'November 2022',
      verifyUrl: 'https://drive.google.com/file/d/12zuCJXM_Qytjrl7r0TbSLHegmYWe7Aeq/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=12zuCJXM_Qytjrl7r0TbSLHegmYWe7Aeq',
      category: 'Class',
    },
    {
      id: '4',
      title: 'Backend (Meningkatkan performa rest api dengan cache)',
      issuer: 'Dev Coach',
      date: 'September 2022',
      verifyUrl: 'https://drive.google.com/file/d/1FV6WIIu3QDeLY-CUJGMWFYkOJaJzMwDz/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1FV6WIIu3QDeLY-CUJGMWFYkOJaJzMwDz',
      category: 'Class',
    },
    {
      id: '5',
      title: 'UI/UX Design website with Figma',
      issuer: 'BuildWithAngga',
      date: 'July 2022',
      verifyUrl: 'https://drive.google.com/file/d/1bpu8XXBZEbw7AENUBa8FnSOi-GrIA0Nd/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1bpu8XXBZEbw7AENUBa8FnSOi-GrIA0Nd',
      category: 'Course',
    },
    {
      id: '6',
      title: 'Sertifikat Karirnex Bootcamp Excel 2',
      issuer: 'Karirnex',
      date: 'May 2022',
      verifyUrl: 'https://drive.google.com/file/d/17OR6Wbm3hIh90Ue85WJ5GM0TuBQcojua/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=17OR6Wbm3hIh90Ue85WJ5GM0TuBQcojua',
      category: 'Course',
    },
    {
      id: '7',
      title: 'Content Creator Class Participants',
      issuer: 'Hipwee x Kominfo',
      date: 'March 2022',
      verifyUrl: 'https://drive.google.com/file/d/1XielsJPOKzCgB_w2xOui_D8f7q0r4aAu/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1XielsJPOKzCgB_w2xOui_D8f7q0r4aAu',
      category: 'Class',
    },
    {
      id: '8',
      title: '2nd Winner of Instagram Reels Contest',
      issuer: 'CitraLand Driyorejo CBD',
      date: 'October 2021',
      verifyUrl: 'https://drive.google.com/file/d/1-dtOvaMsNbdTVigTKvvKbtlhxhqX5FIa/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1-dtOvaMsNbdTVigTKvvKbtlhxhqX5FIa',
      category: 'Competition',
    },
    {
      id: '9',
      title: 'Creative Video Competition Participants',
      issuer: 'PPIM UIN Jakarta',
      date: 'September 2021',
      verifyUrl: 'https://drive.google.com/file/d/1LhqpukutbwbQAHHI4XV6HCKSe5AlC51O/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1LhqpukutbwbQAHHI4XV6HCKSe5AlC51O',
      category: 'Competition',
    },
    {
      id: '10',
      title: 'Finalist Video Contest Competition',
      issuer: 'CitraGarden Sidoarjo',
      date: 'June 2022',
      verifyUrl: 'https://drive.google.com/file/d/1NAW66izTinVlFZC_kZ2R5PY9HrhWaObq/view?usp=drive_link',
      image: 'https://drive.google.com/uc?export=view&id=1NAW66izTinVlFZC_kZ2R5PY9HrhWaObq',
      category: 'Competition',
    },
     {
      id: '11',
      title: 'Code Generation and Optimization Using IBM Granite',
      issuer: 'Hacktiv8 with IBM SkillsBuild',
      date: 'August 2022',
      verifyUrl: 'https://drive.google.com/file/d/1cIKOKIWvlMhE7recA5b9FKyRhUuHTTGA/view?usp=sharing',
      image: 'https://drive.google.com/uc?export=view&id=1cIKOKIWvlMhE7recA5b9FKyRhUuHTTGA',
      category: 'Course',
    },
  ];

  const categories = [...new Set(certificates.map((cert) => cert.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const certificatesPerPage = 6;

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const totalPages = Math.ceil(filteredCertificates.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const endIndex = startIndex + certificatesPerPage;
  const currentCertificates = filteredCertificates.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    const pages: number[] = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

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
            onClick={() => handleCategoryChange('All')}
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
              onClick={() => handleCategoryChange(category)}
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
          {currentCertificates.map((cert) => (
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 mb-8 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center space-x-1 px-4 py-2 rounded text-sm font-medium border-2 shadow-sm transition-colors ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-50'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Prev</span>
            </button>

            <div className="flex gap-1 flex-wrap justify-center">
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded text-sm font-medium border-2 shadow-sm transition-colors ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center space-x-1 px-4 py-2 rounded text-sm font-medium border-2 shadow-sm transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-50'
              }`}
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

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
