import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa/index';

const ProjectCard = ({ project }) => (
  <div className="bg-portfolio-blue rounded-xl overflow-hidden border border-transparent hover:border-portfolio-tech/30 transition-all group">
    <div className="h-48 overflow-hidden relative">
      <img
        src={project.image_path ? `http://localhost:5000${project.image_path}` : 'https://via.placeholder.com/400x200/112240/64ffda?text=Project+Preview'}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-portfolio-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
        <a href="#" className="p-2 bg-portfolio-tech text-black rounded-full hover:bg-white transition-colors"><FaGithub size={20} /></a>
        <a href="#" className="p-2 bg-portfolio-tech text-black rounded-full hover:bg-white transition-colors"><FaExternalLinkAlt size={18} /></a>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-white group-hover:text-portfolio-tech transition-colors">{project.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.meta && project.meta.map((tag, idx) => (
          <span key={idx} className="text-[10px] uppercase tracking-wider text-portfolio-tech font-mono">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = ({ data }) => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">Projects</h2>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.length > 0 ? (
          data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 italic">No projects added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
