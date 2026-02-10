import React, { useState } from 'react';
import AdminHero from '../components/admin/AdminHero';
import AdminSkills from '../components/admin/AdminSkills';
import AdminGallery from '../components/admin/AdminGallery';
import AdminProjects from '../components/admin/AdminProjects';
import AdminTimeline from '../components/admin/AdminTimeline';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Hero');

  const sections = ['Hero', 'Skills', 'Gallery', 'Projects', 'Timeline'];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-portfolio-blue pb-4">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <div className="bg-portfolio-navy px-4 py-2 rounded-lg border border-portfolio-tech/30">
          <span className="text-portfolio-tech text-sm font-mono tracking-tighter">AUTHENTICATED AS ADMIN</span>
        </div>
      </div>

      <div className="flex space-x-2">
        {sections.map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-6 py-2 rounded-lg transition-all font-bold ${activeSection === section
                ? 'bg-portfolio-tech text-black'
                : 'bg-portfolio-blue text-gray-400 hover:bg-portfolio-blue/80'
              }`}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="bg-portfolio-navy p-8 rounded-xl border border-portfolio-blue min-h-[60vh]">
        {activeSection === 'Hero' && <AdminHero />}
        {activeSection === 'Skills' && <AdminSkills />}
        {activeSection === 'Gallery' && <AdminGallery />}
        {activeSection === 'Projects' && <AdminProjects />}
        {activeSection === 'Timeline' && <AdminTimeline />}
      </div>
    </div>
  );
};

export default AdminDashboard;
