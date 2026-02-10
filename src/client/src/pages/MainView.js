import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainView = () => {
  const [data, setData] = useState({
    hero: null,
    skills: [],
    timeline: [],
    projects: [],
    gallery: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hero, skills, timeline, projects, gallery] = await Promise.all([
          axios.get('http://localhost:5000/api/hero'),
          axios.get('http://localhost:5000/api/skills'),
          axios.get('http://localhost:5000/api/timeline'),
          axios.get('http://localhost:5000/api/projects'),
          axios.get('http://localhost:5000/api/gallery')
        ]);

        setData({
          hero: hero.data,
          skills: skills.data,
          timeline: timeline.data,
          projects: projects.data,
          gallery: gallery.data
        });
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-24">
      <section id="home">
        <Hero data={data.hero} />
      </section>

      <section id="about">
        <About data={data.hero} />
      </section>

      <section id="skills">
        <Skills skills={data.skills} />
      </section>

      <section id="experience">
        <Experience data={data.timeline} />
      </section>

      <section id="projects">
        <Projects data={data.projects} />
      </section>

      <section id="gallery">
        <Gallery data={data.gallery} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default MainView;
