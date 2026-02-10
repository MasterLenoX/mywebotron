import React from 'react';
import { FaDesktop, FaServer, FaGamepad, FaWrench } from 'react-icons/fa/index';

const SkillCard = ({ title, skills, icon }) => (
  <div className="bg-portfolio-blue p-6 rounded-xl border border-transparent hover:border-portfolio-tech/50 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-12 h-12 bg-portfolio-navy rounded-lg flex items-center justify-center text-portfolio-tech mb-4 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1 bg-portfolio-navy border border-gray-800 text-gray-400 text-xs rounded-full hover:border-portfolio-tech hover:text-white transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = ({ skills }) => {
  // Group skills by category
  const categories = {
    'Frontend': { icon: <FaDesktop />, list: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
    'Backend': { icon: <FaServer />, list: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'Sequelize', 'MySQL'] },
    'Games': { icon: <FaGamepad />, list: ['Unity', 'C#', 'Game Design', '2D/3D Assets'] },
    'Other': { icon: <FaWrench />, list: ['IT Support', 'Git', 'Docker', 'Canva', 'Adobe Suite', 'Office 365'] },
  };

  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical <span className="text-portfolio-tech">Proficiency</span></h2>
        <div className="w-20 h-1 bg-portfolio-tech mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(categories).map(([name, data]) => (
          <SkillCard key={name} title={name} skills={data.list} icon={data.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
