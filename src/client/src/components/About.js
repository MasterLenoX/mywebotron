import React from 'react';
import { FaDownload, FaTerminal } from 'react-icons/fa/index';

const About = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            I build things for the <span className="text-portfolio-tech">web</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a results-driven Software Engineer with extensive experience in developing high-quality applications.
            My passion lies in creating efficient, scalable, and user-friendly solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-portfolio-blue rounded-lg border border-gray-800">
            <h4 className="text-portfolio-tech text-2xl font-bold">2+</h4>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Years Experience</p>
          </div>
          <div className="p-4 bg-portfolio-blue rounded-lg border border-gray-800">
            <h4 className="text-portfolio-tech text-2xl font-bold">20+</h4>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Projects Done</p>
          </div>
        </div>

        <div>
          <a
            href="#!"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border border-portfolio-tech text-portfolio-tech font-bold rounded hover:bg-portfolio-tech/10 transition-all"
            download
          >
            <FaDownload size={20} className="mr-2" />
            <span>Download my CV</span>
          </a>
        </div>
      </div>

      <div className="bg-portfolio-navy p-8 rounded-xl border border-portfolio-blue relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 text-portfolio-tech group-hover:scale-110 transition-transform">
          <FaTerminal size={120} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-6">Experience Snapshot</h3>
        <ul className="space-y-4 relative z-10">
          {[
            'Full Stack Web Development',
            'IT Support & Infrastructure',
            'Database Management (MySQL, Sequelize)',
            'React.js & Modern Frontend',
            'Node.js Backend Systems'
          ].map((item, i) => (
            <li key={i} className="flex items-center space-x-3 text-gray-300">
              <span className="w-1.5 h-1.5 bg-portfolio-tech rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
