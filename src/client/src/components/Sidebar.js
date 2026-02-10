import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaImage, FaLayerGroup, FaCog } from 'react-icons/fa/index';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome size={20} /> },
    { name: 'About', path: '/#about', icon: <FaUser size={20} /> },
    { name: 'Experience', path: '/#experience', icon: <FaBriefcase size={20} /> },
    { name: 'Projects', path: '/#projects', icon: <FaLayerGroup size={20} /> },
    { name: 'Gallery', path: '/#gallery', icon: <FaImage size={20} /> },
    { name: 'Contact', path: '/#contact', icon: <FaEnvelope size={20} /> },
    { name: 'Admin', path: '/admin', icon: <FaCog size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 glass-morphism border-r border-gaming-neon/20 flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tighter text-white font-tech italic">
          <span className="text-gaming-neon">LEO</span>.DEV
        </h1>
        <div className="h-1 w-12 bg-gaming-neon mt-1 mx-auto rounded-full"></div>
      </div>

      <nav className="flex-1 w-full px-4">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-400 hover:text-gaming-neon hover:bg-gaming-neon/10 transition-all duration-300 border border-transparent hover:border-gaming-neon/20 group"
              >
                <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-tech tracking-wide uppercase text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto px-4 w-full">
        <div className="p-4 bg-gaming-obsidian/50 rounded-xl border border-gaming-neon/20 glass-morphism">
          <p className="text-[10px] text-gaming-neon uppercase font-bold mb-1 tracking-widest font-tech">System Status</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gaming-neon rounded-full animate-ping"></div>
            <span className="text-xs text-white/80 font-mono">ONLINE // READY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
