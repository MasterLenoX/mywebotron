import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, index, isEven }) => {
  return (
    <div className={`flex items-center justify-between w-full mb-16 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>
      <div className="hidden md:block w-5/12"></div>

      <div className="z-20 flex items-center justify-center w-12 h-12 relative mb-8 md:mb-0">
        <div className="absolute inset-0 border border-gaming-neon/20 rotate-45 group-hover:border-gaming-neon transition-colors"></div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-3 h-3 bg-gaming-neon rotate-45 shadow-[0_0_15px_#00f3ff]"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`w-full md:w-5/12 hud-panel p-8 group relative overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gaming-neon/20 to-transparent"></div>
        <div className="flex flex-col space-y-3 relative z-10">
          <div className="flex justify-between items-center text-gaming-neon/60 font-mono text-[9px] tracking-[0.2em] uppercase">
            <span>DATA_LOG: {new Date(item.date_from).getFullYear()}__{item.date_to ? new Date(item.date_to).getFullYear() : 'ACTIVE'}</span>
            <span className="text-[10px] font-bold">SEC_LEVEL: 0{index + 1}</span>
          </div>

          <h3 className="text-2xl font-black font-tech uppercase tracking-tighter text-white group-hover:text-gaming-neon transition-colors">{item.title}</h3>
          <h4 className="text-xs text-gaming-neon font-tech uppercase tracking-widest bg-gaming-neon/10 px-2 py-1 inline-block w-fit">{item.company_or_school}</h4>

          <p className="text-gray-400 text-sm leading-relaxed font-light font-mono italic mt-4 opacity-80">
            {item.description}
          </p>

          {item.meta && (
            <div className="flex flex-wrap gap-2 mt-6">
              {item.meta.map((m, idx) => (
                <span key={idx} className="px-2 py-0.5 border border-gaming-neon/10 text-gaming-neon/60 text-[9px] font-mono uppercase tracking-widest hover:border-gaming-neon hover:text-gaming-neon transition-all">
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Decorative HUD detail */}
        <div className="absolute bottom-2 right-2 opacity-10 font-mono text-[8px] text-gaming-neon">
          TYPE: {item.type.toUpperCase()}_ENTRY
        </div>
      </motion.div>
    </div>
  );
};

const Experience = ({ data }) => {
  const work = data.filter(i => i.type === 'work');
  const education = data.filter(i => i.type === 'education');

  const SectionHeader = ({ title, subtitle, reversed }) => (
    <div className={`flex items-center space-x-4 ${reversed ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className="flex flex-col space-y-1">
        <div className="w-1 h-1 bg-gaming-neon"></div>
        <div className="w-1 h-8 bg-gaming-neon/50"></div>
        <div className="w-1 h-1 bg-gaming-neon"></div>
      </div>
      <div className={reversed ? 'text-right' : ''}>
        <h2 className="text-4xl font-black uppercase tracking-tighter text-white font-tech">{title}</h2>
        <p className="text-[10px] text-gaming-neon font-mono tracking-[0.5em] opacity-50 uppercase">{subtitle}</p>
      </div>
      <div className="h-px bg-gradient-to-r from-gaming-neon/50 to-transparent flex-1"></div>
    </div>
  );

  return (
    <div className="space-y-32 py-12">
      {/* Work Experience */}
      <div className="space-y-16">
        <SectionHeader title="OPERATIONAL_HISTORY" subtitle="Sub-Routine: Career_Logs" />

        <div className="relative wrap overflow-hidden">
          <div className="absolute border-opacity-10 border-gaming-neon h-full border-l left-1/2 hidden md:block opacity-20"></div>
          {work.length > 0 ? (
            work.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isEven={index % 2 === 0} />
            ))
          ) : (
            <div className="py-20 border border-dashed border-gaming-neon/20 text-center">
              <p className="text-gaming-neon/40 font-tech uppercase tracking-widest animate-pulse">Scanning for experience logs...</p>
            </div>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-16">
        <SectionHeader title="INTELLIGENCE_ACQUISITION" subtitle="Sub-Routine: Academia_Records" reversed />

        <div className="relative wrap overflow-hidden">
          <div className="absolute border-opacity-10 border-gaming-neon h-full border-l left-1/2 hidden md:block opacity-20"></div>
          {education.length > 0 ? (
            education.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isEven={index % 2 !== 0} />
            ))
          ) : (
            <div className="py-20 border border-dashed border-gaming-neon/20 text-center">
              <p className="text-gaming-neon/40 font-tech uppercase tracking-widest animate-pulse">No academic data found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
