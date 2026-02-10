import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrashAlt, FaEdit, FaSave, FaUpload, FaCalendarAlt } from 'react-icons/fa/index';

const AdminTimeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    type: 'work',
    title: '',
    company_or_school: '',
    date_from: '',
    date_to: '',
    description: '',
    meta: '',
    image: null
  });

  useEffect(() => {
    fetchTimeline();
  }, []);

  const fetchTimeline = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/timeline');
      setTimeline(res.data);
    } catch (err) {
      console.error('Error fetching timeline:', err);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      type: item.type,
      title: item.title,
      company_or_school: item.company_or_school,
      date_from: item.date_from ? item.date_from.split('T')[0] : '',
      date_to: item.date_to ? item.date_to.split('T')[0] : '',
      description: item.description || '',
      meta: item.meta ? item.meta.join(', ') : '',
      image: null
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'meta') {
        data.append(key, JSON.stringify((formData[key] || '').split(',').map(s => s.trim()).filter(s => s)));
      } else if (key === 'image') {
        if (formData[key]) data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/timeline/${editingId}`, data);
      } else {
        await axios.post('http://localhost:5000/api/timeline', data);
      }
      setEditingId(null);
      setFormData({ type: 'work', title: '', company_or_school: '', date_from: '', date_to: '', description: '', meta: '', image: null });
      fetchTimeline();
    } catch (err) {
      console.error('Error saving timeline item:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this entry?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/timeline/${id}`);
      fetchTimeline();
    } catch (err) {
      console.error('Error deleting timeline item:', err);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="bg-portfolio-blue/50 p-6 rounded-xl border border-portfolio-blue space-y-6">
        <h3 className="text-xl font-bold text-white">{editingId ? 'Edit Entry' : 'Add New Entry'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              >
                <option value="work">Work Experience</option>
                <option value="education">Education</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Title (Job or Course)</label>
              <input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Company or School</label>
              <input
                value={formData.company_or_school}
                onChange={(e) => setFormData({ ...formData, company_or_school: e.target.value })}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Date From</label>
                <input
                  type="date"
                  value={formData.date_from}
                  onChange={(e) => setFormData({ ...formData, date_from: e.target.value })}
                  className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">Date To</label>
                <input
                  type="date"
                  value={formData.date_to}
                  onChange={(e) => setFormData({ ...formData, date_to: e.target.value })}
                  className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Meta (comma separated)</label>
              <input
                value={formData.meta}
                onChange={(e) => setFormData({ ...formData, meta: e.target.value })}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase">Icon/Image</label>
              <input type="file" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} className="text-xs text-gray-400" />
            </div>
          </div>

          <div className="space-y-2 lg:col-span-1">
            <label className="text-xs font-bold text-gray-400 uppercase">Description</label>
            <textarea
              rows="6"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none resize-none"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="flex-1 py-3 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2">
            <FaSave size={18} />
            <span>{editingId ? 'UPDATE ENTRY' : 'SAVE ENTRY'}</span>
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => { setEditingId(null); setFormData({ type: 'work', title: '', company_or_school: '', date_from: '', date_to: '', description: '', meta: '', image: null }); }}
              className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-all"
            >
              CANCEL
            </button>
          )}
        </div>
      </form>

      <div className="space-y-4">
        {timeline.map(item => (
          <div key={item.id} className="bg-portfolio-blue p-4 rounded-xl border border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-portfolio-navy rounded-full flex items-center justify-center text-portfolio-tech border border-portfolio-tech/20">
                <FaCalendarAlt size={18} />
              </div>
              <div>
                <h4 className="font-bold text-white leading-tight">{item.title}</h4>
                <p className="text-xs text-portfolio-tech uppercase tracking-widest">{item.company_or_school} • {item.type}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(item)} className="p-2 text-portfolio-tech hover:bg-portfolio-tech/10 rounded"><FaEdit size={16} /></button>
              <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded"><FaTrashAlt size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTimeline;
