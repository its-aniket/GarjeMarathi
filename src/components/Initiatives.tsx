import { initiativesData } from '@/constants';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col h-full"
          >
            <div className="relative h-64 w-full">
              <Image
                src={initiative.image}
                alt={initiative.title}
                fill
                className="object-cover"
              />
              
              <div className="absolute top-4 left-4 text-white text-2xl font-bold z-10">
                
              </div>
            </div>
            <div className="p-6 bg-white flex-grow flex flex-col justify-between">
              <p className="text-gray-600 mb-4 line-clamp-3 h-20">
                {initiative.description}
              </p>
              <Link href={initiative.href}>
                <button className="text-orange-500 font-semibold hover:text-orange-600 hover:cursor-pointer transition-colors">
                  Read More →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InitiativesSection;