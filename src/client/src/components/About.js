import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTerminal } from 'react-icons/fa/index';

const About = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-gaming-neon/50 font-mono text-[10px] tracking-[0.3em]">
            <span>[REDACTED]</span>
            <div className="h-px w-12 bg-gaming-neon/20"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none font-tech uppercase tracking-tighter">
            Architecting the <br />
            <span className="text-gaming-neon neon-text">Digital Matrix</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-gaming-neon/30 pl-8 bg-gaming-neon/5 py-4">
            I am a high-precision Software Engineer specialized in developing advanced digital ecosystems.
            Focused on building ultra-efficient, scalable systems that power modern enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {[
            { label: 'Years ACTIVE', val: '02+' },
            { label: 'Units DEPLOYED', val: '20+' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gaming-obsidian/40 border border-gaming-neon/20 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gaming-neon group-hover:h-full transition-all duration-300"></div>
              <h4 className="text-gaming-neon text-4xl font-bold font-tech tracking-tighter">{stat.val}</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-tech font-bold mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="/cv.pdf"
            className="inline-flex items-center space-x-4 px-10 py-4 bg-gaming-neon text-black font-tech font-bold uppercase tracking-widest transition-all hud-panel border-none rounded-none"
            download
          >
            <FaDownload size={18} />
            <span>EXTRACT_CV</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hud-panel p-10 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 text-gaming-neon group-hover:opacity-10 transition-opacity">
          <FaTerminal size={120} />
        </div>

        <div className="flex items-center space-x-3 mb-10 border-b border-gaming-neon/10 pb-4">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 bg-gaming-danger/40 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gaming-neon/40 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gaming-success/40 rounded-full"></div>
          </div>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] font-bold">Protocol_Intelligence_v2.1</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 font-tech uppercase tracking-widest relative inline-block">
          Core_Subroutines
          <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gaming-neon"></div>
        </h3>

        <ul className="space-y-6 relative z-10">
          {[
            'Full Stack Matrix Development',
            'Cyber Infrastructure & Support',
            'Relational Data Optimization',
            'Neural Component Engineering',
            'Distributed Backend Logic'
          ].map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 text-gray-400 group/item hover:text-gaming-neon transition-colors cursor-default"
            >
              <div className="w-2 h-2 border border-gaming-neon/30 rotate-45 group-hover/item:bg-gaming-neon transition-all"></div>
              <span className="font-tech text-xs uppercase tracking-[0.2em] font-bold">{item}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-12 pt-6 border-t border-gaming-neon/10 flex justify-between items-center opacity-40 grayscale">
          <span className="text-[8px] font-mono">STATUS: OPTIMIZED</span>
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-1 w-4 bg-gaming-neon/${(i + 1) * 20}`}></div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
