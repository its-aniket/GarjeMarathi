
import Image from 'next/image';
import Link from 'next/link';
import { initiativesData } from '@/constants';

type Props = {
  params: { 
    slug: string 
  }
};

export default function InitiativePage({ params }: Props) {
  const { slug } = params;
  
  const initiative = initiativesData.find(
    (item) => item.href === `/initiatives/${slug}`
  );

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
      <div className="relative h-96 w-full">
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            {initiative.title}
          </h1>
        </div>
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
              <Link href="/contact">
                <button className="bg-[#ed9702] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Join This Initiative
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// For Next.js App Router - generate paths from your data
export async function generateStaticParams() {
  return initiativesData.map((initiative) => ({
    slug: initiative.href.split('/').pop(),
  }));
}
