import React from 'react';
import { FaDesktop, FaServer, FaGamepad, FaWrench } from 'react-icons/fa';

const SkillCard = ({ title, skills, icon }) => (
  <div className="bg-portfolio-blue p-6 rounded-xl border border-transparent hover:border-portfolio-tech/50 transition-all duration-300 hover:-translate-y-2 group">
    <div className="w-12 h-12 bg-portfolio-navy rounded-lg flex items-center justify-center text-portfolio-tech mb-6 group-hover:bg-portfolio-tech group-hover:text-black transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 bg-portfolio-navy text-gray-400 text-sm rounded border border-gray-800">
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

  // If we have actual data from API, we would override or merge. 
  // For now using the structured categories.

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">Skills & Expertise</h2>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(categories).map(([name, data]) => (
          <SkillCard
            key={name}
            title={`${name} Skills`}
            icon={data.icon}
            skills={data.list}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
