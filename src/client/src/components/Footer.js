import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-24 py-12 border-t border-gray-900 text-center space-y-4">
      <p className="text-gray-500 text-sm">
        Designed & Built by <span className="text-portfolio-tech">Leonard James Emperado</span>
      </p>
      <div className="flex justify-center space-x-6 text-gray-500">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-tech transition-colors text-xs uppercase tracking-widest font-bold">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-tech transition-colors text-xs uppercase tracking-widest font-bold">LinkedIn</a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-tech transition-colors text-xs uppercase tracking-widest font-bold">Instagram</a>
      </div>
      <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] pt-4">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
