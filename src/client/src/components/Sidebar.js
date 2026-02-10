import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaImage, FaLayerGroup, FaCog } from 'react-icons/fa/index';

const Sidebar = () => {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.max(15, Math.min(45, prev + (Math.random() * 10 - 5))));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="mb-12 relative group">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-2 bg-gaming-neon/5 blur-xl group-hover:bg-gaming-neon/20 transition-all rounded-full"
        ></motion.div>
        <h1 className="text-3xl font-bold tracking-tighter text-white font-tech italic relative">
          <span className="text-gaming-neon neon-text">LEO</span>.DEV
        </h1>
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-gaming-neon/50 to-transparent mt-1"></div>
        <div className="text-[8px] text-gaming-neon/40 font-mono mt-1 text-center tracking-[0.2em]">
          ENCRYPTION: AES-256
        </div>
      </div>

      <nav className="flex-1 w-full px-4 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="flex items-center space-x-4 px-4 py-3 rounded-none text-gray-400 hover:text-gaming-neon hover:bg-gaming-neon/5 transition-all duration-300 border-l-2 border-transparent hover:border-gaming-neon group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gaming-neon/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="group-hover:scale-110 group-hover:neon-text transition-transform relative z-10">{item.icon}</span>
                <span className="font-tech tracking-wider uppercase text-xs font-bold relative z-10">{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto px-4 w-full space-y-4">
        <div className="p-4 bg-gaming-obsidian/50 border border-gaming-neon/20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gaming-neon"></div>
          <p className="text-[10px] text-gaming-neon/60 uppercase font-black mb-2 tracking-widest font-tech">Data Link Status</p>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/50 font-mono">LATENCY</span>
              <span className="text-[10px] text-gaming-neon font-mono font-bold animate-pulse">{latency.toFixed(0)} ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/50 font-mono">STATUS</span>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-gaming-neon rounded-full animate-ping"></div>
                <span className="text-[9px] text-white font-mono uppercase tracking-tighter">Sync Active</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gaming-neon/10">
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["10%", "90%", "40%", "70%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="h-full bg-gaming-neon/40 shadow-[0_0_8px_rgba(0,243,255,0.4)]"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
