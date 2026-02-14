import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../config/i18n';

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

type CertificateInput = Omit<Certificate, 'id'>;

const parseCertificateDate = (dateText: string): number => {
  const text = dateText.trim().toLowerCase();
  const yearMatch = text.match(/\b(\d{4})\b/);
  if (!yearMatch) return 0;

  const year = Number(yearMatch[1]);

  const monthTokenMatch = text.match(/\b([a-z\u00C0-\u017F]+)\b/);
  const monthToken = monthTokenMatch?.[1] ?? '';

  const monthMap: Record<string, number> = {
    jan: 0,
    january: 0,
    januari: 0,
    feb: 1,
    february: 1,
    februari: 1,
    mar: 2,
    march: 2,
    maret: 2,
    apr: 3,
    april: 3,
    mei: 4,
    may: 4,
    jun: 5,
    june: 5,
    juni: 5,
    jul: 6,
    july: 6,
    juli: 6,
    aug: 7,
    august: 7,
    agustus: 7,
    sep: 8,
    sept: 8,
    september: 8,
    okt: 9,
    oct: 9,
    october: 9,
    oktober: 9,
    nov: 10,
    november: 10,
    des: 11,
    dec: 11,
    december: 11,
    desember: 11,
  };

  const month = monthMap[monthToken] ?? monthMap[monthToken.slice(0, 3)] ?? 0;
  return new Date(year, month, 1).getTime();
};

const CertificatesWindow: React.FC = () => {
  const { t } = useI18n();
  const rawCertificates: CertificateInput[] = [
    {
      title: 'Belajar Dasar Pemrograman Web',
      issuer: 'Dicoding Indonesia',
      date: 'February 2026',
      verifyUrl: 'https://drive.google.com/file/d/1e0dd9eQb9d9UuOkpYfMtseaPwfhgc7mb/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1e0dd9eQb9d9UuOkpYfMtseaPwfhgc7mb',
      category: 'Course',
    },
     {
      title: 'Mastering International Journal Writting',
      issuer: 'UNUSIDA x UCSI Malaysia',
      date: 'February 2025',
      verifyUrl: 'https://drive.google.com/file/d/1S-laQQqO5qdjYyOvsYoQuOrtyJ_iZqm-/view?usp=drive_link', 
      image: 'https://lh3.googleusercontent.com/d/1S-laQQqO5qdjYyOvsYoQuOrtyJ_iZqm-',
      category: 'Class',
    },
     {
      title: 'Microsoft Indetity Platforms',
      issuer: 'STYAVA Dev',
      date: 'April 2023',
      verifyUrl: 'https://drive.google.com/file/d/10pY8OC-IdS5znI201-dwwtENFN0xwll0/view?usp=drive_link', 
      image: 'https://lh3.googleusercontent.com/d/10pY8OC-IdS5znI201-dwwtENFN0xwll0',
      category: 'Class',
    },
    {
      title: 'Becoming Young Heroes by Creating Big Impact in Digital Era',
      issuer: 'IPB University',
      date: 'October 2021',
      verifyUrl: 'https://drive.google.com/file/d/112QjCidxFaq0_WrgjHkRASDtfsIjfvvD/view?usp=drive_link', 
      image: 'https://lh3.googleusercontent.com/d/112QjCidxFaq0_WrgjHkRASDtfsIjfvvD',
      category: 'Class',
    },
    {
      title: 'Ngonten Viral Bikin Banjir Orderan',
      issuer: 'PT Digital Dua Media Dotco',
      date: 'February 2024',
      verifyUrl: 'https://drive.google.com/file/d/17uq9ovlrnELpIgt6euUV0HAL1bjQ9YEh/view?usp=drive_link', 
      image: 'https://lh3.googleusercontent.com/d/17uq9ovlrnELpIgt6euUV0HAL1bjQ9YEh',
      category: 'Class',
    },
    {
      title: 'Belajar Dasar Pemrograman Javascript',
      issuer: 'Dicoding Indonesia',
      date: 'February 2026',
      verifyUrl: 'https://drive.google.com/file/d/1J06yYUEHmvkz2Tz3kvfWOFQaB_jT7-Fv/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1J06yYUEHmvkz2Tz3kvfWOFQaB_jT7-Fv',
      category: 'Course',
    },
    {
      title: 'Membuat Front-End Web untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: 'February 2026',
      verifyUrl: 'https://drive.google.com/file/d/13Vg2UpyLOXBFvxQJk1N3Fg9jHzjqRkng/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/13Vg2UpyLOXBFvxQJk1N3Fg9jHzjqRkng',
      category: 'Course',
    },
    {
      title: 'AI Productivity and AI API Integration for Developers',
      issuer: 'Maju Bareng AI',
      date: 'November 2025',
      verifyUrl: 'https://drive.google.com/file/d/1HRN3OnEzF5qxrsd4cW8kZFy6sHMi_ZM6/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1HRN3OnEzF5qxrsd4cW8kZFy6sHMi_ZM6',
      category: 'Class',
    },
    {
      title: 'PINGFEST 2025',
      issuer: 'BEM FATISDA UNS',
      date: 'October 2025',
      verifyUrl: 'https://drive.google.com/file/d/1TMPythYb_bRBasb-RJS99-JMEMbe4BsD/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1TMPythYb_bRBasb-RJS99-JMEMbe4BsD',
      category: 'Course',
    },
    {
      title: 'Code Generation and Optimization Using IBM Granite',
      issuer: 'Hacktiv8 with IBM SkillsBuild',
      date: 'August 2025',
      verifyUrl: 'https://drive.google.com/file/d/1cIKOKIWvlMhE7recA5b9FKyRhUuHTTGA/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1cIKOKIWvlMhE7recA5b9FKyRhUuHTTGA',
      category: 'Course',
    },
    {
      title: 'Building a .NET ChatBot',
      issuer: 'Staya.Dev',
      date: 'March 2024',
      verifyUrl: 'https://drive.google.com/file/d/1QOPGvG3oj6tIqJao-0IB9tG3qrG1ZHxl/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1QOPGvG3oj6tIqJao-0IB9tG3qrG1ZHxl',
      category: 'Class',
    },
    {
      title: 'AI Powered Code Generation',
      issuer: 'Staya.Dev',
      date: 'January 2024',
      verifyUrl: 'https://drive.google.com/file/d/1kO68w30q24bWXNSCH1l2rVgYNbmfHc7_/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1kO68w30q24bWXNSCH1l2rVgYNbmfHc7_',
      category: 'Class',
    },
    {
      title: 'Frontend (Kelola paketmu dengan npm)',
      issuer: 'Dev Coach',
      date: 'November 2022',
      verifyUrl: 'https://drive.google.com/file/d/12zuCJXM_Qytjrl7r0TbSLHegmYWe7Aeq/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/12zuCJXM_Qytjrl7r0TbSLHegmYWe7Aeq',
      category: 'Class',
    },
    {
      title: 'Backend (Meningkatkan performa rest api dengan cache)',
      issuer: 'Dev Coach',
      date: 'September 2022',
      verifyUrl: 'https://drive.google.com/file/d/1FV6WIIu3QDeLY-CUJGMWFYkOJaJzMwDz/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1FV6WIIu3QDeLY-CUJGMWFYkOJaJzMwDz',
      category: 'Class',
    },
    {
      title: 'UI/UX Design website with Figma',
      issuer: 'BuildWithAngga',
      date: 'July 2022',
      verifyUrl: 'https://drive.google.com/file/d/1bpu8XXBZEbw7AENUBa8FnSOi-GrIA0Nd/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1bpu8XXBZEbw7AENUBa8FnSOi-GrIA0Nd',
      category: 'Course',
    },
    {
      title: 'Finalist Video Contest Competition',
      issuer: 'CitraGarden Sidoarjo',
      date: 'June 2022',
      verifyUrl: 'https://drive.google.com/file/d/1NAW66izTinVlFZC_kZ2R5PY9HrhWaObq/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1NAW66izTinVlFZC_kZ2R5PY9HrhWaObq',
      category: 'Competition',
    },
    {
      title: 'Karirnex Bootcamp Excel 2',
      issuer: 'Karirnex',
      date: 'May 2022',
      verifyUrl: 'https://drive.google.com/file/d/17OR6Wbm3hIh90Ue85WJ5GM0TuBQcojua/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/17OR6Wbm3hIh90Ue85WJ5GM0TuBQcojua',
      category: 'Course',
    },
    {
      title: 'Content Creator Class Participants',
      issuer: 'Hipwee x Kominfo',
      date: 'October 2021',
      verifyUrl: 'https://drive.google.com/file/d/1XielsJPOKzCgB_w2xOui_D8f7q0r4aAu/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1XielsJPOKzCgB_w2xOui_D8f7q0r4aAu',
      category: 'Class',
    },
    {
      title: '2nd Winner of Instagram Reels Contest',
      issuer: 'CitraLand Driyorejo CBD',
      date: 'October 2021',
      verifyUrl: 'https://drive.google.com/file/d/1-dtOvaMsNbdTVigTKvvKbtlhxhqX5FIa/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1-dtOvaMsNbdTVigTKvvKbtlhxhqX5FIa',
      category: 'Competition',
    },
    {
      title: 'Creative Video Competition Participants',
      issuer: 'PPIM UIN Jakarta',
      date: 'September 2021',
      verifyUrl: 'https://drive.google.com/file/d/1LhqpukutbwbQAHHI4XV6HCKSe5AlC51O/view?usp=drive_link',
      image: 'https://lh3.googleusercontent.com/d/1LhqpukutbwbQAHHI4XV6HCKSe5AlC51O',
      category: 'Competition',
    },
    
  ];

  const certificates: Certificate[] = rawCertificates
    .map((cert, originalIndex) => ({ cert, originalIndex }))
    .sort((a, b) => {
      const dateDiff = parseCertificateDate(b.cert.date) - parseCertificateDate(a.cert.date);
      if (dateDiff !== 0) return dateDiff;
      return a.originalIndex - b.originalIndex;
    })
    .map((item, index) => ({
      ...item.cert,
      id: String(index + 1),
    }));

  const latestYear = Math.max(
    0,
    ...certificates
      .map((cert) => cert.date.match(/\b(\d{4})\b/)?.[1])
      .filter((year): year is string => Boolean(year))
      .map((year) => Number(year)),
  );

  const categories = [...new Set(certificates.map((cert) => cert.category))];
  const allCategory = 'All';
  const [selectedCategory, setSelectedCategory] = useState<string>(allCategory);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const certificatesPerPage = 6;

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Course':
        return t('certificates.category.course');
      case 'Class':
        return t('certificates.category.class');
      case 'Competition':
        return t('certificates.category.competition');
      default:
        return category;
    }
  };

  const handleImageError = (id: string) => {
    setImageError((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const filteredCertificates =
    selectedCategory === allCategory
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
    const maxVisible = 5;
    const pages: number[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center space-x-2">
            <Award className="text-yellow-600" />
            <span>{t('certificates.title')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{t('certificates.subtitle')}</p>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => handleCategoryChange(allCategory)}
            className={`px-4 py-2 rounded-full text-sm font-medium border-2 shadow-sm ${
              selectedCategory === allCategory
                ? 'bg-blue-500 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
            }`}
          >
            {t('certificates.filter.all')}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 shadow-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
              }`}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCertificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden hover:shadow-xl transition-shadow group dark:bg-gray-900 dark:border-gray-700">
              <div className="h-48 overflow-hidden border-b-2 border-gray-200 bg-gray-100 relative">
                {!imageError[cert.id] ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={() => handleImageError(cert.id)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                      <Award size={32} className="text-yellow-600" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium border border-blue-200">
                    {getCategoryLabel(cert.category)}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">{cert.issuer}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400 mb-3">
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
                    {t('certificates.verify')}
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
              <span>{t('certificates.prev')}</span>
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
              <span>{t('certificates.next')}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Summary Stats */}
        <div className="mt-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">{t('certificates.summary')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-600">{certificates.length}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('certificates.stats.total')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{categories.length}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('certificates.stats.categories')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{latestYear || '-'}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('certificates.stats.latestYear')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('certificates.stats.verified')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesWindow;
