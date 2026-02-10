import React from 'react';


const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-between w-full mb-16 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="hidden md:block w-5/12"></div>

      <div className="z-20 flex items-center justify-center w-12 h-12 glass-morphism border-2 border-gaming-neon rounded-none rotate-45 group">
        <div className="w-4 h-4 bg-gaming-neon -rotate-45 animate-pulse shadow-[0_0_10px_#00f3ff]"></div>
      </div>

      <div className={`w-full md:w-5/12 glass-morphism p-8 rounded-none border border-gaming-neon/10 hover:border-gaming-neon transition-all relative group overflow-hidden`}>
        <div className="absolute top-0 left-0 w-2 h-full bg-gaming-neon opacity-20 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex flex-col space-y-3 relative z-10">
          <span className="text-gaming-neon font-tech text-[10px] tracking-[0.3em] uppercase">
            {new Date(item.date_from).getFullYear()} // {item.date_to ? new Date(item.date_to).getFullYear() : 'ACTIVE'}
          </span>
          <h3 className="text-2xl font-bold font-tech uppercase tracking-tight text-white">{item.title}</h3>
          <h4 className="text-sm text-gaming-neon/70 font-tech uppercase tracking-widest">{item.company_or_school}</h4>
          <p className="text-gray-400 mt-4 leading-relaxed font-light">
            {item.description}
          </p>
          {item.meta && (
            <div className="flex flex-wrap gap-2 mt-6">
              {item.meta.map((m, idx) => (
                <span key={idx} className="px-2 py-1 bg-gaming-neon/5 text-gaming-neon text-[10px] font-tech border border-gaming-neon/10 uppercase tracking-widest">
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = ({ data }) => {
  const work = data.filter(i => i.type === 'work');
  const education = data.filter(i => i.type === 'education');

  return (
    <div className="space-y-32">
      {/* Work Experience */}
      <div className="space-y-16">
        <div className="flex items-center space-x-6">
          <div className="w-2 h-10 bg-gaming-neon"></div>
          <h2 className="text-5xl font-bold uppercase tracking-tighter text-white font-tech">Career <span className="text-gaming-neon font-light">// Logs</span></h2>
          <div className="h-px bg-gaming-neon/20 flex-1"></div>
        </div>

        <div className="relative wrap overflow-hidden p-4">
          <div className="absolute border-opacity-10 border-gaming-neon h-full border left-1/2 hidden md:block"></div>
          {work.length > 0 ? (
            work.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-500 font-tech italic uppercase tracking-widest">No entries found.</p>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-16">
        <div className="flex items-center space-x-6 flex-row-reverse space-x-reverse">
          <div className="w-2 h-10 bg-gaming-neon"></div>
          <h2 className="text-5xl font-bold uppercase tracking-tighter text-white font-tech text-right">Intel <span className="text-gaming-neon font-light">// Academia</span></h2>
          <div className="h-px bg-gaming-neon/20 flex-1"></div>
        </div>

        <div className="relative wrap overflow-hidden p-4">
          <div className="absolute border-opacity-10 border-gaming-neon h-full border left-1/2 hidden md:block"></div>
          {education.length > 0 ? (
            education.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-500 font-tech italic uppercase tracking-widest">No entries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
