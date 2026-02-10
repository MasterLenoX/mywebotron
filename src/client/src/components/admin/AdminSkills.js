import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrashAlt, FaSave } from 'react-icons/fa';

const AdminSkills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ category: 'Frontend', name: '', meta: '' });
  const [loading, setLoading] = useState(false);

  const categories = ['Frontend', 'Backend', 'Games', 'Other', 'Position Expertise'];

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/skills');
      setSkills(res.data);
    } catch (err) {
      console.error('Error fetching skills:', err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newSkill.name) return;
    try {
      const metaArray = newSkill.meta.split(',').map(s => s.trim()).filter(s => s);
      await axios.post('http://localhost:5000/api/skills', {
        ...newSkill,
        meta: metaArray
      });
      setNewSkill({ category: 'Frontend', name: '', meta: '' });
      fetchSkills();
    } catch (err) {
      console.error('Error adding skill:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this skill?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/skills/${id}`);
      fetchSkills();
    } catch (err) {
      console.error('Error deleting skill:', err);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-portfolio-blue/50 p-6 rounded-xl border border-portfolio-blue items-end">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Category</label>
          <select
            value={newSkill.category}
            onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
            className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Skill Name</label>
          <input
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            placeholder="React.js"
            className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">Meta (comma separated)</label>
          <input
            value={newSkill.meta}
            onChange={(e) => setNewSkill({ ...newSkill, meta: e.target.value })}
            placeholder="Redux, Hooks..."
            className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
          />
        </div>
        <button type="submit" className="py-2 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2">
          <FaPlus size={18} />
          <span>ADD SKILL</span>
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase">Category</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase">Name</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase">Meta</th>
              <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map(skill => (
              <tr key={skill.id} className="border-b border-gray-900 hover:bg-portfolio-blue/20 transition-colors">
                <td className="py-4 px-4"><span className="text-portfolio-tech text-xs bg-portfolio-tech/10 px-2 py-1 rounded">{skill.category}</span></td>
                <td className="py-4 px-4 text-white font-medium">{skill.name}</td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-1">
                    {skill.meta && skill.meta.map((m, i) => (
                      <span key={i} className="text-[10px] text-gray-500 border border-gray-800 px-1 rounded">{m}</span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <button
                    onClick={() => handleDelete(skill.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSkills;
