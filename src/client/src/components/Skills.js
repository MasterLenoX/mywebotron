import React from 'react';
import { FaDesktop, FaServer, FaGamepad, FaWrench } from 'react-icons/fa/index';

const SkillCard = ({ title, skills, icon }) => (
  <div className="glass-morphism p-6 rounded-none border border-gaming-neon/10 hover:border-gaming-neon transition-all duration-300 group relative">
    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gaming-neon opacity-20 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-12 h-12 bg-gaming-neon/10 flex items-center justify-center text-gaming-neon mb-4 group-hover:scale-110 transition-transform neon-border">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 font-tech uppercase tracking-tighter">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1 bg-gaming-obsidian/40 border border-gaming-neon/10 text-gray-400 text-[10px] font-tech uppercase tracking-widest hover:border-gaming-neon hover:text-white transition-colors">
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
      <div className="flex items-center space-x-6">
        <div className="w-2 h-10 bg-gaming-neon"></div>
        <h2 className="text-5xl font-bold uppercase tracking-tighter text-white font-tech">Arsenal <span className="text-gaming-neon font-light">// Skills</span></h2>
        <div className="h-px bg-gaming-neon/20 flex-1"></div>
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
