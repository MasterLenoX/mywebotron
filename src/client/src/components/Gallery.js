import React, { useState } from 'react';

const Gallery = ({ data }) => {
  const [selectedAlbum, setSelectedAlbum] = useState('All');

  const albums = ['All', ...new Set(data.map(item => item.album_name))];
  const filteredImages = selectedAlbum === 'All'
    ? data
    : data.filter(item => item.album_name === selectedAlbum);

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">Gallery</h2>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {albums.map(album => (
          <button
            key={album}
            onClick={() => setSelectedAlbum(album)}
            className={`px-4 py-2 rounded-full border transition-all ${selectedAlbum === album
                ? 'bg-portfolio-tech text-black border-portfolio-tech'
                : 'text-gray-400 border-gray-800 hover:border-portfolio-tech/50'
              }`}
          >
            {album}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image.id} className="aspect-square bg-portfolio-blue rounded-lg overflow-hidden group relative">
              <img
                src={`http://localhost:5000${image.image_path}`}
                alt={image.album_name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <span className="text-portfolio-tech font-bold text-center">{image.album_name}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 italic">No images in the gallery yet.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
