import React from 'react';

const GMGImpact = () => {
  return (
    <div className="bg-[#ed9702] text-white py-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 tracking-wide">
      Marathi Community Milestones
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white mb-3">
              8+
            </span>
            <span className="text-xl md:text-2xl text-white text-opacity-80 uppercase tracking-wider">
              Years
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white mb-3">
              15,000+
            </span>
            <span className="text-xl md:text-2xl text-white text-opacity-80 uppercase tracking-wider">
              Members
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white mb-3">
              120+
            </span>
            <span className="text-xl md:text-2xl text-white text-opacity-80 uppercase tracking-wider">
              Mentors
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-white mb-3">
              25+
            </span>
            <span className="text-xl md:text-2xl text-white text-opacity-80 uppercase tracking-wider">
              Chapters
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GMGImpact;