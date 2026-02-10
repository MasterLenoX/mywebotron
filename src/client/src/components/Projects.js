import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa/index';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gaming-obsidian/60 border border-gaming-neon/10 hover:border-gaming-neon/40 transition-all group relative overflow-hidden"
  >
    {/* Corner Accents */}
    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gaming-neon/30 group-hover:border-gaming-neon transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gaming-neon/30 group-hover:border-gaming-neon transition-colors"></div>

    <div className="h-48 overflow-hidden relative">
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={project.image_path ? `http://localhost:5000${project.image_path}` : 'https://placehold.co/400x200/0d0d0d/00f3ff?text=DATA_ARCHIVE'}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-700 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gaming-obsidian via-transparent to-transparent opacity-60"></div>

      {/* HUD Scanner on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="scan-line-active"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm bg-gaming-neon/5">
        <a href={project.github_url || "https://github.com/"} target="_blank" rel="noopener noreferrer" className="p-2 border border-gaming-neon text-gaming-neon hover:bg-gaming-neon hover:text-black transition-all font-tech text-[10px] uppercase tracking-widest font-bold">Source_Code</a>
        <a href={project.live_url || "https://example.com/"} target="_blank" rel="noopener noreferrer" className="p-2 bg-gaming-neon text-black hover:bg-white transition-all font-tech text-[10px] uppercase tracking-widest font-bold">Execute_Live</a>
      </div>
    </div>

    <div className="p-6 space-y-3 relative">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-white group-hover:text-gaming-neon transition-colors font-tech uppercase tracking-tighter">
          {project.title}
        </h3>
        <span className="text-[10px] text-gaming-neon/40 font-mono">0{index + 1}</span>
      </div>

      <p className="text-gray-400 text-xs line-clamp-2 font-light leading-relaxed font-mono italic">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.meta && project.meta.map((tag, idx) => (
          <span key={idx} className="text-[8px] uppercase tracking-widest text-gaming-neon/80 font-mono border border-gaming-neon/20 px-1.5 py-0.5 bg-gaming-neon/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = ({ data }) => {
  return (
    <div className="space-y-12 py-12">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-1">
          <div className="w-1 h-1 bg-gaming-neon"></div>
          <div className="w-1 h-8 bg-gaming-neon/50"></div>
          <div className="w-1 h-1 bg-gaming-neon"></div>
        </div>
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white font-tech">DEPLOYED_OPERATIONS</h2>
          <p className="text-[10px] text-gaming-neon font-mono tracking-[0.5em] opacity-50 uppercase">Sub-Routine: Project_Archive</p>
        </div>
        <div className="h-px bg-gradient-to-r from-gaming-neon/50 to-transparent flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data && data.length > 0 ? (
          data.map((project, idx) => (
            <ProjectCard key={project.id || idx} project={project} index={idx} />
          ))
        ) : (
          <div className="col-span-full py-20 border border-dashed border-gaming-neon/20 text-center">
            <p className="text-gaming-neon/40 font-tech uppercase tracking-widest animate-pulse">Waiting for data upload...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
