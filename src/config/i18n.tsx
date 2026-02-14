/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'id';

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const STORAGE_KEY = 'language';

const translations: Record<Language, Record<string, string>> = {
  en: {
    'lang.en': 'EN',
    'lang.id': 'ID',

    'window.profile': 'Profile',
    'window.skills': 'Skills',
    'window.education': 'Education',
    'window.projects': 'Projects',
    'window.certificates': 'Certificates',
    'window.contact': 'Contact',
    'window.faq': 'FAQ',

    'menu.welcome': 'Welcome',
    'menu.shutdown': 'Shut Down',
    'menu.shutdownTitle': 'Shutdown Confirmation',
    'menu.shutdownSubtitle': 'The website will be closed',
    'menu.shutdownQuestion': 'Are you sure you want to close this tab?',
    'menu.cancel': 'Cancel',
    'menu.yes': 'Yes',

    'start.start': 'Start',

    'common.close': 'Close',
    'window.controls.minimize': 'Minimize',
    'window.controls.close': 'Close',

    'tray.changeLanguage': 'Change language',
    'tray.toggleTheme': 'Toggle theme',
    'tray.themeToDark': 'Switch to dark mode',
    'tray.themeToLight': 'Switch to light mode',

    'desktop.hello': 'Hello World',
    'desktop.tagline': 'Not just visuals but a way of thinking',
    'desktop.hint': 'Double-click the icon or press the Start menu located at the bottom',

    'welcome.title': 'Welcome',
    'welcome.heading': 'Welcome to my Website!',
    'welcome.p1':
      'Hello! Thank you for visiting my personal website. I am Nadhif Fathur Rahman, an unemployed person with over 5 years of experience in accepting freelance jobs.',
    'welcome.p2':
      'Please feel free to explore the various features on the desktop to view my profile, skills, education, portfolio, certificates, and how to contact me.',
    'welcome.quickNav': 'Quick Navigation:',
    'welcome.nav.startMenu': 'Click “Start” for the menu',
    'welcome.nav.desktopIcon': 'Double-click desktop icon',
    'welcome.nav.taskbar': 'Use the bottom taskbar',
    'welcome.nav.windowControls': 'Minimize/Close window',
    'welcome.exploreNow': 'Explore Now',
    'welcome.close': 'Close',

    'profile.badge': 'Job Seeker',
    'profile.download.portfolio': 'Portfolio',
    'profile.download.cv': 'Curriculum Vitae',
    'profile.alert.portfolioOpened': 'Portfolio has been successfully opened!',
    'profile.alert.cvOpened': 'CV has been successfully opened!',
    'profile.bio':
      'Hello! I am Nadhif Fathur Rahman, an enthusiastic and committed individual who enjoys continuous learning and solving problems creatively. With a strong interest in design and editing, I strive to make a meaningful impact through collaboration and meaningful work. I am enthusiastic about trying new things and continuously strive to learn and improve my skills every day. Currently, I am focused on developing my skills in programming and am open to new opportunities where I can grow, contribute, and connect with like-minded individuals.',

    'loading.loading': 'Loading',
    'loading.welcome': 'Welcome',
    'loading.complete': '% complete',
    'loading.msg.starting': 'Starting Windows...',
    'loading.msg.files': 'Loading system files...',
    'loading.msg.init': 'Initializing components...',
    'loading.msg.profile': 'Loading user profile...',
    'loading.msg.desktop': 'Preparing desktop...',
    'loading.msg.ready': 'Almost ready...',

    'portfolio.title': 'Projects',
    'portfolio.subtitle': 'A collection of my recent projects and work',
    'portfolio.filter.all': 'All',
    'portfolio.view': 'View',
    'portfolio.prev': 'Prev',
    'portfolio.next': 'Next',
    'portfolio.stats.title': 'Total Projects',
    'portfolio.stats.projects': 'Projects',
    'portfolio.stats.categories': 'Categories',
    'portfolio.stats.latestYear': 'Latest Year',
    'portfolio.stats.success': 'Success',

    'profile.connect': 'Connect With Me',
    'profile.about': 'About Me',
    'profile.location': 'Indonesia',
    'profile.experience': '5+ Years Experience',
    'profile.stats': 'Quick Stats',
    'profile.stats.projects': 'Projects',
    'profile.stats.clients': 'Clients',

    'contact.title': 'Get In Touch',
    'contact.subtitle': "I'd love to hear from you. Send me a message!",
    'contact.infoTitle': 'Contact Information',
    'contact.location': 'Sidoarjo, Indonesia',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your full name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.subject': "What's this about?",
    'contact.form.placeholder.message': 'Tell me about your project or just say hello!',
    'contact.form.sending': 'Sending...',
    'contact.form.send': 'Send Message',
    'contact.success.title': 'Message Sent Successfully!',
    'contact.success.body': "Thank you for your message! I'll get back to you as soon as possible.",
    'contact.success.eta': 'Usually within 24 hours',
    'contact.error.sendFailed': 'Failed to send message. Please try again or contact directly via email.',

    'chatbot.title': 'FAQ Assistant',
    'chatbot.subtitle': 'Ask me anything about Nadhif',
    'chatbot.placeholder': 'Ask me anything about Nadhif...',
    'chatbot.tryAsking': 'Try asking:',
    'chatbot.pressEnter': 'Press Enter to send',
    'chatbot.q.skills': "Tell me about Nadhif's skills",
    'chatbot.q.projects': 'What projects has he worked on?',
    'chatbot.q.certificates': 'What certifications does he have?',
    'chatbot.q.contact': 'How can I contact him?',
    'chatbot.q.experience': "What's his experience?",
    'chatbot.a.intro': "Hello! I'm your FAQ assistant. Ask me anything about Nadhif's skills, projects, or experience!",
    'chatbot.a.skills':
      'Nadhif has expertise in Programming (HTML, TypeScript, React, Node.js, Python), Design (Canva, Adobe Photoshop, Adobe Illustrator, Figma), and Video Editing (CapCut, After Effects, Premiere Pro, Vegas Pro).',
    'chatbot.a.experience':
      'Nadhif has 5+ years of experience in web development, graphic design, and video editing. He has worked on various projects including websites, mobile app UI/UX, video content, and branding materials.',
    'chatbot.a.projects':
      'Some notable projects include: Graduation Film Class XVII 2021, INACOM Modern Logo Concept, Bank Indonesia Investment Program video, NDComps10 Football Website UI, Byon Combat Website, Gamified Qur\'an Learning App UI/UX, and many more across programming, design, and video editing.',
    'chatbot.a.education':
      'Nadhif is currently pursuing his education while actively working on various creative and technical projects. He has completed multiple certifications including Building a .NET ChatBot, AI Powered Code Generation, and UI/UX Design with Figma.',
    'chatbot.a.contact':
      'You can reach Nadhif at nadhiffathur@gmail.com or connect with him on GitHub (github.com/Nadhifxfx), LinkedIn (linkedin.com/in/nadhifxfx/), or Instagram (@nadhifxfx).',
    'chatbot.a.certificates':
      'Nadhif has earned multiple certifications including Building a .NET ChatBot from Staya.Dev, AI Powered Code Generation, UI/UX Design website with Figma from BuildWithAngga, and several competition awards including 2nd Winner of Instagram Reels Contest.',
    'chatbot.a.greeting':
      "Hello! I'm here to help you learn more about Nadhif. You can ask me about his skills, projects, experience, education, certifications, or how to contact him.",
    'chatbot.a.default':
      "I can help you with information about Nadhif's skills, projects, experience, education, certifications, or contact details. What would you like to know?",

    'education.title': 'Education',
    'education.academicBackground': 'Academic Background',
    'education.keyHighlights': 'Key Highlights:',
    'education.gpa': 'GPA',
    'education.certificationsTitle': 'Education Certifications',
    'education.edu1.h1': 'Specialized in Machine Learning and AI',
    'education.edu1.h2': 'Studied web development using HTML, React and Node.js',
    'education.edu1.h3': 'Built simple games using Godot and Construct',
    'education.edu1.h4': 'Learned Deep Learning concepts with Roboflow',
    'education.edu2.h1': 'Created a short film for final project and school competitions',
    'education.edu2.h2': 'Joined the broadcasting extracurricular club and produced digital content',
    'education.edu2.h3': 'Experienced in graphic design, video editing, and animation',
    'education.cert.1': 'Multimedia Training Program',
    'education.cert.2': 'Multimedia Visualization Processing – BNSP',
    'education.cert.3': 'Building a .NET ChatBot',
    'education.cert.4': 'Expertise Competency from PT. Indo Bismar Surabaya',

    'certificates.title': 'Professional Certificates',
    'certificates.subtitle': 'My professional certifications and achievements',
    'certificates.filter.all': 'All',
    'certificates.category.course': 'Course',
    'certificates.category.class': 'Class',
    'certificates.category.competition': 'Competition',
    'certificates.verify': 'Verify Credential',
    'certificates.prev': 'Prev',
    'certificates.next': 'Next',
    'certificates.summary': 'Certification Summary',
    'certificates.stats.total': 'Total Certificates',
    'certificates.stats.categories': 'Categories',
    'certificates.stats.latestYear': 'Latest Year',
    'certificates.stats.verified': 'Verified',

    'skills.title': 'Skills',
    'skills.category.programming': 'Programming',
    'skills.category.design': 'Design',
    'skills.category.editing': 'Editing',
    'skills.overview': 'Skills Overview',
    'skills.overview.programming': 'Programming',
    'skills.overview.designTools': 'Design Tools',
    'skills.overview.editingTools': 'Editing Tools',

    'portfolio.category.videoEditor': 'Video Editor',
    'portfolio.category.graphicDesigner': 'Graphic Designer',
    'portfolio.category.programmer': 'Programmer'
  },
  id: {
    'lang.en': 'EN',
    'lang.id': 'ID',

    'window.profile': 'Profil',
    'window.skills': 'Keahlian',
    'window.education': 'Pendidikan',
    'window.projects': 'Proyek',
    'window.certificates': 'Sertifikat',
    'window.contact': 'Kontak',
    'window.faq': 'Tanya Jawab',

    'menu.welcome': 'Selamat Datang',
    'menu.shutdown': 'Matikan',
    'menu.shutdownTitle': 'Konfirmasi Matikan',
    'menu.shutdownSubtitle': 'Website akan ditutup',
    'menu.shutdownQuestion': 'Yakin ingin menutup tab ini?',
    'menu.cancel': 'Batal',
    'menu.yes': 'Ya',

    'start.start': 'Mulai',

    'common.close': 'Tutup',
    'window.controls.minimize': 'Minimalkan',
    'window.controls.close': 'Tutup',

    'tray.changeLanguage': 'Ganti bahasa',
    'tray.toggleTheme': 'Ganti tema',
    'tray.themeToDark': 'Aktifkan mode gelap',
    'tray.themeToLight': 'Aktifkan mode terang',

    'desktop.hello': 'Halo Dunia',
    'desktop.tagline': 'Bukan hanya visual, tapi cara berpikir',
    'desktop.hint': 'Klik dua kali ikon atau tekan menu Mulai di bagian bawah',

    'welcome.title': 'Selamat Datang',
    'welcome.heading': 'Selamat datang di Website saya!',
    'welcome.p1':
      'Halo! Terima kasih sudah berkunjung ke website personal saya. Saya Nadhif Fathur Rahman, seorang pengangguran dengan pengalaman lebih dari 5 tahun menerima pekerjaan freelance.',
    'welcome.p2':
      'Silakan jelajahi berbagai fitur di desktop untuk melihat profil, keahlian, pendidikan, portofolio, sertifikat, dan cara menghubungi saya.',
    'welcome.quickNav': 'Navigasi Cepat:',
    'welcome.nav.startMenu': 'Klik “Start” untuk membuka menu',
    'welcome.nav.desktopIcon': 'Klik dua kali ikon di desktop',
    'welcome.nav.taskbar': 'Gunakan taskbar bawah',
    'welcome.nav.windowControls': 'Minimize/Tutup window',
    'welcome.exploreNow': 'Jelajahi',
    'welcome.close': 'Tutup',

    'profile.badge': 'Sang Pencari Loker',
    'profile.download.portfolio': 'Portofolio',
    'profile.download.cv': 'Curriculum Vitae',
    'profile.alert.portfolioOpened': 'Portofolio berhasil dibuka!',
    'profile.alert.cvOpened': 'CV berhasil dibuka!',
    'profile.bio':
      'Halo! Saya Nadhif Fathur Rahman, seseorang yang antusias dan berkomitmen, suka belajar terus-menerus dan memecahkan masalah secara kreatif. Dengan minat kuat di bidang desain dan editing, saya berusaha memberi dampak yang berarti melalui kolaborasi dan pekerjaan yang bermakna. Saya senang mencoba hal baru dan terus berupaya belajar serta meningkatkan kemampuan setiap hari. Saat ini saya fokus mengembangkan skill di bidang pemrograman dan terbuka untuk peluang baru untuk tumbuh, berkontribusi, dan terhubung dengan orang-orang yang sejalan.',

    'loading.loading': 'Memuat',
    'loading.welcome': 'Selamat Datang',
    'loading.complete': '% selesai',
    'loading.msg.starting': 'Menjalankan Windows...',
    'loading.msg.files': 'Memuat file sistem...',
    'loading.msg.init': 'Inisialisasi komponen...',
    'loading.msg.profile': 'Memuat profil pengguna...',
    'loading.msg.desktop': 'Menyiapkan desktop...',
    'loading.msg.ready': 'Hampir siap...',

    'portfolio.title': 'Proyek',
    'portfolio.subtitle': 'Kumpulan proyek dan karya terbaru saya',
    'portfolio.filter.all': 'Semua',
    'portfolio.view': 'Lihat',
    'portfolio.prev': 'Sebelumnya',
    'portfolio.next': 'Berikutnya',
    'portfolio.stats.title': 'Total Proyek',
    'portfolio.stats.projects': 'Proyek',
    'portfolio.stats.categories': 'Kategori',
    'portfolio.stats.latestYear': 'Tahun Terbaru',
    'portfolio.stats.success': 'Sukses',

    'profile.connect': 'Terhubung Dengan Saya',
    'profile.about': 'Tentang Saya',
    'profile.location': 'Indonesia',
    'profile.experience': 'Pengalaman 5+ Tahun',
    'profile.stats': 'Statistik Singkat',
    'profile.stats.projects': 'Proyek',
    'profile.stats.clients': 'Klien',

    'contact.title': 'Hubungi Saya',
    'contact.subtitle': 'Saya senang mendengar dari Anda. Kirim pesan ya!',
    'contact.infoTitle': 'Informasi Kontak',
    'contact.location': 'Sidoarjo, Indonesia',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan',
    'contact.form.placeholder.name': 'Nama lengkap Anda',
    'contact.form.placeholder.email': 'emailkamu@contoh.com',
    'contact.form.placeholder.subject': 'Tentang apa ini?',
    'contact.form.placeholder.message': 'Ceritakan project Anda atau sekadar say hi!',
    'contact.form.sending': 'Mengirim...',
    'contact.form.send': 'Kirim Pesan',
    'contact.success.title': 'Pesan Berhasil Terkirim!',
    'contact.success.body': 'Terima kasih! Saya akan membalas secepat mungkin.',
    'contact.success.eta': 'Biasanya dalam 24 jam',
    'contact.error.sendFailed': 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.',

    'chatbot.title': 'Asisten FAQ',
    'chatbot.subtitle': 'Tanya apa saja tentang Nadhif',
    'chatbot.placeholder': 'Tanya apa saja tentang Nadhif...',
    'chatbot.tryAsking': 'Coba tanyakan:',
    'chatbot.pressEnter': 'Tekan Enter untuk mengirim',
    'chatbot.q.skills': 'Ceritakan keahlian Nadhif',
    'chatbot.q.projects': 'Project apa yang pernah dikerjakan?',
    'chatbot.q.certificates': 'Sertifikat apa yang dimiliki?',
    'chatbot.q.contact': 'Bagaimana cara menghubungi?',
    'chatbot.q.experience': 'Bagaimana pengalamannya?',
    'chatbot.a.intro': 'Halo! Aku asisten FAQ. Tanyakan apa saja tentang skill, project, atau pengalaman Nadhif!',
    'chatbot.a.skills':
      'Nadhif memiliki keahlian di Programming (HTML, TypeScript, React, Node.js, Python), Design (Canva, Adobe Photoshop, Adobe Illustrator, Figma), dan Video Editing (CapCut, After Effects, Premiere Pro, Vegas Pro).',
    'chatbot.a.experience':
      'Nadhif punya pengalaman 5+ tahun di web development, desain grafis, dan video editing. Ia mengerjakan berbagai project seperti website, UI/UX aplikasi, konten video, dan materi branding.',
    'chatbot.a.projects':
      'Beberapa project yang menonjol: Graduation Film Class XVII 2021, INACOM Modern Logo Concept, video Bank Indonesia Investment Program, NDComps10 Football Website UI, Byon Combat Website, UI/UX Gamified Qur\'an Learning App, dan banyak lagi.',
    'chatbot.a.education':
      'Nadhif sedang menempuh pendidikan sambil aktif mengerjakan berbagai project kreatif dan teknis. Ia juga menyelesaikan beberapa sertifikasi seperti Building a .NET ChatBot, AI Powered Code Generation, dan UI/UX Design dengan Figma.',
    'chatbot.a.contact':
      'Anda bisa menghubungi Nadhif lewat email nadhiffathur@gmail.com atau lewat GitHub (github.com/Nadhifxfx), LinkedIn (linkedin.com/in/nadhifxfx/), atau Instagram (@nadhifxfx).',
    'chatbot.a.certificates':
      'Nadhif memiliki beberapa sertifikasi termasuk Building a .NET ChatBot dari Staya.Dev, AI Powered Code Generation, UI/UX Design website with Figma dari BuildWithAngga, serta beberapa penghargaan kompetisi seperti Juara 2 Instagram Reels Contest.',
    'chatbot.a.greeting':
      'Halo! Aku bisa membantu kamu mengenal Nadhif. Kamu bisa tanya tentang skill, project, pengalaman, pendidikan, sertifikasi, atau cara menghubungi.',
    'chatbot.a.default':
      'Aku bisa bantu info tentang skill, project, pengalaman, pendidikan, sertifikasi, atau kontak Nadhif. Mau tanya apa?',

    'education.title': 'Pendidikan',
    'education.academicBackground': 'Latar Belakang Akademik',
    'education.keyHighlights': 'Sorotan Utama:',
    'education.gpa': 'IPK',
    'education.certificationsTitle': 'Sertifikasi Pendidikan',
    'education.edu1.h1': 'Fokus pada Machine Learning dan AI',
    'education.edu1.h2': 'Mempelajari web development menggunakan HTML, React, dan Node.js',
    'education.edu1.h3': 'Membuat game sederhana menggunakan Godot dan Construct',
    'education.edu1.h4': 'Mempelajari konsep Deep Learning dengan Roboflow',
    'education.edu2.h1': 'Membuat film pendek untuk tugas akhir dan lomba sekolah',
    'education.edu2.h2': 'Mengikuti ekstrakurikuler broadcasting dan memproduksi konten digital',
    'education.edu2.h3': 'Berpengalaman dalam desain grafis, video editing, dan animasi',
    'education.cert.1': 'Program Pelatihan Multimedia',
    'education.cert.2': 'Pengolahan Visualisasi Multimedia – BNSP',
    'education.cert.3': 'Building a .NET ChatBot',
    'education.cert.4': 'Kompetensi Keahlian dari PT. Indo Bismar Surabaya',

    'certificates.title': 'Sertifikat Profesional',
    'certificates.subtitle': 'Kumpulan sertifikasi profesional dan pencapaian saya',
    'certificates.filter.all': 'Semua',
    'certificates.category.course': 'Kursus',
    'certificates.category.class': 'Kelas',
    'certificates.category.competition': 'Kompetisi',
    'certificates.verify': 'Verifikasi',
    'certificates.prev': 'Sebelumnya',
    'certificates.next': 'Berikutnya',
    'certificates.summary': 'Ringkasan Sertifikat',
    'certificates.stats.total': 'Total Sertifikat',
    'certificates.stats.categories': 'Kategori',
    'certificates.stats.latestYear': 'Tahun Terbaru',
    'certificates.stats.verified': 'Terverifikasi',

    'skills.title': 'Keahlian',
    'skills.category.programming': 'Pemrograman',
    'skills.category.design': 'Desain',
    'skills.category.editing': 'Editing',
    'skills.overview': 'Ringkasan Keahlian',
    'skills.overview.programming': 'Pemrograman',
    'skills.overview.designTools': 'Tools Desain',
    'skills.overview.editingTools': 'Tools Editing',

    'portfolio.category.videoEditor': 'Editor Video',
    'portfolio.category.graphicDesigner': 'Desainer Grafis',
    'portfolio.category.programmer': 'Programmer'
  }
};

const I18nContext = createContext<I18nContextValue | null>(null);

const detectInitialLanguage = (): Language => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'id') return saved;

  const browser = navigator.language.toLowerCase();
  if (browser.startsWith('id')) return 'id';

  return 'en';
};

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => detectInitialLanguage());

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'id' : 'en');
  }, [lang, setLang]);

  const t = useCallback(
    (key: string) => {
      return translations[lang][key] ?? translations.en[key] ?? key;
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, toggleLang, t }), [lang, setLang, t, toggleLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nContextValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
};
