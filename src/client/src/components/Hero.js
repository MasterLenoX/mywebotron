import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = ({ data }) => {
  const defaultText = ["Software Engineer", "Full Stack Developer", "IT Support Specialist", "Web Developer"];
  const texts = data && data.typewriting_text ? data.typewriting_text : defaultText;
  const firstName = data ? data.first_name : "Leonard James";
  const lastName = data ? data.last_name : "Emperado";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-12 relative">
      <div className="flex-1 space-y-8 z-10">
        <div className="space-y-4">
          <h2 className="text-gaming-neon font-tech text-sm tracking-[0.3em] uppercase opacity-80 decoration-gaming-neon/30 underline underline-offset-8">Mission Briefing</h2>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
            {firstName} <br /><span className="text-gaming-neon neon-text">{lastName}</span>
          </h1>
        </div>

        <div className="text-2xl md:text-3xl text-gray-300 font-light flex items-center space-x-3 font-tech">
          <span className="opacity-60 flex items-center">
            <span className="w-8 h-px bg-gaming-neon/50 mr-2"></span>
            I'm a
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

        <p className="max-w-xl text-gray-400 leading-relaxed text-lg border-l-2 border-gaming-neon/20 pl-6 italic">
          Executing high-performance web deployment and advanced IT infrastructure support.
          Currently optimizing digital interfaces for maximum impact and efficiency.
        </p>

        <div className="flex space-x-6 pt-6">
          <button className="px-10 py-4 bg-gaming-neon text-black font-tech font-bold uppercase tracking-widest rounded-none hover:bg-white transition-all neon-border">
            Initiate Projects
          </button>
          <button className="px-10 py-4 bg-transparent text-gaming-neon font-tech font-bold uppercase tracking-widest border border-gaming-neon hover:bg-gaming-neon/10 transition-all">
            Contact Link
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">
        <div className="w-80 h-96 relative group">
          <div className="absolute -inset-4 border border-gaming-neon/20 rounded-2xl animate-pulse"></div>
          <div className="absolute inset-0 border-2 border-gaming-neon translate-x-3 translate-y-3 rounded-2xl opacity-50 group-hover:translate-x-1 group-hover:translate-y-1 transition-all"></div>
          <div className="w-full h-full bg-gaming-obsidian rounded-2xl overflow-hidden border border-gaming-neon/50 shadow-2xl shadow-gaming-neon/20 relative scanline">
            <img
              src={data && data.profile_image ? `http://localhost:5000${data.profile_image}` : 'https://placehold.co/320x384/0d0d0d/00f3ff?text=AGENT_LP'}
              alt="Profile"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-gaming-neon/30 rounded-full overflow-hidden">
              <div className="h-full bg-gaming-neon w-2/3 animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
