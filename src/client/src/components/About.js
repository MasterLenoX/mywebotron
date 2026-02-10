import React from 'react';
import { FaDownload, FaTerminal } from 'react-icons/fa/index';

const About = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-none font-tech uppercase tracking-tighter">
            Architecting the <span className="text-gaming-neon neon-text font-light">Digital Matrix</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-gaming-neon/30 pl-8">
            I am a high-precision Software Engineer specialized in developing advanced digital ecosystems.
            Focused on building ultra-efficient, scalable systems that power modern enterprise solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 glass-morphism rounded-none border border-gaming-neon/10 group hover:border-gaming-neon transition-all">
            <h4 className="text-gaming-neon text-4xl font-bold font-tech tracking-tighter">02+</h4>
            <div className="h-0.5 w-8 bg-gaming-neon my-2 opacity-40 group-hover:w-full transition-all"></div>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-tech text-white/60">Years ACTIVE</p>
          </div>
          <div className="p-6 glass-morphism rounded-none border border-gaming-neon/10 group hover:border-gaming-neon transition-all">
            <h4 className="text-gaming-neon text-4xl font-bold font-tech tracking-tighter">20+</h4>
            <div className="h-0.5 w-8 bg-gaming-neon my-2 opacity-40 group-hover:w-full transition-all"></div>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-tech text-white/60">Units DEPLOYED</p>
          </div>
        </div>

        <div>
          <a
            href="/cv.pdf"
            className="inline-flex items-center space-x-3 px-10 py-4 bg-gaming-neon text-black font-tech font-bold uppercase tracking-widest hover:bg-white transition-all neon-border"
            download
          >
            <FaDownload size={18} />
            <span>EXTRACT CV</span>
          </a>
        </div>
      </div>

      <div className="glass-morphism p-10 rounded-none border border-gaming-neon/20 relative overflow-hidden group scanline">
        <div className="absolute top-0 right-0 p-6 opacity-5 text-gaming-neon group-hover:opacity-20 transition-opacity">
          <FaTerminal size={150} />
        </div>
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
          <span className="text-xs font-mono text-white/40 ml-4 uppercase tracking-widest">Profile_Intelligence_v2.0</span>
        </div>
        <h3 className="text-3xl font-bold text-white mb-8 font-tech uppercase tracking-tight">Core Protocol</h3>
        <ul className="space-y-6 relative z-10">
          {[
            'Full Stack Matrix Development',
            'Cyber Infrastructure & Support',
            'Relational Data Optimization',
            'Neural Component Engineering',
            'Distributed Backend Logic'
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-4 text-gray-400 group/item hover:text-white transition-colors">
              <span className="w-4 h-px bg-gaming-neon opacity-40 group-hover/item:w-8 transition-all" />
              <span className="font-tech text-sm uppercase tracking-widest">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
