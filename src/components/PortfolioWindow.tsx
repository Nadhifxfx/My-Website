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
      title: 'Film kelulusan angkatan XVII 2021',
      description: 'Part Time Editor for a graduation film project, focusing on cinematic storytelling, and visual effects.',
      technologies: ['Adobe Premier Pro', 'Adobe After Effects', 'Color Grading'],
      image: 'smartsda.png',
      youtubeUrl: 'https://youtube.com/example',
      category: 'Video Editor'
    },
    {
      id: '2',
      title: 'INACOM Logo Concept',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator'],
      image: 'Inacom.jpg',
      behanceUrl: 'https://www.behance.net/gallery/180597019/INACOM-Logo-Concept',
      category: 'Graphic Designer'
    },
    {
      id: '3',
      title: 'Bank Indonesia',
      description: 'Berpartisipasi dalam 1 Minute Video Competition dengan tema "Mengedukasi fungsi rupiah sebagai media penyimpanan melalui kegiatan investasi" yang diadakan oleh @bank_indonesia.',
      technologies: ['Adobe Premiere Pro', 'Color Grading'],
      image: 'Bank Indonesia.png',
      instagramUrl: 'https://www.instagram.com/p/CW5lSYkrABF/?utm_source=ig_web_copy_link&igsh=MXFkaXZxcnJ6c2J5Ng==',
      category: 'Video Editor'
    },
    {
      id: '4',
      title: 'NDComps10 – Modern Football Fan Website UI',
      description: 'Data visualization dashboard for social media metrics with interactive charts and automated reporting.',
      technologies: ['Figma', 'Adobe Photoshop'],
      image: 'NDcomps10.jpg',
      dribbbleUrl: 'https://dribbble.com/shots/25922166-NDComps10-Modern-Football-Fan-Website-UI?utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=NDComps10%20%E2%80%93%20Modern%20Football%20Fan%20Website%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=NDComps10%20%E2%80%93%20Modern%20Football%20Fan%20Website%20UI&utm_medium=Social_Share',
      category: 'Graphic Designer'
    },
    {
      id: '5',
      title: 'Website ND10',
      description: 'Creative music video edit with cinematic transitions, beat sync, and story-driven cuts using Adobe Premiere & After Effects.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'Web ND10.png',
      githubUrl: 'http://nadhifxfx.github.io/Website-ND10/',
      category: 'Programmer'
    },
    { 
      id: '6',
      title: 'Unofficial Website Byon Combat',
      description: 'Unofficial website for Byon Combat, featuring a modern design, responsive layout, and interactive elements.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'Byon.png',
      githubUrl: 'https://byon-combat.vercel.app/',
      category: 'Programmer'
    },
     { 
      id: '7',
      title: 'TEXT GEN – Gamified & Qur’an Learning App',
      description: 'Creative music video edit with cinematic transitions, beat sync, and story-driven cuts using Adobe Premiere & After Effects.',
      technologies: ['Figma', 'Canva'],
      image: 'UEC 2023.jpg',
      dribbbleUrl: 'https://dribbble.com/shots/25921769-Coffee-Shop-Modern-Login-Menu-Design?utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=Coffee%20Shop%20%E2%80%93%20Modern%20Login%20%26%20Menu%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Nadhifxfx&utm_content=Coffee%20Shop%20%E2%80%93%20Modern%20Login%20%26%20Menu%20Design&utm_medium=Social_Share',
      category: 'Graphic Designer'
    },
     { 
      id: '8',
      title: 'Webiste Getuk Pisang sahira',
      description: 'Creative music video edit with cinematic transitions, beat sync, and story-driven cuts using Adobe Premiere & After Effects.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'Web Sahira.png',
      githubUrl: 'https://nadhifxfx.github.io/Getuk-Pisang-Sahira/',
      category: 'Programmer'
    },
     { 
      id: '9',
      title: 'AFTER MOVIE UEC 2023',
      description: 'Creative music video edit with cinematic transitions, beat sync, and story-driven cuts using Adobe Premiere & After Effects.',
      technologies: ['Capcut', 'Color Grading'],
      image: 'UEC 2023.jpg',
      youtubeUrl: 'https://youtu.be/X8Gwa-Pyqmc?feature=shared',
      category: 'Video Editor'
    },
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
          <span>My Projects</span>
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
                      <button className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs font-medium border-2 border-green-600 shadow-sm transition-colors">
                        <ExternalLink size={12} />
                        <span>Live Demo</span>
                      </button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded text-xs font-medium border-2 border-gray-900 shadow-sm transition-colors">
                        <Github size={12} />
                        <span>Code</span>
                      </button>
                    </a>
                  )}
                  {project.youtubeUrl && (
                    <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-xs font-medium border-2 border-red-700 shadow-sm transition-colors">
                        <Youtube size={12} />
                        <span>YouTube</span>
                      </button>
                    </a>
                  )}
                  {project.instagramUrl && (
                    <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded text-xs font-medium border-2 border-pink-600 shadow-sm transition-colors">
                        <Instagram size={12} />
                        <span>Instagram</span>
                      </button>
                    </a>
                  )}
                  {project.behanceUrl && (
                    <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium border-2 border-blue-700 shadow-sm transition-colors">
                        <span>Behance</span>
                      </button>
                    </a>
                  )}
                  {project.dribbbleUrl && (
                    <a href={project.dribbbleUrl} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center space-x-1 bg-pink-400 hover:bg-pink-500 text-white px-3 py-2 rounded text-xs font-medium border-2 border-pink-500 shadow-sm transition-colors">
                        <Dribbble size={12} />
                        <span>Dribbble</span>
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
