import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ data }) => {
  const [selectedAlbum, setSelectedAlbum] = useState('All');

  const albums = ['All', ...new Set(data.map(item => item.album_name))];
  const filteredImages = selectedAlbum === 'All'
    ? data
    : data.filter(item => item.album_name === selectedAlbum);

  return (
    <div className="space-y-12 py-12">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-1">
          <div className="w-1 h-1 bg-gaming-neon"></div>
          <div className="w-1 h-8 bg-gaming-neon/50"></div>
          <div className="w-1 h-1 bg-gaming-neon"></div>
        </div>
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white font-tech">VISUAL_INTEL</h2>
          <p className="text-[10px] text-gaming-neon font-mono tracking-[0.5em] opacity-50 uppercase">Sub-Routine: Data_Visualization</p>
        </div>
        <div className="h-px bg-gradient-to-r from-gaming-neon/50 to-transparent flex-1"></div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {albums.map((album, idx) => (
          <motion.button
            key={album}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedAlbum(album)}
            className={`px-6 py-2 border font-tech text-[10px] uppercase tracking-widest transition-all relative overflow-hidden group ${selectedAlbum === album
              ? 'bg-gaming-neon text-black border-gaming-neon font-black'
              : 'text-gray-400 border-gaming-neon/20 hover:border-gaming-neon/50'
              }`}
          >
            <span className="relative z-10">{album}</span>
            {selectedAlbum === album && <div className="absolute inset-0 bg-white/20 animate-pulse"></div>}
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gaming-neon/40 group-hover:border-gaming-neon"></div>
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredImages.length > 0 ? (
            filteredImages.map((image, idx) => (
              <motion.div
                key={image.id || idx}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="aspect-square bg-gaming-obsidian overflow-hidden group relative border border-gaming-neon/10 hover:border-gaming-neon/60 transition-all cursor-crosshair hud-panel"
              >
                <img
                  src={`http://localhost:5000${image.image_path}`}
                  alt={image.album_name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
                />

                {/* HUD Elements Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="scan-line-active"></div>
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-gaming-neon uppercase">IMG_ID: {image.id || 'N/A'}</div>
                  <div className="absolute bottom-2 right-2 text-[8px] font-mono text-gaming-neon uppercase">ALBUM: {image.album_name}</div>
                </div>

                <div className="absolute inset-0 bg-gaming-neon/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <div className="border border-gaming-neon px-3 py-1 bg-black/60">
                    <span className="text-white font-tech text-[10px] uppercase tracking-widest font-black">Analyze_Data</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 border border-dashed border-gaming-neon/20 text-center">
              <p className="text-gaming-neon/40 font-tech uppercase tracking-widest animate-pulse font-mono">Archive empty. Waiting for satellite uplink...</p>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Gallery;
