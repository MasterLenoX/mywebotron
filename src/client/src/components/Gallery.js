import React, { useState } from 'react';

const Gallery = ({ data }) => {
  const [selectedAlbum, setSelectedAlbum] = useState('All');

  const albums = ['All', ...new Set(data.map(item => item.album_name))];
  const filteredImages = selectedAlbum === 'All'
    ? data
    : data.filter(item => item.album_name === selectedAlbum);

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-6">
        <div className="w-2 h-10 bg-gaming-neon"></div>
        <h2 className="text-5xl font-bold uppercase tracking-tighter text-white font-tech">Visual <span className="text-gaming-neon font-light">// Intel</span></h2>
        <div className="h-px bg-gaming-neon/20 flex-1"></div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {albums.map(album => (
          <button
            key={album}
            onClick={() => setSelectedAlbum(album)}
            className={`px-6 py-2 rounded-none border font-tech text-[10px] uppercase tracking-widest transition-all ${selectedAlbum === album
              ? 'bg-gaming-neon text-black border-gaming-neon neon-border'
              : 'text-gray-400 border-gaming-neon/20 hover:border-gaming-neon/50'
              }`}
          >
            {album}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image.id} className="aspect-square glass-morphism rounded-none overflow-hidden group relative border border-gaming-neon/10 hover:border-gaming-neon transition-all scanline">
              <img
                src={`http://localhost:5000${image.image_path}`}
                alt={image.album_name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gaming-neon/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 backdrop-blur-[2px]">
                <span className="text-white font-tech text-xs uppercase tracking-widest bg-black/80 px-3 py-1 border border-gaming-neon">{image.album_name}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 font-tech uppercase tracking-widest italic">No data retrieved.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
