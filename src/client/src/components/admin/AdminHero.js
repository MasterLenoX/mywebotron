import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrashAlt, FaUpload, FaSave } from 'react-icons/fa/index';

const AdminHero = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    typewriting_text: [''],
    profile_image: null
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/hero');
        if (res.data) {
          setFormData({
            ...res.data,
            typewriting_text: res.data.typewriting_text || ['']
          });
          if (res.data.profile_image) {
            setPreview(`http://localhost:5000${res.data.profile_image}`);
          }
        }
      } catch (err) {
        console.error('Error fetching hero:', err);
      }
    };
    fetchHero();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextChange = (index, value) => {
    const newTexts = [...formData.typewriting_text];
    newTexts[index] = value;
    setFormData({ ...formData, typewriting_text: newTexts });
  };

  const addText = () => {
    setFormData({ ...formData, typewriting_text: [...formData.typewriting_text, ''] });
  };

  const removeText = (index) => {
    const newTexts = formData.typewriting_text.filter((_, i) => i !== index);
    setFormData({ ...formData, typewriting_text: newTexts });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profile_image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('first_name', formData.first_name);
    data.append('last_name', formData.last_name);
    data.append('typewriting_text', JSON.stringify(formData.typewriting_text));
    if (formData.profile_image instanceof File) {
      data.append('profile_image', formData.profile_image);
    }

    try {
      await axios.put('http://localhost:5000/api/hero', data);
      alert('Hero updated successfully!');
    } catch (err) {
      console.error('Error updating hero:', err);
      alert('Failed to update hero.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">First Name</label>
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase">Last Name</label>
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-gray-400 uppercase">Typewriting Texts</label>
              <button
                type="button"
                onClick={addText}
                className="p-1 bg-portfolio-tech text-black rounded hover:bg-opacity-80 transition-all"
              >
                <FaPlus size={16} />
              </button>
            </div>
            {formData.typewriting_text.map((text, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  value={text}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                  placeholder={`Text ${index + 1}`}
                  className="flex-1 bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
                />
                <button
                  type="button"
                  onClick={() => removeText(index)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded"
                >
                  <FaTrashAlt size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <label className="text-sm font-bold text-gray-400 uppercase self-start">Profile Image</label>
          <div className="w-64 h-80 bg-portfolio-blue rounded-lg border-2 border-dashed border-gray-700 flex items-center justify-center relative overflow-hidden group">
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <FaUpload className="text-gray-600" size={48} />
            )}
            <input
              type="file"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="text-white text-xs font-bold uppercase">Change Image</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2"
      >
        <FaSave size={20} />
        <span>{loading ? 'SAVING...' : 'SAVE CHANGES'}</span>
      </button>
    </form>
  );
};

export default AdminHero;
