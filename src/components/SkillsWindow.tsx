import React from 'react';
import { Code, Monitor, Palette, Video } from 'lucide-react';
import { useI18n } from '../config/i18n';

interface SkillItem {
  name: string;
  level: number;
  category: string;
}

const SkillsWindow: React.FC = () => {
  const { t } = useI18n();
  const skills: SkillItem[] = [
    { name: 'Html', level: 90, category: 'Programming' },
    { name: 'TypeScript', level: 85, category: 'Programming' },
    { name: 'React', level: 88, category: 'Programming' },
    { name: 'Node.js', level: 82, category: 'Programming' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'Canva', level: 85, category: 'Design' },
    { name: 'Adobe Photoshop', level: 80, category: 'Design' },
    { name: 'Adobe Illustrator', level: 35, category: 'Design' },
    { name: 'Figma', level: 80, category: 'Design' },
    { name: 'CapCut', level: 88, category: 'Editing' },
    { name: 'After Effects', level: 52, category: 'Editing' },
    { name: 'Premiere Pro', level: 85, category: 'Editing' },
    { name: 'Vegas Pro', level: 78, category: 'Editing' }
  ];

  const categories = [
    { name: 'Programming', icon: Code, color: 'blue' },
    { name: 'Design', icon: Palette, color: 'purple' },
    { name: 'Editing', icon: Video, color: 'red' }
  ];

  const getCategoryMeta = (categoryName: string) => {
    return categories.find((c) => c.name === categoryName) ?? categories[0];
  };

  const getCategoryLabel = (categoryName: string) => {
    switch (categoryName) {
      case 'Programming':
        return t('skills.category.programming');
      case 'Design':
        return t('skills.category.design');
      case 'Editing':
        return t('skills.category.editing');
      default:
        return categoryName;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 border-blue-600',
      purple: 'bg-purple-500 border-purple-600',
      red: 'bg-red-500 border-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getCategoryIconColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center justify-center space-x-2">
          <Monitor className="text-blue-600" />
          <span>{t('skills.title')}</span>
        </h2>
        
        {categories.map((category) => (
          <div key={category.name} className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <category.icon size={20} className={getCategoryIconColor(category.color)} />
              <h3 className="font-bold text-gray-700 dark:text-gray-200">{getCategoryLabel(category.name)}</h3>
            </div>
            
            <div className="bg-white p-4 rounded border-2 border-gray-300 shadow-inner dark:bg-gray-900 dark:border-gray-700">
              <div className="space-y-3">
                {skills
                  .filter(skill => skill.category === category.name)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex items-center gap-2">
                          {(() => {
                            const meta = getCategoryMeta(skill.category);
                            const Icon = meta.icon;
                            return (
                              <Icon size={14} className={getCategoryIconColor(meta.color)} />
                            );
                          })()}
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 border border-gray-300 shadow-inner dark:bg-gray-800 dark:border-gray-700">
                        <div 
                          className={`h-full rounded-full ${getColorClasses(category.color)} shadow-sm transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}

        {/* Skills Summary */}
        <div className="mt-8 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">{t('skills.overview')}</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{skills.filter(s => s.category === 'Programming').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t('skills.overview.programming')}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{skills.filter(s => s.category === 'Design').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t('skills.overview.designTools')}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">{skills.filter(s => s.category === 'Editing').length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t('skills.overview.editingTools')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;