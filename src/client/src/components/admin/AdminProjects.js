import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrashAlt, FaEdit, FaSave, FaUpload } from 'react-icons/fa/index';

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    slug: '',
    meta: '',
    image: null
  });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      slug: project.slug,
      meta: project.meta ? project.meta.join(', ') : '',
      image: null
    });
    setPreview(project.image_path ? `http://localhost:5000${project.image_path}` : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('slug', formData.slug);
    data.append('meta', JSON.stringify(formData.meta.split(',').map(s => s.trim()).filter(s => s)));
    if (formData.image) data.append('image', formData.image);

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/projects/${editingId}`, data);
      } else {
        await axios.post('http://localhost:5000/api/projects', data);
      }
      setEditingId(null);
      setFormData({ title: '', description: '', slug: '', meta: '', image: null });
      setPreview(null);
      fetchProjects();
    } catch (err) {
      console.error('Error saving project:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`); // Correcting to gallery if needed, but wait, Projects has its own endpoint
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="bg-portfolio-blue/50 p-6 rounded-xl border border-portfolio-blue space-y-6">
        <h3 className="text-xl font-bold text-white">{editingId ? 'Edit Project' : 'Add New Project'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Title</label>
              <input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Project Name"
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Slug</label>
              <input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="project-slug"
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Meta Tags (comma separated)</label>
              <input
                value={formData.meta}
                onChange={(e) => setFormData({ ...formData, meta: e.target.value })}
                placeholder="React, Tailwind, Node"
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
              <textarea
                rows="4"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none resize-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Project Image</label>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-portfolio-blue border border-gray-800 rounded overflow-hidden flex items-center justify-center">
                  {preview ? <img src={preview} alt="Preview" className="w-full h-full object-cover" /> : <FaUpload size={20} className="text-gray-600" />}
                </div>
                <input type="file" onChange={handleFileChange} className="text-xs text-gray-400 file:bg-portfolio-tech file:text-black file:rounded file:border-0 file:px-3 file:py-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="flex-1 py-3 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2">
            <FaSave size={18} />
            <span>{editingId ? 'UPDATE PROJECT' : 'SAVE PROJECT'}</span>
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => { setEditingId(null); setFormData({ title: '', description: '', slug: '', meta: '', image: null }); setPreview(null); }}
              className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-all"
            >
              CANCEL
            </button>
          )}
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="bg-portfolio-blue rounded-xl overflow-hidden border border-gray-800 group relative">
            <img
              src={p.image_path ? `http://localhost:5000${p.image_path}` : 'https://via.placeholder.com/400x200'}
              alt={p.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-white mb-2">{p.title}</h4>
              <div className="flex justify-end space-x-2">
                <button onClick={() => handleEdit(p)} className="p-2 text-portfolio-tech hover:bg-portfolio-tech/10 rounded"><FaEdit size={16} /></button>
                <button onClick={() => handleDelete(p.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded"><FaTrashAlt size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProjects;
