import React from 'react';
import { FaDownload, FaTerminal } from 'react-icons/fa';

const About = ({ data }) => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">About Me</h2>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            Hello! I'm Leonard, a passionate Software Engineer based in the Philippines.
            I enjoy creating things that live on the internet, whether that be websites,
            applications, or anything in between.
          </p>
          <p>
            My journey into the world of technology started back in college when I decided
            to try editing custom themes for blogs — turns out hacking together HTML & CSS
            taught me a lot!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising
            agency, a start-up, and a huge corporation. My main focus these days is building
            accessible, inclusive products and digital experiences.
          </p>

          <div className="pt-4">
            <a
              href="/resume.pdf"
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
            <li className="flex items-start space-x-3">
              <span className="text-portfolio-tech mt-1">▹</span>
              <span>Web Development (Frontend & Backend)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-portfolio-tech mt-1">▹</span>
              <span>Full-stack Development (Node.js, React, SQL)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-portfolio-tech mt-1">▹</span>
              <span>IT Support & Troubleshooting</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-portfolio-tech mt-1">▹</span>
              <span>Systems Maintenance & Configuration</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
