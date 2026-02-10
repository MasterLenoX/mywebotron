import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa/index';

const ProjectCard = ({ project }) => (
  <div className="bg-gaming-card/40 rounded-none overflow-hidden border border-gaming-neon/10 hover:border-gaming-neon transition-all group relative">
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gaming-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gaming-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="h-48 overflow-hidden relative scanline">
      <img
        src={project.image_path ? `http://localhost:5000${project.image_path}` : 'https://placehold.co/400x200/0d0d0d/00f3ff?text=DATA_ARCHIVE'}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
      />
      <div className="absolute inset-0 bg-gaming-obsidian/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 backdrop-blur-sm">
        <a href={project.github_url || "https://github.com/"} target="_blank" rel="noopener noreferrer" className="p-3 bg-transparent text-gaming-neon border border-gaming-neon rounded-none hover:bg-gaming-neon hover:text-black transition-all font-tech text-xs uppercase tracking-widest">Source</a>
        <a href={project.live_url || "https://example.com/"} target="_blank" rel="noopener noreferrer" className="p-3 bg-gaming-neon text-black border border-gaming-neon rounded-none hover:bg-white transition-all font-tech text-xs uppercase tracking-widest">Execute</a>
      </div>
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-white group-hover:text-gaming-neon transition-colors font-tech uppercase tracking-wide tracking-tight">{project.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-3 font-light leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.meta && project.meta.map((tag, idx) => (
          <span key={idx} className="text-[10px] uppercase tracking-[0.2em] text-gaming-neon font-tech bg-gaming-neon/5 px-2 py-1 border border-gaming-neon/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = ({ data }) => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-6">
        <div className="w-2 h-10 bg-gaming-neon"></div>
        <h2 className="text-5xl font-bold uppercase tracking-tighter text-white font-tech">Projects <span className="text-gaming-neon font-light">// Archive</span></h2>
        <div className="h-px bg-gaming-neon/20 flex-1"></div>
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
