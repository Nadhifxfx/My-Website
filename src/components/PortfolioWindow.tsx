import React from 'react';
import { ExternalLink, Github, Folder, Youtube, Instagram, Dribbble, ChevronLeft, ChevronRight, Video, Palette, Code } from 'lucide-react';
import { useI18n } from '../config/i18n';

const BehanceIcon: React.FC<{ size?: number; className?: string }> = ({ size = 12, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zM6.466 19.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

interface Project {
  id: string;
  title: string;
  titleId?: string;
  description: string;
  descriptionId?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  behanceUrl?: string;
  dribbbleUrl?: string;
  category: string;
}

const PortfolioWindow: React.FC = () => {
  const { t, lang } = useI18n();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Video Editor':
        return Video;
      case 'Graphic Designer':
        return Palette;
      case 'Programmer':
        return Code;
      default:
        return Folder;
    }
  };

  const getProjectTitle = (project: Project) => (lang === 'id' ? project.titleId ?? project.title : project.title);
  const getProjectDescription = (project: Project) =>
    lang === 'id' ? project.descriptionId ?? project.description : project.description;

  const projects: Project[] = [
  {
    id: '1',
    title: 'Class XVII Graduation Film (2021)',
    titleId: 'Film Kelulusan Kelas XVII 2021',
    description: 'A graduation film capturing the moments and memories of SMK Antartika 2\'s Class of 2021.',
    descriptionId:'Film kelulusan yang mengabadikan momen dan kenangan angkatan kelulusan tahun 2021 dari SMK Antartika 2.',
    technologies: ['Adobe Premiere Pro', 'Adobe After Effects'],
    image: 'smartsda.png',
    category: 'Video Editor'
  },
  {
    id: '2',
    title: 'INACOM Modern Logo Concept',
    titleId: 'Konsep Logo Modern INACOM',
    description: 'Conceptual modern and minimalistic logo design for INACOM.',
    descriptionId: 'Desain konsep logo INACOM yang modern dan minimalis.',
    technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: 'Inacom.jpg',
    behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
    category: 'Graphic Designer'
  },
  {
    id: '3',
    title: 'MandyCJ Daily Content',
    titleId: 'Konten Harian MandyCJ',
    description: 'Editor for all MandyCJ content.',
    descriptionId:'Berperan sebagai editor untuk seluruh konten MandyCJ.',
    technologies: ['Adobe Premiere Pro', 'Capcut'],
    image: 'mandycj.png',
    instagramUrl: 'https://www.instagram.com/reel/DUQNKZyk6X0/',
    category: 'Video Editor'
  },
   {
    id: '4',
    title: 'Bank Indonesia Investment Program',
    titleId: 'Program Investasi Bank Indonesia',
    description: 'One-minute competition video educating viewers on the Rupiah’s role as a store of value and investment.',
    descriptionId: 'Video kompetisi berdurasi satu menit yang mengedukasi tentang peran Rupiah sebagai penyimpan nilai dan instrumen investasi.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Bank Indonesia.png',
    instagramUrl: 'https://www.instagram.com/p/CW5lSYkrABF/?utm_source=ig_web_copy_link&igsh=MXFkaXZxcnJ6c2J5Ng==',
    category: 'Video Editor'
  },
  {
  id: "5",
  title: "AFCON 2025 Recap",
  titleId: 'Rekap AFCON 2025',
  description: "An emotional tribute recap celebrating the journey of the AFCON 2025 stars from the competition's start to finish.",
  descriptionId:'Video tribute yang emosional merayakan perjalanan bintang-bintang pada saat kompetisi sedang berjalan hingga selesai.',
  technologies: ["Adobe Premiere Pro"],
  image: "afcon 2025.png",
  instagramUrl: '',
  category: "Video Editor"
  },
  {
    id: '6',
    title: 'Byon Combat Unofficial Website',
    titleId: 'Website Tidak Resmi Byon Combat',
    description: 'Unofficial website for Byon Combat showcasing its products and brand visuals.',
    descriptionId: 'Website tidak resmi Byon Combat untuk menampilkan produk serta visual brand.',
    technologies: ['Visual Studio Code'],
    image: 'Byon.png',
    githubUrl: 'https://byon-combat.vercel.app/',
    category: 'Programmer'
  },
  {
  id: '7',
  title: 'HIMATIF contents',
  description: 'Dynamic highlight video capturing the exceptional football skills, dribbling abilities, and match performances of HIMATIF members with cinematic editing and music synchronization.',
  titleId: 'Konten HIMATIF',
  descriptionId: 'Video highlight dinamis yang menampilkan skill sepak bola anggota HIMATIF, kemampuan dribbling, dan performa pertandingan.',
  technologies: ['Capcut'],
  image: 'HIMATIF.jpg',
  instagramUrl: 'https://www.instagram.com/reel/C1T99EavGrc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  category: 'Video Editor'
  },
  {
  id: "8",
  title: "Marco van Ginkel Farewell Video",
  titleId: 'Video Perpisahan Marco van Ginkel',
  description: "An emotional farewell tribute video honoring Marco van Ginkel following his retirement announcement, celebrating his resilience, leadership, and unforgettable journey through football.",
  descriptionId:'Video tribute perpisahan yang emosional untuk Marco van Ginkel setelah pengumuman pensiun.',
  technologies: ["Adobe Premiere Pro"],
  image: "farewell video.png",
  instagramUrl: "https://www.instagram.com/p/DUX697pjHOt/",
  category: "Video Editor"
},
  {
    id: '9',
    title: 'UEC 2024 Aftermovie',
    titleId: 'Aftermovie UEC 2024',
    description: 'Aftermovie highlighting the activities and excitement of the UEC 2024 event.',
    descriptionId: 'Aftermovie yang menampilkan aktivitas dan keseruan pada saat acara UEC 2024 sedang berlangsung.',
    technologies: ['Capcut'],
    image: 'UEC.jpg',
    youtubeUrl: 'https://youtu.be/X8Gwa-Pyqmc?feature=shared',
    category: 'Video Editor'
  },
  {
    id: '10',
    title: 'Ahmed Abdelkader Best Saves',
    description: 'A highlight video showcasing Ahmed Abdelkader\'s performances on the pitch.',
    titleId: 'Saves Terbaik Ahmed Abdelkader',
    descriptionId: 'Video highlight performa Ahmed Abdelkader di lapangan.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Abdelkader.png',
    liveUrl: 'https://drive.google.com/file/d/1LJF5ntnFcEmYHgH2QH1PCuZ8vHg134tc/view?usp=sharing',
    category: 'Video Editor'
  },
  {
    id: '11',
    title: "HIMATIF Social Media Design",
    description: "A visually cohesive social media design for HIMATIF, highlighting events and activities with engaging visual storytelling.",
    titleId: 'Desain Media Sosial HIMATIF',
    descriptionId: 'Desain media sosial yang kohesif dan strategis untuk HIMATIF 2025, menampilkan identitas organisasi dengan visual yang konsisten, dinamis, serta informatif. Setiap konten dirancang untuk menyoroti program kerja, event unggulan, kegiatan akademik maupun non-akademik, serta dokumentasi momen kebersamaan anggota.',
    technologies: ["Adobe Photoshop", "Canva"],
    image: "HIMATIF.png",
    dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
    category: "Graphic Designer"
  },
  {
    id: '12',
    title: 'Remy Vita Skills and Goals',
    description: 'Professional football showcase video featuring Remy Vita\'s standout moments, including goals, assists, and key plays, edited with smooth transitions and impactful visual effects.',
    titleId: 'Kemampuan dan Gol Remy Vita',
    descriptionId: 'Video showcase sepak bola profesional yang menampilkan momen terbaik Remy Vita, termasuk gol, assist, dan aksi di lapangan.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Vita.png',
    liveUrl: 'https://drive.google.com/file/d/1RFPNhWFl7oapXNVfatEXU54VdzVANs-j/view?usp=sharing',
    category: 'Video Editor'
  },
  {
    id: '13',
    title: 'Sports Activities at Citra Garden',
    description: 'Fun video edit showcasing various sports activities at Citra Garden.',
    titleId: 'Aktivitas Olahraga di Citra Garden',
    descriptionId: 'Video yang menampilkan berbagai aktivitas olahraga di Citra Garden.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Olahraga.png',
    instagramUrl: 'https://www.instagram.com/tv/CfNUe-bh_1c/?utm_source=ig_web_copy_link&igsh=MWV1dTNzYXp5eWcyeA==',
    category: 'Video Editor'
  },
  {
    id: '14',
    title: 'Independence amid the Pandemic',
    description: 'Creative video celebrating Indonesia\'s Independence Day during the COVID-19 pandemic, showcasing the spirit of unity and resilience while adapting to new normals.',
    titleId: 'Kemerdekaan di Tengah Pandemi',
    descriptionId: 'Video kreatif untuk merayakan Hari Kemerdekaan Indonesia di masa pandemi COVID-19, menampilkan semangat persatuan dan ketangguhan sambil beradaptasi dengan kebiasaan baru.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Kemerdekaan.png',
    liveUrl: 'https://drive.google.com/file/d/1P-S78sw6T8Ka-3VcK8nAu2XFpJl1pYj3/view?usp=sharing',
    category: 'Video Editor'
  },
  {
    id: '15',
    title: 'Independence Day Poster',
    description: 'An infographic poster visualizing Indonesia\'s journey to independence through creative storytelling, combining historical facts and modern design aesthetics.',
    titleId: 'Hari Kemerdekaan Poster',
    descriptionId: 'Desain poster infografis yang memvisualisasikan perjalanan Indonesia menuju kemerdekaan melalui storytelling kreatif, memadukan fakta dan sejarah.',
    technologies: ['Adobe Photoshop'],
    image: 'merdeka.png',
    behanceUrl: 'https://www.behance.net/nadhifxfx',
    category: 'Graphic Designer'
  },
  {
    id: '16',
    title: 'Brazilians Next Gen',
    description: 'Video edit featuring the next generation of Brazilian footballers set to the energetic track "Danza Kuduro", which has garnered over 5 million views.',
    titleId: 'Generasi Baru Brasil',
    descriptionId: 'Video edit yang menampilkan generasi berikutnya pesepak bola Brasil dengan iringan lagu energik "Danza Kuduro", yang telah meraih lebih dari 5 juta penayangan.',
    technologies: ['Adobe Premiere Pro'],
    image: 'danza.jpg',
    youtubeUrl: 'https://youtu.be/2HDLx6-HarY?si=8w2mlOmy5djnl7nt',
    category: 'Video Editor'
  },
  {
    id: '17',
    title: 'INACOM 2024 Workshop Recap',
    description: 'Engaging recap video capturing the highlights and memorable moments from the INACOM 2024 Workshop Event, featuring participant activities and key learning sessions.',
    titleId: 'Rekap Workshop INACOM 2024',
    descriptionId: 'Video rekap pada acara yang merangkum momen berkesan dari Workshop INACOM 2024, menampilkan aktivitas peserta dan sesi pembelajaran.',
    technologies: ['Capcut'],
    image: 'workshop.png',
    instagramUrl: 'https://www.instagram.com/reel/C_IWqnjvjoF/?utm_source=ig_web_copy_link&igsh=MTNhcmVxbG1oNGcyNA==',
    category: 'Video Editor'
  },
  {
    id: '18',
    title: 'Messi & Ronaldo Tribute Poster',
    description: 'Dynamic and emotionally charged sports poster that pays tribute to the legendary rivalry between Lionel Messi and Cristiano Ronaldo.',
    titleId: 'Poster Tribut Messi & Ronaldo',
    descriptionId: 'Poster olahraga yang dinamis dan emosional sebagai tribut untuk rivalitas legendaris antara Lionel Messi dan Cristiano Ronaldo.',
    technologies: ['Adobe Photoshop'],
    image: 'Poster goat.jpg',
    behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
    category: 'Graphic Designer'
  },
  {
  id: '19',
  title: 'Dilema Short Film',
  description: 'An emotional short film telling the story of hidden love that resurfaces when courage emerges amidst bullying challenges at Antartika 2 Vocational School, exploring themes of bravery and acceptance.',
  titleId: 'Film Pendek Dilema',
  descriptionId: 'Film pendek emosional yang mengisahkan cinta tersembunyi yang kembali muncul saat keberanian tumbuh di tengah tantangan perundungan di SMK Antartika 2, mengangkat tema keberanian dan penerimaan.',
  technologies: ['Adobe Premiere Pro'],
  image: 'DILEMA.png',
  category: 'Video Editor'
  },
  {
  id: '20',
  title: 'Choose Your Character – Football Poster Design',
  description: 'A bold and dynamic poster inspired by video game character selection screens, featuring top football icons like Ronaldo, Messi, Griezmann, and more.',
  titleId: 'Choose Your Character – Desain Poster Sepak Bola',
  descriptionId: 'Poster yang terinspirasi dari layar pemilihan karakter video game, menampilkan ikon-ikon sepak bola seperti Ronaldo, Messi, Griezmann, dan lainnya.',
  technologies: ['Adobe Photoshop'],
  image: 'cyc poster.jpg',
  category: 'Graphic Designer'
},
{
  id: '21',
  title: 'Silver Medal Announcement – IYMI Award 2024 Poster',
  description: 'Announcement poster celebrating the achievement of Universitas Nahdlatul Ulama Sidoarjo students who won the Silver Medal at the International Young Moslem Inventor Award 2024.',
  titleId: 'Pengumuman Medali Perak – Poster IYMI Award 2024',
  descriptionId: 'Poster pengumuman yang merayakan pencapaian mahasiswa Universitas Nahdlatul Ulama Sidoarjo yang meraih Medali Perak pada International Young Moslem Inventor Award 2024.',
  technologies: ['Adobe Photoshop'],
  image: 'poster compe.jpg',
  category: 'Graphic Designer'
  },
  {
  id: '22',
  title: 'Weal Dent care',
  description: 'Professional promotional video showcasing Weal Dental comprehensive dental care services, modern facilities, and expert team, designed to build trust and attract new patients.',
  titleId: 'Weal Dent Care',
  descriptionId: 'Video promosi profesional yang menampilkan layanan perawatan gigi Weal Dental secara menyeluruh, untuk membangun kepercayaan dan menarik pasien baru.',
  technologies: ['Capcut'],
  image: 'weal deant care.png',
  liveUrl: 'https://drive.google.com/file/d/1RNAY7ewpj0gQIaLNe_T0WXK_5Y2ACqLo/view?usp=sharing',
  category: 'Video Editor'
  },
  {
  id: "23",
   title: "Religious Tourism Banner",
  description: "An informative and elegant banner design for the Religious Tourism event at Pondok Pesantren Roudlotul Quran 2, themed 'Pilgrimage to the Saints of East Java.'",
  titleId: 'Banner Wisata Religi',
  descriptionId: "Desain banner informatif dan elegan untuk acara Wisata Religi di Pondok Pesantren Roudlotul Quran 2, bertema 'Ziarah Wali Jawa Timur'.",
  technologies: ["Canva"],
  image: "BANNER MTS.jpg",
  category: "Graphic Designer"
},
{
  id: "24",
  title: "KRITIK TIF Poster",
  description: "An announcement poster designed to deliver a critical message for the Informatics program.",
  titleId: 'Poster KRITIK TIF',
  descriptionId: "Poster pengumuman yang berguna untuk menyampaikan pesan berupa kritik untuk prodi Informatika.",
  technologies: ["Adobe Photoshop"],
  image: "Poster kritik.jpg",
  category: "Graphic Designer"
},
{
  id: "25",
  title: "Urban Style at Urban Home",
  description: "A promotional video highlighting modern urban lifestyles, created for an event at Urban Home Citraland Driyorejo.",
  titleId: 'Urban Style di Urban Home',
  descriptionId: 'Video promosi yang menyoroti gaya hidup urban modern, dibuat untuk event di Urban Home Citraland Driyorejo.',
  technologies: ["Adobe Premiere Pro"],
  image: "Urban Style.png",
  instagramUrl: "https://www.instagram.com/reel/CVIm5Ehs_zd/?utm_source=ig_web_copy_link&igsh=MXZiOHNjb3dtMTU2eQ==",
  category: "Video Editor"
},
{
  id: "26",
  title: "Rumah Putih Coffee UI/UX",
  description: "A warm and aesthetic UI/UX design for Rumah Putih Coffee, aimed at attracting coffee enthusiasts and creating a cozy experience.",
  titleId: 'UI/UX Rumah Putih Coffee',
  descriptionId: 'Desain UI/UX yang hangat dan estetik untuk Rumah Putih Coffee, bertujuan menarik pecinta kopi dan menciptakan pengalaman yang nyaman.',
  technologies: ["Figma"],
  image: "Rumah Putih Coffe.jpeg",
  dribbbleUrl: "https://dribbble.com/shots/25921769-Coffee-Shop-Modern-Login-Menu-Design?utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=Coffee%20Shop%20%E2%80%93%20Modern%20Login%20%26%20Menu%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=Coffee%20Shop%20%E2%80%93%20Modern%20Login%20%26%20Menu%20Design&utm_medium=Social_Share",
  category: "Graphic Designer"
},
{
  id: "27",
  title: "Digital TV Migration Video",
  description: "An educational video explaining the transition from analog to digital television broadcasting with clear and easy-to-follow visuals.",
  titleId: 'Video Migrasi TV Digital',
  descriptionId: 'Video edukasi yang menjelaskan transisi penyiaran televisi dari analog ke digital dengan visual yang jelas dan mudah diikuti.',
  technologies: ["Adobe Premiere Pro"],
  image: "Migrasi TV.png",
  liveUrl: "",
  category: "Video Editor"
},
{
  id: "28",
  title: "Yayasan Profile Website",
  description: "Comprehensive profile website for MTs Tahfidh Roudlotul Quran Islamic boarding school, featuring school information, programs, facilities, and contact details in a responsive and user-friendly layout.",
  titleId: 'Website Profil Yayasan',
  descriptionId: 'Website profil yang komprehensif untuk Yayasan Tahfidh Roudlotul Quran, berisi informasi sekolah, dan detail kontak dengan tampilan responsif serta mudah digunakan.',
  technologies: ["Visual Studio Code"],
  image: "Web Yayasan.png",
  githubUrl: "https://mtstahfidhroudlotulquran.sch.id/",
  category: "Programmer"
},
{
  id: "29",
  title: "YouTube Video Thumbnails",
  description: "Eye-catching YouTube thumbnail designs that visually represent the video content and attract viewers' attention.",
  titleId: 'Thumbnail Video YouTube',
  descriptionId: 'Desain thumbnail YouTube yang menarik perhatian, merepresentasikan konten video secara visual dan mengundang penonton untuk mengklik.',
  technologies: ["Adobe Photoshop"],
  image: "thumbnails.png",
  instagramUrl: "https://www.instagram.com/reel/CXeHkoeFL_W/?utm_source=ig_web_copy_link&igsh=MXVnZGtyd3BrYmdqMA==",
  category: "Graphic Designer"
},
{
  id: "30",
  title: "Chasing Dreams",
  description: "An inspiring motivational video encouraging young people to utilize their time productively, pursue their passions, and build a brighter future through dedication and hard work.",
  titleId: 'Mengejar Mimpi',
  descriptionId: 'Video motivasi yang menginspirasi anak muda untuk memanfaatkan waktu secara produktif, mengejar passion, dan membangun masa depan yang lebih cerah melalui dedikasi serta kerja keras.',
  technologies: ["Adobe Premiere Pro"],
  image: "Chasing Dreams.jpg",
  instagramUrl: "https://www.instagram.com/reel/CXeHkoeFL_W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "31",
  title: "UEC 2023 Poster",
  description: "A bold and dynamic poster design created for the UEC 2023 event, aimed at capturing attention and boosting event participation.",
  titleId: 'Poster UEC 2023',
  descriptionId: 'Desain poster untuk event UEC 2023, bertujuan menarik perhatian dan meningkatkan partisipasi acara.',
  technologies: ["Adobe Photoshop"],
  image: "poster uec.jpg",
  behanceUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "32",
 title: "BRI Barça Week with FC Barcelona",
  description: "A promotional video for BRI Barça Week featuring FC Barcelona, highlighting the collaboration between BRI and the football club.",
  titleId: 'BRI Barça Week bareng FC Barcelona',
  descriptionId: 'Video promosi untuk BRI Barça Week yang menampilkan FC Barcelona, menyoroti kolaborasi antara BRI dan klub sepak bola ini.',
  technologies: ["Adobe Premiere Pro"],
  image: "BRI.jpg",
  instagramUrl: "https://www.instagram.com/reel/DUvRBZzEmNV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "33",
  title: "Village Profile Website",
  description: "Comprehensive village profile website for Wonokarang, showcasing local culture, history, demographics, government structure, and community activities in an engaging and accessible digital format.",
  titleId: 'Website Profil Desa',
  descriptionId: 'Website profil desa yang komprehensif untuk Wonokarang, menampilkan budaya lokal, sejarah, demografi, struktur aparat, dan aktivitas masyarakat dalam format digital yang menarik serta mudah diakses.',
  technologies: ["Visual Studio Code"],
  image: "Web Profil Desa.png",
  githubUrl: "https://wonokarang.projekfilkom.com/",
  category: "Programmer"
},
{
  id: "34",
  title: "Website ND10",
  description: "Personal brand portfolio website for NDComps10, showcasing creative projects, video editing works, design skills, and professional contact information in a modern, responsive design.",
  titleId: 'Website ND10',
  descriptionId: 'Website portofolio personal branding untuk NDComps10 yang menampilkan project kreatif, karya video editing, skill desain, serta informasi kontak profesional dengan desain modern dan responsif.',
  technologies: ["Visual Studio Code"],
  image: "Web ND10.png",
  githubUrl: "https://ndcomps10.vercel.app/",
  category: "Programmer"
},
{
  id: "35",
  title: "Vancy Studio UI Design",
  description: "A modern and visually appealing UI design for Vancy Studio, focused on effectively showcasing creative projects and services.",
  titleId: 'Desain UI Vancy Studio',
  descriptionId: 'Desain UI yang modern dan menarik untuk Vancy Studio, berfokus pada penyajian project kreatif dan layanan secara efektif.',
  technologies: ["Figma"],
  image: "Vancy UI.png",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "36",
  title: "ND10 YouTube Banner",
  description: "A custom YouTube banner designed for ND10, aligning with the channel’s branding and visually engaging for viewers.",
  titleId: 'Banner YouTube ND10',
  descriptionId: 'Banner YouTube kustom untuk ND10 yang selaras dengan branding channel dan terlihat menarik bagi penonton.',
  technologies: ["Adobe Photoshop"],
  image: "Banner ND10.jpg",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "37",
  title: "IEC Social Media Design",
  description: "A cohesive social media design for IEC, created to reflect the organization’s identity and connect with its audience effectively.",
  titleId: 'Desain Media Sosial IEC',
  descriptionId: 'Desain media sosial yang konsisten untuk IEC, dibuat untuk merefleksikan identitas dan terhubung dengan audiens secara efektif.',
  technologies: ["Adobe Photoshop"],
  image: "IEC.png",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "38",
  title: "Neymar & Messi ● Perfect 10 | Brazil & Argentina Skills and Goals",
  description: "Video collaboration edit ndcomps10 with golazorg. Dynamic compilation video showcasing the incredible skills, dribbling, and goals of Neymar and Lionel Messi representing Brazil and Argentina.",
  titleId: 'Neymar & Messi ● Perfect 10 | Skill & Gol Brasil & Argentina',
  descriptionId: 'Video kompilasi dinamis hasil kolaborasi edit NDComps10 dengan Golazorg, menampilkan skill luar biasa, dribbling, dan gol Neymar serta Messi saat bermain di negara mereka masing-masing.',
  technologies: ["Adobe Premiere Pro"],
  image: "Neymessi Perfect 10.jpg",
  youtubeUrl: "https://youtu.be/9thiXWA8bAU?si=Cm2NrMDjIrkFCS9y",
  category: "Video Editor"
},
{
  id: "39",
  title: "Lifestyle at Citra Garden Sidoarjo",
  description: "A lifestyle video highlighting the facilities, community, and atmosphere of Citra Garden Sidoarjo.",
  titleId: 'Gaya Hidup di Citra Garden Sidoarjo',
  descriptionId: 'Video lifestyle yang menampilkan fasilitas, komunitas, dan suasana di Citra Garden Sidoarjo.',
  technologies: ["Adobe Premiere Pro"],
  image: "Lifestyle.jpg",
  instagramUrl: "https://www.instagram.com/reel/CVIm5Ehs_zd/?utm_source=ig_web_copy_link&igsh=MXZiOHNjb3dtMTU2eQ==",
  category: "Video Editor"
},
{
  id: "40",
   title: "Banner Event UEC",
  description: "A banner design for the Unusida Esport Competition (UEC) 2023 & 2024 that captures the spirit of the campus gaming competition.",
  titleId: 'Banner Event UEC',
  descriptionId: 'Desain banner untuk Unusida Esport Competition (UEC) 2023 & 2024 yang menangkap semangat kompetisi gaming.',
  technologies: ["Adobe Photoshop"],
  image: "Banner UEC.png",
  category: "Graphic Designer"
},
{
  id: "41",
   title: "Lionel Messi ● The Greatest | Ballon D'or Winner 2021",
  description: "A tribute video collaboration between NDComps10 and RDProds celebrating Lionel Messi's legendary career and his 2021 Ballon d'Or achievement.",
  titleId: "Lionel Messi ● The Greatest | Pemenang Ballon d'Or 2021",
  descriptionId: "Video tribute kolaborasi NDComps10 dengan RDProds yang merayakan karier gemilang Lionel Messi dan pencapaiannya di tahun 2021.",
  technologies: ["Adobe Premiere Pro"],
  image: "The Greatest.jpg",
  youtubeUrl: "https://youtu.be/S26N6CZ7CQw?si=z0pvScf45mTsvopf",
  category: "Video Editor"
},
{
  id: "42",
   title: "Choose your character series #4",
  description: "Video collaboration edit ndcomps10 with barcanation featuring top football players like Messi & Griezmann inspired by video game character selection screens.",
  titleId: 'Seri Choose Your Character #4',
  descriptionId: 'Video edit kolaborasi NDComps10 dengan Barcanation yang menampilkan pemain top seperti Messi & Griezmann, terinspirasi dari layar pemilihan karakter video game.',
  technologies: ["Adobe Premiere Pro"],
  image: "collab cyc.jpg",
  instagramUrl: "https://www.instagram.com/p/CK3taHkg72I/?utm_source=ig_web_copy_link&igsh=c2o2cjhxaXFmdW4y", 
  category: "Video Editor"
},
{
  id: "43",
  title: "Vardy Leicester Farewell Video",
  description: "An emotional farewell tribute video for Jamie Vardy during his time at Leicester City.",
  titleId: 'Video Perpisahan Vardy dari Leicester',
  descriptionId: 'Video tribute perpisahan yang emosional untuk Jamie Vardy pada saat bermain di Leicester City.',
  technologies: ["Adobe Premiere Pro"],
  image: "Vardy.jpg",
  instagramUrl: "https://www.instagram.com/reel/DRnREj3DKgu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===",
  category: "Video Editor"
},
{
  id: "44",
   title: "Aftermovie UEC 2024 thumbnail",
  description: "A dynamic and visually striking thumbnail design for the UNUSIDA Esport Competition (UEC) 2024 aftermovie video, capturing the electrifying atmosphere of the tournament.",
  titleId: 'Thumbnail Aftermovie UEC 2024',
  descriptionId: 'Desain thumbnail untuk video aftermovie UNUSIDA Esport Competition (UEC) 2024, menangkap atmosfer turnamen yang penuh energi.',
  technologies: ["Adobe Photoshop"],
  image: "UEC 2024.jpg",
  category: "Graphic Designer"
},
{
  id: "45",
   title: "ID Card LKMMTD 2025",
  description: "Professional and modern ID card design for LKMMTD 2025 committee members, featuring branding elements, member information, and security features.",
  titleId: 'Kartu ID LKMMTD 2025',
  descriptionId: 'Desain kartu ID yang profesional dan modern untuk panitia LKMMTD 2025, menampilkan elemen branding dan informasi anggota.',
  technologies: ["Adobe Photoshop"],
  image: "id card lkmmtd.jpg",
  category: "Graphic Designer"
},
{
  id: "46",
   title: "Cristiano Ronaldo ● This One's For You | UEFA EURO 2016",
  description: "Emotional tribute video celebrating Cristiano Ronaldo's journey and leadership in winning Portugal's first major international trophy at UEFA EURO 2016, featuring his best moments and the historic victory.",
  titleId: "Cristiano Ronaldo ● Ini Untukmu | UEFA EURO 2016",
  descriptionId: 'Video tribute emosional yang merayakan perjalanan dan kepemimpinan Cristiano Ronaldo saat membawa Portugal meraih trofi internasional besar untuk pertama kalinya di EURO 2016, menampilkan momen terbaik dan kemenangan bersejarahnya.',
  technologies: ["Adobe Premiere Pro"],
  image: "Ronaldo 2016.jpg",
  youtubeUrl: "https://youtu.be/N52m1t4ApRo?si=MKMzdH2HpaJp3H7i",
  category: "Video Editor"
},
{
  id: "47",
  title: "Murphy winning the Carabao Cup 2025",
  description: "A dynamic compilation video showcasing Murphy's incredible performance and contribution in winning the Carabao Cup 2025.",
  titleId: 'Murphy Menang Carabao Cup 2025',
  descriptionId: 'Video kompilasi dinamis yang menampilkan performa luar biasa dan kontribusi Murphy dalam memenangkan Carabao Cup 2025.',
  technologies: ["Adobe Premiere Pro"],
  image: "murphy.jpg",
  youtubeUrl: "https://www.instagram.com/reel/DHOc42jC-mC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "48",
   title: "Aksara Harapan Website",
  description: "Modern and responsive website for Aksara Harapan, featuring clean design, intuitive navigation, and optimized user experience to effectively communicate the organization's mission and activities.",
  titleId: 'Website Aksara Harapan',
  descriptionId: 'Website modern dan responsif untuk Aksara Harapan dengan desain bersih, navigasi intuitif, serta pengalaman pengguna yang optimal untuk menyampaikan misi dan aktivitas organisasi secara efektif.',
  technologies: ["Visual Studio Code"],
  image: "AksaraHarapan.png",
  githubUrl: "https://aksara-harapan.vercel.app/",
  category: "Programmer"
},
{
  id: "49",
   title: "Banner Event SSC 2025",
  description: "A banner design for the SSC 2025 event held by the Faculty of Computer Science, Universitas Siliwangi.",
  titleId: 'Banner Event SSC 2025',
  descriptionId: 'Desain banner untuk event SSC 2025 yang diadakan oleh Fakultas Ilmu Komputer Universitas Siliwangi di Kampus.',
  technologies: ["Adobe Photoshop"],
  image: "BANNER SSC.png",
  category: "Graphic Designer"
},
{
  id: "50",
   title: "Lionel Messi winning the Copa America 2021",
  description: "A video celebrating Lionel Messi's historic Copa America 2021 victory with Argentina, capturing his journey and triumph in winning his first major international trophy.",
  titleId: 'Lionel Messi Menjuarai Copa America 2021',
  descriptionId: 'Videoyang merayakan kemenangan bersejarah Lionel Messi di Copa America 2021 bersama Argentina, menangkap perjalanan dan momen triumf saat meraih trofi internasional besar pertamanya.',
  technologies: ["Adobe Photoshop"],
  image: "messi copa america 2021.jpg",
  instagramUrl: "https://www.instagram.com/p/CTsGmpHvbDj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "51",
   title: "Neymar winning Gold at the 2016 Olympics",
  description: "A tribute video highlighting Neymar's incredible performance and leadership in leading Brazil to their first-ever Olympic gold medal in football at the 2016 Rio Olympics.",
  titleId: 'Neymar Meraih Emas Olimpiade 2016',
  descriptionId: 'Video yang menyoroti performa luar biasa dan kepemimpinan Neymar saat membawa Brasil meraih medali emas Olimpiade pertama mereka di cabang sepak bola pada Olimpiade Rio 2016.',
  technologies: ["Adobe Premiere Pro"],
  image: "neymar olimpiade 2016.jpg",
  instagramUrl: "https://www.instagram.com/p/CTr7k2Vv4IN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "52",
  title: "Varane & Ramos Farewell Video",
  description: "An emotional farewell tribute video honoring the legendary defensive partnership of Sergio Ramos and Raphael Varane at Real Madrid, showcasing their greatest moments, achievements, and unforgettable contributions to the club's success.",
  titleId: 'Video Perpisahan Varane & Ramos',
  descriptionId: 'Video perpisahan yang emosional untuk duet pertahanan legendaris Sergio Ramos dan Raphael Varane di Real Madrid, menampilkan momen terbaik, pencapaian, dan kontribusi tak terlupakan bagi kesuksesan klub.',
  technologies: ["Adobe Premiere Pro"],
  image: "ramos & varane.jpg",
  instagramUrl: "https://www.instagram.com/p/CTsHHMHP5uA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "53",
  title: "Catatan Semenit Social Media Design",
  description: "Creative social media designs for Catatan Semenit, focusing on visually engaging content to enhance brand presence and audience interaction.",
  titleId: 'Desain Media Sosial Catatan Semenit',
  descriptionId: 'Desain media sosial kreatif untuk Catatan Semenit, berfokus pada konten yang menarik secara visual untuk meningkatkan brand presence dan interaksi audiens.',
  technologies: ["Canva"],
  image: "cs mockup.png",
  category: "Graphic Designer"
},
{
  id: "54",
  title: "Agrifest Instagram Feed Design",
  description: "A cohesive Instagram feed design for Agrifest, featuring event highlights and engaging visual storytelling to attract audiences and attendees.",
  titleId: 'Desain Feed Instagram Agrifest',
  descriptionId: 'Desain feed Instagram yang kohesif untuk Agrifest, menampilkan highlight event dan visual storytelling yang menarik untuk mengundang audiens/attendee.',
  technologies: ["Adobe Photoshop", "Canva"],
  image: "Agrifest.png",
  category: "Graphic Designer"
},
{
    id: '55',
    title: 'Getuk Pisang Sahira Website',
    description: 'A responsive website showcasing Sahira\'s traditional Getuk Pisang (banana-based Indonesian snack) products, featuring product catalog, ordering information, and business details.',
    titleId: 'Website Getuk Pisang Sahira',
    descriptionId: 'Website responsif yang menampilkan produk Getuk Pisang tradisional milik Sahira (camilan Indonesia berbahan pisang), lengkap dengan katalog produk, informasi pemesanan, dan detail usaha.',
    technologies: ['Visual Studio Code'],
    image: 'Web Sahira.png',
    githubUrl: 'https://nadhifxfx.github.io/Getuk-Pisang-Sahira/',
    category: 'Programmer'
  },
{
  id: "56",
  title: "DC Evolution Film",
  description: "A cinematic evolution video showcasing the transformation of DC Comics over time, highlighting changes in visual style and iconic characters across generations.",
  titleId: 'Evolusi Film DC',
  descriptionId: 'Video evolusi sinematik yang menampilkan transformasi DC Comics dari masa ke masa, menyoroti perubahan gaya visual, karakter ikonik dari generasi ke generasi.',
  technologies: ["Adobe Premiere Pro"],
  image: "DC Evolution.png",
  instagramUrl: "",
  category: "Video Editor"
},
{
  id: "57",
  title: "Football Website UI",
  description: "Modern UI design for a football fan website dedicated to NDComps10.",
  titleId: 'UI Website Sepak Bola',
  descriptionId: 'Desain UI modern untuk website fan sepak bola yang didedikasikan untuk NDComps10.',
  technologies: ["Figma", "Adobe Photoshop"],
  image: "NDcomps10.jpg",
  dribbbleUrl: "https://dribbble.com/shots/25922166-NDComps10-Modern-Football-Fan-Website-UI",
  category: "Graphic Designer"
},
{
  id: "58",
  title: "Mbappe 27th Birthday",
  description: "A celebratory birthday edit video for Kylian Mbappé’s 27th birthday, highlighting his incredible goals, memorable moments, and the excitement he brings to football as he continues to shine at the peak of his career.",
  titleId: 'Ulang Tahun Mbappé ke-27',
  descriptionId: 'Video perayaan ulang tahun Kylian Mbappé yang ke-27, menampilkan gol-gol luar biasa, momen berkesan, dan energi yang ia bawa ke sepak bola saat terus bersinar di puncak kariernya.',
  technologies: ["Adobe Premiere Pro"],
  image: "Mbappe.png",
  instagramUrl: "https://www.instagram.com/reel/DSeqYZhDQ_-/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
  category: "Video Editor"
},
{
  id: "59",
  title: "Mobile Banking App",
  description: "A mobile banking application designed to provide secure and user-friendly financial services for customers.",
  titleId: 'Aplikasi Mobile Banking',
  descriptionId: 'Aplikasi mobile banking yang dirancang untuk menyediakan layanan keuangan yang aman dan mudah digunakan bagi pengguna.',
  technologies: ["Visual Studio Code"],
  image: "Bank SAE.jpg",
  githubUrl: "https://github.com/nadhifxf/Mobile-Banking",
  category: "Programmer"
},
{
  id: "60",
   title: "Guidebook Cover",
  description: "Cover design for a website management guidebook used during KKN (Community Service Program).",
  titleId: 'Sampul Buku Panduan',
  descriptionId: 'Desain sampul buku panduan pengelolaan website pada saat KKN.',
  technologies: ["Adobe Photoshop"],
  image: "Buku KKN.jpg",
  category: "Graphic Designer"
},
{
  id: "61",
  title: "Tom Lockyer Farewell Video",
  description: "An emotional farewell tribute video honoring Tom Lockyer following his retirement announcement, celebrating his resilience, leadership, and unforgettable journey through football.",
  titleId: 'Video Perpisahan Tom Lockyer',
  descriptionId: 'Video tribute perpisahan yang emosional untuk Tom Lockyer setelah pengumuman pensiun, merayakan ketangguhan, kepemimpinan, dan perjalanan sepak bolanya yang tak terlupakan.',
  technologies: ["Adobe Premiere Pro"],
  image: "Tom Lockyer.jpg",
  instagramUrl: "https://www.instagram.com/p/DPl398xiIs7/",
  category: "Video Editor"
},
{
  id: "62",
  title: "Event Certificates",
  description: "A set of certificate designs created for various campus events.",
  titleId: 'Sertifikat acara',
  descriptionId: 'Satu set desain sertifikat yang dibuat dengan tampilan menarik untuk berbagai events yang diadakan di kampus.',
  technologies: ["Canva", "Adobe Photoshop"],
  image: "Sertifikat.png",
  category: "Graphic Designer"
},
{
  id: "63",
  title: "Kenan Yildiz until 2030",
  description: "The future is black and white, Our story continues.",
  titleId: 'Kenan Yildiz hingga tahun 2030',
  descriptionId: 'Masa depan berwarna hitam dan putih, Kisah kami terus berlanjut. ',
  technologies: ["Adobe Premiere Pro"],
  instagramUrl: "https://www.instagram.com/p/DUq0zjmCGIq/",
  image: "Yizdiz.jpg",
  category: "Video Editor"
},
{
  id: "64",
  title: "Yayasan Roudlotul Qur'an Feed Instagram",
  description: "Post design for the Instagram feed of the Roudlotul Quran Foundation.",
  titleId: 'Sertifikat acara',
  descriptionId: 'Desain postingan untuk feed Instagram Yayasan Roudlotul Quran.',
  technologies: ["Canva", "Adobe Photoshop"],
  image: "Yayasan RQ.png",
  category: "Graphic Designer"
},
{
  id: "65",
  title: "Happy Independence MEP 2021",
  description: "a video produced by 6 editors to celebrate independence ",
  titleId: 'Selamat Hari Kemerdekaan MEP 2021',
  descriptionId: 'Sebuah video yang diproduksi oleh 6 editor untuk merayakan kemerdekaan.',
  technologies: ["Adobe Premiere Pro", "Adobe After Effects"],
  instagramUrl: "https://www.instagram.com/p/CSrfDq-AZH0/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
  image: "HIM 2021.jpg",
  category: "Video Editor"
},
{
  id: "66",
 title: "Web-based Point of Sale System",
  description: "A web-based point of sale (POS) system designed to simplify transactions and improve sales management efficiency.",
  titleId: 'Sistem Point of Sale Berbasis Web',
  descriptionId: 'Sistem point of sale (POS) berbasis web yang dirancang untuk menyederhanakan transaksi dan meningkatkan efisiensi pengelolaan penjualan.',
  technologies: ["Visual Studio Code"],
  image: "Web Kasir.jpg",
  githubUrl: "https://github.com/Nadhifxfx",
  category: "Programmer"
},
{
  id: "67",
  title: 'Kokolo Williams Skills and Goals',
  description: 'Dynamic highlight video capturing Kokolo Williams\' exceptional football skills, dribbling abilities, and match performances with cinematic editing and music synchronization.',
  titleId: 'Sorotan Sepak Bola Kokolo Williams',
  descriptionId: 'Video highlight dinamis yang menampilkan skill sepak bola Kokolo Williams, kemampuan dribbling, dan performa pertandingan.',
  technologies: ['Adobe Premiere Pro'],
  image: 'Kokolo.png',
  liveUrl: 'https://drive.google.com/file/d/1KFTpgym7UqbwIU20E98JeOev-q59epH_/view?usp=drive_link',
  category: 'Video Editor'
},
{
  id: "68",
  title: 'Gamified Quran Learning App UI/UX',
  titleId: 'UI/UX Aplikasi Belajar Al-Qur’an Gamifikasi',
  description: 'Modern and intuitive UI/UX design concept for a Qur\'an learning application that integrates gamification elements to make learning more engaging and interactive.',
  descriptionId:'Konsep desain UI/UX yang modern dan intuitif untuk aplikasi belajar Al-Qur’an, menggabungkan elemen gamifikasi agar proses belajar lebih menarik dan interaktif.',
  technologies: ['Figma', 'Canva'],
  image: 'TEXT GEN.png',
  dribbbleUrl: 'https://dribbble.com/shots/25921769-Coffee-Shop-Modern-Login-Menu-Design',
  category: 'Graphic Designer'
},
{
  id: "69",
  title: 'GEOQUEST',
  description: 'A web-based game designed to evaluate our understanding of Geography.',
  titleId: 'GEOQUEST',
  descriptionId: 'Game berbasis web yang dirancang untuk menmnilai kemampuan pemahaman kita terhadap Geografi.',
  technologies: ['Visual Studio Code'],
  image: 'Geoquest.png',
  githubUrl: 'https://geoquest-peach.vercel.app/',
  category: 'Programmer'
},
{
  id: "70",
  title: 'Red Date Redemption',
  description: 'A web-based game designed to evaluate our understanding of survival skills in this economy.',
  titleId: 'Red Date Redemption',
  descriptionId: 'Game berbasis web yang dirancang untuk menmnilai kemampuan kita saat bertahan hidup.',
  technologies: ['Visual Studio Code'],
  image: 'RDD.png',
  githubUrl: 'https://red-date-redemption.vercel.app/',
  category: 'Programmer'
},

];
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const projectsPerPage = 9;

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryCounts = () => {
    const counts: { [key: string]: number } = {};
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Video Editor':
        return t('portfolio.category.videoEditor');
      case 'Graphic Designer':
        return t('portfolio.category.graphicDesigner');
      case 'Programmer':
        return t('portfolio.category.programmer');
      default:
        return category;
    }
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
    <div className="max-w-6xl mx-auto dark:text-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center space-x-2 mt-5">
          <Folder className="text-purple-600" />
          <span>{t('portfolio.title')}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{t('portfolio.subtitle')}</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 mt-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 shadow-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
              }`}
            >
              {category === 'All' ? t('portfolio.filter.all') : getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-t-xl">
                <img
                  src={encodeURI(project.image.startsWith('/') ? project.image : `/${project.image}`)}
                  alt={getProjectTitle(project)}
                  className="w-full h-full object-cover rounded-t-xl"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={360}
                />
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 shadow">
                  {(() => {
                    const Icon = getCategoryIcon(project.category);
                    return <Icon size={12} />;
                  })()}
                  <span>{getCategoryLabel(project.category)}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-2">{getProjectTitle(project)}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">{getProjectDescription(project)}</p>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800 px-2 py-0.5 rounded-md text-xs font-medium border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-yellow-700 hover:bg-yellow-800 text-white px-3 py-2 rounded text-xs font-medium border-2 border-yellow-600 shadow-sm transition-colors">
                        <ExternalLink size={12} />
                        <span>{t('portfolio.view')}</span>
                      </button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded text-xs font-medium border-2 border-gray-900 shadow-sm transition-colors">
                        <Github size={12} />
                        <span>{t('portfolio.view')}</span>
                      </button>
                    </a>
                  )}
                  {project.youtubeUrl && (
                    <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-xs font-medium border-2 border-red-700 shadow-sm transition-colors">
                        <Youtube size={12} />
                        <span>{t('portfolio.view')}</span>
                      </button>
                    </a>
                  )}
                  {project.instagramUrl && (
                    <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded text-xs font-medium border-2 border-pink-600 shadow-sm transition-colors">
                        <Instagram size={12} />
                        <span>{t('portfolio.view')}</span>
                      </button>
                    </a>
                  )}
                  {project.behanceUrl && (
                    <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium border-2 border-blue-700 shadow-sm transition-colors">
                        <BehanceIcon />
                        <span>{t('portfolio.view')}</span>
                      </button>
                    </a>
                  )}
                  {project.dribbbleUrl && (
                    <a href={project.dribbbleUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-pink-400 hover:bg-pink-500 text-white px-3 py-2 rounded text-xs font-medium border-2 border-pink-500 shadow-sm transition-colors">
                        <Dribbble size={12} />
                        <span>{t('portfolio.view')}</span>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center space-x-1 px-4 py-2 rounded text-sm font-medium border-2 shadow-sm transition-colors ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronLeft size={16} />
              <span>{t('portfolio.prev')}</span>
            </button>

            <div className="flex gap-1">
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded text-sm font-medium border-2 shadow-sm transition-colors ${
                    currentPage === page
                      ? 'bg-blue-500 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
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
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800'
              }`}
            >
              <span>{t('portfolio.next')}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Category Statistics */}
        <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-700 shadow-lg">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">{t('portfolio.stats.title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-600">{projects.length}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('portfolio.stats.projects')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{Object.keys(categoryCounts).length}</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('portfolio.stats.categories')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">2026</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('portfolio.stats.latestYear')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">{t('portfolio.stats.success')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWindow;
