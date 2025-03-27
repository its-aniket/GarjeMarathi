import React from 'react';

const institutionLogos = [
    { name: 'Parle Tilak Vidyalaya Association', logo: '/images/Collaboration_Logo/PTV_garjemarathi.webp' },
    { name: 'Savitribai Phule Pune University', logo: '/images/Collaboration_Logo/SPPU_garjemarathi.webp' },
    { name: 'College of Engineering Pune', logo: '/images/Collaboration_Logo/COEP_garjemarathi.webp' },
    { name: 'Symbiosis International University Pune', logo: '/images/Collaboration_Logo/Sybi_garjemarathi.webp' },
    { name: 'Marathwada Accelerator for Growth and Incubation Council (MAGIC) Aurangabad', logo: '/images/Collaboration_Logo/MAGIC_garjemarathi.webp' },
    { name: 'Dr. Babasaheb Ambedkar Marathwada University Aurangabad', logo: '/images/Collaboration_Logo/Dr._Babasaheb_Ambedkar_Marathawada_University_garjemarathi.webp' },
    { name: 'Marathi Vidnyan Parishad', logo: '/images/Collaboration_Logo/marathi_vidnyan_parishad.webp' },
    { name: 'Bedekar Institute of Management and Engineering College Thane', logo: '/images/Collaboration_Logo/drvnbrims_garjemarathi.webp' },
    { name: "VPM's Maharshi Parshuram College of Engineering, Velneshwar", logo: '/images/Collaboration_Logo/VPM_garjemarathi.webp' },
    { name: 'Vanvasi Kalyan Ashram', logo: '/images/Collaboration_Logo/VKA_garjemarathi.webp' },
    { name: 'Vivekanand Kendra Vidyalaya', logo: '/images/Collaboration_Logo/VKV_garjemarathi.webp' },
    { name: 'Leva Chambers of Commerce, Industries & Agriculture', logo: '/images/Collaboration_Logo/LCCIA_garjemarathi.webp' },
    { name: 'New Arts, Commerce and Science College Ahmednagar Jilha Maratha Vidya Prasarak Samaj', logo: '/images/Collaboration_Logo/NACSC_garjemarathi.webp' },
    { name: 'Gharda Institute of Technology, Lavel, Khed', logo: '/images/Collaboration_Logo/GIT_garjemarathi.webp' },
    { name: 'Maharashtra Economic Development Council', logo: '/images/Collaboration_Logo/MEDC_garjemarathi.webp' },
    { name: 'Pimpri Chinchwad University Pune', logo: '/images/Collaboration_Logo/PCU_garjemarathi.webp' },
    { name: 'MIT-WPU Pune', logo: '/images/Collaboration_Logo/MIT_garjemarathi.webp' }
  ];

const Collaboration = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          Our Institutional Collaborations
        </h1>
        <div className="h-1 w-32 md:w-64 bg-[#ed9702] mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {institutionLogos.map((institution, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={institution.logo} 
              alt={institution.name}
              className="max-w-full max-h-24 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              title={institution.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaboration;