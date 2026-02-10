import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  const defaultText = ["Software Engineer", "Full Stack Developer", "IT Support Specialist", "Web Developer"];
  const texts = data && data.typewriting_text ? data.typewriting_text : defaultText;
  const firstName = data ? data.first_name : "Leonard James";
  const lastName = data ? data.last_name : "Emperado";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8 z-10"
      >
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="w-2 h-2 bg-gaming-neon animate-pulse"></span>
            <h2 className="text-gaming-neon font-tech text-xs tracking-[0.4em] uppercase decoration-gaming-neon/30 underline underline-offset-8">
              Mission Briefing // Protocol 01
            </h2>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none group cursor-default">
            {firstName} <br />
            <span className="text-gaming-neon neon-text relative inline-block">
              {lastName}
              <span className="absolute inset-0 bg-gaming-neon opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></span>
            </span>
          </h1>
        </div>

        <div className="text-2xl md:text-3xl text-gray-300 font-light flex items-center space-x-3 font-tech">
          <span className="opacity-60 flex items-center">
            <span className="w-8 h-px bg-gaming-neon/50 mr-2"></span>
            STATUS:
          </span>
          <span className="text-gaming-neon font-bold tracking-tight">
            <Typewriter
              options={{
                strings: texts,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-xl text-gray-400 leading-relaxed text-lg border-l-2 border-gaming-neon/20 pl-6 italic bg-gaming-neon/5 py-2"
        >
          Executing high-performance web deployment and advanced IT infrastructure support.
          Current system load: OPTIMAL. Digital synchronization at 100%.
        </motion.p>

        <div className="flex flex-wrap gap-6 pt-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 243, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gaming-neon text-black font-tech font-bold uppercase tracking-widest rounded-none transition-all border-none relative overflow-hidden group"
          >
            <span className="relative z-10">Initiate Projects</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(0, 243, 255, 0.1)" }}
            className="px-10 py-4 bg-transparent text-gaming-neon font-tech font-bold uppercase tracking-widest border border-gaming-neon transition-all hover:neon-text relative"
          >
            Contact Link
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gaming-neon"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gaming-neon"></div>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-12 md:mt-0 relative"
      >
        <div className="w-80 h-96 relative group">
          <div className="absolute -inset-4 border border-gaming-neon/20 rounded-none animate-pulse"></div>
          <div className="absolute inset-0 border-2 border-gaming-neon translate-x-3 translate-y-3 opacity-50 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>

          {/* HUD Elements */}
          <div className="absolute -top-6 -left-6 text-[10px] text-gaming-neon font-mono opacity-50">
            [SYS_SCAN_ACTIVE]
          </div>
          <div className="absolute -bottom-6 -right-6 text-[10px] text-gaming-neon font-mono opacity-50 text-right">
            ID: NODE_7741<br />LOC: 127.0.0.1
          </div>

          <div className="w-full h-full bg-gaming-obsidian overflow-hidden border border-gaming-neon/50 shadow-2xl shadow-gaming-neon/20 relative hud-panel">
            <motion.img
              whileHover={{ scale: 1.1, filter: "grayscale(0) brightness(1.2)" }}
              src={data && data.profile_image ? `http://localhost:5000${data.profile_image}` : 'https://placehold.co/320x384/0d0d0d/00f3ff?text=AGENT_LP'}
              alt="Profile"
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700"
            />
            <div className="scan-line-active"></div>

            <div className="absolute bottom-4 left-4 right-4 h-1 bg-gaming-neon/10 overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="h-full bg-gaming-neon w-1/3 opacity-50"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
