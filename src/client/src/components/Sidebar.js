import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaImage, FaLayerGroup, FaCog } from 'react-icons/fa';

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
    <div className="fixed left-0 top-0 h-full w-64 bg-portfolio-navy border-r border-portfolio-blue flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-portfolio-tech to-portfolio-blue bg-clip-text text-transparent italic">
          LEO.DEV
        </h1>
      </div>

      <nav className="flex-1 w-full px-4">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="flex items-center space-x-4 px-4 py-3 rounded-lg text-gray-400 hover:text-portfolio-tech hover:bg-portfolio-blue transition-all duration-300"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto px-4 w-full">
        <div className="p-4 bg-portfolio-blue rounded-xl border border-portfolio-tech/20">
          <p className="text-xs text-portfolio-tech uppercase font-bold mb-1">Status</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300">Available for Work</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
