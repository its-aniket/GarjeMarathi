import React from "react";
import Image from "next/image";

const AboutUsInfo = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          About Garje Marathi Global Foundation
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-neutral-600 uppercase tracking-wider text-sm md:text-xl mb-8 px-4">
            आपल्या स्वतःची प्रगती करत असताना, आपल्या मराठी समाजाची.आपल्या
            महाराष्ट्राची.आपल्या कर्मभूमी आणि जन्मभूमीची सेवा करण्यासाठीच गर्जे
            मराठीचे अस्तित्व आहे.
          </p>
        </div>
        <div className="h-1 w-32 md:w-64 bg-[#ed9702] mx-auto rounded"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="text-gray-800 leading-relaxed">
          <p className="text-xl mb-6">
            Garje Marathi Global (GMG) is a non-profit institution, registered in California, USA and also Garje Marathi Global Foundation (GMGF) a Section 8 not for profit company registered in the state of Maharashtra, India.
          </p>
          
          <p className="text-xl mb-8">
            GMG has more than 15000 members connected across each corner of the world, and 30 location-based chapters. All these members have come together with one common agenda, which is “आपल्या स्वतःची प्रगती करत असताना, आपल्या मराठी समाजाची.आपल्या महाराष्ट्राची.आपल्या कर्मभूमी आणि जन्मभूमीची सेवा करण्यासाठीच गर्जे मराठीचे अस्तित्व आहे.” empowering the Marathi community globally.
          </p>
          
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Our Mission
          </h2>
          
          <ul className="space-y-4 text-xl pl-5 list-disc">
            <li>Unite Marathi people across the globe on a single platform</li>
            <li>Create robust support systems for youth, entrepreneurs, and professionals</li>
            <li>Develop channels to give back to Maharashtra</li>
            <li>Recognize and celebrate the global achievements of our community members</li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/images/garjemarathi_dyankosh.png"
            alt="Garje Marathi Global Foundation Logo"
            width={1000}
            height={1000}
            className="object-contain w-full max-w-2xl"
            style={{ 
              background: 'transparent',
              mixBlendMode: 'multiply'
            }}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;