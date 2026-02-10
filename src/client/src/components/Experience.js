import React from 'react';


const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center justify-between w-full mb-12 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="hidden md:block w-5/12"></div>

      <div className="z-20 flex items-center justify-center w-12 h-12 bg-portfolio-navy border-2 border-portfolio-tech rounded-full shadow-xl">
        <div className="w-4 h-4 bg-portfolio-tech rounded-full animate-pulse"></div>
      </div>

      <div className={`w-full md:w-5/12 bg-portfolio-blue p-6 rounded-xl border border-portfolio-blue hover:border-portfolio-tech/30 transition-all shadow-lg shadow-black/40`}>
        <div className="flex flex-col space-y-2">
          <span className="text-portfolio-tech font-mono text-sm tracking-widest uppercase">
            {new Date(item.date_from).toLocaleDateString()} - {item.date_to ? new Date(item.date_to).toLocaleDateString() : 'Present'}
          </span>
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <h4 className="text-lg text-gray-400 font-medium italic">{item.company_or_school}</h4>
          <p className="text-gray-400 mt-4 leading-relaxed">
            {item.description}
          </p>
          {item.meta && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.meta.map((m, idx) => (
                <span key={idx} className="px-2 py-1 bg-black/50 text-portfolio-tech text-xs rounded border border-portfolio-tech/20">
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
    <div className="space-y-24">
      {/* Work Experience */}
      <div className="space-y-12">
        <div className="flex items-center space-x-4">
          <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">Work Experience</h2>
          <div className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="relative wrap overflow-hidden p-4">
          <div className="absolute border-opacity-20 border-portfolio-tech h-full border left-1/2 hidden md:block"></div>
          {work.length > 0 ? (
            work.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-500 italic">No work experience entries yet.</p>
          )}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-12">
        <div className="flex items-center space-x-4 flex-row-reverse space-x-reverse">
          <h2 className="text-4xl font-bold border-b-4 border-portfolio-tech pb-2">Education</h2>
          <div className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="relative wrap overflow-hidden p-4">
          <div className="absolute border-opacity-20 border-portfolio-tech h-full border left-1/2 hidden md:block"></div>
          {education.length > 0 ? (
            education.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-500 italic">No education entries yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
