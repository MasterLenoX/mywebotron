import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaUpload } from 'react-icons/fa/index';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [albumName, setAlbumName] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/gallery');
      setImages(res.data);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!albumName || selectedFiles.length === 0) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('album_name', albumName);
    selectedFiles.forEach(file => {
      formData.append('images', file);
    });

    try {
      await axios.post('http://localhost:5000/api/gallery', formData);
      setAlbumName('');
      setSelectedFiles([]);
      fetchImages();
    } catch (err) {
      console.error('Error uploading images:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`);
      fetchImages();
    } catch (err) {
      console.error('Error deleting image:', err);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleUpload} className="bg-portfolio-blue/50 p-6 rounded-xl border border-portfolio-blue space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Album Name</label>
            <input
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
              placeholder="e.g., Vacation 2023"
              className="w-full bg-portfolio-blue border border-gray-800 rounded px-4 py-2 text-white focus:border-portfolio-tech outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">Select Images (Max 6)</label>
            <div className="relative border border-gray-800 rounded bg-portfolio-blue p-2">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-xs file:font-bold file:bg-portfolio-tech file:text-black hover:file:bg-opacity-80"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading || !albumName || selectedFiles.length === 0}
          className="w-full py-3 bg-portfolio-tech text-black font-bold rounded hover:bg-opacity-80 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          <FaUpload size={18} />
          <span>{loading ? 'UPLOADING...' : 'UPLOAD TO ALBUM'}</span>
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map(img => (
          <div key={img.id} className="aspect-square relative group bg-portfolio-blue rounded-lg overflow-hidden border border-gray-800">
            <img
              src={`http://localhost:5000${img.image_path}`}
              alt={img.album_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
              <span className="text-[10px] text-portfolio-tech font-bold uppercase mb-2">{img.album_name}</span>
              <button
                onClick={() => handleDelete(img.id)}
                className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                title="Delete"
              >
                <FaTrashAlt size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGallery;
