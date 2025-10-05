import React from 'react';
import { ExternalLink, Github, Folder, Youtube, Tag, Instagram, Dribbble } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
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
  const projects: Project[] = [
  {
    id: '1',
    title: 'Graduation Film Class XVII 2021',
    description: 'Graduation film capturing the moments and memories of the 2021 graduating class of Antartika 2 Vocational High School.',
    technologies: ['Adobe Premiere Pro', 'Adobe After Effects'],
    image: 'smartsda.png',
    youtubeUrl: 'https://youtube.com/example',
    category: 'Video Editor'
  },
  {
    id: '2',
    title: 'INACOM Modern Logo Concept',
    description: 'Conceptual modern and minimalistic logo design for INACOM.',
    technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: 'Inacom.jpg',
    behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
    category: 'Graphic Designer'
  },
  {
    id: '3',
    title: 'Bank Indonesia Investment Program',
    description: 'One-minute competition video educating viewers on the Rupiah’s role as a store of value and investment.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Bank Indonesia.png',
    instagramUrl: 'https://www.instagram.com/p/CW5lSYkrABF/?utm_source=ig_web_copy_link&igsh=MXFkaXZxcnJ6c2J5Ng==',
    category: 'Video Editor'
  },
  {
    id: '4',
    title: 'NDComps10 Football Website UI',
    description: 'Modern UI design for a football fan website dedicated to NDComps10.',
    technologies: ['Figma', 'Adobe Photoshop'],
    image: 'NDcomps10.jpg',
    dribbbleUrl: 'https://dribbble.com/shots/25922166-NDComps10-Modern-Football-Fan-Website-UI',
    category: 'Graphic Designer'
  },
  {
  id: "5",
  title: "Agrifest Instagram Feed Design",
  description: "A visually cohesive Instagram feed design for Agrifest, featuring event highlights and engaging visual storytelling to attract attendees.",
  technologies: ["Adobe Photoshop", "Canva"],
  image: "Agrifest.png",
  behanceUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
  },
  {
    id: '6',
    title: 'Byon Combat Unofficial Website',
    description: 'Unofficial website for Byon Combat showcasing its products and brand visuals.',
    technologies: ['Visual Studio Code'],
    image: 'Byon.png',
    githubUrl: 'https://byon-combat.vercel.app/',
    category: 'Programmer'
  },
  {
    id: '7',
    title: 'Gamified Qur’an Learning App UI/UX',
    description: 'UI/UX design concept for an app that combines gamification elements with learning the Qur’an.',
    technologies: ['Figma', 'Canva'],
    image: 'TEXT GEN.png',
    dribbbleUrl: 'https://dribbble.com/shots/25921769-Coffee-Shop-Modern-Login-Menu-Design',
    category: 'Graphic Designer'
  },
  {
    id: '8',
    title: 'Getuk Pisang Sahira Website',
    description: 'Website for Sahira’s traditional Getuk Pisang products.',
    technologies: ['Visual Studio Code'],
    image: 'Web Sahira.png',
    githubUrl: 'https://nadhifxfx.github.io/Getuk-Pisang-Sahira/',
    category: 'Programmer'
  },
  {
    id: '9',
    title: 'UEC 2024 Aftermovie',
    description: 'Aftermovie highlighting the activities and excitement of the UEC 2024 event.',
    technologies: ['Capcut'],
    image: 'UEC 2024.jpg',
    youtubeUrl: 'https://youtu.be/X8Gwa-Pyqmc?feature=shared',
    category: 'Video Editor'
  },
  {
    id: '10',
    title: 'Ahmed Abdelkader Football Highlights',
    description: 'Highlight video featuring Ahmed Abdelkader football performances.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Abdelkader.png',
    liveUrl: 'https://drive.google.com/file/d/1LJF5ntnFcEmYHgH2QH1PCuZ8vHg134tc/view?usp=sharing',
    category: 'Video Editor'
  },
  {
    id: '11',
    title: 'Kokolo Williams Football Highlights',
    description: 'Highlight video showcasing Kokolo Williams in action on the field.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Kokolo.png',
    liveUrl: 'https://drive.google.com/file/d/1KFTpgym7UqbwIU20E98JeOev-q59epH_/view?usp=drive_link',
    category: 'Video Editor'
  },
  {
    id: '12',
    title: 'Remy Vita Football Highlights',
    description: 'Highlight video featuring Remy Vita football performances.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Vita.png',
    liveUrl: 'https://drive.google.com/file/d/1RFPNhWFl7oapXNVfatEXU54VdzVANs-j/view?usp=sharing',
    category: 'Video Editor'
  },
  {
    id: '13',
    title: 'Sports Activities at Citra Garden',
    description: 'Fun video edit showcasing various sports activities at Citra Garden.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Olahraga.png',
    instagramUrl: 'https://www.instagram.com/tv/CfNUe-bh_1c/?utm_source=ig_web_copy_link&igsh=MWV1dTNzYXp5eWcyeA==',
    category: 'Video Editor'
  },
  {
    id: '14',
    title: 'Independence amid the Pandemic',
    description: 'Creative video celebrating Indonesia Independence Day amid the pandemic.',
    technologies: ['Adobe Premiere Pro'],
    image: 'Kemerdekaan.png',
    liveUrl: 'https://drive.google.com/file/d/1P-S78sw6T8Ka-3VcK8nAu2XFpJl1pYj3/view?usp=sharing',
    category: 'Video Editor'
  },
  {
    id: '15',
    title: 'Independence Day - Infographic Poster',
    description: 'Infographic poster design created for a competition, showcasing creativity and design skills with the theme “Indonesia Journey to Independence.”',
    technologies: ['Adobe Photoshop'],
    image: 'merdeka.png',
    behanceUrl: 'https://www.behance.net/nadhifxfx',
    category: 'Graphic Designer'
  },
  {
    id: '16',
    title: 'Brazilians Next Gen Edit',
    description: 'Video edit featuring the next generation of Brazilian footballers set to the energetic track "Danza Kuduro", which has garnered over 5 million views.',
    technologies: ['Adobe Photoshop', 'Adobe Premiere Pro'],
    image: 'danza.jpg',
    youtubeUrl: 'https://youtu.be/2HDLx6-HarY?si=8w2mlOmy5djnl7nt',
    category: 'Video Editor'
  },
  {
    id: '17',
    title: 'INACOM 2024 Workshop Recap',
    description: 'Video recap  highlights and moments from the INACOM 2024 Workshop Event.',
    technologies: ['Capcut'],
    image: 'workshop.png',
    instagramUrl: 'https://www.instagram.com/reel/C_IWqnjvjoF/?utm_source=ig_web_copy_link&igsh=MTNhcmVxbG1oNGcyNA==',
    category: 'Video Editor'
  },
  {
    id: '18',
    title: 'Messi & Ronaldo Tribute Poster',
    description: 'Dynamic and emotionally charged sports poster that pays tribute to the legendary rivalry between Lionel Messi and Cristiano Ronaldo.',
    technologies: ['Adobe Photoshop'],
    image: 'Poster goat.jpg',
    behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
    category: 'Graphic Designer'
  },
  {
  id: '19',
  title: 'DILEMA – Short Film',
  description: 'Short film about long-buried love that finally finds its way when courage grows amid bullying at Antartika 2 Vocational School.',
  technologies: ['Adobe Photoshop'],
  image: 'DILEMA.png',
  youtubeUrl: 'https://youtube.com/example',
  category: 'Video Editor'
  },
  {
  id: '20',
  title: 'Choose Your Character – Football Poster Design',
  description: 'A bold and dynamic poster inspired by video game character selection screens, featuring top football icons like Ronaldo, Messi, Griezmann, and more.',
  technologies: ['Adobe Photoshop'],
  image: 'cyc poster.jpg',
  behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
  category: 'Graphic Designer'
},
{
  id: '21',
  title: 'Silver Medal Announcement – IYMI Award 2024 Poster',
  description: 'Announcement poster celebrating the achievement of Universitas Nahdlatul Ulama Sidoarjo students who won the Silver Medal at the International Young Moslem Inventor Award 2024.',
  technologies: ['Adobe Photoshop'],
  image: 'poster compe.jpg',
  behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
  category: 'Graphic Designer'
  },
  {
  id: '22',
  title: 'Weal Dental',
  description: 'Video commercial promoting Weal Dental, highlighting their services and expertise in dental care.',
  technologies: ['Capcut'],
  image: 'Weal Dental.png',
  liveUrl: 'https://drive.google.com/file/d/1RNAY7ewpj0gQIaLNe_T0WXK_5Y2ACqLo/view?usp=sharing',
  category: 'Video Editor'
  },
  {
  id: "23",
  title: "Religious Tourism Banner",
  description: "An informative and elegant banner design for the Religious Tourism event at Pondok Pesantren Roudlotul Quran 2, themed 'Pilgrimage to the Saints of East Java.'",
  technologies: ["Canva"],
  image: "BANNER MTS.jpg",
  behanceUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "24",
  title: "KRITIK TIF Poster",
  description: "A visually striking poster created for a university event, featuring retro computer aesthetics and bold typography to highlight the theme 'Students' Voices Weaving a Better University.'",
  technologies: ["Adobe Photoshop"],
  image: "Poster kritik.jpg",
  behanceUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "25",
  title: "Urban Style at Urban Home",
  description: "A promotional video highlighting modern urban lifestyles, created for an event at Urban Home Citraland Driyorejo.",
  technologies: ["Adobe Premiere Pro"],
  image: "Citraland.png",
  instagramUrl: "https://www.instagram.com/reel/CVIm5Ehs_zd/?utm_source=ig_web_copy_link&igsh=MXZiOHNjb3dtMTU2eQ==",
  category: "Video Editor"
},
{
  id: "26",
  title: "Rumah Putih Coffee UI/UX",
  description: "A warm and aesthetic UI/UX design for Rumah Putih Coffee, aimed at attracting coffee enthusiasts and creating a cozy experience.",
  technologies: ["Figma"],
  image: "Rumah Putih Coffe.jpeg",
  dribbbleUrl: "https://dribbble.com/shots/25921769-Coffee-Shop-Modern-Login-Menu-Design?utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=Coffee%20Shop%20%E2%80%93%20Modern%20Login%20%26%20Menu%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=Coffee%20Shop%20%E2%80%93%20Modern%20Login%20%26%20Menu%20Design&utm_medium=Social_Share",
  category: "Graphic Designer"
},
{
  id: "27",
  title: "Digital TV Migration Video",
  description: "An educational video explaining the transition from analog to digital television broadcasting with clear and easy-to-follow visuals.",
  technologies: ["Adobe Premiere Pro"],
  image: "Migrasi TV.png",
  liveUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Video Editor"
},
{
  id: "28",
  title: "Yayasan Profile Website",
  description: "Design and development of a responsive, informative, and user-friendly website for Pondok Pesantren.",
  technologies: ["Visual Studio Code"],
  image: "WEB MTS.png",
  githubUrl: "https://mtstahfidhroudlotulquran.sch.id/",
  category: "Programmer"
},
{
  id: "29",
  title: "YouTube Video Thumbnails",
  description: "Eye-catching YouTube thumbnail designs that visually represent the video content and attract viewers' attention.",
  technologies: ["Adobe Photoshop"],
  image: "tumnail.png",
  instagramUrl: "https://www.instagram.com/reel/CXeHkoeFL_W/?utm_source=ig_web_copy_link&igsh=MXVnZGtyd3BrYmdqMA==",
  category: "Graphic Designer"
},
{
  id: "30",
  title: "Chasing Dreams",
  description: "A motivational video encouraging young people to spend their time productively and build a brighter future.",
  technologies: ["Adobe Premiere Pro"],
  image: "Produktif.png",
  instagramUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Video Editor"
},
{
  id: "31",
  title: "UEC 2023 Poster",
  description: "A bold and dynamic poster design created for the UEC 2023 event, aimed at capturing attention and boosting event participation.",
  technologies: ["Adobe Photoshop"],
  image: "poster uec.jpg",
  behanceUrl: "https://www.behance.net/gallery/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "32",
  title: "Web-based Point of Sale System",
  description: "A web-based point of sale (POS) system designed to simplify transactions and improve sales management efficiency.",
  technologies: ["Visual Studio Code"],
  image: "Web Kasir.jpg",
  githubUrl: "https://github.com/Nadhifxfx",
  category: "Programmer"
},
{
  id: "33",
  title: "Village Profile Website",
  description: "A village profile website showcasing local culture, history, and community life in a user-friendly and engaging way.",
  technologies: ["Visual Studio Code"],
  image: "Web Desa.png",
  githubUrl: "https://wonokarang.projekfilkom.com/",
  category: "Programmer"
},
{
  id: "34",
  title: "ND10 Portfolio Website",
  description: "A personal portfolio website built under the ND10 brand, featuring projects, skills, and contact information in a clean, responsive layout.",
  technologies: ["Visual Studio Code"],
  image: "Web ND10.png",
  githubUrl: "http://nadhifxfx.github.io/Website-ND10/",
  category: "Programmer"
},
{
  id: "35",
  title: "Vancy Studio UI Design",
  description: "A modern and visually appealing UI design for Vancy Studio, focused on effectively showcasing creative projects and services.",
  technologies: ["Figma"],
  image: "Vancy UI.png",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "36",
  title: "ND10 YouTube Banner",
  description: "A custom YouTube banner designed for ND10, aligning with the channel’s branding and visually engaging for viewers.",
  technologies: ["Adobe Photoshop"],
  image: "Banner ND10.jpg",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "37",
  title: "IEC Instagram Feed Design",
  description: "A cohesive Instagram feed design for IEC, created to reflect the organization’s identity and connect with its audience effectively.",
  technologies: ["Adobe Photoshop"],
  image: "IEC.png",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "38",
  title: "HIMATIF Instagram Feed Design",
  description: "A visually cohesive Instagram feed design for HIMATIF, highlighting events and activities with engaging visual storytelling.",
  technologies: ["Adobe Photoshop", "Canva"],
  image: "HIMATIF.png",
  dribbbleUrl: "https://dribbble.com/shots/180597019/INACOM-Logo-Concept",
  category: "Graphic Designer"
},
{
  id: "39",
   title: "Lifestyle at Citra Garden Sidoarjo",
  description: "A lifestyle video highlighting the facilities, community, and atmosphere of Citra Garden Sidoarjo.",
  technologies: ["Adobe Premiere Pro"],
  image: "Lifestyle.png",
  instagramUrl: "https://www.instagram.com/reel/CVIm5Ehs_zd/?utm_source=ig_web_copy_link&igsh=MXZiOHNjb3dtMTU2eQ==",
  category: "Video Editor"
}



];
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);

  const getCategoryCounts = () => {
    const counts: { [key: string]: number } = {};
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center space-x-2 mt-5">
          <Folder className="text-purple-600" />
          <span>Projects</span>
        </h2>
        <p className="text-gray-600 text-sm mt-2">A collection of my recent projects and work</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 mt-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 shadow-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1 shadow">
                  <Tag size={12} />
                  <span>{project.category}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-xs font-medium border border-blue-200">
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
                        <span>View</span>
                      </button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded text-xs font-medium border-2 border-gray-900 shadow-sm transition-colors">
                        <Github size={12} />
                        <span>View</span>
                      </button>
                    </a>
                  )}
                  {project.youtubeUrl && (
                    <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-xs font-medium border-2 border-red-700 shadow-sm transition-colors">
                        <Youtube size={12} />
                        <span>View</span>
                      </button>
                    </a>
                  )}
                  {project.instagramUrl && (
                    <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded text-xs font-medium border-2 border-pink-600 shadow-sm transition-colors">
                        <Instagram size={12} />
                        <span>View</span>
                      </button>
                    </a>
                  )}
                  {project.behanceUrl && (
                    <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium border-2 border-blue-700 shadow-sm transition-colors">
                        <span>View</span>
                      </button>
                    </a>
                  )}
                  {project.dribbbleUrl && (
                    <a href={project.dribbbleUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-pink-400 hover:bg-pink-500 text-white px-3 py-2 rounded text-xs font-medium border-2 border-pink-500 shadow-sm transition-colors">
                        <Dribbble size={12} />
                        <span>View</span>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Statistics */}
        <div className="mt-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-4 text-center">Total Projects</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-600">{projects.length}</div>
              <div className="text-xs text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">{Object.keys(categoryCounts).length}</div>
              <div className="text-xs text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">2025</div>
              <div className="text-xs text-gray-600">Latest Year</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-xs text-gray-600">Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWindow;
