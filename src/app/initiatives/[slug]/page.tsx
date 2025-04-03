"use client"
import Image from 'next/image';
import Link from 'next/link';
import { initiativesData } from '@/constants';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';



export default function InitiativePage() {
  const params = useParams();
  const { slug } = params;
  const initiative = initiativesData.find(initiative => initiative.slug === slug);
  
 



  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Initiative not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <Navbar />
      <div className="relative h-96 w-full mt-24">
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {/* Split text into paragraphs for better readability */}
              {initiative.pageText.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Join Button */}
            <div className="mt-12 text-center">
              <Link href={initiative.redirectHref}>
                <button className="bg-[#ed9702] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join This Initiative
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
