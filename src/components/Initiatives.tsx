import React from 'react';

const initiativesData = [
  {
    title: 'Campus to Corporate',
    description: 'The Campus to Corporate initiative by Garje Marathi Global is designed to help students transition smoothly from academic environments to professional',
    image: '/images/campus-corporate.jpg',
    backgroundColor: 'bg-orange-500',
  },
  {
    title: 'Chamber of Commerce',
    description: 'The Chamber of Commerce by Garje Marathi Global is dedicated to fostering business growth and professional collaboration within the global Marathi',
    image: '/images/chamber-commerce.jpg',
    backgroundColor: 'bg-blue-600',
  },
  {
    title: 'Maha Marketplace',
    description: 'The Maha Marketplace is a platform created by Garje Marathi Global that aims to showcase and export products from every district of Maharashtra to',
    image: '/images/maha-marketplace.jpg',
    backgroundColor: 'bg-purple-600',
  },
  {
    title: 'Mentor Connect',
    description: 'The Mentor Connect Program by Garje Marathi Global aims to bridge the gap between successful professionals and those aspiring to achieve similar',
    image: '/images/mentor-connect.jpg',
    backgroundColor: 'bg-gray-700',
  },
  {
    title: 'Professional Network',
    description: 'A comprehensive networking platform connecting Marathi professionals across various industries and geographical boundaries',
    image: '/images/professional-network.jpg',
    backgroundColor: 'bg-green-600',
  },
  {
    title: 'Startup Incubator',
    description: 'Supporting and nurturing innovative Marathi entrepreneurs by providing mentorship, resources, and funding opportunities',
    image: '/images/startup-incubator.jpg',
    backgroundColor: 'bg-indigo-600',
  },
  {
    title: 'Cultural Exchange',
    description: 'Promoting Marathi culture, language, and heritage through global events, workshops, and collaborative programs',
    image: '/images/cultural-exchange.jpg',
    backgroundColor: 'bg-pink-600',
  },
  {
    title: 'Global Education',
    description: 'Facilitating educational opportunities and scholarships for Marathi students pursuing higher education internationally',
    image: '/images/global-education.jpg',
    backgroundColor: 'bg-teal-600',
  }
];

const InitiativesSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          Initiatives
        </h1>
        <div className="h-1 w-32 md:w-64 bg-[#ed9702] mx-auto rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {initiativesData.map((initiative, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <div className={`relative h-64 w-full ${initiative.backgroundColor}`}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute top-4 left-4 text-white text-2xl font-bold z-10">
                {initiative.title}
              </div>
            </div>
            <div className="p-6 bg-white">
              <p className="text-gray-600 mb-4">
                {initiative.description}
              </p>
              <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativesSection;