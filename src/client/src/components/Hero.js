import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = ({ data }) => {
  const defaultText = ["Software Engineer", "Full Stack Developer", "IT Support Specialist", "Web Developer"];
  const texts = data && data.typewriting_text ? data.typewriting_text : defaultText;
  const firstName = data ? data.first_name : "Leonard James";
  const lastName = data ? data.last_name : "Emperado";

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] py-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <h2 className="text-portfolio-tech font-mono text-xl tracking-widest uppercase">Hi, my name is</h2>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            {firstName} <span className="text-gray-500">{lastName}</span>
          </h1>
        </div>

        <div className="text-3xl md:text-4xl text-gray-400 font-light flex items-center space-x-2">
          <span>I'm a</span>
          <span className="text-portfolio-tech font-semibold">
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

        <p className="max-w-xl text-gray-400 leading-relaxed text-lg">
          I build high-performance web applications and provide top-notch IT support.
          Currently focused on creating seamless digital experiences with modern technology.
        </p>

        <div className="flex space-x-4 pt-4">
          <button className="px-8 py-3 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all border border-portfolio-tech">
            View Projects
          </button>
          <button className="px-8 py-3 bg-transparent text-portfolio-tech font-bold rounded border border-portfolio-tech hover:bg-portfolio-tech/10 transition-all">
            Contact Me
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-12 md:mt-0 relative">
        <div className="w-80 h-96 relative z-10">
          <div className="absolute inset-0 border-2 border-portfolio-tech translate-x-4 translate-y-4 rounded-lg -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
          <div className="w-full h-full bg-portfolio-blue rounded-lg overflow-hidden border border-portfolio-tech/30 shadow-2xl shadow-portfolio-tech/10">
            <img
              src={data && data.profile_image ? `http://localhost:5000${data.profile_image}` : 'https://via.placeholder.com/320x384/0a192f/64ffda?text=User+Image'}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
