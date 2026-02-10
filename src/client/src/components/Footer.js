import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="mt-24 py-12 border-t border-gaming-neon/10 text-center space-y-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gaming-neon opacity-20"></div>

      <p className="text-gray-500 text-sm font-tech tracking-widest uppercase">
        System Architect: <span className="text-gaming-neon font-bold neon-text">Leonard James Emperado</span>
      </p>

      <div className="flex justify-center space-x-8 text-gray-500">
        {[
          { name: 'GitHub', url: 'https://github.com/' },
          { name: 'LinkedIn', url: 'https://linkedin.com/' },
          { name: 'Instagram', url: 'https://instagram.com/' }
        ].map((link, i) => (
          <motion.a
            key={i}
            whileHover={{ color: '#00f3ff', scale: 1.1 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-[10px] uppercase tracking-[0.3em] font-black"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div className="pt-8 flex flex-col items-center space-y-2">
        <div className="flex space-x-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 h-3 bg-gaming-neon/10"></div>
          ))}
        </div>
        <p className="text-[8px] text-white/20 uppercase tracking-[0.4em] font-mono">
          &copy; {new Date().getFullYear()} // CORE_SYSTEM_RESERVED // V3.0.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
